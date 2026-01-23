import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import QuandPartirTool from '@/components/QuandPartirTool';

export const metadata: Metadata = {
  title: 'Quand partir à l\'Île Maurice ? Météo, budget et meilleures périodes',
  description: 'Découvrez le meilleur moment pour partir à l\'Île Maurice : météo, budget, activités. Calendrier des 12 mois avec conseils et outil de recommandation personnalisé.',
  openGraph: {
    title: 'Quand partir à l\'Île Maurice ? Météo et meilleures périodes',
    description: 'Trouvez le meilleur mois pour votre voyage selon la météo, le budget et vos activités préférées avec notre calendrier détaillé.',
    type: 'article',
  },
};

export default function QuandPartirPage() {
  const monthsGrid = [
    { slug: 'janvier', rating: 3, color: 'orange', season: 'Été austral', temp: '30°C', price: '€€€' },
    { slug: 'fevrier', rating: 2.5, color: 'red', season: 'Été austral', temp: '31°C', price: '€€' },
    { slug: 'mars', rating: 3.5, color: 'yellow', season: 'Été austral', temp: '30°C', price: '€€' },
    { slug: 'avril', rating: 4.5, color: 'green', season: 'Automne austral', temp: '28°C', price: '€€' },
    { slug: 'mai', rating: 5, color: 'green', season: 'Automne austral', temp: '26°C', price: '€€' },
    { slug: 'juin', rating: 4.5, color: 'green', season: 'Hiver austral', temp: '24°C', price: '€€' },
    { slug: 'juillet', rating: 4, color: 'yellow', season: 'Hiver austral', temp: '23°C', price: '€€€' },
    { slug: 'aout', rating: 3.5, color: 'yellow', season: 'Hiver austral', temp: '23°C', price: '€€€€' },
    { slug: 'septembre', rating: 5, color: 'green', season: 'Printemps austral', temp: '25°C', price: '€€' },
    { slug: 'octobre', rating: 5, color: 'green', season: 'Printemps austral', temp: '26°C', price: '€€' },
    { slug: 'novembre', rating: 4.5, color: 'green', season: 'Été austral', temp: '28°C', price: '€€' },
    { slug: 'decembre', rating: 3, color: 'orange', season: 'Été austral', temp: '30°C', price: '€€€€' }
  ];

  const getMonthName = (slug: string) => {
    const monthNames: { [key: string]: string } = {
      'janvier': 'Janvier', 'fevrier': 'Février', 'mars': 'Mars',
      'avril': 'Avril', 'mai': 'Mai', 'juin': 'Juin',
      'juillet': 'Juillet', 'aout': 'Août', 'septembre': 'Septembre',
      'octobre': 'Octobre', 'novembre': 'Novembre', 'decembre': 'Décembre'
    };
    return monthNames[slug] || slug;
  };

  const getRatingColor = (color: string) => {
    switch (color) {
      case 'green': return 'bg-green-100 border-green-300 text-green-800';
      case 'yellow': return 'bg-yellow-100 border-yellow-300 text-yellow-800';
      case 'orange': return 'bg-orange-100 border-orange-300 text-orange-800';
      case 'red': return 'bg-red-100 border-red-300 text-red-800';
      default: return 'bg-gray-100 border-gray-300 text-gray-800';
    }
  };

  const getRatingIcon = (color: string) => {
    switch (color) {
      case 'green': return '🌟';
      case 'yellow': return '⭐';
      case 'orange': return '🔸';
      case 'red': return '⚠️';
      default: return '●';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-500 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/03/ile-maurice-voyage-scaled.jpg"
            alt="Quand partir à l'Île Maurice"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
            priority
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/90 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span className="mx-2">/</span>
            <span className="font-medium">Quand partir à l'Île Maurice</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Quand partir à l'Île Maurice ?
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Découvrez le meilleur moment pour visiter l'Île Maurice selon vos envies : météo, budget, activités ou tranquillité. Calendrier détaillé des 12 mois pour planifier votre voyage parfait.
          </p>
        </div>
      </div>

      {/* Interactive Tool */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <QuandPartirTool />
      </div>

      {/* Visual Calendar */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Calendrier des 12 mois</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez en un coup d'œil la météo, les prix et les conditions de chaque mois
            </p>
          </div>

          {/* Timeline visuelle */}
          <div className="mb-12">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
                {monthsGrid.map((month) => (
                  <Link
                    key={month.slug}
                    href={`/maurice-en-${month.slug}`}
                    className={`group relative ${getRatingColor(month.color)} rounded-xl p-4 transition-all hover:shadow-lg hover:-translate-y-1`}
                  >
                    <div className="text-center">
                      <div className="text-3xl mb-2">{getRatingIcon(month.color)}</div>
                      <div className="font-bold text-sm mb-1">{getMonthName(month.slug).substring(0, 3)}</div>
                      <div className="text-2xl font-black">{month.rating}</div>
                      <div className="text-xs opacity-75">/ 5</div>
                    </div>

                    {/* Tooltip on hover */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block z-10">
                      <div className="bg-gray-900 text-white text-xs rounded-lg py-2 px-3 whitespace-nowrap shadow-lg">
                        <div className="font-bold mb-1">{getMonthName(month.slug)}</div>
                        <div>{month.temp} • {month.price}</div>
                        <div className="text-xs opacity-75">{month.season}</div>
                      </div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Légende */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap justify-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🌟</span>
                    <span>Excellent (5/5)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">⭐</span>
                    <span>Très bon (4-4.5/5)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🔸</span>
                    <span>Correct (3-3.5/5)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">⚠️</span>
                    <span>Délicat (2.5/5)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grid Cards détaillées */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {monthsGrid.map((month) => (
              <Link
                key={month.slug}
                href={`/maurice-en-${month.slug}`}
                className={`block rounded-2xl border-2 p-5 transition-all hover:shadow-xl hover:scale-105 ${getRatingColor(month.color)}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{getRatingIcon(month.color)}</span>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{month.rating}</div>
                    <div className="text-xs">/ 5</div>
                  </div>
                </div>
                <div className="text-xl font-bold mb-2">{getMonthName(month.slug)}</div>
                <div className="space-y-1 text-sm">
                  <div className="text-xs opacity-75">{month.season}</div>
                  <div className="flex items-center gap-2">
                    <span>🌡️</span>
                    <span className="font-medium">{month.temp}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>💰</span>
                    <span className="font-medium">{month.price}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA vers Activités */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-8 shadow-xl text-white">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-4xl">🏄</span>
                <h3 className="text-2xl font-bold">Découvrez les activités</h3>
              </div>
              <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
                Une fois votre période choisie, explorez toutes les activités incontournables à faire à l'Île Maurice : plongée, kitesurf, randonnée, parcs nationaux et bien plus.
              </p>
              <Link
                href="/activites-ile-maurice"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg"
              >
                Voir toutes les activités →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Best Months by Category */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Quand partir selon vos priorités
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Best Weather */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">☀️</span>
                <h3 className="text-2xl font-bold text-gray-900">Meilleure météo</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Pour un climat sec, ensoleillé et des températures agréables (24-26°C).
              </p>
              <div className="space-y-2">
                <Link href="/maurice-en-mai" className="block bg-white rounded-xl p-4 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-lg">Mai</div>
                      <div className="text-sm text-gray-600">Note parfaite 5/5 - Idéal pour tout</div>
                    </div>
                    <span className="text-2xl">🌟</span>
                  </div>
                </Link>
                <Link href="/maurice-en-septembre" className="block bg-white rounded-xl p-4 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-lg">Septembre</div>
                      <div className="text-sm text-gray-600">Note parfaite 5/5 - Conditions optimales</div>
                    </div>
                    <span className="text-2xl">🌟</span>
                  </div>
                </Link>
                <Link href="/maurice-en-octobre" className="block bg-white rounded-xl p-4 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-lg">Octobre</div>
                      <div className="text-sm text-gray-600">Note parfaite 5/5 - Mois universel</div>
                    </div>
                    <span className="text-2xl">🌟</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Best Budget */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">💰</span>
                <h3 className="text-2xl font-bold text-gray-900">Meilleur budget</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Pour économiser 20-40% sur les vols et hébergements sans sacrifier la qualité.
              </p>
              <div className="space-y-2">
                <Link href="/maurice-en-avril" className="block bg-white rounded-xl p-4 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-lg">Avril</div>
                      <div className="text-sm text-gray-600">Basse saison - Prix attractifs</div>
                    </div>
                    <span className="text-2xl">💎</span>
                  </div>
                </Link>
                <Link href="/maurice-en-mai" className="block bg-white rounded-xl p-4 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-lg">Mai</div>
                      <div className="text-sm text-gray-600">Excellent rapport qualité-prix</div>
                    </div>
                    <span className="text-2xl">💎</span>
                  </div>
                </Link>
                <Link href="/maurice-en-juin" className="block bg-white rounded-xl p-4 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-lg">Juin</div>
                      <div className="text-sm text-gray-600">Tarifs modérés avant juillet</div>
                    </div>
                    <span className="text-2xl">💎</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Beach & Swimming */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🏖️</span>
                <h3 className="text-2xl font-bold text-gray-900">Plage et baignade</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Pour profiter d'une eau chaude (26-28°C) et d'un lagon calme et turquoise.
              </p>
              <div className="space-y-2">
                <Link href="/maurice-en-janvier" className="block bg-white rounded-xl p-4 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-lg">Janvier</div>
                      <div className="text-sm text-gray-600">Eau à 27°C - Attention cyclones</div>
                    </div>
                    <span className="text-2xl">🌊</span>
                  </div>
                </Link>
                <Link href="/maurice-en-octobre" className="block bg-white rounded-xl p-4 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-lg">Octobre</div>
                      <div className="text-sm text-gray-600">Eau à 25°C - Conditions parfaites</div>
                    </div>
                    <span className="text-2xl">🌊</span>
                  </div>
                </Link>
                <Link href="/maurice-en-novembre" className="block bg-white rounded-xl p-4 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-lg">Novembre</div>
                      <div className="text-sm text-gray-600">Eau à 26°C - Début été austral</div>
                    </div>
                    <span className="text-2xl">🌊</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Activities */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🤿</span>
                <h3 className="text-2xl font-bold text-gray-900">Plongée et snorkeling</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Pour une visibilité maximale sous l'eau (20-30m) et observer la vie marine.
              </p>
              <div className="space-y-2">
                <Link href="/maurice-en-octobre" className="block bg-white rounded-xl p-4 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-lg">Octobre</div>
                      <div className="text-sm text-gray-600">Visibilité excellente</div>
                    </div>
                    <span className="text-2xl">🐠</span>
                  </div>
                </Link>
                <Link href="/maurice-en-novembre" className="block bg-white rounded-xl p-4 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-lg">Novembre</div>
                      <div className="text-sm text-gray-600">Eau chaude + clarté optimale</div>
                    </div>
                    <span className="text-2xl">🐠</span>
                  </div>
                </Link>
                <Link href="/maurice-en-decembre" className="block bg-white rounded-xl p-4 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-lg">Décembre</div>
                      <div className="text-sm text-gray-600">Coraux en pleine activité</div>
                    </div>
                    <span className="text-2xl">🐠</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Hiking */}
            <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl p-8 border border-lime-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🥾</span>
                <h3 className="text-2xl font-bold text-gray-900">Randonnée et nature</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Pour marcher dans des conditions fraîches (20-25°C) et éviter la chaleur écrasante.
              </p>
              <div className="space-y-2">
                <Link href="/maurice-en-juin" className="block bg-white rounded-xl p-4 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-lg">Juin</div>
                      <div className="text-sm text-gray-600">Températures idéales 24°C</div>
                    </div>
                    <span className="text-2xl">⛰️</span>
                  </div>
                </Link>
                <Link href="/maurice-en-juillet" className="block bg-white rounded-xl p-4 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-lg">Juillet</div>
                      <div className="text-sm text-gray-600">Sec et frais - Parfait pour grimper</div>
                    </div>
                    <span className="text-2xl">⛰️</span>
                  </div>
                </Link>
                <Link href="/maurice-en-aout" className="block bg-white rounded-xl p-4 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-lg">Août</div>
                      <div className="text-sm text-gray-600">Climat sec garanti</div>
                    </div>
                    <span className="text-2xl">⛰️</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Kitesurf */}
            <div className="bg-gradient-to-br from-sky-50 to-indigo-50 rounded-2xl p-8 border border-sky-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🪁</span>
                <h3 className="text-2xl font-bold text-gray-900">Kitesurf</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Pour profiter des vents alizés constants (20-25 nœuds) au Morne et Belle Mare.
              </p>
              <div className="space-y-2">
                <Link href="/maurice-en-juin" className="block bg-white rounded-xl p-4 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-lg">Juin</div>
                      <div className="text-sm text-gray-600">Début de la saison - Vent régulier</div>
                    </div>
                    <span className="text-2xl">💨</span>
                  </div>
                </Link>
                <Link href="/maurice-en-juillet" className="block bg-white rounded-xl p-4 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-lg">Juillet</div>
                      <div className="text-sm text-gray-600">Pic de la saison - Conditions top</div>
                    </div>
                    <span className="text-2xl">💨</span>
                  </div>
                </Link>
                <Link href="/maurice-en-aout" className="block bg-white rounded-xl p-4 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-lg">Août</div>
                      <div className="text-sm text-gray-600">Vents puissants garantis</div>
                    </div>
                    <span className="text-2xl">💨</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Second CTA Activités */}
          <div className="mt-16">
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-blue-200">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="text-6xl">🤿</div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Plongée, kitesurf, randonnée... Que faire à Maurice ?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Explorez toutes les activités et excursions avec prix, conseils pratiques et meilleures saisons pour chaque expérience.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Link
                    href="/activites-ile-maurice"
                    className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all"
                  >
                    Découvrir les activités
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seasonal Guide */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Guide par saison
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Summer Season */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🌞</span>
                <h3 className="text-2xl font-bold text-gray-900">Été austral</h3>
              </div>
              <div className="mb-4">
                <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                  Novembre à Avril
                </span>
              </div>
              <p className="text-gray-700 mb-4">
                Saison chaude et humide avec températures 28-32°C. Eau à 27-29°C parfaite pour la baignade. Risque de cyclones janvier-mars.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Eau très chaude et fruits tropicaux</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Végétation luxuriante</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Averses fréquentes et chaleur intense</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Risque cyclonique (surtout février)</span>
                </div>
              </div>
            </div>

            {/* Winter Season */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">❄️</span>
                <h3 className="text-2xl font-bold text-gray-900">Hiver austral</h3>
              </div>
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Mai à Octobre
                </span>
              </div>
              <p className="text-gray-700 mb-4">
                Saison sèche et fraîche avec températures 23-26°C. Eau à 23-25°C. Climat idéal pour les activités et l'exploration.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Climat sec et ensoleillé</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Parfait pour randonnée</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Observation des baleines (juillet-sept)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-600">⚠</span>
                  <span>Eau plus fraîche et vent sur côte est</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Questions fréquentes
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Quel est le meilleur mois pour aller à l'Île Maurice ?
              </h3>
              <p className="text-gray-700">
                Les mois de <strong>mai, septembre et octobre</strong> sont considérés comme les meilleurs avec une note parfaite de 5/5. Ils offrent un climat idéal (24-26°C), peu de pluie, une eau agréable (24-26°C) et des prix raisonnables. Octobre est particulièrement polyvalent pour toutes les activités.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Quand éviter l'Île Maurice ?
              </h3>
              <p className="text-gray-700">
                <strong>Février</strong> est le mois le plus délicat avec un risque cyclonique élevé et des pluies abondantes (note 2.5/5). Janvier et mars présentent également des risques mais restent visitables avec précautions. Si vous ne supportez pas la chaleur intense, évitez aussi décembre à mars (28-32°C).
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Quand partir pas cher à Maurice ?
              </h3>
              <p className="text-gray-700">
                Les mois les plus économiques sont <strong>avril, mai et juin</strong> (basse saison). Vous économisez 20-40% sur les vols et hébergements comparé à juillet-août. Septembre-octobre offrent aussi un excellent rapport qualité-prix avec des conditions météo parfaites.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Quelle est la saison des cyclones à Maurice ?
              </h3>
              <p className="text-gray-700">
                La saison cyclonique s'étend de <strong>novembre à avril</strong>, avec un pic de risque en <strong>janvier, février et mars</strong>. Les cyclones restent rares (1-2 par an en moyenne) mais peuvent perturber votre séjour. Une assurance annulation est fortement recommandée pendant cette période.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Quand voir les baleines à Maurice ?
              </h3>
              <p className="text-gray-700">
                Les <strong>baleines à bosse</strong> migrent au large de Maurice de <strong>juillet à septembre</strong>, avec un pic en août. Les sorties en bateau depuis la côte ouest offrent 90% de chances d'observation. C'est une expérience unique combinable avec le climat sec de l'hiver austral.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Quelle température de l'eau à Maurice ?
              </h3>
              <p className="text-gray-700">
                L'eau varie de <strong>23°C (juillet-août)</strong> à <strong>29°C (février-mars)</strong>. La température moyenne annuelle est de 26°C, permettant la baignade toute l'année. L'eau est la plus chaude de décembre à avril (27-29°C) et la plus fraîche de juin à août (23-24°C).
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Quel mois pour faire du kitesurf à Maurice ?
              </h3>
              <p className="text-gray-700">
                Les meilleurs mois pour le kitesurf sont <strong>juin, juillet et août</strong> avec des vents alizés constants de 20-25 nœuds. Le spot mythique du Morne (sud-ouest) et Belle Mare (est) offrent des conditions parfaites. Juillet est le pic avec les vents les plus forts.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-br from-blue-600 to-cyan-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à planifier votre voyage ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Consultez nos guides détaillés mois par mois pour préparer votre séjour parfait à l'Île Maurice.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/maurice-en-mai"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg"
            >
              Voir Mai (5/5) →
            </Link>
            <Link
              href="/maurice-en-septembre"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg"
            >
              Voir Septembre (5/5) →
            </Link>
            <Link
              href="/maurice-en-octobre"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg"
            >
              Voir Octobre (5/5) →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
