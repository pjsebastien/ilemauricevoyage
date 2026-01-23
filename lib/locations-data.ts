/**
 * Données SEO et contenu pour les pages "Que faire à [lieu]"
 */

export interface LocationData {
  slug: string;
  name: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  intro: string;
  highlights: string[];
  description: string;
  bestMonths: string[];
  nearbyLocations: string[];
  coordinates?: {
    lat: number;
    lng: number;
  };
  tips: string[];
}

export const locationsData: Record<string, LocationData> = {
  'grand-baie': {
    slug: 'grand-baie',
    name: 'Grand Baie',
    title: 'Que faire à Grand Baie',
    metaTitle: 'Que faire à Grand Baie ? Top activités et excursions 2024',
    metaDescription: 'Découvrez les meilleures activités à Grand Baie : plongée, catamaran, shopping, vie nocturne. Guide complet avec prix, conseils et meilleures périodes.',
    heroImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/03/ile-maurice-voyage-scaled.jpg',
    intro: 'Grand Baie est LA station balnéaire incontournable de l\'Île Maurice. Située au nord de l\'île, cette baie animée offre un mélange parfait entre activités nautiques, shopping, restaurants et vie nocturne.',
    highlights: [
      'Centre névralgique du tourisme mauricien',
      'Meilleur spot pour les sports nautiques',
      'Shopping et vie nocturne animée',
      'Point de départ pour les excursions vers les îles du nord'
    ],
    description: 'Grand Baie (ou Grand-Baie) est le cœur touristique de Maurice. Cette ancienne baie de pêcheurs s\'est transformée en une destination cosmopolite où se concentrent hôtels, restaurants, boutiques et agences de sports nautiques. Le lagon turquoise offre des conditions idéales pour la plongée, le snorkeling, le kitesurf et les excursions en catamaran vers l\'Île Plate, l\'Île Ronde ou l\'Île aux Cerfs. La vie nocturne y est la plus animée de l\'île avec ses bars, clubs et casinos.',
    bestMonths: ['mai', 'juin', 'septembre', 'octobre', 'novembre'],
    nearbyLocations: ['trou-aux-biches', 'cap-malheureux', 'pereybere'],
    coordinates: { lat: -20.0167, lng: 57.5833 },
    tips: [
      'Évitez les week-ends si vous cherchez le calme (très fréquenté par les Mauriciens)',
      'Négociez toujours les prix des excursions en catamaran',
      'Réservez vos restaurants en avance en haute saison',
      'Le marché de Grand Baie (mercredi) est idéal pour les souvenirs'
    ]
  },

  'flic-en-flac': {
    slug: 'flic-en-flac',
    name: 'Flic en Flac',
    title: 'Que faire à Flic en Flac',
    metaTitle: 'Que faire à Flic en Flac ? Activités et plages 2024',
    metaDescription: 'Guide complet de Flic en Flac : plongée, plages, excursions dauphins. Découvrez la meilleure côte pour votre séjour à Maurice avec tous nos conseils.',
    heroImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/02/meilleurs-hotels-5-etoiles-ile-maurice-plage.jpeg',
    intro: 'Flic en Flac est le paradis des plongeurs sur la côte ouest de Maurice. Cette longue plage de sable blanc offre une atmosphère plus décontractée que Grand Baie, avec d\'excellentes conditions pour la baignade et les sports nautiques.',
    highlights: [
      'Meilleur spot de plongée de l\'île',
      'Longue plage de 2km de sable fin',
      'Excursions dauphins à Tamarin à proximité',
      'Couchers de soleil spectaculaires'
    ],
    description: 'Flic en Flac (ou Flic-en-Flac) est la station balnéaire préférée des plongeurs. La côte ouest bénéficie de la meilleure météo de l\'île toute l\'année et ses eaux calmes abritent une vie marine exceptionnelle. Le village offre une ambiance locale authentique avec ses snacks, ses petits restaurants créoles et son marché hebdomadaire. C\'est également le point de départ idéal pour observer les dauphins dans la baie de Tamarin à l\'aube.',
    bestMonths: ['toute-annee'], // La côte ouest est bonne toute l'année
    nearbyLocations: ['tamarin', 'riviere-noire', 'le-morne'],
    coordinates: { lat: -20.2833, lng: 57.3667 },
    tips: [
      'La plage publique au centre peut être bondée le week-end',
      'Les meilleurs centres de plongée sont au sud de la plage',
      'Louez une voiture pour explorer la côte ouest facilement',
      'Le Spar supermarché est pratique pour faire vos courses'
    ]
  },

  'le-morne': {
    slug: 'le-morne',
    name: 'Le Morne',
    title: 'Que faire au Morne',
    metaTitle: 'Que faire au Morne ? Kitesurf, randonnée et plages 2024',
    metaDescription: 'Le Morne : capitale du kitesurf, randonnée vers le sommet classé UNESCO, plages paradisiaques. Guide complet des activités et conseils pratiques.',
    heroImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/03/ile-maurice-voyage-scaled.jpg',
    intro: 'Le Morne Brabant est l\'un des sites les plus emblématiques de Maurice. Cette péninsule du sud-ouest offre des paysages à couper le souffle, des plages paradisiaques et les meilleures conditions de kitesurf au monde.',
    highlights: [
      'Spot de kitesurf de renommée mondiale',
      'Montagne classée patrimoine UNESCO',
      'Plages parmi les plus belles de Maurice',
      'Vue sur le lagon turquoise et le récif'
    ],
    description: 'Le Morne Brabant (556m) domine majestueusement la péninsule sud-ouest. Classé au patrimoine mondial de l\'UNESCO pour son histoire liée à l\'esclavage, ce site sacré offre une randonnée spectaculaire jusqu\'au sommet. La lagune du Morne est mondialement connue pour le kitesurf grâce à ses vents alizés constants (juin-septembre) et son plan d\'eau parfait. Les plages publiques comme La Cambuse et Macondé Beach sont d\'une beauté exceptionnelle.',
    bestMonths: ['juin', 'juillet', 'aout', 'septembre'],
    nearbyLocations: ['riviere-noire', 'flic-en-flac', 'chamarel'],
    coordinates: { lat: -20.4758, lng: 57.3289 },
    tips: [
      'La randonnée du Morne nécessite un guide (obligatoire)',
      'Partez tôt le matin pour éviter la chaleur (départ 6h-7h)',
      'Juin-août = haute saison kitesurf, réservez écoles en avance',
      'Les plages publiques sont moins fréquentées que celles des hôtels'
    ]
  },

  'ile-aux-cerfs': {
    slug: 'ile-aux-cerfs',
    name: 'Île aux Cerfs',
    title: 'Que faire à l\'Île aux Cerfs',
    metaTitle: 'Que faire à l\'Île aux Cerfs ? Excursions et activités 2024',
    metaDescription: 'Île aux Cerfs : plages paradisiaques, sports nautiques, restaurant. Guide complet pour organiser votre excursion avec prix et conseils pratiques.',
    heroImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2023/08/activtes-ile-aux-cerfs-ile-maurice.jpg',
    intro: 'L\'Île aux Cerfs est l\'excursion incontournable de l\'est mauricien. Cette petite île paradisiaque aux plages de sable blanc et eaux turquoise offre une journée détente inoubliable.',
    highlights: [
      'Plages de carte postale avec sable blanc poudreux',
      'Lagon turquoise peu profond idéal pour enfants',
      'Activités nautiques variées (parasailing, tube, ski)',
      'Restaurant et bars sur la plage'
    ],
    description: 'L\'Île aux Cerfs est une petite île privée située au large de Trou d\'Eau Douce sur la côte est. Accessible uniquement en bateau (10 min de traversée), elle offre plusieurs plages paradisiaques, un golf 18 trous, des restaurants et de nombreuses activités nautiques. L\'excursion classique en catamaran inclut souvent le snorkeling à l\'Île aux Aigrettes, un BBQ sur l\'île et la visite de la cascade GRSE.',
    bestMonths: ['octobre', 'novembre', 'decembre', 'janvier', 'fevrier', 'mars'],
    nearbyLocations: ['trou-deau-douce', 'belle-mare', 'mahebourg'],
    coordinates: { lat: -20.2861, lng: 57.7942 },
    tips: [
      'Arrivez tôt (avant 10h) pour éviter la foule',
      'Prévoyez crème solaire, chapeau et eau',
      'Le restaurant sur l\'île est cher, apportez votre pique-nique',
      'Activités nautiques payantes sur place (négociez les prix)'
    ]
  },

  'belle-mare': {
    slug: 'belle-mare',
    name: 'Belle Mare',
    title: 'Que faire à Belle Mare',
    metaTitle: 'Que faire à Belle Mare ? Plages et activités côte est 2024',
    metaDescription: 'Belle Mare : plage de rêve de 10km, golf, sports nautiques. Découvrez la côte est de Maurice avec notre guide complet et tous nos conseils.',
    heroImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/02/meilleurs-hotels-5-etoiles-ile-maurice-plage.jpeg',
    intro: 'Belle Mare possède l\'une des plus longues et belles plages de Maurice. Cette étendue de sable blanc de 10km sur la côte est est bordée d\'hôtels luxueux et offre un cadre idyllique pour la détente.',
    highlights: [
      'Plage de sable fin de 10km',
      'Eau turquoise cristalline',
      'Golfs de renommée internationale',
      'Resorts luxueux avec spas'
    ],
    description: 'Belle Mare s\'étend sur 10 kilomètres le long de la côte est de Maurice. Cette plage exceptionnelle de sable blanc fin est protégée par un récif corallien qui crée un lagon calme aux eaux turquoise. La zone abrite plusieurs resorts haut de gamme, deux golfs 18 trous (Belle Mare Plage et Links), et offre d\'excellentes conditions pour le kitesurf en hiver austral (juin-septembre) grâce aux alizés.',
    bestMonths: ['octobre', 'novembre', 'decembre', 'janvier'],
    nearbyLocations: ['ile-aux-cerfs', 'trou-deau-douce', 'flacq'],
    coordinates: { lat: -20.2000, lng: 57.7667 },
    tips: [
      'Vent fort en juin-septembre (bon pour kitesurf, moins pour baignade)',
      'Les plages devant les hôtels sont accessibles au public',
      'Belle Mare Plage Golf est l\'un des plus beaux de l\'océan Indien',
      'Location de voiture recommandée (peu de restaurants en dehors des hôtels)'
    ]
  },

  'blue-bay': {
    slug: 'blue-bay',
    name: 'Blue Bay',
    title: 'Que faire à Blue Bay',
    metaTitle: 'Que faire à Blue Bay ? Snorkeling et plages sud 2024',
    metaDescription: 'Blue Bay : meilleur spot de snorkeling, parc marin, plage publique. Guide complet avec activités, prix et conseils pour découvrir le sud de Maurice.',
    heroImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/03/ile-maurice-voyage-scaled.jpg',
    intro: 'Blue Bay abrite le meilleur spot de snorkeling de Maurice accessible depuis la plage. Cette baie protégée du sud-est offre un parc marin avec des coraux exceptionnels et une vie marine abondante.',
    highlights: [
      'Meilleur snorkeling de Maurice depuis la plage',
      'Parc marin protégé avec coraux colorés',
      'Plage publique populaire auprès des locaux',
      'Excursions en bateau à fond de verre'
    ],
    description: 'Blue Bay Marine Park est une réserve naturelle protégée située dans le sud-est de Maurice, près de l\'aéroport. Le lagon peu profond aux eaux cristallines abrite des jardins de coraux spectaculaires avec une incroyable diversité de poissons tropicaux. La plage publique est très prisée des Mauriciens le week-end. Des bateaux à fond de verre et des excursions snorkeling sont proposés par les pêcheurs locaux directement sur la plage.',
    bestMonths: ['toute-annee'], // Sud-est est protégé
    nearbyLocations: ['mahebourg', 'pointe-desny', 'ile-aux-aigrettes'],
    coordinates: { lat: -20.4500, lng: 57.7167 },
    tips: [
      'Évitez les week-ends (très fréquenté par les Mauriciens)',
      'Apportez votre équipement de snorkeling (location possible sur place)',
      'Attention aux oursins près des rochers',
      'Les bateaux à fond de verre coûtent 500-700 Rs pour 1h'
    ]
  },

  'trou-aux-biches': {
    slug: 'trou-aux-biches',
    name: 'Trou aux Biches',
    title: 'Que faire à Trou aux Biches',
    metaTitle: 'Que faire à Trou aux Biches ? Plages et activités nord 2024',
    metaDescription: 'Trou aux Biches : plage magnifique, snorkeling avec tortues, ambiance familiale. Guide complet pour découvrir cette perle du nord-ouest de Maurice.',
    heroImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/02/meilleurs-hotels-5-etoiles-ile-maurice-plage.jpeg',
    intro: 'Trou aux Biches est l\'une des plus belles plages de Maurice. Située au nord-ouest, cette station balnéaire familiale offre un lagon calme, du snorkeling exceptionnel et une ambiance paisible.',
    highlights: [
      'Plage sublime de sable blanc',
      'Snorkeling avec tortues marines',
      'Ambiance familiale et calme',
      'Proximité de Grand Baie (5min)'
    ],
    description: 'Trou aux Biches s\'étend sur 2 kilomètres le long de la côte nord-ouest. Cette plage de sable blanc fin bordée de filaos offre un lagon turquoise peu profond parfait pour les familles avec enfants. Le récif proche abrite des tortues marines que vous pouvez observer régulièrement lors du snorkeling. Le village reste authentique avec sa plage publique très animée le week-end, ses petits restaurants créoles et son marché local.',
    bestMonths: ['toute-annee'],
    nearbyLocations: ['grand-baie', 'mont-choisy', 'pereybere'],
    coordinates: { lat: -20.0350, lng: 57.5467 },
    tips: [
      'Le snorkeling avec tortues est meilleur tôt le matin',
      'Plage publique au centre, plus calme au nord et sud',
      'Location de kayaks et paddleboards disponible',
      'Beaucoup moins touristique que Grand Baie voisine'
    ]
  },

  'tamarin': {
    slug: 'tamarin',
    name: 'Tamarin',
    title: 'Que faire à Tamarin',
    metaTitle: 'Que faire à Tamarin ? Dauphins, surf et cascades 2024',
    metaDescription: 'Tamarin : nager avec les dauphins, surf, cascades et canyoning. Guide complet de la côte ouest sauvage avec activités, prix et conseils pratiques.',
    heroImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/03/ile-maurice-voyage-scaled.jpg',
    intro: 'Tamarin est le spot incontournable pour nager avec les dauphins à Maurice. Cette baie sauvage de la côte ouest offre également les meilleures vagues pour le surf et un accès aux cascades spectaculaires.',
    highlights: [
      'Nage avec dauphins sauvages (90% de chance)',
      'Meilleur spot de surf de Maurice',
      'Cascades et canyoning aux 7 cascades',
      'Village authentique et décontracté'
    ],
    description: 'La baie de Tamarin est célèbre pour ses dauphins résidents qu\'on observe presque tous les matins (départ 5h30-6h). Les grands dauphins et dauphins à long bec viennent chasser près de la côte au lever du soleil. Tamarin est aussi le paradis des surfeurs avec sa vague de gauche légendaire qui fonctionne de mai à septembre. À l\'intérieur des terres, les 7 cascades de Tamarin offrent un site exceptionnel pour le canyoning et la randonnée aquatique.',
    bestMonths: ['toute-annee-dauphins', 'mai-septembre-surf'],
    nearbyLocations: ['riviere-noire', 'flic-en-flac', 'chamarel'],
    coordinates: { lat: -20.3167, lng: 57.3833 },
    tips: [
      'Réservez l\'excursion dauphins la veille pour départ 5h30',
      'Apportez anti-nausée si sensible au mal de mer',
      'Le surf nécessite un niveau intermédiaire minimum',
      'Tamarin Salt Pans offre de beaux couchers de soleil'
    ]
  },

  'cap-malheureux': {
    slug: 'cap-malheureux',
    name: 'Cap Malheureux',
    title: 'Que faire à Cap Malheureux',
    metaTitle: 'Que faire à Cap Malheureux ? Église, plages et îles du nord 2024',
    metaDescription: 'Cap Malheureux : église au toit rouge iconique, plages tranquilles, excursions vers les îles du nord. Guide complet de la pointe nord de Maurice.',
    heroImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/03/ile-maurice-voyage-scaled.jpg',
    intro: 'Cap Malheureux est le point le plus au nord de Maurice, célèbre pour son église au toit rouge iconique. Ce village de pêcheurs authentique offre de belles plages tranquilles et est le point de départ des excursions vers les îles du nord.',
    highlights: [
      'Église Notre-Dame Auxiliatrice (toit rouge iconique)',
      'Village de pêcheurs authentique',
      'Départ pour Île Plate, Coin de Mire, Île Ronde',
      'Vue sur les îlots du nord'
    ],
    description: 'Cap Malheureux doit son nom poétique au naufrage de navires sur ses récifs au 18e siècle. Aujourd\'hui, c\'est un village paisible dominé par la célèbre église Notre-Dame Auxiliatrice au toit rouge vif, symbole de Maurice. Les plages sont calmes et peu fréquentées. C\'est le point de départ privilégié pour les excursions en catamaran vers l\'Île Plate (snorkeling exceptionnel), le Coin de Mire et l\'Île Ronde, trois îlots préservés aux eaux cristallines.',
    bestMonths: ['septembre', 'octobre', 'novembre', 'decembre', 'janvier'],
    nearbyLocations: ['grand-baie', 'grand-gaube', 'pereybere'],
    coordinates: { lat: -19.9833, lng: 57.6167 },
    tips: [
      'L\'église est photogénique tôt le matin ou au coucher du soleil',
      'Les excursions îles du nord partent aussi de Grand Baie',
      'Marché local le mercredi pour produits frais',
      'Moins touristique que Grand Baie, plus authentique'
    ]
  },

  'trou-deau-douce': {
    slug: 'trou-deau-douce',
    name: 'Trou d\'Eau Douce',
    title: 'Que faire à Trou d\'Eau Douce',
    metaTitle: 'Que faire à Trou d\'Eau Douce ? Île aux Cerfs et activités 2024',
    metaDescription: 'Trou d\'Eau Douce : départ pour Île aux Cerfs, GRSE Waterfall, excursions catamaran. Guide complet de la côte est avec activités et conseils.',
    heroImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2023/08/activtes-ile-aux-cerfs-ile-maurice.jpg',
    intro: 'Trou d\'Eau Douce est le village de départ principal pour les excursions vers l\'Île aux Cerfs. Ce petit village de pêcheurs de la côte est offre une ambiance authentique et un accès facile aux plus belles plages de l\'est.',
    highlights: [
      'Point de départ pour Île aux Cerfs',
      'GRSE Waterfall (cascade spectaculaire)',
      'Excursions en speedboat ou catamaran',
      'Village de pêcheurs authentique'
    ],
    description: 'Trou d\'Eau Douce est un village tranquille sur la côte est qui s\'anime avec le tourisme lié à l\'Île aux Cerfs. Plusieurs opérateurs proposent des traversées en bateau (10 min) vers cette île paradisiaque. L\'excursion classique inclut souvent la visite de la cascade GRSE (Grande Rivière Sud-Est), un snorkeling à l\'Île aux Aigrettes et un BBQ sur l\'Île aux Cerfs. Le village lui-même reste authentique avec sa plage publique et ses petits restaurants créoles.',
    bestMonths: ['octobre', 'novembre', 'decembre', 'janvier'],
    nearbyLocations: ['ile-aux-cerfs', 'belle-mare', 'mahebourg'],
    coordinates: { lat: -20.2381, lng: 57.7847 },
    tips: [
      'Réservez l\'excursion Île aux Cerfs en ligne (moins cher qu\'sur place)',
      'Départ tôt conseillé pour éviter foules sur l\'île',
      'La cascade GRSE est accessible uniquement en bateau',
      'Négociez les prix des speedboats privés (Rs 800-1200)'
    ]
  },

  'chamouny': {
    slug: 'chamouny',
    name: 'Chamouny',
    title: 'Que faire à Chamouny',
    metaTitle: 'Que faire à Chamouny ? Randonnées et nature Maurice 2024',
    metaDescription: 'Chamouny : randonnées dans le sud sauvage, nature préservée, forêts. Guide des activités outdoor dans le sud authentique de l\'Île Maurice.',
    heroImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/03/ile-maurice-voyage-scaled.jpg',
    intro: 'Chamouny est une petite localité du sud de Maurice, proche des gorges de Rivière Noire. Cette zone rurale offre un accès aux plus belles randonnées et aux paysages sauvages de l\'intérieur de l\'île.',
    highlights: [
      'Point de départ pour randonnées dans le parc national',
      'Paysages de montagnes et forêts',
      'Sud authentique et peu touristique',
      'Proximité des gorges de Rivière Noire'
    ],
    description: 'Chamouny se trouve dans le sud de Maurice, à proximité du parc national des Gorges de Rivière Noire. Cette zone rurale et montagneuse offre des paysages spectaculaires avec des forêts tropicales, des cascades et des points de vue panoramiques. C\'est le point de départ idéal pour les randonneurs souhaitant explorer les sentiers moins fréquentés du parc national, notamment vers le Piton de la Petite Rivière Noire (le point culminant de Maurice à 828m).',
    bestMonths: ['mai', 'juin', 'juillet', 'aout', 'septembre'],
    nearbyLocations: ['riviere-noire', 'chamarel', 'le-morne'],
    coordinates: { lat: -20.4300, lng: 57.4000 },
    tips: [
      'Climat plus frais en altitude (apportez un coupe-vent)',
      'Guide recommandé pour les randonnées hors sentiers balisés',
      'Partez tôt le matin pour éviter chaleur et pluies d\'après-midi',
      'Prévoyez eau, snacks et anti-moustique'
    ]
  },

  'chutes-tamarin': {
    slug: 'chutes-tamarin',
    name: 'Chutes de Tamarin',
    title: 'Que faire aux Chutes de Tamarin',
    metaTitle: 'Chutes de Tamarin : Canyoning aux 7 cascades Maurice 2024',
    metaDescription: 'Cascades de Tamarin : canyoning, randonnée aquatique, sauts, toboggans naturels. Guide complet de l\'aventure aux 7 cascades avec prix et conseils.',
    heroImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/03/ile-maurice-voyage-scaled.jpg',
    intro: 'Les 7 Cascades de Tamarin (Tamarind Falls) offrent l\'une des aventures les plus spectaculaires de Maurice. Ce site exceptionnel permet de pratiquer le canyoning dans un décor de jungle tropicale avec bassins naturels et cascades impressionnantes.',
    highlights: [
      'Canyoning dans 7 cascades successives',
      'Sauts de 3 à 10 mètres (optionnels)',
      'Toboggans naturels et rappels',
      'Jungle tropicale préservée'
    ],
    description: 'Les 7 Cascades de Tamarin (ou Tamarind Falls) sont situées dans les gorges de Rivière Noire. Ce site naturel exceptionnel offre plusieurs niveaux de parcours : de la simple randonnée aux 3 premières cascades jusqu\'au canyoning complet des 7 cascades avec sauts, rappels et descente en toboggan naturel. L\'eau est fraîche (22-24°C) et les bassins d\'un vert émeraude magnifique. L\'activité nécessite une bonne condition physique et n\'est pas recommandée aux enfants de moins de 12 ans.',
    bestMonths: ['mai', 'juin', 'juillet', 'aout', 'septembre'],
    nearbyLocations: ['tamarin', 'riviere-noire', 'henrietta'],
    coordinates: { lat: -20.3833, lng: 57.4500 },
    tips: [
      'Réservez avec un prestataire certifié (sécurité importante)',
      'Niveau physique moyen requis, savoir nager obligatoire',
      'Apportez maillot, serviette et vêtements de rechange',
      'Évitez après fortes pluies (eau trouble et débit élevé)'
    ]
  },

  'gorges-riviere-noire': {
    slug: 'gorges-riviere-noire',
    name: 'Gorges de Rivière Noire',
    title: 'Que faire aux Gorges de Rivière Noire',
    metaTitle: 'Gorges de Rivière Noire : Randonnées et parc national 2024',
    metaDescription: 'Parc National des Gorges de Rivière Noire : randonnées, cascades, forêt tropicale, points de vue. Guide complet avec sentiers, conseils et wildlife.',
    heroImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/03/ile-maurice-voyage-scaled.jpg',
    intro: 'Le Parc National des Gorges de Rivière Noire est le plus grand parc naturel de Maurice. Cette réserve de 6 754 hectares protège les dernières forêts indigènes de l\'île et offre les plus belles randonnées de Maurice.',
    highlights: [
      'Plus grand parc national de Maurice (6 754 ha)',
      '16 sentiers de randonnée balisés',
      'Forêt tropicale indigène préservée',
      'Points de vue panoramiques spectaculaires'
    ],
    description: 'Le Black River Gorges National Park couvre 3,5% de la superficie de Maurice et protège la forêt tropicale d\'altitude avec sa faune et flore endémiques. Le parc offre 16 sentiers balisés de différents niveaux, des cascades spectaculaires (Alexandra Falls, 700 Pieds), et des points de vue à couper le souffle (Gorges Viewpoint, Black River Peak). On peut y observer des oiseaux rares comme le pigeon rose, la crécerelle de Maurice et l\'oiseau-lunettes vert. Le climat y est plus frais et humide qu\'en bord de mer.',
    bestMonths: ['mai', 'juin', 'juillet', 'aout', 'septembre'],
    nearbyLocations: ['chamarel', 'le-morne', 'chamouny'],
    coordinates: { lat: -20.4167, lng: 57.4500 },
    tips: [
      'Centre d\'accueil à Pétrin avec cartes et infos (point de départ)',
      'Partez tôt (6h-7h) avant la chaleur et les pluies d\'après-midi',
      'Téléchargez les cartes offline (réseau limité dans le parc)',
      'Anti-moustique indispensable et eau (2L min par personne)'
    ]
  },

  'port-louis': {
    slug: 'port-louis',
    name: 'Port-Louis',
    title: 'Que faire à Port-Louis',
    metaTitle: 'Que faire à Port-Louis ? Capitale Maurice : marchés, culture 2024',
    metaDescription: 'Port-Louis : marchés colorés, Caudan Waterfront, musées, street food. Guide complet de la capitale mauricienne avec visites incontournables.',
    heroImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/03/ile-maurice-voyage-scaled.jpg',
    intro: 'Port-Louis est la capitale animée de Maurice. Cette ville portuaire offre une immersion dans la culture mauricienne avec ses marchés colorés, sa street food exceptionnelle et son patrimoine colonial.',
    highlights: [
      'Marché central (fruits, épices, souvenirs)',
      'Caudan Waterfront (shopping et restaurants)',
      'Blue Penny Museum (timbres rares)',
      'Street food authentique et pas chère'
    ],
    description: 'Port-Louis concentre l\'âme mauricienne avec son mélange unique de cultures indienne, créole, chinoise et française. Le marché central est un festival de couleurs et d\'odeurs avec ses étals de fruits tropicaux, épices et textiles. Le Caudan Waterfront offre un espace moderne de shopping et restauration face au port. Ne manquez pas le Blue Penny Museum abritant les timbres les plus rares au monde, et testez la street food locale dans les gargotes autour de la Place d\'Armes.',
    bestMonths: ['mai', 'juin', 'septembre', 'octobre'],
    nearbyLocations: ['pamplemousses', 'moka', 'baie-du-tombeau'],
    coordinates: { lat: -20.1609, lng: 57.5012 },
    tips: [
      'Évitez les vendredis après-midi (circulation dense)',
      'Le marché ferme vers 17h, y aller le matin',
      'Bargaining accepté au marché (négociez avec le sourire)',
      'Stationnement difficile, venez en taxi ou bus'
    ]
  },

  'souillac': {
    slug: 'souillac',
    name: 'Souillac',
    title: 'Que faire à Souillac',
    metaTitle: 'Que faire à Souillac ? Sud sauvage et Gris Gris 2024',
    metaDescription: 'Souillac : Gris Gris, Roche qui Pleure, côte sauvage, nature préservée. Découvrez le sud authentique de Maurice avec notre guide complet.',
    heroImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/03/ile-maurice-voyage-scaled.jpg',
    intro: 'Souillac est la porte d\'entrée du sud sauvage de Maurice. Cette petite ville côtière offre des paysages spectaculaires avec ses falaises battues par les vagues et ses sites naturels préservés comme Gris Gris et la Roche qui Pleure.',
    highlights: [
      'Gris Gris (falaises et vagues impressionnantes)',
      'La Roche qui Pleure (site naturel spectaculaire)',
      'Sud authentique peu touristique',
      'Jardins de Telfair (patrimoine colonial)'
    ],
    description: 'Souillac se trouve sur la côte sud, la plus sauvage et la moins touristique de Maurice. La plage de Gris Gris offre un spectacle saisissant avec ses falaises noires battues par de puissantes vagues (baignade interdite). La Roche qui Pleure est une formation rocheuse où les embruns créent l\'illusion de larmes. Les jardins de Telfair, ancien domaine colonial, abritent un musée et de beaux jardins tropicaux. L\'ambiance de Souillac reste authentique et paisible, loin de l\'agitation touristique du nord.',
    bestMonths: ['mai', 'juin', 'juillet', 'aout', 'septembre'],
    nearbyLocations: ['bel-ombre', 'riambel', 'riviere-des-anguilles'],
    coordinates: { lat: -20.5167, lng: 57.5167 },
    tips: [
      'Ne vous baignez jamais à Gris Gris (vagues dangereuses)',
      'Meilleure lumière pour photos en fin d\'après-midi',
      'Combinez avec visite de Rochester Falls à proximité',
      'Peu de restaurants, prévoyez pique-nique ou mangez avant'
    ]
  },

  'grand-gaube': {
    slug: 'grand-gaube',
    name: 'Grand Gaube',
    title: 'Que faire à Grand Gaube',
    metaTitle: 'Que faire à Grand Gaube ? Plages et Île d\'Ambre 2024',
    metaDescription: 'Grand Gaube : plages tranquilles, excursion Île d\'Ambre, village de pêcheurs. Guide de la pointe nord-est authentique de Maurice.',
    heroImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/03/ile-maurice-voyage-scaled.jpg',
    intro: 'Grand Gaube est un village de pêcheurs authentique situé à la pointe nord-est de Maurice. Cette zone tranquille offre de belles plages préservées et un accès à l\'Île d\'Ambre, une réserve naturelle encore sauvage.',
    highlights: [
      'Village de pêcheurs authentique',
      'Plages tranquilles et peu fréquentées',
      'Excursion vers l\'Île d\'Ambre',
      'Couchers de soleil sur l\'océan Indien'
    ],
    description: 'Grand Gaube se trouve à l\'extrémité nord-est de Maurice, préservé du tourisme de masse. Le village conserve son authenticité avec ses pirogues de pêcheurs colorées sur la plage et ses petites gargotes créoles. Les plages sont plus sauvages qu\'ailleurs avec des vents alizés constants. L\'Île d\'Ambre, accessible en bateau, est une réserve naturelle avec mangroves, faune endémique et ruines historiques d\'une ancienne distillerie. La zone offre une expérience de Maurice authentique loin des zones touristiques.',
    bestMonths: ['septembre', 'octobre', 'novembre', 'decembre'],
    nearbyLocations: ['cap-malheureux', 'poudre-dor', 'roches-noires'],
    coordinates: { lat: -19.9833, lng: 57.6667 },
    tips: [
      'Vent fort rend baignade moins agréable que côte ouest',
      'Excursion Île d\'Ambre dure 3-4h (réservation recommandée)',
      'Peu de restaurants, optez pour hébergement avec demi-pension',
      'Idéal si vous cherchez calme et authenticité'
    ]
  }
};

// Helper function to get location by slug
export function getLocationBySlug(slug: string): LocationData | undefined {
  return locationsData[slug];
}

// Get all location slugs
export function getAllLocationSlugs(): string[] {
  return Object.keys(locationsData);
}

// Get nearby locations data
export function getNearbyLocations(slug: string): LocationData[] {
  const location = getLocationBySlug(slug);
  if (!location) return [];

  return location.nearbyLocations
    .map(nearbySlug => getLocationBySlug(nearbySlug))
    .filter((loc): loc is LocationData => loc !== undefined);
}
