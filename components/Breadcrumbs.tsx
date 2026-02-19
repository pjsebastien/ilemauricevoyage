import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [{ label: 'Accueil', href: '/' }, ...items];

  return (
    <>
      <nav aria-label="Fil d'Ariane" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
          {allItems.map((item, index) => (
            <li key={index} className="flex items-center gap-1">
              {index > 0 && (
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
              {item.href && index < allItems.length - 1 ? (
                <Link href={item.href} className="hover:text-gray-900 transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-900 font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Schema.org BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            'itemListElement': allItems.map((item, index) => ({
              '@type': 'ListItem',
              'position': index + 1,
              'name': item.label,
              ...(item.href ? { 'item': `https://www.ilemauricevoyage.fr${item.href}` } : {}),
            })),
          })
        }}
      />
    </>
  );
}
