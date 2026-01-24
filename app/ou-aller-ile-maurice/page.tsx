import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Où aller à Maurice ? Tous les spots pour un voyage réussi !',
  description: 'Découvrez où partir à Maurice : 16 destinations comparées (plages, nature, culture). Grand Baie, Le Morne, Blue Bay, Rodrigues... Le dossier complet pour choisir votre destination idéale.',
  keywords: 'où aller à Maurice, où partir à Maurice, destinations Maurice, voyage Maurice, plages Maurice, régions Maurice',
  openGraph: {
    title: 'Où aller à Maurice ? Vue d’ensemble des destinations',
    description: 'Comparez toutes les destinations de l\'île Maurice : plages paradisiaques, montagnes, culture. Trouvez le spot parfait pour votre voyage.',
    type: 'article',
  },
};

// SVG Icons components
const Icons = {
  MapPin: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Sun: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  Waves: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  Mountain: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  Palmtree: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
    </svg>
  ),
  Umbrella: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
    </svg>
  ),
  Anchor: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8V4m0 4a4 4 0 100 8 4 4 0 000-8zm-8 4h2m12 0h2M12 20v-8" />
    </svg>
  ),
  Star: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  Users: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  Check: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ),
  Compass: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  ),
  Building: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  ChevronRight: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  ),
  ArrowRight: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  ),
  Heart: ({ className = "w-8 h-8" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  Camera: ({ className = "w-8 h-8" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Sparkles: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
};

// Données des destinations organisées par région
const destinations = {
  nord: [
    {
      name: 'Grand Baie',
      slug: 'grand-baie',
      tagline: 'La station balnéaire animée',
      description: 'Capitale touristique du nord, Grand Baie séduit par son ambiance cosmopolite, ses boutiques de luxe et sa vie nocturne animée. La baie turquoise offre un cadre idyllique pour les sports nautiques.',
      forWho: ['Couples', 'Groupes d\'amis', 'Shopping lovers'],
      highlights: ['Vie nocturne', 'Shopping duty-free', 'Sports nautiques', 'Restaurants gastronomiques'],
      beaches: 'Plage publique de Grand Baie, La Cuvette',
      accommodation: 'Large choix d\'hôtels 3 à 5 étoiles, appartements',
      budget: '€€€',
      bestFor: 'Animation et shopping',
    },
    {
      name: 'Cap Malheureux',
      slug: 'cap-malheureux',
      tagline: 'L\'authenticité mauricienne',
      description: 'Village de pêcheurs authentique célèbre pour son église au toit rouge face à la mer. L\'endroit parfait pour vivre le Maurice traditionnel loin du tourisme de masse.',
      forWho: ['Couples romantiques', 'Photographes', 'Amateurs d\'authenticité'],
      highlights: ['Église au toit rouge', 'Village de pêcheurs', 'Couchers de soleil', 'Calme absolu'],
      beaches: 'Plage de Cap Malheureux (vue sur Coin de Mire)',
      accommodation: 'Quelques hôtels de charme, maisons d\'hôtes',
      budget: '€€',
      bestFor: 'Authenticité et tranquillité',
    },
    {
      name: 'Trou aux Biches',
      slug: 'trou-aux-biches',
      tagline: 'La plus belle plage du nord',
      description: 'Régulièrement élue parmi les plus belles plages de l\'océan Indien, Trou aux Biches offre 2 km de sable blanc bordé de filaos. Idéale pour le snorkeling avec ses eaux cristallines.',
      forWho: ['Familles', 'Couples', 'Amateurs de plage'],
      highlights: ['Plage exceptionnelle', 'Snorkeling', 'Filaos', 'Eaux calmes'],
      beaches: 'Plage de Trou aux Biches (2 km de sable blanc)',
      accommodation: 'Resorts 5 étoiles, hôtels familiaux',
      budget: '€€€',
      bestFor: 'Plage et détente',
    },
    {
      name: 'Grand Gaube',
      slug: 'grand-gaube',
      tagline: 'Le charme préservé',
      description: 'Petit village côtier au nord-est, Grand Gaube conserve une atmosphère paisible et authentique. Point de départ idéal pour explorer les îles du nord (Coin de Mire, Île Plate).',
      forWho: ['Aventuriers', 'Familles', 'Amateurs de nature'],
      highlights: ['Excursions îles du nord', 'Pêche traditionnelle', 'Authenticité', 'Prix doux'],
      beaches: 'Petites criques secrètes',
      accommodation: 'Quelques hôtels, guesthouses locales',
      budget: '€',
      bestFor: 'Découverte et budget',
    },
  ],
  est: [
    {
      name: 'Belle Mare',
      slug: 'belle-mare',
      tagline: 'Le luxe absolu',
      description: 'La côte est à son apogée : 10 km de plage immaculée bordée de cocotiers, des hôtels parmi les plus prestigieux au monde et une mer d\'un bleu irréel. Le summum du luxe tropical.',
      forWho: ['Lune de miel', 'Voyageurs luxe', 'Golfeurs'],
      highlights: ['Plage exceptionnelle', 'Hôtels 5 étoiles', 'Golf Legends', 'Spa de luxe'],
      beaches: 'Plage de Belle Mare (10 km de sable blanc)',
      accommodation: 'Palaces et resorts 5 étoiles exclusifs',
      budget: '€€€€',
      bestFor: 'Luxe et romantisme',
    },
    {
      name: 'Trou d\'Eau Douce',
      slug: 'trou-deau-douce',
      tagline: 'La porte de l\'Île aux Cerfs',
      description: 'Charmant village de pêcheurs, Trou d\'Eau Douce est le point de départ incontournable pour l\'Île aux Cerfs. Ambiance décontractée, restaurants locaux et lagon protégé.',
      forWho: ['Familles', 'Sportifs nautiques', 'Budget moyen'],
      highlights: ['Départ Île aux Cerfs', 'Kayak', 'Parasailing', 'Authenticité'],
      beaches: 'Petite plage de village, accès Île aux Cerfs',
      accommodation: 'Hôtels 3-4 étoiles, appartements',
      budget: '€€',
      bestFor: 'Base pour excursions',
    },
    {
      name: 'Île aux Cerfs',
      slug: 'ile-aux-cerfs',
      tagline: 'Le paradis des lagons',
      description: 'L\'île mythique de Maurice ! 100 hectares de plages paradisiaques, eaux turquoise et activités nautiques infinies. Un incontournable absolu malgré l\'affluence touristique.',
      forWho: ['Tous publics', 'Instagrammeurs', 'Amateurs de plage'],
      highlights: ['Plages de carte postale', 'Parasailing', 'Golf 18 trous', 'Snorkeling'],
      beaches: 'Multiples plages de sable blanc',
      accommodation: 'Excursion à la journée uniquement',
      budget: '€€ (excursion)',
      bestFor: 'Journée plage parfaite',
    },
  ],
  sud: [
    {
      name: 'Blue Bay',
      slug: 'blue-bay',
      tagline: 'Le parc marin protégé',
      description: 'Le plus beau site de snorkeling de Maurice ! Blue Bay abrite un parc marin protégé avec coraux multicolores et poissons tropicaux. Plage familiale et eaux peu profondes.',
      forWho: ['Familles avec enfants', 'Snorkelers', 'Amateurs nature'],
      highlights: ['Snorkeling exceptionnel', 'Parc marin', 'Glass bottom boat', 'Eaux calmes'],
      beaches: 'Plage de Blue Bay (parc marin)',
      accommodation: 'Quelques hôtels et guesthouses',
      budget: '€€',
      bestFor: 'Snorkeling en famille',
    },
    {
      name: 'Le Morne',
      slug: 'le-morne',
      tagline: 'L\'icône UNESCO',
      description: 'La péninsule du Morne Brabant, classée UNESCO, offre un décor à couper le souffle. Spot mondial de kitesurf, plages désertes et couchers de soleil légendaires. L\'âme sauvage de Maurice.',
      forWho: ['Kitesurfeurs', 'Randonneurs', 'Photographes'],
      highlights: ['Kitesurf mondial', 'Randonnée Morne', 'UNESCO', 'Couchers de soleil'],
      beaches: 'Plage du Morne, One Eye (kite)',
      accommodation: 'Resorts luxe, quelques options mid-range',
      budget: '€€€',
      bestFor: 'Sports et nature sauvage',
    },
    {
      name: 'Souillac',
      slug: 'souillac',
      tagline: 'La côte sauvage',
      description: 'Loin des plages de carte postale, Souillac révèle un Maurice sauvage et authentique. Falaises battues par les vagues, pont naturel de Gris-Gris et ambiance de bout du monde.',
      forWho: ['Aventuriers', 'Photographes', 'Amateurs d\'authenticité'],
      highlights: ['Gris-Gris', 'Côte sauvage', 'Rochester Falls', 'Authenticité totale'],
      beaches: 'Pas de plage (côte rocheuse spectaculaire)',
      accommodation: 'Très peu d\'options, guesthouses',
      budget: '€',
      bestFor: 'Aventure et authenticité',
    },
  ],
  ouest: [
    {
      name: 'Flic-en-Flac',
      slug: 'flic-en-flac',
      tagline: 'Les plus beaux couchers de soleil',
      description: 'Station balnéaire populaire de l\'ouest, Flic-en-Flac combine plage magnifique, vie locale animée et couchers de soleil mythiques. Accessible et authentiquement mauricienne.',
      forWho: ['Familles', 'Couples', 'Plongeurs'],
      highlights: ['Couchers de soleil', 'Plongée', 'Vie locale', 'Restaurants locaux'],
      beaches: 'Plage de Flic-en-Flac (8 km)',
      accommodation: 'Hôtels toutes gammes, appartements',
      budget: '€€',
      bestFor: 'Vie locale et plage',
    },
    {
      name: 'Tamarin',
      slug: 'tamarin',
      tagline: 'Le spot des surfeurs',
      description: 'Village bohème prisé des surfeurs et des artistes, Tamarin a gardé son âme de village de pêcheurs. Observation des dauphins au lever du soleil et vagues légendaires.',
      forWho: ['Surfeurs', 'Familles aventurières', 'Bohèmes'],
      highlights: ['Surf', 'Dauphins', 'Ambiance bohème', 'Salines'],
      beaches: 'Plage de Tamarin (surf)',
      accommodation: 'Quelques hôtels, maisons d\'hôtes',
      budget: '€€',
      bestFor: 'Surf et dauphins',
    },
  ],
  centre: [
    {
      name: 'Port Louis',
      slug: 'port-louis',
      tagline: 'La capitale culturelle',
      description: 'Seule ville de Maurice, Port Louis bouillonne de vie. Marché central coloré, Chinatown, musées et street food. Incontournable pour comprendre l\'âme multiculturelle de l\'île.',
      forWho: ['Culture lovers', 'Foodies', 'Curieux'],
      highlights: ['Marché Central', 'Chinatown', 'Caudan Waterfront', 'Street food'],
      beaches: 'Pas de plage (ville)',
      accommodation: 'Hôtels urbains, passage uniquement',
      budget: '€€',
      bestFor: 'Culture et gastronomie',
    },
    {
      name: 'Chamouny',
      slug: 'chamouny',
      tagline: 'L\'écrin de nature',
      description: 'Nichée au cœur du Parc National des Gorges de la Rivière Noire, Chamouny est le point de départ de randonnées exceptionnelles. Forêt endémique, cascades cachées et biodiversité unique.',
      forWho: ['Randonneurs', 'Amateurs de nature', 'Photographes'],
      highlights: ['Randonnées', 'Forêt endémique', 'Oiseaux rares', 'Fraîcheur'],
      beaches: 'Pas de plage (montagne)',
      accommodation: 'Très limité, eco-lodges',
      budget: '€',
      bestFor: 'Randonnée et nature',
    },
    {
      name: 'Chutes de Tamarin',
      slug: 'chutes-tamarin',
      tagline: 'Les 7 cascades mythiques',
      description: 'Les Tamarind Falls (ou 7 Cascades) sont l\'aventure nature par excellence à Maurice. Canyoning, randonnée aquatique et baignades dans des bassins naturels au cœur de la jungle.',
      forWho: ['Aventuriers', 'Sportifs', 'Amateurs de sensations'],
      highlights: ['Canyoning', 'Randonnée aquatique', 'Cascades', 'Adrénaline'],
      beaches: 'Pas de plage (cascades)',
      accommodation: 'Excursion à la journée',
      budget: '€€ (excursion)',
      bestFor: 'Aventure et adrénaline',
    },
    {
      name: 'Gorges de la Rivière Noire',
      slug: 'gorges-riviere-noire',
      tagline: 'Le poumon vert de Maurice',
      description: 'Le seul parc national de Maurice protège 6 500 hectares de forêt tropicale. Sentiers balisés, panoramas époustouflants sur l\'île et derniers refuges d\'espèces endémiques.',
      forWho: ['Randonneurs', 'Ornithologues', 'Écotouristes'],
      highlights: ['Parc National', 'Randonnées', 'Faune endémique', 'Points de vue'],
      beaches: 'Pas de plage (montagne)',
      accommodation: 'Excursion à la journée',
      budget: '€ (gratuit)',
      bestFor: 'Écotourisme',
    },
  ],
};

const bonusDestinations = [
  {
    name: 'Île Rodrigues',
    tagline: 'L\'île sœur authentique',
    description: 'À 600 km à l\'est de Maurice, Rodrigues offre un voyage dans le temps. Paysages lunaires, lagon turquoise, population chaleureuse et zéro tourisme de masse. Le secret le mieux gardé de l\'océan Indien.',
    highlights: ['Authenticité totale', 'Lagon immense', 'Randonnées', 'Gastronomie locale'],
    forWho: ['Aventuriers', 'Voyageurs hors sentiers', 'Amateurs d\'authenticité'],
    howToGet: 'Vol Air Mauritius (1h30) ou cargo (36h)',
    duration: 'Minimum 4-5 jours',
    budget: '€€',
    mustDo: ['Plaine Corail', 'Île aux Cocos', 'Caverne Patate', 'Port Mathurin'],
  },
  {
    name: 'Île aux Aigrettes',
    tagline: 'Le sanctuaire de biodiversité',
    description: 'Réserve naturelle unique gérée par la Mauritian Wildlife Foundation. Découvrez la flore et faune endémiques restaurées : tortues géantes, pigeons roses, arbres rares.',
    highlights: ['Tortues géantes', 'Pigeon rose', 'Conservation', 'Forêt ébène'],
    forWho: ['Écotouristes', 'Familles', 'Passionnés nature'],
    howToGet: 'Excursion depuis Mahébourg (15 min de bateau)',
    duration: 'Demi-journée',
    budget: '€€ (entrée + guide obligatoire)',
    mustDo: ['Visite guidée conservation', 'Observation tortues'],
  },
  {
    name: 'Îles du Nord (Coin de Mire, Île Plate, Île Gabriel)',
    tagline: 'Les perles secrètes',
    description: 'Archipel d\'îlots vierges au nord de Maurice. Plages désertes, snorkeling exceptionnel et pique-nique pieds dans l\'eau. Le Maurice préservé.',
    highlights: ['Plages vierges', 'Snorkeling', 'Dauphins', 'Journée Robinson'],
    forWho: ['Tous publics', 'Snorkelers', 'Familles'],
    howToGet: 'Catamaran depuis Grand Baie (excursion journée)',
    duration: 'Journée complète',
    budget: '€€€ (excursion tout compris)',
    mustDo: ['Snorkeling Coin de Mire', 'BBQ Île Gabriel', 'Observation dauphins'],
  },
];

// Composant CTA pour activités
function ActivityCTA({ location, className = '' }: { location: string; className?: string }) {
  return (
    <Link
      href={`/activities?location=${location}`}
      className={`inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all shadow-md hover:shadow-lg ${className}`}
    >
      <Icons.Sparkles className="w-4 h-4" />
      Voir les activités
      <Icons.ArrowRight className="w-4 h-4" />
    </Link>
  );
}

// Composant carte destination
function DestinationCard({ dest }: { dest: typeof destinations.nord[0] }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-48 bg-gradient-to-br from-cyan-400 to-blue-500">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
            {dest.budget}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h4 className="text-2xl font-bold text-white drop-shadow-lg">{dest.name}</h4>
          <p className="text-white/90 text-sm">{dest.tagline}</p>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-700 mb-4 leading-relaxed">{dest.description}</p>

        <div className="mb-4">
          <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <Icons.Users className="w-4 h-4 text-cyan-600" />
            Pour qui ?
          </h5>
          <div className="flex flex-wrap gap-2">
            {dest.forWho.map((who, i) => (
              <span key={i} className="bg-cyan-50 text-cyan-700 px-2 py-1 rounded text-xs">
                {who}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <Icons.Star className="w-4 h-4 text-yellow-500" />
            Points forts
          </h5>
          <div className="grid grid-cols-2 gap-1">
            {dest.highlights.map((hl, i) => (
              <span key={i} className="text-sm text-gray-600 flex items-center gap-1">
                <Icons.Check className="w-3 h-3 text-green-500" />
                {hl}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4 p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 mb-1">
            <Icons.Waves className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-gray-700">Plages</span>
          </div>
          <p className="text-sm text-gray-600">{dest.beaches}</p>
        </div>

        <div className="mb-4 p-3 bg-amber-50 rounded-lg">
          <div className="flex items-center gap-2 mb-1">
            <Icons.Building className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-medium text-gray-700">Hébergement</span>
          </div>
          <p className="text-sm text-gray-600">{dest.accommodation}</p>
        </div>

        <div className="bg-green-50 p-3 rounded-lg mb-5">
          <p className="text-sm font-medium text-green-800">
            <Icons.Compass className="w-4 h-4 inline mr-1" />
            Idéal pour : {dest.bestFor}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href={`/que-faire-${dest.slug}`}
            className="flex-1 text-center bg-gray-900 text-white px-4 py-2.5 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Le guide pas à pas
          </Link>
          <ActivityCTA location={dest.slug} className="flex-1 justify-center" />
        </div>
      </div>
    </div>
  );
}

export default function OuAllerMauricePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-700 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-[url('/patterns/waves.svg')] opacity-10" />
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-cyan-200 mb-4">
            <Icons.MapPin />
            <span>Guide destinations Maurice</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Où aller à Maurice ?<br />
            <span className="text-cyan-300">Tous les spots pour un voyage réussi !</span>
          </h1>
          <p className="text-xl text-cyan-100 max-w-3xl leading-relaxed mb-8">
            Plages paradisiaques au nord, montagnes luxuriantes au centre, lagons préservés à l&apos;est,
            falaises sauvages au sud... Découvrez <strong>16 destinations comparées</strong> pour
            trouver le coin de Maurice qui vous ressemble.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/10 px-4 py-2 rounded-full">16 destinations</span>
            <span className="bg-white/10 px-4 py-2 rounded-full">Comparatif complet</span>
            <span className="bg-white/10 px-4 py-2 rounded-full">Pour chaque profil</span>
          </div>
        </div>
      </section>

      {/* Table des matières */}
      <section className="bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <nav className="flex flex-wrap gap-4 text-sm justify-center">
            <a href="#nord" className="text-gray-600 hover:text-cyan-600 font-medium flex items-center gap-1">
              <Icons.Sun className="w-4 h-4" /> Nord
            </a>
            <a href="#est" className="text-gray-600 hover:text-cyan-600 font-medium flex items-center gap-1">
              <Icons.Palmtree className="w-4 h-4" /> Est
            </a>
            <a href="#sud" className="text-gray-600 hover:text-cyan-600 font-medium flex items-center gap-1">
              <Icons.Waves className="w-4 h-4" /> Sud
            </a>
            <a href="#ouest" className="text-gray-600 hover:text-cyan-600 font-medium flex items-center gap-1">
              <Icons.Umbrella className="w-4 h-4" /> Ouest
            </a>
            <a href="#centre" className="text-gray-600 hover:text-cyan-600 font-medium flex items-center gap-1">
              <Icons.Mountain className="w-4 h-4" /> Centre
            </a>
            <a href="#bonus" className="text-gray-600 hover:text-cyan-600 font-medium flex items-center gap-1">
              <Icons.Anchor className="w-4 h-4" /> Bonus
            </a>
            <a href="#comparatif" className="text-gray-600 hover:text-cyan-600 font-medium flex items-center gap-1">
              <Icons.Compass className="w-4 h-4" /> Comparatif
            </a>
            <a href="#faq" className="text-gray-600 hover:text-cyan-600 font-medium flex items-center gap-1">
              <Icons.Star className="w-4 h-4" /> FAQ
            </a>
          </nav>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              <strong>Où partir à Maurice ?</strong> C&apos;est LA question que tout voyageur se pose avant
              d&apos;atterrir sur cette île paradisiaque de l&apos;océan Indien. Et pour cause : avec ses
              330 km de côtes, ses plages de rêve, ses montagnes verdoyantes et ses lagons
              turquoise, <strong>chaque région de Maurice offre une expérience unique</strong>.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Mais ne vous y trompez pas : le nord festif n&apos;a rien à voir avec le sud sauvage,
              et l&apos;est luxueux diffère totalement de l&apos;ouest authentique. Pour un premier voyage
              ou un retour sur l&apos;île, choisir la bonne destination fait toute la différence.
            </p>
            <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 rounded-r-lg my-8">
              <h3 className="text-lg font-semibold text-cyan-900 mb-2">Dans ce dossier complet :</h3>
              <ul className="space-y-2 text-cyan-800">
                <li className="flex items-center gap-2">
                  <Icons.Check className="w-5 h-5 text-cyan-600" />
                  Les 16 meilleures destinations de Maurice analysées en détail
                </li>
                <li className="flex items-center gap-2">
                  <Icons.Check className="w-5 h-5 text-cyan-600" />
                  Pour qui ? Budget ? Activités ? Tout est comparé
                </li>
                <li className="flex items-center gap-2">
                  <Icons.Check className="w-5 h-5 text-cyan-600" />
                  3 destinations bonus dont l&apos;île Rodrigues
                </li>
                <li className="flex items-center gap-2">
                  <Icons.Check className="w-5 h-5 text-cyan-600" />
                  Tableau comparatif pour choisir en un coup d&apos;œil
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NORD */}
      <section id="nord" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
              <Icons.Sun className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <span className="text-sm text-amber-600 font-medium">Région</span>
              <h2 className="text-3xl font-bold text-gray-900">Le Nord de Maurice</h2>
            </div>
          </div>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl">
            La côte nord est <strong>le cœur touristique de Maurice</strong>. Entre Grand Baie la festive
            et Cap Malheureux l&apos;authentique, vous trouverez les plus belles plages de l&apos;île, une vie
            nocturne animée et tous les services pour un séjour confortable.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.nord.map((dest) => (
              <DestinationCard key={dest.slug} dest={dest} />
            ))}
          </div>

          <div className="mt-10 p-6 bg-amber-50 rounded-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Notre conseil pour le Nord</h3>
            <p className="text-gray-700">
              <strong>Pour un premier voyage</strong>, posez vos valises à Trou aux Biches pour la plage
              et l&apos;accès facile à Grand Baie pour les sorties. Si vous cherchez l&apos;authenticité,
              préférez Cap Malheureux ou Grand Gaube.
            </p>
          </div>
        </div>
      </section>

      {/* EST */}
      <section id="est" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <Icons.Palmtree className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <span className="text-sm text-green-600 font-medium">Région</span>
              <h2 className="text-3xl font-bold text-gray-900">L&apos;Est de Maurice</h2>
            </div>
          </div>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl">
            La côte est, c&apos;est <strong>le luxe absolu</strong>. Les plus beaux hôtels de l&apos;île,
            les plages les plus longues, et le mythique Île aux Cerfs. Un décor de rêve pour
            une lune de miel ou un séjour all-inclusive premium.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.est.map((dest) => (
              <DestinationCard key={dest.slug} dest={dest} />
            ))}
          </div>

          <div className="mt-10 p-6 bg-green-50 rounded-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Notre conseil pour l&apos;Est</h3>
            <p className="text-gray-700">
              <strong>Pour une lune de miel</strong>, Belle Mare est imbattable. Budget plus serré ?
              Trou d&apos;Eau Douce offre un excellent rapport qualité-prix avec accès facile à l&apos;Île aux Cerfs.
            </p>
          </div>
        </div>
      </section>

      {/* SUD */}
      <section id="sud" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Icons.Waves className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <span className="text-sm text-blue-600 font-medium">Région</span>
              <h2 className="text-3xl font-bold text-gray-900">Le Sud de Maurice</h2>
            </div>
          </div>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl">
            Le sud de Maurice est <strong>le Maurice authentique et sauvage</strong>. Moins touristique,
            cette région révèle des paysages spectaculaires : le Morne UNESCO, les falaises de Gris-Gris,
            et Blue Bay pour le snorkeling.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.sud.map((dest) => (
              <DestinationCard key={dest.slug} dest={dest} />
            ))}
          </div>

          <div className="mt-10 p-6 bg-blue-50 rounded-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Notre conseil pour le Sud</h3>
            <p className="text-gray-700">
              <strong>Pour les kitesurfeurs</strong>, Le Morne est incontournable (juin-octobre).
              Pour les familles avec enfants, Blue Bay et son lagon peu profond est parfait pour le snorkeling.
            </p>
          </div>
        </div>
      </section>

      {/* OUEST */}
      <section id="ouest" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <Icons.Umbrella className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <span className="text-sm text-orange-600 font-medium">Région</span>
              <h2 className="text-3xl font-bold text-gray-900">L&apos;Ouest de Maurice</h2>
            </div>
          </div>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl">
            La côte ouest est célèbre pour <strong>ses couchers de soleil légendaires</strong>.
            Entre Flic-en-Flac populaire et Tamarin bohème, c&apos;est le Maurice authentique avec
            une vraie vie locale, loin des complexes hôteliers.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {destinations.ouest.map((dest) => (
              <DestinationCard key={dest.slug} dest={dest} />
            ))}
          </div>

          <div className="mt-10 p-6 bg-orange-50 rounded-2xl max-w-4xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Notre conseil pour l&apos;Ouest</h3>
            <p className="text-gray-700">
              <strong>Pour voir des dauphins</strong>, Tamarin est THE place (départ à 6h du matin).
              Flic-en-Flac est idéal pour un séjour authentique avec plage et restaurants locaux.
            </p>
          </div>
        </div>
      </section>

      {/* CENTRE */}
      <section id="centre" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
              <Icons.Mountain className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <span className="text-sm text-emerald-600 font-medium">Région</span>
              <h2 className="text-3xl font-bold text-gray-900">Le Centre de Maurice</h2>
            </div>
          </div>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl">
            Le centre de l&apos;île révèle <strong>un Maurice méconnu</strong> : forêts tropicales,
            cascades spectaculaires, randonnées dans le parc national et la vibrante capitale
            Port Louis. Essentiel pour comprendre l&apos;âme de Maurice.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.centre.map((dest) => (
              <DestinationCard key={dest.slug} dest={dest} />
            ))}
          </div>

          <div className="mt-10 p-6 bg-emerald-50 rounded-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Notre conseil pour le Centre</h3>
            <p className="text-gray-700">
              <strong>Ne manquez pas Port Louis</strong> pour le marché central (le matin de préférence).
              Les Chutes de Tamarin sont l&apos;excursion aventure incontournable, à réserver avec un guide.
            </p>
          </div>
        </div>
      </section>

      {/* DESTINATIONS BONUS */}
      <section id="bonus" className="py-16 bg-gradient-to-br from-indigo-600 to-purple-700 text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Icons.Anchor className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-sm text-indigo-200 font-medium">Au-delà de Maurice</span>
              <h2 className="text-3xl font-bold">Destinations Bonus</h2>
            </div>
          </div>
          <p className="text-lg text-indigo-100 mb-10 max-w-3xl">
            Envie d&apos;aller plus loin ? L&apos;archipel des Mascareignes cache des trésors méconnus.
            Rodrigues, les îles du nord, l&apos;Île aux Aigrettes... <strong>Des expériences uniques</strong>
            pour les voyageurs curieux.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {bonusDestinations.map((dest, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold mb-2">{dest.name}</h3>
                <p className="text-indigo-200 text-sm mb-4">{dest.tagline}</p>
                <p className="text-indigo-100 mb-6">{dest.description}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Points forts</h4>
                    <div className="flex flex-wrap gap-2">
                      {dest.highlights.map((hl, i) => (
                        <span key={i} className="bg-white/20 px-2 py-1 rounded text-xs">{hl}</span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-indigo-200 block">Comment y aller</span>
                      <span className="font-medium">{dest.howToGet}</span>
                    </div>
                    <div>
                      <span className="text-indigo-200 block">Durée conseillée</span>
                      <span className="font-medium">{dest.duration}</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-indigo-200 text-sm">Budget : </span>
                    <span className="font-semibold">{dest.budget}</span>
                  </div>

                  <div className="pt-4 border-t border-white/20">
                    <h4 className="font-semibold text-white mb-2">À ne pas manquer</h4>
                    <ul className="space-y-1">
                      {dest.mustDo.map((item, i) => (
                        <li key={i} className="text-sm text-indigo-100 flex items-center gap-2">
                          <Icons.Check className="w-4 h-4 text-indigo-300" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TABLEAU COMPARATIF */}
      <section id="comparatif" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Comparatif des destinations Maurice
          </h2>
          <p className="text-lg text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Comparez en un coup d&apos;œil toutes les destinations pour trouver celle qui correspond
            à votre profil de voyageur.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="px-4 py-4 text-left">Destination</th>
                  <th className="px-4 py-4 text-left">Région</th>
                  <th className="px-4 py-4 text-center">Budget</th>
                  <th className="px-4 py-4 text-left">Idéal pour</th>
                  <th className="px-4 py-4 text-center">Plage</th>
                  <th className="px-4 py-4 text-center">Activités</th>
                  <th className="px-4 py-4 text-center">Famille</th>
                  <th className="px-4 py-4 text-center">Couple</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { name: 'Grand Baie', region: 'Nord', budget: '€€€', ideal: 'Animation, shopping', plage: '★★★', activites: '★★★★★', famille: '★★★', couple: '★★★★', slug: 'grand-baie' },
                  { name: 'Trou aux Biches', region: 'Nord', budget: '€€€', ideal: 'Plage, détente', plage: '★★★★★', activites: '★★★', famille: '★★★★★', couple: '★★★★', slug: 'trou-aux-biches' },
                  { name: 'Cap Malheureux', region: 'Nord', budget: '€€', ideal: 'Authenticité', plage: '★★★', activites: '★★', famille: '★★★', couple: '★★★★★', slug: 'cap-malheureux' },
                  { name: 'Grand Gaube', region: 'Nord', budget: '€', ideal: 'Budget, excursions', plage: '★★', activites: '★★★', famille: '★★★', couple: '★★★', slug: 'grand-gaube' },
                  { name: 'Belle Mare', region: 'Est', budget: '€€€€', ideal: 'Luxe, lune de miel', plage: '★★★★★', activites: '★★★★', famille: '★★★', couple: '★★★★★', slug: 'belle-mare' },
                  { name: 'Trou d\'Eau Douce', region: 'Est', budget: '€€', ideal: 'Île aux Cerfs', plage: '★★★', activites: '★★★★', famille: '★★★★', couple: '★★★', slug: 'trou-deau-douce' },
                  { name: 'Île aux Cerfs', region: 'Est', budget: '€€', ideal: 'Journée plage', plage: '★★★★★', activites: '★★★★★', famille: '★★★★', couple: '★★★★', slug: 'ile-aux-cerfs' },
                  { name: 'Blue Bay', region: 'Sud', budget: '€€', ideal: 'Snorkeling', plage: '★★★★', activites: '★★★', famille: '★★★★★', couple: '★★★', slug: 'blue-bay' },
                  { name: 'Le Morne', region: 'Sud', budget: '€€€', ideal: 'Kitesurf, nature', plage: '★★★★', activites: '★★★★★', famille: '★★', couple: '★★★★', slug: 'le-morne' },
                  { name: 'Souillac', region: 'Sud', budget: '€', ideal: 'Aventure, authenticité', plage: '★', activites: '★★★', famille: '★★', couple: '★★★', slug: 'souillac' },
                  { name: 'Flic-en-Flac', region: 'Ouest', budget: '€€', ideal: 'Vie locale, plongée', plage: '★★★★', activites: '★★★★', famille: '★★★★', couple: '★★★★', slug: 'flic-en-flac' },
                  { name: 'Tamarin', region: 'Ouest', budget: '€€', ideal: 'Surf, dauphins', plage: '★★★', activites: '★★★★', famille: '★★★', couple: '★★★★', slug: 'tamarin' },
                  { name: 'Port Louis', region: 'Centre', budget: '€€', ideal: 'Culture, street food', plage: '★', activites: '★★★', famille: '★★★', couple: '★★★', slug: 'port-louis' },
                  { name: 'Chamouny', region: 'Centre', budget: '€', ideal: 'Randonnée, nature', plage: '★', activites: '★★★', famille: '★★', couple: '★★★', slug: 'chamouny' },
                  { name: 'Chutes Tamarin', region: 'Centre', budget: '€€', ideal: 'Aventure, canyoning', plage: '★', activites: '★★★★★', famille: '★★', couple: '★★★★', slug: 'chutes-tamarin' },
                  { name: 'Gorges Rivière Noire', region: 'Centre', budget: '€', ideal: 'Écotourisme', plage: '★', activites: '★★★★', famille: '★★★', couple: '★★★', slug: 'gorges-riviere-noire' },
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <Link href={`/que-faire-${row.slug}`} className="font-medium text-cyan-600 hover:text-cyan-700">
                        {row.name}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{row.region}</td>
                    <td className="px-4 py-3 text-center font-medium text-green-600">{row.budget}</td>
                    <td className="px-4 py-3 text-gray-700 text-sm">{row.ideal}</td>
                    <td className="px-4 py-3 text-center text-sm text-yellow-500">{row.plage}</td>
                    <td className="px-4 py-3 text-center text-sm text-yellow-500">{row.activites}</td>
                    <td className="px-4 py-3 text-center text-sm text-yellow-500">{row.famille}</td>
                    <td className="px-4 py-3 text-center text-sm text-yellow-500">{row.couple}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500 text-center mt-4">
            Légende budget : € = économique | €€ = modéré | €€€ = confortable | €€€€ = luxe
          </p>
        </div>
      </section>

      {/* COMMENT CHOISIR */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Comment choisir sa destination à Maurice ?
          </h2>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Icons.Heart className="w-8 h-8 text-pink-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Voyage en couple / Lune de miel</h3>
                <p className="text-gray-700 mb-3">
                  Direction la côte est ! <strong>Belle Mare</strong> pour le luxe absolu,
                  <strong> Trou aux Biches</strong> pour l&apos;équilibre parfait plage-services,
                  ou <strong>Cap Malheureux</strong> pour le romantisme authentique.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <Link href="/que-faire-belle-mare" className="text-sm bg-pink-50 text-pink-700 px-3 py-1 rounded-full hover:bg-pink-100">
                    → Belle Mare
                  </Link>
                  <Link href="/que-faire-trou-aux-biches" className="text-sm bg-pink-50 text-pink-700 px-3 py-1 rounded-full hover:bg-pink-100">
                    → Trou aux Biches
                  </Link>
                  <Link href="/que-faire-cap-malheureux" className="text-sm bg-pink-50 text-pink-700 px-3 py-1 rounded-full hover:bg-pink-100">
                    → Cap Malheureux
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Icons.Users className="w-8 h-8 text-blue-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Voyage en famille</h3>
                <p className="text-gray-700 mb-3">
                  Privilégiez les plages sécurisées avec lagons peu profonds.
                  <strong> Blue Bay</strong> est parfait pour le snorkeling avec enfants,
                  <strong> Flic-en-Flac</strong> pour la vie locale, et
                  <strong> Trou aux Biches</strong> pour les eaux calmes.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <Link href="/blue-bay-ile-maurice" className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-100">
                    → Blue Bay
                  </Link>
                  <Link href="/que-faire-flic-en-flac" className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-100">
                    → Flic-en-Flac
                  </Link>
                  <Link href="/que-faire-trou-aux-biches" className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-100">
                    → Trou aux Biches
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Icons.Compass className="w-8 h-8 text-orange-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Voyage aventure / Sportif</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Le Morne</strong> pour le kitesurf (spot mondial),
                  <strong> Tamarin</strong> pour le surf et les dauphins,
                  <strong> Chutes de Tamarin</strong> pour le canyoning, et les
                  <strong> Gorges de la Rivière Noire</strong> pour la randonnée.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <Link href="/que-faire-le-morne" className="text-sm bg-orange-50 text-orange-700 px-3 py-1 rounded-full hover:bg-orange-100">
                    → Le Morne
                  </Link>
                  <Link href="/que-faire-tamarin" className="text-sm bg-orange-50 text-orange-700 px-3 py-1 rounded-full hover:bg-orange-100">
                    → Tamarin
                  </Link>
                  <Link href="/que-faire-chutes-tamarin" className="text-sm bg-orange-50 text-orange-700 px-3 py-1 rounded-full hover:bg-orange-100">
                    → Chutes Tamarin
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Icons.Camera className="w-8 h-8 text-green-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Premier voyage à Maurice</h3>
                <p className="text-gray-700 mb-3">
                  Pour découvrir le meilleur de Maurice, posez-vous dans le <strong>Nord</strong>
                  (Grand Baie ou Trou aux Biches) qui offre le meilleur équilibre : plages,
                  activités, restaurants et accès facile aux autres régions.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <Link href="/que-faire-grand-baie" className="text-sm bg-green-50 text-green-700 px-3 py-1 rounded-full hover:bg-green-100">
                    → Grand Baie
                  </Link>
                  <Link href="/que-faire-trou-aux-biches" className="text-sm bg-green-50 text-green-700 px-3 py-1 rounded-full hover:bg-green-100">
                    → Trou aux Biches
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Icons.Star className="w-8 h-8 text-purple-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Petit budget</h3>
                <p className="text-gray-700 mb-3">
                  Les meilleurs spots pour les budgets serrés : <strong>Grand Gaube</strong>,
                  <strong> Souillac</strong> ou <strong>Chamouny</strong>. Moins touristiques,
                  ces destinations offrent une authenticité rare et des prix doux.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <Link href="/que-faire-grand-gaube" className="text-sm bg-purple-50 text-purple-700 px-3 py-1 rounded-full hover:bg-purple-100">
                    → Grand Gaube
                  </Link>
                  <Link href="/que-faire-souillac" className="text-sm bg-purple-50 text-purple-700 px-3 py-1 rounded-full hover:bg-purple-100">
                    → Souillac
                  </Link>
                  <Link href="/que-faire-chamouny" className="text-sm bg-purple-50 text-purple-700 px-3 py-1 rounded-full hover:bg-purple-100">
                    → Chamouny
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Questions fréquentes : Où aller à Maurice ?
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'Quelle est la plus belle région de Maurice ?',
                a: 'Cela dépend de vos attentes ! Pour les plages, la côte est (Belle Mare) est imbattable. Pour l\'authenticité et les couchers de soleil, la côte ouest (Flic-en-Flac, Tamarin). Pour les paysages sauvages, le sud (Le Morne, Souillac). Pour la vie nocturne, le nord (Grand Baie).'
              },
              {
                q: 'Où loger à Maurice pour la première fois ?',
                a: 'Pour un premier séjour, le nord de l\'île (Grand Baie, Trou aux Biches) offre le meilleur compromis : belles plages, nombreuses activités, restaurants variés et accès facile aux autres régions. C\'est la région la plus touristique mais aussi la plus pratique.'
              },
              {
                q: 'Est-il nécessaire de louer une voiture à Maurice ?',
                a: 'Fortement recommandé si vous voulez explorer l\'île. Maurice est petite (1h30 du nord au sud) et les routes sont correctes. Sans voiture, vous serez limité à votre hôtel et aux excursions organisées. Les bus existent mais sont lents et peu fiables.'
              },
              {
                q: 'Où aller à Maurice en famille avec enfants ?',
                a: 'Blue Bay est parfait pour le snorkeling en eaux peu profondes. Trou aux Biches offre une plage sécurisée avec eaux calmes. Flic-en-Flac combine plage et vie locale. Évitez Le Morne (vagues) et la côte sud (mer agitée) avec de jeunes enfants.'
              },
              {
                q: 'Quelle est la meilleure période pour visiter Maurice ?',
                a: 'La meilleure période est de mai à décembre (hiver austral) : climat sec, températures agréables (20-26°C), moins d\'humidité. L\'été (janvier-mars) est chaud et humide avec risque de cyclones. Le kitesurf au Morne est optimal de juin à octobre.'
              },
              {
                q: 'Combien de jours faut-il pour visiter Maurice ?',
                a: '10 à 14 jours sont idéaux pour bien découvrir l\'île. En moins d\'une semaine, concentrez-vous sur une région. Si vous avez 2 semaines, divisez votre séjour entre nord et sud, ou combinez Maurice et Rodrigues.'
              },
              {
                q: 'Peut-on visiter Rodrigues depuis Maurice ?',
                a: 'Oui, Air Mauritius propose plusieurs vols quotidiens (1h30). Prévoyez minimum 4-5 jours sur place. Rodrigues est très différente de Maurice : plus authentique, moins développée, avec un immense lagon. Idéal pour les voyageurs en quête d\'authenticité.'
              },
              {
                q: 'Où voir des dauphins à Maurice ?',
                a: 'Le spot le plus réputé est Tamarin sur la côte ouest. Les excursions partent à l\'aube (6h) pour maximiser les chances de rencontres avec les dauphins. Privilégiez les sorties éco-responsables en petit groupe qui respectent les animaux.'
              },
            ].map((faq, index) => (
              <details key={index} className="bg-white rounded-xl shadow-sm overflow-hidden group">
                <summary className="px-6 py-5 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 flex justify-between items-center">
                  {faq.q}
                  <Icons.ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-5 text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-cyan-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à découvrir Maurice ?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Explorez nos guides détaillés pour chaque destination et réservez vos activités
            directement pour un voyage sur-mesure.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/que-faire-ile-maurice"
              className="bg-white text-cyan-700 px-6 py-3 rounded-xl font-semibold hover:bg-cyan-50 transition-colors shadow-lg"
            >
              Que faire à Maurice ?
            </Link>
            <Link
              href="/activites-ile-maurice"
              className="bg-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-cyan-400 transition-colors border border-cyan-400"
            >
              Toutes les activités
            </Link>
          </div>
        </div>
      </section>

      {/* Structured Data FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Quelle est la plus belle région de Maurice ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Cela dépend de vos attentes ! Pour les plages, la côte est (Belle Mare) est imbattable. Pour l\'authenticité et les couchers de soleil, la côte ouest. Pour les paysages sauvages, le sud. Pour la vie nocturne, le nord.'
                }
              },
              {
                '@type': 'Question',
                name: 'Où loger à Maurice pour la première fois ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Pour un premier séjour, le nord de l\'île (Grand Baie, Trou aux Biches) offre le meilleur compromis : belles plages, nombreuses activités, restaurants variés et accès facile aux autres régions.'
                }
              },
              {
                '@type': 'Question',
                name: 'Où aller à Maurice en famille avec enfants ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Blue Bay est parfait pour le snorkeling en eaux peu profondes. Trou aux Biches offre une plage sécurisée avec eaux calmes. Flic-en-Flac combine plage et vie locale.'
                }
              },
              {
                '@type': 'Question',
                name: 'Combien de jours faut-il pour visiter Maurice ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '10 à 14 jours sont idéaux pour bien découvrir l\'île. En moins d\'une semaine, concentrez-vous sur une région. Si vous avez 2 semaines, divisez votre séjour entre nord et sud.'
                }
              }
            ]
          })
        }}
      />
    </main>
  );
}
