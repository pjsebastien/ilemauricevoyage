import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getAllLocationSlugs, getLocationBySlug } from '@/lib/locations-data-enriched';
import type { LocationDataEnriched } from '@/lib/locations-data-enriched';


export const metadata: Metadata = {
  title: 'Que faire à l\'Île Maurice ? Activités incontournables et destinations',
  description: 'Découvrez que faire à l\'Île Maurice : plages paradisiaques, plongée, kitesurf, randonnées, culture créole. Notre sélection des meilleures activités et lieux par région.',
  openGraph: {
    title: 'Que faire à l\'Île Maurice ? Les incontournables à voir et à faire',
    description: 'Plages de rêve, sports nautiques, randonnées spectaculaires, culture créole : explorez toutes les activités et destinations de Maurice avec nos conseils.',
    type: 'article',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Île Maurice Voyage' }],
  },
};

export default function QueFairePage() {
  const allSlugs = getAllLocationSlugs();
  const locations = allSlugs.map(slug => getLocationBySlug(slug)).filter(Boolean);

  // Organiser les locations par région
  const regions = {
    nord: {
      name: 'Nord',
      description: 'Vie nocturne, shopping, sports nautiques',
      icon: '🏖️',
      color: 'from-blue-500 to-cyan-500',
      locations: ['grand-baie', 'trou-aux-biches', 'cap-malheureux', 'grand-gaube']
    },
    ouest: {
      name: 'Ouest',
      description: 'Couchers de soleil, plongée, dauphins',
      icon: '🌅',
      color: 'from-orange-500 to-red-500',
      locations: ['flic-en-flac', 'tamarin']
    },
    sudOuest: {
      name: 'Sud-Ouest',
      description: 'Kitesurf, nature sauvage, UNESCO',
      icon: '🪁',
      color: 'from-teal-500 to-green-500',
      locations: ['le-morne', 'chamouny', 'gorges-riviere-noire', 'chutes-tamarin']
    },
    sud: {
      name: 'Sud',
      description: 'Côte sauvage, falaises, authenticité',
      icon: '⛰️',
      color: 'from-slate-600 to-slate-800',
      locations: ['souillac', 'blue-bay']
    },
    est: {
      name: 'Est',
      description: 'Plages paradisiaques, resorts luxe, île aux Cerfs',
      icon: '🏝️',
      color: 'from-purple-500 to-pink-500',
      locations: ['belle-mare', 'trou-deau-douce', 'ile-aux-cerfs']
    },
    centre: {
      name: 'Centre & Capitale',
      description: 'Culture, histoire, marchés',
      icon: '🏛️',
      color: 'from-amber-500 to-yellow-500',
      locations: ['port-louis']
    }
  };

const getLocationsByRegion = (slugs: string[]) => {
  return slugs
    .map(slug => locations.find(loc => loc?.slug === slug))
    .filter(
      (loc): loc is LocationDataEnriched => loc !== undefined
    );
};


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-500 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/03/ile-maurice-voyage-scaled.jpg"
            alt="Que faire à l'Île Maurice"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
            priority
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Que faire à l'Île Maurice ?
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mb-8">
            L'Île Maurice est bien plus qu'une destination plage. Entre lagons turquoise, montagnes verdoyantes, cascades cachées et villages créoles authentiques, cette perle de l'océan Indien offre une diversité d'expériences qui surprend tous les voyageurs.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold">16</div>
              <div className="text-white/80 text-sm">Destinations</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold">6</div>
              <div className="text-white/80 text-sm">Régions</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold">100+</div>
              <div className="text-white/80 text-sm">Activités</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold">330</div>
              <div className="text-white/80 text-sm">Jours de soleil</div>
            </div>
          </div>
        </div>
      </div>

      <Breadcrumbs items={[{ label: 'Que faire à l\'île Maurice' }]} />

      {/* Table des matières */}
      <div className="bg-blue-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-bold text-gray-900 mb-4">Dans cet article :</h2>
          <div className="grid md:grid-cols-2 gap-2 text-sm">
            <a href="#plages" className="text-blue-600 hover:underline">→ Les plus belles plages de Maurice</a>
            <a href="#sports-nautiques" className="text-blue-600 hover:underline">→ Sports nautiques et plongée</a>
            <a href="#randonnees" className="text-blue-600 hover:underline">→ Randonnées et nature</a>
            <a href="#culture" className="text-blue-600 hover:underline">→ Culture et patrimoine</a>
            <a href="#excursions" className="text-blue-600 hover:underline">→ Excursions incontournables</a>
            <a href="#regions" className="text-blue-600 hover:underline">→ Explorer par région</a>
            <a href="#pratique" className="text-blue-600 hover:underline">→ Conseils pratiques</a>
            <a href="#faq" className="text-blue-600 hover:underline">→ Questions fréquentes</a>
          </div>
        </div>
      </div>

      {/* Introduction éditoriale */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Vous préparez votre voyage à Maurice et vous vous demandez <strong>que faire sur cette île paradisiaque</strong> ? Bonne nouvelle : l'Île Maurice regorge d'activités pour tous les goûts. Que vous soyez amateur de farniente sur des plages de sable blanc, passionné de sports nautiques, randonneur en quête de panoramas ou voyageur curieux de découvrir une culture métissée unique, Maurice vous réserve des moments inoubliables.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Située dans l'océan Indien, à 900 km à l'est de Madagascar, l'Île Maurice offre une <strong>diversité de paysages exceptionnelle</strong> sur seulement 1 865 km². Des lagons cristallins aux forêts tropicales d'altitude, des villages de pêcheurs aux marchés animés de Port-Louis, chaque coin de l'île raconte une histoire différente.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Dans ce dossier complet, nous avons rassemblé <strong>toutes les activités et destinations incontournables</strong> de Maurice, organisées par thématique et par région. Pour chaque lieu, vous trouverez nos conseils détaillés avec hébergements, restaurants, meilleurs mois pour visiter et budget.
          </p>
        </div>
      </article>

      {/* Section 1: Plages */}
      <section id="plages" className="bg-gradient-to-br from-cyan-50 to-blue-50 py-16 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl">🏖️</span>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Les plus belles plages de Maurice</h2>
              <p className="text-gray-600 mt-2">Sable blanc, lagon turquoise et cocotiers : le décor de carte postale</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-gray-700">
              Les plages mauriciennes comptent parmi les plus belles au monde. Protégées par une barrière de corail qui encercle presque toute l'île, elles offrent des eaux calmes et cristallines idéales pour la baignade et le snorkeling. Chaque côte a son caractère : le nord animé, l'ouest sauvage avec ses couchers de soleil légendaires, l'est luxueux et préservé, le sud authentique battu par les vagues.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🏆 Top 5 des plages</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-600 font-bold">1.</span>
                  <div>
                    <Link href="/que-faire-trou-aux-biches" className="font-semibold text-gray-900 hover:text-cyan-600">Trou aux Biches</Link>
                    <p className="text-sm text-gray-600">Plage familiale, snorkeling tortues, lagon peu profond</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-600 font-bold">2.</span>
                  <div>
                    <Link href="/que-faire-belle-mare" className="font-semibold text-gray-900 hover:text-cyan-600">Belle Mare</Link>
                    <p className="text-sm text-gray-600">4 km de sable blanc, resorts de luxe, eau cristalline</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-600 font-bold">3.</span>
                  <div>
                    <Link href="/que-faire-flic-en-flac" className="font-semibold text-gray-900 hover:text-cyan-600">Flic en Flac</Link>
                    <p className="text-sm text-gray-600">5 km de plage, couchers de soleil, vie locale animée</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-600 font-bold">4.</span>
                  <div>
                    <Link href="/que-faire-le-morne" className="font-semibold text-gray-900 hover:text-cyan-600">Le Morne</Link>
                    <p className="text-sm text-gray-600">Lagon turquoise au pied de la montagne UNESCO</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-600 font-bold">5.</span>
                  <div>
                    <Link href="/que-faire-ile-aux-cerfs" className="font-semibold text-gray-900 hover:text-cyan-600">Île aux Cerfs</Link>
                    <p className="text-sm text-gray-600">Île paradisiaque, plages de rêve, excursion en bateau</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">💡 Nos conseils plages</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500">✓</span>
                  <span><strong>Côte ouest</strong> pour les couchers de soleil (Flic en Flac, Tamarin)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500">✓</span>
                  <span><strong>Côte nord</strong> pour l'animation et les activités (Grand Baie)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500">✓</span>
                  <span><strong>Côte est</strong> pour le calme et le luxe (Belle Mare)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500">✓</span>
                  <span><strong>Arrivez tôt</strong> (avant 9h) pour profiter des plages désertes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500">✓</span>
                  <span><strong>Crème solaire reef-safe</strong> obligatoire (protection des coraux)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Sports nautiques */}
      <section id="sports-nautiques" className="py-16 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl">🤿</span>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Sports nautiques et plongée</h2>
              <p className="text-gray-600 mt-2">Kitesurf, plongée, snorkeling, surf : l'océan Indien comme terrain de jeu</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-gray-700">
              L'Île Maurice est un <strong>paradis pour les sports nautiques</strong>. Les alizés constants font du sud-ouest un spot de kitesurf mondialement reconnu, tandis que la côte ouest offre des conditions de plongée exceptionnelles avec épaves, récifs coralliens et observation de dauphins. Le snorkeling est accessible presque partout grâce aux lagons calmes et aux parcs marins protégés.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-teal-50 rounded-2xl p-6 border-2 border-teal-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🪁 Kitesurf</h3>
              <p className="text-gray-700 mb-4">Le Morne est classé parmi les meilleurs spots au monde. Vents réguliers, lagon plat, cadre spectaculaire.</p>
              <Link href="/que-faire-le-morne" className="text-teal-600 font-semibold hover:underline">
                → Tout sur Le Morne
              </Link>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🤿 Plongée</h3>
              <p className="text-gray-700 mb-4">Épaves, grottes, récifs coralliens. Flic en Flac compte plus de 20 sites dont le célèbre Rempart Serpent.</p>
              <Link href="/que-faire-flic-en-flac" className="text-blue-600 font-semibold hover:underline">
                → Tout sur Flic en Flac
              </Link>
            </div>

            <div className="bg-cyan-50 rounded-2xl p-6 border-2 border-cyan-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🐬 Dauphins</h3>
              <p className="text-gray-700 mb-4">Observation et nage avec les dauphins sauvages dans la baie de Tamarin, tôt le matin.</p>
              <Link href="/que-faire-tamarin" className="text-cyan-600 font-semibold hover:underline">
                → Tout sur Tamarin
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">🏄 Autres activités nautiques à Maurice</h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <ul className="space-y-2">
                <li>• <strong>Snorkeling</strong> : <Link href="/blue-bay-ile-maurice" className="text-blue-600 hover:underline">Blue Bay</Link> (parc marin), <Link href="/que-faire-trou-aux-biches" className="text-blue-600 hover:underline">Trou aux Biches</Link> (tortues)</li>
                <li>• <strong>Surf</strong> : <Link href="/que-faire-tamarin" className="text-blue-600 hover:underline">Tamarin</Link> (vagues mythiques, niveau intermédiaire)</li>
                <li>• <strong>Kayak</strong> : <Link href="/que-faire-ile-aux-cerfs" className="text-blue-600 hover:underline">Île aux Cerfs</Link>, mangroves de la côte est</li>
              </ul>
              <ul className="space-y-2">
                <li>• <strong>Pêche au gros</strong> : Grand Baie, Tamarin (marlins, thons, espadons)</li>
                <li>• <strong>Catamaran</strong> : excursions vers îles du nord depuis <Link href="/que-faire-cap-malheureux" className="text-blue-600 hover:underline">Cap Malheureux</Link></li>
                <li>• <strong>Parachute ascensionnel</strong> : <Link href="/que-faire-ile-aux-cerfs" className="text-blue-600 hover:underline">Île aux Cerfs</Link>, Grand Baie</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Randonnées */}
      <section id="randonnees" className="bg-gradient-to-br from-green-50 to-emerald-50 py-16 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl">🥾</span>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Randonnées et nature</h2>
              <p className="text-gray-600 mt-2">Forêts tropicales, cascades et panoramas à couper le souffle</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-gray-700">
              Maurice ne se résume pas à ses plages. L'intérieur de l'île cache des <strong>trésors naturels spectaculaires</strong> : le parc national des Gorges de Rivière Noire (6 754 hectares de forêt tropicale), les 7 cascades de Tamarin pour le canyoning, le Morne Brabant classé UNESCO, et le Piton de la Petite Rivière Noire, point culminant de l'île à 828 mètres.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Link href="/que-faire-gorges-riviere-noire" className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div className="relative h-48">
                <Image
                  src="/photos-villes-ilemaurice/gorge-riviere-noire-ile-maurice.jpg"
                  alt="Parc National des Gorges de Rivière Noire - Île Maurice"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4 bg-green-500/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                  🌿 Parc National
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">Parc National des Gorges de Rivière Noire</h3>
                <p className="text-gray-600 mb-4">Le plus grand parc naturel de Maurice : 16 sentiers balisés, cascades, oiseaux endémiques rares (pigeon rose, crécerelle). Entrée gratuite.</p>
                <span className="text-green-600 font-semibold">Découvrir le parc →</span>
              </div>
            </Link>

            <Link href="/que-faire-chutes-tamarin" className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div className="relative h-48">
                <Image
                  src="/photos-villes-ilemaurice/chutes-de-tamarin-ile-maurice.jpg"
                  alt="Chutes de Tamarin 7 Cascades - Île Maurice"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4 bg-blue-500/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                  💧 Aventure
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Chutes de Tamarin (7 Cascades)</h3>
                <p className="text-gray-600 mb-4">L'aventure ultime : canyoning dans 7 cascades, sauts jusqu'à 12m, rappels, toboggans naturels. Expérience inoubliable en pleine jungle.</p>
                <span className="text-blue-600 font-semibold">Découvrir les cascades →</span>
              </div>
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">🏔️ Randonnées incontournables</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Pour les sportifs</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <Link href="/que-faire-le-morne" className="text-green-600 hover:underline">Le Morne Brabant</Link> (4h, vue 360°, UNESCO)</li>
                  <li>• <Link href="/que-faire-chamouny" className="text-green-600 hover:underline">Piton Petite Rivière Noire</Link> (5h, sommet Maurice 828m)</li>
                  <li>• <Link href="/que-faire-chutes-tamarin" className="text-green-600 hover:underline">Canyoning 7 Cascades</Link> (5-6h, aventure)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Pour tous niveaux</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <Link href="/que-faire-gorges-riviere-noire" className="text-green-600 hover:underline">Macchabée Trail</Link> (2-3h, forêt, oiseaux)</li>
                  <li>• <Link href="/que-faire-gorges-riviere-noire" className="text-green-600 hover:underline">Alexandra Falls Viewpoint</Link> (accessible voiture)</li>
                  <li>• <Link href="/que-faire-chutes-tamarin" className="text-green-600 hover:underline">Randonnée 3 Cascades</Link> (2-3h, baignade)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Culture */}
      <section id="culture" className="py-16 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl">🏛️</span>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Culture et patrimoine</h2>
              <p className="text-gray-600 mt-2">Une île métissée aux influences indiennes, créoles, chinoises et européennes</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-gray-700">
              Maurice est un <strong>carrefour de cultures unique au monde</strong>. Hindouisme, islam, christianisme et bouddhisme cohabitent harmonieusement. Cette diversité se reflète dans l'architecture (temples hindous colorés, mosquées, églises coloniales), la gastronomie (curry, rougaille, dim sum, gâteaux français) et les fêtes religieuses célébrées toute l'année.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Link href="/que-faire-port-louis" className="group bg-amber-50 rounded-2xl p-6 border-2 border-amber-200 hover:border-amber-400 transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600">🏙️ Port-Louis, la capitale</h3>
              <p className="text-gray-700 mb-4">Le cœur battant de Maurice : marché central coloré, Caudan Waterfront, Chinatown, Blue Penny Museum (timbres les plus rares au monde), street food authentique.</p>
              <span className="text-amber-600 font-semibold">Explorer Port-Louis →</span>
            </Link>

            <Link href="/que-faire-cap-malheureux" className="group bg-red-50 rounded-2xl p-6 border-2 border-red-200 hover:border-red-400 transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600">⛪ Cap Malheureux</h3>
              <p className="text-gray-700 mb-4">L'église au toit rouge la plus photographiée de Maurice. Village de pêcheurs authentique, point de départ des excursions vers les îles du nord.</p>
              <span className="text-red-600 font-semibold">Découvrir Cap Malheureux →</span>
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">🎭 Expériences culturelles à ne pas manquer</h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <ul className="space-y-2">
                <li>• <strong>Marché de Port-Louis</strong> : fruits exotiques, épices, artisanat</li>
                <li>• <strong>Grand Bassin</strong> : lac sacré hindou et temple coloré</li>
                <li>• <strong>Rhumerie de Chamarel</strong> : dégustation de rhum agricole</li>
                <li>• <strong>Jardin de Pamplemousses</strong> : jardin botanique historique</li>
              </ul>
              <ul className="space-y-2">
                <li>• <strong>Terre des 7 Couleurs</strong> : phénomène géologique unique</li>
                <li>• <strong>Domaine de l'Étoile</strong> : quad, zipline, nature</li>
                <li>• <strong>Villages de pêcheurs</strong> : <Link href="/que-faire-grand-gaube" className="text-blue-600 hover:underline">Grand Gaube</Link>, <Link href="/que-faire-souillac" className="text-blue-600 hover:underline">Souillac</Link></li>
                <li>• <strong>Séga</strong> : musique et danse traditionnelles (spectacles hôtels)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Excursions */}
      <section id="excursions" className="bg-purple-50 py-16 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl">🚤</span>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Excursions incontournables</h2>
              <p className="text-gray-600 mt-2">Les expériences qui rendent un voyage à Maurice inoubliable</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">🏝️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Île aux Cerfs</h3>
              <p className="text-gray-600 text-sm mb-3">Journée paradisiaque : plages de rêve, activités nautiques, golf, BBQ créole.</p>
              <p className="text-purple-600 font-semibold">À partir de 25€</p>
              <Link href="/que-faire-ile-aux-cerfs" className="text-sm text-purple-600 hover:underline mt-2 block">En savoir plus →</Link>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">🐬</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Nage avec les dauphins</h3>
              <p className="text-gray-600 text-sm mb-3">Rencontre magique avec les dauphins sauvages de la baie de Tamarin au lever du soleil.</p>
              <p className="text-purple-600 font-semibold">À partir de 45€</p>
              <Link href="/que-faire-tamarin" className="text-sm text-purple-600 hover:underline mt-2 block">En savoir plus →</Link>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">⛵</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Catamaran îles du nord</h3>
              <p className="text-gray-600 text-sm mb-3">Coin de Mire, Île Plate, Gabriel : snorkeling, BBQ, plages désertes.</p>
              <p className="text-purple-600 font-semibold">À partir de 70€</p>
              <Link href="/que-faire-cap-malheureux" className="text-sm text-purple-600 hover:underline mt-2 block">En savoir plus →</Link>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">🌊</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Canyoning 7 Cascades</h3>
              <p className="text-gray-600 text-sm mb-3">Aventure dans la jungle : sauts, rappels, toboggans naturels dans 7 cascades.</p>
              <p className="text-purple-600 font-semibold">À partir de 90€</p>
              <Link href="/que-faire-chutes-tamarin" className="text-sm text-purple-600 hover:underline mt-2 block">En savoir plus →</Link>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">🚁</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Survol en hélicoptère</h3>
              <p className="text-gray-600 text-sm mb-3">Vue aérienne sur Le Morne, Chamarel, cascades et lagons. Expérience unique.</p>
              <p className="text-purple-600 font-semibold">À partir de 250€</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">🏄</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Initiation kitesurf</h3>
              <p className="text-gray-600 text-sm mb-3">Cours débutants au Morne, spot mondial reconnu. Conditions idéales toute l'année.</p>
              <p className="text-purple-600 font-semibold">À partir de 100€</p>
              <Link href="/que-faire-le-morne" className="text-sm text-purple-600 hover:underline mt-2 block">En savoir plus →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Régions */}
      <section id="regions" className="py-16 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explorez Maurice par région
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Chaque région de Maurice a son ambiance unique. Cliquez sur une destination pour découvrir nos conseils détaillés : activités, hébergements, restaurants, plages et meilleures périodes.
            </p>
          </div>

          <div className="space-y-8">
            {Object.entries(regions).map(([key, region]) => {
              const regionLocations = getLocationsByRegion(region.locations);
              if (regionLocations.length === 0) return null;

              return (
                <div key={key} className="bg-white rounded-3xl shadow-xl overflow-hidden">
                  <div className={`bg-gradient-to-r ${region.color} text-white p-6`}>
                    <div className="flex items-center gap-4">
                      <span className="text-5xl">{region.icon}</span>
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{region.name}</h3>
                        <p className="text-white/90">{region.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      {regionLocations.map((location) => (
                        <Link
                          key={location.slug}
                          href={`/que-faire-${location.slug}`}
                          className="group bg-gray-50 rounded-xl p-4 hover:bg-blue-50 hover:shadow-md transition-all"
                        >
                          <h4 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                            {location.name}
                          </h4>
                          <p className="text-gray-600 text-sm line-clamp-2 mb-2">
                            {location.highlights[0]}
                          </p>
                          <span className="text-blue-600 text-sm font-medium">
                            Voir le guide →
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 7: Conseils pratiques */}
      <section id="pratique" className="bg-gray-50 py-16 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Conseils pratiques pour votre séjour
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl mb-3">📅</div>
              <h3 className="font-bold text-lg mb-2">Quand partir ?</h3>
              <p className="text-gray-600 text-sm">
                <strong>Mai-juin</strong> et <strong>septembre-octobre</strong> = idéal. Météo parfaite, moins de monde. Évitez janvier-mars (cyclones) si possible.
              </p>
              <Link href="/quand-partir-ile-maurice" className="text-blue-600 text-sm font-medium hover:underline mt-2 block">
                Dossier complet →
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl mb-3">🚗</div>
              <h3 className="font-bold text-lg mb-2">Se déplacer</h3>
              <p className="text-gray-600 text-sm">
                <strong>Location de voiture</strong> recommandée (30-50€/jour). Conduite à gauche. Routes correctes mais étroites. Bus publics économiques mais lents.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl mb-3">⏰</div>
              <h3 className="font-bold text-lg mb-2">Durée idéale</h3>
              <p className="text-gray-600 text-sm">
                <strong>10-14 jours</strong> pour découvrir 2-3 régions sans stress. 1 semaine = faisable mais serré. 3 semaines = exploration complète.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-bold text-lg mb-2">Budget</h3>
              <p className="text-gray-600 text-sm">
                <strong>Budget</strong> : 50-80€/jour | <strong>Moyen</strong> : 120-200€/jour | <strong>Luxe</strong> : 300€+. L'hébergement = poste principal.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl mb-3">🏖️</div>
              <h3 className="font-bold text-lg mb-2">Itinéraire conseillé</h3>
              <p className="text-gray-600 text-sm">
                Combinez <strong>nord (animation)</strong> + <strong>ouest ou sud-ouest (nature)</strong> + <strong>est (détente)</strong> pour un mix parfait.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-bold text-lg mb-2">Connexion</h3>
              <p className="text-gray-600 text-sm">
                Carte SIM locale <strong>10€ = 10Go</strong> (Emtel ou Orange à l'aéroport). WiFi gratuit dans la plupart des hôtels et cafés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Questions fréquentes sur Maurice
          </h2>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">Quelle est la meilleure période pour visiter Maurice ?</h3>
              <p className="text-gray-600">
                Les meilleurs mois sont <strong>mai-juin</strong> et <strong>septembre-octobre-novembre</strong> : climat idéal, mer calme, moins de touristes et prix raisonnables. Évitez janvier-mars (saison des cyclones) si vous êtes sensibles aux intempéries.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">Combien de temps faut-il pour visiter Maurice ?</h3>
              <p className="text-gray-600">
                Prévoyez <strong>10 à 14 jours</strong> pour découvrir l'île confortablement. Une semaine permet de voir les essentiels mais sera intense. Avec 3 semaines, vous pouvez explorer tous les coins de l'île sans précipitation.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">Faut-il louer une voiture à Maurice ?</h3>
              <p className="text-gray-600">
                <strong>Oui, fortement recommandé</strong> pour explorer librement. Comptez 30-50€/jour. La conduite est à gauche (comme au UK). Les routes sont correctes mais parfois étroites. Les bus publics existent mais sont lents et peu pratiques pour les touristes.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">Quelle région choisir pour un premier séjour ?</h3>
              <p className="text-gray-600">
                Pour un premier voyage, combinez <strong>le nord</strong> (Grand Baie pour l'animation et les plages) avec <strong>l'ouest ou sud-ouest</strong> (Le Morne, Flic en Flac pour la nature et les couchers de soleil). Si vous avez 2 semaines, ajoutez <strong>l'est</strong> (Belle Mare pour le luxe et le calme).
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">Quel budget prévoir pour Maurice ?</h3>
              <p className="text-gray-600">
                <strong>Budget</strong> : 50-80€/jour (guesthouse, restos locaux, activités basiques). <strong>Moyen</strong> : 120-200€/jour (hôtel 3-4*, restos variés, excursions). <strong>Luxe</strong> : 300€+ (resort 5*, gastronomie, activités premium). Le vol aller-retour coûte 600-1000€ depuis la France.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">Maurice est-elle une destination sûre ?</h3>
              <p className="text-gray-600">
                <strong>Oui, très sûre</strong>. Maurice est l'un des pays les plus sûrs d'Afrique. La petite délinquance existe (vols à l'arraché rares) mais les agressions sont très rares. Les Mauriciens sont accueillants et le pays est habitué au tourisme. Précautions normales de voyage suffisent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <div className="bg-gradient-to-br from-blue-600 to-cyan-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à explorer Maurice ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Découvrez nos guides détaillés pour chaque destination avec hébergements, restaurants, activités et conseils pratiques.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/quand-partir-ile-maurice"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg"
            >
              Quand partir ? →
            </Link>
            <Link
              href="#regions"
              className="inline-block bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all border-2 border-white"
            >
              Explorer les régions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
