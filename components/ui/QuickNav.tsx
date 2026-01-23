'use client';

interface QuickNavProps {
  sections: {
    id: string;
    label: string;
    icon?: string;
  }[];
  accentColor?: string;
}

/**
 * Menu de navigation rapide vers les sections de la page
 */
export default function QuickNav({ sections, accentColor = '#0891b2' }: QuickNavProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start gap-2 overflow-x-auto py-3 scrollbar-hide">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-white rounded-lg transition-all hover:scale-105"
              style={{
                backgroundColor: 'transparent',
                border: `1px solid ${accentColor}40`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = accentColor;
                e.currentTarget.style.borderColor = accentColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = `${accentColor}40`;
              }}
            >
              {section.icon && <span className="text-lg">{section.icon}</span>}
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
