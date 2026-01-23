export interface MonthData {
  slug: string;
  month: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  season: string;
  rating: number;
  images: {
    hero?: string;
    weather?: string;
    activities?: string;
  };
  hero: {
    intro: string;
    highlights: string[];
  };
  summary: {
    weather: { label: string; value: string; status: 'good' | 'warning' | 'bad' };
    swimming: { label: string; value: string; status: 'good' | 'warning' | 'bad' };
    diving: { label: string; value: string; status: 'good' | 'warning' | 'bad' };
    hiking: { label: string; value: string; status: 'good' | 'warning' | 'bad' };
    crowds: { label: string; value: string; status: 'good' | 'warning' | 'bad' };
    prices: { label: string; value: string; status: 'good' | 'warning' | 'bad' };
    cyclone: { label: string; value: string; status: 'good' | 'warning' | 'bad' };
  };
  weather: {
    tempMax: string;
    tempMin: string;
    water: string;
    rainfall: string;
    sunHours: string;
    regions: {
      name: string;
      description: string;
    }[];
  };
  opinion: {
    rating: number;
    title: string;
    pros: string[];
    cons: string[];
    advice: string;
  };
  budget: {
    flights: { range: string; tips: string };
    accommodation: { range: string; tips: string };
    crowds: string;
  };
  activities: {
    title: string;
    why: string;
    link: string;
    icon: string;
  }[];
  accommodation: {
    zone: string;
    why: string;
    priceRange: string;
  }[];
  tips: {
    packing: string[];
    health: string[];
    events: string[];
  };
  faq: {
    question: string;
    answer: string;
  }[];
  verdict: {
    summary: string;
    bestFor: string[];
    avoidIf: string[];
  };
}

/**
 * Données pour le mois de janvier
 *
 * Pour ajouter des images :
 * 1. Recherchez dans WordPress : https://blog.ilemauricevoyage.fr/wp-json/wp/v2/media?search=maurice+janvier
 * 2. Copiez le "source_url" de l'image souhaitée
 * 3. Collez l'URL dans le champ correspondant ci-dessous
 *
 * Consultez WORDPRESS_MEDIA_GUIDE.md pour plus d'informations
 */
export const januaryData: MonthData = {
  slug: 'janvier',
  month: 'Janvier',
  title: 'Île Maurice en Janvier',
  metaTitle: 'Île Maurice en janvier : météo, prix et activités',
  metaDescription: 'Janvier à Maurice : chaleur tropicale et plages paradisiaques mais risque cyclonique. Notre avis d\'expert, météo détaillée, budget et meilleures activités.',
  season: 'été austral',
  rating: 3,
  images: {
    // Images depuis WordPress - https://blog.ilemauricevoyage.fr/wp-json/wp/v2/media
    hero: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/03/ile-maurice-voyage-scaled.jpg', // Image principale plage Maurice
    weather: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/02/meilleurs-hotels-5-etoiles-ile-maurice-plage.jpeg', // Plage et météo
    activities: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2023/08/activtes-ile-aux-cerfs-ile-maurice.jpg' // Activités nautiques
  },
  hero: {
    intro: 'Janvier marque le cœur de l\'été austral à l\'Île Maurice. Les températures frôlent les 30°C, le lagon affiche un bleu éclatant et l\'eau atteint 27°C. C\'est la période des grandes vacances pour les Mauriciens et de nombreux touristes européens fuient l\'hiver. Mais janvier, c\'est aussi la saison des pluies et le risque cyclonique est bien réel.',
    highlights: [
      'Eau à 27°C parfaite pour la baignade',
      'Fruits tropicaux en abondance',
      'Haute saison touristique - affluence importante',
      'Risque cyclonique élevé'
    ]
  },
  summary: {
    weather: { label: 'Météo', value: 'Chaud et humide (pluies fréquentes)', status: 'warning' },
    swimming: { label: 'Baignade', value: 'Excellente (eau à 27°C)', status: 'good' },
    diving: { label: 'Activités nautiques', value: 'Selon conditions (vent et houle)', status: 'warning' },
    hiking: { label: 'Randonnée', value: 'Déconseillé (pluies, glissant)', status: 'bad' },
    crowds: { label: 'Affluence', value: 'Haute saison', status: 'warning' },
    prices: { label: 'Budget', value: 'Prix élevés', status: 'bad' },
    cyclone: { label: 'Risque cyclonique', value: 'Élevé', status: 'warning' }
  },
  weather: {
    tempMax: '29-31°C',
    tempMin: '24-26°C',
    water: '27-28°C',
    rainfall: '250-300mm',
    sunHours: '7-8h/jour',
    regions: [
      { name: 'Côte Ouest (Flic en Flac, Le Morne)', description: 'Plus sec et ensoleillé, mer généralement calme' },
      { name: 'Côte Nord (Grand Baie)', description: 'Très fréquenté, bonnes conditions pour le nautisme' },
      { name: 'Côte Est (Belle Mare)', description: 'Plus venté, mer agitée, pluies plus fréquentes' },
      { name: 'Plateau Central (Curepipe)', description: 'Plus frais (22-25°C), brumeux, pluies abondantes' }
    ]
  },
  opinion: {
    rating: 3,
    title: 'Un mois contrasté',
    pros: [
      'Baignade exceptionnelle : l\'eau à 27°C est parfaite',
      'Atmosphère festive : prolongement des fêtes de fin d\'année',
      'Plages paradisiaques malgré la météo capricieuse',
      'Vie marine active : excellente visibilité pour le snorkeling',
      'Fruits tropicaux : saison des mangues et litchis'
    ],
    cons: [
      'Risque cyclonique réel avec possibilité de fermetures',
      'Pluies fréquentes perturbant les plans',
      'Humidité élevée : sensation de moiteur permanente',
      'Prix élevés : haute saison',
      'Forte affluence sur les sites touristiques',
      'Randonnées limitées : sentiers glissants et dangereux'
    ],
    advice: 'Privilégiez la côte ouest et nord-ouest pour maximiser l\'ensoleillement. Si vous hésitez entre janvier et mars, optez pour mars : la météo s\'améliore, les prix baissent et l\'affluence diminue.'
  },
  budget: {
    flights: {
      range: '700-1400€ A/R depuis Paris',
      tips: 'Les vols partant après le 15 janvier sont souvent 200-300€ moins chers. Évitez le Nouvel An (+40% en moyenne).'
    },
    accommodation: {
      range: '50-800€/nuit selon catégorie',
      tips: 'Réservez 6 mois à l\'avance minimum. Partez après le 15 janvier pour économiser 20-30%. Privilégiez les guesthouses sur la côte ouest.'
    },
    crowds: 'Janvier fait partie de la haute saison touristique. Les sites populaires (Grand Baie, Île aux Cerfs, Chamarel) sont bondés. Les plages publiques sont très fréquentées.'
  },
  activities: [
    {
      title: 'Snorkeling et plongée sous-marine',
      why: 'L\'eau à 27°C offre un confort optimal et une excellente visibilité (20-30m) entre les averses.',
      link: '/activites-ile-maurice#snorkeling',
      icon: '🤿'
    },
    {
      title: 'Observation des dauphins',
      why: 'Les dauphins sont présents toute l\'année, et la mer est généralement calme sur la côte ouest tôt le matin.',
      link: '/observation-des-cetaces-ile-maurice',
      icon: '🐬'
    },
    {
      title: 'Kitesurf au Morne',
      why: 'Les alizés soufflent régulièrement, et le lagon peu profond du Morne offre des conditions parfaites.',
      link: '/kitesurf-ile-maurice',
      icon: '🏄'
    },
    {
      title: 'Excursion à l\'Île aux Cerfs',
      why: 'Malgré les averses possibles, l\'île reste magnifique et l\'eau est parfaite. Préférez partir le matin.',
      link: '/balade-en-bateau-ile-maurice',
      icon: '🚤'
    },
    {
      title: 'Jardin de Pamplemousses',
      why: 'Activité à l\'ombre idéale pour les après-midis pluvieux. La végétation est luxuriante grâce aux pluies.',
      link: '/activites-ile-maurice',
      icon: '🌺'
    },
    {
      title: 'Terres des 7 Couleurs (Chamarel)',
      why: 'Site couvert, protégé de la pluie. Accessible même par temps maussade.',
      link: '/activites-ile-maurice',
      icon: '🏞️'
    },
    {
      title: 'Kayak en mangrove',
      why: 'Activité à l\'abri des vagues, praticable même en cas de petites pluies.',
      link: '/kayak-ile-maurice',
      icon: '🛶'
    },
    {
      title: 'Cours de cuisine créole',
      why: 'Activité couverte, parfaite pour les journées pluvieuses. Découvrez les fruits tropicaux de saison.',
      link: '/activites-ile-maurice',
      icon: '🍹'
    },
    {
      title: 'Snorkeling avec les tortues',
      why: 'Les tortues vertes sont présentes toute l\'année dans le lagon peu profond de Trou aux Biches.',
      link: '/activites-ile-maurice',
      icon: '🐢'
    },
    {
      title: 'Pêche au gros',
      why: 'Haute saison pour le marlin bleu, espadon et thon. La côte ouest offre les meilleures conditions.',
      link: '/activites-ile-maurice',
      icon: '🎣'
    }
  ],
  accommodation: [
    {
      zone: 'Flic en Flac (Côte Ouest)',
      why: 'Météo la plus clémente, grande plage publique, nombreux restaurants abordables, central pour visiter l\'île, meilleur rapport qualité/prix',
      priceRange: '50-250€/nuit'
    },
    {
      zone: 'Trou aux Biches (Nord-Ouest)',
      why: 'Snorkeling exceptionnel avec tortues, parfait pour les familles, plages sublimes et lagons calmes, atmosphère moins frénétique que Grand Baie',
      priceRange: '70-600€/nuit'
    },
    {
      zone: 'Le Morne (Sud-Ouest)',
      why: 'Paradis des kitesurfeurs, paysages spectaculaires (montagne + lagon), couchers de soleil inoubliables, ambiance zen et haut de gamme',
      priceRange: '250-1000€/nuit'
    }
  ],
  tips: {
    packing: [
      'Vêtements légers en coton ou lin',
      'Plusieurs maillots de bain (l\'humidité rallonge le séchage)',
      'Crème solaire SPF50+ (écologique pour les récifs)',
      'Poncho ou k-way ultra-léger',
      'Anti-moustique tropical (forte concentration DEET)',
      'Casquette ou chapeau et lunettes de soleil'
    ],
    health: [
      'Les moustiques sont très actifs en janvier : appliquez de l\'anti-moustique matin et soir',
      'Le soleil est traître : renouvelez la crème solaire toutes les 2h même par temps couvert',
      'Buvez 2-3L d\'eau par jour avec 85% d\'humidité et 30°C',
      'Dengue présente (rarement grave mais désagréable) : protégez-vous des piqûres'
    ],
    events: [
      '1er janvier : Nouvel An - Jour férié national, nombreux magasins fermés, plages bondées',
      'Thaipoosam Cavadee (fin janvier) : Grande fête tamoule avec processions colorées vers les temples'
    ]
  },
  faq: [
    {
      question: 'Fait-il beau à Maurice en janvier ?',
      answer: 'Janvier est globalement ensoleillé mais avec des averses tropicales fréquentes. Vous aurez en moyenne 7-8h de soleil par jour, mais il pleut 15 à 18 jours dans le mois. Les pluies sont généralement brèves (30min-1h) et surviennent plutôt l\'après-midi. Organisez vos activités extérieures le matin et gardez les visites couvertes pour l\'après-midi.'
    },
    {
      question: 'Peut-on se baigner en janvier ?',
      answer: 'Absolument ! L\'eau est à 27-28°C, soit la température idéale pour se baigner pendant des heures. C\'est même l\'un des meilleurs mois pour profiter de l\'eau. Attention toutefois aux jours de forte houle sur la côte est.'
    },
    {
      question: 'Quel budget prévoir pour janvier ?',
      answer: 'Janvier étant en haute saison, prévoyez un budget conséquent. Budget minimum (routard) : 70-100€/jour. Budget moyen (confort) : 150-200€/jour. Budget luxe : 400€+/jour. À ajouter : Vol (900-1400€) + assurance voyage.'
    },
    {
      question: 'Y a-t-il des cyclones en janvier ?',
      answer: 'Oui, le risque existe mais reste statistiquement modéré. Janvier se situe en pleine saison cyclonique (novembre à avril). Les autorités émettent des alertes 3-4 jours avant. Souscrivez une assurance annulation pour voyages en janvier-février qui couvrira les frais en cas de cyclone.'
    },
    {
      question: 'Janvier est-il une bonne période pour la randonnée ?',
      answer: 'Non, janvier est le pire mois pour randonner à Maurice. Les sentiers sont glissants et dangereux (boue, racines), les cascades en crue (interdit de s\'approcher), la visibilité réduite (brouillard dans les hauts) et les leeches actives en forêt. Pour randonner sérieusement, revenez en mai-septembre (saison sèche).'
    },
    {
      question: 'La mer est-elle calme en janvier ?',
      answer: 'Cela dépend de la côte. Côte Ouest/Nord-Ouest : généralement calme, lagon protégé par le récif. Côte Est : souvent agitée avec houle et vent (alizés). Côte Sud : mer forte, falaises, baignade déconseillée. Pour baignade tranquille, privilégiez Flic en Flac, Trou aux Biches, Mont Choisy.'
    },
    {
      question: 'Faut-il louer une voiture en janvier ?',
      answer: 'Oui, fortement recommandé pour éviter les bus bondés (chaleur + humidité), avoir une flexibilité totale pour changer de plan si pluie, profiter du matin (meilleure météo) et découvrir plages isolées moins fréquentées. Prix location : 25-35€/jour (petite voiture), 40-50€/jour (SUV). Alternative : Chauffeur privé à la journée (50-80€).'
    }
  ],
  verdict: {
    summary: 'Janvier à l\'Île Maurice est un mois contrasté qui plaira aux vacanciers flexibles recherchant la chaleur tropicale, prêts à composer avec quelques averses et un budget conséquent.',
    bestFor: [
      'Vous rêvez de baignade dans une eau à 27°C',
      'Vous fuyez l\'hiver européen à tout prix',
      'Votre budget vacances est confortable (haute saison)',
      'Les averses tropicales ne vous effraient pas',
      'Vous voulez profiter de l\'ambiance festive post-Nouvel An'
    ],
    avoidIf: [
      'Votre budget est serré → mai, juin ou octobre',
      'Vous voulez faire de la randonnée → juin à septembre',
      'Vous cherchez la tranquillité → avril-mai ou novembre',
      'Vous avez un programme strict → septembre-octobre (météo stable)'
    ]
  }
};
