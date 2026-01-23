/**
 * Composant pour afficher du contenu markdown simple
 * Convertit markdown basique en HTML React
 */

interface MarkdownContentProps {
  content: string;
  className?: string;
}

export default function MarkdownContent({ content, className = '' }: MarkdownContentProps) {
  // Parser très simple de markdown
  const renderContent = (text: string) => {
    const lines = text.split('\n');
    const elements: React.ReactNode[] = [];
    let currentList: string[] = [];
    let inList = false;

    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={`ul-${elements.length}`} className="list-disc list-inside space-y-2 mb-4">
            {currentList.map((item, i) => (
              <li key={i}>{parseInline(item)}</li>
            ))}
          </ul>
        );
        currentList = [];
      }
    };

    const parseInline = (text: string) => {
      // Gras **texte**
      text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      // Italique *texte* (mais pas ** qui est déjà traité)
      text = text.replace(/(?<!\*)\*(?!\*)(.*?)\*(?!\*)/g, '<em>$1</em>');

      return <span dangerouslySetInnerHTML={{ __html: text }} />;
    };

    lines.forEach((line, index) => {
      // H1
      if (line.startsWith('# ')) {
        flushList();
        elements.push(
          <h1 key={index} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {line.substring(2)}
          </h1>
        );
      }
      // H2
      else if (line.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={index} className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
            {line.substring(3)}
          </h2>
        );
      }
      // H3
      else if (line.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={index} className="text-xl font-bold text-gray-900 mt-6 mb-3">
            {line.substring(4)}
          </h3>
        );
      }
      // Liste
      else if (line.startsWith('- ') || line.startsWith('* ')) {
        inList = true;
        currentList.push(line.substring(2));
      }
      // Ligne vide
      else if (line.trim() === '') {
        flushList();
        inList = false;
      }
      // Paragraphe normal
      else if (line.trim() !== '') {
        flushList();
        elements.push(
          <p key={index} className="mb-4 leading-relaxed">
            {parseInline(line)}
          </p>
        );
      }
    });

    // Flush any remaining list
    flushList();

    return elements;
  };

  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      {renderContent(content)}
    </div>
  );
}
