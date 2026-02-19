import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* À propos */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              Île Maurice Voyage
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Le guide complet pour organiser votre voyage à l&apos;île Maurice.
              Destinations, budget, itinéraires, activités et conseils pratiques.
            </p>
            <Link
              href="https://blog.ilemauricevoyage.fr"
              className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lire notre blog →
            </Link>
          </div>

          {/* Préparer son voyage */}
          <div>
            <h4 className="text-white font-semibold mb-4">Préparer son voyage</h4>
            <ul className="space-y-2">
              <li><Link href="/que-faire-ile-maurice" className="text-sm hover:text-white transition-colors">Que faire à Maurice</Link></li>
              <li><Link href="/ou-aller-ile-maurice" className="text-sm hover:text-white transition-colors">Où aller à Maurice</Link></li>
              <li><Link href="/quand-partir-ile-maurice" className="text-sm hover:text-white transition-colors">Quand partir</Link></li>
              <li><Link href="/budget-ile-maurice" className="text-sm hover:text-white transition-colors">Budget voyage</Link></li>
              <li><Link href="/itineraires-ile-maurice" className="text-sm hover:text-white transition-colors">Itinéraires 7-14 jours</Link></li>
              <li><Link href="/infos-pratiques-ile-maurice" className="text-sm hover:text-white transition-colors">Infos pratiques</Link></li>
              <li><Link href="/activites-ile-maurice" className="text-sm hover:text-white transition-colors">Toutes les activités</Link></li>
            </ul>
          </div>

          {/* Destinations populaires */}
          <div>
            <h4 className="text-white font-semibold mb-4">Destinations populaires</h4>
            <ul className="space-y-2">
              <li><Link href="/que-faire-grand-baie" className="text-sm hover:text-white transition-colors">Grand Baie</Link></li>
              <li><Link href="/que-faire-flic-en-flac" className="text-sm hover:text-white transition-colors">Flic en Flac</Link></li>
              <li><Link href="/que-faire-le-morne" className="text-sm hover:text-white transition-colors">Le Morne</Link></li>
              <li><Link href="/que-faire-ile-aux-cerfs" className="text-sm hover:text-white transition-colors">Île aux Cerfs</Link></li>
              <li><Link href="/que-faire-trou-aux-biches" className="text-sm hover:text-white transition-colors">Trou aux Biches</Link></li>
              <li><Link href="/blue-bay-ile-maurice" className="text-sm hover:text-white transition-colors">Blue Bay</Link></li>
              <li><Link href="/que-faire-belle-mare" className="text-sm hover:text-white transition-colors">Belle Mare</Link></li>
              <li><Link href="/que-faire-tamarin" className="text-sm hover:text-white transition-colors">Tamarin</Link></li>
            </ul>
          </div>

          {/* Plus de destinations */}
          <div>
            <h4 className="text-white font-semibold mb-4">Autres destinations</h4>
            <ul className="space-y-2">
              <li><Link href="/que-faire-cap-malheureux" className="text-sm hover:text-white transition-colors">Cap Malheureux</Link></li>
              <li><Link href="/que-faire-trou-deau-douce" className="text-sm hover:text-white transition-colors">Trou d&apos;Eau Douce</Link></li>
              <li><Link href="/que-faire-port-louis" className="text-sm hover:text-white transition-colors">Port-Louis</Link></li>
              <li><Link href="/que-faire-souillac" className="text-sm hover:text-white transition-colors">Souillac</Link></li>
              <li><Link href="/que-faire-chamouny" className="text-sm hover:text-white transition-colors">Chamouny</Link></li>
              <li><Link href="/que-faire-gorges-riviere-noire" className="text-sm hover:text-white transition-colors">Gorges Rivière Noire</Link></li>
              <li><Link href="/que-faire-chutes-tamarin" className="text-sm hover:text-white transition-colors">Chutes de Tamarin</Link></li>
              <li><Link href="/que-faire-grand-gaube" className="text-sm hover:text-white transition-colors">Grand Gaube</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            <span className="text-gray-600">|</span>
            <Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link>
            <span className="text-gray-600">|</span>
            <Link href="/politique-de-confidentialite" className="hover:text-white transition-colors">Politique de confidentialité</Link>
          </div>
          <p>© {currentYear} Île Maurice Voyage. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
