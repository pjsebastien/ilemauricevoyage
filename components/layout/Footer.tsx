import Link from 'next/link';

/**
 * Composant Footer
 * Pied de page avec liens utiles et informations
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Activités',
      links: [
        { name: 'Toutes les activités', href: '/activites-ile-maurice' },
        { name: 'Activités populaires', href: '/activites-ile-maurice?filtre=populaires' },
      ],
    },
    {
      title: 'Informations',
      links: [
        { name: 'Organiser son voyage', href: '/#organiser' },
        { name: 'Conseils pratiques', href: '/#conseils' },
        { name: 'Contact', href: '/contact' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* À propos */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              Île Maurice Voyage
            </h3>
            <p className="text-sm text-gray-400">
              Découvrez les meilleures activités et expériences à l'île Maurice.
              Organisez votre voyage en toute simplicité.
            </p>
          </div>

          {/* Liens */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright & Legal */}
        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <Link href="/mentions-legales" className="hover:text-white transition-colors">
              Mentions légales
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="/politique-de-confidentialite" className="hover:text-white transition-colors">
              Politique de confidentialité
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
          <p>© {currentYear} Île Maurice Voyage. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
