import { MonthData, januaryData } from './monthly-data';

/**
 * Données pour février
 */
export const februaryData: MonthData = {
  slug: 'fevrier',
  month: 'Février',
  title: 'Île Maurice en Février',
  metaTitle: 'Île Maurice en février : météo, prix et activités',
  metaDescription: 'Février à Maurice : chaleur estivale et risque cyclonique maximal. Découvrez la météo, les prix et nos conseils pour profiter de votre séjour malgré les aléas climatiques.',
  season: 'été austral',
  rating: 2.5,
  images: {
    hero: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/03/ile-maurice-voyage-scaled.jpg',
    weather: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/02/meilleurs-hotels-5-etoiles-ile-maurice-plage.jpeg',
    activities: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2023/08/activtes-ile-aux-cerfs-ile-maurice.jpg'
  },
  hero: {
    intro: 'Février est le mois le plus chaud et le plus humide de l\'année à Maurice. Le mercure dépasse régulièrement 31°C et l\'humidité atteint 85%. C\'est aussi le pic de la saison cyclonique. Si les plages restent magnifiques et l\'eau à 28°C, la météo imprévisible peut perturber vos plans.',
    highlights: [
      'Eau à 28°C - température maximale de l\'année',
      'Risque cyclonique à son maximum',
      'Prix moins élevés qu\'en janvier',
      'Fortes averses et humidité importante'
    ]
  },
  summary: {
    weather: { label: 'Météo', value: 'Très chaud et humide (averses fréquentes)', status: 'bad' },
    swimming: { label: 'Baignade', value: 'Excellente (eau à 28°C)', status: 'good' },
    diving: { label: 'Activités nautiques', value: 'Aléatoire (dépend des cyclones)', status: 'warning' },
    hiking: { label: 'Randonnée', value: 'Très déconseillé', status: 'bad' },
    crowds: { label: 'Affluence', value: 'Modérée', status: 'good' },
    prices: { label: 'Budget', value: 'Prix élevés mais moins qu\'en janvier', status: 'warning' },
    cyclone: { label: 'Risque cyclonique', value: 'Maximum', status: 'bad' }
  },
  weather: {
    tempMax: '30-32°C',
    tempMin: '25-27°C',
    water: '28-29°C',
    rainfall: '280-350mm',
    sunHours: '6-7h/jour',
    regions: [
      { name: 'Côte Ouest (Flic en Flac, Le Morne)', description: 'Légèrement plus sec mais chaleur étouffante' },
      { name: 'Côte Nord (Grand Baie)', description: 'Très chaud, mer calme entre les averses' },
      { name: 'Côte Est (Belle Mare)', description: 'Ventée et pluvieuse, mer agitée' },
      { name: 'Plateau Central (Curepipe)', description: 'Plus frais (24-27°C), pluies diluviennes possibles' }
    ]
  },
  opinion: {
    rating: 2.5,
    title: 'Un mois à risque',
    pros: [
      'Température de l\'eau idéale à 28°C',
      'Moins de touristes que janvier',
      'Prix légèrement plus abordables',
      'Fruits tropicaux en pleine saison',
      'Atmosphère authentique et paisible'
    ],
    cons: [
      'Risque cyclonique maximal - interruptions possibles',
      'Chaleur et humidité écrasantes (85%)',
      'Pluies très fréquentes et parfois violentes',
      'Activités extérieures compromises',
      'Possibilité de fermeture d\'établissements',
      'Moustiques particulièrement actifs'
    ],
    advice: 'Février n\'est conseillé qu\'aux voyageurs très flexibles avec une assurance annulation solide. Si vous y allez, privilégiez la deuxième quinzaine généralement plus clémente, et réservez un hébergement de qualité avec activités couvertes.'
  },
  budget: {
    flights: {
      range: '650-1200€ A/R depuis Paris',
      tips: 'Les prix baissent après le 10 février. Les vols de fin février sont 20-30% moins chers qu\'en début de mois.'
    },
    accommodation: {
      range: '45-700€/nuit selon catégorie',
      tips: 'Négociation possible avec les hôtels vu le risque cyclonique. Certains établissements offrent des garanties météo. Privilégiez les all-inclusive avec activités couvertes.'
    },
    crowds: 'Février est un mois creux après le rush de janvier. Les sites touristiques sont beaucoup moins fréquentés. C\'est le meilleur moment pour avoir les plages pour soi.'
  },
  activities: [
    {
      title: 'Snorkeling (si conditions permettent)',
      why: 'L\'eau à 28°C et la visibilité peuvent être excellentes entre deux perturbations.',
      link: '/activites-ile-maurice#snorkeling',
      icon: '🤿'
    },
    {
      title: 'Spa et bien-être',
      why: 'Activités couvertes parfaites pour les journées pluvieuses. Profitez des soins ayurvédiques.',
      link: '/activites-ile-maurice',
      icon: '💆'
    },
    {
      title: 'Musées et sites culturels',
      why: 'Visitez le Musée Blue Penny, l\'Aapravasi Ghat (UNESCO) à l\'abri de la pluie.',
      link: '/activites-ile-maurice',
      icon: '🏛️'
    },
    {
      title: 'Cours de cuisine créole',
      why: 'Activité indoor idéale. Apprenez à cuisiner cari, rougaille et gâteaux piments.',
      link: '/activites-ile-maurice',
      icon: '👨‍🍳'
    },
    {
      title: 'Shopping à Port-Louis',
      why: 'Marché central couvert, boutiques duty-free, galeries commerciales climatisées.',
      link: '/activites-ile-maurice',
      icon: '🛍️'
    },
    {
      title: 'Aquarium de Maurice',
      why: 'Découvrez la faune marine à sec. Parfait par temps de pluie.',
      link: '/activites-ile-maurice',
      icon: '🐠'
    },
    {
      title: 'Observation des baleines (prudent)',
      why: 'Si la mer le permet, c\'est encore la saison mais très dépendant de la météo.',
      link: '/observation-des-cetaces-ile-maurice',
      icon: '🐋'
    },
    {
      title: 'Distillerie de rhum (Chamarel)',
      why: 'Visite couverte, dégustation et découverte de la production. Accessible par mauvais temps.',
      link: '/activites-ile-maurice',
      icon: '🥃'
    }
  ],
  accommodation: [
    {
      zone: 'Flic en Flac (Côte Ouest)',
      why: 'Meilleure météo de l\'île en février, bonne infrastructure, nombreux restaurants, all-inclusive disponibles',
      priceRange: '45-220€/nuit'
    },
    {
      zone: 'Balaclava / Turtle Bay (Nord-Ouest)',
      why: 'Baie protégée, resorts avec activités couvertes, snorkeling excellent si temps calme',
      priceRange: '80-600€/nuit'
    },
    {
      zone: 'Le Morne (Sud-Ouest)',
      why: 'Pour les kitesurfeurs (si vent sans cyclone), paysages spectaculaires, resorts luxueux',
      priceRange: '200-900€/nuit'
    }
  ],
  tips: {
    packing: [
      'Vêtements ultra-légers et respirants',
      'Protection pluie (poncho léger imperméable)',
      'Crème solaire waterproof SPF50+',
      'Anti-moustique puissant (DEET 50%)',
      'Médicaments de base (l\'humidité favorise les maux)',
      'Sacs étanches pour protéger appareils électroniques'
    ],
    health: [
      'Vigilance dengue et chikungunya : utilisez répulsif matin et soir',
      'Hydratation maximale : 3L d\'eau/jour minimum',
      'Protection solaire constante même par temps nuageux',
      'Évitez les zones inondées (risque de leptospirose)',
      'Trousse de premiers soins complète conseillée'
    ],
    events: [
      'Maha Shivaratri (date variable) : Grande fête hindoue, pèlerinage au Grand Bassin',
      'Nouvel An Chinois (début février) : Célébrations dans les quartiers chinois, Port-Louis',
      'Saint-Valentin (14 février) : Dîners romantiques sur la plage, offres spéciales resorts'
    ]
  },
  faq: [
    {
      question: 'Février est-il le pire mois pour visiter Maurice ?',
      answer: 'Février est statistiquement le mois le plus à risque en termes de cyclones et de pluies. Cependant, certaines années sont clémentesen février. C\'est un pari. Si vous êtes flexible et avez une bonne assurance, vous pourrez profiter d\'une île quasi-déserte avec des prix intéressants.'
    },
    {
      question: 'Que se passe-t-il en cas de cyclone ?',
      answer: 'Les alertes cycloniques se déclenchent 36-48h avant. Niveau 1 (vert) : vigilance. Niveau 2 (jaune) : commerces fermés. Niveau 3 (rouge) : confinement obligatoire. Niveau 4 (pourpre) : œil du cyclone. Les hôtels ont des procédures strictes et des abris sécurisés. Votre assurance voyage doit couvrir l\'annulation et le rapatriement.'
    },
    {
      question: 'Peut-on quand même profiter de février à Maurice ?',
      answer: 'Oui, absolument ! Les averses sont souvent brèves (30-60 min). Entre deux averses, le soleil revient et vous profitez d\'une eau à 28°C. Privilégiez les activités flexibles, réservez des hébergements all-inclusive avec activités couvertes, et restez positif. Beaucoup de voyageurs adorent février pour son calme.'
    },
    {
      question: 'Quel budget pour février ?',
      answer: 'Budget routard : 60-90€/jour. Budget confort : 130-180€/jour. Budget luxe : 350€+/jour. Les prix sont 15-20% moins chers qu\'en janvier. À ajouter : vol (700-1200€) + assurance annulation (fortement recommandée en février).'
    },
    {
      question: 'Quelles zones éviter en février ?',
      answer: 'Évitez absolument la côte est (Belle Mare, Trou d\'Eau Douce) : mer très agitée, pluies abondantes, vent fort. Le sud-est est également déconseillé. Privilégiez la côte ouest et nord-ouest : Flic en Flac, Wolmar, Albion, Trou aux Biches.'
    }
  ],
  verdict: {
    summary: 'Février est un mois à déconseiller sauf pour les voyageurs très flexibles, avec un budget confortable pour gérer les imprévus, et une excellente assurance annulation.',
    bestFor: [
      'Vous cherchez à éviter les foules absolument',
      'Vous aimez l\'aventure et l\'imprévu',
      'Vous avez une assurance annulation complète',
      'Votre budget permet les hébergements all-inclusive',
      'Vous restez 2-3 semaines et pouvez attendre le beau temps'
    ],
    avoidIf: [
      'C\'est votre premier voyage à Maurice → préférez septembre-novembre',
      'Vous avez un planning strict → choisissez mai-octobre',
      'Votre budget est limité → évitez les mois à risque',
      'Vous voulez faire de la randonnée → juin-septembre',
      'Vous ne supportez pas la chaleur humide → mai-octobre'
    ]
  }
};

/**
 * Données pour mars
 */
export const marchData: MonthData = {
  slug: 'mars',
  month: 'Mars',
  title: 'Île Maurice en Mars',
  metaTitle: 'Île Maurice en mars : météo, prix et activités',
  metaDescription: 'Mars à Maurice : fin de l\'été austral avec météo qui s\'améliore. Températures agréables, moins de pluies, prix en baisse. Le bon compromis pour profiter de l\'île.',
  season: 'été austral (transition)',
  rating: 3.5,
  images: {
    hero: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/03/ile-maurice-voyage-scaled.jpg',
    weather: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/02/meilleurs-hotels-5-etoiles-ile-maurice-plage.jpeg',
    activities: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2023/08/activtes-ile-aux-cerfs-ile-maurice.jpg'
  },
  hero: {
    intro: 'Mars marque la transition vers l\'automne austral à Maurice. La météo s\'améliore progressivement, les températures restent chaudes (28-30°C) mais deviennent plus supportables. L\'eau est encore à 27°C et le risque cyclonique diminue. Les prix commencent à baisser sensiblement après la haute saison.',
    highlights: [
      'Météo en amélioration progressive',
      'Eau encore à 27°C - idéale pour la baignade',
      'Prix en baisse de 20-30% par rapport à janvier',
      'Affluence modérée - bon équilibre'
    ]
  },
  summary: {
    weather: { label: 'Météo', value: 'Chaud et moins humide (averses en diminution)', status: 'good' },
    swimming: { label: 'Baignade', value: 'Excellente (eau à 27°C)', status: 'good' },
    diving: { label: 'Activités nautiques', value: 'Bonnes conditions', status: 'good' },
    hiking: { label: 'Randonnée', value: 'Possible en fin de mois', status: 'warning' },
    crowds: { label: 'Affluence', value: 'Modérée', status: 'good' },
    prices: { label: 'Budget', value: 'Prix moyens', status: 'good' },
    cyclone: { label: 'Risque cyclonique', value: 'En diminution', status: 'warning' }
  },
  weather: {
    tempMax: '28-30°C',
    tempMin: '24-26°C',
    water: '27-28°C',
    rainfall: '200-250mm',
    sunHours: '7-8h/jour',
    regions: [
      { name: 'Côte Ouest (Flic en Flac, Le Morne)', description: 'Conditions idéales, ensoleillement maximum, mer calme' },
      { name: 'Côte Nord (Grand Baie)', description: 'Excellentes conditions, parfait pour nautisme' },
      { name: 'Côte Est (Belle Mare)', description: 'Encore ventée mais en amélioration' },
      { name: 'Plateau Central (Curepipe)', description: 'Plus frais (22-25°C), pluies en diminution' }
    ]
  },
  opinion: {
    rating: 3.5,
    title: 'Un excellent compromis',
    pros: [
      'Météo qui s\'améliore semaine après semaine',
      'Baignade encore parfaite avec eau à 27°C',
      'Prix 20-30% moins chers qu\'en janvier-février',
      'Moins de touristes - sites plus accessibles',
      'Fin de saison des fruits tropicaux (mangues, litchis)',
      'Conditions excellentes pour activités nautiques'
    ],
    cons: [
      'Averses tropicales encore possibles (surtout début mars)',
      'Risque cyclonique résiduel en première quinzaine',
      'Humidité encore élevée (70-75%)',
      'Randonnée pas encore optimale',
      'Quelques jours nuageux possibles'
    ],
    advice: 'Mars est un mois intelligent pour visiter Maurice. Privilégiez la seconde quinzaine pour minimiser les risques météo. C\'est le sweet spot entre conditions estivales et prix raisonnables.'
  },
  budget: {
    flights: {
      range: '600-1100€ A/R depuis Paris',
      tips: 'Les vols de fin mars sont particulièrement intéressants (30% moins chers qu\'en janvier). Réservez 3-4 mois à l\'avance pour les meilleurs tarifs.'
    },
    accommodation: {
      range: '40-600€/nuit selon catégorie',
      tips: 'Baisse significative des prix par rapport à janvier-février. La fin mars offre le meilleur rapport qualité-prix. Négociation possible pour séjours longs.'
    },
    crowds: 'Mars est un mois intermédiaire. L\'affluence est modérée, permettant de profiter des sites sans cohue tout en gardant une atmosphère animée.'
  },
  activities: [
    {
      title: 'Snorkeling et plongée',
      why: 'Excellente visibilité (25-30m), eau à 27°C, mer généralement calme sur ouest et nord.',
      link: '/activites-ile-maurice#snorkeling',
      icon: '🤿'
    },
    {
      title: 'Kitesurf au Morne',
      why: 'Conditions parfaites : vent régulier, lagon peu profond, écoles moins bondées qu\'en haute saison.',
      link: '/kitesurf-ile-maurice',
      icon: '🪁'
    },
    {
      title: 'Excursion à l\'Île aux Cerfs',
      why: 'Météo plus clémente, moins de monde, tarifs négociables. Parfait pour profiter des plages paradisiaques.',
      link: '/balade-en-bateau-ile-maurice',
      icon: '🏝️'
    },
    {
      title: 'Pêche au gros',
      why: 'Excellente période pour marlin bleu et espadon. Conditions mer favorables.',
      link: '/activites-ile-maurice',
      icon: '🎣'
    },
    {
      title: 'Observation des dauphins',
      why: 'Mer plus calme qu\'en janvier-février, dauphins présents toute l\'année. Départs matinaux recommandés.',
      link: '/observation-des-cetaces-ile-maurice',
      icon: '🐬'
    },
    {
      title: 'Kayak et paddle',
      why: 'Conditions idéales en lagons protégés. Explorez mangroves et criques isolées.',
      link: '/kayak-ile-maurice',
      icon: '🛶'
    },
    {
      title: 'Golf',
      why: 'Température agréable pour jouer, parcours moins fréquentés. Maurice compte 9 golfs de classe mondiale.',
      link: '/activites-ile-maurice',
      icon: '⛳'
    },
    {
      title: 'Randonnée Montagne du Lion',
      why: 'Fin mars : sentiers commencent à sécher, vue panoramique exceptionnelle (3h de marche).',
      link: '/activites-ile-maurice',
      icon: '⛰️'
    },
    {
      title: 'Visite de Port-Louis',
      why: 'Chaleur moins écrasante qu\'en janvier-février. Marché central, Caudan Waterfront, fort Adélaïde.',
      link: '/activites-ile-maurice',
      icon: '🏙️'
    },
    {
      title: 'Terres de 7 Couleurs Chamarel',
      why: 'Moins de pluie = meilleure visibilité des couleurs. Site phare de Maurice.',
      link: '/activites-ile-maurice',
      icon: '🌈'
    }
  ],
  accommodation: [
    {
      zone: 'Flic en Flac (Côte Ouest)',
      why: 'Météo excellente, plage superbe, vie locale animée, excellent rapport qualité/prix, central pour explorer',
      priceRange: '40-200€/nuit'
    },
    {
      zone: 'Trou aux Biches (Nord-Ouest)',
      why: 'Plages sublimes, snorkeling exceptionnel avec tortues, calme et familial, bons restaurants',
      priceRange: '60-500€/nuit'
    },
    {
      zone: 'Le Morne (Sud-Ouest)',
      why: 'Kitesurf paradisiaque, paysages époustouflants, resorts haut de gamme, couchers de soleil magiques',
      priceRange: '180-850€/nuit'
    },
    {
      zone: 'Grand Baie (Nord)',
      why: 'Centre névralgique, vie nocturne, nombreux restaurants, activités nautiques variées',
      priceRange: '50-400€/nuit'
    }
  ],
  tips: {
    packing: [
      'Vêtements légers en tissus respirants',
      'Maillots de bain (2-3 pour rotation)',
      'Crème solaire SPF50+ biodégradable',
      'Casquette/chapeau et lunettes de soleil',
      'Poncho léger (averses occasionnelles)',
      'Chaussures de randonnée si prévu',
      'Anti-moustique (moins nécessaire qu\'en été)'
    ],
    health: [
      'Protection solaire indispensable (UV encore forts)',
      'Hydratation régulière (2-2.5L/jour)',
      'Anti-moustique soir uniquement',
      'Respecter les zones de baignade (courants)',
      'Trousse de base suffit'
    ],
    events: [
      'Festival International Créole (début mars) : Musique, danse, gastronomie créole',
      'Journée des Droits de la Femme (8 mars) : Événements culturels',
      'Holi (date variable) : Fête des couleurs hindoue, ambiance festive',
      'Marathon de Maurice (mi-mars) : Course à travers l\'île'
    ]
  },
  faq: [
    {
      question: 'Mars est-il un bon mois pour Maurice ?',
      answer: 'Oui, mars est un excellent compromis ! La météo s\'améliore progressivement, l\'eau reste à 27°C, les prix baissent de 20-30% et l\'affluence est modérée. La seconde quinzaine de mars est particulièrement recommandée.'
    },
    {
      question: 'Peut-on se baigner en mars ?',
      answer: 'Absolument ! L\'eau est encore à 27°C, c\'est parfait pour la baignade. Les conditions sont même meilleures qu\'en janvier-février car la mer est souvent plus calme. Privilégiez les lagons de la côte ouest et nord.'
    },
    {
      question: 'Y a-t-il encore des risques de cyclone en mars ?',
      answer: 'Le risque diminue fortement en mars, surtout après le 15. Statistiquement, seulement 15% des cyclones arrivent en mars. La deuxième quinzaine est généralement très sûre. Prenez quand même une assurance par précaution.'
    },
    {
      question: 'Quel budget pour mars ?',
      answer: 'Budget routard : 55-85€/jour. Budget confort : 120-170€/jour. Budget luxe : 300€+/jour. Les prix sont 20-30% moins chers qu\'en janvier. Vol : 600-1100€. Mars offre un excellent rapport qualité-prix.'
    },
    {
      question: 'Peut-on faire de la randonnée en mars ?',
      answer: 'C\'est possible surtout en fin de mois, mais pas optimal. Les sentiers sont encore humides en début mars. Pour les randonnées faciles (Montagne du Lion, Le Pouce), c\'est faisable. Pour du sérieux, attendez mai-septembre.'
    },
    {
      question: 'Mars ou octobre : que choisir ?',
      answer: 'Mars : eau plus chaude (27°C vs 24°C), ambiance estivale, fruits tropicaux. Octobre : météo plus stable, meilleur pour randonnée, début de la belle saison. Les deux sont excellents ! Mars si vous aimez la chaleur, octobre si vous préférez la fraîcheur.'
    }
  ],
  verdict: {
    summary: 'Mars est un mois intelligent pour visiter Maurice : bon compromis entre conditions estivales, prix raisonnables et météo en amélioration. Particulièrement recommandé en seconde quinzaine.',
    bestFor: [
      'Vous cherchez le meilleur rapport qualité-prix',
      'Vous aimez l\'eau chaude (27°C) et la chaleur',
      'Vous voulez éviter les foules de haute saison',
      'Vous êtes flexible sur quelques averses',
      'Vous privilégiez les activités nautiques'
    ],
    avoidIf: [
      'Vous voulez une météo 100% garantie → septembre-octobre',
      'Vous prévoyez beaucoup de randonnées → juin-septembre',
      'Vous ne supportez pas la chaleur → mai-octobre',
      'Vous partez début mars et craignez les cyclones → attendez fin mars'
    ]
  }
};

/**
 * Données pour avril
 */
export const aprilData: MonthData = {
  slug: 'avril',
  month: 'Avril',
  title: 'Île Maurice en Avril',
  metaTitle: 'Île Maurice en avril : météo, prix et activités',
  metaDescription: 'Avril à Maurice : début de l\'automne austral avec d\'excellentes conditions. Températures agréables, mer calme, prix avantageux. Période idéale pour découvrir l\'île.',
  season: 'automne austral',
  rating: 4.5,
  images: {
    hero: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/03/ile-maurice-voyage-scaled.jpg',
    weather: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/02/meilleurs-hotels-5-etoiles-ile-maurice-plage.jpeg',
    activities: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2023/08/activtes-ile-aux-cerfs-ile-maurice.jpg'
  },
  hero: {
    intro: 'Avril est l\'un des meilleurs mois pour visiter Maurice. L\'automne austral s\'installe avec des températures parfaites (26-28°C), une humidité en baisse et un ensoleillement généreux. L\'eau reste à 26°C, les pluies diminuent fortement et le risque cyclonique est écarté. Les prix sont très attractifs.',
    highlights: [
      'Météo excellente et stable',
      'Eau à 26°C - parfaite pour toutes activités',
      'Prix 30-40% moins chers qu\'en haute saison',
      'Peu de touristes - île authentique'
    ]
  },
  summary: {
    weather: { label: 'Météo', value: 'Idéale (ensoleillé et sec)', status: 'good' },
    swimming: { label: 'Baignade', value: 'Excellente (eau à 26°C)', status: 'good' },
    diving: { label: 'Activités nautiques', value: 'Conditions optimales', status: 'good' },
    hiking: { label: 'Randonnée', value: 'Très bonnes conditions', status: 'good' },
    crowds: { label: 'Affluence', value: 'Faible', status: 'good' },
    prices: { label: 'Budget', value: 'Très avantageux', status: 'good' },
    cyclone: { label: 'Risque cyclonique', value: 'Nul', status: 'good' }
  },
  weather: {
    tempMax: '26-28°C',
    tempMin: '22-24°C',
    water: '26-27°C',
    rainfall: '120-150mm',
    sunHours: '8-9h/jour',
    regions: [
      { name: 'Côte Ouest (Flic en Flac, Le Morne)', description: 'Conditions parfaites, ensoleillement maximal, mer d\'huile' },
      { name: 'Côte Nord (Grand Baie)', description: 'Excellentes conditions, idéal pour toutes activités nautiques' },
      { name: 'Côte Est (Belle Mare)', description: 'Vent léger agréable, mer calme, parfait pour kitesurf débutants' },
      { name: 'Plateau Central (Curepipe)', description: 'Frais et sec (20-23°C), idéal pour randonnées' }
    ]
  },
  opinion: {
    rating: 4.5,
    title: 'Un mois exceptionnel',
    pros: [
      'Météo quasi parfaite : ensoleillé, sec, températures idéales',
      'Baignade excellente avec eau encore chaude à 26°C',
      'Prix très attractifs (30-40% moins chers)',
      'Très peu de touristes - authenticité garantie',
      'Conditions parfaites pour randonnée et activités outdoor',
      'Visibilité sous-marine exceptionnelle (30m+)',
      'Vent modéré idéal pour sports nautiques'
    ],
    cons: [
      'Eau commence à être un peu fraîche pour les plus frileux',
      'Quelques rares averses possibles (mais brèves)',
      'Nuits plus fraîches (22°C) - prévoir un gilet',
      'Certains établissements en maintenance avant hiver'
    ],
    advice: 'Avril est un mois fantastique pour Maurice. C\'est le sweet spot absolu : météo excellente, prix bas, peu de monde. Réservez sans hésiter, surtout si vous aimez la tranquillité.'
  },
  budget: {
    flights: {
      range: '550-950€ A/R depuis Paris',
      tips: 'Avril offre d\'excellents tarifs aériens. Réservez 2-3 mois à l\'avance pour les meilleurs prix. Les vols mi-avril sont les moins chers.'
    },
    accommodation: {
      range: '35-500€/nuit selon catégorie',
      tips: 'Baisse importante des prix (30-40% vs haute saison). Excellent moment pour s\'offrir un resort haut de gamme à prix raisonnable. Négociation facile pour longs séjours.'
    },
    crowds: 'Avril est un mois très calme. Les sites touristiques sont peu fréquentés, les plages quasi désertes. Ambiance locale authentique.'
  },
  activities: [
    {
      title: 'Plongée sous-marine',
      why: 'Visibilité exceptionnelle (30-35m), eau à 26°C, mer calme. Explorez les épaves et tombants.',
      link: '/activites-ile-maurice#plongee',
      icon: '🤿'
    },
    {
      title: 'Randonnée Le Morne Brabant',
      why: 'Conditions parfaites : température idéale, sentiers secs, vue dégagée. Site UNESCO à ne pas manquer.',
      link: '/randonnees-ile-maurice',
      icon: '⛰️'
    },
    {
      title: 'Kitesurf et windsurf',
      why: 'Vent régulier mais modéré, parfait pour débutants. Spots moins bondés qu\'en juillet-août.',
      link: '/kitesurf-ile-maurice',
      icon: '🪁'
    },
    {
      title: 'Catamaran vers Île aux Cerfs',
      why: 'Mer calme garantie, navigation douce, plages paradisiaques peu fréquentées.',
      link: '/balade-en-bateau-ile-maurice',
      icon: '⛵'
    },
    {
      title: 'VTT et vélo',
      why: 'Température parfaite pour le cyclisme, routes peu fréquentées, découverte de l\'intérieur des terres.',
      link: '/activites-ile-maurice',
      icon: '🚴'
    },
    {
      title: 'Canyoning et via ferrata',
      why: 'Débit des rivières optimal, rochers secs, conditions de sécurité maximales.',
      link: '/activites-ile-maurice',
      icon: '🧗'
    },
    {
      title: 'Pêche au gros',
      why: 'Excellente période pour thon, marlin et wahoo. Mer calme, sorties confortables.',
      link: '/activites-ile-maurice',
      icon: '🎣'
    },
    {
      title: 'Visite jardins de Pamplemousses',
      why: 'Chaleur modérée idéale pour la promenade. Nénuphars géants et arbres centenaires.',
      link: '/activites-ile-maurice',
      icon: '🌺'
    },
    {
      title: 'Quad et buggy',
      why: 'Sentiers en bon état, poussière limitée, température agréable pour l\'aventure.',
      link: '/activites-ile-maurice',
      icon: '🏎️'
    },
    {
      title: 'Observation dauphins et baleines',
      why: 'Mer calme, excellente visibilité, dauphins très actifs. Dernière chance pour baleines.',
      link: '/observation-des-cetaces-ile-maurice',
      icon: '🐬'
    }
  ],
  accommodation: [
    {
      zone: 'Flic en Flac (Côte Ouest)',
      why: 'Meilleur rapport qualité-prix, plage superbe, vie locale, central, restaurants variés',
      priceRange: '35-180€/nuit'
    },
    {
      zone: 'Trou aux Biches (Nord-Ouest)',
      why: 'Plage sublime, snorkeling avec tortues, calme familial, excellent pour enfants',
      priceRange: '55-450€/nuit'
    },
    {
      zone: 'Le Morne (Sud-Ouest)',
      why: 'Paysages spectaculaires, kitesurf, resorts luxueux à prix cassés en avril',
      priceRange: '150-700€/nuit'
    },
    {
      zone: 'Belle Mare (Côte Est)',
      why: 'Plage immense et déserte, resorts top, calme absolu, bon en avril (moins venté)',
      priceRange: '80-600€/nuit'
    }
  ],
  tips: {
    packing: [
      'Vêtements légers pour la journée',
      'Gilet ou veste légère pour soirées (22°C)',
      'Maillots de bain (2-3)',
      'Chaussures de randonnée',
      'Crème solaire SPF50+',
      'Casquette et lunettes de soleil',
      'Vêtements longs pour randonnées (protection solaire)'
    ],
    health: [
      'Protection solaire toujours nécessaire',
      'Hydratation régulière (2L/jour)',
      'Anti-moustique léger (peu nécessaire)',
      'Pas de risque sanitaire particulier',
      'Trousse de base suffit largement'
    ],
    events: [
      'Cavadee (date variable) : Cérémonie tamoule impressionnante au temple',
      'Ougadi (nouvel an télougou) : Fête hindoue, décorations florales',
      'Pâques (date variable) : Célébrations, messes, repas traditionnels créoles'
    ]
  },
  faq: [
    {
      question: 'Avril est-il un bon mois pour Maurice ?',
      answer: 'Avril est excellent ! C\'est l\'un des meilleurs mois de l\'année. Météo quasi parfaite, eau à 26°C, très peu de pluie, prix avantageux et peu de touristes. Seul "inconvénient" : l\'eau commence à être un peu moins chaude pour les très frileux.'
    },
    {
      question: 'Fait-il trop frais en avril ?',
      answer: 'Non, pas du tout ! Les températures sont idéales : 26-28°C le jour, 22-24°C la nuit. C\'est confortable pour toutes les activités. Prévoyez juste un gilet léger pour les soirées. L\'eau est à 26°C, parfaite pour la baignade.'
    },
    {
      question: 'Peut-on faire de la randonnée en avril ?',
      answer: 'Absolument ! Avril est parfait pour la randonnée. Les sentiers sont secs, les températures idéales (pas trop chaud), la visibilité excellente. C\'est le moment de grimper Le Morne, Le Pouce, ou faire la Gorges de Rivière Noire.'
    },
    {
      question: 'Y a-t-il du monde en avril ?',
      answer: 'Très peu ! Avril est un mois creux. Vous aurez les sites pour vous, les plages quasi désertes, les restaurants sans attente. C\'est parfait si vous cherchez la tranquillité et l\'authenticité.'
    },
    {
      question: 'Quel budget pour avril ?',
      answer: 'Budget routard : 50-80€/jour. Budget confort : 110-160€/jour. Budget luxe : 280€+/jour. Vol : 550-950€. Avril offre un rapport qualité-prix imbattable. C\'est le moment de s\'offrir du luxe à prix raisonnable.'
    },
    {
      question: 'Avril ou septembre : lequel choisir ?',
      answer: 'Les deux sont excellents ! Avril : eau plus chaude (26°C vs 24°C), plus calme, prix légèrement moins chers. Septembre : début de haute saison, mer encore plus calme, idéal familles. Si budget compte : avril. Si vous voulez la perfection absolue : septembre.'
    }
  ],
  verdict: {
    summary: 'Avril est l\'un des meilleurs mois pour visiter Maurice. Conditions quasi parfaites, prix très avantageux, authenticité garantie. Un secret bien gardé des connaisseurs.',
    bestFor: [
      'Vous cherchez le meilleur rapport qualité-prix',
      'Vous voulez éviter les foules absolument',
      'Vous aimez la randonnée et activités outdoor',
      'Vous préférez des températures confortables (26-28°C)',
      'Vous voulez découvrir l\'île authentique'
    ],
    avoidIf: [
      'Vous êtes très frileux (eau à 26°C peut sembler fraîche)',
      'Vous voulez une ambiance festive et animée → janvier',
      'Vous cherchez l\'eau la plus chaude possible → février-mars'
    ]
  }
};

/**
 * Données pour mai
 */
export const mayData: MonthData = {
  slug: 'mai',
  month: 'Mai',
  title: 'Île Maurice en Mai',
  metaTitle: 'Île Maurice en mai : météo, prix et activités',
  metaDescription: 'Mai à Maurice : automne austral idyllique. Conditions parfaites pour randonnées, mer calme, températures douces. Un des meilleurs mois pour visiter l\'île.',
  season: 'automne austral',
  rating: 5,
  images: {
    hero: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/03/ile-maurice-voyage-scaled.jpg',
    weather: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/02/meilleurs-hotels-5-etoiles-ile-maurice-plage.jpeg',
    activities: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2023/08/activtes-ile-aux-cerfs-ile-maurice.jpg'
  },
  hero: {
    intro: 'Mai est considéré comme LE mois parfait pour Maurice. Le climat est idéal avec des températures douces (24-27°C), un ciel dégagé, une mer calme et quasi aucune pluie. C\'est le début de la saison sèche et la meilleure période pour toutes les activités outdoor. Les prix restent très attractifs.',
    highlights: [
      'Météo absolument parfaite - ciel bleu constant',
      'Conditions optimales pour randonnée',
      'Mer d\'huile - idéal familles et sports nautiques',
      'Prix avantageux - avant la haute saison'
    ]
  },
  summary: {
    weather: { label: 'Météo', value: 'Parfaite (sec, ensoleillé, doux)', status: 'good' },
    swimming: { label: 'Baignade', value: 'Excellente (eau à 25°C)', status: 'good' },
    diving: { label: 'Activités nautiques', value: 'Conditions optimales', status: 'good' },
    hiking: { label: 'Randonnée', value: 'Parfaites conditions', status: 'good' },
    crowds: { label: 'Affluence', value: 'Modérée', status: 'good' },
    prices: { label: 'Budget', value: 'Avantageux', status: 'good' },
    cyclone: { label: 'Risque cyclonique', value: 'Nul', status: 'good' }
  },
  weather: {
    tempMax: '24-27°C',
    tempMin: '20-22°C',
    water: '25-26°C',
    rainfall: '80-100mm',
    sunHours: '8-9h/jour',
    regions: [
      { name: 'Côte Ouest (Flic en Flac, Le Morne)', description: 'Parfait : sec, ensoleillé, mer calme comme un lac' },
      { name: 'Côte Nord (Grand Baie)', description: 'Conditions idéales, excellente visibilité, mer cristalline' },
      { name: 'Côte Est (Belle Mare)', description: 'Vent doux agréable, vagues modérées, plages sublimes' },
      { name: 'Plateau Central (Curepipe)', description: 'Frais (18-21°C), sec, parfait pour randonnées en montagne' }
    ]
  },
  opinion: {
    rating: 5,
    title: 'La perfection mauricienne',
    pros: [
      'Météo absolument parfaite : ensoleillé, sec, doux',
      'Températures idéales pour toutes activités (24-27°C)',
      'Mer d\'huile - sécurité maximale pour familles',
      'Visibilité sous-marine exceptionnelle (35m)',
      'Conditions optimales pour randonnée (pas trop chaud)',
      'Prix encore avantageux avant la montée de juin',
      'Peu de monde - tranquillité assurée',
      'Quasi aucune pluie - planning garanti'
    ],
    cons: [
      'Eau à 25°C peut sembler fraîche pour certains (mais parfaite pour la majorité)',
      'Nuits fraîches (20°C) - prévoir vêtements longs',
      'Vent peut se lever l\'après-midi sur côte est',
      'Réservation anticipée recommandée (mois prisé par connaisseurs)'
    ],
    advice: 'Mai est le mois parfait pour Maurice. Si vous ne devez choisir qu\'un seul mois dans l\'année, c\'est celui-ci. Réservez au moins 3 mois à l\'avance car les connaisseurs le savent !'
  },
  budget: {
    flights: {
      range: '550-1000€ A/R depuis Paris',
      tips: 'Mai offre d\'excellents tarifs, juste avant la montée des prix de juin-juillet. Réservez 3-4 mois à l\'avance pour les meilleurs deals. Évitez le week-end du 1er mai (plus cher).'
    },
    accommodation: {
      range: '40-550€/nuit selon catégorie',
      tips: 'Prix encore modérés avant la haute saison d\'hiver. Excellent moment pour négocier, surtout pour séjours de 2 semaines. Les resorts commencent à se remplir en fin de mois.'
    },
    crowds: 'Mai voit l\'affluence augmenter progressivement. Début mai est très calme, fin mai commence à voir arriver les premiers vacanciers d\'hiver. Reste très raisonnable.'
  },
  activities: [
    {
      title: 'Randonnée Le Pouce (812m)',
      why: 'Conditions parfaites : frais le matin, sentiers secs, vue panoramique sur tout le nord. 3h A/R.',
      link: '/randonnees-ile-maurice',
      icon: '🥾'
    },
    {
      title: 'Plongée dans les épaves',
      why: 'Visibilité maximale (35m), mer calme, eau claire. Explorez les épaves du Stella Maru et Tug II.',
      link: '/activites-ile-maurice#plongee',
      icon: '🤿'
    },
    {
      title: 'Kitesurf au Morne',
      why: 'Vent régulier (15-20 nœuds), lagon peu profond, eau calme. Parfait pour progression.',
      link: '/kitesurf-ile-maurice',
      icon: '🪁'
    },
    {
      title: 'Catamaran Île aux Bénitiers',
      why: 'Mer d\'huile garantie, navigation confortable, observation dauphins, snorkeling Crystal Rock.',
      link: '/balade-en-bateau-ile-maurice',
      icon: '⛵'
    },
    {
      title: 'Canyoning Rivière Noire',
      why: 'Débit idéal, eau fraîche revigorante, cascades spectaculaires. Parcours complet accessible.',
      link: '/activites-ile-maurice',
      icon: '🧗'
    },
    {
      title: 'VTT Forêt de Bel Ombre',
      why: 'Température parfaite, sentiers en excellent état, découverte nature luxuriante.',
      link: '/activites-ile-maurice',
      icon: '🚵'
    },
    {
      title: 'Pêche au gros',
      why: 'Excellente période pour marlin bleu, thon jaune et dorado. Mer calme, sorties agréables.',
      link: '/activites-ile-maurice',
      icon: '🎣'
    },
    {
      title: 'Kayak transparent Blue Bay',
      why: 'Visibilité incroyable à travers le kayak transparent. Parc marin protégé, coraux et poissons.',
      link: '/kayak-ile-maurice',
      icon: '🛶'
    },
    {
      title: 'Via Ferrata Montagne du Lion',
      why: 'Température idéale pour l\'effort, rochers secs, sécurité maximale. Vue spectaculaire.',
      link: '/activites-ile-maurice',
      icon: '🧗‍♂️'
    },
    {
      title: 'Parapente Chamarel',
      why: 'Conditions aérologiques parfaites, vue sur Terres de 7 Couleurs et océan.',
      link: '/activites-ile-maurice',
      icon: '🪂'
    }
  ],
  accommodation: [
    {
      zone: 'Flic en Flac (Côte Ouest)',
      why: 'Météo parfaite, excellent rapport qualité-prix, vie locale, plage superbe, central',
      priceRange: '40-190€/nuit'
    },
    {
      zone: 'Trou aux Biches (Nord-Ouest)',
      why: 'Une des plus belles plages, snorkeling exceptionnel, ambiance familiale, calme',
      priceRange: '60-480€/nuit'
    },
    {
      zone: 'Le Morne (Sud-Ouest)',
      why: 'Paysages époustouflants, meilleur spot kitesurf, resorts luxueux, couchers de soleil magiques',
      priceRange: '160-750€/nuit'
    },
    {
      zone: 'Belle Mare (Côte Est)',
      why: 'Plage de 10km quasi déserte, resorts haut de gamme, calme absolu, excellent en mai',
      priceRange: '90-650€/nuit'
    }
  ],
  tips: {
    packing: [
      'Vêtements légers pour journée',
      'Pantalon et pull léger pour soirées (20°C)',
      'Chaussures de randonnée obligatoires',
      'Maillots de bain',
      'Crème solaire SPF50+ (UV toujours forts)',
      'Coupe-vent léger',
      'Lampe frontale pour randonnées matinales',
      'Gourde réutilisable'
    ],
    health: [
      'Protection solaire indispensable',
      'Hydratation (2L/jour)',
      'Anti-moustique léger (peu nécessaire)',
      'Attention aux coups de soleil (UV forts malgré température douce)',
      'Aucun risque sanitaire particulier'
    ],
    events: [
      'Fête du Travail (1er mai) : Jour férié, certains commerces fermés',
      'Festival International de Jazz (fin mai) : Concerts gratuits dans divers lieux',
      'Vesak (date variable) : Fête bouddhiste, illuminations dans les pagodes'
    ]
  },
  faq: [
    {
      question: 'Pourquoi mai est-il si recommandé ?',
      answer: 'Mai cumule tous les avantages : météo parfaite (sec, ensoleillé, doux), mer calme, excellentes conditions pour toutes activités, prix encore raisonnables, peu de monde. C\'est le sweet spot absolu. Les mauriciens eux-mêmes considèrent mai-octobre comme la meilleure période.'
    },
    {
      question: 'L\'eau n\'est-elle pas trop froide en mai ?',
      answer: 'L\'eau est à 25-26°C, c\'est parfait ! C\'est la température idéale pour la baignade (ni trop chaude, ni trop froide). Seuls les très frileux trouveront ça frais. Pour la plongée et le snorkeling, c\'est confortable. Vous vous y habituez en 2 minutes.'
    },
    {
      question: 'Peut-on tout faire en mai ?',
      answer: 'Absolument ! Mai est parfait pour TOUTES les activités : plage, randonnée, plongée, kitesurf, vélo, visites culturelles. C\'est le mois le plus polyvalent de l\'année. La seule limite : certains préféreront une eau plus chaude (février-mars).'
    },
    {
      question: 'Faut-il réserver longtemps à l\'avance ?',
      answer: 'Oui, recommandé ! Mai est connu des connaisseurs et les meilleurs hébergements se remplissent. Réservez au moins 3 mois à l\'avance pour avoir du choix et les meilleurs tarifs. Les vols aussi se remplissent vite.'
    },
    {
      question: 'Quel budget pour mai ?',
      answer: 'Budget routard : 50-85€/jour. Budget confort : 115-165€/jour. Budget luxe : 300€+/jour. Vol : 550-1000€. Mai offre un excellent rapport qualité-prix, avec des conditions optimales pour un budget raisonnable.'
    },
    {
      question: 'Mai ou septembre : lequel choisir ?',
      answer: 'Deux mois exceptionnels ! Mai : légèrement plus chaud (27°C vs 25°C), eau un peu plus chaude, moins cher. Septembre : mer encore plus calme, début de haute saison, légèrement plus sec. Honnêtement, vous ne pouvez pas vous tromper entre les deux.'
    }
  ],
  verdict: {
    summary: 'Mai est LE mois parfait pour Maurice. Conditions idéales, prix raisonnables, authenticité. Si vous ne devez choisir qu\'un mois, c\'est celui-ci.',
    bestFor: [
      'Vous cherchez la perfection météorologique',
      'Vous aimez la randonnée et les activités outdoor',
      'Vous voulez des conditions optimales pour toute la famille',
      'Vous préférez des températures douces (24-27°C)',
      'Vous voulez le meilleur rapport qualité-prix'
    ],
    avoidIf: [
      'Vous êtes très frileux et voulez de l\'eau à 28°C → février-mars',
      'Vous détestez avoir un peu frais le soir → janvier-mars',
      'Vous cherchez l\'ambiance festive de haute saison → décembre-janvier'
    ]
  }
};

/**
 * Données pour juin
 */
export const juneData: MonthData = {
  slug: 'juin',
  month: 'Juin',
  title: 'Île Maurice en Juin',
  metaTitle: 'Île Maurice en juin : météo, prix et activités',
  metaDescription: 'Juin à Maurice : cœur de l\'hiver austral avec conditions idéales. Climat sec et doux, mer calme, parfait pour randonnées. Début de haute saison.',
  season: 'hiver austral',
  rating: 4.5,
  images: {
    hero: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/03/ile-maurice-voyage-scaled.jpg',
    weather: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/02/meilleurs-hotels-5-etoiles-ile-maurice-plage.jpeg',
    activities: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2023/08/activtes-ile-aux-cerfs-ile-maurice.jpg'
  },
  hero: {
    intro: 'Juin marque le début de l\'hiver austral et de la haute saison à Maurice. Le climat est sec et agréable avec des températures douces (23-26°C). C\'est la meilleure période pour la randonnée. La mer est calme, le ciel dégagé et les pluies quasi inexistantes. Les prix commencent à augmenter légèrement.',
    highlights: [
      'Saison sèche installée - quasi aucune pluie',
      'Conditions parfaites pour randonnée',
      'Mer calme - idéal familles avec enfants',
      'Haute saison commence - ambiance animée'
    ]
  },
  summary: {
    weather: { label: 'Météo', value: 'Sec et doux (hiver agréable)', status: 'good' },
    swimming: { label: 'Baignade', value: 'Bonne (eau à 24°C)', status: 'good' },
    diving: { label: 'Activités nautiques', value: 'Excellentes conditions', status: 'good' },
    hiking: { label: 'Randonnée', value: 'Conditions optimales', status: 'good' },
    crowds: { label: 'Affluence', value: 'Modérée à élevée', status: 'warning' },
    prices: { label: 'Budget', value: 'Prix en hausse', status: 'warning' },
    cyclone: { label: 'Risque cyclonique', value: 'Nul', status: 'good' }
  },
  weather: {
    tempMax: '23-26°C',
    tempMin: '18-20°C',
    water: '23-24°C',
    rainfall: '60-80mm',
    sunHours: '7-8h/jour',
    regions: [
      { name: 'Côte Ouest (Flic en Flac, Le Morne)', description: 'Protégé du vent, ensoleillement maximum, mer calme' },
      { name: 'Côte Nord (Grand Baie)', description: 'Excellentes conditions, légère brise agréable' },
      { name: 'Côte Est (Belle Mare)', description: 'Ventée mais sec, vagues pour bodyboard, rafraîchissant' },
      { name: 'Plateau Central (Curepipe)', description: 'Frais (16-19°C), sec, parfait pour découvrir l\'intérieur' }
    ]
  },
  opinion: {
    rating: 4.5,
    title: 'L\'hiver idyllique',
    pros: [
      'Climat sec et ensoleillé (quasi aucune pluie)',
      'Températures douces et agréables (23-26°C)',
      'Conditions parfaites pour toutes randonnées',
      'Mer calme et sécurisante pour familles',
      'Visibilité exceptionnelle (35m+)',
      'Nuits fraîches agréables pour dormir (18-20°C)',
      'Activités outdoor optimales',
      'Ambiance vivante sans être bondé'
    ],
    cons: [
      'Eau fraîche à 24°C (wetsuit recommandée plongée)',
      'Prix en hausse (début haute saison)',
      'Vent fort possible sur côte est',
      'Soirées fraîches nécessitent vêtements longs',
      'Réservation anticipée nécessaire'
    ],
    advice: 'Juin est excellent pour Maurice, surtout si vous aimez les activités terrestres. Privilégiez la côte ouest pour éviter le vent. Réservez au moins 2 mois à l\'avance.'
  },
  budget: {
    flights: {
      range: '600-1150€ A/R depuis Paris',
      tips: 'Juin voit les prix augmenter avec le début des vacances d\'hiver. Réservez 4 mois à l\'avance minimum. Évitez les départs week-end (plus chers).'
    },
    accommodation: {
      range: '50-600€/nuit selon catégorie',
      tips: 'Prix en hausse de 15-20% vs avril-mai. Encore négociable en début de mois. Les promos early-bird (6 mois à l\'avance) sont intéressantes.'
    },
    crowds: 'Juin voit l\'affluence augmenter progressivement. Début juin reste calme, fin juin marque l\'arrivée des vacanciers européens. Sites populaires plus fréquentés.'
  },
  activities: [
    {
      title: 'Randonnée Gorges Rivière Noire',
      why: 'Température idéale pour marcher, sentiers en excellent état, cascades accessibles. 15km de nature préservée.',
      link: '/randonnees-ile-maurice',
      icon: '🥾'
    },
    {
      title: 'Plongée épaves et récifs',
      why: 'Visibilité maximale de l\'année (40m), mer calme. Wetsuit 3mm recommandé (eau 24°C).',
      link: '/activites-ile-maurice#plongee',
      icon: '🤿'
    },
    {
      title: 'Kitesurf et windsurf Le Morne',
      why: 'Vent fort et régulier (20-25 nœuds), spot de renommée mondiale, école pour tous niveaux.',
      link: '/kitesurf-ile-maurice',
      icon: '🪁'
    },
    {
      title: 'Observation des baleines',
      why: 'Début de la saison des baleines à bosse. Mer calme, excursions confortables.',
      link: '/observation-des-cetaces-ile-maurice',
      icon: '🐋'
    },
    {
      title: 'VTT Forêt Machabée',
      why: 'Température parfaite, forêt endémique luxuriante, parcours varié pour tous niveaux.',
      link: '/activites-ile-maurice',
      icon: '🚵'
    },
    {
      title: 'Canyoning et cascade',
      why: 'Eau fraîche revigorante, débit parfait, rochers secs et sûrs. Sensations garanties.',
      link: '/activites-ile-maurice',
      icon: '💦'
    },
    {
      title: 'Quad Domaine de Bel Ombre',
      why: 'Sentiers en excellent état, poussière limitée, température idéale pour l\'aventure.',
      link: '/activites-ile-maurice',
      icon: '🏍️'
    },
    {
      title: 'Golf parcours côtiers',
      why: 'Conditions parfaites : sec, température idéale, parcours en excellente condition.',
      link: '/activites-ile-maurice',
      icon: '⛳'
    },
    {
      title: 'Catamaran coucher de soleil',
      why: 'Mer calme, navigation douce, température agréable, ciel dégagé pour photos spectaculaires.',
      link: '/balade-en-bateau-ile-maurice',
      icon: '⛵'
    },
    {
      title: 'Visite plantations thé Bois Chéri',
      why: 'Température fraîche idéale pour dégustation thé chaud. Découverte patrimoine agricole.',
      link: '/activites-ile-maurice',
      icon: '🍵'
    }
  ],
  accommodation: [
    {
      zone: 'Flic en Flac (Côte Ouest)',
      why: 'Protégé du vent, ensoleillement max, excellent rapport qualité-prix, vie locale animée',
      priceRange: '50-200€/nuit'
    },
    {
      zone: 'Trou aux Biches (Nord-Ouest)',
      why: 'Plage sublime, calme relatif, snorkeling excellent, adapté familles',
      priceRange: '70-520€/nuit'
    },
    {
      zone: 'Le Morne (Sud-Ouest)',
      why: 'Mecque du kitesurf en juin, paysages grandioses, resorts luxueux',
      priceRange: '180-800€/nuit'
    },
    {
      zone: 'Balaclava (Nord-Ouest)',
      why: 'Baie protégée du vent, snorkeling exceptionnel, resorts all-inclusive',
      priceRange: '100-700€/nuit'
    }
  ],
  tips: {
    packing: [
      'Vêtements légers pour journée',
      'Pull ou veste pour soirées (18°C)',
      'Pantalon long pour randonnées',
      'Coupe-vent pour côte est',
      'Chaussures de randonnée imperméables',
      'Wetsuit 3mm si plongée prolongée',
      'Crème solaire SPF50+ (UV forts)',
      'Lunettes de soleil et casquette'
    ],
    health: [
      'Protection solaire indispensable',
      'Hydratation régulière',
      'Attention aux coups de froid le soir',
      'Anti-moustique peu nécessaire',
      'Aucun risque sanitaire particulier'
    ],
    events: [
      'Père Laval Pèlerinage (9 juin) : Grande fête catholique, procession à Sainte-Croix',
      'Festival Culinaire Bernard Loiseau (mi-juin) : Gastronomie haut de gamme',
      'Fête de la Musique (21 juin) : Concerts gratuits partout sur l\'île'
    ]
  },
  faq: [
    {
      question: 'Fait-il froid en juin à Maurice ?',
      answer: 'Non ! "Hiver" à Maurice signifie 23-26°C le jour et 18-20°C la nuit. C\'est très agréable. Vous porterez t-shirt en journée et un pull léger le soir. L\'eau à 24°C est parfaite pour la baignade (peut sembler fraîche les 2 premières minutes).'
    },
    {
      question: 'Peut-on se baigner en juin ?',
      answer: 'Oui absolument ! L\'eau est à 23-24°C, c\'est rafraîchissant mais très agréable. La majorité des gens trouvent ça parfait. La mer est calme, idéale pour familles. Pour plongée/snorkeling prolongé, un lycra ou wetsuit 3mm est confortable.'
    },
    {
      question: 'Juin est-il venteux ?',
      answer: 'Ça dépend de la côte. Côte ouest (Flic en Flac, Le Morne) : peu ventée. Côte nord : vent léger agréable. Côte est (Belle Mare) : vent plus fort. Pour le kitesurf, c\'est parfait. Pour farniente, privilégiez l\'ouest.'
    },
    {
      question: 'Y a-t-il beaucoup de monde en juin ?',
      answer: 'L\'affluence est modérée. Début juin est calme, fin juin voit arriver les vacanciers européens. C\'est vivant sans être bondé. Les sites populaires nécessitent d\'arriver tôt le matin.'
    },
    {
      question: 'Quel budget pour juin ?',
      answer: 'Budget routard : 55-90€/jour. Budget confort : 130-180€/jour. Budget luxe : 320€+/jour. Vol : 600-1150€. Juin est plus cher que avril-mai mais offre d\'excellentes conditions. Réservez tôt pour optimiser.'
    },
    {
      question: 'Juin ou octobre : que choisir ?',
      answer: 'Juin : meilleur pour randonnée (plus frais), kitesurf (plus de vent), ambiance haute saison. Octobre : eau plus chaude (25°C vs 24°C), plus sec encore, moins cher, moins de monde. Les deux sont excellents selon vos priorités.'
    }
  ],
  verdict: {
    summary: 'Juin est un mois excellent pour Maurice. Climat sec et doux, conditions idéales pour activités outdoor, mer calme. Parfait si vous aimez l\'hiver agréable et les randonnées.',
    bestFor: [
      'Vous aimez la randonnée et les activités terrestres',
      'Vous cherchez un climat sec et ensoleillé',
      'Vous voyagez en famille (mer calme et sécurisante)',
      'Vous pratiquez le kitesurf ou windsurf',
      'Vous préférez des températures douces (23-26°C)'
    ],
    avoidIf: [
      'Vous êtes très frileux et voulez de l\'eau à 27°C+ → février-mars',
      'Vous détestez le vent → évitez la côte est',
      'Votre budget est serré → avril-mai moins chers',
      'Vous cherchez la tranquillité absolue → mai'
    ]
  }
};

/**
 * Données pour juillet
 */
export const julyData: MonthData = {
  slug: 'juillet',
  month: 'Juillet',
  title: 'Île Maurice en Juillet',
  metaTitle: 'Île Maurice en juillet : météo, prix et activités',
  metaDescription: 'Juillet à Maurice : plein hiver austral avec climat sec et frais. Excellent pour randonnées, observation baleines et kitesurf. Haute saison touristique.',
  season: 'hiver austral',
  rating: 4,
  images: {
    hero: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/03/ile-maurice-voyage-scaled.jpg',
    weather: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/02/meilleurs-hotels-5-etoiles-ile-maurice-plage.jpeg',
    activities: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2023/08/activtes-ile-aux-cerfs-ile-maurice.jpg'
  },
  hero: {
    intro: 'Juillet est le mois le plus frais et le plus sec de l\'année à Maurice. Les températures oscillent entre 22-25°C avec des nuits à 17-19°C. C\'est le pic de la saison de kitesurf et la meilleure période pour observer les baleines. La haute saison bat son plein avec une affluence importante.',
    highlights: [
      'Saison ultra-sèche - ensoleillement maximal',
      'Pic de la saison des baleines à bosse',
      'Conditions exceptionnelles pour kitesurf',
      'Haute saison - ambiance festive'
    ]
  },
  summary: {
    weather: { label: 'Météo', value: 'Sec et frais (hiver doux)', status: 'good' },
    swimming: { label: 'Baignade', value: 'Fraîche (eau à 23°C)', status: 'warning' },
    diving: { label: 'Activités nautiques', value: 'Excellentes (wetsuit nécessaire)', status: 'good' },
    hiking: { label: 'Randonnée', value: 'Conditions parfaites', status: 'good' },
    crowds: { label: 'Affluence', value: 'Élevée (haute saison)', status: 'warning' },
    prices: { label: 'Budget', value: 'Prix élevés', status: 'bad' },
    cyclone: { label: 'Risque cyclonique', value: 'Nul', status: 'good' }
  },
  weather: {
    tempMax: '22-25°C',
    tempMin: '17-19°C',
    water: '22-23°C',
    rainfall: '50-70mm',
    sunHours: '7-8h/jour',
    regions: [
      { name: 'Côte Ouest (Flic en Flac, Le Morne)', description: 'Meilleure météo, protégé vent sud-est, ensoleillement constant' },
      { name: 'Côte Nord (Grand Baie)', description: 'Frais et sec, brise légère, excellente visibilité' },
      { name: 'Côte Est (Belle Mare)', description: 'Ventée et fraîche, vagues importantes, pour amateurs sensations' },
      { name: 'Plateau Central (Curepipe)', description: 'Froid (14-17°C), brouillard matinal, pull nécessaire' }
    ]
  },
  opinion: {
    rating: 4,
    title: 'L\'hiver vivant',
    pros: [
      'Climat ultra-sec (moins de 60mm de pluie)',
      'Ensoleillement constant - pas de pluie',
      'Période optimale pour observer baleines à bosse',
      'Conditions mondiales pour kitesurf Le Morne',
      'Visibilité sous-marine exceptionnelle (40m)',
      'Parfait pour randonnée (températures fraîches)',
      'Ambiance animée et festive',
      'Nuits fraîches excellentes pour sommeil'
    ],
    cons: [
      'Eau fraîche à 22-23°C (wetsuit obligatoire)',
      'Prix au plus haut (haute saison)',
      'Forte affluence - sites bondés',
      'Vent fort sur côte est (rafales 40km/h)',
      'Soirées fraîches (17°C) - vêtements chauds nécessaires',
      'Réservations difficiles sans anticipation'
    ],
    advice: 'Juillet est excellent si vous aimez l\'ambiance de haute saison et les sports outdoor. Évitez si vous êtes frileux ou cherchez la tranquillité. Réservez impérativement 4-6 mois à l\'avance.'
  },
  budget: {
    flights: {
      range: '750-1400€ A/R depuis Paris',
      tips: 'Juillet affiche les prix les plus élevés avec août. Réservez minimum 6 mois à l\'avance. Évitez absolument les départs 14 juillet et fin juillet (pics de prix).'
    },
    accommodation: {
      range: '70-750€/nuit selon catégorie',
      tips: 'Prix au maximum (+40% vs basse saison). Réservation très anticipée obligatoire. Les hébergements mid-range affichent complet 3-4 mois avant. Peu de négociation possible.'
    },
    crowds: 'Juillet est le pic de haute saison avec août. Tous les sites touristiques sont très fréquentés. Arrivez tôt le matin (avant 9h) pour profiter. Plages bondées en journée, calmes tôt le matin.'
  },
  activities: [
    {
      title: 'Observation baleines à bosse',
      why: 'Pic de la saison ! Rencontres quasi garanties. Baleines viennent se reproduire dans eaux mauriciennes.',
      link: '/observation-des-cetaces-ile-maurice',
      icon: '🐋'
    },
    {
      title: 'Kitesurf Le Morne',
      why: 'Conditions légendaires : vent fort régulier (25+ nœuds), lagon parfait, compétitions internationales.',
      link: '/kitesurf-ile-maurice',
      icon: '🪁'
    },
    {
      title: 'Randonnée Le Morne Brabant (UNESCO)',
      why: 'Température fraîche idéale pour l\'ascension. Vue à 360° époustouflante. Départ tôt conseillé.',
      link: '/randonnees-ile-maurice',
      icon: '⛰️'
    },
    {
      title: 'Plongée épaves et tombants',
      why: 'Visibilité maximale (40m+), mer calme malgré vent. Wetsuit 5mm recommandé (eau 22°C).',
      link: '/activites-ile-maurice#plongee',
      icon: '🤿'
    },
    {
      title: 'Via ferrata Corps de Garde',
      why: 'Température parfaite pour l\'effort, rochers secs, sensations fortes avec sécurité.',
      link: '/activites-ile-maurice',
      icon: '🧗'
    },
    {
      title: 'VTT descente Chamarel',
      why: 'Température idéale, paysages spectaculaires, sentiers techniques en parfait état.',
      link: '/activites-ile-maurice',
      icon: '🚵'
    },
    {
      title: 'Pêche au gros',
      why: 'Excellente période pour marlin noir et espadon. Mer formée mais poissons actifs.',
      link: '/activites-ile-maurice',
      icon: '🎣'
    },
    {
      title: 'Tyrolienne Forêt Aventure',
      why: 'Température parfaite pour activité physique, cadre forestier magnifique.',
      link: '/activites-ile-maurice',
      icon: '🌲'
    },
    {
      title: 'Visite Terres 7 Couleurs',
      why: 'Visibilité maximale des couleurs sous soleil éclatant. Site iconique moins chaud à visiter.',
      link: '/activites-ile-maurice',
      icon: '🌈'
    },
    {
      title: 'Cascade Tamarin snorkeling',
      why: 'Eau fraîche mais claire, dauphins présents, ambiance conviviale malgré affluence.',
      link: '/activites-ile-maurice',
      icon: '🐬'
    }
  ],
  accommodation: [
    {
      zone: 'Flic en Flac (Côte Ouest)',
      why: 'Meilleure météo juillet, protégé vent, vie animée, restaurants nombreux, rapport qualité-prix',
      priceRange: '70-250€/nuit'
    },
    {
      zone: 'Le Morne (Sud-Ouest)',
      why: 'Épicentre mondial kitesurf en juillet, paysages grandioses, resorts haut de gamme complets rapidement',
      priceRange: '220-950€/nuit'
    },
    {
      zone: 'Grand Baie (Nord)',
      why: 'Centre névralgique, vie nocturne, shopping, restaurants, activités nautiques variées',
      priceRange: '80-550€/nuit'
    },
    {
      zone: 'Tamarin (Côte Ouest)',
      why: 'Plus calme que Grand Baie, excellente base observation baleines, authentique',
      priceRange: '60-400€/nuit'
    }
  ],
  tips: {
    packing: [
      'Vêtements légers pour journée ensoleillée',
      'Pull chaud et pantalon long pour soirées (17°C)',
      'Coupe-vent imperméable (vent fort possible)',
      'Wetsuit 5mm si plongée/snorkeling prolongé',
      'Chaussures randonnée montantes',
      'Crème solaire SPF50+ (UV maximum)',
      'Lunettes de soleil catégorie 3',
      'Bonnet/bandeau pour vent'
    ],
    health: [
      'Protection solaire maximale (UV très forts)',
      'Hydratation importante malgré fraîcheur',
      'Attention hypothermie si baignade prolongée (eau 22°C)',
      'Échauffement avant activités (muscles raides avec fraîcheur)',
      'Anti-moustique inutile'
    ],
    events: [
      'Festival International du Film (début juillet) : Projections et rencontres à Flic en Flac',
      'Cavadee (date variable) : Procession tamoule impressionnante',
      'Fête nationale française (14 juillet) : Communauté française nombreuse, événements'
    ]
  },
  faq: [
    {
      question: 'Fait-il vraiment froid en juillet ?',
      answer: 'Non, c\'est relatif ! Il fait 22-25°C en journée (t-shirt suffit) et 17-19°C le soir (pull nécessaire). C\'est frais pour Maurice mais très agréable. L\'eau à 22-23°C est fraîche mais on s\'habitue. Avec un wetsuit, aucun problème.'
    },
    {
      question: 'Peut-on vraiment se baigner en juillet ?',
      answer: 'Oui mais l\'eau est fraîche (22-23°C). Les baignades courtes sont agréables. Pour snorkeling/plongée prolongés, un wetsuit 3-5mm est recommandé. Les mauriciens se baignent toute l\'année ! Si vous êtes frileux, privilégiez les activités terrestres.'
    },
    {
      question: 'Vaut-il le coup de venir en juillet malgré les prix ?',
      answer: 'Ça dépend de vos priorités. Si vous voulez voir les baleines, faire du kitesurf ou profiter de l\'ambiance haute saison, oui. Si budget serré ou cherchez tranquillité, privilégiez mai ou octobre (conditions similaires, 30% moins cher, moins de monde).'
    },
    {
      question: 'Où loger pour éviter le vent en juillet ?',
      answer: 'Privilégiez absolument la côte ouest : Flic en Flac, Wolmar, Tamarin, Le Morne (abrité). Évitez la côte est (Belle Mare, Trou d\'Eau Douce) : très ventée en juillet. La côte nord (Grand Baie) est un bon compromis.'
    },
    {
      question: 'Quel budget pour juillet ?',
      answer: 'Budget routard : 70-100€/jour. Budget confort : 150-220€/jour. Budget luxe : 400€+/jour. Vol : 750-1400€. Juillet est le mois le plus cher avec août. Comptez 40% de plus qu\'en basse saison. Réservation anticipée cruciale.'
    },
    {
      question: 'Juillet ou janvier : que choisir ?',
      answer: 'Janvier : eau chaude (28°C), ambiance tropicale, mais risque cyclones, pluies. Juillet : sec garanti, baleines, kitesurf, mais eau fraîche (23°C), cher, bondé. Deux expériences opposées ! Janvier pour plage/chaleur, juillet pour outdoor/baleines.'
    }
  ],
  verdict: {
    summary: 'Juillet est excellent pour les activités outdoor, observation baleines et kitesurf. Moins adapté si vous êtes frileux, avec budget serré ou cherchez tranquillité.',
    bestFor: [
      'Vous voulez voir les baleines à bosse (quasi garanti)',
      'Vous pratiquez kitesurf/windsurf (conditions mondiales)',
      'Vous aimez la randonnée (température fraîche idéale)',
      'Vous appréciez l\'ambiance de haute saison',
      'Vous préférez un climat sec garanti'
    ],
    avoidIf: [
      'Vous êtes frileux et voulez profiter de l\'eau → février-mars',
      'Votre budget est limité → avril-mai ou octobre',
      'Vous cherchez tranquillité et authenticité → mai ou novembre',
      'Vous détestez les foules → évitez absolument juillet-août',
      'Vous n\'avez pas réservé 4 mois à l\'avance → complet partout'
    ]
  }
};

/**
 * Données pour août
 */
export const augustData: MonthData = {
  slug: 'aout',
  month: 'Août',
  title: 'Île Maurice en Août',
  metaTitle: 'Île Maurice en août : météo, prix et activités',
  metaDescription: 'Août à Maurice : fin de l\'hiver austral avec climat sec. Encore excellent pour baleines et kitesurf mais prix élevés et forte affluence. Dernière fenêtre haute saison.',
  season: 'hiver austral',
  rating: 4,
  images: {
    hero: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/03/ile-maurice-voyage-scaled.jpg',
    weather: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/02/meilleurs-hotels-5-etoiles-ile-maurice-plage.jpeg',
    activities: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2023/08/activtes-ile-aux-cerfs-ile-maurice.jpg'
  },
  hero: {
    intro: 'Août prolonge l\'hiver austral avec des conditions similaires à juillet mais des températures en légère hausse (23-26°C). Le climat reste sec et ensoleillé. C\'est toujours une excellente période pour les baleines et le kitesurf. La haute saison touristique atteint son paroxysme avec des prix au maximum.',
    highlights: [
      'Dernière fenêtre optimale baleines',
      'Températures remontent légèrement (plus confortable)',
      'Toujours ultra-sec - ciel bleu constant',
      'Pic absolu affluence touristique'
    ]
  },
  summary: {
    weather: { label: 'Météo', value: 'Sec et doux (fin hiver)', status: 'good' },
    swimming: { label: 'Baignade', value: 'Fraîche (eau à 23°C)', status: 'warning' },
    diving: { label: 'Activités nautiques', value: 'Bonnes (wetsuit nécessaire)', status: 'good' },
    hiking: { label: 'Randonnée', value: 'Excellentes conditions', status: 'good' },
    crowds: { label: 'Affluence', value: 'Très élevée (pic)', status: 'bad' },
    prices: { label: 'Budget', value: 'Prix maximum', status: 'bad' },
    cyclone: { label: 'Risque cyclonique', value: 'Nul', status: 'good' }
  },
  weather: {
    tempMax: '23-26°C',
    tempMin: '18-20°C',
    water: '23-24°C',
    rainfall: '60-75mm',
    sunHours: '7-8h/jour',
    regions: [
      { name: 'Côte Ouest (Flic en Flac, Le Morne)', description: 'Conditions optimales, protégé vent, mer calme, ensoleillement max' },
      { name: 'Côte Nord (Grand Baie)', description: 'Excellente météo, brise agréable, bondé mais animé' },
      { name: 'Côte Est (Belle Mare)', description: 'Toujours ventée, commence à s\'adoucir, vagues présentes' },
      { name: 'Plateau Central (Curepipe)', description: 'Frais (16-19°C), sec, parfait pour escapades nature' }
    ]
  },
  opinion: {
    rating: 4,
    title: 'Le rush de fin d\'hiver',
    pros: [
      'Climat sec garanti - quasi aucune pluie',
      'Températures plus douces qu\'en juillet',
      'Baleines encore très présentes (fin saison)',
      'Kitesurf toujours excellent',
      'Visibilité sous-marine exceptionnelle',
      'Randonnées dans conditions idéales',
      'Ambiance festive et internationale',
      'Longues journées ensoleillées'
    ],
    cons: [
      'Prix au maximum avec juillet (haute saison)',
      'Affluence record - sites saturés',
      'Eau encore fraîche à 23°C',
      'Vent peut être fort sur certaines zones',
      'Difficulté trouver hébergement sans réservation anticipée',
      'Restaurants et activités souvent complets',
      'Moins authentique (très touristique)'
    ],
    advice: 'Août est excellent pour la météo mais challengeant pour l\'organisation et le budget. Si vous n\'avez pas réservé 4-6 mois à l\'avance, préférez septembre-octobre (mêmes conditions, moins cher, moins de monde).'
  },
  budget: {
    flights: {
      range: '700-1350€ A/R depuis Paris',
      tips: 'Août = prix maximum avec juillet. Évitez absolument le 15 août (pic absolu). Début août légèrement moins cher que fin août. Réservation 6 mois minimum obligatoire pour tarifs raisonnables.'
    },
    accommodation: {
      range: '75-800€/nuit selon catégorie',
      tips: 'Prix au plafond. Aucune négociation possible. Les établissements populaires affichent complet 5-6 mois à l\'avance. Budget +40-50% vs basse saison. Considérez locations Airbnb (plus flexibles).'
    },
    crowds: 'Août est LE mois le plus fréquenté. Toutes les attractions affichent complet. Plages bondées entre 10h-16h. Restaurants nécessitent réservation. Levez-vous tôt (avant 8h) pour profiter de la tranquillité.'
  },
  activities: [
    {
      title: 'Observation baleines (dernière chance)',
      why: 'Fin de saison mais baleines encore présentes. Moins de bateaux qu\'en juillet. Réservez tôt.',
      link: '/observation-des-cetaces-ile-maurice',
      icon: '🐋'
    },
    {
      title: 'Kitesurf et windsurf',
      why: 'Vent toujours fort et régulier. Conditions excellentes mais spots très fréquentés. Slots à réserver.',
      link: '/kitesurf-ile-maurice',
      icon: '🪁'
    },
    {
      title: 'Randonnée matinale Montagne du Lion',
      why: 'Partez à 6h pour éviter les groupes. Température fraîche, vue spectaculaire, 2h30 A/R.',
      link: '/randonnees-ile-maurice',
      icon: '🌄'
    },
    {
      title: 'Plongée sites profonds',
      why: 'Visibilité maximale (40m), mer calme. Wetsuit 5mm obligatoire. Réservez clubs tôt (complets).',
      link: '/activites-ile-maurice#plongee',
      icon: '🤿'
    },
    {
      title: 'Catamaran privé (éviter groupes)',
      why: 'Louez catamaran privé pour éviter bateaux bondés. Explorez criques isolées. Budget mais unique.',
      link: '/balade-en-bateau-ile-maurice',
      icon: '⛵'
    },
    {
      title: 'VTT electrique Chamarel',
      why: 'Évitez efforts avec e-bike, explorez facilement. Réservez tôt (haute demande).',
      link: '/activites-ile-maurice',
      icon: '🚴'
    },
    {
      title: 'Pêche au gros',
      why: 'Excellente période pour gros poissons. Sortie tôt matin (moins de bateaux). Compétitions organisées.',
      link: '/activites-ile-maurice',
      icon: '🎣'
    },
    {
      title: 'Golf parcours premium',
      why: 'Température idéale, parcours impeccables. Réservez tee-times longtemps à l\'avance.',
      link: '/activites-ile-maurice',
      icon: '⛳'
    },
    {
      title: 'Visite marchés locaux tôt matin',
      why: 'Port-Louis, Mahébourg, Flacq. Ambiance authentique avant 8h, bondé après. Produits frais.',
      link: '/activites-ile-maurice',
      icon: '🛒'
    },
    {
      title: 'Spa et massage',
      way: 'Échappez foules dans spa luxueux. Soins ayurvédiques, massages aux huiles. Réservez en ligne.',
      link: '/activites-ile-maurice',
      icon: '💆'
    }
  ],
  accommodation: [
    {
      zone: 'Flic en Flac (Côte Ouest)',
      why: 'Meilleure météo, excellent rapport qualité-prix relatif, vie locale, complet rapidement',
      priceRange: '75-270€/nuit'
    },
    {
      zone: 'Le Morne (Sud-Ouest)',
      why: 'Pour kitesurfeurs, paysages sublimes, resorts top mais prix stratosphériques en août',
      priceRange: '250-1000€/nuit'
    },
    {
      zone: 'Pointe aux Piments (Nord-Ouest)',
      why: 'Alternative Grand Baie moins bondée, plage calme, snorkeling excellent',
      priceRange: '90-500€/nuit'
    },
    {
      zone: 'Sud sauvage (Bel Ombre, Souillac)',
      why: 'Moins touristique, authentique, resorts luxueux avec espace, paysages dramatiques',
      priceRange: '120-700€/nuit'
    }
  ],
  tips: {
    packing: [
      'Vêtements légers pour journée',
      'Pull léger pour soirées (18-20°C)',
      'Wetsuit 3-5mm recommandé activités nautiques',
      'Chaussures randonnée',
      'Crème solaire SPF50+ (UV maximum)',
      'Lunettes soleil et casquette',
      'Coupe-vent',
      'Patience pour gérer les foules'
    ],
    health: [
      'Protection solaire maximale',
      'Hydratation constante',
      'Attention eau fraîche (23°C) si baignade longue',
      'Réservez consultations médicales si besoin (système de santé saturé)',
      'Anti-moustique inutile'
    ],
    events: [
      'Ganesh Chaturthi (date variable) : Grande fête hindoue, processions colorées',
      'Assomption (15 août) : Fête catholique, pèlerinages, messes',
      'Festival des Sports Nautiques (mi-août) : Compétitions kite, windsurf, stand-up paddle'
    ]
  },
  faq: [
    {
      question: 'Août ou juillet : quel mois choisir ?',
      answer: 'Conditions quasi identiques. Juillet : pic baleines, légèrement plus frais. Août : températures un peu plus douces (26°C vs 25°C), encore baleines mais fin saison. Prix similaires (maximum). Si flexibles, privilégiez juillet pour baleines, août si supportez moins le frais.'
    },
    {
      question: 'Est-ce trop tard pour voir les baleines en août ?',
      answer: 'Non ! Août reste excellent, surtout première quinzaine. Les baleines sont encore très présentes. Mi-août, ça diminue. Fin août, c\'est aléatoire. Privilégiez début août pour maximiser chances (et il y a moins de bateaux qu\'en juillet).'
    },
    {
      question: 'Comment éviter les foules en août ?',
      answer: 'Stratégies : 1) Levez-vous tôt (avant 8h). 2) Privilégiez sites moins connus. 3) Dînez tôt (18h30) ou tard (21h30). 4) Louez véhicule pour autonomie. 5) Explorez sud et intérieur (moins fréquentés). 6) Réservez TOUT à l\'avance.'
    },
    {
      question: 'Peut-on encore réserver en août pour août ?',
      answer: 'Difficile ! La majorité des hébergements populaires sont complets 3-4 mois avant. Mais des annulations surviennent. Surveillez Booking.com, appelez directement hôtels, considérez Airbnb ou villas. Soyez flexibles sur localisation et dates.'
    },
    {
      question: 'Quel budget pour août ?',
      answer: 'Budget routard : 75-105€/jour. Budget confort : 160-230€/jour. Budget luxe : 450€+/jour. Vol : 700-1350€. Août = mois le plus cher avec juillet. Comptez 45-50% de plus qu\'en basse saison. Anticipation = économies.'
    },
    {
      question: 'Août vaut-il vraiment le coup ?',
      answer: 'Ça dépend. Si vous voulez baleines, kitesurf et climat sec garanti : oui (mais réservez tôt). Si budget serré ou détestez foules : non, privilégiez septembre-octobre (conditions similaires, -30% prix, -50% affluence). Août = compromis ambiance vs. confort.'
    }
  ],
  verdict: {
    summary: 'Août offre d\'excellentes conditions météo et activités mais souffre de prix élevés et forte affluence. Recommandé uniquement si réservation anticipée et budget confortable.',
    bestFor: [
      'Vous avez réservé 4-6 mois à l\'avance',
      'Votre budget permet la haute saison',
      'Vous voulez voir les baleines (dernière chance)',
      'Vous aimez l\'ambiance animée et internationale',
      'Vous êtes organisé et patient avec les foules'
    ],
    avoidIf: [
      'Vous n\'avez pas réservé à l\'avance → tout est complet',
      'Votre budget est limité → septembre 30% moins cher',
      'Vous détestez les foules → mai ou octobre parfaits',
      'Vous cherchez authenticité → juin ou novembre',
      'Vous êtes frileux → attendez novembre (eau 26°C)'
    ]
  }
};

/**
 * Données pour septembre
 */
export const septemberData: MonthData = {
  slug: 'septembre',
  month: 'Septembre',
  title: 'Île Maurice en Septembre',
  metaTitle: 'Île Maurice en septembre : météo, prix et activités',
  metaDescription: 'Septembre à Maurice : début du printemps austral avec conditions exceptionnelles. L\'un des meilleurs mois avec météo idéale, mer calme, prix raisonnables et peu de touristes.',
  season: 'printemps austral',
  rating: 5,
  images: {
    hero: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/03/ile-maurice-voyage-scaled.jpg',
    weather: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/02/meilleurs-hotels-5-etoiles-ile-maurice-plage.jpeg',
    activities: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2023/08/activtes-ile-aux-cerfs-ile-maurice.jpg'
  },
  hero: {
    intro: 'Septembre est unanimement reconnu comme l\'un des 3 meilleurs mois pour Maurice. Le printemps austral débute avec des températures en hausse (24-27°C), un climat toujours sec, une mer d\'huile et une visibilité exceptionnelle. Les prix baissent après août et l\'affluence diminue fortement. Conditions quasi parfaites.',
    highlights: [
      'Météo parfaite - transition idéale vers chaleur',
      'Mer calme absolue - sécurité maximale',
      'Prix en baisse de 25-30% vs juillet-août',
      'Peu de touristes - authenticité retrouvée'
    ]
  },
  summary: {
    weather: { label: 'Météo', value: 'Parfaite (sec, ensoleillé, doux)', status: 'good' },
    swimming: { label: 'Baignade', value: 'Excellente (eau à 24°C)', status: 'good' },
    diving: { label: 'Activités nautiques', value: 'Conditions optimales', status: 'good' },
    hiking: { label: 'Randonnée', value: 'Excellentes conditions', status: 'good' },
    crowds: { label: 'Affluence', value: 'Faible', status: 'good' },
    prices: { label: 'Budget', value: 'Très avantageux', status: 'good' },
    cyclone: { label: 'Risque cyclonique', value: 'Nul', status: 'good' }
  },
  weather: {
    tempMax: '24-27°C',
    tempMin: '19-21°C',
    water: '24-25°C',
    rainfall: '50-65mm',
    sunHours: '8-9h/jour',
    regions: [
      { name: 'Côte Ouest (Flic en Flac, Le Morne)', description: 'Conditions idylliques, mer miroir, ensoleillement constant' },
      { name: 'Côte Nord (Grand Baie)', description: 'Parfait, mer cristalline, vent très léger' },
      { name: 'Côte Est (Belle Mare)', description: 'S\'adoucit progressivement, mer calme, excellent pour familles' },
      { name: 'Plateau Central (Curepipe)', description: 'Doux (17-21°C), fleuri, agréable pour découverte' }
    ]
  },
  opinion: {
    rating: 5,
    title: 'Le mois secret des connaisseurs',
    pros: [
      'Météo absolument parfaite - équilibre idéal',
      'Mer d\'huile quasi quotidienne',
      'Températures confortables (24-27°C)',
      'Eau qui se réchauffe (24-25°C)',
      'Prix excellents (-25-30% vs haute saison)',
      'Très peu de touristes - île authentique',
      'Visibilité sous-marine exceptionnelle (35-40m)',
      'Quasi aucune pluie - planification facile',
      'Toutes activités praticables en conditions optimales'
    ],
    cons: [
      'Nuits encore un peu fraîches (19°C)',
      'Eau peut sembler fraîche pour très frileux',
      'Quelques établissements en transition saisonnière',
      'Vent peut se lever fin d\'après-midi (léger)'
    ],
    advice: 'Septembre est LE mois coup de cœur. Si vous pouvez choisir votre période, c\'est le moment absolu. Vous aurez les mêmes conditions qu\'en juillet-août pour 30% moins cher et avec 60% moins de monde. Réservez 2-3 mois à l\'avance.'
  },
  budget: {
    flights: {
      range: '550-1050€ A/R depuis Paris',
      tips: 'Septembre offre d\'excellents tarifs post-vacances scolaires. Évitez le premier week-end (rentrée). Mi et fin septembre = tarifs optimaux. Réservez 3 mois à l\'avance.'
    },
    accommodation: {
      range: '40-550€/nuit selon catégorie',
      tips: 'Baisse significative (-25-30%) après août. Début septembre particulièrement avantageux. Excellent moment pour négocier longs séjours. Resorts haut de gamme deviennent accessibles.'
    },
    crowds: 'Septembre est remarquablement calme. Après le rush juillet-août, l\'île retrouve son authenticité. Sites peu fréquentés, plages quasi privées, restaurants sans attente. Parfait pour découvrir la vraie Maurice.'
  },
  activities: [
    {
      title: 'Snorkeling et plongée récifs',
      why: 'Visibilité maximale (40m), mer calme absolue, eau confortable. Épaves et récifs accessibles tous niveaux.',
      link: '/activites-ile-maurice#plongee',
      icon: '🤿'
    },
    {
      title: 'Randonnée Pieter Both (823m)',
      why: 'Température idéale pour ascension technique. Vue panoramique. Moins fréquenté qu\'en haute saison.',
      link: '/randonnees-ile-maurice',
      icon: '🏔️'
    },
    {
      title: 'Catamaran Île Gabriel',
      why: 'Mer d\'huile garantie, navigation douce, île quasi déserte, snorkeling exceptionnel.',
      link: '/balade-en-bateau-ile-maurice',
      icon: '⛵'
    },
    {
      title: 'Kitesurf débutants',
      why: 'Vent modéré idéal apprentissage, lagon calme et peu profond, instructeurs disponibles.',
      link: '/kitesurf-ile-maurice',
      icon: '🪁'
    },
    {
      title: 'Kayak et paddle mangroves',
      why: 'Eau calme miroir, exploration tranquille, observation oiseaux, température parfaite.',
      link: '/kayak-ile-maurice',
      icon: '🛶'
    },
    {
      title: 'VTT vallée de Ferney',
      why: 'Sentiers excellents, faune endémique, température idéale, parcours tous niveaux.',
      link: '/activites-ile-maurice',
      icon: '🚵'
    },
    {
      title: 'Pêche au gros',
      why: 'Excellente période pour thon, marlin et dorado. Mer calme, sorties confortables.',
      link: '/activites-ile-maurice',
      icon: '🎣'
    },
    {
      title: 'Yoga et retraite bien-être',
      why: 'Température douce, ambiance sereine, moins de monde. Parfait pour se ressourcer.',
      link: '/activites-ile-maurice',
      icon: '🧘'
    },
    {
      title: 'Visite jardins Pamplemousses',
      why: 'Floraison printanière, température agréable promenade, nénuphars en fleurs.',
      link: '/activites-ile-maurice',
      icon: '🌸'
    },
    {
      title: 'Exploration sud sauvage',
      why: 'Gris-Gris, Macondé, Souillac. Paysages dramatiques, falaises, peu touristique.',
      link: '/activites-ile-maurice',
      icon: '🌊'
    }
  ],
  accommodation: [
    {
      zone: 'Flic en Flac (Côte Ouest)',
      why: 'Météo parfaite, excellent rapport qualité-prix, vie locale animée, plage superbe',
      priceRange: '40-200€/nuit'
    },
    {
      zone: 'Trou aux Biches (Nord-Ouest)',
      why: 'Plage exceptionnelle, snorkeling tortues, ambiance familiale, calme absolu',
      priceRange: '60-480€/nuit'
    },
    {
      zone: 'Belle Mare (Côte Est)',
      why: 'Excellente en septembre (moins ventée), plage immense, resorts luxueux accessibles',
      priceRange: '80-600€/nuit'
    },
    {
      zone: 'Le Morne (Sud-Ouest)',
      why: 'Paysages iconiques, moins bondé, resorts haut de gamme à prix raisonnables',
      priceRange: '150-700€/nuit'
    }
  ],
  tips: {
    packing: [
      'Vêtements légers pour journée',
      'Pull léger pour soirées (19-21°C)',
      'Chaussures de randonnée',
      'Maillots de bain',
      'Crème solaire SPF50+',
      'Lunettes de soleil',
      'Vêtements longs fins (protection solaire randonnée)',
      'Appareil photo (visibilité exceptionnelle)'
    ],
    health: [
      'Protection solaire indispensable (UV forts)',
      'Hydratation régulière (2L/jour)',
      'Anti-moustique léger (peu nécessaire)',
      'Aucun risque sanitaire particulier',
      'Système de santé accessible facilement'
    ],
    events: [
      'Père Laval Feast (9 septembre) : Pèlerinage national, ferveur religieuse',
      'Festival Kreol (fin septembre) : Célébration culture créole, musique, danse, gastronomie',
      'Course Cycliste Tour de Maurice (mi-septembre) : Épreuve internationale'
    ]
  },
  faq: [
    {
      question: 'Pourquoi septembre est-il si recommandé ?',
      answer: 'Septembre offre le meilleur rapport qualité-prix de l\'année. Vous avez les mêmes conditions météo qu\'en juillet-août (sec, ensoleillé, mer calme) mais avec 30% de réduction et 60% moins de touristes. C\'est le secret des connaisseurs qui reviennent année après année.'
    },
    {
      question: 'Septembre ou mai : lequel choisir ?',
      answer: 'Deux mois exceptionnels ! Mai : légèrement plus chaud (27°C vs 26°C), juste avant haute saison. Septembre : mer encore plus calme, légèrement plus sec, juste après haute saison. Honnêtement, impossible de se tromper. Choisissez selon vos dates de congés !'
    },
    {
      question: 'L\'eau n\'est-elle pas froide en septembre ?',
      answer: 'L\'eau est à 24-25°C, c\'est parfait ! C\'est rafraîchissant mais très confortable. On s\'y habitue immédiatement. Pour snorkeling/plongée courts, aucun problème. Pour sessions longues, un lycra suffit. Seuls les très frileux trouveront ça frais.'
    },
    {
      question: 'Y a-t-il assez d\'animation en septembre ?',
      answer: 'Oui ! Contrairement à avril-mai, septembre voit encore du monde (fin de haute saison). Les restaurants et bars sont ouverts, les activités fonctionnent normalement. Vous avez l\'animation sans les désagréments de la foule. C\'est l\'équilibre parfait.'
    },
    {
      question: 'Quel budget pour septembre ?',
      answer: 'Budget routard : 50-85€/jour. Budget confort : 115-170€/jour. Budget luxe : 300€+/jour. Vol : 550-1050€. Septembre offre le meilleur rapport qualité-prix absolu. C\'est le moment de s\'offrir du luxe à prix raisonnable.'
    },
    {
      question: 'Faut-il réserver longtemps à l\'avance ?',
      answer: 'Modérément. Septembre n\'est pas aussi pris d\'assaut que juillet-août. 2-3 mois à l\'avance suffisent pour avoir du choix. Certains trouvent encore des disponibilités 1 mois avant. Mais ne traînez pas trop, les connaisseurs le savent !'
    }
  ],
  verdict: {
    summary: 'Septembre est l\'un des 3 meilleurs mois pour Maurice. Conditions quasi parfaites, prix excellents, authenticité. Le coup de cœur absolu des voyageurs avertis.',
    bestFor: [
      'Vous cherchez le meilleur rapport qualité-prix',
      'Vous voulez éviter les foules de haute saison',
      'Vous aimez l\'équilibre entre animation et tranquillité',
      'Vous privilégiez météo stable et mer calme',
      'Vous appréciez l\'authenticité'
    ],
    avoidIf: [
      'Vous êtes très frileux et voulez eau à 27°C+ → février-mars',
      'Vous aimez l\'ambiance festive haute saison → juillet-août',
      'Vous détestez avoir frais le soir → novembre-janvier'
    ]
  }
};

/**
 * Données pour octobre
 */
export const octoberData: MonthData = {
  slug: 'octobre',
  month: 'Octobre',
  title: 'Île Maurice en Octobre',
  metaTitle: 'Île Maurice en octobre : météo, prix et activités',
  metaDescription: 'Octobre à Maurice : printemps en pleine floraison. Températures en hausse, eau qui se réchauffe, conditions idéales pour toutes activités. Excellent rapport qualité-prix.',
  season: 'printemps austral',
  rating: 5,
  images: {
    hero: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/03/ile-maurice-voyage-scaled.jpg',
    weather: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/02/meilleurs-hotels-5-etoiles-ile-maurice-plage.jpeg',
    activities: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2023/08/activtes-ile-aux-cerfs-ile-maurice.jpg'
  },
  hero: {
    intro: 'Octobre est considéré par beaucoup comme LE mois parfait à Maurice. Le printemps bat son plein avec des températures idéales (26-29°C), l\'eau se réchauffe à 25°C, le climat reste sec et la nature explose de couleurs. C\'est le dernier mois avant la montée des prix de fin d\'année. Absolument exceptionnel.',
    highlights: [
      'Météo parfaite - équilibre chaleur/fraîcheur',
      'Eau à 25°C - confortable pour tous',
      'Nature en fleurs - paysages magnifiques',
      'Dernier mois prix avantageux avant décembre'
    ]
  },
  summary: {
    weather: { label: 'Météo', value: 'Idéale (ensoleillé, sec, chaud)', status: 'good' },
    swimming: { label: 'Baignade', value: 'Excellente (eau à 25°C)', status: 'good' },
    diving: { label: 'Activités nautiques', value: 'Conditions parfaites', status: 'good' },
    hiking: { label: 'Randonnée', value: 'Très bonnes conditions', status: 'good' },
    crowds: { label: 'Affluence', value: 'Modérée', status: 'good' },
    prices: { label: 'Budget', value: 'Avantageux', status: 'good' },
    cyclone: { label: 'Risque cyclonique', value: 'Nul', status: 'good' }
  },
  weather: {
    tempMax: '26-29°C',
    tempMin: '20-22°C',
    water: '25-26°C',
    rainfall: '55-70mm',
    sunHours: '8-9h/jour',
    regions: [
      { name: 'Côte Ouest (Flic en Flac, Le Morne)', description: 'Conditions idéales, chaleur agréable, mer calme et limpide' },
      { name: 'Côte Nord (Grand Baie)', description: 'Parfait, eau cristalline, température idéale pour tous' },
      { name: 'Côte Est (Belle Mare)', description: 'Excellente, vent très léger, mer calme, accessible familles' },
      { name: 'Plateau Central (Curepipe)', description: 'Doux (19-23°C), floraison maximale, verdure luxuriante' }
    ]
  },
  opinion: {
    rating: 5,
    title: 'La perfection printanière',
    pros: [
      'Température absolument parfaite (26-29°C)',
      'Eau confortable à 25-26°C pour tous',
      'Climat sec avec quasi aucune pluie',
      'Nature en pleine floraison - paysages sublimes',
      'Mer calme idéale pour familles et débutants',
      'Prix encore très raisonnables',
      'Affluence modérée - bon équilibre',
      'Visibilité exceptionnelle (35m)',
      'Toutes activités praticables en conditions optimales',
      'Nuits douces agréables (20-22°C)'
    ],
    cons: [
      'Début léger réchauffement (mais confortable)',
      'Fin octobre : premières pluies possibles (rares)',
      'Prix commencent à remonter légèrement fin mois',
      'Réservation recommandée (mois populaire)'
    ],
    advice: 'Octobre est le mois parfait si vous cherchez l\'équilibre absolu : températures ni trop chaudes ni trop fraîches, eau confortable, prix raisonnables, peu de monde. Beaucoup le considèrent comme supérieur à mai et septembre. Réservez 2-3 mois à l\'avance.'
  },
  budget: {
    flights: {
      range: '550-1100€ A/R depuis Paris',
      tips: 'Octobre offre d\'excellents tarifs. Début octobre particulièrement avantageux. Fin octobre voit les prix remonter légèrement (approche haute saison). Réservez 3 mois à l\'avance pour optimiser.'
    },
    accommodation: {
      range: '45-580€/nuit selon catégorie',
      tips: 'Prix encore très attractifs début octobre. Fin octobre : légère hausse (+10-15%). Excellent moment pour négocier séjours longs. Resorts haut de gamme accessibles.'
    },
    crowds: 'Octobre voit l\'affluence augmenter progressivement. Début octobre très calme, fin octobre commence à voir arriver les premiers vacanciers de fin d\'année. Reste très agréable et gérable.'
  },
  activities: [
    {
      title: 'Plongée et snorkeling Blue Bay',
      why: 'Parc marin protégé, eau à 25°C idéale, visibilité maximale, coraux multicolores, poissons tropicaux.',
      link: '/activites-ile-maurice#plongee',
      icon: '🐠'
    },
    {
      title: 'Randonnée Gorges de la Rivière Noire',
      why: 'Température parfaite (pas trop chaud), nature en fleurs, cascades accessibles, oiseaux endémiques.',
      link: '/randonnees-ile-maurice',
      icon: '🦜'
    },
    {
      title: 'Catamaran Île aux Cerfs',
      why: 'Mer calme, navigation douce, plages paradisiaques peu fréquentées, BBQ sur plage.',
      link: '/balade-en-bateau-ile-maurice',
      icon: '🏝️'
    },
    {
      title: 'Kitesurf et windsurf',
      why: 'Vent modéré, lagon calme, conditions parfaites débutants et intermédiaires.',
      link: '/kitesurf-ile-maurice',
      icon: '🪁'
    },
    {
      title: 'VTT et cyclotourisme',
      why: 'Température idéale pour effort, routes fleuries, découverte villages authentiques.',
      link: '/activites-ile-maurice',
      icon: '🚴'
    },
    {
      title: 'Pêche au gros',
      why: 'Excellente période transition, marlin bleu, thon jaune, espadon. Mer calme.',
      link: '/activites-ile-maurice',
      icon: '🎣'
    },
    {
      title: 'Canyoning Tamarind Falls',
      why: 'Eau rafraîchissante, débit optimal, rochers secs, série de 7 cascades spectaculaires.',
      link: '/activites-ile-maurice',
      icon: '💦'
    },
    {
      title: 'Stand-up paddle lagons',
      why: 'Eau calme miroir, température agréable, exploration mangroves et criques.',
      link: '/activites-ile-maurice',
      icon: '🏄'
    },
    {
      title: 'Visite Jardins et réserves naturelles',
      why: 'Floraison printanière maximale, oiseaux actifs, température promenade agréable.',
      link: '/activites-ile-maurice',
      icon: '🌺'
    },
    {
      title: 'Quad et buggy aventure',
      why: 'Sentiers excellents, poussière limitée, paysages verdoyants, température confortable.',
      link: '/activites-ile-maurice',
      icon: '🏎️'
    }
  ],
  accommodation: [
    {
      zone: 'Flic en Flac (Côte Ouest)',
      why: 'Météo parfaite, meilleur rapport qualité-prix, vie locale, restaurants, plage superbe',
      priceRange: '45-210€/nuit'
    },
    {
      zone: 'Trou aux Biches (Nord-Ouest)',
      why: 'Plage sublime, snorkeling tortues, familial, calme, excellents resorts mid-range',
      priceRange: '65-500€/nuit'
    },
    {
      zone: 'Belle Mare (Côte Est)',
      why: 'Parfaite en octobre (calme), plage de rêve 10km, resorts luxueux, peu fréquentée',
      priceRange: '90-650€/nuit'
    },
    {
      zone: 'Grand Baie (Nord)',
      why: 'Animation, shopping, restaurants, vie nocturne, activités nautiques, central',
      priceRange: '55-450€/nuit'
    }
  ],
  tips: {
    packing: [
      'Vêtements légers et respirants',
      'Maillots de bain (2-3)',
      'Gilet léger pour soirées climatisées',
      'Chaussures de randonnée',
      'Crème solaire SPF50+ biodégradable',
      'Casquette et lunettes de soleil',
      'Vêtements longs légers (protection solaire)',
      'Petit sac étanche pour excursions'
    ],
    health: [
      'Protection solaire maximale (UV forts)',
      'Hydratation importante (2-2.5L/jour)',
      'Anti-moustique léger (début saison chaude)',
      'Respecter zones baignade (courants rares mais possibles)',
      'Système de santé performant et accessible'
    ],
    events: [
      'Divali (date variable) : Fête hindoue des lumières, illuminations magiques partout',
      'Festival International de Musique (mi-octobre) : Concerts gratuits divers styles',
      'Marathon International (fin octobre) : Course à travers paysages spectaculaires'
    ]
  },
  faq: [
    {
      question: 'Octobre est-il vraiment le meilleur mois ?',
      answer: 'Beaucoup le pensent ! Octobre offre l\'équilibre parfait : température idéale (26-29°C), eau confortable (25°C), sec, nature en fleurs, prix raisonnables, peu de monde. C\'est le sweet spot entre confort climatique et accessibilité. Avec mai et septembre, c\'est le trio gagnant.'
    },
    {
      question: 'Commence-t-il à faire trop chaud en octobre ?',
      answer: 'Non, c\'est parfait ! 26-29°C, c\'est la température idéale. Ni l\'humidité de l\'été, ni la fraîcheur de l\'hiver. Vous êtes en t-shirt confortablement toute la journée. Les nuits à 20-22°C restent agréables pour dormir. C\'est le Goldilocks mauricien : ni trop chaud, ni trop froid.'
    },
    {
      question: 'Y a-t-il déjà des risques de pluie en octobre ?',
      answer: 'Très limités ! Octobre reste dans la saison sèche. Vous aurez peut-être 1-2 averses brèves en fin de mois, mais rien de comparable à l\'été. C\'est quasi négligeable. Votre planning ne sera pas affecté.'
    },
    {
      question: 'Octobre ou mai : comment choisir ?',
      answer: 'Deux mois exceptionnels ! Octobre : plus chaud (29°C vs 27°C), eau plus chaude (25°C vs 25°C... égalité !), nature en fleurs. Mai : légèrement plus sec, nuits plus fraîches. Différences mineures. Choisissez selon vos dates de congés, les deux sont parfaits !'
    },
    {
      question: 'Quel budget pour octobre ?',
      answer: 'Budget routard : 50-85€/jour. Budget confort : 120-175€/jour. Budget luxe : 310€+/jour. Vol : 550-1100€. Octobre offre un excellent rapport qualité-prix, surtout début mois. Fin octobre, les prix commencent à remonter (+10-15%).'
    },
    {
      question: 'Peut-on tout faire en octobre ?',
      answer: 'Absolument TOUT ! Octobre est le mois le plus polyvalent. Plage, randonnée, plongée, sports nautiques, visites culturelles, golf, vélo... Toutes les activités sont praticables en conditions optimales. C\'est le mois universel qui convient à tous les profils.'
    }
  ],
  verdict: {
    summary: 'Octobre est LE mois parfait pour Maurice selon beaucoup. Équilibre absolu entre tous les critères. Un choix qu\'on ne regrette jamais.',
    bestFor: [
      'Vous cherchez l\'équilibre parfait tous critères',
      'Vous aimez des températures chaudes mais confortables',
      'Vous voulez profiter de l\'eau sans qu\'elle soit froide',
      'Vous privilégiez le meilleur rapport qualité-prix',
      'Vous appréciez la nature en fleurs'
    ],
    avoidIf: [
      'Vous voulez absolument l\'eau la plus chaude → février-mars (28°C)',
      'Vous cherchez la fraîcheur de l\'hiver → juin-août',
      'Vous aimez les ambiances festives haute saison → décembre-janvier'
    ]
  }
};

/**
 * Données pour novembre
 */
export const novemberData: MonthData = {
  slug: 'novembre',
  month: 'Novembre',
  title: 'Île Maurice en Novembre',
  metaTitle: 'Île Maurice en novembre : météo, prix et activités',
  metaDescription: 'Novembre à Maurice : fin du printemps avec transition vers l\'été. Excellentes conditions, chaleur croissante, derniers prix avantageux avant décembre. Période très recommandée.',
  season: 'printemps austral (fin)',
  rating: 4.5,
  images: {
    hero: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/03/ile-maurice-voyage-scaled.jpg',
    weather: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/02/meilleurs-hotels-5-etoiles-ile-maurice-plage.jpeg',
    activities: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2023/08/activtes-ile-aux-cerfs-ile-maurice.jpg'
  },
  hero: {
    intro: 'Novembre marque la transition vers l\'été austral. Les températures montent (27-30°C), l\'eau atteint 26°C et l\'humidité augmente légèrement. C\'est le dernier mois de la saison sèche avant les pluies estivales. Les conditions restent excellentes avec des prix encore abordables avant la ruée de décembre.',
    highlights: [
      'Dernières semaines saison sèche optimale',
      'Eau à 26°C - température confortable',
      'Prix encore avantageux avant décembre',
      'Moins de touristes avant rush fin d\'année'
    ]
  },
  summary: {
    weather: { label: 'Météo', value: 'Excellent (chaud, humidité début)', status: 'good' },
    swimming: { label: 'Baignade', value: 'Excellente (eau à 26°C)', status: 'good' },
    diving: { label: 'Activités nautiques', value: 'Très bonnes conditions', status: 'good' },
    hiking: { label: 'Randonnée', value: 'Bonnes (attention chaleur)', status: 'good' },
    crowds: { label: 'Affluence', value: 'Modérée', status: 'good' },
    prices: { label: 'Budget', value: 'Avantageux (hausse fin mois)', status: 'good' },
    cyclone: { label: 'Risque cyclonique', value: 'Très faible', status: 'good' }
  },
  weather: {
    tempMax: '27-30°C',
    tempMin: '22-24°C',
    water: '26-27°C',
    rainfall: '70-100mm',
    sunHours: '8-9h/jour',
    regions: [
      { name: 'Côte Ouest (Flic en Flac, Le Morne)', description: 'Excellente, chaleur agréable, averses brèves rares, mer calme' },
      { name: 'Côte Nord (Grand Baie)', description: 'Très bonnes conditions, début légère humidité, eau parfaite' },
      { name: 'Côte Est (Belle Mare)', description: 'Excellente, vent léger agréable, température eau idéale' },
      { name: 'Plateau Central (Curepipe)', description: 'Doux (21-25°C), verdure luxuriante, quelques averses possibles' }
    ]
  },
  opinion: {
    rating: 4.5,
    title: 'Le dernier joyau avant l\'été',
    pros: [
      'Température chaude mais supportable (27-30°C)',
      'Eau à 26-27°C - parfaite pour baignade',
      'Encore dans saison sèche (peu de pluies)',
      'Prix encore très raisonnables',
      'Affluence modérée - calme avant décembre',
      'Mer calme et limpide',
      'Excellente visibilité sous-marine',
      'Nature luxuriante après floraison',
      'Fruits tropicaux commencent (litchis, mangues)'
    ],
    cons: [
      'Humidité commence à augmenter (70%)',
      'Quelques averses possibles surtout fin novembre',
      'Chaleur peut être forte milieu journée',
      'Prix montent progressivement fin mois',
      'Début activité moustiques (soir)',
      'Randonnée moins confortable (chaleur)'
    ],
    advice: 'Novembre est excellent, surtout première quinzaine. C\'est le dernier moment pour profiter de conditions optimales avec prix raisonnables avant la ruée de décembre. Privilégiez début novembre pour éviter les premières pluies.'
  },
  budget: {
    flights: {
      range: '600-1200€ A/R depuis Paris',
      tips: 'Novembre voit les prix augmenter progressivement. Début novembre très avantageux, fin novembre monte fortement (approche vacances). Réservez 3-4 mois à l\'avance impérativement.'
    },
    accommodation: {
      range: '50-650€/nuit selon catégorie',
      tips: 'Prix encore modérés début novembre. Fin novembre : hausse 20-25% (anticipation décembre). Dernière fenêtre pour négocier avant haute saison. Réservez tôt pour fin novembre (très demandé).'
    },
    crowds: 'Novembre est agréablement calme, surtout en première quinzaine. Fin novembre voit arriver les premiers vacanciers anticipant décembre. Sites peu fréquentés, ambiance détendue.'
  },
  activities: [
    {
      title: 'Snorkeling lagons ouest et nord',
      why: 'Eau à 26°C idéale, visibilité excellente, mer calme, tortues et poissons tropicaux abondants.',
      link: '/activites-ile-maurice#snorkeling',
      icon: '🤿'
    },
    {
      title: 'Randonnée matinale Le Pouce',
      why: 'Partez tôt (6h) pour éviter chaleur. Vue panoramique, 3h A/R, tous niveaux.',
      link: '/randonnees-ile-maurice',
      icon: '🌅'
    },
    {
      title: 'Catamaran journée complète',
      why: 'Mer calme, navigation douce, eau parfaite, plages désertes, BBQ à bord.',
      link: '/balade-en-bateau-ile-maurice',
      icon: '⛵'
    },
    {
      title: 'Plongée épaves',
      why: 'Eau claire (30m visibilité), température confortable, mer calme, raies et murènes.',
      link: '/activites-ile-maurice#plongee',
      icon: '🐙'
    },
    {
      title: 'Kitesurf débutants',
      why: 'Vent modéré stable, eau chaude, lagon peu profond, écoles disponibles.',
      link: '/kitesurf-ile-maurice',
      icon: '🪁'
    },
    {
      title: 'Kayak et paddle coucher soleil',
      why: 'Chaleur retombée, lumière dorée, eau calme, mangroves et criques.',
      link: '/kayak-ile-maurice',
      icon: '🛶'
    },
    {
      title: 'Pêche au gros',
      why: 'Transition vers été = poissons actifs. Marlin, thon, dorado. Mer calme.',
      link: '/activites-ile-maurice',
      icon: '🎣'
    },
    {
      title: 'VTT électrique',
      why: 'Évitez efforts avec e-bike, explorez facilement malgré chaleur, découverte intérieur.',
      link: '/activites-ile-maurice',
      icon: '🚵'
    },
    {
      title: 'Visite marchés et ville',
      why: 'Fruits tropicaux arrivent, marchés colorés, allez-y tôt matin (7-9h) avant chaleur.',
      link: '/activites-ile-maurice',
      icon: '🥭'
    },
    {
      title: 'Spa et bien-être',
      why: 'Échappez chaleur après-midi dans spa climatisé. Soins ayurvédiques rafraîchissants.',
      link: '/activites-ile-maurice',
      icon: '💆'
    }
  ],
  accommodation: [
    {
      zone: 'Flic en Flac (Côte Ouest)',
      why: 'Excellente météo, vie locale animée, restaurants, plage superbe, bon rapport qualité-prix',
      priceRange: '50-220€/nuit'
    },
    {
      zone: 'Grand Baie (Nord)',
      why: 'Centre névralgique, animation, shopping, vie nocturne, activités variées',
      priceRange: '60-480€/nuit'
    },
    {
      zone: 'Trou aux Biches (Nord-Ouest)',
      why: 'Plage magnifique, snorkeling exceptionnel, calme relatif, familial',
      priceRange: '70-520€/nuit'
    },
    {
      zone: 'Belle Mare (Côte Est)',
      why: 'Excellente en novembre, plage immense, resorts luxueux, calme, vent léger agréable',
      priceRange: '95-680€/nuit'
    }
  ],
  tips: {
    packing: [
      'Vêtements ultra-légers et respirants',
      'Maillots de bain (3 pour rotation)',
      'Crème solaire waterproof SPF50+',
      'Casquette, lunettes, chapeau',
      'Anti-moustique (actifs en soirée)',
      'Poncho léger (averses brèves possibles)',
      'Vêtements longs légers (protection solaire)',
      'Gourde réutilisable (hydratation)'
    ],
    health: [
      'Protection solaire maximale (UV très forts)',
      'Hydratation intensive (2.5-3L/jour)',
      'Anti-moustique soir (début activité)',
      'Évitez efforts 11h-15h (chaleur max)',
      'Attention coup de chaleur si randonnée',
      'Électrolytes recommandés (transpiration)'
    ],
    events: [
      'Ganga Asnan (date variable) : Cérémonie hindoue rivières sacrées',
      'Arrivée Indentured Labourers (2 novembre) : Commémoration historique',
      'Teeming (mi-novembre) : Procession tamoule, marche sur feu'
    ]
  },
  faq: [
    {
      question: 'Novembre est-il un bon mois ou déjà trop chaud ?',
      answer: 'Novembre est excellent ! Il fait 27-30°C, c\'est chaud mais supportable (pas l\'étouffement de janvier-février). L\'humidité augmente légèrement mais reste gérable. L\'eau à 26°C est parfaite. C\'est le bon compromis entre chaleur et confort. Privilégiez début novembre.'
    },
    {
      question: 'Commence-t-il à pleuvoir beaucoup en novembre ?',
      answer: 'Non, novembre reste dans la saison sèche ! Vous aurez peut-être 2-3 averses brèves (30 min) surtout en fin de mois, mais rien de significatif. C\'est incomparable avec décembre-mars. Votre planning ne sera pas affecté. Le soleil domine largement.'
    },
    {
      question: 'Novembre ou octobre : lequel choisir ?',
      answer: 'Octobre : légèrement plus frais (28°C vs 30°C), plus sec encore, nature en fleurs. Novembre : eau plus chaude (26°C vs 25°C), ambiance début été, fruits tropicaux. Si vous supportez bien la chaleur : novembre. Si vous préférez la fraîcheur : octobre. Les deux sont excellents !'
    },
    {
      question: 'Les prix montent-ils dès novembre ?',
      answer: 'Progressivement. Début novembre reste très abordable (similaire à octobre). À partir du 15 novembre, ça commence à monter. Dernière semaine de novembre : +20-25% (anticipation décembre). Pour optimiser budget, privilégiez première quinzaine.'
    },
    {
      question: 'Quel budget pour novembre ?',
      answer: 'Budget routard : 55-90€/jour. Budget confort : 125-185€/jour. Budget luxe : 330€+/jour. Vol : 600-1200€. Novembre offre encore un bon rapport qualité-prix, surtout début mois. Fin novembre se rapproche des tarifs haute saison.'
    },
    {
      question: 'Peut-on encore faire de la randonnée en novembre ?',
      answer: 'Oui mais avec précautions. Partez TRÈS tôt (6h-7h) avant la chaleur. Hydratez-vous massivement. Privilégiez randonnées courtes ou moyennes. Évitez les longues distances (risque coup de chaleur). Le matin, c\'est encore parfait !'
    }
  ],
  verdict: {
    summary: 'Novembre est excellent, surtout en première quinzaine. C\'est le dernier moment pour profiter de conditions optimales avec prix raisonnables avant la haute saison de fin d\'année.',
    bestFor: [
      'Vous aimez la chaleur sans excès (27-30°C)',
      'Vous voulez profiter d\'une eau chaude (26°C)',
      'Vous cherchez bon rapport qualité-prix avant décembre',
      'Vous appréciez le calme avant rush fin d\'année',
      'Vous privilégiez activités nautiques vs randonnée'
    ],
    avoidIf: [
      'Vous ne supportez pas la chaleur → mai-octobre',
      'Vous êtes très sensible à l\'humidité → juin-septembre',
      'Vous prévoyez beaucoup de randonnées → avril-septembre',
      'Vous voulez garantie zéro pluie → septembre-octobre'
    ]
  }
};

/**
 * Données pour décembre
 */
export const decemberData: MonthData = {
  slug: 'decembre',
  month: 'Décembre',
  title: 'Île Maurice en Décembre',
  metaTitle: 'Île Maurice en décembre : météo, prix et activités',
  metaDescription: 'Décembre à Maurice : début de l\'été austral et haute saison. Chaud et humide, pluies possibles, eau à 27°C. Ambiance festive et prix élevés. Réservation anticipée indispensable.',
  season: 'été austral (début)',
  rating: 3.5,
  images: {
    hero: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/03/ile-maurice-voyage-scaled.jpg',
    weather: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/02/meilleurs-hotels-5-etoiles-ile-maurice-plage.jpeg',
    activities: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2023/08/activtes-ile-aux-cerfs-ile-maurice.jpg'
  },
  hero: {
    intro: 'Décembre marque le retour de l\'été austral à Maurice. Les températures grimpent (28-31°C), l\'humidité atteint 75-80% et les premières pluies estivales arrivent. L\'eau est à 27°C, idéale pour la baignade. C\'est le début de la haute saison touristique avec une ambiance festive mais des prix au maximum.',
    highlights: [
      'Haute saison festive - ambiance de fêtes',
      'Eau chaude à 27°C - parfaite baignade',
      'Atmosphère tropicale estivale',
      'Prix élevés et forte affluence'
    ]
  },
  summary: {
    weather: { label: 'Météo', value: 'Chaud et humide (averses possibles)', status: 'warning' },
    swimming: { label: 'Baignade', value: 'Excellente (eau à 27°C)', status: 'good' },
    diving: { label: 'Activités nautiques', value: 'Bonnes (dépend météo)', status: 'good' },
    hiking: { label: 'Randonnée', value: 'Déconseillé (trop chaud)', status: 'bad' },
    crowds: { label: 'Affluence', value: 'Très élevée', status: 'bad' },
    prices: { label: 'Budget', value: 'Prix maximum', status: 'bad' },
    cyclone: { label: 'Risque cyclonique', value: 'Faible (début saison)', status: 'warning' }
  },
  weather: {
    tempMax: '28-31°C',
    tempMin: '23-25°C',
    water: '27-28°C',
    rainfall: '150-200mm',
    sunHours: '7-8h/jour',
    regions: [
      { name: 'Côte Ouest (Flic en Flac, Le Morne)', description: 'Meilleure option, légèrement plus sec, chaleur humide, averses brèves' },
      { name: 'Côte Nord (Grand Baie)', description: 'Chaud et humide, mer calme, averses après-midi, très touristique' },
      { name: 'Côte Est (Belle Mare)', description: 'Ventée et pluvieuse, mer parfois agitée, moins recommandée' },
      { name: 'Plateau Central (Curepipe)', description: 'Plus frais (23-26°C), pluies fréquentes, verdure luxuriante' }
    ]
  },
  opinion: {
    rating: 3.5,
    title: 'Le rush festif',
    pros: [
      'Ambiance festive unique (Noël tropical, Nouvel An)',
      'Eau à 27-28°C - température maximale',
      'Vie nocturne animée et événements partout',
      'Fruits tropicaux en pleine saison (litchis, mangues)',
      'Atmosphère internationale cosmopolite',
      'Toutes infrastructures ouvertes',
      'Activités nautiques excellentes entre averses',
      'Expérience culturelle riche (mix Noël créole)'
    ],
    cons: [
      'Prix au maximum absolu (+50% vs basse saison)',
      'Affluence record - sites saturés',
      'Chaleur et humidité étouffantes (80%)',
      'Averses fréquentes et imprévisibles',
      'Réservations quasi impossibles sans 6 mois anticipation',
      'Restaurants et activités complets',
      'Randonnée quasi impossible (trop chaud)',
      'Début saison cyclonique (risque faible mais présent)',
      'Moustiques très actifs'
    ],
    advice: 'Décembre n\'est recommandé que si vous voulez absolument l\'ambiance festive de fin d\'année. Réservez impérativement 6 mois à l\'avance minimum. Privilégiez la côte ouest, prenez une assurance annulation et prévoyez un budget conséquent. Soyez flexible sur planning (averses).'
  },
  budget: {
    flights: {
      range: '900-1800€ A/R depuis Paris',
      tips: 'Décembre affiche les prix les plus élevés de l\'année, surtout 20-31 décembre. Certains vols dépassent 2000€. Réservez 8-10 mois à l\'avance obligatoirement. Évitez absolument dernière minute (tarifs prohibitifs).'
    },
    accommodation: {
      range: '100-1200€/nuit selon catégorie',
      tips: 'Prix stratosphériques en décembre, surtout 24-31 décembre (+60-80% vs normal). Minimums de séjour imposés (7-10 nuits). Réservation 8-12 mois à l\'avance indispensable. Beaucoup d\'établissements complets 6 mois avant.'
    },
    crowds: 'Décembre est l\'un des 2 mois les plus fréquentés avec juillet-août. Absolument toutes les attractions sont bondées. Plages saturées 10h-16h. Restaurants nécessitent réservation plusieurs jours avant. Levez-vous à l\'aube pour un peu de tranquillité.'
  },
  activities: [
    {
      title: 'Baignade et farniente plage',
      why: 'Eau à 27°C parfaite, température chaude, activité principale. Privilégiez tôt matin ou fin après-midi.',
      link: '/plages-ile-maurice',
      icon: '🏖️'
    },
    {
      title: 'Snorkeling lagons protégés',
      why: 'Eau chaude et claire (entre averses), poissons tropicaux, tortues. Visibilité variable selon météo.',
      link: '/activites-ile-maurice#snorkeling',
      icon: '🤿'
    },
    {
      title: 'Catamaran privatisé',
      why: 'Évitez bateaux bondés en privatisant. Navigation entre averses, BBQ, snorkeling. Coûteux mais unique.',
      link: '/balade-en-bateau-ile-maurice',
      icon: '⛵'
    },
    {
      title: 'Plongée sites protégés',
      why: 'Eau chaude (27°C), visibilité correcte, mer calme le matin. Réservez très tôt (complet rapidement).',
      link: '/activites-ile-maurice#plongee',
      icon: '🐠'
    },
    {
      title: 'Spa et massage',
      why: 'Échappez chaleur et averses dans spa climatisé. Soins rafraîchissants, relaxation. Réservez en ligne.',
      link: '/activites-ile-maurice',
      icon: '💆'
    },
    {
      title: 'Restaurants gastronomiques',
      why: 'Expérience culinaire haut de gamme, cuisines du monde. Réservez semaines à l\'avance pour 24 et 31 déc.',
      link: '/gastronomie-ile-maurice',
      icon: '🍽️'
    },
    {
      title: 'Shopping et marchés',
      why: 'Grand Baie, Port-Louis, Quatre Bornes. Allez-y tôt matin (avant chaleur et foule). Souvenirs, artisanat.',
      link: '/activites-ile-maurice',
      icon: '🛍️'
    },
    {
      title: 'Soirées festives et clubbing',
      why: 'Ambiance Noël/Nouvel An tropicale. Beach clubs, bars, discothèques. Grand Baie = épicentre.',
      link: '/vie-nocturne-ile-maurice',
      icon: '🎉'
    },
    {
      title: 'Golf matinal',
      why: 'Jouez tôt (6h-9h) avant chaleur écrasante. Parcours excellent état. Réservez tee-times à l\'avance.',
      link: '/activites-ile-maurice',
      icon: '⛳'
    },
    {
      title: 'Cours cuisine créole',
      why: 'Activité indoor climatisée. Apprenez caris, rougaille, gâteaux. Emportez recettes chez vous.',
      link: '/activites-ile-maurice',
      icon: '👨‍🍳'
    }
  ],
  accommodation: [
    {
      zone: 'Flic en Flac (Côte Ouest)',
      why: 'Meilleure météo décembre, vie animée, restaurants nombreux, rapport qualité-prix relatif',
      priceRange: '100-350€/nuit'
    },
    {
      zone: 'Grand Baie (Nord)',
      why: 'Épicentre festif décembre, vie nocturne, shopping, restaurants, très animé mais bondé',
      priceRange: '120-650€/nuit'
    },
    {
      zone: 'Le Morne (Sud-Ouest)',
      why: 'Resorts luxueux all-inclusive, isolé des foules, paysages sublimes, prix stratosphériques',
      priceRange: '300-1500€/nuit'
    },
    {
      zone: 'Balaclava (Nord-Ouest)',
      why: 'Baie protégée, resorts haut de gamme, snorkeling excellent, calme relatif',
      priceRange: '150-900€/nuit'
    }
  ],
  tips: {
    packing: [
      'Vêtements ultra-légers et respirants',
      'Maillots de bain (3-4 pour rotation rapide)',
      'Protection pluie imperméable légère',
      'Crème solaire waterproof SPF50+',
      'Anti-moustique puissant (DEET 50%)',
      'Sandales et chaussures aérées',
      'Vêtements élégants (restaurants gastronomiques)',
      'Sacs étanches pour électronique',
      'Chapeau et lunettes soleil'
    ],
    health: [
      'Hydratation massive (3-4L/jour minimum)',
      'Protection solaire maximale et réapplication fréquente',
      'Anti-moustique matin et soir (très actifs)',
      'Vigilance dengue et chikungunya',
      'Évitez efforts 10h-16h (chaleur dangereuse)',
      'Électrolytes essentiels (transpiration importante)',
      'Assurance santé recommandée (système saturé en décembre)'
    ],
    events: [
      'Noël tropical (25 décembre) : Messes, repas créoles, plages décorées, ambiance unique',
      'Boxing Day (26 décembre) : Shopping, soldes, festivités continues',
      'Réveillon Nouvel An (31 décembre) : Feux d\'artifice partout, beach parties, resorts galas (200-500€/pers)'
    ]
  },
  faq: [
    {
      question: 'Décembre vaut-il vraiment le coût financier ?',
      answer: 'Ça dépend de vos priorités. Si vous voulez absolument l\'ambiance festive de Noël tropical et Nouvel An sur plage : oui (expérience unique). Si vous cherchez bon rapport qualité-prix et conditions optimales : non, privilégiez mai-juin ou septembre-octobre (mêmes activités, -40% prix, -60% affluence).'
    },
    {
      question: 'Pleut-il beaucoup en décembre ?',
      answer: 'Décembre voit le retour des pluies mais c\'est variable. Attendez-vous à 1-2 averses par jour, souvent après-midi (30-60 min). Certaines journées sont parfaites, d\'autres pluvieuses. C\'est moins intense que janvier-février mais il faut être flexible. Côte ouest est la moins touchée.'
    },
    {
      question: 'Peut-on encore réserver pour décembre en cours d\'année ?',
      answer: 'Très difficile ! Les meilleurs établissements pour les vacances de Noël se réservent 8-12 mois à l\'avance. Quelques annulations surviennent mais c\'est rare. Si vous n\'avez pas réservé début année, considérez janvier (juste après 5 janvier : -30% et disponibilités).'
    },
    {
      question: 'Quelle période éviter absolument en décembre ?',
      answer: 'Le 24-31 décembre est le pic absolu : prix maximum (+80%), complet partout, foule record. Si budget limité, privilégiez 1-20 décembre (encore cher mais gérable). Ou décalez sur 5-20 janvier : conditions similaires, -40% prix.'
    },
    {
      question: 'Quel budget pour décembre ?',
      answer: 'Budget routard : 80-120€/jour. Budget confort : 180-280€/jour. Budget luxe : 500€+/jour. Vol : 900-1800€. Réveillon : ajoutez 200-500€/pers (galas obligatoires dans resorts). Décembre = mois le plus cher de l\'année. Budget total : +60-80% vs basse saison.'
    },
    {
      question: 'Décembre ou janvier : lequel choisir ?',
      answer: 'Décembre : ambiance festive unique, légèrement moins pluvieux. Janvier : conditions similaires mais 15-20% moins cher après le 5, légèrement moins bondé. Si vous voulez Noël/Nouvel An à Maurice : décembre obligé. Sinon, janvier (après le 5) est plus raisonnable.'
    }
  ],
  verdict: {
    summary: 'Décembre offre une expérience festive unique mais souffre de prix élevés, forte affluence et météo capricieuse. Recommandé uniquement pour ambiance de fêtes ou si dates imposées.',
    bestFor: [
      'Vous voulez absolument Noël tropical et Nouvel An plage',
      'Vous avez réservé 8-12 mois à l\'avance',
      'Votre budget permet haute saison premium',
      'Vous aimez ambiance festive et cosmopolite',
      'Vous êtes flexible sur planning (gérer averses)'
    ],
    avoidIf: [
      'Votre budget est limité → mai-juin ou septembre-octobre',
      'Vous détestez les foules → évitez absolument décembre',
      'Vous cherchez météo stable garantie → avril-octobre',
      'Vous prévoyez des randonnées → juin-septembre',
      'Vous n\'avez pas réservé 6 mois avant → tout est complet',
      'Vous ne supportez pas chaleur humide → mai-octobre'
    ]
  }
};

// Export all months
export const allMonthsData = {
  janvier: januaryData,
  fevrier: februaryData,
  mars: marchData,
  avril: aprilData,
  mai: mayData,
  juin: juneData,
  juillet: julyData,
  aout: augustData,
  septembre: septemberData,
  octobre: octoberData,
  novembre: novemberData,
  decembre: decemberData
};

// Function to get month data by slug
export function getMonthDataBySlug(slug: string): MonthData | undefined {
  return allMonthsData[slug as keyof typeof allMonthsData];
}
