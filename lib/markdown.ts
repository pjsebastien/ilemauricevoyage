import fs from 'fs';
import path from 'path';

const contentDirectory = path.join(process.cwd(), 'content');

export interface MonthlyArticle {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  month: string;
  season: string;
  content: string;
}

/**
 * Simple frontmatter parser
 */
function parseFrontmatter(fileContent: string): { data: Record<string, string>; content: string } {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = fileContent.match(frontmatterRegex);

  if (!match) {
    return { data: {}, content: fileContent };
  }

  const frontmatterLines = match[1].split('\n');
  const data: Record<string, string> = {};

  frontmatterLines.forEach((line) => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      const value = line.substring(colonIndex + 1).trim().replace(/^["']|["']$/g, '');
      data[key] = value;
    }
  });

  return { data, content: match[2] };
}

/**
 * Basic markdown to HTML converter
 */
function markdownToHtml(markdown: string): string {
  let lines = markdown.split('\n');
  let html: string[] = [];
  let inList = false;
  let inTable = false;
  let tableLines: string[] = [];
  let currentParagraph: string[] = [];

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      const content = currentParagraph.join(' ').trim();
      if (content) {
        html.push(`<p>${processInlineElements(content)}</p>`);
      }
      currentParagraph = [];
    }
  };

  const processInlineElements = (text: string): string => {
    // Links
    text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
    // Bold
    text = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    // Italic (but not bold)
    text = text.replace(/(?<!\*)\*(?!\*)(.+?)\*(?!\*)/g, '<em>$1</em>');
    return text;
  };

  const processTable = () => {
    if (tableLines.length < 2) return;

    const headers = tableLines[0].split('|').filter(c => c.trim()).map(c => c.trim());
    const rows = tableLines.slice(2); // Skip header and separator

    let tableHtml = '<table><thead><tr>';
    headers.forEach(h => {
      tableHtml += `<th>${processInlineElements(h)}</th>`;
    });
    tableHtml += '</tr></thead><tbody>';

    rows.forEach(row => {
      const cells = row.split('|').filter(c => c.trim()).map(c => c.trim());
      tableHtml += '<tr>';
      cells.forEach(c => {
        tableHtml += `<td>${processInlineElements(c)}</td>`;
      });
      tableHtml += '</tr>';
    });

    tableHtml += '</tbody></table>';
    html.push(tableHtml);
    tableLines = [];
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Empty line
    if (!trimmed) {
      if (inTable) {
        inTable = false;
        processTable();
      }
      if (inList) {
        html.push('</ul>');
        inList = false;
      }
      flushParagraph();
      continue;
    }

    // Headers
    if (trimmed.startsWith('### ')) {
      flushParagraph();
      if (inList) { html.push('</ul>'); inList = false; }
      if (inTable) { inTable = false; processTable(); }
      html.push(`<h3>${processInlineElements(trimmed.substring(4))}</h3>`);
      continue;
    }
    if (trimmed.startsWith('## ')) {
      flushParagraph();
      if (inList) { html.push('</ul>'); inList = false; }
      if (inTable) { inTable = false; processTable(); }
      html.push(`<h2>${processInlineElements(trimmed.substring(3))}</h2>`);
      continue;
    }
    if (trimmed.startsWith('# ')) {
      flushParagraph();
      if (inList) { html.push('</ul>'); inList = false; }
      if (inTable) { inTable = false; processTable(); }
      html.push(`<h1>${processInlineElements(trimmed.substring(2))}</h1>`);
      continue;
    }

    // Table detection
    if (trimmed.includes('|')) {
      flushParagraph();
      if (inList) { html.push('</ul>'); inList = false; }

      if (!inTable) {
        inTable = true;
        tableLines = [];
      }
      tableLines.push(trimmed);
      continue;
    }

    // List items
    if (trimmed.startsWith('- ')) {
      flushParagraph();
      if (inTable) { inTable = false; processTable(); }

      if (!inList) {
        html.push('<ul>');
        inList = true;
      }
      html.push(`<li>${processInlineElements(trimmed.substring(2))}</li>`);
      continue;
    }

    // Regular paragraph text
    if (inList) {
      html.push('</ul>');
      inList = false;
    }
    if (inTable) {
      inTable = false;
      processTable();
    }

    currentParagraph.push(trimmed);
  }

  // Flush any remaining content
  if (inTable) {
    processTable();
  }
  if (inList) {
    html.push('</ul>');
  }
  flushParagraph();

  return html.join('\n');
}

/**
 * Get all monthly article slugs
 */
export function getAllMonthSlugs(): string[] {
  const quandPartirDir = path.join(contentDirectory, 'quand-partir');

  if (!fs.existsSync(quandPartirDir)) {
    return [];
  }

  const fileNames = fs.readdirSync(quandPartirDir);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));
}

/**
 * Get monthly article data by slug
 */
export async function getMonthlyArticle(slug: string): Promise<MonthlyArticle | null> {
  try {
    const fullPath = path.join(contentDirectory, 'quand-partir', `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Parse frontmatter
    const { data, content } = parseFrontmatter(fileContents);

    // Convert markdown to HTML
    const contentHtml = markdownToHtml(content);

    return {
      slug,
      title: data.title || '',
      metaTitle: data.metaTitle || data.title || '',
      metaDescription: data.metaDescription || '',
      month: data.month || '',
      season: data.season || '',
      content: contentHtml,
    };
  } catch (error) {
    console.error(`Error loading article ${slug}:`, error);
    return null;
  }
}

/**
 * Get all monthly articles
 */
export async function getAllMonthlyArticles(): Promise<MonthlyArticle[]> {
  const slugs = getAllMonthSlugs();
  const articles = await Promise.all(
    slugs.map((slug) => getMonthlyArticle(slug))
  );
  return articles.filter((article): article is MonthlyArticle => article !== null);
}
