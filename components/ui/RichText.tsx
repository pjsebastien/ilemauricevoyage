interface RichTextProps {
  content: string;
  className?: string;
}

/**
 * Composant simple pour afficher du texte enrichi avec markdown basique
 */
export default function RichText({ content, className = '' }: RichTextProps) {
  // Parser markdown simple
  const parseContent = (text: string) => {
    const lines = text.split('\n');
    const result: React.ReactNode[] = [];
    let listItems: string[] = [];

    const flushList = () => {
      if (listItems.length > 0) {
        result.push(
          <ul key={`list-${result.length}`} className="list-disc list-inside space-y-2 mb-4 ml-4">
            {listItems.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: parseInline(item) }} />
            ))}
          </ul>
        );
        listItems = [];
      }
    };

    const parseInline = (line: string): string => {
      // Gras **texte**
      line = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      // Italique *texte*
      line = line.replace(/(?<!\*)\*(?!\*)(.*?)\*(?!\*)/g, '<em>$1</em>');
      return line;
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      // Titres H2
      if (trimmed.startsWith('## ')) {
        flushList();
        result.push(
          <h2 key={index} className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
            {trimmed.substring(3)}
          </h2>
        );
      }
      // Titres H3
      else if (trimmed.startsWith('### ')) {
        flushList();
        result.push(
          <h3 key={index} className="text-xl font-bold text-gray-900 mt-6 mb-3">
            {trimmed.substring(4)}
          </h3>
        );
      }
      // Liste
      else if (trimmed.startsWith('- ')) {
        listItems.push(trimmed.substring(2));
      }
      // Ligne vide
      else if (trimmed === '') {
        flushList();
      }
      // Paragraphe
      else if (trimmed !== '') {
        flushList();
        result.push(
          <p
            key={index}
            className="mb-4 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: parseInline(trimmed) }}
          />
        );
      }
    });

    flushList();
    return result;
  };

  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      {parseContent(content)}
    </div>
  );
}
