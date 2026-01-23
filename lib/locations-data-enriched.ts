/**
 * Données enrichies pour les pages "Que faire à [lieu]"
 * Contenu complet pour planifier tout un séjour
 */

export interface AccommodationZone {
  name: string;
  description: string;
  priceRange: string;
  bestFor: string;
  pros: string[];
  cons: string[];
}

export interface Restaurant {
  name: string;
  type: string;
  priceRange: string;
  specialty: string;
  location?: string;
}

export interface Beach {
  name: string;
  description: string;
  bestFor: string[];
  facilities: string[];
  access: string;
}

export interface Itinerary {
  duration: string;
  title: string;
  days: {
    day: number;
    morning: string;
    afternoon: string;
    evening: string;
  }[];
}

export interface LocationDataEnriched {
  slug: string;
  name: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;

  // Introduction
  intro: string;
  highlights: string[];
  description: string;

  // Quand visiter
  bestMonths: string[];
  weatherByMonth?: Record<string, string>;

  // Géographie
  coordinates?: {
    lat: number;
    lng: number;
  };
  nearbyLocations: string[];
  distanceFromAirport?: string;

  // Hébergement
  accommodation: {
    overview: string;
    zones: AccommodationZone[];
    bookingTips: string[];
  };

  // Restauration
  dining: {
    overview: string;
    restaurants: Restaurant[];
    localSpecialties: string[];
    budgetMeals: string;
    fineDining: string;
  };

  // Plages
  beaches?: {
    overview: string;
    list: Beach[];
  };

  // Transport
  transport: {
    howToGetThere: string;
    gettingAround: string;
    carRental: string;
    publicTransport: string;
    taxi: string;
    parking?: string;
  };

  // Vie nocturne
  nightlife?: {
    overview: string;
    venues: {
      name: string;
      type: string;
      description: string;
    }[];
  };

  // Shopping
  shopping?: {
    overview: string;
    spots: {
      name: string;
      type: string;
      bestFor: string;
    }[];
  };

  // Itinéraires
  itineraries: Itinerary[];

  // Budget
  budget: {
    daily: {
      budget: string;
      midRange: string;
      luxury: string;
    };
    breakdown: {
      accommodation: string;
      food: string;
      activities: string;
      transport: string;
    };
  };

  // Infos pratiques
  practical: {
    atms: string;
    supermarkets: string;
    pharmacy: string;
    hospital: string;
    wifi: string;
    electricity: string;
  };

  // Sécurité
  safety: {
    overall: string;
    tips: string[];
    emergency: string;
  };

  // Conseils
  tips: string[];

  // Culture locale
  culture?: {
    overview: string;
    events: string[];
    etiquette: string[];
  };
}

// Helper functions
export function getLocationBySlug(slug: string): LocationDataEnriched | undefined {
  return enrichedLocationsData[slug];
}

export function getAllLocationSlugs(): string[] {
  return Object.keys(enrichedLocationsData);
}

export function getNearbyLocations(slug: string): LocationDataEnriched[] {
  const location = getLocationBySlug(slug);
  if (!location) return [];

  return location.nearbyLocations
    .map(nearbySlug => getLocationBySlug(nearbySlug))
    .filter((loc): loc is LocationDataEnriched => loc !== undefined);
}

// Données enrichies pour Grand Baie (exemple complet)
export const enrichedLocationsData: Record<string, LocationDataEnriched> = {
  'grand-baie': {
    slug: 'grand-baie',
    name: 'Grand Baie',
    title: 'Que faire à Grand Baie',
    metaTitle: 'Grand Baie Maurice : activités, hôtels, restaurants, vie nocturne',
    metaDescription: 'Découvrez Grand Baie : meilleures activités, hébergements, restaurants, plages, vie nocturne et budget pour votre séjour dans le nord de Maurice.',
    heroImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/03/ile-maurice-voyage-scaled.jpg',

    intro: 'Grand Baie est LA station balnéaire incontournable de l\'Île Maurice. Centre névralgique du tourisme mauricien, cette baie animée du nord offre le meilleur de l\'île : activités nautiques exceptionnelles, shopping cosmopolite, restaurants internationaux et vie nocturne vibrante.',

    highlights: [
      'Centre touristique #1 de Maurice avec toutes les infrastructures',
      'Hub des sports nautiques : plongée, catamaran, kitesurf, jet-ski',
      'Vie nocturne la plus animée de l\'île (bars, clubs, casinos)',
      'Point de départ pour excursions vers îles du nord (Île Plate, Coin de Mire)',
      'Shopping cosmopolite : boutiques, centres commerciaux, marchés',
      'Large choix d\'hébergements (guesthouses à resorts 5*)',
      '50+ restaurants de toutes cuisines (créole, indienne, chinoise, française, italienne)'
    ],

    description: 'Grand Baie (Grand-Baie ou Grand Bay) s\'étend sur la côte nord de Maurice, à 20km de l\'aéroport. Autrefois village de pêcheurs, c\'est aujourd\'hui le cœur battant du tourisme mauricien. La baie en forme de croissant offre un lagon turquoise protégé, idéal pour toutes les activités nautiques. La rue principale (Royal Road) concentre boutiques, restaurants, agences de sports nautiques et centres commerciaux. L\'ambiance cosmopolite attire autant les touristes que les expatriés et Mauriciens aisés. Grand Baie ne dort jamais : les bars et clubs s\'animent dès le coucher du soleil, particulièrement le week-end. C\'est aussi le point de départ privilégié pour les excursions en catamaran vers les îlots du nord préservés.',

    bestMonths: ['mai', 'juin', 'septembre', 'octobre', 'novembre'],

    weatherByMonth: {
      'mai': 'Parfait : 26°C, sec, eau 25°C, vent modéré',
      'juin': 'Excellent : 24°C, sec, eau 24°C, bon pour sports nautiques',
      'septembre': 'Idéal : 25°C, très sec, eau 24°C, conditions optimales',
      'octobre': 'Parfait : 26°C, sec, eau 25°C, meilleur mois',
      'novembre': 'Très bon : 28°C, début été, eau 26°C, encore peu de pluie'
    },

    coordinates: { lat: -20.0167, lng: 57.5833 },
    nearbyLocations: ['trou-aux-biches', 'cap-malheureux'],
    distanceFromAirport: '20 km (25-30 min en voiture)',

    accommodation: {
      overview: 'Grand Baie offre le plus large choix d\'hébergements de Maurice, du guesthouse économique au resort 5 étoiles all-inclusive. La plupart des hébergements se concentrent le long de la baie et dans l\'arrière-pays proche. Réservez 2-3 mois en avance en haute saison (juillet-août, décembre).',

      zones: [
        {
          name: 'Centre de Grand Baie (Royal Road)',
          description: 'Cœur animé avec accès immédiat aux restaurants, bars, boutiques. Plage publique à 5 min à pied. Peut être bruyant le soir, surtout le week-end.',
          priceRange: '40-150€/nuit',
          bestFor: 'Jeunes, fêtards, ceux qui veulent tout à pied',
          pros: [
            'Tout accessible à pied (restos, bars, boutiques)',
            'Nombreux guesthouses et apparts abordables',
            'Vie nocturne à la porte',
            'Facile de trouver taxis et transports'
          ],
          cons: [
            'Bruit le soir (musique des bars jusqu\'à 2-3h)',
            'Circulation dense en journée',
            'Pas de plage privée',
            'Moins authentique, très touristique'
          ]
        },
        {
          name: 'Pointe aux Canonniers',
          description: 'Péninsule au nord de Grand Baie avec resorts haut de gamme face au lagon. Calme, privé, avec plages magnifiques. À 5-10 min en voiture du centre.',
          priceRange: '150-500€/nuit',
          bestFor: 'Couples, familles, ceux cherchant calme + luxe',
          pros: [
            'Plages privées sublimes',
            'Resorts 4-5* avec piscines, spas, restaurants',
            'Calme absolu, cadre paradisiaque',
            'Vue sur Coin de Mire'
          ],
          cons: [
            'Prix élevés',
            'Voiture nécessaire pour sortir',
            'Peu de restaurants hors hôtels',
            'Isolé si vous aimez l\'animation'
          ]
        },
        {
          name: 'Mont Choisy / Trou aux Biches',
          description: 'À 2-5 km au sud de Grand Baie. Plages superbes plus calmes qu\'en centre. Accès facile à Grand Baie en 5-10 min de voiture. Bon compromis calme/animation.',
          priceRange: '60-300€/nuit',
          bestFor: 'Familles, couples, ceux cherchant équilibre',
          pros: [
            'Plages plus calmes et plus belles',
            'Moins touristique, plus authentique',
            'Grand Baie proche pour sorties',
            'Bon rapport qualité-prix'
          ],
          cons: [
            'Voiture recommandée',
            'Moins de restaurants à pied',
            'Supermarchés moins accessibles'
          ]
        },
        {
          name: 'Pereybère',
          description: 'Village balnéaire collé à Grand Baie (2km), ambiance plus locale et familiale. Belle plage publique protégée. Nombreux guesthouses économiques.',
          priceRange: '35-120€/nuit',
          bestFor: 'Petits budgets, familles, ambiance locale',
          pros: [
            'Moins cher que Grand Baie centre',
            'Plage publique excellente',
            'Ambiance familiale et locale',
            'Supermarchés et restaurants à prix doux'
          ],
          cons: [
            'Très fréquenté le week-end',
            'Hébergements plus basiques',
            'Vie nocturne limitée',
            'À 2km du centre GB (marche 20 min ou taxi)'
          ]
        }
      ],

      bookingTips: [
        'Réservez 2-3 mois en avance pour juillet-août et décembre (haute saison)',
        'Négociez les prix hors saison (avril-mai) : réductions de 20-30% possibles',
        'Les guesthouses offrent meilleur rapport qualité-prix que les hôtels',
        'Vérifiez si petitdéjeuner inclus (économie de 10-15€/jour)',
        'Airbnb très développé à Grand Baie : apparts bien équipés dès 40€/nuit',
        'Les resorts all-inclusive sont rentables si vous restez sur place',
        'Demandez chambre côté jardin si sensible au bruit (côté rue = bruyant)'
      ]
    },

    dining: {
      overview: 'Grand Baie concentre la meilleure scène gastronomique de Maurice avec 50+ restaurants. Cuisine créole, indienne, chinoise, française, italienne, japonaise... tous les budgets et styles. La Royal Road et le Sunset Boulevard regroupent l\'essentiel. Réservez impérativement pour les restaurants populaires en haute saison.',

      restaurants: [
        {
          name: 'La Rougaille Créole',
          type: 'Créole',
          priceRange: '15-30€',
          specialty: 'Rougaille, curry, dholl puri, briani. Cuisine créole authentique et généreuse.'
        },
        {
          name: 'Lambic Restaurant',
          type: 'Belge-International',
          priceRange: '25-45€',
          specialty: 'Fruits de mer, moules-frites, bières belges. Institution de Grand Baie depuis 1990.'
        },
        {
          name: 'Happy Rajah',
          type: 'Indien du Nord',
          priceRange: '12-25€',
          specialty: 'Tandoori, naan, curry. Meilleur indien de Grand Baie selon les locaux.'
        },
        {
          name: 'Sunset Café',
          type: 'International-Fruits de mer',
          priceRange: '18-35€',
          specialty: 'Poissons frais, cocktails, vue lagon. Idéal pour coucher de soleil.'
        },
        {
          name: 'La Terrasse',
          type: 'Français-Gastronomique',
          priceRange: '35-60€',
          specialty: 'Cuisine française raffinée, vins. Menu dégustation 5 plats.'
        },
        {
          name: 'Chez Pepe',
          type: 'Italien-Pizza',
          priceRange: '12-28€',
          specialty: 'Pizzas au feu de bois, pâtes maison. Ambiance familiale.'
        },
        {
          name: 'Ocean Basket',
          type: 'Fruits de mer',
          priceRange: '15-30€',
          specialty: 'Poissons, calamars, crevettes. Portions généreuses, bon rapport qualité-prix.'
        },
        {
          name: 'Banana Beach Club',
          type: 'Beach club-International',
          priceRange: '20-45€',
          specialty: 'Pieds dans le sable, burgers gastronomiques, cocktails, DJ le week-end.'
        }
      ],

      localSpecialties: [
        'Dholl puri (galette lentilles) : snack mauricien #1, 50-80 Rs (1-2€)',
        'Rougaille (tomates, oignons, piment) avec riz : plat créole typique',
        'Mine frite (nouilles sautées) : influence chinoise, copieux',
        'Gâteau piment (beignet lentilles épicé) : apéritif local',
        'Briani biryani (riz épicé viande/poulet) : influence indienne',
        'Poisson vindaye (poisson mariné moutarde) : spécialité mauricienne',
        'Alouda (boisson lait, agar-agar, sirop) : dessert liquide local'
      ],

      budgetMeals: 'Snacks et gargotes locales : 3-8€/repas. Street food Royal Road (samosas, dholl puri, mine frite). Supermarché Spar/Super U : courses pour cuisiner. Food courts La Croisette : 8-15€/repas.',

      fineDining: 'The Château Mon Désir (Château de Labourdonnais), La Table du Château (cuisine française gastronomique), Attitude Hotels restaurants (fusion créole-internationale), resorts 5* (gastronomie internationale).'
    },

    beaches: {
      overview: 'Grand Baie n\'est pas réputée pour ses plages (plutôt moyennes) mais pour ses activités nautiques. La plage publique centrale est petite et bondée le week-end. Les meilleures plages sont à 5-10 min : Trou aux Biches, Mont Choisy, Pereybère.',

      list: [
        {
          name: 'Plage publique Grand Baie',
          description: 'Petite plage de sable au centre de la baie. Très fréquentée, eau parfois trouble (bateaux), algues possibles. Pratique pour accès eau mais pas la plus belle.',
          bestFor: ['Accès facile', 'Sports nautiques', 'Départ excursions catamaran'],
          facilities: ['Restaurants proches', 'Toilettes publiques', 'Parking', 'Loueurs activités nautiques'],
          access: 'Centre de Grand Baie, à pied depuis partout'
        },
        {
          name: 'Trou aux Biches (5 km)',
          description: '⭐ L\'une des plus belles plages de Maurice. 2km de sable blanc fin, eau turquoise, lagon peu profond. Parfait familles. Snorkeling excellent.',
          bestFor: ['Baignade', 'Snorkeling avec tortues', 'Familles avec enfants', 'Plage de rêve'],
          facilities: ['Restaurants', 'Bars', 'Toilettes', 'Parking gratuit', 'Location kayak/paddle'],
          access: '5 min voiture ou 15 min bus depuis Grand Baie'
        },
        {
          name: 'Mont Choisy (3 km)',
          description: 'Longue plage de 2km bordée de filaos. Moins fréquentée que Trou aux Biches. Excellent pour marche, jogging. Eau claire, fond sablonneux.',
          bestFor: ['Baignade', 'Marche', 'Calme', 'Pique-nique'],
          facilities: ['Quelques restos', 'Parking', 'Ombre sous filaos'],
          access: '3 km au sud, voiture ou vélo recommandé'
        },
        {
          name: 'Pereybère (2 km)',
          description: 'Petite plage publique en croissant, très protégée. Populaire familles mauriciennes le week-end. Snorkeling correct. Ambiance locale authentique.',
          bestFor: ['Familles', 'Snorkeling', 'Ambiance locale', 'Calme en semaine'],
          facilities: ['Snacks', 'Toilettes', 'Douches', 'Parking', 'Location masques/palmes'],
          access: '2 km, marche 20 min ou 5 min voiture'
        }
      ]
    },

    transport: {
      howToGetThere: 'Depuis l\'aéroport SSR : Taxi (25-30 min, 1500-2000 Rs = 35-45€, prix fixe négociable). Voiture de location (A1 Motorway puis route côtière M2). Bus public (peu pratique avec bagages). Transfert privé pré-réservé (recommandé, 30-40€).',

      gettingAround: 'Grand Baie centre se fait à pied. Pour plages voisines et excursions : taxi, voiture, vélo ou scooter.',

      carRental: 'Recommandé pour explorer Maurice. 25-50€/jour selon saison et modèle. Agences : Hertz, Europcar, ABC Car Hire (locale, moins chère). Permis français valide. Conduite à gauche. Essence : 60-70 Rs/L (1,40-1,60€).',

      publicTransport: 'Bus publics fréquents vers Port-Louis (1h, 40 Rs), Trou aux Biches (15 min, 25 Rs), Pamplemousses (45 min). Peu pratiques le soir. Horaires irréguliers.',

      taxi: 'Nombreux taxis. Prix négociables (pas de compteur). Grand Baie-Pereybère : 150-200 Rs. Grand Baie-Port-Louis : 800-1000 Rs. Grand Baie-Le Morne : 2000-2500 Rs. Appelez taxi plutôt que rue (meilleurs prix).',

      parking: 'Payant en centre (20 Rs/h, gardiens). Gratuit aux plages publiques (Trou aux Biches, Mont Choisy). Difficile en haute saison. Parkings privés : La Croisette, Sunset Boulevard.'
    },

    nightlife: {
      overview: 'Grand Baie = capitale de la vie nocturne mauricienne. Bars, clubs, casinos ouverts jusqu\'à 2-4h. Ambiance maximale jeudi-samedi. Dress code décontracté-chic pour clubs. Boissons chères en clubs (bière 150-250 Rs, cocktails 300-500 Rs).',

      venues: [
        {
          name: 'Banana Beach Club',
          type: 'Beach club',
          description: 'Pieds dans le sable, DJ sets, cocktails, pool parties. Ambiance Ibiza. Ouvert journée + soirée. Incontournable le dimanche (pool party).'
        },
        {
          name: 'Les Enfants Terribles',
          type: 'Bar-Restaurant-Club',
          description: 'Institution GB. Restaurant + bar + piste danse. Musique house/électro. Jeudi-samedi bondé. Terrasse vue lagon.'
        },
        {
          name: 'Buddha Bar',
          type: 'Lounge bar',
          description: 'Ambiance lounge chic. Cocktails signature, shisha, DJ. Décor asiatique. Clientèle aisée, jeunes expatriés.'
        },
        {
          name: 'Zanzibar',
          type: 'Club',
          description: 'Night-club jusqu\'à 4h. House, RnB, hits internationaux. Entrée souvent gratuite pour filles, 200-300 Rs hommes.'
        },
        {
          name: 'Le Capitaine',
          type: 'Bar sportif',
          description: 'Bar anglais. Retransmissions sportives (foot, rugby). Bières pression. Ambiance pub. Fish & chips, burgers.'
        },
        {
          name: 'Casino de Maurice',
          type: 'Casino',
          description: 'Machines à sous, black jack, roulette, poker. Ouvert 10h-4h. Gratuit, dress code correct. Restaurant sur place.'
        }
      ]
    },

    shopping: {
      overview: 'Grand Baie = paradis du shopping mauricien. Boutiques de marques, centres commerciaux, marchés, souvenirs. Du luxe au local. Prix souvent négociables (sauf grandes enseignes).',

      spots: [
        {
          name: 'La Croisette Mall',
          type: 'Centre commercial',
          bestFor: 'Marques internationales, restaurants, supermarché, banques, agences. Climatisé. Parking gratuit.'
        },
        {
          name: 'Sunset Boulevard',
          type: 'Centre commercial',
          bestFor: 'Boutiques mode, souvenirs, restaurants vue lagon, bars. Plus petit que La Croisette. Ambiance agréable.'
        },
        {
          name: 'Super U / Spar',
          type: 'Supermarché',
          bestFor: 'Courses, produits locaux, alcool, snacks. Prix corrects. Idéal si appart/villa.'
        },
        {
          name: 'Marché de Grand Baie (mercredi)',
          type: 'Marché local',
          bestFor: 'Fruits, légumes, épices, souvenirs artisanaux. Négociez ! Authentique, coloré.'
        },
        {
          name: 'Boutiques Royal Road',
          type: 'Boutiques de rue',
          bestFor: 'Textiles, souvenirs, maillots de bain, paréos. Négociez 20-30%. Beaucoup de choix.'
        },
        {
          name: 'Grand Baie Bazaar',
          type: 'Marché couvert',
          bestFor: 'Artisanat local, maquettes bateaux, épices, textiles. Prix négociables. Authenticité variable.'
        }
      ]
    },

    itineraries: [
      {
        duration: '1 jour',
        title: 'L\'essentiel de Grand Baie',
        days: [
          {
            day: 1,
            morning: '9h : Petit-déj à La Croissanterie. 10h : Balade Royal Road, shopping souvenirs. 11h30 : Plage publique Grand Baie, location paddle ou kayak (1h).',
            afternoon: '13h : Déjeuner Chez Pepe (pizza) ou Happy Rajah (indien). 15h : Excursion catamaran 3h (réservé avance) vers Île Plate snorkeling. 18h : Retour, douche hôtel.',
            evening: '19h30 : Coucher soleil Banana Beach Club avec cocktail. 21h : Dîner Lambic ou Sunset Café. 23h : Verre Buddha Bar ou soirée club Les Enfants Terribles.'
          }
        ]
      },
      {
        duration: '3 jours',
        title: 'Week-end intensif Grand Baie',
        days: [
          {
            day: 1,
            morning: '9h : Arrivée, installation hôtel. 11h : Découverte centre Grand Baie à pied, repérage restos/bars. 12h : Déjeuner street food local (dholl puri).',
            afternoon: '14h : Plage Trou aux Biches (5 min voiture). Baignade, snorkeling avec tortues. 17h : Visite Sunset Boulevard, shopping.',
            evening: '19h : Coucher soleil Sunset Café. 21h : Dîner créole La Rougaille. 23h : Soirée Banana Beach Club ou Buddha Bar.'
          },
          {
            day: 2,
            morning: '7h : Excursion catamaran journée complète (9h-16h) vers îles du nord (Île Plate, Coin de Mire, Île Ronde). Snorkeling, BBQ inclus.',
            afternoon: 'Suite excursion. Baignade, snorkeling, exploration. BBQ sur catamaran. Retour 16h.',
            evening: '17h30 : Repos hôtel. 20h : Dîner italien Chez Pepe. 22h : Verre lounge bar ou casino si envie.'
          },
          {
            day: 3,
            morning: '9h : Plongée sous-marine baptême/2 plongées (3h). Ou kitesurf initiation si vent. 12h30 : Déjeuner Ocean Basket (fruits de mer).',
            afternoon: '14h : Shopping La Croisette, achats souvenirs. 16h : Plage Mont Choisy, dernière baignade, relaxation.',
            evening: '18h30 : Dîner gastronomique La Terrasse. 21h : Dernière soirée club Zanzibar ou bar tranquille.'
          }
        ]
      },
      {
        duration: '1 semaine',
        title: 'Séjour complet basé à Grand Baie',
        days: [
          {
            day: 1,
            morning: 'Arrivée, installation. Tour à pied Grand Baie.',
            afternoon: 'Plage Trou aux Biches, snorkeling.',
            evening: 'Dîner local, coucher tôt (décalage horaire).'
          },
          {
            day: 2,
            morning: 'Excursion catamaran îles du nord (journée).',
            afternoon: 'Suite excursion, BBQ, snorkeling.',
            evening: 'Repos, dîner hôtel/guesthouse.'
          },
          {
            day: 3,
            morning: 'Plongée sous-marine (2 plongées).',
            afternoon: 'Repos, piscine ou plage Pereybère.',
            evening: 'Dîner indien Happy Rajah, soirée bar.'
          },
          {
            day: 4,
            morning: 'Excursion journée sud : Chamarel (terres 7 couleurs), cascade, rhum... Depuis GB 1h15 voiture.',
            afternoon: 'Suite visite sud : Gris Gris, Le Morne.',
            evening: 'Retour GB, dîner fruits de mer Ocean Basket.'
          },
          {
            day: 5,
            morning: 'Matinée libre : plage, shopping, spa.',
            afternoon: 'Visite Jardin Pamplemousses (30 min GB). Puis Port-Louis marché central, Caudan (1h GB).',
            evening: 'Retour GB, dîner La Terrasse (gastro), soirée Buddha Bar.'
          },
          {
            day: 6,
            morning: 'Kitesurf ou paddle ou kayak mer. Ou farniente plage.',
            afternoon: 'Derniers achats souvenirs La Croisette.',
            evening: 'Dîner d\'adieux Lambic, dernière soirée Banana Beach Club.'
          },
          {
            day: 7,
            morning: 'Grasse matinée, dernière baignade Mont Choisy.',
            afternoon: 'Checkout, route aéroport (30 min). Vol retour.',
            evening: '-'
          }
        ]
      }
    ],

    budget: {
      daily: {
        budget: '40-70€/jour',
        midRange: '120-200€/jour',
        luxury: '350€+/jour'
      },
      breakdown: {
        accommodation: 'Budget 40-60€ (guesthouse) / Mid 80-150€ (3-4*) / Luxe 250-500€+ (5* all-inclusive)',
        food: 'Budget 15-25€ (street food + gargotes) / Mid 40-60€ (restos corrects) / Luxe 80-120€+ (gastro)',
        activities: 'Excursion catamaran 50-70€ / Plongée 2 plongées 70-90€ / Sports nautiques 30-60€',
        transport: 'Location voiture 30-45€/jour essence incluse. Taxis 5-20€/trajet selon distance.'
      }
    },

    practical: {
      atms: 'Nombreux DAB : MCB, Mauritius Commercial Bank (centre GB, La Croisette, Sunset). Retraits max 10 000-15 000 Rs. Frais 2-4%.',
      supermarkets: 'Super U (centre GB, bien achalandé), Spar (plusieurs), Winners (La Croisette). Ouverts 9h-20h (dimanche 9h-13h).',
      pharmacy: 'Pharmacies : Clinique Darné, Royal Road. Ouverte 9h-19h. Garde dimanche/nuit à Port-Louis (1h).',
      hospital: 'Clinique Darné Grand Baie (privée, qualité, français parlé). Apollo Bramwell (Moka, 30 min). Urgences : SAMU 114.',
      wifi: 'WiFi gratuit : cafés, restos, hôtels. Carte SIM locale : Emtel/Orange boutiques (500 Rs = 10€ pour 10Go/30j).',
      electricity: '220V, prises anglaises 3 broches. Adaptateur indispensable (achat Super U 100-200 Rs).'
    },

    safety: {
      overall: 'Grand Baie est globalement sûr. Petite délinquance (vols sacs, téléphones) existe. Vigilance renforcée la nuit et en soirée. Évitez rues sombres seul(e) tard. Pas d\'agressions violentes type européennes, mais pickpockets opportunistes.',

      tips: [
        'Ne laissez JAMAIS objets valeur voiture visible (vols par bris glace)',
        'Surveillez sacs/téléphones en terrasses bars/restos bondés',
        'Évitez sortir passeport/grosses sommes cash (coffre hôtel)',
        'Négociez prix activités nautiques AVANT (arnaques possibles)',
        'Refusez vendeurs insistants rues (fake souvenirs, drogues)',
        'Baignade : attention bateaux zone sports nautiques (restez près bord)',
        'Alcool : ne laissez pas verre sans surveillance (GHB très rare mais existe)',
        'Taxis : privilégiez compagnies connues ou appel taxi (pas rue)',
        'Photos : demandez permission avant photographier locaux/enfants',
        'Drogues : TRÈS illégales, peines prison lourdes, évitez absolument'
      ],

      emergency: 'Police : 112 ou 999. SAMU : 114. Pompiers : 115. Police tourisme Grand Baie : +230 263 5894.'
    },

    tips: [
      '🎯 Grand Baie = hub parfait pour rayonner sur toute l\'île en voiture',
      '⏰ Évitez week-ends si vous aimez le calme (Mauriciens envahissent)',
      '💰 Négociez TOUJOURS excursions/activités (prix baissent 10-20%)',
      '🍽️ Réservez restos populaires 24-48h avance haute saison',
      '🏖️ Pour belles plages : allez Trou aux Biches/Mont Choisy (pas GB centre)',
      '🌊 Excursion catamaran = must-do #1, réservez en ligne (moins cher)',
      '🎉 Vie nocturne maxi jeudi-samedi, calme dimanche-mercredi',
      '🛒 Courses Super U = 30-40% moins cher que restos (si appart)',
      '🚗 Location voiture recommandée (explorer île + liberté)',
      '📱 Carte SIM locale = 10€ pour 10Go (achetez dès arrivée aéroport)',
      '🌤️ Mai-juin + septembre-octobre = meilleurs mois (météo + prix + foule)',
      '☀️ Crème solaire waterproof SPF50+ indispensable (soleil brutal)',
      '🦟 Anti-moustique soir (actifs coucher soleil, surtout été)',
      '💳 Cash nécessaire : petits restos/snacks refusent cartes',
      '🎒 Sac banane/pochette sécurisée pour sorties (pickpockets)'
    ],

    culture: {
      overview: 'Grand Baie = ville cosmopolite, mélange cultures indienne, créole, chinoise, européenne. Ambiance internationale, anglais très parlé. Moins traditionnel que reste île mais respectez coutumes locales.',

      events: [
        'Diwali (oct-nov) : fête lumières hindoue, pétards, diyas',
        'Cavadee/Thaipoosam (jan-fév) : processions hindoues spectaculaires',
        'Holi (mars) : fête couleurs, poudres colorées',
        'Nouvel An chinois (jan-fév) : défilés dragons, pétards',
        'Fête indépendance (12 mars) : défilés, stands',
        'Noël/Nouvel An : haute saison, soirées, feux d\'artifice'
      ],

      etiquette: [
        'Tenue correcte temples/églises (épaules/genoux couverts)',
        'Enlevez chaussures avant entrer maisons mauriciennes',
        'Pourboire non obligatoire mais apprécié (10% si service excellent)',
        'Tutoiement rare, vouvoiement de mise avec personnes âgées',
        'Marchandage acceptable marchés/boutiques (pas supermarchés/restos)',
        'Main droite pour manger si repas créole/indien traditionnel',
        'Photos : demandez permission avant photographier personnes',
        'Sourire = meilleur passeport (Mauriciens très chaleureux si respectueux)'
      ]
    }
  },

  'flic-en-flac': {
    slug: 'flic-en-flac',
    name: 'Flic en Flac',
    title: 'Que faire à Flic en Flac',
    metaTitle: 'Flic en Flac Maurice : plage, plongée sous-marine, hébergements, restaurants',
    metaDescription: 'Flic en Flac côte ouest : longue plage de 5 km, meilleurs sites de plongée, hébergements, restaurants créoles et infos pratiques pour votre séjour.',
    heroImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/03/ile-maurice-voyage-scaled.jpg',

    intro: 'Flic en Flac est la station balnéaire favorite de la côte ouest de Maurice. Célèbre pour sa longue plage de sable blanc (5 km), ses couchers de soleil spectaculaires et ses sites de plongée parmi les meilleurs de l\'île, c\'est une destination idéale pour familles, couples et amateurs de fonds marins.',

    highlights: [
      'Plus longue plage publique de Maurice (5 km de sable blanc)',
      'Meilleure plongée de l\'île : épaves, tombants, grottes',
      'Couchers de soleil spectaculaires sur l\'océan',
      'Ambiance village relaxante et familiale',
      'Bon rapport qualité-prix hébergements',
      'Point de départ pour nager avec dauphins (Tamarin)',
      'Nombreux restaurants créoles authentiques'
    ],

    description: 'Flic en Flac s\'étend sur la côte ouest de Maurice, à 30 km de l\'aéroport (45 min). Autrefois village de pêcheurs, c\'est devenu une station balnéaire populaire mais gardant authenticité. Sa plage exceptionnelle de 5 km offre eau turquoise, lagon peu profond (familles) et couchers de soleil légendaires. La plongée y est exceptionnelle : récifs coralliens, épaves (Hoi Siong, Cathedral), grottes, requins, raies, tortues. L\'ambiance reste familiale et décontractée, loin du côté tape-à-l\'œil de Grand Baie. Flic en Flac attire beaucoup de Mauriciens le week-end (ambiance locale). C\'est aussi la porte d\'entrée pour nager avec les dauphins à Tamarin (15 min) et visiter le sud-ouest (Chamarel, Le Morne, Cascades).',

    bestMonths: ['mai', 'juin', 'septembre', 'octobre', 'novembre'],

    weatherByMonth: {
      'mai': 'Parfait : 26°C, sec, eau 25°C, excellente visibilité plongée',
      'juin': 'Excellent : 24°C, sec, eau 24°C, mer calme',
      'septembre': 'Idéal : 25°C, très sec, eau 24°C, meilleur mois',
      'octobre': 'Parfait : 26°C, sec, eau 25°C, visibilité optimale',
      'novembre': 'Très bon : 28°C, début été, eau 26°C'
    },

    coordinates: { lat: -20.2833, lng: 57.3667 },
    nearbyLocations: ['tamarin', 'le-morne'],
    distanceFromAirport: '30 km (45 min en voiture)',

    accommodation: {
      overview: 'Flic en Flac offre excellent rapport qualité-prix avec nombreux guesthouses, apparts, villas et hôtels 3-4*. Hébergements concentrés le long de la plage et route côtière. Plus abordable que Grand Baie ou Belle Mare. Réservez 1-2 mois en avance haute saison.',

      zones: [
        {
          name: 'Bord de plage nord',
          description: 'Partie nord de Flic en Flac, plus calme. Hébergements face mer, accès direct plage. Quelques resorts 4* et nombreux guesthouses.',
          priceRange: '50-200€/nuit',
          bestFor: 'Familles, couples, amateurs plage',
          pros: [
            'Accès direct plage magnifique',
            'Plus calme que centre',
            'Beaux couchers de soleil',
            'Plusieurs resorts qualité'
          ],
          cons: [
            'Restaurants moins nombreux',
            'Voiture utile pour sortir',
            'Peu de commerces proches'
          ]
        },
        {
          name: 'Centre Flic en Flac',
          description: 'Cœur du village avec commerces, restaurants, supermarchés. Plage à 5-10 min marche. Animation raisonnable, ambiance locale.',
          priceRange: '40-120€/nuit',
          bestFor: 'Budgets moyens, ceux aimant commodités',
          pros: [
            'Tout à pied : restos, commerces, bus',
            'Prix abordables',
            'Authentique, ambiance mauricienne',
            'Guesthouses familiaux accueillants'
          ],
          cons: [
            'Pas vue mer',
            'Un peu bruyant le soir/week-end',
            '5-10 min marche plage',
            'Hébergements plus basiques'
          ]
        },
        {
          name: 'Wolmar (sud)',
          description: 'Zone hôtelière haut de gamme au sud. Resorts 4-5* face lagon. Plage sublime, calme absolu. Prix élevés.',
          priceRange: '150-400€/nuit',
          bestFor: 'Lune de miel, luxe, all-inclusive',
          pros: [
            'Resorts luxueux avec tout inclus',
            'Plages privées sublimes',
            'Calme total',
            'Spas, piscines, restos qualité'
          ],
          cons: [
            'Cher',
            'Isolé (voiture nécessaire)',
            'Peu de restos locaux autour',
            'Peut sembler trop touristique'
          ]
        },
        {
          name: 'Cascavelle (arrière-pays)',
          description: 'À 5 km intérieur terres. Villas, maisons mauriciennes. Centre commercial Cascavelle Shopping Village proche. Pas de plage mais calme.',
          priceRange: '50-150€/nuit',
          bestFor: 'Location voiture, familles, séjours longs',
          pros: [
            'Prix attractifs',
            'Villas spacieuses avec jardin',
            'Centre commercial moderne proche',
            'Authentique, pas touristique'
          ],
          cons: [
            'Pas de plage (10 min voiture)',
            'Voiture indispensable',
            'Peu de restaurants marchables',
            'Peut sembler isolé'
          ]
        }
      ],

      bookingTips: [
        'Guesthouses meilleur rapport qualité-prix (40-80€, accueil familial)',
        'Airbnb très développé : villas 3 chambres dès 100€/nuit',
        'Resorts all-inclusive rentables si restez sur place (150-300€/nuit)',
        'Négociez hors saison : réductions 20-30% possible (avril-mai)',
        'Demandez vue mer ET plage (certains "vue mer" voient route)',
        'Vérifiez distance plage si bord de mer (certains 10 min marche)',
        'Guesthouses incluent souvent petit-déjeuner créole copieux'
      ]
    },

    dining: {
      overview: 'Flic en Flac offre cuisine créole authentique et fruits de mer frais à prix doux. Ambiance locale, moins touristique que Grand Baie. Nombreux snacks, gargotes et restos familiaux. Quelques tables gastronomiques dans resorts.',

      restaurants: [
        {
          name: 'La Pirogue Restaurant',
          type: 'Créole-Fruits de mer',
          priceRange: '15-35€',
          specialty: 'Poissons grillés, rougaille, curry. Vue plage, pieds dans sable.'
        },
        {
          name: 'Domaine Anna',
          type: 'Créole authentique',
          priceRange: '10-25€',
          specialty: 'Cuisine mauricienne traditionnelle. Ambiance locale, jardin tropical.'
        },
        {
          name: 'Ocean Restaurant',
          type: 'International-Fruits de mer',
          priceRange: '18-40€',
          specialty: 'Fruits de mer frais, steaks, pastas. Face mer, couchers de soleil.'
        },
        {
          name: 'Tangerin Attitude Restaurant',
          type: 'Fusion créole-international',
          priceRange: '25-50€',
          specialty: 'Cuisine créative, produits locaux. Gastro accessible, belle présentation.'
        },
        {
          name: 'Saffron Indian Restaurant',
          type: 'Indien',
          priceRange: '12-28€',
          specialty: 'Curry, tandoori, briani. Authentique, épices maîtrisées.'
        },
        {
          name: 'Chez Pepe',
          type: 'Italien-Pizza',
          priceRange: '10-25€',
          specialty: 'Pizzas feu de bois, pâtes. Portions généreuses, familial.'
        },
        {
          name: 'Snack Kennedy',
          type: 'Snack local',
          priceRange: '5-12€',
          specialty: 'Mine frite, riz frit, dholl puri. Populaire Mauriciens, authentique.'
        }
      ],

      localSpecialties: [
        'Poisson frais grillé : pêche du jour, dorade, capitaine, thon',
        'Rougaille ourite (poulpe) : spécialité locale savoureuse',
        'Curry crevettes : généreuses crevettes locales',
        'Vindaye poisson : poisson mariné moutarde, spécialité mauricienne',
        'Mine bouille : soupe nouilles, plat réconfortant',
        'Gâteau patate : dessert local à base patate douce',
        'Alouda : boisson dessert à l\'agar-agar'
      ],

      budgetMeals: 'Snacks locaux : 3-8€ (dholl puri, mine frite, roti). Food trucks plage le soir (brochettes, burgers locaux). Supermarché Spar/Super U : courses cuisine (5-10€/repas).',

      fineDining: 'Resorts restaurants : The Sands (Sugar Beach), Ambre Restaurant (Ambre Hotel), Tides (Pearle Beach). Cuisine fusion créole-internationale, belle présentation. 40-70€/pers.'
    },

    beaches: {
      overview: 'La plage de Flic en Flac est l\'une des plus belles de Maurice. 5 km de sable blanc fin, eau turquoise, lagon protégé. Parfaite pour baignade, snorkeling, couchers de soleil. Publique sur toute sa longueur (accès libre).',

      list: [
        {
          name: 'Plage publique Flic en Flac',
          description: '⭐ 5 km de plage sublime. Sable blanc, eau claire turquoise. Lagon peu profond sur 50-100m (familles). Coraux + poissons plus au large (snorkeling). Couchers de soleil légendaires.',
          bestFor: ['Baignade', 'Snorkeling', 'Familles avec enfants', 'Couchers de soleil', 'Longues marches'],
          facilities: ['Restaurants/bars plage', 'Toilettes publiques', 'Douches', 'Parking gratuit', 'Location kayak/paddle'],
          access: 'Accès libre partout. Parking gratuit le long de la route côtière.'
        },
        {
          name: 'Wolmar Beach',
          description: 'Partie sud de Flic en Flac, devant resorts. Encore plus belle, moins fréquentée. Eau cristalline, sable immaculé. Accès public.',
          bestFor: ['Calme', 'Snorkeling avancé', 'Photos paradisiaques', 'Intimité'],
          facilities: ['Resorts bars/restos (clients)', 'Parking', 'Ombre sous filaos'],
          access: 'Accès via chemins entre resorts ou parking Wolmar.'
        },
        {
          name: 'Sites de plongée proches',
          description: 'La plage donne accès aux meilleurs sites plongée ouest : Cathedral (grotte), épaves (Hoi Siong, Stella Maru), tombant (Rempart Serpent). Centres plongée sur place.',
          bestFor: ['Plongée bouteille', 'Snorkeling avancé', 'Observation faune'],
          facilities: ['5+ centres plongée', 'Location équipement', 'Baptêmes/certifications'],
          access: 'Départs plage ou petits bateaux depuis Flic en Flac.'
        }
      ]
    },

    transport: {
      howToGetThere: 'Depuis aéroport SSR : Taxi (45 min, 1800-2200 Rs = 40-50€). Voiture location (A1 puis M1 vers Curepipe, puis B9 vers ouest). Bus public (long, 2h+ avec changement). Transfert privé recommandé (35-45€).',

      gettingAround: 'Voiture recommandée pour explorer côte ouest et sud. Centre Flic en Flac se fait à pied. Vélo/scooter possible (plat). Taxis disponibles mais peu nombreux.',

      carRental: 'Fortement recommandé. 25-45€/jour. Agences locales (Allo Car, Beach Drive) moins chères que grandes enseignes. Conduite gauche. Parking facile et gratuit partout.',

      publicTransport: 'Bus vers Port-Louis (1h15, 45 Rs), Curepipe (30 min, 30 Rs), Quatre Bornes (40 min). Peu pratiques le soir. Horaires approximatifs.',

      taxi: 'Peu nombreux à Flic en Flac. Appelez plutôt que héler. Prix négociables. Flic-Tamarin : 300-400 Rs. Flic-Port-Louis : 1000-1200 Rs. Flic-Aéroport : 1800-2200 Rs.',

      parking: 'Gratuit partout : le long plage, rues, parkings publics. Jamais de problème de place sauf dimanche après-midi (Mauriciens nombreux).'
    },

    nightlife: {
      overview: 'Vie nocturne calme à Flic en Flac. Quelques bars plage, restos ambiance musicale, mais rien de comparable à Grand Baie. Parfait pour ceux cherchant tranquillité. Week-ends un peu plus animés (Mauriciens).',

      venues: [
        {
          name: 'The Beach House',
          type: 'Beach bar',
          description: 'Bar pieds dans sable, cocktails, musique live certains soirs. Couchers soleil. Ambiance décontractée.'
        },
        {
          name: 'Vashanti Bar',
          type: 'Bar local',
          description: 'Bar mauricien typique. Bières locales (Phoenix, Blue Marlin), billard. Ambiance authentique, prix doux.'
        },
        {
          name: 'Resorts bars',
          type: 'Bars hôtels',
          description: 'Bars des resorts (Sugar Beach, Pearle Beach, Aanari). Ouverts non-résidents. Cocktails, musique lounge.'
        },
        {
          name: 'Kenzi Bar',
          type: 'Bar-resto',
          description: 'Bar-restaurant local. Diffusion matchs foot, bières, snacks. Fréquenté Mauriciens le soir.'
        }
      ]
    },

    shopping: {
      overview: 'Shopping limité à Flic en Flac : quelques boutiques souvenirs, supermarchés, pharmacie. Pour shopping conséquent : Cascavelle Shopping Village (5 km) ou Phoenix/Quatre Bornes (15 km).',

      spots: [
        {
          name: 'Spar / Super U',
          type: 'Supermarché',
          bestFor: 'Courses quotidiennes, alcool, produits locaux. Prix corrects. Ouvert tous les jours.'
        },
        {
          name: 'Cascavelle Shopping Village',
          type: 'Centre commercial (5 km)',
          bestFor: 'Grandes enseignes (Game, Mr Price, Decathlon), restaurants, cinéma. Plus grand mall ouest.'
        },
        {
          name: 'Boutiques souvenirs plage',
          type: 'Souvenirs artisanat',
          bestFor: 'Paréos, maillots, artisanat. Prix négociables. Qualité variable.'
        },
        {
          name: 'Pharmacie Flic en Flac',
          type: 'Pharmacie',
          bestFor: 'Médicaments, crème solaire, après-soleil. Français parlé. Ouverte 9h-19h.'
        }
      ]
    },

    itineraries: [
      {
        duration: '1 jour',
        title: 'Journée parfaite à Flic en Flac',
        days: [
          {
            day: 1,
            morning: '7h : Lever tôt, nager avec dauphins Tamarin (réservé avance, 6h30-10h). Retour 10h. 11h : Baignade plage Flic, snorkeling lagon.',
            afternoon: '13h : Déjeuner La Pirogue pieds dans sable (poisson grillé). 15h : Plongée sous-marine 2 plongées (Cathedral + épave) ou relaxation plage. 17h : Marche 5 km plage jusqu\'à Wolmar.',
            evening: '18h30 : Coucher soleil The Beach House avec cocktail. 20h : Dîner créole Domaine Anna. 22h : Retour hôtel, nuit tranquille.'
          }
        ]
      },
      {
        duration: '3 jours',
        title: 'Week-end plongée et détente',
        days: [
          {
            day: 1,
            morning: 'Arrivée, installation hébergement. Tour Flic en Flac, repérage.',
            afternoon: 'Plage, baignade, snorkeling découverte. Coucher soleil.',
            evening: 'Dîner poissons frais Ocean Restaurant. Verre Beach House.'
          },
          {
            day: 2,
            morning: 'Nager avec dauphins Tamarin (6h30-10h). Petit-déj retour.',
            afternoon: 'Plongée 2 plongées (Cathedral + épave) ou baptême si débutant. Repos piscine/plage.',
            evening: 'Coucher soleil plage. Dîner Tangerin (gastro). Nuit calme.'
          },
          {
            day: 3,
            morning: 'Excursion sud-ouest : Chamarel (terres 7 couleurs, cascade). Visite Rhumerie.',
            afternoon: 'Plage Wolmar, dernière baignade. Shopping souvenirs.',
            evening: 'Dîner d\'adieux La Pirogue. Route retour ou repos.'
          }
        ]
      },
      {
        duration: '1 semaine',
        title: 'Séjour plongée basé à Flic en Flac',
        days: [
          {
            day: 1,
            morning: 'Arrivée aéroport, transfert Flic (45 min). Installation.',
            afternoon: 'Plage, baignade, acclimatation. Snorkeling lagon.',
            evening: 'Coucher soleil, dîner local, repos (décalage).'
          },
          {
            day: 2,
            morning: 'Plongée sous-marine 2 plongées (Cathedral + Rempart Serpent).',
            afternoon: 'Repos, piscine. Balade 5 km plage jusqu\'à Wolmar.',
            evening: 'Coucher soleil Beach House. Dîner créole Domaine Anna.'
          },
          {
            day: 3,
            morning: 'Nager avec dauphins Tamarin (départ 6h30).',
            afternoon: 'Plongée ou snorkeling. Ou journée détente plage.',
            evening: 'Dîner fruits de mer Ocean. Soirée tranquille.'
          },
          {
            day: 4,
            morning: 'Excursion sud-ouest journée : Chamarel + Cascades + Le Morne + Plage Ilot Sancho.',
            afternoon: 'Suite visite. Kitesurf à Le Morne (spectateurs).',
            evening: 'Retour Flic en Flac, dîner guesthouse ou resto.'
          },
          {
            day: 5,
            morning: 'Plongée 2 plongées (épaves Hoi Siong + Stella Maru).',
            afternoon: 'Shopping Cascavelle Mall. Repos piscine.',
            evening: 'Dîner gastro Tangerin. Dernier coucher soleil.'
          },
          {
            day: 6,
            morning: 'Excursion catamaran Île aux Bénitiers (depuis Rivière Noire 15 min). Journée complète.',
            afternoon: 'Suite catamaran, snorkeling, BBQ, Crystal Rock.',
            evening: 'Retour, repos, dîner léger.'
          },
          {
            day: 7,
            morning: 'Grasse matinée, dernière baignade, check-out.',
            afternoon: 'Route aéroport (45 min), vol retour.',
            evening: '-'
          }
        ]
      }
    ],

    budget: {
      daily: {
        budget: '35-60€/jour',
        midRange: '100-180€/jour',
        luxury: '300€+/jour'
      },
      breakdown: {
        accommodation: 'Budget 40-70€ (guesthouse/appart) / Mid 80-150€ (3-4*) / Luxe 200-400€ (4-5* all-inclusive)',
        food: 'Budget 12-20€ (snacks locaux + gargotes) / Mid 35-55€ (restos corrects) / Luxe 70-100€ (gastro)',
        activities: 'Dauphins Tamarin 50-65€ / Plongée 2 plongées 65-85€ / Excursion Chamarel 40-60€',
        transport: 'Location voiture 30-40€/jour essence incluse. Taxis 5-15€ trajets locaux.'
      }
    },

    practical: {
      atms: 'DAB MCB centre Flic en Flac + Cascavelle Mall. Retraits max 10 000-15 000 Rs. Frais 2-4%.',
      supermarkets: 'Spar (centre Flic, bien fourni), Super U (nord), Winners (Cascavelle, 5 km). Ouverts 9h-20h.',
      pharmacy: 'Pharmacie Flic en Flac (centre village, Royal Road). 9h-19h lun-sam, dimanche matin. Français parlé.',
      hospital: 'Clinique Wellkin (Quatre Bornes, 15 min), Victoria Hospital (Candos, 10 min). Urgences SAMU 114.',
      wifi: 'WiFi gratuit cafés, restos, hôtels. Carte SIM locale : boutiques Emtel/Orange Cascavelle (500 Rs = 10€, 10Go).',
      electricity: '220V, prises anglaises 3 broches. Adaptateur nécessaire (achat supermarché 100-200 Rs).'
    },

    safety: {
      overall: 'Flic en Flac est très sûr. Village tranquille, familial. Petite délinquance rare (vols opportunistes occasionnels). Baignade sûre (lagon protégé). Ambiance relax, pas de problèmes la nuit.',

      tips: [
        'Objets valeur : ne laissez pas dans voiture (vols rares mais existent)',
        'Baignade : restez zone lagon (courants forts au-delà récif)',
        'Snorkeling : chaussures aquatiques recommandées (coraux, oursins)',
        'Week-ends : plage bondée Mauriciens (surveillez affaires)',
        'Plongée : choisissez centre certifié (vérifiez avis en ligne)',
        'Dauphins : vérifiez opérateur respectueux (pas chasse/harcèlement)',
        'Soleil : crème SPF50+ waterproof indispensable (brûlures rapides)',
        'Route : prudence conduite (nids-de-poule, piétons, chiens)',
        'Alcool : buvez modérément si baignade ensuite (noyades possibles)',
        'Vendeurs plage : refusez poliment si insistants'
      ],

      emergency: 'Police : 112 ou 999. SAMU : 114. Pompiers : 115. Police Flic en Flac : +230 453 5013. Garde-côtes : 213 5151.'
    },

    tips: [
      '🌅 Couchers de soleil légendaires : installez-vous plage 17h30-18h30',
      '🤿 Plongée = activité #1 : Cathedral (grotte) + épaves incontournables',
      '🐬 Dauphins Tamarin : réservez en ligne, partez 6h30 (meilleur moment)',
      '🏖️ Plage 5 km : explorez toute longueur, Wolmar sud = moins monde',
      '💰 Meilleur rapport qualité-prix Maurice (vs Grand Baie/Belle Mare)',
      '🚗 Voiture recommandée : rayonner sud-ouest (Chamarel 35 min, Le Morne 45 min)',
      '🍽️ Gargotes locales = cuisine créole authentique pas chère',
      '🏨 Guesthouses familiaux meilleurs que hôtels (accueil, prix, authenticité)',
      '🤿 Snorkeling gratuit excellent : nagez vers large (80-100m)',
      '📅 Mai-juin + sept-oct = météo parfaite + visibilité plongée top',
      '🌴 Ambiance familiale et relax : si cherchez fête, allez Grand Baie',
      '🛒 Courses Cascavelle Mall : tout sous un toit (5 km)',
      '☀️ Protection solaire max : soleil tape fort (SPF50+)',
      '🥾 Chaussures aquatiques : coraux + oursins plage/snorkeling',
      '📱 Carte SIM 10€/10Go : achetez Cascavelle ou aéroport'
    ],

    culture: {
      overview: 'Flic en Flac mélange tourisme et authenticité mauricienne. Nombreuses familles créoles locales, ambiance village. Moins cosmopolite que Grand Baie, plus traditionnel.',

      events: [
        'Pèlerinage Père Laval (septembre) : procession catholique importante',
        'Diwali (oct-nov) : fête lumières hindoue, maisons illuminées',
        'Nouvel An : feux d\'artifice plage, soirées resorts',
        'Week-ends : familles mauriciennes plage, pique-niques, ambiance locale',
        'Fête indépendance (12 mars) : défilés, animations'
      ],

      etiquette: [
        'Bonjour/Bonsoir systématique (Mauriciens très polis)',
        'Tenue correcte hors plage (pas maillot bain rue/commerces)',
        'Pourboire 10% apprécié restos (pas obligatoire)',
        'Demandez permission avant photos personnes',
        'Respectez tranquillité lieux (pas cris/musique forte plage)',
        'Dimanche matin : messes nombreuses (respectez églises)',
        'Ne nourrissez pas poissons (déséquilibre écosystème)',
        'Ramassez déchets (plage doit rester propre)'
      ]
    }
  },

  'le-morne': {
    slug: 'le-morne',
    name: 'Le Morne',
    title: 'Que faire au Morne',
    metaTitle: 'Le Morne Maurice : kitesurf, randonnée montagne UNESCO, plages turquoise',
    metaDescription: 'Le Morne sud-ouest : spot de kitesurf mondial, randonnée montagne Brabant UNESCO, plages sublimes, resorts luxe et infos pratiques pour votre séjour.',
    heroImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/03/ile-maurice-voyage-scaled.jpg',

    intro: 'Le Morne est le paradis absolu des kitesurfeurs et amateurs de nature sauvage. Dominé par son montagne iconique (UNESCO), bordé de lagons turquoise spectaculaires et balayé par des vents constants, c\'est le spot incontournable de Maurice pour sports de glisse et randonnées panoramiques.',

    highlights: [
      'Top 3 spots de kitesurf mondiaux (vent 300 jours/an)',
      'Randonnée montagne Le Morne Brabant (UNESCO, vue 360°)',
      'Plages sublimes : lagon turquoise + "underwater waterfall"',
      'Spot SUP, wingfoil, windsurf, surf (Baie de Rivière Noire)',
      'Snorkeling exceptionnel au Morne Anglers Club',
      'Histoire riche : refuge esclaves marrons, mémorial UNESCO',
      'Resorts luxueux face au lagon'
    ],

    description: 'Le Morne se situe à l\'extrême sud-ouest de Maurice (60 km aéroport, 1h15). La montagne du Morne Brabant (556m) domine péninsule, classée UNESCO pour son histoire (refuge esclaves marrons au 18-19e). Les lagons turquoise entourant la presqu\'île sont spectaculaires, notamment l\'illusion d\'optique "underwater waterfall" vue du ciel. Le vent constant (alizés) fait du Morne LA Mecque du kitesurf : écoles internationales, compétitions, riders du monde entier. L\'ambiance reste préservée malgré quelques resorts luxe. La plage publique s\'étend sur 3 km, sable blanc immaculé. C\'est aussi point de départ pour plongée sud-ouest, observation baleines (juil-oct) et excursions Île aux Bénitiers.',

    bestMonths: ['mai', 'juin', 'juillet', 'août', 'septembre', 'octobre'],

    weatherByMonth: {
      'mai': 'Excellent : 26°C, vent établi, eau 25°C, kite parfait',
      'juin': 'Parfait : 24°C, vent fort constant, eau 24°C, meilleur kite',
      'juillet': 'Très bon : 22°C, vent maximal, eau 23°C, kite exceptionnel',
      'août': 'Très bon : 22°C, vent fort, eau 23°C, top kite + baleines',
      'septembre': 'Excellent : 24°C, vent modéré, eau 24°C, idéal débutants kite',
      'octobre': 'Parfait : 26°C, vent doux, eau 25°C, multi-activités'
    },

    coordinates: { lat: -20.4744, lng: 57.3167 },
    nearbyLocations: ['flic-en-flac', 'tamarin', 'baie-tamarin'],
    distanceFromAirport: '60 km (1h15 en voiture)',

    accommodation: {
      overview: 'Le Morne compte surtout resorts 4-5* haut de gamme face lagon, spécialisés kitesurf. Quelques guesthouses/villas mais choix limité. Prix élevés. Alternative : loger Tamarin/Black River (15-20 min) pour budgets moyens.',

      zones: [
        {
          name: 'Bord de lagon Le Morne',
          description: 'Resorts luxe directement sur plage/lagon. Vue montagne. Accès direct kitesurf. All-inclusive fréquent. Cadre paradisiaque mais cher.',
          priceRange: '200-600€/nuit',
          bestFor: 'Kite addicts, lune de miel, luxe, all-inclusive',
          pros: [
            'Plage/lagon sublimes privés',
            'Stations kite sur place (certains resorts)',
            'Restaurants, spas, piscines classe mondiale',
            'Vue montagne Morne iconique',
            'Service 5* impeccable'
          ],
          cons: [
            'Très cher',
            'Isolé (voiture nécessaire sorties)',
            'Peu restos locaux hors resorts',
            'Peut sembler "trop resort"'
          ]
        },
        {
          name: 'Village Le Morne',
          description: 'Petit village local en retrait (2-3 km plage). Quelques guesthouses, villas locations. Authentique, prix plus doux. Voiture indispensable.',
          priceRange: '60-150€/nuit',
          bestFor: 'Budgets moyens, kiteurs longue durée, authenticité',
          pros: [
            'Prix raisonnables (vs resorts)',
            'Ambiance locale authentique',
            'Villas spacieuses avec cuisine',
            'Calme absolu'
          ],
          cons: [
            'Pas vue mer',
            '5-10 min voiture plage',
            'Peu de restaurants',
            'Hébergements basiques',
            'Isolé le soir'
          ]
        },
        {
          name: 'Tamarin / Rivière Noire (15-20 km)',
          description: 'Alternative budget. Villages surfeurs, guesthouses, restos, supermarchés. Accès Le Morne 20 min voiture. Bon compromis prix/commodités.',
          priceRange: '45-120€/nuit',
          bestFor: 'Budgets serrés, ceux voulant animation',
          pros: [
            'Bien moins cher que Le Morne',
            'Restaurants, commerces, vie locale',
            'Ambiance surf/kite cool',
            'Plage Tamarin belle aussi'
          ],
          cons: [
            'Trajet quotidien Le Morne (20 min)',
            'Pas vue montagne Morne',
            'Essence + temps transport'
          ]
        }
      ],

      bookingTips: [
        'Resorts Le Morne : réservez 3-6 mois avance (demandés)',
        'Packages kite + hébergement souvent intéressants (écoles kite)',
        'Guesthouses village : Airbnb meilleure option (choix limité sinon)',
        'Hors saison (jan-avril) : négociez resorts, réductions 30-40%',
        'Vérifiez vue montagne Morne (certaines chambres vue jardin seulement)',
        'All-inclusive rentable si restez sur place (restos chers autour)',
        'Kiteurs : privilégiez resorts avec école kite intégrée (ION CLUB, Le Morne Kitesurf)'
      ]
    },

    dining: {
      overview: 'Restaurants limités au Morne : resorts (chers) + quelques adresses locales. Pour choix : Tamarin/Rivière Noire (20 min). Fruits de mer frais, créole, quelques tables gastronomiques.',

      restaurants: [
        {
          name: 'Le Kiosk (Dinarobin Hotel)',
          type: 'Créole-BBQ',
          priceRange: '25-50€',
          specialty: 'BBQ créole pieds dans sable, poissons grillés, rougaille. Ambiance conviviale.'
        },
        {
          name: 'Château du Morne Restaurant',
          type: 'Gastronomique',
          priceRange: '40-80€',
          specialty: 'Cuisine française raffinée, produits locaux. Cadre colonial historique.'
        },
        {
          name: 'Le Bougainville (LUX* Le Morne)',
          type: 'Asiatique fusion',
          priceRange: '35-65€',
          specialty: 'Cuisine pan-asiatique, sushis, wok. Cadre moderne chic.'
        },
        {
          name: 'Takamaka Restaurant (Paradis Hotel)',
          type: 'International-Fruits de mer',
          priceRange: '30-60€',
          specialty: 'Buffets thématiques, poissons frais. Vue lagon.'
        },
        {
          name: 'Le Morne Anglers Club',
          type: 'Créole-Local',
          priceRange: '15-35€',
          specialty: 'Poissons pêche jour, cuisine créole maison. Institution locale, simple mais bon.'
        },
        {
          name: 'Snacks locaux village',
          type: 'Gargotes',
          priceRange: '5-12€',
          specialty: 'Mine frite, dholl puri, roti, riz frit. Authentique, pas cher.'
        }
      ],

      localSpecialties: [
        'Poisson pêche locale : dorade, capitaine, coryphène (mahi-mahi)',
        'Ourite (poulpe) rougaille ou vindaye : spécialité sud',
        'Cari crevettes : crevettes tigres locales',
        'Poisson fumé : technique locale ancestrale',
        'Gâteau piment : beignets lentilles apéritif'
      ],

      budgetMeals: 'Snacks village Le Morne : 4-10€. Picnic plage avec courses supermarché Tamarin (15 min). Food trucks occasionnels parking plage publique.',

      fineDining: 'Resorts gastronomie : The Château (Dinarobin), Restaurant 974 (LUX*), Palm Court (Paradis Beachcomber). Cuisine fusion créole-internationale, vins, belle cave. 50-90€/pers.'
    },

    beaches: {
      overview: 'Les plages du Morne comptent parmi les plus belles de Maurice. Sable blanc immaculé, lagon turquoise éclatant, vue montagne iconique. Spot kite occupé mais large. Snorkeling excellent.',

      list: [
        {
          name: 'Plage publique Le Morne',
          description: '⭐⭐⭐ Carte postale absolue. 3 km sable blanc poudre, eau turquoise cristalline, vue montagne Morne. Zone kite délimitée. Snorkeling excellent récif corallien.',
          bestFor: ['Photos paradisiaques', 'Kitesurf', 'Baignade', 'Snorkeling', 'Marche romantique'],
          facilities: ['Parking gratuit', 'Quelques snacks', 'Écoles kite', 'Location paddle/kayak', 'Toilettes basiques'],
          access: 'Route principale Le Morne, parking gratuit évident. Accès libre.'
        },
        {
          name: 'Le Morne Anglers Club Beach',
          description: 'Petite plage protégée au pied nord montagne. Snorkeling exceptionnel (coraux, poissons). Calme, peu fréquentée. Restaurant local sur place.',
          bestFor: ['Snorkeling top', 'Calme', 'Familles', 'Éviter foule'],
          facilities: ['Restaurant', 'Parking', 'Location masques/palmes', 'Ombre naturelle'],
          access: 'Panneau "Le Morne Anglers Club", chemin terre 500m. Parking gratuit.'
        },
        {
          name: 'Underwater Waterfall (vue aérienne)',
          description: 'Illusion optique vue du ciel : dépôts sable créent effet "cascade sous-marine". Visible uniquement hélicoptère/ULM ou photos drone. Phénomène naturel unique.',
          bestFor: ['Photos aériennes', 'Expérience unique', 'Excursion hélico'],
          facilities: ['Vols hélico depuis aéroport SSR ou Wolmar'],
          access: 'Visible seulement du ciel. Excursions hélico 200-400€ (15-30 min).'
        },
        {
          name: 'Plage Baie de Jacotet (ouest)',
          description: 'Côté ouest péninsule, face océan. Vagues, surf possible. Moins touristique. Couchers soleil sublimes. Prudence courants.',
          bestFor: ['Surf', 'Solitude', 'Couchers soleil', 'Photos sauvages'],
          facilities: ['Aucune (sauvage)', 'Parking bord route'],
          access: 'Route vers One Eye (spot kite avancé). Accès libre, chemins plage.'
        }
      ]
    },

    transport: {
      howToGetThere: 'Depuis aéroport SSR : Taxi (1h15, 2500-3000 Rs = 55-70€). Voiture location (A1 puis M1 sud). Bus public (impratique, 3h+). Transfert privé recommandé (50-65€). Certains resorts proposent transferts privés inclus.',

      gettingAround: 'Voiture indispensable au Morne (isolé). Vélo/scooter possible mais distances longues. Taxis quasi inexistants. Resorts proposent navettes payantes Tamarin.',

      carRental: 'Indispensable. 30-50€/jour. Réservez en ligne avant arrivée (agences locales peu présentes). Route bonne état. Essence Tamarin (15 km) ou Baie du Cap (10 km).',

      publicTransport: 'Bus vers Quatre Bornes/Port-Louis (3h, 50 Rs) passent route principale mais rares (3-4/jour). Inutilisable pratiquement.',

      taxi: 'Quasi inexistants au Morne. Appelez taxi Tamarin/Rivière Noire (20-30 min attente). Le Morne-Tamarin : 500-700 Rs. Le Morne-Aéroport : 2500-3000 Rs.',

      parking: 'Gratuit partout : plage publique (grand parking), resorts (clients), village. Jamais de problème.'
    },

    nightlife: {
      overview: 'Vie nocturne inexistante au Morne (isolé, résidentiel/resorts). Bars resorts ouverts non-résidents. Pour sorties : Tamarin bars/restos (20 min voiture) ou Grand Baie (1h15).',

      venues: [
        {
          name: 'Bar LUX* Le Morne',
          type: 'Bar resort',
          description: 'Bar chic resort 5*. Cocktails signature, shisha, DJ certains soirs. Ouverts extérieurs. Dress code correct.'
        },
        {
          name: 'Dinarobin Beach Bar',
          type: 'Beach bar resort',
          description: 'Bar pieds dans sable. Cocktails, bières, ambiance relax. Couchers soleil. Non-résidents bienvenus.'
        },
        {
          name: 'Kite bars',
          type: 'Bars kitesurf',
          description: 'Bars écoles kite (ION CLUB, Le Morne KiteSchool). Ambiance riders, bières, échanges session. Ferme vers 20-21h.'
        }
      ]
    },

    shopping: {
      overview: 'Shopping inexistant au Morne. Épicerie basique village. Pour courses/shopping : Tamarin (15 km), Baie du Cap (10 km) ou Quatre Bornes (45 min).',

      spots: [
        {
          name: 'Épicerie Le Morne village',
          type: 'Épicerie de dépannage',
          bestFor: 'Produits basiques : pain, eau, bières, snacks. Prix élevés (isolement). Ouvert horaires limités.'
        },
        {
          name: 'Spar Tamarin',
          type: 'Supermarché (15 km)',
          bestFor: 'Courses complètes. Prix corrects. Fruits, légumes, viandes, alcool.'
        },
        {
          name: 'Kite shops',
          type: 'Boutiques kitesurf',
          bestFor: 'Matériel kite : ailes, planches, accessoires, réparations. ION CLUB, Le Morne KiteSchool shops.'
        },
        {
          name: 'Quatre Bornes (45 min)',
          type: 'Ville commerciale',
          bestFor: 'Shopping conséquent : vêtements, électronique, grands supermarchés.'
        }
      ]
    },

    itineraries: [
      {
        duration: '1 jour',
        title: 'Journée parfaite Le Morne',
        days: [
          {
            day: 1,
            morning: '7h : Lever tôt, randonnée montagne Le Morne Brabant (départ 7h recommandé, 3-4h A/R, guide obligatoire). Sommet 8h30, vue 360° époustouflante. Descente 10h30.',
            afternoon: '11h30 : Baignade plage publique, repos post-rando. 13h : Déjeuner Le Morne Anglers Club (poisson frais). 15h : Snorkeling récif Anglers Club (tortues, poissons). Ou initiation kitesurf 2h.',
            evening: '17h30 : Coucher soleil plage publique. 19h : Dîner Le Kiosk (BBQ créole). 21h : Retour hébergement, nuit calme (ou bar resort si envie).'
          }
        ]
      },
      {
        duration: '3 jours',
        title: 'Week-end kitesurf intensif',
        days: [
          {
            day: 1,
            morning: 'Arrivée, installation. 10h : Évaluation niveau école kite, location matériel.',
            afternoon: 'Session kite après-midi (3h). Baignade récupération.',
            evening: 'Coucher soleil. Dîner resort ou restaurant local. Repos (muscles!).'
          },
          {
            day: 2,
            morning: 'Session kite matinale (3h, vent optimal 10h-13h).',
            afternoon: 'Déjeuner. Repos piscine/plage. Session kite après-midi si énergie (2h).',
            evening: 'Bière kite bar, échanges riders. Dîner. Massage (muscles courbaturés).'
          },
          {
            day: 3,
            morning: 'Session kite finale (2-3h). Check-out.',
            afternoon: 'Dernière baignade. Route retour ou visite Chamarel (30 min).',
            evening: 'Départ ou nuit ailleurs sur île.'
          }
        ]
      },
      {
        duration: '1 semaine',
        title: 'Séjour kitesurf + découverte sud-ouest',
        days: [
          {
            day: 1,
            morning: 'Arrivée Le Morne, installation resort/villa.',
            afternoon: 'Repos, plage, acclimatation. Repérage école kite.',
            evening: 'Coucher soleil plage. Dîner local, repos (décalage).'
          },
          {
            day: 2,
            morning: 'Randonnée montagne Le Morne Brabant (7h-11h).',
            afternoon: 'Repos, baignade, snorkeling Anglers Club.',
            evening: 'Massage spa, dîner resort.'
          },
          {
            day: 3,
            morning: 'Session kitesurf matinale (3h, cours ou free ride).',
            afternoon: 'Repos piscine. Session kite après-midi (2h).',
            evening: 'Coucher soleil. Dîner BBQ créole.'
          },
          {
            day: 4,
            morning: 'Excursion Île aux Bénitiers catamaran (8h-16h). Snorkeling, Crystal Rock, BBQ.',
            afternoon: 'Suite excursion, détente.',
            evening: 'Retour, repos, dîner léger.'
          },
          {
            day: 5,
            morning: 'Session kite (3h).',
            afternoon: 'Visite Chamarel (terres 7 couleurs, cascade, rhumerie). Plage Ilot Sancho.',
            evening: 'Retour Le Morne, dîner gastro Château du Morne.'
          },
          {
            day: 6,
            morning: 'Session kite finale (3h). Derniers tricks, photos/vidéos.',
            afternoon: 'Farniente plage, paddle ou kayak mer.',
            evening: 'Coucher soleil mémorable. Dîner d\'adieux.'
          },
          {
            day: 7,
            morning: 'Grasse matinée. Dernière baignade. Check-out.',
            afternoon: 'Route aéroport (1h15) ou suite voyage île.',
            evening: '-'
          }
        ]
      }
    ],

    budget: {
      daily: {
        budget: '60-100€/jour',
        midRange: '150-250€/jour',
        luxury: '400€+/jour'
      },
      breakdown: {
        accommodation: 'Budget 60-120€ (villa village/Tamarin) / Mid 150-250€ (resort 4*) / Luxe 300-600€+ (resort 5* all-inclusive)',
        food: 'Budget 15-25€ (snacks + courses) / Mid 40-65€ (restos corrects) / Luxe 80-120€ (gastro resorts)',
        activities: 'Rando Le Morne Brabant 30-50€ (guide obligatoire) / Kite cours 3h 80-120€ / Location matos kite journée 50-80€ / Excursion Bénitiers 60-80€',
        transport: 'Location voiture 35-50€/jour (indispensable). Essence + parking gratuit.'
      }
    },

    practical: {
      atms: 'Pas de DAB au Morne. Plus proches : Baie du Cap (10 km), Tamarin (15 km). Retirez cash avant arriver ou payez carte (resorts acceptent).',
      supermarkets: 'Épicerie basique village Le Morne (dépannage). Spar Tamarin (15 km) pour vraies courses. Winners Quatre Bornes (45 min) pour gros achats.',
      pharmacy: 'Pas de pharmacie Le Morne. Plus proche : Tamarin (15 km) ou Baie du Cap. Clinique Wellkin Quatre Bornes (45 min).',
      hospital: 'Clinique Wellkin (Quatre Bornes, 45 min), Victoria Hospital (Candos, 50 min). Urgences SAMU 114. Infirmerie resorts pour bobos.',
      wifi: 'WiFi gratuit resorts, écoles kite. Village peu/pas de WiFi public. Carte SIM 4G recommandée (Emtel/Orange, 500 Rs/10Go).',
      electricity: '220V, prises anglaises. Adaptateur indispensable (achetez aéroport ou Tamarin).'
    },

    safety: {
      overall: 'Le Morne très sûr, isolé, peu fréquenté. Aucun problème délinquance. Dangers naturels : randonnée montagne (vertigineux), kitesurf (vent fort), courants océan (hors lagon).',

      tips: [
        'Randonnée Brabant : guide OBLIGATOIRE (passages exposés, accidents mortels passés)',
        'Réservez rando en ligne (quotas, max 30 pers/jour) : mauritiusattractions.com',
        'Chaussures rando montantes indispensables (sentier rocailleux, racines)',
        'Partez 7h maxi (chaleur intense après, déshydratation rapide)',
        'Eau 2L minimum, crème solaire SPF50+, casquette obligatoires',
        'Kitesurf : respectez zone délimitée (bateaux + baigneurs hors zone)',
        'Débutants kite : école obligatoire (vent fort, technique nécessaire)',
        'Baignade : restez lagon (courants très forts au-delà récif)',
        'Snorkeling : chaussures aquatiques (coraux, oursins)',
        'Voiture : route bonne état mais étroite, prudence (piétons, chiens)',
        'Baleines (juil-oct) : respectez distances (excursions réglementées)',
        'Soleil brutal : protection max (SPF50+ waterproof, rashguard kite)',
        'Isolement : réserves cash, essence, courses avant arriver',
        'Objets valeur : coffre resort (plage isolée, vols opportunistes rares)'
      ],

      emergency: 'Police : 112. SAMU : 114. Pompiers : 115. Police Baie du Cap : +230 623 5014. Garde-côtes : 213 5151.'
    },

    tips: [
      '🪁 Kitesurf = raison #1 venir : vent constant 300j/an, lagon parfait',
      '⛰️ Rando Brabant must-do mais RÉSERVEZ (quotas) : mauritiusattractions.com',
      '🏝️ Underwater waterfall visible seulement ciel : hélico 200-400€ OU drone',
      '📸 Photos carte postale : plage publique 17h (lumière dorée + montagne)',
      '💰 Budget élevé : resorts chers, resto limités, isolé. Ou logez Tamarin (-40%)',
      '🚗 Voiture INDISPENSABLE (isolement total, aucun transport)',
      '🤿 Snorkeling top : Anglers Club (gratuit, coraux, tortues)',
      '🏖️ Plage publique = top Maurice, peu fréquentée en semaine',
      '📅 Mai-oct = meilleur kite (vent fort). Nov-avril = vent faible/pluie',
      '☀️ Soleil extrême : SPF50+ waterproof, rashguard kite, casquette rando',
      '🛒 Courses AVANT arriver (Tamarin ou aéroport) : rien sur place',
      '💳 Cash nécessaire : DAB à 15 km, snacks village cash only',
      '📱 Carte SIM 4G : village pas WiFi public (10€/10Go aéroport)',
      '🏨 Resorts all-inclusive rentables (resto limités, isolement)',
      '⏰ Kiteurs : apportez matos si possible (location chère 50-80€/j)'
    ],

    culture: {
      overview: 'Le Morne site UNESCO mémoire esclavage. Montagne Brabant fut refuge esclaves marrons (évadés) 18-19e siècle. 1835 abolition esclavage : soldats montés annoncer liberté, esclaves crurent piège, sautèrent falaise (mythe/réalité débattue). Aujourd\'hui symbole liberté, lieu mémoire.',

      events: [
        '1er février : Journée commémoratio abolition esclavage, cérémonie pied montagne Morne',
        'Septembre : Morne Heritage Trust Festival (musique, danse séga typique)',
        'Kitesurf compétitions internationales (dates variables)',
        'Pèlerinages religieux montagne (hinduisme, christianisme)'
      ],

      etiquette: [
        'Montagne site sacré : comportement respectueux (pas cris, musique)',
        'Photos sommet : ne simulez pas sauts (respectez mémoire victimes)',
        'Mémorial esclavage pied montagne : recueillement approprié',
        'Kitesurf : respectez zones délimitées, baigneurs, autres riders',
        'Plage publique : ramassez déchets (préservation site)',
        'Resorts : dress code correct (pas maillot bain restos)',
        'Snorkeling : ne touchez pas coraux (protection récifs)',
        'Guide rando : pourboire apprécié si bon service (10-20%)'
      ]
    }
  },

  'ile-aux-cerfs': {
    slug: 'ile-aux-cerfs',
    name: 'Île aux Cerfs',
    title: 'Que faire à l\'Île aux Cerfs',
    metaTitle: 'Île aux Cerfs Maurice : excursions, activités nautiques, plages paradisiaques',
    metaDescription: 'Île aux Cerfs côte est : excursions catamaran, activités nautiques, plages de rêve, restaurants, golf et toutes les infos pour organiser votre journée sur l\'île.',
    heroImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/03/ile-maurice-voyage-scaled.jpg',

    intro: 'L\'Île aux Cerfs est l\'excursion la plus emblématique de Maurice. Ce petit paradis tropical de 87 hectares au large de la côte est séduit par ses plages de carte postale, son lagon turquoise cristallin et ses multiples activités nautiques. Accessible uniquement par bateau depuis Trou d\'Eau Douce, c\'est la destination rêvée pour une journée inoubliable.',

    highlights: [
      'Plages parmi les plus belles de Maurice : sable blanc poudreux, eau turquoise',
      'Lagon cristallin peu profond idéal pour baignade et snorkeling',
      'Activités nautiques exceptionnelles : parachute ascensionnel, jet-ski, banana boat',
      'Golf 18 trous signature Bernhard Langer (parcours sur île)',
      'BBQ créole sur la plage (formules excursions)',
      'Accessible uniquement par bateau : préservation naturelle',
      'Cadre paradisiaque pour photos de rêve'
    ],

    description: 'L\'Île aux Cerfs (Île-aux-Cerfs) se trouve à 10 minutes de bateau au large de Trou d\'Eau Douce, sur la côte est. Propriété du resort Shangri-La mais accessible au public, l\'île offre 4 plages principales : Grande Plage (la plus fréquentée), Petite Plage (plus calme), Plage du Golf et Plage Sud. Le lagon peu profond (1-2m) s\'étend sur plusieurs centaines de mètres, créant une piscine naturelle turquoise. L\'île concentre restaurants, bars, boutiques de souvenirs et base nautique. Deux formules : excursion organisée catamaran (BBQ inclus, 40-70€) ou traversée simple bateau public (10€ A/R, liberté totale). Le golf Île aux Cerfs (green fee 150-200€) est considéré parmi les plus beaux parcours insulaires au monde. L\'île accueille 1500-2000 visiteurs/jour en haute saison, arrivez tôt (8-9h) pour tranquillité.',

    bestMonths: ['mai', 'juin', 'septembre', 'octobre', 'novembre'],

    weatherByMonth: {
      'mai': 'Parfait : 26°C, sec, mer calme, vent modéré, idéal activités',
      'juin': 'Excellent : 24°C, sec, mer claire, parfait snorkeling',
      'septembre': 'Idéal : 25°C, très sec, mer cristalline, meilleur mois',
      'octobre': 'Parfait : 26°C, sec, eau 25°C, conditions optimales',
      'novembre': 'Très bon : 28°C, début été, eau chaude 26°C, peu de pluie'
    },

    coordinates: { lat: -20.2833, lng: 57.7944 },
    nearbyLocations: ['trou-deau-douce', 'belle-mare'],
    distanceFromAirport: '45 km jusqu\'à Trou d\'Eau Douce (50 min en voiture) puis 10 min bateau',

    accommodation: {
      overview: 'L\'Île aux Cerfs est une excursion à la journée uniquement (pas d\'hébergement sur l\'île). Logez à Trou d\'Eau Douce (village départ, 5 min bateau, économique) ou Belle Mare (resorts luxe, 15 min voiture + bateau, confort maximal). Réservez excursions 1-2 jours en avance en haute saison.',

      zones: [
        {
          name: 'Trou d\'Eau Douce',
          description: 'Village de pêcheurs point de départ officiel. Guesthouses et petits hôtels économiques. Accès direct embarcadère (5 min marche). Ambiance locale authentique. Restaurants créoles abordables.',
          priceRange: '40-100€/nuit',
          bestFor: 'Petits budgets, ceux voulant proximité maximale, ambiance locale',
          pros: [
            'À 5 min marche embarcadère Île aux Cerfs',
            'Prix abordables (guesthouses dès 40€)',
            'Restaurants locaux pas chers',
            'Atmosphere authentique, pas touristique',
            'Épiceries, supérette, DAB sur place',
            'Agences excursions nombreuses (négociation facile)'
          ],
          cons: [
            'Village simple, pas luxueux',
            'Plages du village moyennes (allez Île aux Cerfs)',
            'Peu d\'animation le soir',
            'Infrastructures basiques',
            'Pas de resorts haut de gamme'
          ]
        },
        {
          name: 'Belle Mare',
          description: 'Zone de resorts 4-5* à 5-10 km au sud. Plages privées sublimes. Transferts organisés vers Île aux Cerfs. Luxe, confort, all-inclusive. Idéal séjour tranquille + excursion.',
          priceRange: '150-600€/nuit',
          bestFor: 'Couples, lunes de miel, familles aisées, ceux cherchant luxe',
          pros: [
            'Resorts 5* avec plages privées magnifiques',
            'Piscines, spas, restaurants gastronomiques',
            'Transferts Île aux Cerfs organisés',
            'Cadre paradisiaque, service impeccable',
            'All-inclusive disponible (rentable)',
            'Golf Île aux Cerfs inclus dans certains forfaits'
          ],
          cons: [
            'Prix élevés (150-600€/nuit)',
            'À 15-20 min voiture embarcadère',
            'Isolé (voiture nécessaire pour sorties)',
            'Peu de restaurants hors resorts',
            'Ambiance resort internationale (moins authentique)'
          ]
        },
        {
          name: 'Pointe de Flacq / Centre de Flacq',
          description: 'À 10-15 km dans terres. Hébergements moyens gamme, guesthouses. Accès facile côte (10-15 min). Bon compromis budget/confort. Plus authentique.',
          priceRange: '50-120€/nuit',
          bestFor: 'Budgets moyens, ceux cherchant authenticité + confort',
          pros: [
            'Prix raisonnables (50-120€)',
            'Ambiance mauricienne authentique',
            'Marchés locaux, restaurants créoles',
            'À 15 min voiture côte et embarcadère',
            'Supermarchés, services complets'
          ],
          cons: [
            'Pas de vue mer',
            'Voiture indispensable',
            'À 15 min trajet quotidien',
            'Moins touristique (peu d\'infrastructures)',
            'Chaleur +2-3°C vs côte'
          ]
        }
      ],

      bookingTips: [
        'Réservez excursion + hébergement ensemble (packages souvent moins chers)',
        'Trou d\'Eau Douce = best base (proximité max, économique, authentique)',
        'Belle Mare si budget permet : luxe + plages privées sublimes',
        'Réservez excursions 1-2 jours en avance (haute saison complète vite)',
        'Négociez prix excursions au village (plusieurs opérateurs concurrents)',
        'Hors saison (avril-mai) : réductions 20-30% hébergements',
        'All-inclusive Belle Mare rentable si vous mangez beaucoup'
      ]
    },

    dining: {
      overview: 'Sur l\'Île aux Cerfs : 3 restaurants principaux (cher 20-50€/plat). Apportez pique-nique autorisé (économie). Formules BBQ excursions catamaran (inclus, excellent rapport qualité-prix). À Trou d\'Eau Douce : restaurants créoles abordables (8-20€/repas).',

      restaurants: [
        {
          name: 'Paul & Virginie Restaurant (sur île)',
          type: 'Créole-Fruits de mer',
          priceRange: '25-50€',
          specialty: 'Poissons grillés, langouste, curry créole. Vue lagon. Cher mais cadre exceptionnel.',
          location: 'Île aux Cerfs - Grande Plage'
        },
        {
          name: 'Sands Grill (sur île)',
          type: 'Grillades-International',
          priceRange: '20-40€',
          specialty: 'Burgers gastronomiques, salades, grillades. Pieds dans le sable.',
          location: 'Île aux Cerfs - Petite Plage'
        },
        {
          name: 'La Chaumière Masala (Trou d\'Eau Douce)',
          type: 'Créole',
          priceRange: '8-18€',
          specialty: 'Rougaille, vindaye, curry. Cuisine locale authentique, portions généreuses.'
        },
        {
          name: 'Chez Tino (Trou d\'Eau Douce)',
          type: 'Fruits de mer',
          priceRange: '12-25€',
          specialty: 'Poisson frais du jour, poulpe, calamars. Ambiance paillote, vue mer.'
        },
        {
          name: 'BBQ Catamaran (excursions)',
          type: 'BBQ créole',
          priceRange: 'Inclus (40-70€ excursion)',
          specialty: 'Poulet, poisson, saucisses grillées, salade, riz. Boissons incluses (rhum, bière, softs).'
        }
      ],

      localSpecialties: [
        'Poisson grillé créole : frais du jour, rougaille, riz (spécialité île)',
        'Langouste grillée : chère mais excellente (40-60€/personne)',
        'Dholl puri : snack à Trou d\'Eau Douce avant bateau (50-80 Rs)',
        'Mine frite : nouilles sautées mauriciennes (économique, copieux)',
        'Gâteaux piments : beignets lentilles apéritif local',
        'Fruits frais : ananas, mangue, papaye vendus plage (50-100 Rs)',
        'Alouda : boisson dessert locale à tester'
      ],

      budgetMeals: 'Apportez pique-nique sur île (autorisé, gratuit) : courses à Trou d\'Eau Douce (Super U 5 km). Snacks île : sandwichs 5-8€, glaces 3-5€. Restaurants Trou d\'Eau Douce : 8-15€/repas complet. BBQ catamaran inclus dans excursion (meilleur rapport qualité-prix).',

      fineDining: 'Sur île : Paul & Virginie (cher mais cadre sublime, réservez). Belle Mare resorts : restaurants gastronomiques (40-80€/personne, cuisine fusion, vue mer).'
    },

    beaches: {
      overview: 'L\'Île aux Cerfs offre 4 plages principales, toutes magnifiques. Sable blanc poudreux, lagon turquoise peu profond (1-2m), eau cristalline. Grande Plage = plus fréquentée (activités nautiques). Petite Plage = plus calme. Plage du Golf = exclusive. Plage Sud = sauvage.',

      list: [
        {
          name: 'Grande Plage (Plage Principale)',
          description: '⭐ Plage iconique carte postale Maurice. 300m de sable blanc, lagon turquoise, filaos. Concentration restaurants, activités nautiques, transats. Fréquentée mais sublime.',
          bestFor: ['Photos de rêve', 'Activités nautiques', 'Baignade', 'Ambiance animée'],
          facilities: ['Restaurants', 'Bars', 'Toilettes', 'Douches', 'Transats payants (300 Rs)', 'Location activités nautiques', 'Boutiques souvenirs'],
          access: 'Débarquement principal bateaux publics et excursions'
        },
        {
          name: 'Petite Plage',
          description: 'Plage plus calme au sud. Moins de monde, cadre intimiste. Lagon peu profond idéal familles enfants. Snorkeling correct (coraux, poissons colorés).',
          bestFor: ['Calme', 'Familles avec enfants', 'Snorkeling', 'Détente'],
          facilities: ['Restaurant Sands Grill', 'Bar', 'Toilettes', 'Transats', 'Location masques/palmes'],
          access: '10 min marche depuis Grande Plage ou bateau direct (certaines excursions)'
        },
        {
          name: 'Plage du Golf',
          description: 'Plage réservée golfeurs Île aux Cerfs Golf Club. Accès exclusif (green fee 150-200€). Cadre préservé, peu fréquentée, vue parcours.',
          bestFor: ['Golfeurs', 'Exclusivité', 'Calme absolu'],
          facilities: ['Clubhouse', 'Restaurant', 'Vestiaires', 'Boutique golf'],
          access: 'Réservée golfeurs avec green fee ou forfait Belle Mare resorts'
        },
        {
          name: 'Plage Sud (Plage Sauvage)',
          description: 'Plage isolée accessible à pied (20 min marche) ou kayak. Peu visitée, naturelle, sauvage. Idéal pour solitude, nature. Pas d\'infrastructures.',
          bestFor: ['Aventuriers', 'Solitude', 'Nature préservée', 'Exploration'],
          facilities: ['Aucune (sauvage)'],
          access: '20 min marche depuis Petite Plage ou 10 min kayak'
        }
      ]
    },

    transport: {
      howToGetThere: 'Île aux Cerfs accessible UNIQUEMENT par bateau depuis Trou d\'Eau Douce (10 min traversée). Option 1 : Bateau public (embarcadère public, 10€ A/R, départs 9h-16h toutes les 30 min). Option 2 : Excursion catamaran organisée (40-70€, BBQ inclus, départ hôtels, all-inclusive). Option 3 : Speed boat privé (150-300€, sur mesure, flexible).',

      gettingAround: 'Île aux Cerfs = petite (2 km x 600m), tout se fait à pied (15-20 min traversée complète). Sentiers balisés entre plages. Location kayak/paddle pour explorer (10-15€/h). Pas de véhicules motorisés sur île (préservation).',

      carRental: 'Voiture nécessaire pour rejoindre Trou d\'Eau Douce depuis votre hébergement (sauf si logez village). Location 25-50€/jour. Parking gratuit à embarcadère public. Parking resorts Belle Mare gratuit.',

      publicTransport: 'Bus publics vers Trou d\'Eau Douce depuis Port-Louis (2h, 50 Rs), Mahébourg (45 min, 35 Rs), Flacq (20 min, 25 Rs). Peu pratiques avec affaires plage. Horaires limités.',

      taxi: 'Taxi recommandé si pas voiture. Aéroport-Trou d\'Eau Douce : 1500-2000 Rs (35-45€). Belle Mare-Embarcadère : 300-500 Rs. Négociez prix AVANT montée. Réservez retour soir (peu de taxis après 18h).',

      parking: 'Parking gratuit embarcadère public Trou d\'Eau Douce (capacité limitée, arrivez tôt). Parkings resorts Belle Mare gratuits pour clients. Gardiennage gratuit mais pourboire apprécié (50-100 Rs).'
    },

    nightlife: {
      overview: 'Pas de vie nocturne sur Île aux Cerfs (fermeture 17-18h, derniers bateaux retour 16h30-17h). Pour soirées : Trou d\'Eau Douce limité (2-3 bars locaux, ambiance tranquille). Belle Mare resorts : bars lounges, spectacles. Grand Baie (45 min) pour vraie vie nocturne.',

      venues: [
        {
          name: 'Bar de l\'embarcadère (Trou d\'Eau Douce)',
          type: 'Bar local',
          description: 'Petit bar près embarcadère. Bières locales, rhum arrangé. Ambiance locale, pêcheurs. Ferme 22h. Prix doux (bière 80-120 Rs).'
        },
        {
          name: 'Chez Tino Bar (Trou d\'Eau Douce)',
          type: 'Bar-Restaurant',
          description: 'Vue mer, cocktails, musique live vendredi-samedi (séga). Ambiance décontractée. Ferme 23h. Cocktails 200-350 Rs.'
        },
        {
          name: 'Bars resorts Belle Mare',
          type: 'Lounges',
          description: 'Bars lounges hôtels 5* : cocktails signature, DJ, spectacles. Ambiance chic. Souvent réservés clients. Cocktails 400-600 Rs.'
        }
      ]
    },

    shopping: {
      overview: 'Shopping limité Île aux Cerfs : 3-4 boutiques souvenirs (pareos, t-shirts, artisanat, prix touristiques élevés). Trou d\'Eau Douce : épiceries, supérette, quelques artisans locaux (modèles bateaux). Belle Mare resorts : boutiques luxe. Grand shopping : Mahébourg (20 min) ou Port-Louis (1h).',

      spots: [
        {
          name: 'Boutiques Île aux Cerfs',
          type: 'Souvenirs',
          bestFor: 'Pareos, t-shirts, maillots de bain, artisanat. Prix élevés (15-50€). Qualité moyenne. Négociez.'
        },
        {
          name: 'Artisans Trou d\'Eau Douce',
          type: 'Artisanat local',
          bestFor: 'Modèles bateaux bois, peintures locales, bijoux. Prix négociables. Plus authentique que sur île.'
        },
        {
          name: 'Super U Flacq (10 km)',
          type: 'Supermarché',
          bestFor: 'Courses pique-nique, provisions, produits locaux, alcool. Prix normaux. Grand choix.'
        },
        {
          name: 'Marché de Flacq (mercredi)',
          type: 'Marché local',
          bestFor: 'Fruits, légumes, épices, tissus, vêtements. Très local, peu touristique. Prix bas, négociez.'
        }
      ]
    },

    itineraries: [
      {
        duration: '1 jour',
        title: 'Journée parfaite Île aux Cerfs',
        days: [
          {
            day: 1,
            morning: '8h : Départ embarcadère Trou d\'Eau Douce (bateau public 10€ A/R ou excursion catamaran 50-70€ avec BBQ). 8h15 : Arrivée Grande Plage, installez transat (300 Rs) ou serviette (gratuit). 8h30-11h : Baignade lagon turquoise, snorkeling (location masques 200 Rs), paddle (300 Rs/h), exploration plage.',
            afternoon: '12h : Déjeuner restaurant Paul & Virginie (25-50€, réservez) OU pique-nique apporté (gratuit) OU BBQ catamaran (inclus). 13h30-15h30 : Activités nautiques : parachute ascensionnel (50€, sensations fortes), jet-ski (80€/30 min), banana boat (25€), tube (25€). Ou marche vers Petite Plage (10 min, plus calme, snorkeling).',
            evening: '16h : Photos sunset Grande Plage (lumière dorée magnifique). 16h30-17h : Retour bateau Trou d\'Eau Douce (derniers bateaux 16h30-17h, soyez à l\'heure). 18h : Dîner Chez Tino fruits de mer (12-25€) ou restaurant créole village. 20h : Repos après journée intense soleil/mer.'
          }
        ]
      },
      {
        duration: '3 jours',
        title: 'Long week-end Île aux Cerfs + Côte Est',
        days: [
          {
            day: 1,
            morning: 'Arrivée Trou d\'Eau Douce, installation guesthouse (40-80€). Marche village, découverte embarcadère, repérage. Courses Super U Flacq si pique-niques prévus.',
            afternoon: 'Première sortie Île aux Cerfs (bateau public 10€ A/R, flexibilité). Grande Plage : baignade, snorkeling, détente. Installez-vous, profitez lagon cristallin.',
            evening: 'Retour 17h. Dîner La Chaumière Masala cuisine créole (8-18€). Coucher tôt (journée 2 intense).'
          },
          {
            day: 2,
            morning: 'Excursion catamaran all-inclusive (50-70€, réservez veille) : 9h départ, navigation côte est, snorkeling Grand River South East (GRSE), cascade.',
            afternoon: 'Arrêt Île aux Cerfs : BBQ créole sur plage (inclus, délicieux), boissons illimitées (rhum, bière). Temps libre baignade, activités nautiques (parachute, jet-ski en supplément).',
            evening: '16h30 : Retour catamaran. 18h : Détente guesthouse. 19h : Dîner Chez Tino (fruits de mer, vue mer). Coucher tranquille.'
          },
          {
            day: 3,
            morning: 'Excursion GRSE + Cascade (optionnel, 30-40€) : remontée rivière pirogue, baignade cascade forêt tropicale, singes sauvages. OU journée libre plage Belle Mare (15 min voiture).',
            afternoon: 'Retour Île aux Cerfs après-midi (bateau public) : exploration Petite Plage (calme), marche Plage Sud (20 min, sauvage). Photos souvenirs.',
            evening: '17h : Retour définitif. Shopping souvenirs village. Dîner créole. Préparation départ lendemain.'
          }
        ]
      },
      {
        duration: '1 semaine',
        title: 'Semaine complète Côte Est + Île aux Cerfs',
        days: [
          {
            day: 1,
            morning: 'Arrivée aéroport, récupération voiture location. Route vers Belle Mare (50 min), installation resort 4-5* (150-400€/nuit). Check-in, exploration resort.',
            afternoon: 'Plage privée resort : baignade, détente, acclimatation. Snorkeling équipement gratuit resort. Piscine.',
            evening: 'Dîner restaurant resort (inclus si all-inclusive). Coucher tôt (décalage horaire).'
          },
          {
            day: 2,
            morning: 'Excursion Île aux Cerfs catamaran all-inclusive (organisée par resort ou agence locale 50-70€) : départ 9h, navigation, snorkeling GRSE.',
            afternoon: 'Île aux Cerfs : BBQ, baignade, activités nautiques (parachute 50€, jet-ski 80€). Profitez plages sublimes.',
            evening: 'Retour 16h30. Spa resort (massage 60-100€, réservez). Dîner gastronomique resort.'
          },
          {
            day: 3,
            morning: 'Golf Île aux Cerfs (green fee 150-200€, réservez 2j avant) : 18 trous signature Bernhard Langer, parcours exceptionnel île-lagon. OU journée plage resort si non golfeur.',
            afternoon: 'Fin golf. Déjeuner clubhouse vue mer. Retour resort, piscine, détente.',
            evening: 'Excursion dauphin Tamarin (optionnel, départ 5h30, 60€, réservez) OU soirée tranquille resort.'
          },
          {
            day: 4,
            morning: 'Journée libre Île aux Cerfs (bateau public Trou d\'Eau Douce 10€ A/R) : explorez 4 plages, marche Plage Sud, kayak (15€/h), paddle.',
            afternoon: 'Pique-nique apporté (économie) OU restaurant Paul & Virginie (luxe). Snorkeling Petite Plage (coraux, poissons).',
            evening: 'Retour 17h. Route Trou d\'Eau Douce-Belle Mare. Dîner restaurant hors resort (Symon\'s 20-40€).'
          },
          {
            day: 5,
            morning: 'Excursion intérieur île : GRSE + Cascade (40€), singes, forêt tropicale. OU visite Mahébourg (30 min) : marché lundi, musée naval, vieux village colonial.',
            afternoon: 'Plage Blue Bay (40 min sud) : parc marin, snorkeling exceptionnel (coraux, poissons tropicaux), glass bottom boat (300 Rs).',
            evening: 'Retour Belle Mare. Dernier dîner resort. Soirée tranquille.'
          },
          {
            day: 6,
            morning: 'Dernière matinée plage resort. Baignade, photos souvenirs. Check-out 12h.',
            afternoon: 'Route vers autre région Maurice (Grand Baie nord, Flic en Flac ouest) OU extension séjour Belle Mare.',
            evening: 'Installation nouvel hébergement. Découverte nouvelle région.'
          },
          {
            day: 7,
            morning: 'Journée libre nouvelle région OU vol retour selon planning.',
            afternoon: 'Suite découverte OU route aéroport (prévoir 2h avant vol).',
            evening: 'Vol retour.'
          }
        ]
      }
    ],

    budget: {
      overview: 'Budget Île aux Cerfs = 50-200€/personne/jour selon confort. Économique possible (bateau public, pique-nique, guesthouse Trou d\'Eau Douce 70-100€/j). Luxe (resort Belle Mare, restaurants île, activités nautiques 200-400€/j).',

      daily: {
        budget: {
          total: '70-100€/jour',
          accommodation: '40-60€ guesthouse Trou d\'Eau Douce',
          food: '15-25€ (pique-nique + 1 resto créole village)',
          activities: '10€ (bateau public A/R)',
          transport: '5-10€ (taxi local/essence)'
        },
        midRange: {
          total: '120-180€/jour',
          accommodation: '80-120€ hôtel 3* Belle Mare ou guesthouse confort',
          food: '30-50€ (resto île + village)',
          activities: '50-70€ (excursion catamaran BBQ)',
          transport: '10-20€ (voiture location)'
        },
        luxury: {
          total: '250-500€/jour',
          accommodation: '150-400€ resort 5* Belle Mare',
          food: '60-100€ (restos île, gastronomie resort)',
          activities: '150-250€ (golf + parachute + jet-ski)',
          transport: '20-30€ (voiture + speed boat privé)'
        }
      },

      savingTips: [
        'Bateau public vs catamaran : économie 40-60€ (mais BBQ excursion vaut coût)',
        'Pique-nique sur île (autorisé) : économie 20-40€/repas',
        'Logez Trou d\'Eau Douce vs Belle Mare : économie 100-300€/nuit',
        'Activités nautiques : négociez packages (2-3 activités = réduc 20%)',
        'Arrivez tôt (8-9h) : évitez foule + meilleure luminosité photos',
        'Apportez masque/tuba perso : économie location 200 Rs',
        'Hors saison (avril-mai) : excursions -20-30%, hébergements -30%',
        'Carte SIM locale : 10€/10Go vs roaming Europe (économie data)',
        'Courses Super U avant : économie vs boutiques île (prix x2-3)',
        'Transats : installez serviette plage (gratuit) vs location 300 Rs'
      ]
    },

    practical: {
      whatToBring: [
        'Maillot de bain (2+ si activités eau intense)',
        'Serviette plage microfibre (légère, sèche vite)',
        'Crème solaire SPF50+ waterproof REEF SAFE (coraux)',
        'Lunettes soleil polarisées (réverbération eau intense)',
        'Chapeau/casquette large bord (soleil brutal)',
        'Masque + tuba si vous avez (économie location 200 Rs)',
        'Chaussures eau/sandales (coraux, oursins possibles)',
        'Rashguard anti-UV (protection max activités nautiques)',
        'Appareil photo waterproof/GoPro (photos sous-marines)',
        'Sac étanche (protéger téléphone, argent)',
        'Cash (restaurants île, activités, pourboires)',
        'Carte bancaire (backup)',
        'Pique-nique + eau (économie si budget serré)',
        'Anti-moustique (forêt GRSE si excursion cascade)',
        'Petit sac à dos waterproof (explorer île à pied)'
      ],

      services: {
        atm: 'DAB à Trou d\'Eau Douce (village centre, MCB et SBM). DAB à Flacq (10 km). Pas de DAB sur Île aux Cerfs. Retirez avant.',
        medical: 'Pharmacie à Flacq (10 km). Dispensaire Trou d\'Eau Douce (urgences mineures). Hôpital public Flacq (15 km). Cliniques privées Belle Mare resorts.',
        wifi: 'WiFi gratuit resorts Belle Mare. WiFi limité guesthouses Trou d\'Eau Douce (faible débit). Pas de WiFi public sur Île aux Cerfs. Carte SIM 4G recommandée (10€/10Go aéroport).',
        phone: 'Carte SIM locale : Emtel ou MyT (aéroport, 10€ pour 10Go valable 30j). Réseau 4G excellent côte. Pas de réseau sur Île aux Cerfs (connexion via bateau proche côte).'
      },

      safety: [
        'Soleil extrême : crème SPF50+ toutes 2h, rashguard activités nautiques',
        'Hydratation : buvez 2-3L eau/jour (chaleur + mer déshydratent)',
        'Lagon peu profond mais : courants possibles sortie passe, surveillez enfants',
        'Activités nautiques : gilets fournis OBLIGATOIRES (jetski, parachute)',
        'Snorkeling : ne touchez pas coraux (urticants) ni oursins (épines)',
        'Méduses : rares mais possibles nov-mars (vinaigre si piqûre)',
        'Objets valeur : coffre hôtel (plage = risque vol opportuniste)',
        'Cash : apportez suffisant (DAB uniquement Trou d\'Eau Douce)',
        'Horaire bateau retour : derniers départs 16h30-17h, soyez à l\'heure',
        'Alcool : boissons illimitées catamaran = hydratez + modération (soleil)',
        'Photos : attention smartphone près eau (sac étanche recommandé)',
        'Coups de soleil : même ciel couvert UV traversent (protection TOUJOURS)'
      ],

      emergency: 'Police : 112. SAMU : 114. Pompiers : 115. Police Trou d\'Eau Douce : +230 480 2469. Garde-côtes : 213 5151. Clinique Belle Mare : +230 415 2400.'
    },

    tips: [
      '🚤 Bateau public (10€) vs catamaran (60€) : budget limité = public, confort = catamaran BBQ',
      '📸 Photos carte postale : Grande Plage 8-9h (lumière douce, personne) ou 16h (sunset)',
      '🤿 Meilleur snorkeling : Petite Plage (moins de monde, coraux + poissons)',
      '🏖️ Plage calme : Petite Plage ou Plage Sud (20 min marche, quasi déserte)',
      '⛱️ Transats : installez serviette gratuit vs location 300 Rs (économie)',
      '🥪 Pique-nique autorisé : économie 20-40€/repas (achetez Super U Flacq)',
      '🪂 Parachute ascensionnel : sensation forte #1, vue aérienne sublime (50€)',
      '⏰ Arrivez TÔT : 8-9h = plage pour vous, lumière photos, moins chaud',
      '🏌️ Golf Île aux Cerfs : réservez 2-3j avant (quotas), green fee 150-200€',
      '🌊 GRSE + Cascade : combine avec catamaran (même journée, efficace)',
      '💰 Négociez activités nautiques : package 2-3 activités = réduc 20%',
      '☀️ Protection solaire MAX : SPF50+ waterproof, rashguard, réappliquez toutes 2h',
      '💧 Eau : apportez 2L/personne (déshydratation rapide soleil + mer)',
      '📱 Sac étanche : protégez smartphone (eau omniprésente, risque casse)',
      '⏱️ Horaire retour : derniers bateaux 16h30-17h, soyez à l\'heure (sinon bloqué)'
    ],

    culture: {
      overview: 'Île aux Cerfs doit son nom aux cerfs de Java introduits par Hollandais 17e siècle (disparus depuis). Île appartenait famille Rogers puis rachetée groupe Sun Resorts années 1990. Depuis 2002, développement touristique intensif : restaurants, golf, base nautique. En 2019, New Mauritius Hotels (Shangri-La) rachète île mais accès public maintenu (accord gouvernement). Île accueille 300 000+ visiteurs/an, devenue symbole tourisme mauricien. Écologie fragilisée : projets préservation coraux, limitation visiteurs envisagés.',

      events: [
        'Compétitions golf amateur (mars-avril, Île aux Cerfs Golf Club)',
        'Fête plage publique organisées resorts (concerts, DJ, dates variables)',
        'Régates catamaran inter-îles (septembre-octobre, départ Grand River)',
        'Célébration Jour An : soirée privée exclusive (réservation anticipée)'
      ],

      etiquette: [
        'Plages : ramassez vos déchets (préservation site, poubelles disponibles)',
        'Snorkeling : NE TOUCHEZ PAS coraux (protection récif, fragiles)',
        'Faune marine : observez sans déranger (poissons, tortues si chanceux)',
        'Photos : demandez autorisation locaux avant photographier',
        'Tenue : maillot bain plage OK, couvrez-vous restaurants (short + t-shirt min)',
        'Bruit : respectez tranquillité autres visiteurs (musique modérée)',
        'Filaos : ne cassez pas branches (arbres protégés, ombre précieuse)',
        'Activités nautiques : respectez zones délimitées baignade/bateaux',
        'Pourboire : apprécié bons services (serveurs 10%, guides bateau 100-200 Rs)',
        'Réservations : respectez horaires (retards = perte place, impacte groupe)',
        'Environnement : crème solaire REEF SAFE uniquement (protection coraux)',
        'Privatisation plage : respectez zones privées golf/resorts si non autorisé'
      ]
    }
  },

  'belle-mare': {
    slug: 'belle-mare',
    name: 'Belle Mare',
    title: 'Que faire à Belle Mare',
    metaTitle: 'Belle Mare Maurice : resorts 5 étoiles, plages, golf, activités luxe',
    metaDescription: 'Belle Mare côte est : resorts 5 étoiles prestigieux, plages immaculées, golf international, snorkeling et restaurants gastronomiques pour un séjour luxe.',
    heroImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/03/ile-maurice-voyage-scaled.jpg',

    intro: 'Belle Mare est le joyau de la côte est mauricienne, référence absolue du tourisme luxe à Maurice. Cette portion de littoral de 10 km concentre les resorts 5 étoiles les plus prestigieux de l\'île, alignés face à l\'une des plus belles plages de l\'océan Indien. Sable blanc poudreux, lagon turquoise cristallin, cocotiers et filaos : cadre paradisiaque garanti.',

    highlights: [
      'Plage de 10 km parmi plus belles du monde : sable blanc, eau turquoise',
      'Concentration de resorts 5* de légende (Constance, Lux*, One&Only)',
      'Golf Belle Mare Plage : 18 trous links championship, face océan',
      'Snorkeling exceptionnel : coraux, poissons tropicaux, tortues',
      'All-inclusive haut de gamme : gastronomie, spas, sports',
      'Proximité Île aux Cerfs (15 min) : excursions privilégiées',
      'Calme et préservation : peu de développement commercial'
    ],

    description: 'Belle Mare s\'étend sur la côte est entre Trou d\'Eau Douce au nord et Palmar au sud, à 45 km de l\'aéroport (50 min). Cette zone hôtelière premium se distingue par son cadre préservé : pas de développement urbain, seulement resorts haut de gamme nichés dans végétation tropicale. La plage publique de Belle Mare s\'étire sur 10 km, considérée comme l\'une des plus belles plages continues de Maurice. Lagon protégé par barrière récifs (1 km au large), eau calme peu profonde (1-2m), température 24-28°C. Belle Mare attire clientèle internationale aisée recherchant luxe, tranquillité, service impeccable. Ambiance exclusive mais pas snob : décontraction tropicale chic. Infrastructures limitées hors resorts (peu de restaurants, commerces indépendants), ce qui contribue au calme.',

    bestMonths: ['mai', 'juin', 'septembre', 'octobre', 'novembre'],

    weatherByMonth: {
      'mai': 'Parfait : 26°C, sec, eau 25°C, vent modéré, idéal',
      'juin': 'Excellent : 24°C, sec, eau 24°C, mer calme, top snorkeling',
      'septembre': 'Idéal : 25°C, très sec, eau 24°C, meilleur mois',
      'octobre': 'Parfait : 26°C, sec, eau 25°C, conditions optimales',
      'novembre': 'Très bon : 28°C, début été, eau 26°C, peu pluie encore'
    },

    coordinates: { lat: -20.2000, lng: 57.7667 },
    nearbyLocations: ['trou-deau-douce', 'ile-aux-cerfs'],
    distanceFromAirport: '45 km (50 min en voiture)',

    accommodation: {
      overview: 'Belle Mare = destination resorts 5 étoiles all-inclusive. Hébergements indépendants quasi inexistants. Budget 150-600€/nuit selon resort et saison. Réservez 3-4 mois en avance pour haute saison (juillet-août, décembre). All-inclusive fortement recommandé (isolement, peu restaurants extérieurs).',

      zones: [
        {
          name: 'Resorts nord Belle Mare',
          description: 'Entre Belle Mare plage et Trou d\'Eau Douce. Resorts 5* iconiques : Constance Belle Mare Plage, Lux* Belle Mare, Long Beach. Proximité Île aux Cerfs (10 min transfert).',
          priceRange: '200-600€/nuit',
          bestFor: 'Couples, lunes de miel, familles aisées, golfeurs',
          pros: [
            'Resorts légendaires, service exceptionnel',
            'Plages privées sublimes, piscines multiples',
            'Restaurants gastronomiques (5-7/resort)',
            'Spas de luxe, sports nautiques inclus',
            'Proximité Île aux Cerfs (transferts organisés)',
            'Golf Belle Mare Plage sur place (Constance)',
            'Clubs enfants premium (familles)'
          ],
          cons: [
            'Prix très élevés (200-600€/nuit)',
            'Isolement total (voiture nécessaire sorties)',
            'Peu restaurants hors resorts (all-inclusive recommandé)',
            'Ambiance internationale (moins authentique)',
            'Réservation anticipée obligatoire (complets vite)'
          ]
        },
        {
          name: 'Resorts centre Belle Mare',
          description: 'Cœur de Belle Mare. Resorts familiaux et couples : Ambre, Shangri-La Le Touessrok (Île Mangénie privée). Plage publique accessible. Golf Belle Mare Plage proche.',
          priceRange: '150-400€/nuit',
          bestFor: 'Familles, jeunes couples, ceux cherchant bon rapport luxe/prix',
          pros: [
            'Prix plus abordables que nord (150-300€)',
            'Plage publique magnifique accessible',
            'Resorts familiaux bien équipés (clubs, piscines)',
            'All-inclusive bon rapport qualité-prix',
            'Excursions Île aux Cerfs faciles',
            'Golf proche (réductions clients resorts)'
          ],
          cons: [
            'Moins exclusif que resorts nord',
            'Plage publique = + fréquentée week-ends',
            'Restaurants gastronomiques limités',
            'Prestations moins premium',
            'Voiture nécessaire pour sorties'
          ]
        },
        {
          name: 'Resorts sud (Palmar)',
          description: 'Entre Belle Mare et Palmar. Resorts 4-5* : Emeraude Beach Attitude, Veranda Palmar. Moins chers, cadre préservé. Plage excellente moins connue.',
          priceRange: '120-250€/nuit',
          bestFor: 'Budgets moyens-élevés, ceux cherchant calme absolu',
          pros: [
            'Prix intéressants (120-250€ vs 300-600€ nord)',
            'Plages très belles, moins fréquentées',
            'Ambiance plus locale, moins internationale',
            'All-inclusive abordable',
            'Calme absolu, préservation maximale'
          ],
          cons: [
            'Éloigné Île aux Cerfs (+15-20 min)',
            'Prestations moins luxueuses',
            'Peu d\'animations/vie nocturne',
            'Isolement renforcé (voiture indispensable)',
            'Restaurants hors resort quasi inexistants'
          ]
        }
      ],

      bookingTips: [
        'Réservez 3-4 mois en avance (haute saison complète rapidement)',
        'All-inclusive FORTEMENT recommandé (isolement, restaurants rares)',
        'Hors saison (avril-mai) : réductions 30-40% resorts',
        'Packages lune de miel : surclassement gratuit souvent (demandez)',
        'Comparez resorts : certains incluent golf, excursions, spa',
        'Constance Belle Mare = référence luxe/golf (cher mais exceptionnel)',
        'Lux* Belle Mare = moderne, design, clientèle jeune branchée',
        'Ambre = best rapport qualité-prix all-inclusive familles',
        'Négociez directement resort (parfois mieux que booking.com)',
        'Vérifiez inclusions : sports nautiques, minibar, excursions'
      ]
    },

    dining: {
      overview: 'Restauration Belle Mare = quasi exclusivement dans resorts. Resorts 5* offrent 5-7 restaurants/resort (gastronomie internationale, fusion, asiatique, grill). All-inclusive couvre tous restaurants. À la carte si demi-pension : 40-80€/dîner. Restaurants indépendants rares, à Trou d\'Eau Douce (15 min voiture).',

      restaurants: [
        {
          name: 'Blue Penny Café (Constance Belle Mare)',
          type: 'Fusion créole-européenne',
          priceRange: 'Inclus all-inclusive ou 50-80€',
          specialty: 'Cuisine fusion raffinée, vins premium. Ambiance élégante. Meilleur resto Belle Mare.'
        },
        {
          name: 'Lakaze (Lux* Belle Mare)',
          type: 'Créole moderne',
          priceRange: 'Inclus all-inclusive ou 40-70€',
          specialty: 'Cuisine créole revisitée, produits locaux. Décor contemporain tropical.'
        },
        {
          name: 'Beach Rouge (Lux* Belle Mare)',
          type: 'Beach club-Asian fusion',
          priceRange: 'Inclus all-inclusive ou 45-75€',
          specialty: 'Pieds dans le sable, sushis, wok, cocktails. Ambiance lounge, DJ.'
        },
        {
          name: 'Le Bazar (Long Beach)',
          type: 'International buffet',
          priceRange: 'Inclus all-inclusive',
          specialty: 'Buffets thématiques (créole, italien, asiatique). Stations live cooking.'
        },
        {
          name: 'Deer Hunter (Shangri-La)',
          type: 'Grillades-Gibier',
          priceRange: 'Inclus all-inclusive ou 60-90€',
          specialty: 'Viandes premium, gibier, vins. Ambiance chic safari.'
        },
        {
          name: 'Symon\'s (Trou d\'Eau Douce - 15 min)',
          type: 'Fruits de mer créole',
          priceRange: '20-40€',
          specialty: 'Poissons, langoustes, curry. Rare resto indépendant accessible. Vue mer.'
        }
      ],

      localSpecialties: [
        'Poisson frais grillé créole : spécialité côte est, pêche locale quotidienne',
        'Langouste Belle Mare : fraîche, grillée ou curry (40-60€/personne)',
        'Vindaye poisson : marinade moutarde-curcuma, plat créole typique',
        'Palm heart salad : cœur palmiste, salade locale rafraîchissante',
        'Curry créole : poulet, agneau ou poisson, épices locales',
        'Rhum arrangé maison : infusions fruits/épices, digestif local',
        'Alouda : dessert liquide mauricien (lait, agar-agar, sirop)'
      ],

      budgetMeals: 'Budget meals impossible Belle Mare (pas infrastructures). All-inclusive resorts = seule option. Snacks plage resorts inclus. Pour économie : apportez snacks/fruits de supermarché Flacq (20 min), mais restos resorts couverts.',

      fineDining: 'Tous resorts 5* offrent gastronomie fine. Tops : Blue Penny Café (Constance, français gastronomique), Deer Hunter (Shangri-La, viandes premium), Lakaze (Lux*, fusion créole). Vins premium, menus dégustation 5-7 plats, service impeccable. Réservez en arrivant (places limitées).'
    },

    beaches: {
      overview: 'Belle Mare possède l\'une des plus longues plages continues de Maurice (10 km). Sable blanc fin poudreux, lagon turquoise protégé, cocotiers alignés. Resorts ont plages privées (transats, service inclus). Plage publique centre Belle Mare accessible gratuitement (parking, ombre filaos).',

      list: [
        {
          name: 'Plage publique Belle Mare',
          description: '⭐ L\'une des plus belles plages de Maurice. 10 km sable blanc poudreux, lagon turquoise peu profond (1-2m), eau cristalline. Filaos pour ombre. Parfait familles, baignade, marche.',
          bestFor: ['Baignade', 'Marche longue plage', 'Familles avec enfants', 'Photos de rêve', 'Snorkeling'],
          facilities: ['Parking gratuit', 'Toilettes publiques', 'Ombre filaos', 'Accès facile', 'Pas de restos (apportez pique-nique)'],
          access: 'Route côtière B28, parking centre Belle Mare. Libre accès gratuit.'
        },
        {
          name: 'Plages privées resorts',
          description: 'Sections privées devant chaque resort. Transats, parasols, serviettes inclus. Service plage (commandes boissons/snacks). Équipements sports nautiques gratuits (kayak, paddle, snorkeling).',
          bestFor: ['Confort total', 'Service', 'Sports nautiques inclus', 'Calme'],
          facilities: ['Transats', 'Parasols', 'Serviettes', 'Service bar/snack', 'Kayak/paddle gratuit', 'Douches', 'Vestiaires'],
          access: 'Réservé clients resorts'
        },
        {
          name: 'Palmar Beach (sud)',
          description: 'Extension sud Belle Mare. Moins fréquentée, très belle. Resorts Veranda, Emeraude. Plage publique accessible. Snorkeling excellent (coraux proches).',
          bestFor: ['Calme', 'Snorkeling', 'Moins de monde', 'Nature préservée'],
          facilities: ['Parking', 'Ombre naturelle', 'Accès libre'],
          access: '5 km au sud Belle Mare centre, route côtière'
        },
        {
          name: 'Île Mangénie (Shangri-La)',
          description: 'Îlot privé à 300m au large (face Shangri-La). Accessible bateau navette clients. Plage paradisiaque déserte, restaurant, bar. Excursion journée idyllique.',
          bestFor: ['Exclusivité', 'Robinson', 'Romantisme', 'Snorkeling'],
          facilities: ['Restaurant', 'Bar', 'Transats', 'Navette bateau incluse'],
          access: 'Réservé clients Shangri-La Le Touessrok'
        }
      ]
    },

    transport: {
      howToGetThere: 'Depuis aéroport SSR : Taxi (50 min, 2000-2500 Rs = 45-55€, négociez). Voiture location (A1 puis route côtière, 45 km). Transfert privé pré-réservé (50-70€, recommandé, resorts organisent souvent). Bus public (peu pratique, 2h+ avec changements).',

      gettingAround: 'Resorts = séjours sur place (tout inclus, plage privée). Voiture recommandée si sorties prévues (Île aux Cerfs, villages, autres régions). Locations possible resorts (40-60€/j). Taxis rares (appelez en avance).',

      carRental: 'Utile pour sorties mais pas indispensable si all-inclusive + excursions resort. Location 30-50€/jour. Agences livrent resorts. Essence : station Flacq (15 km). Conduite à gauche. Permis français valide.',

      publicTransport: 'Bus publics passent route principale (B28) vers Flacq, Port-Louis, Mahébourg. Arrêts à 1-2 km resorts (marche). Horaires limités, peu pratiques. Économique (30-50 Rs) mais inconfortable avec affaires plage.',

      taxi: 'Taxis rares à Belle Mare (zone resorts). Appelez en avance : +230 5257 xxxx (hôtel fournit numéros). Tarifs : Belle Mare-Trou d\'Eau Douce 300-500 Rs. Belle Mare-Mahébourg 800-1200 Rs. Belle Mare-Aéroport 2000-2500 Rs. Négociez AVANT.',

      parking: 'Parking gratuit resorts (clients). Parking gratuit plage publique Belle Mare centre (capacité limitée, arrivez tôt). Pas de parking payant (zone non urbaine).'
    },

    nightlife: {
      overview: 'Vie nocturne Belle Mare = limitée aux bars lounges des resorts. Ambiance décontractée chic : cocktails, musique live, DJ sets dîners. Pas de clubs, casinos. Pour vie nocturne animée : Grand Baie (1h voiture, 50 km).',

      venues: [
        {
          name: 'Beach Rouge Bar (Lux* Belle Mare)',
          type: 'Beach lounge',
          description: 'Pieds dans sable, DJ sets électro-chill, cocktails signature. Ambiance Ibiza-tropical. Sunset drinks (17-19h) populaires. Clients externes acceptés (réservez).'
        },
        {
          name: 'Le Bar (Constance Belle Mare)',
          type: 'Lounge bar',
          description: 'Bar piano, cocktails classiques, ambiance feutrée. Cigares, rhums premium. Clientèle mature, élégante. Soirées jazz occasionnelles.'
        },
        {
          name: 'The Diva Bar (Shangri-La)',
          type: 'Lounge chic',
          description: 'Bar design, cocktails créatifs, tapas. Vue lagon. DJ week-ends. Clientèle internationale jeune-adulte.'
        },
        {
          name: 'Bars plage resorts',
          type: 'Beach bars',
          description: 'Bars plage chaque resort : cocktails, bières, smoothies. Service transats. Fermeture 22-23h. Ambiance décontractée.'
        }
      ]
    },

    shopping: {
      overview: 'Shopping Belle Mare quasi inexistant (zone resorts préservée). Boutiques dans resorts : souvenirs, vêtements plage, bijoux (prix élevés). Pour shopping : Flacq (marché mercredi, 15 km), Mahébourg (30 km), Port-Louis (1h).',

      spots: [
        {
          name: 'Boutiques resorts',
          type: 'Souvenirs-Mode plage',
          bestFor: 'Pareos, maillots, souvenirs, crèmes solaires, bijoux. Prix élevés (20-30% vs extérieur). Pratique mais pas économique.'
        },
        {
          name: 'Marché de Flacq (mercredi)',
          type: 'Marché local',
          bestFor: 'Fruits, légumes, épices, tissus, artisanat. Authentique, prix locaux. 15 min voiture Belle Mare.'
        },
        {
          name: 'Super U Flacq',
          type: 'Supermarché',
          bestFor: 'Courses, produits locaux, snacks, alcool hors resort (économie). 15 min voiture. Parking gratuit.'
        },
        {
          name: 'Mahébourg (30 min)',
          type: 'Village artisanal',
          bestFor: 'Marché lundi, artisanat, modèles bateaux, vêtements. Plus authentique, prix négociables.'
        }
      ]
    },

    itineraries: [
      {
        duration: '1 jour',
        title: 'Journée parfaite Belle Mare (non-résident)',
        days: [
          {
            day: 1,
            morning: '8h : Arrivée plage publique Belle Mare (parking gratuit). Installation sous filaos (ombre naturelle). 8h30-11h : Baignade lagon turquoise, marche plage (10 km disponibles), snorkeling (apportez masque ou louez village). Relaxation totale, photos.',
            afternoon: '12h : Pique-nique apporté (pas restos plage publique) OU retour Trou d\'Eau Douce (15 min) déjeuner Symon\'s (20-40€). 13h30-15h30 : Retour plage, sieste sous palmiers, nouvelle baignade. Marche vers nord (direction resorts, plage sublime).',
            evening: '16h : Excursion Île aux Cerfs si temps (bateau Trou d\'Eau Douce, 10€ A/R) OU continuation détente Belle Mare. 17h30 : Départ avant sunset (ou restez photos lumière dorée). Dîner Trou d\'Eau Douce (créole local 10-20€).'
          }
        ]
      },
      {
        duration: '3 jours',
        title: 'Week-end luxe Belle Mare',
        days: [
          {
            day: 1,
            morning: 'Arrivée resort (check-in 14h), transfert aéroport organisé (50-70€). Accueil champagne, visite resort, installation villa/suite. Exploration infrastructures (piscines, plage, restaurants).',
            afternoon: 'Déjeuner buffet resort. Après-midi plage privée : transats, baignade, kayak/paddle inclus. Initiation sports nautiques (catamaran, windsurf). Lecture, détente.',
            evening: '18h : Apéritif sunset bar plage. 20h : Dîner restaurant gastronomique resort (inclus all-inclusive, réservez). Balade nocturne plage. Coucher tôt (récupération voyage).'
          },
          {
            day: 2,
            morning: 'Réveil tardif, petit-déjeuner à la carte. 9h-12h : Excursion Île aux Cerfs organisée resort (60-80€) : catamaran, BBQ, snorkeling, activités nautiques. OU golf Belle Mare Plage 18 trous (green fee inclus certains forfaits).',
            afternoon: '14h : Retour resort, déjeuner léger. 15h-17h : Spa resort (massage couple 200€, réservez en arrivant). Piscine, relaxation.',
            evening: '19h : Cocktails lounge bar (DJ set). 20h30 : Dîner restaurant thématique (asiatique, italien, créole). Soirée tranquille, bar piano.'
          },
          {
            day: 3,
            morning: 'Dernière matinée plage : baignade, snorkeling récif (coraux, poissons). Photos souvenirs. Brunch tardif (resorts offrent souvent si départ après-midi).',
            afternoon: 'Check-out 12h (négociez late check-out si vol soir, souvent gratuit). Dernier déjeuner resort. Spa express ou piscine. 14-15h : Transfert aéroport OU continuation vers autre région Maurice.',
            evening: 'Vol retour OU arrivée nouvelle destination.'
          }
        ]
      },
      {
        duration: '1 semaine',
        title: 'Semaine all-inclusive Belle Mare luxe',
        days: [
          {
            day: 1,
            morning: 'Arrivée aéroport, transfert privé resort (50-70€, 50 min). Check-in, installation suite/villa. Exploration resort complet (6-7 restaurants, 3-4 piscines, plage, spa, club enfants si famille).',
            afternoon: 'Déjeuner buffet. Après-midi acclimatation plage privée : baignade lagon, transats, service cocktails. Initiation sports inclus (kayak, paddle, snorkeling).',
            evening: 'Dîner restaurant italien resort. Spectacle live ou musique. Coucher tôt (décalage horaire).'
          },
          {
            day: 2,
            morning: 'Matinée 100% plage/piscine : détente totale, lecture, baignade. Snorkeling équipement gratuit (masque, palmes). Cours windsurf inclus (certains resorts).',
            afternoon: 'Déjeuner grill plage. Après-midi excursion GRSE + Cascade (40€) : pirogue, singes, baignade cascade forêt. Retour 17h.',
            evening: 'Douche, apéritif bar. Dîner gastronomique français (réservé). Soirée lounge DJ.'
          },
          {
            day: 3,
            morning: 'Golf Belle Mare Plage 18 trous (green fee inclus forfait ou 100-150€) : parcours exceptionnel, links face océan. OU excursion Île aux Cerfs catamaran (60-80€).',
            afternoon: 'Déjeuner clubhouse golf OU BBQ Île aux Cerfs. Retour resort 15h. Piscine, détente.',
            evening: 'Spa (massage 90 min 100-150€). Dîner asiatique. Soirée tranquille.'
          },
          {
            day: 4,
            morning: 'Excursion dauphins Tamarin (départ 5h30, 70€, réservez J-2) : nage dauphins, snorkeling Crystal Rock, plage Bénitiers. Petit-déjeuner bateau.',
            afternoon: 'Retour 13h. Déjeuner resort. Sieste, récupération réveil matinal. Piscine.',
            evening: 'Dîner créole. Soirée spectacle séga (danse traditionnelle).'
          },
          {
            day: 5,
            morning: 'Journée libre resort : rotation piscines, plage, sports (tennis, beach volley inclus). Lecture, farniente total.',
            afternoon: 'Cours cuisine créole resort (certains proposent, gratuit). Déjeuner buffet thématique. Plage.',
            evening: 'Dîner gastronomique viandes (Deer Hunter type). Cigares, rhums bar. Nuit étoilée plage.'
          },
          {
            day: 6,
            morning: 'Excursion Île Plate/Coin de Mire nord (90€, journée) : catamaran, snorkeling exceptionnel, déjeuner BBQ îlot. OU visite sud île (Blue Bay snorkeling + Gris Gris cliffs).',
            afternoon: 'Continuation excursion. Retour 16h. Dernière session spa ou plage.',
            evening: 'Dîner spécial dernière soirée (homard, langouste). Photos sunset plage. Balade romantique.'
          },
          {
            day: 7,
            morning: 'Matinée libre : dernière baignade, photos, achats boutique resort (souvenirs). Brunch tardif.',
            afternoon: 'Check-out 12h. Transfert aéroport 14-15h (vol soir) OU extension autre région.',
            evening: 'Vol retour OU continuation voyage Maurice.'
          }
        ]
      }
    ],

    budget: {
      overview: 'Budget Belle Mare = premium. Resorts all-inclusive 150-600€/nuit. Difficile faire économie (isolement, infrastructures uniquement resorts). Budget minimal 180-250€/jour/personne (resort mid-range all-inclusive). Luxe 400-800€/jour.',

      daily: {
        budget: {
          total: 'Non applicable',
          accommodation: 'Pas hébergement économique Belle Mare',
          food: 'Restaurants hors resorts inexistants',
          activities: 'Accès plage publique gratuit (seule option économique)',
          transport: 'Voiture location 30€/j minimum'
        },
        midRange: {
          total: '180-280€/jour',
          accommodation: '150-230€ resort 4* all-inclusive (Ambre, Emeraude)',
          food: 'Inclus all-inclusive (sinon 60-100€/j)',
          activities: '20-50€ excursions optionnelles',
          transport: '10-20€ essence/taxi'
        },
        luxury: {
          total: '400-800€/jour',
          accommodation: '300-600€ resort 5* all-inclusive (Constance, Lux*, Shangri-La)',
          food: 'Inclus all-inclusive (gastronomie premium)',
          activities: '100-250€ golf, spa, excursions privées',
          transport: '20-40€ voiture premium, transferts privés'
        }
      },

      savingTips: [
        'Hors saison (avril-mai) : réductions resorts 30-40% (180€ vs 300€/nuit)',
        'Réservez tôt : offres early bird -15-25%',
        'All-inclusive = rentabilité (isolement, restaurants limités hors resorts)',
        'Comparé demi-pension : économie nulle (pas restaurants extérieurs accessibles)',
        'Resorts sud (Palmar) moins chers que nord (120-250€ vs 300-600€)',
        'Packages lune de miel : surclassement, spa gratuit (demandez)',
        'Golf : inclus certains forfaits (vs 100-150€ green fee)',
        'Excursions : réservez hors resort = -20-30% (agences Trou d\'Eau Douce)',
        'Sports nautiques inclus resorts : profitez max (kayak, paddle, snorkeling)',
        'Évitez boutiques resorts (prix x2-3 vs extérieur)',
        'Apportez livre, jeux : animations resort gratuites suffisent',
        'Minibar : vérifiez si inclus (certains all-inclusive oui, économie 10-20€/j)'
      ]
    },

    practical: {
      whatToBring: [
        'Maillots de bain (3-4, changements fréquents)',
        'Tenues légères (shorts, robes, lin respirant)',
        'Tenue habillée (dîners gastronomiques resorts, dress code)',
        'Chaussures eau/sandales (coraux, oursins)',
        'Lunettes soleil polarisées (réverbération intense)',
        'Crème solaire SPF50+ waterproof REEF SAFE',
        'Chapeau/casquette large bord',
        'Rashguard anti-UV (sports nautiques)',
        'Masque + tuba si vous avez (inclus resorts mais confort perso)',
        'Appareil photo waterproof/GoPro',
        'Liseuse/livres (farniente plage)',
        'Adaptateur prise UK (Maurice = prises anglaises 3 broches)',
        'Anti-moustique (soirées, surtout nov-avril)',
        'Petite trousse pharmacie (paracétamol, anti-diarrhée)',
        'Carte bancaire + cash (pourboires, achats hors resort)'
      ],

      services: {
        atm: 'Pas de DAB à Belle Mare (zone resorts). DAB plus proches : Flacq (15 km, MCB et SBM) ou Trou d\'Eau Douce (10 km). Retirez avant arrivée ou cash at front desk resorts (commission élevée 5-7%).',
        medical: 'Cliniques privées resorts Belle Mare (consultations clients, médecin sur appel). Pharmacie Flacq (15 km). Hôpital public Flacq (20 min). Urgences : SAMU 114, resorts organisent transferts.',
        wifi: 'WiFi gratuit tous resorts (chambres + espaces communs). Débit excellent (4G fiber). Carte SIM locale utile sorties hors resort (10€/10Go aéroport).',
        phone: 'Réseau 4G excellent Belle Mare. Roaming Europe cher (5-15€/j). Carte SIM locale recommandée : Emtel ou MyT (aéroport ou Flacq, 10€ pour 10Go valable 30j).'
      },

      safety: [
        'Soleil extrême : crème SPF50+ toutes 2h, réappliquez après baignade',
        'Hydratation : 2-3L eau/jour minimum (chaleur + mer déshydratent)',
        'Lagon calme mais : surveillez enfants (profondeur augmente vers récif)',
        'Coraux : ne touchez pas (urticants), chaussures eau recommandées',
        'Oursins : rares mais possibles zones rocheuses (chaussures)',
        'Méduses : rares Belle Mare (récif protège) mais possibles nov-mars',
        'Coups de soleil : même ciel couvert UV intenses (protection toujours)',
        'Alcool all-inclusive : hydratez entre cocktails (soleil + alcool dangereux)',
        'Objets valeur : coffre chambre (vols rares mais plage = opportuniste)',
        'Enfants piscines : surveillez (profondeurs variables)',
        'Sports nautiques : écoutez instructeurs, gilets obligatoires',
        'Route vers Belle Mare : conduite à gauche, attention virages (nuit)'
      ],

      emergency: 'Police : 112. SAMU : 114. Pompiers : 115. Police Flacq : +230 413 3216. Garde-côtes : 213 5151. Clinique Constance Belle Mare : +230 402 2600. Clinique Darné (privée Port-Louis, 1h) : +230 601 2300.'
    },

    tips: [
      '🏨 All-inclusive = INDISPENSABLE Belle Mare (isolement, restaurants rares hors resorts)',
      '⛳ Golf Belle Mare = parcours top Maurice, réservez 2-3j avant (quotas)',
      '📸 Photos plage publique : 7-8h (lumière douce, personne) ou 17h (sunset)',
      '🏖️ Plage 10 km : marche matinale/jogging sublime (quasi désert 6-8h)',
      '🤿 Snorkeling : récif 200m au large (profondeur 3-5m), coraux + poissons',
      '🚤 Île aux Cerfs : transferts resorts organisés (60-80€ vs 10€ bateau public)',
      '💆 Spa : réservez en arrivant (places limitées, complets vite)',
      '🍽️ Restaurants resorts : réservez en arrivant (gastronomiques = sur résa)',
      '🏊 Marée : lagon peu profond (1-2m), pas d\'impact significatif baignade',
      '📅 Meilleure période : mai-juin ou sept-oct (sec, mer calme, pas foule)',
      '☀️ Protection solaire REEF SAFE : coraux fragiles (Maurice sensibilise)',
      '💰 Pourboires : inclus all-inclusive mais geste apprécié (serveurs 5-10€/semaine)',
      '📱 WiFi excellent : restez connectés (partage photos instantané)',
      '🎣 Pêche au gros : excursions possibles (150-300€/personne, réservez tôt)',
      '👶 Familles : clubs enfants inclus resorts (animations, babysitting payant)'
    ],

    culture: {
      overview: 'Belle Mare zone touristique récente (développement 1990s-2000s). Avant = champs canne à sucre + forêts. Resorts construits préservant environnement maximal (low density). Nom "Belle Mare" origine français colonial (belle lagune). Plage publique Belle Mare = fierté mauricienne, classée top mondial régulièrement. Golf Belle Mare Plage inauguré 1994, premier championship course île. Zone reste préservée : réglementations strictes gouvernement (hauteur bâtiments, densité, espaces verts). Économie locale = resorts + services touristiques (guides, pêcheurs, artisans). Population locale travaille resorts ou Flacq (15 km).',

      events: [
        'Tournois golf Belle Mare (mars-avril, international amateur)',
        'Kite festival Belle Mare (août, cerf-volant, plage publique)',
        'Célébrations resorts (Noël, Nouvel An, galas privés)',
        'Régates catamaran côte est (septembre-octobre)'
      ],

      etiquette: [
        'Resorts : dress code dîners gastronomiques (pantalon/robe, pas shorts/tongs)',
        'Plages : maillot bain OK plage, couvrez-vous restaurants (short + t-shirt min)',
        'Pourboires : non obligatoires (inclus all-inclusive) mais appréciés bons services',
        'Personnel : toujours poli, merci (créoles très courtois, apprécient respect)',
        'Buffets : ne gaspillez pas (prenez petites portions, revenez si faim)',
        'Environnement : crème solaire REEF SAFE (protection coraux récifs)',
        'Plage publique : ramassez déchets (préservation site classe mondiale)',
        'Snorkeling : NE touchez PAS coraux (fragiles, protégés, urticants)',
        'Photos : demandez autorisation personnel/autres clients (respect vie privée)',
        'Tenue : topless toléré plages privées resorts, évitez plage publique (Mauriciens conservateurs)',
        'Bruit : respectez tranquillité (musique modérée, pas cris piscines)',
        'Réservations : respectez horaires restaurants (retards = perte table)',
        'Sports inclus : rendez matériel bon état (kayak, paddle, raquettes)',
        'Personnel : ne monopolisez pas (service équitable tous clients)',
        'Excursions : soyez ponctuels (départs fixes, groupe attend)'
      ]
    }
  },

  'trou-aux-biches': {
    slug: 'trou-aux-biches',
    name: 'Trou aux Biches',
    title: 'Que faire à Trou aux Biches',
    metaTitle: 'Trou aux Biches Maurice : plage sublime, snorkeling avec tortues, resorts',
    metaDescription: 'Trou aux Biches nord-ouest : plage magnifique de 2 km, snorkeling exceptionnel avec tortues, resorts familiaux, restaurants et activités pour votre séjour.',
    heroImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/03/ile-maurice-voyage-scaled.jpg',

    intro: 'Trou aux Biches est un petit paradis balnéaire du nord-ouest mauricien, célèbre pour sa plage sublime classée parmi les plus belles de l\'île. À seulement 5 km de Grand Baie, ce village préservé offre le parfait compromis : plage de rêve pour familles, snorkeling exceptionnel avec tortues marines, ambiance tranquille mais accès facile aux animations de Grand Baie.',

    highlights: [
      'Plage de 2 km classée top Maurice : sable blanc fin, lagon turquoise',
      'Snorkeling exceptionnel avec tortues marines quasi garanties',
      'Lagon peu profond idéal familles avec enfants (1-2m sur 100m)',
      'Ambiance calme familiale vs Grand Baie animé (5 km)',
      'Excellent choix hébergements (guesthouses à resorts 5*)',
      'Restaurants de qualité, créoles et internationaux',
      'Proximité Grand Baie (5 min voiture) pour shopping et vie nocturne'
    ],

    description: 'Trou aux Biches s\'étire sur la côte nord-ouest entre Mont Choisy au sud et Pointe aux Piments au nord, à 5 km de Grand Baie et 25 km de l\'aéroport. Le village s\'organise autour de sa magnifique plage publique de 2 km : sable blanc poudreux, lagon turquoise peu profond protégé par le récif (700m au large), filaos centenaires offrant ombre naturelle. L\'eau cristalline reste peu profonde (1-2m) sur 100 mètres, créant une piscine naturelle sécurisée pour les enfants. Le snorkeling à Trou aux Biches est légendaire : tortues marines visibles quotidiennement près du récif, coraux colorés, poissons tropicaux par centaines. L\'ambiance du village est résolument familiale et paisible : Mauriciens locaux viennent le week-end pique-niquer en famille, touristes cherchant calme vs effervescence Grand Baie. Infrastructure bien développée mais discrète : guesthouses, hôtels moyens gamme, quelques resorts 4-5*, restaurants le long de la plage.',

    bestMonths: ['mai', 'juin', 'septembre', 'octobre', 'novembre'],

    weatherByMonth: {
      'mai': 'Parfait : 26°C, sec, eau 25°C, vent modéré, visibilité snorkeling excellente',
      'juin': 'Excellent : 24°C, sec, eau 24°C, mer calme, idéal familles',
      'septembre': 'Idéal : 25°C, très sec, eau 24°C, meilleure visibilité sous-marine',
      'octobre': 'Parfait : 26°C, sec, eau 25°C, conditions optimales',
      'novembre': 'Très bon : 28°C, début été, eau 26°C chaude, peu pluie encore'
    },

    coordinates: { lat: -20.0333, lng: 57.5500 },
    nearbyLocations: ['grand-baie', 'mont-choisy', 'pointe-aux-piments'],
    distanceFromAirport: '25 km (30 min en voiture)',

    accommodation: {
      overview: 'Trou aux Biches offre excellent choix hébergements tous budgets : guesthouses économiques (40-80€), hôtels milieu gamme (80-180€), resorts 4-5* (180-500€). Plage publique accessible partout à pied (5-10 min max). Réservez 2 mois en avance haute saison (juillet-août).',

      zones: [
        {
          name: 'Front de mer Trou aux Biches',
          description: 'Le long de la plage publique. Guesthouses, petits hôtels, resorts. Accès direct plage sublime. Restaurants nombreux. Ambiance calme mais vivante. Idéal pour séjour centré plage.',
          priceRange: '50-300€/nuit',
          bestFor: 'Familles, couples, tous ceux voulant plage à 2 min à pied',
          pros: [
            'Plage sublime à 50-200m à pied',
            'Tous budgets : guesthouses (50-80€) à resorts (200-300€)',
            'Restaurants, supérettes, services à pied',
            'Snorkeling équipement location sur place',
            'Ambiance authentique, locale le week-end',
            'Filaos pour ombre naturelle plage'
          ],
          cons: [
            'Quelques hébergements bruyants week-end (familles mauriciennes)',
            'Parking limité plage (arrivez tôt)',
            'Certains guesthouses basiques (vérifiez avis)',
            'Pas de vie nocturne (Grand Baie à 5 km pour ça)'
          ]
        },
        {
          name: 'Trou aux Biches Resort & Spa (luxe)',
          description: 'Resort 5* Beachcomber iconique. Plage privée, 200 chambres/villas, 5 restos, spa, golf. Référence luxe Trou aux Biches. All-inclusive ou demi-pension.',
          priceRange: '250-600€/nuit',
          bestFor: 'Couples, lunes de miel, familles aisées cherchant luxe absolu',
          pros: [
            'Resort 5* de légende (service impeccable)',
            'Plage privée sublime, piscines multiples',
            'Restaurants gastronomiques, spa world-class',
            'Kids club premium (familles)',
            'Sports nautiques, golf, animations inclus',
            'Ambiance raffinée mais décontractée'
          ],
          cons: [
            'Prix élevé (250-600€/nuit)',
            'Grande taille resort (200 chambres, moins intimiste)',
            'All-inclusive cher (mais vaut coût)',
            'Clientèle internationale (moins authentique)'
          ]
        },
        {
          name: 'Arrière-pays proche (Royal Road)',
          description: 'À 500m-1km de la plage, le long de la route principale. Guesthouses, Airbnb, petits hôtels. Plus économique, 10 min marche plage. Commerces, restaurants locaux.',
          priceRange: '40-100€/nuit',
          bestFor: 'Petits budgets, routards, ceux ne voulant pas dépenser hébergement',
          pros: [
            'Prix abordables (40-80€ guesthouse)',
            'Ambiance locale authentique',
            'Supermarchés, restaurants créoles pas chers',
            'Bus publics faciles (Grand Baie, Port-Louis)',
            '10 min marche plage (acceptable)'
          ],
          cons: [
            'Pas de vue mer',
            'Hébergements parfois basiques',
            'Bruit route principale possible',
            'Marche quotidienne vers plage (10 min)'
          ]
        },
        {
          name: 'Mont Choisy (2 km sud)',
          description: 'Village voisin immédiat. Plage Mont Choisy aussi belle que Trou aux Biches (2 km sable blanc). Moins développé, plus calme. Bon compromis budget-tranquillité.',
          priceRange: '50-180€/nuit',
          bestFor: 'Ceux cherchant encore + calme, bonnes affaires hébergement',
          pros: [
            'Plage Mont Choisy magnifique (moins connue)',
            'Moins touristique, plus authentique',
            'Prix légèrement - chers que Trou aux Biches',
            '2 km Trou aux Biches (5 min voiture/vélo)',
            'Grand Baie à 7 km (10 min)'
          ],
          cons: [
            'Moins de restaurants/services',
            'Voiture/vélo recommandé',
            'Animations limitées',
            'Moins de choix hébergements'
          ]
        }
      ],

      bookingTips: [
        'Front de mer = best (plage sublime à 2 min, vaut légère sur-dépense)',
        'Guesthouses : excellent rapport qualité-prix (50-80€, clean, proprio accueillant)',
        'Réservez 2 mois+ en avance juillet-août (complet rapidement)',
        'Hors saison (avril-mai) : négociez -20-30% (demandez directement)',
        'Vérifiez distance plage (annonces parfois imprécises, max 10 min marche OK)',
        'Airbnb très développé : apparts équipés dès 50€/nuit',
        'Resort Trou aux Biches : splendide mais cher (250-600€), all-inclusive rentable',
        'Week-ends mauriciens (samedi-dimanche) : plage bondée locaux, hébergements pleins',
        'Demandez chambre côté jardin si sensible bruit (famille week-end)',
        'Petit-déjeuner : souvent inclus guesthouses (économie 10€/j)'
      ]
    },

    dining: {
      overview: 'Trou aux Biches offre belle sélection restaurants : créoles authentiques, fruits de mer frais, internationaux. Prix raisonnables (10-40€/repas). Concentration le long plage et Royal Road. Réservez le week-end (très fréquenté).',

      restaurants: [
        {
          name: 'Le Pescatore',
          type: 'Italien-Fruits de mer',
          priceRange: '20-45€',
          specialty: 'Pizzas four à bois, pâtes maison, poissons frais. Vue lagon, pieds dans le sable. Institution Trou aux Biches depuis 1990.'
        },
        {
          name: 'Ocean Restaurant (Trou aux Biches Resort)',
          type: 'Gastronomique français',
          priceRange: '40-80€',
          specialty: 'Cuisine française raffinée, vins premium. Cadre luxueux. Ouvert non-résidents (réservez absolument).'
        },
        {
          name: 'La Demeure Saint Antoine',
          type: 'Créole-Fusion',
          priceRange: '25-50€',
          specialty: 'Cuisine créole revisitée, produits locaux. Maison coloniale restaurée, jardin tropical. Romantique.'
        },
        {
          name: 'Le Brisket',
          type: 'Grillades-BBQ',
          priceRange: '15-35€',
          specialty: 'Viandes, burgers gastronomiques, ribs. Ambiance conviviale. Portions généreuses.'
        },
        {
          name: 'Happy Crocodile',
          type: 'Créole-Chinois',
          priceRange: '10-25€',
          specialty: 'Mine frite, nouilles, curry créole. Cuisine fusion locale. Prix doux, portions copieuses.'
        },
        {
          name: 'Caravelle Restaurant',
          type: 'Fruits de mer',
          priceRange: '18-40€',
          specialty: 'Poisson frais, poulpe, calamars grillés. Terrasse vue mer. Ambiance familiale.'
        },
        {
          name: 'L\'Assiette du Nord',
          type: 'Créole authentique',
          priceRange: '8-18€',
          specialty: 'Rougaille, vindaye, carry. Cuisine créole comme à la maison. Best rapport qualité-prix.'
        }
      ],

      localSpecialties: [
        'Poisson grillé créole : frais du jour, rougaille, riz (spécialité locale)',
        'Poulpe vindaye : poulpe mariné moutarde-curcuma, plat typique nord',
        'Dholl puri : galette lentilles, snack #1 mauricien (50-80 Rs)',
        'Mine frite : nouilles sautées légumes-viande, influence chinoise',
        'Gâteaux piments : beignets lentilles apéritif (street food)',
        'Briani : riz épicé viande, influence indienne',
        'Alouda : boisson dessert locale (lait, agar-agar, sirop)'
      ],

      budgetMeals: 'Snacks plage : samoussas, gâteaux piments, dholl puri 50-150 Rs (1-3€). Gargotes Royal Road : rougaille-riz 5-10€. Supermarché Super U : courses pour cuisiner (si appart). Food courts pas nombreux mais L\'Assiette du Nord = créole pas cher.',

      fineDining: 'Ocean Restaurant (Trou aux Biches Resort, français gastronomique 40-80€), La Demeure Saint Antoine (fusion créole raffinée, maison coloniale), Le Pescatore (italien haut de gamme, vue lagon).'
    },

    beaches: {
      overview: '⭐ Trou aux Biches possède l\'UNE DES PLUS BELLES PLAGES DE MAURICE. 2 km de sable blanc fin, lagon turquoise peu profond, filaos centenaires. Parfait familles (eau calme 1-2m), snorkeling (tortues quasi garanties), détente (ambiance paisible).',

      list: [
        {
          name: 'Plage publique Trou aux Biches',
          description: '⭐⭐⭐ L\'une des plus belles plages continues de Maurice. 2 km sable blanc poudreux, eau turquoise cristalline, lagon peu profond (1-2m sur 100m). Filaos majestueux ombre naturelle. Parfait TOUS : familles (sécurité enfants), couples (romantisme), snorkeleurs (tortues + coraux).',
          bestFor: ['Familles avec jeunes enfants', 'Snorkeling avec tortues', 'Baignade sécurisée', 'Marche/jogging', 'Photos de rêve', 'Détente'],
          facilities: ['Parking gratuit (limité, arrivez tôt)', 'Toilettes publiques', 'Douches', 'Restaurants nombreux', 'Location kayak/paddle/snorkeling', 'Filaos ombre', 'Poubelles'],
          access: 'Centre Trou aux Biches, accès multiple le long plage. Parking principal face Super U.'
        },
        {
          name: 'Zone snorkeling récif (200m au large)',
          description: '⭐ Zone snorkeling légendaire. 200m nage depuis plage, profondeur 2-4m. Coraux colorés, poissons tropicaux (centaines espèces), TORTUES MARINES quasi quotidiennes (80% chance). Eau cristalline visibilité 15-20m.',
          bestFor: ['Snorkeling', 'Observation tortues', 'Photos sous-marines', 'Découverte récif'],
          facilities: ['Location masques-palmes plage (200-300 Rs)', 'Gilets sauvetage disponibles (gratuit/payant)', 'Guides snorkeling possibles (500 Rs)'],
          access: '200m nage depuis plage (niveau facile). Repérez bouées.'
        },
        {
          name: 'Plage Trou aux Biches Resort (privée)',
          description: 'Section plage privée resort 5*. Transats, parasols, service. Belle mais publique adjacente équivalente qualité (privilégiez publique si non-client).',
          bestFor: ['Clients resort', 'Service plage', 'Calme exclusif'],
          facilities: ['Transats', 'Parasols', 'Service bar-resto', 'Sports nautiques inclus'],
          access: 'Réservé clients resort'
        },
        {
          name: 'Mont Choisy Beach (2 km sud)',
          description: 'Prolongement naturel Trou aux Biches. 2 km supplémentaires sable blanc. Moins fréquentée, aussi belle. Idéal marche longue plage (4 km total Trou aux Biches + Mont Choisy).',
          bestFor: ['Calme', 'Marche longue', 'Moins de monde', 'Pique-nique'],
          facilities: ['Parking gratuit', 'Filaos ombre', 'Quelques restos', 'Moins équipée que Trou aux Biches'],
          access: '2 km marche plage depuis Trou aux Biches OU 5 min voiture'
        }
      ]
    },

    transport: {
      howToGetThere: 'Depuis aéroport SSR : Taxi (30 min, 1500-2000 Rs = 35-45€). Voiture location (A1 Motorway puis M2 côtière, 25 km). Bus public (2h avec changements, peu pratique bagages). Transfert privé pré-réservé (35-45€, recommandé).',

      gettingAround: 'Trou aux Biches compact : plage + restaurants accessibles à pied (10 min max). Vélo excellent (plat, 5€/j location). Voiture utile pour Grand Baie (5 km), excursions, shopping. Marche suffisante si séjour centré plage.',

      carRental: 'Optionnel si séjour 100% Trou aux Biches + plage. Recommandé si exploration île (20-40€/j). Agences locales : ABC Car Hire, Europcar. Permis français valide. Conduite à gauche. Essence : station Trou aux Biches (route principale).',

      publicTransport: 'Bus publics fréquents : Trou aux Biches-Grand Baie (15 min, 25 Rs), Trou aux Biches-Port-Louis (1h, 40 Rs). Pratiques journée, limités soir (dernier 19h). Arrêts Royal Road.',

      taxi: 'Taxis disponibles (appelez vs héler rue). Tarifs : Trou aux Biches-Grand Baie 200-300 Rs, Trou aux Biches-Port-Louis 800-1000 Rs, Trou aux Biches-Aéroport 1500-2000 Rs. Négociez avant montée.',

      parking: 'Parking gratuit plage publique (capacité 40-50 voitures, complet 10-11h week-ends). Parking Super U utilisable. Stationnement Royal Road (gardiens informels 20-50 Rs pourboire). Vélo = meilleur option.'
    },

    nightlife: {
      overview: 'Vie nocturne Trou aux Biches = calme. 2-3 bars locaux, ambiance tranquille. Pour vraie vie nocturne : Grand Baie (5 km, 10 min voiture, taxis facilement). Trou aux Biches = destination détente familiale.',

      venues: [
        {
          name: 'Le Pescatore Bar',
          type: 'Bar-Restaurant',
          description: 'Bar plage, cocktails, bières. Vue lagon. Musique chill. Ferme 23h. Clientèle internationale décontractée.'
        },
        {
          name: 'Trou aux Biches Resort Bars',
          type: 'Bars resort',
          description: 'Plusieurs bars resort 5* : lounge, plage, piscine. Cocktails signature. Souvent ouverts non-résidents. Ambiance chic décontractée.'
        },
        {
          name: 'Bars locaux Royal Road',
          type: 'Bars locaux',
          description: '2-3 bars mauriciens. Bières, rhum local. Ambiance locale, prix doux (bière 80-120 Rs). Ferme 22-23h.'
        }
      ]
    },

    shopping: {
      overview: 'Shopping Trou aux Biches limité : Super U (courses), quelques boutiques souvenirs plage. Pour vrai shopping : Grand Baie (5 km, La Croisette, Sunset Boulevard). Marché Grand Baie mercredi (artisanat, vêtements).',

      spots: [
        {
          name: 'Super U Trou aux Biches',
          type: 'Supermarché',
          bestFor: 'Courses complètes : alimentaire, alcool, produits plage, snacks. Prix corrects. Parking gratuit. Ouvert 8h-20h sauf dimanche 8h-12h.'
        },
        {
          name: 'Boutiques souvenirs plage',
          type: 'Souvenirs',
          bestFor: 'Pareos, t-shirts, maillots, chapeaux. Prix négociables. Qualité moyenne. Pratique mais pas économique.'
        },
        {
          name: 'Grand Baie (5 km)',
          type: 'Shopping complet',
          bestFor: 'La Croisette (mall), Sunset Boulevard, marché mercredi, boutiques. 10 min voiture. Tout type shopping.'
        },
        {
          name: 'Pharmacie Trou aux Biches',
          type: 'Pharmacie',
          bestFor: 'Médicaments, crème solaire, produits hygiène. Pharmacien conseil. Royal Road.'
        }
      ]
    },

    itineraries: [
      {
        duration: '1 jour',
        title: 'Journée parfaite Trou aux Biches',
        days: [
          {
            day: 1,
            morning: '7h30 : Arrivée plage (parking encore disponible, lumière douce photos). Installation serviette sous filaos (ombre naturelle gratuite). 8h-11h : Baignade lagon turquoise, détente. 9h30 : Snorkeling récif (200m nage, tortues marines + coraux + poissons tropicaux). Location masque-palmes 200 Rs ou apportez.',
            afternoon: '12h : Déjeuner Le Pescatore (20-45€, pizzas, pâtes, vue lagon) OU pique-nique sous filaos (courses Super U matin). 13h30-16h : Sieste, lecture, nouvelle baignade. Marche vers Mont Choisy (2 km plage, magnifique). Kayak/paddle location optionnelle (200-300 Rs/h).',
            evening: '16h30 : Photos sunset (lumière dorée sublime). 17h30 : Douche publique, départ. 19h : Dîner L\'Assiette du Nord (créole 8-18€) ou Happy Crocodile (chinois-créole 10-25€). 21h : Soirée tranquille OU direction Grand Baie vie nocturne (5 km).'
          }
        ]
      },
      {
        duration: '3 jours',
        title: 'Week-end Trou aux Biches + Nord',
        days: [
          {
            day: 1,
            morning: 'Arrivée Trou aux Biches, installation guesthouse (50-80€). Courses Super U (eau, snacks, petit-déj). Exploration village à pied.',
            afternoon: 'Première session plage : baignade, snorkeling découverte (repérage zone tortues). Installation routine (meilleur spot ombre, etc).',
            evening: 'Dîner Le Pescatore (italien vue lagon). Coucher tôt (lendemain actif).'
          },
          {
            day: 2,
            morning: '8h-12h : Matinée 100% plage + snorkeling intensif (tortues, exploration récif complet, photos sous-marines). Profitez lagon exceptionnel.',
            afternoon: '13h : Déjeuner pique-nique plage OU resto. 15h-18h : Excursion Grand Baie (5 km voiture/bus) : shopping La Croisette, Sunset Boulevard. Cafés, exploration ville.',
            evening: '19h : Dîner Grand Baie (Lambic, La Rougaille Créole, 50+ choix). 21h : Vie nocturne Grand Baie (Banana Beach Club, Buddha Bar) OU retour Trou aux Biches calme.'
          },
          {
            day: 3,
            morning: 'Excursion catamaran îles nord (70-90€, réservez J-1) : Coin de Mire, Île Plate, snorkeling, BBQ. Départ 9h Grand Baie (5 km). OU journée plage si préférez farniente.',
            afternoon: 'Continuation excursion catamaran (retour 16h). OU après-midi libre : marche Mont Choisy, dernière baignade.',
            evening: 'Dîner La Demeure Saint Antoine (fusion créole, romantique). Préparation départ lendemain.'
          }
        ]
      },
      {
        duration: '1 semaine',
        title: 'Semaine complète base Trou aux Biches',
        days: [
          {
            day: 1,
            morning: 'Arrivée aéroport, voiture location. Route Trou aux Biches (30 min). Installation guesthouse/hôtel. Courses Super U. Exploration village.',
            afternoon: 'Première session plage : acclimatation, baignade lagon. Repérage zone snorkeling.',
            evening: 'Dîner Happy Crocodile (créole-chinois pas cher). Coucher tôt (décalage horaire).'
          },
          {
            day: 2,
            morning: '8h-13h : Journée plage complète. Snorkeling matinal (visibilité max, tortues actives). Baignade, détente sous filaos.',
            afternoon: 'Déjeuner Le Brisket (burgers, grillades). Sieste. Après-midi plage : kayak location, exploration côte.',
            evening: 'Dîner L\'Assiette du Nord (créole authentique). Coucher tranquille.'
          },
          {
            day: 3,
            morning: 'Excursion catamaran îles nord (70-90€) : Coin de Mire, Île Plate, snorkeling exceptionnel, BBQ. Départ Grand Baie 9h (5 km).',
            afternoon: 'Continuation catamaran, retour 16h. Repos guesthouse.',
            evening: 'Soirée Grand Baie : dîner + vie nocturne (Banana Beach, Les Enfants Terribles). Retour taxi Trou aux Biches.'
          },
          {
            day: 4,
            morning: 'Journée libre 100% plage Trou aux Biches. Farniente, snorkeling, lecture. Récupération excursion veille.',
            afternoon: 'Pique-nique plage. Marche longue Mont Choisy (4 km A/R). Paddle.',
            evening: 'Dîner Le Pescatore (italien, pieds sable). Soirée tranquille.'
          },
          {
            day: 5,
            morning: 'Excursion intérieur : Jardin Pamplemousses (20 min voiture, 4€ entrée), nénuphars géants, tortues. Puis Château Labourdonnais (15 min, visite + dégustation rhum).',
            afternoon: 'Déjeuner La Table du Château (gastronomie). Retour Trou aux Biches, plage après-midi.',
            evening: 'Dîner La Demeure Saint Antoine (fusion, maison coloniale). Soirée romantique.'
          },
          {
            day: 6,
            morning: 'Tour ouest en voiture : Flic en Flac (1h sud), plage. Tamarin (dauphins si chance). Casela (parc aventure, optionnel 40€).',
            afternoon: 'Chamarel (terre 7 couleurs 5€, cascade). Retour par Black River (route panoramique). Arrivée Trou aux Biches 17-18h.',
            evening: 'Dîner Caravelle (fruits de mer). Dernière soirée.'
          },
          {
            day: 7,
            morning: 'Dernière matinée plage : baignade, snorkeling adieux tortues, photos souvenirs. Check-out 12h.',
            afternoon: 'Déjeuner plage. Shopping souvenirs Grand Baie (La Croisette). Route aéroport (prévoir 2h avant vol).',
            evening: 'Vol retour OU continuation autre région Maurice.'
          }
        ]
      }
    ],

    budget: {
      overview: 'Budget Trou aux Biches = raisonnable. Hébergement 40-150€/nuit selon confort. Repas 10-40€. Plage gratuite, snorkeling économique (location 200 Rs). Budget 70-100€/j possible (économique), 120-180€/j confort, 250€+ luxe resort.',

      daily: {
        budget: {
          total: '70-100€/jour',
          accommodation: '40-60€ guesthouse',
          food: '15-25€ (pique-niques + 1 resto local)',
          activities: '5-10€ (location snorkeling, bus)',
          transport: '5-10€ (bus, essence si voiture partagée)'
        },
        midRange: {
          total: '120-180€/jour',
          accommodation: '80-130€ hôtel 3*',
          food: '30-50€ (restos tous repas)',
          activities: '30-50€ (excursions, kayak)',
          transport: '10-20€ (voiture location quotidien)'
        },
        luxury: {
          total: '300-600€/jour',
          accommodation: '250-500€ resort 5* Trou aux Biches',
          food: '50-100€ (gastronomie ou inclus all-inclusive)',
          activities: '50-100€ (excursions privées, spa)',
          transport: '20-30€ (voiture premium)'
        }
      },

      savingTips: [
        'Guesthouse vs hôtel : économie 40-80€/nuit (50-80€ vs 120-200€)',
        'Pique-niques plage : économie 15-25€/repas (courses Super U)',
        'Snorkeling : apportez masque-tuba perso (économie 200 Rs location)',
        'Transats : installez serviette sous filaos (gratuit vs 300 Rs location)',
        'Bus publics vs taxi : économie significative (25 Rs vs 300 Rs Grand Baie)',
        'Hors saison (avril-mai) : hébergements -20-30%, négociez',
        'Courses Super U vs restos tous repas : économie 30-50%/jour',
        'Excursions : réservez agences Grand Baie vs resort (économie 20%)',
        'Vélo location vs voiture : économie 15-35€/jour (5€ vs 20-40€)',
        'Plage gratuite vs activités payantes : Trou aux Biches plage suffit largement',
        'Eau robinet potable : apportez gourde (économie bouteilles 50 Rs)',
        'Wifi guesthouse gratuit : économie carte SIM si séjour court'
      ]
    },

    practical: {
      whatToBring: [
        'Maillots de bain (2-3, séchage entre sessions)',
        'Serviettes plage microfibre (filaos donnent ombre mais serviette nécessaire)',
        'Crème solaire SPF50+ waterproof REEF SAFE (coraux protégés)',
        'Masque + tuba (économie location 200 Rs, confort perso)',
        'Lunettes soleil polarisées (réverbération lagon intense)',
        'Chapeau/casquette large bord',
        'Chaussures eau (coraux récif, oursins rares mais possibles)',
        'Rashguard anti-UV (protection snorkeling prolongé)',
        'Appareil photo waterproof/GoPro (photos sous-marines tortues)',
        'Sac étanche petit (téléphone, argent plage)',
        'Livre/liseuse (farniente sous filaos)',
        'Répulsif moustique (soirées, surtout nov-avril)',
        'Adaptateur prise UK (Maurice = prises anglaises)',
        'Gourde réutilisable (eau robinet potable)',
        'Sac courses réutilisable (Super U, écologie)'
      ],

      services: {
        atm: 'DAB au centre Trou aux Biches : MCB (Mauritius Commercial Bank) et SBM (State Bank). Également Grand Baie (5 km, nombreux DAB). Retirez suffisant (frais fixes par retrait).',
        medical: 'Pharmacie Trou aux Biches (Royal Road, conseil pharmacien). Dispensaire public Trou aux Biches (urgences mineures). Clinique Darné Port-Louis (privée, 30 min, urgences sérieuses +230 601 2300). Hôpital public Pamplemousses (20 min).',
        wifi: 'WiFi gratuit plupart guesthouses/hôtels (qualité variable). Restos principaux WiFi clients. Carte SIM 4G recommandée longue durée (10€/10Go aéroport, Emtel ou MyT). Réseau 4G excellent.',
        phone: 'Réseau 4G excellent Trou aux Biches. Roaming Europe cher (5-15€/j). Carte SIM locale : Emtel ou MyT (aéroport, boutiques Grand Baie, Super U parfois). 10€ = 10Go valable 30j.'
      },

      safety: [
        'Soleil intense : crème SPF50+ toutes 2h, même ciel couvert (UV traversent)',
        'Hydratation : 2-3L eau/jour (chaleur + mer + snorkeling déshydratent)',
        'Snorkeling : nagez 200m vers récif (facile), NE touchez PAS coraux (urticants)',
        'Tortues : observez sans déranger (distance 2-3m mini, pas flash photos)',
        'Courants : rares mais possibles passes récif (restez zone délimitée)',
        'Enfants : surveillez (lagon peu profond MAIS profondeur augmente progressivement)',
        'Oursins : rares Trou aux Biches mais possibles zones rocheuses (chaussures eau)',
        'Méduses : très rares (récif protège) mais possibles nov-mars (vinaigre si piqûre)',
        'Objets valeur : ne laissez pas plage sans surveillance (vols opportunistes rares mais existent)',
        'Week-end mauriciens : plage bondée (familles locales), parking complet 10h',
        'Coups de soleil : même ombre filaos UV intenses (protection toujours)',
        'Alcool : hydratez entre cocktails (déshydratation rapide)',
        'Route : conduite à gauche, attention ronds-points (sens inverse Europe)'
      ],

      emergency: 'Police : 112. SAMU : 114. Pompiers : 115. Police Trou aux Biches : +230 265 6891. Garde-côtes : 213 5151. Pharmacie Trou aux Biches : +230 265 5454. Clinique Darné (Port-Louis, urgences 24/7) : +230 601 2300.'
    },

    tips: [
      '🐢 Tortues quasi garanties : nagez 200m vers récif (matinée 8-11h = meilleur moment)',
      '📸 Photos tortues : GoPro/appareil waterproof essentiel, distance respect 2-3m',
      '🏖️ Meilleur spot : centre plage publique (face parking), filaos ombre + accès récif',
      '⏰ Arrivez TÔT week-ends : parking complet 10h, plage bondée familles mauriciennes',
      '🤿 Location snorkeling : 200-300 Rs plage, négociez si plusieurs jours',
      '🚴 Vélo > voiture : village compact, parking limité, économique (5€/j)',
      '🥪 Pique-niques autorisés : courses Super U, installez sous filaos (économie)',
      '☀️ Ombre filaos gratuite : transats inutiles (économie 300 Rs), serviette suffit',
      '🌅 Sunset limite : plage orientée nord-ouest, coucher soleil dans mer (photos OK)',
      '🏊 Marée : lagon reste profond (1-2m) marée basse (pas impact baignade)',
      '🍽️ Le Pescatore = best resto : italien, pieds sable, vue lagon, prix corrects',
      '🚌 Bus Grand Baie : 25 Rs, 15 min, fréquents (économie vs taxi 300 Rs)',
      '💰 Négociez activités : plusieurs loueurs plage concurrents (réduc 10-20%)',
      '🏨 Guesthouse > hôtel : rapport qualité-prix imbattable (50-80€, clean, accueillant)',
      '📅 Meilleure période : sept-oct (sec, mer calme, visibilité snorkeling max)'
    ],

    culture: {
      overview: 'Trou aux Biches doit son nom aux biches (cerfs) qui venaient boire eau douce "trou" (source) sur plage, époque coloniale. Village reste très mauricien : familles locales pique-niquent plage week-ends (tradition forte), préservant ambiance authentique malgré tourisme. Plage publique = fierté locale, classée top mondial régulièrement. Développement touristique contrôlé : hauteur bâtiments limitée, espaces verts préservés. Pêche traditionnelle encore active : pirogues colorées plage, pêcheurs vendent prises matinales. Communauté multiculturelle (créoles, indo-mauriciens, sino-mauriciens) cohabite harmonieusement.',

      events: [
        'Week-ends mauriciens : pique-niques familiaux plage (samedi-dimanche, très animé)',
        'Fêtes religieuses : Cavadee (tamoul, jan-fév), Ganesh Chaturthi (août-sept), célébrées localement',
        'Fête nationale 12 mars : célébrations, concerts plage (Mauriciens nombreux)',
        'Diwali (oct-nov) : fête lumières, villages illuminés, feux artifice plages'
      ],

      etiquette: [
        'Week-ends familiaux : respectez espace pique-niques mauriciens (très nombreux)',
        'Topless : évitez (Mauriciens conservateurs, mal vu plage publique familiale)',
        'Tortues snorkeling : NE touchez PAS, distance 2-3m mini (protection espèce)',
        'Coraux : NE touchez JAMAIS (fragiles, protégés, urticants)',
        'Déchets : ramassez tout (Mauriciens très propres, poubelles disponibles)',
        'Musique : volume modéré (respectez tranquillité autres, surtout Mauriciens)',
        'Photos : demandez permission locaux avant photographier',
        'Pêcheurs : ne dérangez pas travail, achetez poissons si intéressé (frais, pas cher)',
        'Filaos : ne cassez pas branches (arbres protégés, ombre précieuse)',
        'Crème solaire : REEF SAFE uniquement (protection coraux, Maurice sensibilise)',
        'Enfants : surveillez (Mauriciens adorent enfants mais sécurité = responsabilité parents)',
        'Bonjour/Merci : politesse appréciée (créoles très courtois, répondent chaleureusement)',
        'Marchandage : négociez poliment boutiques plage (accepté, pas agressif)',
        'Restaurants : pourboire 10% apprécié bon service (pas obligatoire)',
        'Dimanche : jour famille mauricien (plage très fréquentée, ambiance locale max)'
      ]
    }
  },

  'blue-bay': {
    slug: 'blue-bay',
    name: 'Blue Bay',
    title: 'Que faire à Blue Bay',
    metaTitle: 'Blue Bay Maurice : parc marin protégé, snorkeling, glass bottom boats',
    metaDescription: 'Blue Bay sud-est : parc marin protégé, meilleur snorkeling de Maurice, glass bottom boats, plage tranquille et restaurants pour votre visite.',
    heroImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/03/ile-maurice-voyage-scaled.jpg',

    intro: 'Blue Bay est une petite station balnéaire du sud-est mauricien, célèbre pour son parc marin protégé classé site Ramsar. Cette baie préservée offre le meilleur snorkeling du sud de l\'île : coraux exceptionnels, poissons tropicaux multicolores, eau cristalline turquoise. Ambiance tranquille, authentique, loin du tourisme de masse.',

    highlights: [
      'Parc marin Blue Bay : site Ramsar protégé, coraux exceptionnels',
      'Meilleur snorkeling sud Maurice : 50+ espèces poissons, visibilité 20m+',
      'Glass bottom boats : observation coraux sans mouiller (familles, non-nageurs)',
      'Plage calme peu fréquentée : ambiance locale préservée',
      'Proximité aéroport (10 min) : idéal début/fin séjour',
      'Village authentique : restaurants créoles, prix locaux',
      'Plongée bouteille : sites excellents pour certifiés PADI'
    ],

    description: 'Blue Bay se situe sur la côte sud-est, à seulement 10 km de l\'aéroport SSR (15 min voiture). La baie doit son nom à la teinte bleu intense de son lagon cristallin. Le parc marin Blue Bay Marine Park, créé en 1997 et classé site Ramsar (zone humide importance internationale), protège 353 hectares de récifs coralliens parmi les mieux préservés de Maurice. Profondeur 2-5m, visibilité exceptionnelle 20-30m, plus de 50 espèces de poissons tropicaux, 38 espèces de coraux. La plage publique s\'étend sur 1 km : sable blanc, filaos pour ombre, lagon turquoise peu profond. Ambiance très locale et tranquille : peu de touristes, familles mauriciennes week-ends, pêcheurs locaux. Village simple authentique : quelques guesthouses, restaurants créoles abordables, pas de développement massif. Blue Bay est souvent négligé des touristes (préfèrent Grand Baie, Flic en Flac) mais adoré des connaisseurs et plongeurs.',

    bestMonths: ['mai', 'juin', 'septembre', 'octobre', 'novembre', 'décembre'],

    weatherByMonth: {
      'mai': 'Excellent : 25°C, sec, mer calme, visibilité snorkeling optimale',
      'juin': 'Bon : 23°C, sec mais vent sud parfois fort (agite mer)',
      'septembre': 'Très bon : 24°C, vent diminue, visibilité max snorkeling',
      'octobre': 'Parfait : 26°C, sec, mer calme, conditions idéales',
      'novembre': 'Excellent : 27°C, début été, eau chaude 26°C, mer calme',
      'décembre': 'Très bon : 28°C, chaud mais pluies courtes, eau 27°C'
    },

    coordinates: { lat: -20.4500, lng: 57.7000 },
    nearbyLocations: ['mahebourg', 'pointe-desny'],
    distanceFromAirport: '10 km (15 min en voiture) - le plus proche aéroport',

    accommodation: {
      overview: 'Blue Bay offre hébergements économiques et moyens gamme : guesthouses (40-80€), petits hôtels (60-120€), un resort 4* (Shandrani 180-400€). Ambiance locale, pas luxe ostentatoire. Idéal petits budgets et ceux cherchant authenticité. Proximité aéroport pratique arrivée/départ.',

      zones: [
        {
          name: 'Front de mer Blue Bay',
          description: 'Le long de la plage publique. Guesthouses, petits hôtels familiaux. Accès direct plage + parc marin. Restaurants créoles. Ambiance village authentique.',
          priceRange: '40-100€/nuit',
          bestFor: 'Petits budgets, plongeurs/snorkeleurs, ceux cherchant authenticité',
          pros: [
            'Plage + parc marin à 2-5 min marche',
            'Prix abordables (40-80€ guesthouse)',
            'Ambiance très locale, authentique',
            'Restaurants créoles pas chers (8-15€)',
            'Proximité aéroport (15 min, pratique arrivée/départ)',
            'Glass bottom boats sur place (300-500 Rs)'
          ],
          cons: [
            'Hébergements souvent basiques (confort simple)',
            'Pas de luxe, infrastructures limitées',
            'Peu d\'animation soir (village calme)',
            'Commerces limités (supérette, pas mall)',
            'Plage parfois algues (naturel, saison)'
          ]
        },
        {
          name: 'Shandrani Beachcomber Resort',
          description: 'Resort 4* all-inclusive isolé péninsule (2 km Blue Bay village). 3 plages privées, golf, spa. Accès parc marin organisé. Bon compromis luxe-nature.',
          priceRange: '180-400€/nuit',
          bestFor: 'Familles, couples cherchant confort + accès nature/snorkeling',
          pros: [
            'Resort 4* confortable (piscines, restos, spa)',
            'All-inclusive bon rapport qualité-prix',
            '3 plages privées magnifiques',
            'Excursions parc marin organisées (bateau resort)',
            'Golf 9 trous sur place',
            'Proximité aéroport (pratique vols tard/tôt)'
          ],
          cons: [
            'Prix moyen-élevé (180-400€/nuit)',
            'Isolé village (2 km, taxi nécessaire)',
            'Moins authentique (ambiance resort)',
            'Vent parfois fort côté sud (mai-sept)',
            'Pas luxe 5* (comparé Belle Mare, Le Morne)'
          ]
        },
        {
          name: 'Mahébourg (5 km)',
          description: 'Village historique proche. Plus grand, plus vivant. Marché lundi, musée naval, restaurants, commerces. Base alternative Blue Bay (5 min voiture).',
          priceRange: '35-90€/nuit',
          bestFor: 'Ceux voulant village animé + accès Blue Bay + économie',
          pros: [
            'Village authentique animé (marché, vie locale)',
            'Plus de choix hébergements/restaurants',
            'Moins cher que Blue Bay (35-80€)',
            'Commerces, services complets',
            'Blue Bay à 5 min voiture/taxi (100-150 Rs)',
            'Front de mer promenade agréable'
          ],
          cons: [
            'Pas directement sur plage Blue Bay (5 km)',
            'Plage Mahébourg moins belle que Blue Bay',
            'Voiture/taxi nécessaire quotidien',
            'Plus touristique (bus tours s\'arrêtent)',
            'Hébergements souvent vieux (rénovations limitées)'
          ]
        }
      ],

      bookingTips: [
        'Guesthouses Blue Bay = best rapport qualité-prix (40-60€, propres, accueil familial)',
        'Réservez direct (téléphone/email) : souvent moins cher que booking.com',
        'Shandrani = bon si vol tôt/tard (10 min aéroport, pratique)',
        'Mahébourg base alternative : plus vivant + accès Blue Bay 5 min',
        'Hors saison (avril-mai) : négociez -30% facilement',
        'Week-ends mauriciens : guesthouses pleines (locaux viennent), réservez avant',
        'Vérifiez WiFi (débit variable guesthouses, parfois faible)',
        'Petit-déjeuner souvent inclus guesthouses (économie 5-8€)',
        'Plongée : packages hébergement+plongée disponibles (demandez)',
        'Long séjour (1 semaine+) : négociez tarif dégressif'
      ]
    },

    dining: {
      overview: 'Restauration Blue Bay = créole authentique, prix locaux abordables (8-20€/repas). Spécialité fruits de mer frais (pêche locale). Pas de gastronomie haut de gamme (Mahébourg 5 km pour plus choix). Ambiance paillotes, pieds dans le sable.',

      restaurants: [
        {
          name: 'Chez Patrick',
          type: 'Créole-Fruits de mer',
          priceRange: '10-25€',
          specialty: 'Poisson frais grillé, rougaille, curry. Pêche jour. Terrasse vue mer. Institution locale depuis 25 ans.'
        },
        {
          name: 'Blue Bamboo',
          type: 'Créole-Chinois',
          priceRange: '8-18€',
          specialty: 'Mine frite, nouilles, curry créole. Cuisine fusion locale. Portions généreuses, prix doux.'
        },
        {
          name: 'Le Bougainville',
          type: 'Fruits de mer',
          priceRange: '12-28€',
          specialty: 'Poulpe, calamars, langouste (saison). Paillote plage. Ambiance décontractée. Prix corrects.'
        },
        {
          name: 'Snacks plage Blue Bay',
          type: 'Snacks locaux',
          priceRange: '3-8€',
          specialty: 'Dholl puri, samoussas, gâteaux piments, mine frite. Street food authentique. Pas cher.'
        },
        {
          name: 'Restaurants Mahébourg (5 km)',
          type: 'Variés',
          priceRange: '10-30€',
          specialty: 'Plus grand choix : créole, chinois, indien. Le Kiosque, Les Copains d\'Abord (références).'
        }
      ],

      localSpecialties: [
        'Poisson frais grillé : pêche locale quotidienne (capitaine, carangue, thon)',
        'Poulpe vindaye : poulpe mariné moutarde-curcuma, spécialité sud',
        'Rougaille poisson : sauce tomates-oignons-piment, plat créole typique',
        'Dholl puri : galette lentilles, snack #1 mauricien (50-80 Rs)',
        'Mine frite : nouilles sautées, influence chinoise, copieux pas cher',
        'Gâteaux piments : beignets lentilles épicés, apéritif local',
        'Alouda : boisson dessert (lait, agar-agar, sirop)'
      ],

      budgetMeals: 'Snacks plage : dholl puri, samoussas 50-100 Rs (1-2€). Gargotes village : rougaille-riz 150-250 Rs (3-6€). Supérette : courses sandwich/fruits (économie max). Blue Bamboo : repas complet 8-15€.',

      fineDining: 'Pas de gastronomie fine Blue Bay (village simple). Pour fine dining : Mahébourg (Le Kiosque, vue baie) ou resorts sud (Preskil, Shandrani, 30-60€).'
    },

    beaches: {
      overview: 'Plage publique Blue Bay = belle mais pas exceptionnelle (sable correct, quelques algues saison). LE VRAI ATTRAIT = parc marin snorkeling exceptionnel. Lagon turquoise intense, eau cristalline, calme, peu profond (1-3m). Ombre filaos.',

      list: [
        {
          name: 'Plage publique Blue Bay',
          description: 'Plage 1 km sable blanc-gris. Lagon turquoise magnifique mais quelques algues possibles (naturel, vagues apportent). Filaos ombre naturelle. Calme, peu fréquentée semaine. Familles mauriciennes week-end.',
          bestFor: ['Snorkeling parc marin', 'Baignade calme', 'Familles', 'Détente authentique'],
          facilities: ['Parking gratuit', 'Toilettes publiques basiques', 'Snacks plage', 'Location snorkeling (200-300 Rs)', 'Glass bottom boats (300-500 Rs)', 'Filaos ombre'],
          access: 'Centre village Blue Bay, route côtière. Parking face plage (gratuit, ombragé).'
        },
        {
          name: 'Parc marin Blue Bay (snorkeling)',
          description: '⭐⭐⭐ LA RAISON venir Blue Bay. Zone protégée 353 hectares. Coraux exceptionnels (38 espèces), poissons tropicaux multicolores (50+ espèces : poissons-perroquets, chirurgiens, demoiselles). Profondeur 2-5m, visibilité 20-30m (meilleur Maurice sud). Eau cristalline turquoise intense.',
          bestFor: ['Snorkeling exceptionnel', 'Observation coraux', 'Plongée bouteille débutant', 'Photos sous-marines'],
          facilities: ['Bouées délimitent zone protégée', 'Glass bottom boats visites (300-500 Rs)', 'Centres plongée (30-50€ baptême)', 'Location snorkeling plage'],
          access: 'Depuis plage publique : nagez 50-100m vers bouées (facile). Ou glass bottom boat si non-nageur.'
        },
        {
          name: 'Pointe d\'Esny (5 km nord)',
          description: 'Plage adjacente plus sauvage, moins fréquentée. Sable blanc, kitesurf (vent sud), ambiance locale. Pas snorkeling exceptionnel (Blue Bay meilleur).',
          bestFor: ['Kitesurf', 'Calme absolu', 'Marche plage', 'Alternative Blue Bay'],
          facilities: ['Limités (plage naturelle)', 'Quelques snacks', 'Kitesurf location'],
          access: '5 km nord Blue Bay, route côtière'
        }
      ]
    },

    transport: {
      howToGetThere: 'Depuis aéroport SSR (10 km, 15 min) : Taxi (500-800 Rs = 12-18€, plus proche destination aéroport). Voiture location (sortie aéroport, route côtière sud). Bus public (ligne vers Mahébourg, 30 Rs, 20 min). Transfert privé pré-réservé (15-25€).',

      gettingAround: 'Village Blue Bay compact : plage + restaurants à pied (10 min max). Vélo possible (plat). Voiture utile si excursions (Mahébourg, sud île). Marche suffit si séjour centré snorkeling.',

      carRental: 'Optionnel si séjour Blue Bay uniquement. Utile pour explorer sud (Mahébourg, Gris Gris, Rochester Falls). 20-40€/jour. Agences aéroport ou Mahébourg. Permis français valide. Conduite à gauche.',

      publicTransport: 'Bus publics fréquents : Blue Bay-Mahébourg (15 min, 25 Rs), Blue Bay-Aéroport (20 min, 30 Rs). Ligne vers Port-Louis (2h, 50 Rs). Pratiques, économiques. Dernier bus 18-19h.',

      taxi: 'Taxis disponibles (appelez vs rue). Tarifs : Blue Bay-Aéroport 500-800 Rs, Blue Bay-Mahébourg 100-150 Rs, Blue Bay-Port-Louis 1500-2000 Rs. Négociez avant montée. Chauffeur guesthouse = prix honnêtes.',

      parking: 'Parking gratuit plage publique (ombragé filaos, capacité 30-40 voitures). Jamais complet sauf week-ends mauriciens. Stationnement village gratuit.'
    },

    nightlife: {
      overview: 'Vie nocturne Blue Bay = inexistante (village calme, familial). 1-2 bars locaux ferment 22h. Pour vie nocturne : Mahébourg limité (2-3 bars) ou Grand Baie (1h route nord). Blue Bay = destination détente nature.',

      venues: [
        {
          name: 'Bar Chez Patrick',
          type: 'Bar local',
          description: 'Bar restaurant plage. Bières, rhum arrangé, cocktails simples. Vue mer. Ferme 22h. Ambiance décontractée locale.'
        },
        {
          name: 'Bars locaux village',
          type: 'Bars mauriciens',
          description: '1-2 bars locaux basiques. Bières Phoenix/Blue Marlin, rhum. Ambiance mauriciens locaux. Prix doux (bière 60-100 Rs). Ferme tôt (21-22h).'
        }
      ]
    },

    shopping: {
      overview: 'Shopping Blue Bay = minimal (village simple). Supérette basique (alimentaire, snacks). Pour shopping : Mahébourg (5 km, marché lundi, artisanat) ou centres commerciaux Grand Baie/Quatre Bornes (1h).',

      spots: [
        {
          name: 'Supérette Blue Bay',
          type: 'Épicerie',
          bestFor: 'Courses basiques : eau, snacks, pain, conserves. Choix limité. Prix locaux corrects.'
        },
        {
          name: 'Marché Mahébourg (lundi)',
          type: 'Marché local',
          bestFor: 'Fruits, légumes, artisanat, vêtements, modèles bateaux. Authentique, prix bas. 5 km, taxi 100-150 Rs.'
        },
        {
          name: 'Boutiques snorkeling plage',
          type: 'Équipement plage',
          bestFor: 'Location/vente masques, palmes, rashguard. Prix touristiques (négociez).'
        },
        {
          name: 'Mahébourg artisans',
          type: 'Artisanat',
          bestFor: 'Modèles bateaux bois (spécialité locale), souvenirs, peintures. Meilleur qualité-prix que Grand Baie.'
        }
      ]
    },

    itineraries: [
      {
        duration: '1 jour',
        title: 'Journée snorkeling Blue Bay',
        days: [
          {
            day: 1,
            morning: '8h : Arrivée Blue Bay (parking gratuit plage). 8h30-12h : Snorkeling parc marin (location masque-palmes 200-300 Rs ou apportez). Nagez vers bouées (50-100m), explorez coraux 2-3h. Observez poissons tropicaux, coraux multicolores. Photos sous-marines GoPro. Baignade lagon turquoise.',
            afternoon: '12h30 : Déjeuner Chez Patrick (poisson grillé créole 10-25€) OU pique-nique plage sous filaos. 14h-16h : Glass bottom boat parc marin (300-500 Rs, 45 min) : observation coraux sans mouiller, parfait non-nageurs/enfants. OU nouvelle session snorkeling (après-midi = moins monde). Détente plage.',
            evening: '16h30 : Route Mahébourg (5 km, 10 min). Visite front de mer, musée Naval (gratuit, histoire bataille navale 1810). 18h : Dîner Mahébourg Le Kiosque (vue baie). Retour hébergement ou départ selon planning.'
          }
        ]
      },
      {
        duration: '3 jours',
        title: 'Week-end Blue Bay + Sud île',
        days: [
          {
            day: 1,
            morning: 'Arrivée Blue Bay (aéroport 15 min si vol matin). Installation guesthouse (40-80€). Courses supérette. Exploration village à pied.',
            afternoon: 'Première session snorkeling parc marin : découverte, repérage meilleurs spots coraux. Baignade lagon. Installation routine.',
            evening: 'Dîner Blue Bamboo (créole-chinois pas cher). Coucher tôt (lendemain actif).'
          },
          {
            day: 2,
            morning: '8h-12h : Matinée 100% snorkeling intensif (2-3h dans l\'eau). Exploration complète parc marin, photos. OU plongée bouteille baptême (30-50€, réservez veille).',
            afternoon: '13h : Déjeuner Chez Patrick. 15h-18h : Tour sud voiture (location 30€/j ou taxi 1500 Rs demi-journée) : Mahébourg marché (si lundi), Pointe d\'Esny, Gris Gris cliffs sauvages (30 min sud), Rochester Falls (cascade, 5€).',
            evening: 'Retour Blue Bay. Dîner Le Bougainville (fruits de mer). Soirée tranquille.'
          },
          {
            day: 3,
            morning: 'Glass bottom boat parc marin (300-500 Rs, relaxe). Dernière baignade lagon. Check-out guesthouse.',
            afternoon: 'Déjeuner snacks plage. 14h : Route vers autre destination Maurice OU départ aéroport (15 min, pratique vols après-midi).',
            evening: 'Vol retour OU continuation voyage.'
          }
        ]
      },
      {
        duration: '1 semaine',
        title: 'Semaine base Blue Bay + exploration Sud',
        days: [
          {
            day: 1,
            morning: 'Arrivée aéroport, voiture location. Blue Bay (15 min). Installation guesthouse. Courses. Exploration village.',
            afternoon: 'Première session snorkeling parc marin : repérage. Baignade.',
            evening: 'Dîner Chez Patrick. Coucher tôt (décalage horaire).'
          },
          {
            day: 2,
            morning: '8h-13h : Snorkeling intensif parc marin (matinée complète). Photos sous-marines, observation coraux-poissons.',
            afternoon: 'Déjeuner Blue Bamboo. Sieste. Après-midi plage détente ou glass bottom boat.',
            evening: 'Dîner Le Bougainville. Soirée tranquille.'
          },
          {
            day: 3,
            morning: 'Plongée bouteille (2 plongées 60-80€, certifiés PADI) : sites excellents Blue Bay, Roches Zozo. OU journée snorkeling si non-plongeur.',
            afternoon: 'Déjeuner. Repos après plongées. Plage.',
            evening: 'Dîner Mahébourg Le Kiosque. Promenade front de mer.'
          },
          {
            day: 4,
            morning: 'Excursion sud voiture : Gris Gris cliffs (30 min, paysages sauvages dramatiques), Roche Qui Pleure (rocher troué vagues), Rochester Falls (cascade forêt, baignade, 5€).',
            afternoon: 'Déjeuner Souillac Le Batelage (créole vue falaises). Visite Bois Chéri plantation thé (dégustation, 10€). Retour Blue Bay 17h.',
            evening: 'Dîner guesthouse ou resto village. Repos.'
          },
          {
            day: 5,
            morning: 'Tour sud-ouest : Chamarel Terre 7 Couleurs (10€ + cascade), Réserve Ebony Forest (rando, oiseaux rares, 15€). Route panoramique.',
            afternoon: 'Déjeuner Chamarel (vue exceptionnelle). Retour par Black River Gorges National Park (arrêts viewpoints). Arrivée Blue Bay 18h.',
            evening: 'Dîner Blue Bamboo. Soirée tranquille.'
          },
          {
            day: 6,
            morning: 'Dernière matinée snorkeling parc marin (adieux coraux). Baignade lagon. Glass bottom boat si pas encore fait.',
            afternoon: 'Déjeuner snacks plage. Après-midi détente ou visite Mahébourg (musée Naval, front de mer, shopping artisanat).',
            evening: 'Dîner spécial Chez Patrick (langouste si saison). Dernière soirée.'
          },
          {
            day: 7,
            morning: 'Matinée libre Blue Bay ou route vers autre région Maurice (nord, ouest). Check-out.',
            afternoon: 'Déjeuner. Continuation voyage OU aéroport (15 min).',
            evening: 'Vol retour.'
          }
        ]
      }
    ],

    budget: {
      overview: 'Budget Blue Bay = économique. Hébergement 40-80€/nuit guesthouse. Repas 8-20€. Snorkeling économique (location 200-300 Rs). Budget 60-90€/jour possible. Destination idéale petits budgets cherchant nature.',

      daily: {
        budget: {
          total: '60-90€/jour',
          accommodation: '40-60€ guesthouse',
          food: '12-20€ (gargotes + snacks)',
          activities: '5-10€ (snorkeling location, glass bottom boat)',
          transport: '3-5€ (bus, essence partagée)'
        },
        midRange: {
          total: '100-150€/jour',
          accommodation: '60-100€ hôtel 3*',
          food: '25-40€ (restos tous repas)',
          activities: '30-50€ (plongée bouteille, excursions)',
          transport: '10-15€ (voiture location quotidien)'
        },
        luxury: {
          total: '220-450€/jour',
          accommodation: '180-350€ Shandrani Resort all-inclusive',
          food: 'Inclus all-inclusive',
          activities: '40-100€ (plongée, spa, golf)',
          transport: '15-25€ (voiture premium)'
        }
      },

      savingTips: [
        'Guesthouse vs hôtel : économie 40-80€/nuit (Blue Bay = territoire guesthouse)',
        'Snorkeling : apportez masque-tuba perso (économie 200-300 Rs location)',
        'Repas : gargotes + snacks vs restos tous repas (économie 15-25€/j)',
        'Glass bottom boat : négociez (300 Rs vs 500 Rs demandé)',
        'Bus publics : économie max vs taxi (25-30 Rs vs 500-1000 Rs)',
        'Proximité aéroport : économie transfert cher (500 Rs vs 2000+ Rs nord)',
        'Hors saison (avril-mai) : guesthouses -30-40% (négociez direct)',
        'Pique-niques plage : courses supérette (économie 10-15€/repas)',
        'Excursions DIY : louez voiture vs excursions organisées (économie 50%)',
        'Long séjour : négociez tarif semaine (guesthouses flexibles)',
        'Plongée : packages multi-plongées = réduc 20% (vs plongée unique)',
        'Eau robinet potable : gourde (économie bouteilles 30-50 Rs/j)'
      ]
    },

    practical: {
      whatToBring: [
        'Masque + tuba de qualité (parc marin = raison #1 venir)',
        'GoPro/appareil waterproof (photos sous-marines coraux obligatoires)',
        'Chaussures eau (coraux, oursins possibles)',
        'Crème solaire SPF50+ waterproof REEF SAFE (parc protégé)',
        'Rashguard anti-UV (snorkeling prolongé 2-3h)',
        'Lunettes soleil polarisées',
        'Chapeau/casquette large bord',
        'Maillots de bain (2-3)',
        'Serviette microfibre (filaos ombre mais serviette nécessaire)',
        'Répulsif moustique (village, soirées)',
        'Petite trousse pharmacie basique',
        'Adaptateur prise UK (Maurice = anglais)',
        'Gourde réutilisable (eau robinet potable)',
        'Sac étanche (téléphone plage)',
        'Livre/liseuse (farniente plage)'
      ],

      services: {
        atm: 'Pas de DAB à Blue Bay village. DAB plus proche : Mahébourg (5 km, MCB et SBM). Retirez à aéroport avant arrivée OU Mahébourg (10 min voiture). Cash nécessaire (guesthouses, restos petits parfois pas CB).',
        medical: 'Dispensaire public Blue Bay (urgences mineures). Pharmacie Mahébourg (5 km). Hôpital public Mahébourg (7 km, urgences). Clinique Darné Port-Louis (privée, 45 min, urgences sérieuses +230 601 2300).',
        wifi: 'WiFi gratuit guesthouses (débit variable, souvent faible). Restos principaux WiFi clients. Carte SIM 4G recommandée (10€/10Go aéroport). Réseau 4G correct Blue Bay.',
        phone: 'Réseau 4G correct. Roaming Europe cher. Carte SIM locale : Emtel ou MyT (aéroport ou Mahébourg, 10€ = 10Go valable 30j).'
      },

      safety: [
        'Parc marin protégé : NE touchez JAMAIS coraux (fragile, protégés, urticants, amende possible)',
        'Snorkeling : respectez bouées zone (courants possibles hors zone protégée)',
        'Oursins : possibles zones rocheuses (chaussures eau recommandées)',
        'Coraux coupants : évitez contact (coupures infectent facilement)',
        'Soleil : crème SPF50+ toutes 2h (réverbération eau intense)',
        'Hydratation : 2-3L eau/jour (snorkeling prolongé déshydrate)',
        'Courants : restez zone parc marin délimitée (sécurisée)',
        'Enfants : surveillez (profondeur augmente progressivement)',
        'Méduses : rares (récif protège) mais possibles nov-mars',
        'Glass bottom boat : gilets fournis (sécurité)',
        'Objets valeur : ne laissez pas plage (vols opportunistes possibles)',
        'Route aéroport : conduite à gauche, attention ronds-points',
        'Algues : naturelles (vagues apportent), pas dangereuses mais glissantes'
      ],

      emergency: 'Police : 112. SAMU : 114. Pompiers : 115. Police Blue Bay : +230 631 9396. Garde-côtes : 213 5151. Hôpital Mahébourg : +230 631 9303. Clinique Darné (Port-Louis, urgences 24/7) : +230 601 2300.'
    },

    tips: [
      '🤿 Parc marin = meilleur snorkeling sud Maurice (coraux exceptionnels, 50+ espèces poissons)',
      '📸 Photos sous-marines : GoPro essentiel, visibilité 20-30m (conditions idéales)',
      '🏖️ Plage = moyen (algues possibles) MAIS lagon turquoise + snorkeling = exceptionnel',
      '⏰ Snorkeling matinal : visibilité max, moins monde (8-11h)',
      '🚤 Glass bottom boat : 300-500 Rs, parfait non-nageurs/enfants/seniors',
      '✈️ Proximité aéroport : idéal début/fin séjour (15 min, 500-800 Rs taxi)',
      '💰 Destination économique : guesthouses 40-60€, repas 8-15€, snorkeling pas cher',
      '🐠 Respectez coraux : NE touchez PAS (protection parc, amende + karma)',
      '🏊 Marée : snorkeling possible toutes marées (profondeur suffisante 2-5m)',
      '📅 Meilleure période : sept-nov (sec, mer calme, visibilité max)',
      '🚗 Voiture utile : explorer sud (Gris Gris, Chamarel) mais optionnelle si juste snorkeling',
      '🛏️ Guesthouse > hôtel : Blue Bay = territoire guesthouse (40-60€, accueil familial)',
      '🍽️ Chez Patrick = meilleur resto : poisson frais, prix corrects, vue mer',
      '🎒 Apportez masque-tuba : location 200-300 Rs mais confort perso meilleur',
      '🌊 Évitez juin-août : vent sud fort (mer agitée, visibilité réduite)'
    ],

    culture: {
      overview: 'Blue Bay village de pêcheurs préservé. Parc marin créé 1997, classé site Ramsar 2008 (zone humide importance internationale). Protection stricte : pêche interdite, ancrage réglementé, tourisme contrôlé. Locaux fiers préservation (emplois guides, glass bottom boats). Village reste authentique malgré tourisme : familles mauriciennes pique-niquent week-ends (tradition), pêcheurs vendent prises matinales plage. Communauté mixte créoles-indo-mauriciens harmonieuse. Économie = pêche (hors parc) + tourisme modéré + agriculture canne à sucre. Proximité aéroport longtemps freiné développement (bruit avions) mais devenu atout (accès rapide).',

      events: [
        'Week-ends mauriciens : pique-niques familiaux plage (locaux nombreux)',
        'Journée Mondiale Océans (8 juin) : actions sensibilisation parc marin',
        'Fête nationale 12 mars : célébrations village, plage animée',
        'Cavadee (jan-fév) : processions tamoul village proche'
      ],

      etiquette: [
        'Parc marin protégé : NE touchez JAMAIS coraux (protection + respect)',
        'Snorkeling : ne dérangez pas poissons (laissez nager librement)',
        'Pêche interdite parc : ne tentez pas (amendes + prison possible)',
        'Déchets : ZÉRO déchet mer/plage (protection environnement crucial)',
        'Glass bottom boat : respectez consignes guide (sécurité + environnement)',
        'Photos : demandez permission locaux avant photographier',
        'Topless : évitez (plage locale familiale, conservateurs)',
        'Crème solaire : REEF SAFE uniquement (protection coraux parc)',
        'Filaos : ne cassez pas branches (ombre précieuse)',
        'Week-ends : respectez espace familles mauriciennes (pique-niques)',
        'Marchandage : négociez poliment boutiques/glass bottom (accepté)',
        'Pourboire : apprécié guides, serveurs (10% bon service)',
        'Pêcheurs : ne dérangez pas travail, achetez poissons si intéressé',
        'Bonjour/Merci : politesse appréciée (créoles courtois)',
        'Volume musique : modéré (respect tranquillité village calme)'
      ]
    }
  },

  'tamarin': {
    slug: 'tamarin',
    name: 'Tamarin',
    title: 'Que faire à Tamarin',
    metaTitle: 'Tamarin Maurice : surf, nage avec dauphins, plages, ambiance locale',
    metaDescription: 'Tamarin côte ouest : spot de surf réputé, nage avec dauphins sauvages, plages authentiques, salt pans colorés et vie locale pour un séjour différent.',
    heroImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/03/ile-maurice-voyage-scaled.jpg',

    intro: 'Tamarin est le village bohème-surf de la côte ouest mauricienne. Cette baie sauvage préservée séduit par son ambiance décontractée loin du tourisme de masse : surfeurs internationaux, expatriés artistes, familles mauriciennes. Vagues légendaires, nage avec dauphins sauvages, sunset spectaculaires, salt pans photogéniques, vie locale authentique.',

    highlights: [
      'Surf spot #1 Maurice : vagues constantes, reef breaks, tous niveaux',
      'Nage avec dauphins sauvages : excursions matinales (80% réussite)',
      'Plage sauvage authentique : loin tourisme masse, ambiance locale',
      'Salt pans (salines) : paysages photogéniques, patrimoine culturel',
      'Sunset spectaculaires : couchers soleil parmi plus beaux Maurice',
      'Proximité Le Morne (15 min) : kitesurf, randonnée, plages sublimes',
      'Vie locale décontractée : cafés, restos créoles, marché, artistes'
    ],

    description: 'Tamarin s\'étire sur la côte sud-ouest entre Rivière Noire au sud et Cascavelle à l\'est, à 45 km de l\'aéroport (50 min). Le village s\'organise autour de Tamarin Bay : baie en croissant de 2 km, plage de sable gris-brun volcanique, houle océan Indien créant vagues prisées surfeurs. Ambiance unique Maurice : décontractée bohème, expatriés surf lifestyle, artistes, jeunes Mauriciens alternatifs. Pas de développement massif : quelques resorts discrets, guesthouses, villas locations, commerces locaux. Salt pans (salines) Tamarin = paysage iconique : bassins sel rectangulaires reflets roses-violets, exploités depuis 200 ans, patrimoine culturel. La baie accueille population dauphins à long bec (200+ individus) : excursions matinales (départ 5h30) 80% succès observation + nage. Surf Tamarin légendaire : plusieurs spots (Tamarin Bay, Santosha, One Eye), vagues toute année, reef breaks et beach breaks, tous niveaux. Proximité Le Morne (15 min) et Black River Gorges (20 min) = base idéale exploration ouest-sud-ouest.',

    bestMonths: ['mai', 'juin', 'juillet', 'août', 'septembre'],

    weatherByMonth: {
      'mai': 'Excellent : 26°C, début saison surf (houle sud commence), dauphins actifs',
      'juin': 'Parfait surf : 24°C, houle constante, vent modéré, vagues 1-2m',
      'juillet': 'Top surf : 23°C, houle maximale (vagues 2-3m+), vent, saison haute surf',
      'août': 'Excellent surf : 23°C, houle forte continue, vagues puissantes',
      'septembre': 'Idéal : 24°C, houle diminue, vagues plus accessibles, excellent dauphins'
    },

    coordinates: { lat: -20.3250, lng: 57.3750 },
    nearbyLocations: ['riviere-noire', 'le-morne', 'cascavelle'],
    distanceFromAirport: '45 km (50 min en voiture)',

    accommodation: {
      overview: 'Tamarin offre hébergements tous budgets : guesthouses surf (40-80€), Airbnb/villas (60-200€), boutique hôtels (80-150€), resorts discrets (150-400€). Ambiance bohème-décontractée. Prisé expatriés longs séjours, surfeurs, familles cherchant authenticité.',

      zones: [
        {
          name: 'Centre Tamarin village',
          description: 'Cœur village autour route côtière. Guesthouses, Airbnb, cafés, restos, commerces. À 5-10 min marche plage. Ambiance locale animée. Vie quotidienne mauricienne.',
          priceRange: '40-120€/nuit',
          bestFor: 'Surfeurs, petits budgets, ceux cherchant vie locale authentique',
          pros: [
            'Ambiance locale authentique, vie village',
            'Guesthouses surf économiques (40-70€)',
            'Cafés, restos, commerces à pied',
            'Plage 5-10 min marche',
            'Surf shops, location planches, écoles surf',
            'Rencontres faciles (communauté surf internationale)'
          ],
          cons: [
            'Pas sur plage directement',
            'Bruit route principale possible',
            'Hébergements parfois basiques',
            'Pas de luxe',
            'Parking limité certains logements'
          ]
        },
        {
          name: 'Front de mer Tamarin Bay',
          description: 'Le long de la plage. Villas locations, boutique hôtels, quelques resorts. Vue océan, accès direct vagues. Plus cher mais emplacement premium. Sunset spectaculaires.',
          priceRange: '100-400€/nuit',
          bestFor: 'Surfeurs sérieux, couples, familles avec budget, ceux voulant front mer',
          pros: [
            'Vue océan + accès direct plage-vagues',
            'Villas spacieuses familles (3-4 chambres)',
            'Sunset depuis terrasse (spectaculaire)',
            'Calme (moins passage route)',
            'Piscines privées souvent (villas)',
            'Parking privé facile'
          ],
          cons: [
            'Prix élevés (100-400€/nuit)',
            'Isolement (marche 10-15 min village)',
            'Moins de choix hébergements',
            'Réservation anticipée nécessaire (prisé)'
          ]
        },
        {
          name: 'Tamarin Hills (arrière-pays)',
          description: 'Collines boisées surplombant baie. Villas luxe, vue panoramique océan-montagnes. Calme absolu, nature. À 5-10 min voiture plage. Prisé expatriés résidents.',
          priceRange: '120-350€/nuit',
          bestFor: 'Couples cherchant calme-vue, familles villas luxe, longs séjours',
          pros: [
            'Vue panoramique exceptionnelle (baie + montagnes)',
            'Calme absolu, nature, oiseaux',
            'Villas luxe avec piscines privées',
            'Fraîcheur (-2-3°C vs côte, altitude)',
            'Grands terrains, espaces extérieurs'
          ],
          cons: [
            'Voiture indispensable (quotidien)',
            'À 10-15 min route plage (montée raide)',
            'Isolement (pas à pied village)',
            'Prix élevés',
            'Insectes-moustiques + nombreux (forêt)'
          ]
        },
        {
          name: 'Entre Tamarin et Le Morne',
          description: 'Route côtière sud. Resorts tranquilles (Tamarina, Maradiva), villas isolées. Compromis Tamarin (10 min nord) et Le Morne (10 min sud). Calme maximal.',
          priceRange: '150-600€/nuit',
          bestFor: 'Ceux cherchant luxe-calme + accès Tamarin/Le Morne',
          pros: [
            'Resorts 4-5* calmes (all-inclusive Maradiva)',
            'Plages privées sublimes',
            'Proximité Tamarin ET Le Morne (10 min chaque)',
            'Golf Tamarina 18 trous sur place',
            'Spa, gastronomie premium'
          ],
          cons: [
            'Prix très élevés (200-600€)',
            'Isolement village (voiture obligatoire)',
            'Ambiance resort internationale (moins authentique)',
            'Distance surf spots Tamarin (10 min voiture)'
          ]
        }
      ],

      bookingTips: [
        'Surfeurs : guesthouses village = best (40-70€, communauté, planches stockage)',
        'Familles : villas Airbnb = excellent (100-200€, 3-4 chambres, piscine)',
        'Couples luxe : resorts entre Tamarin-Le Morne (calme + accès activités)',
        'Réservez 2-3 mois avance haute saison surf (juin-août)',
        'Hors saison (déc-avril) : négociez -30-40% (vagues faibles, moins demande)',
        'Longs séjours (2+ semaines) : réductions importantes (demandez)',
        'Airbnb très développé : villas tout confort dès 80€/nuit',
        'Vérifiez distance plage (annonces parfois imprécises)',
        'Surfeurs débutants : choisissez près Tamarin Bay (spot + accessible)',
        'Parking : essentiel si voiture (vérifiez disponibilité)'
      ]
    },

    dining: {
      overview: 'Tamarin offre scène culinaire décontractée-variée : créole authentique, cafés healthy surf, restos internationaux, food trucks. Prix raisonnables (10-35€/repas). Ambiance bohème-chic. Plusieurs références ouest Maurice.',

      restaurants: [
        {
          name: '530 Restaurant & Lounge',
          type: 'Fusion internationale',
          priceRange: '25-50€',
          specialty: 'Cuisine fusion créole-asiatique-méditerranéenne. Vue panoramique baie Tamarin. Sunset drinks légendaires. Ambiance chic-décontractée.'
        },
        {
          name: 'Varangue sur Morne',
          type: 'Gastronomique français',
          priceRange: '40-80€',
          specialty: 'Cuisine française raffinée, vins premium. Villa coloniale rénovée, jardin tropical. Romantique. Route Le Morne (10 min).'
        },
        {
          name: 'Karma Kafé',
          type: 'Healthy-Végétarien',
          priceRange: '10-22€',
          specialty: 'Bowls, smoothies, vegan options, poké. Ambiance surf-zen. Terrasse jardin. Prisé surfeurs, expats healthy.'
        },
        {
          name: 'Chez Mario',
          type: 'Italien-Pizza',
          priceRange: '12-28€',
          specialty: 'Pizzas four à bois, pâtes maison, gelato. Ambiance familiale. Terrasse. Institution locale depuis 15 ans.'
        },
        {
          name: 'Public Beach Restaurant',
          type: 'Créole-Fruits de mer',
          priceRange: '15-35€',
          specialty: 'Poissons frais, rougaille, vindaye. Pieds dans le sable. Vue vagues. Ambiance décontractée surfeurs.'
        },
        {
          name: 'La Falaise Rouge',
          type: 'Créole authentique',
          priceRange: '8-18€',
          specialty: 'Cuisine créole maison, carry, mine frite. Prix locaux. Ambiance mauricienne. Best rapport qualité-prix.'
        },
        {
          name: 'Food trucks Tamarin Beach',
          type: 'Street food',
          priceRange: '5-12€',
          specialty: 'Tacos, burgers, dholl puri, mines frites. Front de mer le soir. Ambiance locale animée.'
        }
      ],

      localSpecialties: [
        'Poisson frais grillé : pêche locale quotidienne (bonite, carangue)',
        'Vindaye poulpe : poulpe mariné moutarde-curcuma, spécialité ouest',
        'Rougaille saucisse : plat créole réconfortant, populaire surfeurs',
        'Dholl puri : galette lentilles, snack mauricien (50-80 Rs)',
        'Bol açaí : surfeurs adorent, cafés healthy Tamarin (10-15€)',
        'Bière locale Phoenix : brasserie Maurice, prix doux (60-100 Rs)',
        'Rhum arrangé maison : passions locales, vanille, litchi'
      ],

      budgetMeals: 'Food trucks plage : tacos, burgers 5-10€. La Falaise Rouge : créole complet 8-15€. Snacks village : dholl puri, samoussas 50-150 Rs (1-3€). Supermarché Spar : courses cuisiner (apparts/villas). Karma Kafé bowls : healthy abordable 10-15€.',

      fineDining: 'Varangue sur Morne (gastronomie française, villa coloniale, 40-80€). 530 Restaurant (fusion, vue panoramique, sunset drinks, 25-50€). Maradiva Resort (gastronomie, entre Tamarin-Le Morne, 50-100€).'
    },

    beaches: {
      overview: 'Plage Tamarin = sauvage, authentique, NON carte postale. Sable gris-brun volcanique, vagues océan (pas lagon calme), ambiance locale. L\'ATTRAIT = surf, sunset, dauphins, authenticité. Pas baignade tranquille familles (préférez Flic en Flac 10 km nord).',

      list: [
        {
          name: 'Tamarin Bay (plage publique)',
          description: 'Plage 2 km sable gris-brun. Vagues constantes (surf), courants possibles (baignade prudente). Ambiance locale : surfeurs, pêcheurs, familles mauriciennes pique-niques. Vue montagne Rempart. Sunset spectaculaires. Filaos ombre.',
          bestFor: ['Surf', 'Sunset watching', 'Ambiance locale', 'Marche plage', 'Photos paysages dramatiques'],
          facilities: ['Parking gratuit', 'Food trucks le soir', 'Surf shops (location, cours)', 'Toilettes publiques basiques', 'Filaos ombre', 'Douches basiques'],
          access: 'Route côtière Tamarin, plusieurs accès plage. Parking face 530 Restaurant (principal).'
        },
        {
          name: 'Spot surf Tamarin Bay',
          description: '⭐ Surf spot légendaire Maurice. Beach break + reef break. Vagues 1-3m selon saison. Gauches et droites. Tous niveaux (zones débutant à expert). Meilleur mai-septembre (houle sud).',
          bestFor: ['Surf tous niveaux', 'Bodyboard', 'Stand-up paddle vagues', 'Observation surf (spectacle)'],
          facilities: ['Écoles surf (cours 30-50€)', 'Location planches (15-30€/j)', 'Surf shops matériel', 'Sauveteurs souvent présents haute saison'],
          access: 'Depuis plage publique, marche 5 min ou paddle out direct'
        },
        {
          name: 'Salt Pans Tamarin',
          description: 'Salines historiques (200 ans exploitation). Bassins rectangulaires reflets roses-violets (algues, sel). Paysage photogénique unique. Balade possible bordure (respectez exploitation). Patrimoine culturel.',
          bestFor: ['Photos artistiques', 'Découverte patrimoine', 'Sunset (reflets magnifiques)', 'Balade nature'],
          facilities: ['Aucune (site exploitation, accès libre bordure)', 'Parking informel route'],
          access: 'Route côtière Tamarin-Rivière Noire, 2 km sud village. Visible depuis route.'
        },
        {
          name: 'Plage Rivière Noire (5 km sud)',
          description: 'Village pêcheurs authentique. Plage moins belle que Tamarin mais baie protégée (baignade + calme). Départ excursions dauphins, pêche au gros. Restaurants fruits de mer.',
          bestFor: ['Excursions dauphins (départ 5h30)', 'Pêche au gros', 'Ambiance village pêcheurs', 'Restaurants fruits de mer'],
          facilities: ['Restaurants nombreux', 'Agences excursions', 'Parking', 'Commerces'],
          access: '5 km sud Tamarin, route côtière'
        }
      ]
    },

    transport: {
      howToGetThere: 'Depuis aéroport SSR (45 km, 50 min) : Taxi (2000-2500 Rs = 45-55€). Voiture location (A1 puis M1 côte ouest, route panoramique). Bus public (2h+ avec changements, peu pratique). Transfert privé pré-réservé (50-70€, recommandé).',

      gettingAround: 'Tamarin village compact : plage + commerces + restos à pied/vélo (10 min max). Voiture utile excursions (dauphins Rivière Noire 5 km, Le Morne 15 km, Black River Gorges 20 km). Vélo excellent (plat).',

      carRental: 'Recommandé si exploration ouest-sud-ouest. 25-40€/jour. Agences : Hertz, ABC Car Hire (locale). Permis français valide. Conduite à gauche. Essence : station Tamarin (route principale).',

      publicTransport: 'Bus publics : Tamarin-Flic en Flac (15 min, 25 Rs), Tamarin-Port-Louis (1h30, 45 Rs). Fréquents journée, limités soir. Arrêts route principale. Économique mais lent.',

      taxi: 'Taxis disponibles (appelez vs rue). Tarifs : Tamarin-Flic en Flac 200-300 Rs, Tamarin-Le Morne 400-600 Rs, Tamarin-Aéroport 2000-2500 Rs, Tamarin-Rivière Noire (excursion dauphins) 150-200 Rs. Négociez avant.',

      parking: 'Parking gratuit plage publique (ombragé filaos, 40-50 places, jamais complet sauf week-ends). Parking restos/commerces. Stationnement rue village gratuit. Vélo = meilleur option (évite parking).'
    },

    nightlife: {
      overview: 'Vie nocturne Tamarin = tranquille-décontractée. Bars lounge sunset, ambiance surf-chill. Pas clubs, casinos. Soirées apéro terrasses, musique live occasionnelle, food trucks plage. Pour vraie vie nocturne : Flic en Flac (10 km) ou Grand Baie (1h).',

      venues: [
        {
          name: '530 Bar (sunset)',
          type: 'Lounge bar',
          description: 'Bar terrasse vue panoramique baie. Sunset drinks légendaires (cocktails 200-400 Rs). DJ sets week-ends. Ambiance chic-décontractée. Clientèle internationale jeune-adulte.'
        },
        {
          name: 'Public Beach Bar',
          type: 'Beach bar',
          description: 'Bar plage pieds sable. Bières, cocktails, rhum. Vue vagues. Ambiance surfeurs, expats. Musique chill. Ferme 23h.'
        },
        {
          name: 'Karma Kafé (apéro)',
          type: 'Café-Bar',
          description: 'Apéro healthy : cocktails sans alcool, bières locales, smoothies. Terrasse jardin. Ambiance zen. Ferme 21h (lieu familial).'
        },
        {
          name: 'Bars locaux village',
          type: 'Bars mauriciens',
          description: '2-3 bars locaux. Bières Phoenix, rhum pas cher. Ambiance mauricienne populaire. Ferme 22-23h. Prix doux (bière 60-100 Rs).'
        }
      ]
    },

    shopping: {
      overview: 'Shopping Tamarin = limité (village authentique, pas commercial). Spar (supermarché), surf shops (équipement), artisans locaux (artisanat). Pour grand shopping : Cascavelle (20 min, mall So\'flo), Quatre Bornes (30 min).',

      spots: [
        {
          name: 'Spar Tamarin',
          type: 'Supermarché',
          bestFor: 'Courses complètes : alimentaire, alcool, produits plage. Prix corrects. Parking gratuit. Ouvert 7j/7.'
        },
        {
          name: 'Surf shops',
          type: 'Équipement surf',
          bestFor: 'Planches surf (location 15-30€/j, achat occasion), combinaisons, wax, leash, t-shirts surf brands. Conseils spots.'
        },
        {
          name: 'Artisans locaux',
          type: 'Artisanat',
          bestFor: 'Peintures locales (artistes Tamarin nombreux), bijoux, déco bois flotté, créations surf-art. Prix négociables.'
        },
        {
          name: 'Cascavelle So\'flo Mall (20 min)',
          type: 'Centre commercial',
          bestFor: 'Marques internationales, cinéma, restaurants, supermarché Jumbo. Climatisé. Parking gratuit. Grand choix.'
        },
        {
          name: 'Marché Quatre Bornes (jeudi)',
          type: 'Marché',
          bestFor: 'Vêtements, tissus, fruits, légumes. Authentique, prix bas. 30 min route. Négociez.'
        }
      ]
    },

    itineraries: [
      {
        duration: '1 jour',
        title: 'Journée parfaite Tamarin',
        days: [
          {
            day: 1,
            morning: '5h : Excursion dauphins Rivière Noire (60-80€, réservez veille) : nage avec dauphins sauvages, snorkeling Crystal Rock, île Bénitiers, BBQ. Départ 5h30. OU si non-intéressé : surf matinal Tamarin Bay (meilleure marée, moins monde). Cours surf débutant (30-50€) ou location planche (15-30€).',
            afternoon: '13h : Retour excursion dauphins OU continuation surf. Déjeuner Public Beach (pieds sable, vue vagues) ou Karma Kafé (healthy bowls). 14h30-17h : Relaxation plage, balade salt pans Tamarin (2 km sud, photos reflets roses-violets). Visite village, cafés.',
            evening: '17h : Apéro sunset 530 Bar (vue panoramique spectaculaire, cocktails). 19h30 : Dîner Chez Mario (italien, ambiance familiale) ou La Falaise Rouge (créole pas cher). 21h : Soirée tranquille ou food trucks plage.'
          }
        ]
      },
      {
        duration: '3 jours',
        title: 'Week-end surf & nature Tamarin',
        days: [
          {
            day: 1,
            morning: 'Arrivée Tamarin, installation guesthouse/villa (40-150€). Courses Spar. Exploration village à pied.',
            afternoon: 'Première session surf Tamarin Bay (location planche 15-30€) OU baignade prudente. Acclimatation vagues, repérage spots. Balade plage.',
            evening: 'Dîner Public Beach Restaurant (fruits de mer, pieds sable). Apéro sunset plage. Coucher tôt (lendemain départ 5h).'
          },
          {
            day: 2,
            morning: '5h : Excursion dauphins Rivière Noire (60-80€) : nage dauphins, snorkeling, BBQ île Bénitiers. Matinée complète exceptionnelle.',
            afternoon: '13h : Retour. Sieste récupération réveil matinal. 15h : Session surf après-midi OU visite salt pans (photos, balade). Relaxation.',
            evening: '17h30 : Sunset 530 Bar (cocktails, vue). 19h30 : Dîner Karma Kafé (healthy) ou Chez Mario. Soirée tranquille.'
          },
          {
            day: 3,
            morning: 'Surf matinal intensif (2-3h dans l\'eau, marée optimale). OU excursion Black River Gorges (20 min voiture) : rando Alexandra Falls, viewpoints panoramiques, nature.',
            afternoon: 'Déjeuner La Falaise Rouge (créole pas cher). Dernière balade plage, photos souvenirs salt pans. Check-out. Route vers prochaine destination OU aéroport.',
            evening: 'Continuation voyage Maurice OU vol retour.'
          }
        ]
      },
      {
        duration: '1 semaine',
        title: 'Semaine complète base Tamarin ouest-sud-ouest',
        days: [
          {
            day: 1,
            morning: 'Arrivée aéroport, voiture location. Route Tamarin (50 min). Installation villa/guesthouse. Courses Spar. Exploration village.',
            afternoon: 'Première session surf découverte (cours débutant si jamais surfé). Baignade. Acclimatation.',
            evening: 'Dîner Public Beach. Coucher tôt (décalage horaire).'
          },
          {
            day: 2,
            morning: '5h : Excursion dauphins Rivière Noire : nage, snorkeling Crystal Rock, BBQ Bénitiers. Matinée magique.',
            afternoon: '13h : Retour. Sieste. Après-midi libre : plage, balade salt pans, village.',
            evening: 'Sunset 530 Bar. Dîner Chez Mario. Soirée tranquille.'
          },
          {
            day: 3,
            morning: '8h-12h : Surf intensif (matinée complète, meilleure marée). Progression cours ou pratique libre.',
            afternoon: 'Déjeuner Karma Kafé. Après-midi détente plage ou excursion Chamarel (30 min) : Terre 7 Couleurs, cascade, usine rhum (visite-dégustation).',
            evening: 'Dîner La Falaise Rouge. Food trucks plage.'
          },
          {
            day: 4,
            morning: 'Excursion Le Morne (15 min voiture) : plage publique sublime (baignade, snorkeling Anglers Club gratuit). OU rando montagne Brabant (réservation obligatoire, 25€).',
            afternoon: 'Déjeuner Le Morne (resto plage). Après-midi kitesurf initiation (Le Morne spot #1 Maurice) OU continuation plage.',
            evening: 'Retour Tamarin. Dîner 530 Restaurant (fusion, vue panoramique). Sunset drinks.'
          },
          {
            day: 5,
            morning: 'Journée Black River Gorges National Park (20 min voiture) : rando Macchabée Trail (2-3h, forêt primaire, cascades), viewpoints Gorges, Alexandra Falls. Nature exceptionnelle.',
            afternoon: 'Pique-nique forêt. Continuation exploration parc (Plaine Champagne, viewpoint Black River).',
            evening: 'Retour Tamarin 17h. Dîner guesthouse ou resto village. Repos rando.'
          },
          {
            day: 6,
            morning: 'Matinée surf intensive (dernière session longue). Photos surf action. Balade plage, salt pans (dernières photos).',
            afternoon: 'Déjeuner Public Beach. Après-midi shopping Cascavelle So\'flo Mall (20 min, souvenirs, cadeaux). OU relaxation plage.',
            evening: 'Dîner spécial Varangue sur Morne (gastronomie française, romantique). Dernière soirée.'
          },
          {
            day: 7,
            morning: 'Matinée libre : surf dawn patrol (lever soleil) OU grasse matinée. Check-out.',
            afternoon: 'Route vers autre région Maurice (nord, est) OU aéroport (50 min).',
            evening: 'Vol retour OU continuation voyage.'
          }
        ]
      }
    ],

    budget: {
      overview: 'Budget Tamarin = raisonnable. Hébergement 40-150€/nuit. Repas 8-35€. Surf économique (location 15-30€/j). Excursion dauphins 60-80€. Budget 80-120€/jour possible (moyen), 150-250€ confort avec activités.',

      daily: {
        budget: {
          total: '80-120€/jour',
          accommodation: '40-70€ guesthouse surf',
          food: '20-30€ (mix gargotes + cafés)',
          activities: '15-30€ (surf location, entrées sites)',
          transport: '5-10€ (essence, bus)'
        },
        midRange: {
          total: '150-250€/jour',
          accommodation: '80-150€ villa Airbnb ou boutique hôtel',
          food: '35-60€ (restos tous repas)',
          activities: '60-100€ (excursion dauphins, surf cours, rando)',
          transport: '15-25€ (voiture location)'
        },
        luxury: {
          total: '300-600€/jour',
          accommodation: '200-450€ resort Maradiva all-inclusive',
          food: 'Inclus all-inclusive ou gastronomie 60-100€',
          activities: '100-200€ (excursions privées, surf coaching privé, spa)',
          transport: '20-40€ (voiture premium)'
        }
      },

      savingTips: [
        'Guesthouse surf vs resort : économie 100-350€/nuit (40-70€ vs 150-450€)',
        'Surf location vs cours : économie 15-35€ (si niveau suffisant)',
        'Excursion dauphins : réservez agences Rivière Noire vs hôtels (économie 20%)',
        'Repas : food trucks + gargotes vs restos tous repas (économie 20-30€/j)',
        'Hors saison surf (nov-avril) : hébergements -30-40%, vagues faibles mais économie',
        'Airbnb villa groupe : 100-200€/nuit divisé 4-6 personnes = 20-40€/personne',
        'Courses Spar + cuisiner : économie vs restos 3x/jour (15-25€/j)',
        'Bus publics : économie max vs taxi (25-45 Rs vs 500-2000 Rs)',
        'Surf dawn patrol : gratuit, meilleures vagues, évitez foule écoles surf',
        'Salt pans, plage, sunset : gratuit, activités top Tamarin',
        'Vélo vs voiture : économie 15-35€/jour (certains trajets)',
        'Long séjour (2+ semaines) : négociez hébergement -30-50%'
      ]
    },

    practical: {
      whatToBring: [
        'Équipement surf si vous avez (planche, combinaison, économie location)',
        'Lycra/rashguard anti-UV (soleil brutal surf prolongé)',
        'Chaussures récif (reef breaks, coraux coupants)',
        'Wax surf (vérifiez température eau, achetez sur place si besoin)',
        'GoPro fixation surf (photos action vagues)',
        'Crème solaire SPF50+ waterproof (visage surtout)',
        'Combinaison 2-3mm si frileux (eau 24-26°C, suffisant)',
        'Lunettes soleil polarisées (réverbération intense)',
        'Chapeau/casquette',
        'Maillots de bain (2-3)',
        'Vêtements décontractés (ambiance bohème Tamarin)',
        'Chaussures rando (si Black River Gorges)',
        'Répulsif moustique (soirées)',
        'Adaptateur prise UK',
        'Appareil photo (salt pans, sunset photogéniques)'
      ],

      services: {
        atm: 'DAB Tamarin : MCB (route principale village). Également Cascavelle (20 min, plusieurs DAB mall). Retirez suffisant (frais fixes par retrait).',
        medical: 'Dispensaire public Tamarin (urgences mineures). Pharmacie route principale. Clinique Wellkin Cascavelle (20 min, privée, consultations). Hôpital public Flacq (45 min). Urgences sérieuses : Clinique Darné Port-Louis (1h).',
        wifi: 'WiFi gratuit plupart guesthouses/villas (qualité variable). Cafés WiFi clients (Karma Kafé, 530). Carte SIM 4G recommandée (10€/10Go aéroport). Réseau 4G correct Tamarin.',
        phone: 'Réseau 4G correct. Roaming Europe cher. Carte SIM locale : Emtel ou MyT (aéroport ou Cascavelle, 10€ = 10Go valable 30j).'
      },

      safety: [
        'Surf : vagues puissantes (juin-août), reef breaks coupants, respectez niveau',
        'Courants : possibles sortie baie (restez zone surf délimitée)',
        'Coraux : reef breaks = coraux coupants (chaussures récif essentielles)',
        'Oursins : possibles zones rocheuses (attention marche eau)',
        'Soleil : crème SPF50+ toutes 2h surf (réverbération eau intense)',
        'Hydratation : 2-3L eau/jour (surf déshydrate énormément)',
        'Baignade : prudence (vagues, courants, pas lagon calme)',
        'Enfants : surveillez attentivement (mer agitée, pas idéal jeunes enfants)',
        'Dauphins : respectez distance 10m mini (espèce protégée, amendes)',
        'Salt pans : respectez exploitation (ne marchez pas bassins sel)',
        'Route : conduite à gauche, attention dépassements route côtière',
        'Objets valeur plage : ne laissez pas sans surveillance',
        'Méduses : rares mais possibles nov-mars (vinaigre si piqûre)'
      ],

      emergency: 'Police : 112. SAMU : 114. Pompiers : 115. Police Tamarin : +230 483 5013. Garde-côtes : 213 5151. Dispensaire Tamarin : +230 483 6446. Clinique Wellkin Cascavelle : +230 483 0000. Clinique Darné (Port-Louis) : +230 601 2300.'
    },

    tips: [
      '🏄 Surf = raison #1 venir Tamarin (vagues constantes, spots multi-niveaux)',
      '🐬 Dauphins excursion : réservez VEILLE (départ 5h30, places limitées)',
      '🌅 Sunset 530 Bar = must-do (vue panoramique, cocktails, spectacle quotidien)',
      '🧂 Salt pans : 17-18h lumière dorée (reflets roses-violets sublimes)',
      '🏖️ Plage = sable gris (pas blanc), vagues (pas lagon calme), mais ambiance unique',
      '📸 Photos : salt pans, sunset, vagues, montagne Rempart (paysages dramatiques)',
      '🏠 Guesthouse surf = best rapport qualité-prix + communauté internationale',
      '🥗 Karma Kafé : healthy bowls post-surf, ambiance zen, terrasse jardin',
      '⏰ Surf dawn patrol : lever soleil, vagues meilleures, personne (gratuit)',
      '🚗 Voiture utile : dauphins Rivière Noire (5 km), Le Morne (15 km), Black River (20 km)',
      '📅 Meilleure période surf : juin-août (houle maximale, vagues 2-3m+)',
      '🤿 Snorkeling : meilleur Crystal Rock (excursion dauphins) vs plage Tamarin',
      '💰 Budgetfriendly : guesthouses 40-70€, food trucks 5-10€, surf location 15-30€',
      '🌴 Ambiance bohème : expats, surfeurs, artistes, décontracté (vs Grand Baie clinquant)',
      '🍺 Vie nocturne calme : apéro sunset, soirées tranquilles (pas clubs)'
    ],

    culture: {
      overview: 'Tamarin village pêcheurs-agricole transformé destination surf-bohème. Nom "Tamarin" vient arbres tamariniers nombreux (fruits aigres locaux). Salt pans exploités depuis époque coloniale (200 ans), production sel artisanale continue (patrimoine culturel protégé). Années 1970-80 : découverte vagues Tamarin surfeurs sud-africains, début réputation internationale. Années 2000 : afflux expatriés (surfeurs, artistes, entrepreneurs) cherchant alternative Grand Baie touristique. Communauté multiculturelle unique : créoles locaux, Indo-mauriciens, expatriés occidentaux, coexistence harmonieuse. Village préserve authenticité malgré développement : pas hauts immeubles, commerces locaux, vie simple. Dauphins à long bec population résidente baie depuis toujours (200+ individus), respectés locaux (interdiction chasse). Culture surf-lifestyle influence forte : cafés healthy, yoga, environnement, slow living.',

      events: [
        'Compétitions surf nationales (dates variables, Surfing Mauritius organise)',
        'Tamarin Festival (août, musique, artisanat, food, plage)',
        'Journée Mondiale Océans (8 juin) : sensibilisation dauphins, préservation',
        'Week-ends mauriciens : pique-niques familles locales plage (tradition forte)',
        'Cavadee (jan-fév) : procession tamoule traverse village'
      ],

      etiquette: [
        'Surf : respectez priority règles (local + celui + loin pic)',
        'Débutants : restez zone débutants (évitez gêner surfeurs confirmés)',
        'Dauphins : distance 10m MINIMUM (approche respectueuse, espèce protégée)',
        'Salt pans : ne marchez PAS bassins (exploitation active, respect travail)',
        'Topless : évitez plage publique (familles mauriciennes conservatrices)',
        'Photos : demandez permission locaux avant photographier',
        'Pêcheurs : ne dérangez pas travail, achetez poissons si intéressé',
        'Déchets : ZÉRO déchet plage (surfeurs locaux très sensibles pollution)',
        'Musique : volume modéré (respect tranquillité)',
        'Bonjour/Merci : politesse appréciée (créoles courtois)',
        'Surf shops : conseils gratuits appréciés mais achetez quelque chose (wax, leash)',
        'Communauté surf : accueil chaleureux mais respect mutuel essentiel',
        'Filaos : ne cassez pas branches (ombre précieuse)',
        'Pourboire : apprécié bons services restos (10%)',
        'Ambiance bohème : respectez lifestyle décontracté (pas bling-bling)'
      ]
    }
  },

  'cap-malheureux': {
    slug: 'cap-malheureux',
    name: 'Cap Malheureux',
    title: 'Que faire à Cap Malheureux',
    metaTitle: 'Cap Malheureux Maurice : église toit rouge, village pêcheurs, îles nord',
    metaDescription: 'Cap Malheureux pointe nord : église iconique au toit rouge, village de pêcheurs authentique, départ excursions îles nord et plages tranquilles.',
    heroImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/03/ile-maurice-voyage-scaled.jpg',

    intro: 'Cap Malheureux est le point le plus septentrional de l\'Île Maurice, village de pêcheurs authentique célèbre pour son église Notre-Dame Auxiliatrice au toit rouge vif. Carte postale vivante mauricienne : église photogénique, pirouges colorées, vue sur îlots du nord (Coin de Mire, Île Plate), ambiance locale préservée, gateway pour excursions îles.',

    highlights: [
      'Église toit rouge : icône Maurice, monument le plus photographié de l\'île',
      'Village pêcheurs authentique : pirogues colorées, marché poisson frais',
      'Vue spectaculaire îlots nord : Coin de Mire, Île Plate, Île Ronde',
      'Gateway excursions îles nord : catamaran, speed boats au départ du cap',
      'Plages calmes peu touristiques : ambiance locale familiale',
      'Proximité Grand Baie (7 km) : accès facilités + authenticité préservée',
      'Restaurants créoles fruits de mer : poisson frais pêche quotidienne'
    ],

    description: 'Cap Malheureux occupe la pointe nord de Maurice, à 7 km au nord de Grand Baie et 27 km de l\'aéroport (35 min). Le nom "Malheureux" (malheureux) vient du naufrage navire français Saint-Géran 1744 au large (histoire inspirant roman Paul et Virginie). Le village s\'organise autour de son église Notre-Dame Auxiliatrice construite 1938, reconnaissable à son toit rouge vif unique Maurice. Le parvis offre vue panoramique baie Cap Malheureux avec en arrière-plan les silhouettes des îlots nord préservés : Coin de Mire (rocher pyramidal 162m), Île Plate, Île Ronde. Le village reste authentique village pêcheurs : pirogues multicolores amarrées plage, pêcheurs vendent prises matinales, familles mauriciennes. Petite plage publique tranquille lagon peu profond. Cap Malheureux = point départ prisé excursions catamaran îles nord (snorkeling exceptionnel, plages désertes, BBQ). Ambiance très locale, peu d\'infrastructures touristiques (quelques guesthouses, restos créoles), ce qui préserve charme authentique.',

    bestMonths: ['mai', 'juin', 'septembre', 'octobre', 'novembre'],

    weatherByMonth: {
      'mai': 'Excellent : 26°C, sec, mer calme, vue claire îlots, idéal photos',
      'juin': 'Bon : 24°C, sec, vent parfois (rafraîchit), mer agitée possible',
      'septembre': 'Parfait : 25°C, vent diminue, mer calme, visibilité excellente',
      'octobre': 'Idéal : 26°C, sec, mer calme, meilleur mois photos église',
      'novembre': 'Très bon : 28°C, début été, peu pluie encore, eau chaude'
    },

    coordinates: { lat: -19.9833, lng: 57.6167 },
    nearbyLocations: ['grand-baie', 'trou-aux-biches'],
    distanceFromAirport: '27 km (35 min en voiture)',

    accommodation: {
      overview: 'Cap Malheureux = destination excursion journée principalement (peu hébergements). Quelques guesthouses simples (40-70€), villas locations (80-200€). La plupart logent Grand Baie (7 km, 10 min voiture) : + de choix, + d\'infrastructures, + d\'animations.',

      zones: [
        {
          name: 'Village Cap Malheureux',
          description: 'Cœur village autour église. Guesthouses simples, villas locations. Ambiance 100% locale, authentique. Plage calme à 5 min marche. Peu de commodités (épicerie, snacks).',
          priceRange: '40-100€/nuit',
          bestFor: 'Ceux cherchant authenticité max, petits budgets, amateurs pêche',
          pros: [
            'Ambiance locale authentique (peu touristes)',
            'Prix abordables (40-70€ guesthouse)',
            'Église toit rouge à 2 min à pied',
            'Vue îlots nord magnifique',
            'Proximité embarcadères excursions îles',
            'Calme absolu (village tranquille)'
          ],
          cons: [
            'Infrastructures limitées (pas restaurants variés)',
            'Guesthouses basiques (confort simple)',
            'Peu d\'animations soir',
            'Voiture nécessaire (commerces, sorties)',
            'Plage correcte mais pas exceptionnelle'
          ]
        },
        {
          name: 'Grand Baie (7 km sud)',
          description: 'Station balnéaire animée proche. Tous hébergements (guesthouses à resorts 5*). Restaurants nombreux, shopping, vie nocturne. Cap Malheureux accessible 10 min voiture.',
          priceRange: '40-500€/nuit',
          bestFor: 'Tous profils : familles, couples, jeunes, ceux voulant infrastructures complètes',
          pros: [
            'Choix hébergements immense (40-500€)',
            'Restaurants, bars, clubs, shopping',
            'Plage meilleure que Cap Malheureux',
            'Excursions îles nord départ possible aussi',
            'Vie nocturne animée',
            'Toutes commodités'
          ],
          cons: [
            'À 7 km Cap Malheureux (voiture/taxi quotidien)',
            'Plus touristique (moins authentique)',
            'Plus cher que Cap Malheureux',
            'Bruyant certains quartiers (vs calme Cap)'
          ]
        }
      ],

      bookingTips: [
        'Cap Malheureux = excursion journée depuis Grand Baie (recommandé)',
        'Si logez Cap Malheureux : guesthouse suffit (séjour court 1-2 nuits)',
        'Grand Baie meilleure base : infrastructures + accès Cap 10 min',
        'Réservez excursions îles nord 1-2 jours avance (haute saison complète)',
        'Villas Cap Malheureux : bon pour groupes/familles (80-200€ divisé)',
        'Week-ends mauriciens : guesthouses pleines (locaux viennent), réservez tôt',
        'Hors saison (avril-mai) : négociez -30-40% guesthouses',
        'Vérifiez distance église (principale attraction, max 10 min marche)'
      ]
    },

    dining: {
      overview: 'Restauration Cap Malheureux = limitée mais authentique. Quelques restos créoles fruits de mer (8-25€), snacks locaux. Spécialité poisson frais pêche locale. Pour + de choix : Grand Baie (7 km, 50+ restaurants).',

      restaurants: [
        {
          name: 'Le Pescatore Nord',
          type: 'Créole-Fruits de mer',
          priceRange: '12-28€',
          specialty: 'Poisson frais grillé, poulpe, calamars. Pêche locale quotidienne. Terrasse vue église toit rouge. Institution locale.'
        },
        {
          name: 'Chez Tante Athalie',
          type: 'Créole authentique',
          priceRange: '8-18€',
          specialty: 'Rougaille, vindaye, curry. Cuisine maison traditionnelle. Portions généreuses, prix locaux. Ambiance familiale.'
        },
        {
          name: 'Snacks Cap Malheureux',
          type: 'Street food',
          priceRange: '3-8€',
          specialty: 'Dholl puri, samoussas, gâteaux piments, mine frite. Snacks mauriciens authentiques. Pas cher.'
        },
        {
          name: 'Marché poisson Cap',
          type: 'Poisson frais',
          priceRange: '5-15€/kg',
          specialty: 'Poissons frais pêche matinale. Achetez direct pêcheurs (négociez). Cuisinez si villa/appart.'
        }
      ],

      localSpecialties: [
        'Poisson frais grillé : capitaine, carangue, bonite, pêche locale',
        'Poulpe vindaye : spécialité nord, marinade moutarde-curcuma',
        'Rougaille poisson : sauce tomate-piment créole typique',
        'Dholl puri : galette lentilles, snack #1 mauricien (50-80 Rs)',
        'Ourite (poulpe) carry : curry poulpe, plat traditionnel pêcheurs'
      ],

      budgetMeals: 'Snacks Cap : dholl puri, samoussas 50-100 Rs (1-2€). Chez Tante Athalie : repas créole complet 8-15€. Marché poisson : achetez frais, cuisinez (économie max si villa). Grand Baie (7 km) : + de choix 10-50€.',

      fineDining: 'Pas de gastronomie fine Cap Malheureux (village simple). Pour fine dining : Grand Baie (7 km) - Lambic, La Terrasse, Ocean (30-80€).'
    },

    beaches: {
      overview: 'Plages Cap Malheureux = correctes mais pas exceptionnelles. Petite plage publique calme, lagon peu profond, ambiance locale. L\'ATTRAIT principal = église photogénique, vue îlots, village authentique, gateway excursions îles nord (plages sublimes îlots).',

      list: [
        {
          name: 'Plage publique Cap Malheureux',
          description: 'Petite plage village 500m. Sable blanc-gris, lagon calme peu profond. Pirogues pêcheurs colorées (photogénique). Vue île Plate, Coin de Mire. Ambiance locale, familles mauriciennes. Filaos ombre.',
          bestFor: ['Baignade calme', 'Familles avec enfants', 'Photos pirogues', 'Ambiance locale', 'Détente tranquille'],
          facilities: ['Parking gratuit', 'Snacks', 'Toilettes publiques basiques', 'Filaos ombre', 'Embarcadères excursions'],
          access: 'Centre village, 5 min marche depuis église toit rouge'
        },
        {
          name: 'Plage Bain Boeuf (2 km est)',
          description: 'Plage adjacente plus étendue. Resorts discrets (Club Med, Heritage). Moins fréquentée. Belle mais souvent algues (naturel). Vue Coin de Mire excellente.',
          bestFor: ['Calme', 'Marche plage', 'Vue îlots', 'Éviter foule'],
          facilities: ['Parking informel', 'Accès libre (plage publique)', 'Limité (zone naturelle)'],
          access: '2 km est Cap Malheureux, route côtière'
        },
        {
          name: 'Îles nord (excursions catamaran)',
          description: '⭐⭐⭐ VRAIES plages paradis nord : Île Plate (plage déserte sable blanc), Gabriel (lagon turquoise sublime), snorkeling Coin de Mire (coraux, poissons). Accessibles catamaran journée (70-90€).',
          bestFor: ['Plages carte postale', 'Snorkeling exceptionnel', 'Aventure', 'Photos de rêve'],
          facilities: ['Inclus excursion : BBQ, boissons, équipement snorkeling', 'Guides', 'Navette catamaran'],
          access: 'Excursions départ Cap Malheureux ou Grand Baie (70-90€/personne, journée complète)'
        }
      ]
    },

    transport: {
      howToGetThere: 'Depuis aéroport SSR (27 km, 35 min) : Taxi (1700-2200 Rs = 40-50€). Voiture location (A1 puis M2 côtière). Bus public (ligne Grand Baie puis bus local, 1h30, 40 Rs). Transfert privé (45-60€). Depuis Grand Baie (7 km) : Bus (15 min, 25 Rs), Taxi (200-300 Rs), Voiture (10 min).',

      gettingAround: 'Village Cap Malheureux = très petit, tout à pied (église, plage, restaurants dans rayon 10 min marche). Voiture utile si logez Cap et sortez quotidiennement (Grand Baie, excursions).',

      carRental: 'Optionnel si séjour Cap Malheureux uniquement (village compact). Utile si base Grand Baie + excursions multiples. 20-40€/jour. Permis français valide. Conduite à gauche.',

      publicTransport: 'Bus publics fréquents : Cap Malheureux-Grand Baie (15 min, 25 Rs), Cap-Port-Louis (1h15, 45 Rs). Pratiques, économiques. Limités soir (dernier 18-19h).',

      taxi: 'Taxis disponibles (appelez vs rue). Tarifs : Cap-Grand Baie 200-300 Rs, Cap-Aéroport 1700-2200 Rs, Cap-Port-Louis 1200-1500 Rs. Négociez avant montée.',

      parking: 'Parking gratuit église toit rouge (petit parking 20 places, complet 10-12h haute saison). Parking gratuit plage publique. Stationnement rue village gratuit.'
    },

    nightlife: {
      overview: 'Vie nocturne Cap Malheureux = inexistante (village pêcheurs calme). 1-2 bars locaux ferment 22h. Pour vie nocturne : Grand Baie (7 km, 10 min voiture, bars-clubs nombreux).',

      venues: [
        {
          name: 'Bar Le Pescatore',
          type: 'Bar local',
          description: 'Bar restaurant. Bières, rhum. Vue mer. Ambiance locale tranquille. Ferme 22h.'
        },
        {
          name: 'Bars locaux village',
          type: 'Bars mauriciens',
          description: '1-2 bars basiques. Bières Phoenix, rhum local. Mauriciens locaux. Prix doux (bière 60-100 Rs). Ferme tôt 21-22h.'
        }
      ]
    },

    shopping: {
      overview: 'Shopping Cap Malheureux = minimal (village simple). Épicerie basique, snacks. Pour shopping : Grand Baie (7 km, La Croisette mall, Sunset Boulevard, marché mercredi).',

      spots: [
        {
          name: 'Épicerie village',
          type: 'Épicerie',
          bestFor: 'Courses basiques : eau, snacks, pain. Choix très limité. Prix locaux.'
        },
        {
          name: 'Marché poisson Cap',
          type: 'Poisson frais',
          bestFor: 'Poissons frais pêche matinale. Direct pêcheurs. Négociez. Si villa cuisinez.'
        },
        {
          name: 'Souvenirs église',
          type: 'Souvenirs',
          bestFor: 'Cartes postales église toit rouge, petits souvenirs religieux. Stand informel parvis église.'
        },
        {
          name: 'Grand Baie (7 km)',
          type: 'Shopping complet',
          bestFor: 'La Croisette mall, Sunset Boulevard, marché, boutiques. Tout type shopping. 10 min voiture.'
        }
      ]
    },

    itineraries: [
      {
        duration: '1 jour',
        title: 'Journée Cap Malheureux + îles nord',
        days: [
          {
            day: 1,
            morning: '8h : Arrivée Cap Malheureux (parking église). 8h15-9h : Visite église Notre-Dame Auxiliatrice toit rouge (intérieur simple mais joli, vue baie depuis parvis). Photos icône Maurice (église + îlots arrière-plan). Balade village, observation pirogues pêcheurs, marché poisson si matinal. 9h : Départ excursion catamaran îles nord (70-90€, réservée veille) : navigation vers Coin de Mire, Île Plate, Gabriel. 10h-12h : Snorkeling Coin de Mire (coraux, poissons tropicaux, visibilité exceptionnelle).',
            afternoon: '12h30 : BBQ plage Île Plate ou Gabriel (inclus excursion) : grillades créoles, boissons. 13h30-15h30 : Temps libre îlot : baignade lagon turquoise, détente plage déserte paradisiaque, exploration, photos. 16h : Retour navigation Cap Malheureux.',
            evening: '17h : Arrivée Cap. Dîner Le Pescatore (fruits de mer, vue église). 19h : Route Grand Baie (7 km) vie nocturne OU retour hébergement selon envies.'
          }
        ]
      },
      {
        duration: '3 jours',
        title: 'Week-end base Cap Malheureux nord île',
        days: [
          {
            day: 1,
            morning: 'Arrivée Cap Malheureux, installation guesthouse (40-70€). Visite église toit rouge, photos, exploration village à pied.',
            afternoon: 'Première baignade plage publique Cap (calme, peu profond). Observation pirogues pêcheurs. Balade Bain Boeuf (2 km, marche plage).',
            evening: 'Dîner Chez Tante Athalie (créole authentique). Coucher tôt (lendemain départ matinal excursion).'
          },
          {
            day: 2,
            morning: '8h30 : Excursion catamaran îles nord (70-90€, journée complète) : Coin de Mire snorkeling, Île Plate/Gabriel plages désertes, BBQ.',
            afternoon: 'Continuation excursion : temps libre îlots, baignade, photos. 16h : Retour Cap Malheureux.',
            evening: 'Détente guesthouse. Dîner Le Pescatore. Soirée tranquille village.'
          },
          {
            day: 3,
            morning: 'Matinée libre : dernières photos église (lumière matinale), marché poisson frais, balade village.',
            afternoon: 'Route Grand Baie (7 km, 10 min) : shopping La Croisette, déjeuner, exploration station balnéaire. OU continuation vers autre destination Maurice.',
            evening: 'Départ selon planning.'
          }
        ]
      }
    ],

    budget: {
      overview: 'Budget Cap Malheureux = économique. Hébergement 40-70€ guesthouse. Repas 8-18€ créole. Excursion îles 70-90€. Visite église gratuite. Budget 70-100€/jour possible (hors excursion), 150-180€ avec excursion.',

      daily: {
        budget: {
          total: '70-100€/jour (hors excursion)',
          accommodation: '40-60€ guesthouse',
          food: '15-25€ (créole local)',
          activities: '0€ (église gratuite, plage gratuite)',
          transport: '5-15€ (bus, essence)'
        },
        midRange: {
          total: '150-200€/jour',
          accommodation: '80-120€ villa/appart',
          food: '30-50€ (mix créole + restos Grand Baie)',
          activities: '70-90€ (excursion catamaran îles)',
          transport: '10-20€ (voiture location)'
        }
      },

      savingTips: [
        'Guesthouse Cap vs hôtel Grand Baie : économie 40-120€/nuit',
        'Repas créole local vs restos touristiques : économie 15-30€/j',
        'Excursion îles : réservez direct embarcadère vs resort (économie 20%)',
        'Bus publics : économie max vs taxi (25 Rs vs 200-300 Rs Grand Baie)',
        'Église + plage + village = gratuit (activités principales)',
        'Marché poisson : achetez cuisinez vs restaurants (économie 10-20€)',
        'Base Cap vs Grand Baie : économie hébergement-restauration significative',
        'Hors saison (avril-mai) : guesthouses négociables -30-40%'
      ]
    },

    practical: {
      whatToBring: [
        'Appareil photo (église toit rouge = photo obligatoire)',
        'Maillot de bain',
        'Équipement snorkeling si excursion îles (ou location)',
        'Crème solaire SPF50+ waterproof',
        'Chapeau/casquette',
        'Lunettes soleil',
        'Chaussures eau (coraux possibles)',
        'Serviette microfibre',
        'Sac étanche (excursion bateau)',
        'Cash (commerces basiques parfois pas CB)',
        'Répulsif moustique',
        'Tenue respectueuse église (épaules-genoux couverts)'
      ],

      services: {
        atm: 'Pas de DAB à Cap Malheureux. DAB plus proche : Grand Baie (7 km, nombreux). Retirez avant arrivée ou allez Grand Baie.',
        medical: 'Dispensaire public Cap Malheureux (urgences mineures). Pharmacie Grand Baie (7 km). Hôpital public Pamplemousses (20 min). Urgences : Clinique Darné Port-Louis (30 min).',
        wifi: 'WiFi gratuit guesthouses (débit variable). Pas WiFi public village. Carte SIM 4G recommandée (10€/10Go aéroport). Réseau 4G correct.',
        phone: 'Réseau 4G correct. Carte SIM locale : Emtel ou MyT (aéroport ou Grand Baie, 10€ = 10Go valable 30j).'
      },

      safety: [
        'Plage : lagon calme mais surveillez enfants (profondeur progressive)',
        'Soleil : crème SPF50+ toutes 2h',
        'Hydratation : 2-3L eau/jour',
        'Excursions îles : suivez consignes guides (mer ouverte, courants)',
        'Snorkeling : ne touchez pas coraux',
        'Objets valeur : ne laissez pas voiture visible (parking église bondé)',
        'Route : conduite à gauche, attention virages',
        'Église : respectez lieu culte (silence, tenue correcte)',
        'Pirogues pêcheurs : ne montez pas sans permission'
      ],

      emergency: 'Police : 112. SAMU : 114. Pompiers : 115. Police Cap Malheureux : +230 262 8041. Garde-côtes : 213 5151. Dispensaire Cap : +230 262 7446.'
    },

    tips: [
      '⛪ Église toit rouge = photo obligatoire Maurice (carte postale iconique)',
      '📸 Meilleure lumière photos : 8-10h (matinale douce) ou 16-17h (dorée)',
      '🏝️ Excursion îles nord = must-do (plages sublimes, snorkeling exceptionnel)',
      '🐟 Marché poisson : négociez direct pêcheurs (frais, pas cher)',
      '🏖️ Plage Cap = correcte (calme) mais îles nord = paradis (catamaran)',
      '🚌 Bus Grand Baie : économique, fréquent (25 Rs, 15 min)',
      '📅 Évitez dimanches matins : messes église (touristes limités, respect culte)',
      '🎒 Excursion îles : réservez VEILLE (places limitées haute saison)',
      '🌅 Sunset limité : Cap orienté nord (pas coucher soleil mer)',
      '🏨 Logez Grand Baie > Cap : + infrastructures, Cap excursion journée',
      '💰 Village économique : guesthouses 40-60€, repas 8-15€',
      '⏰ Arrivez TÔT église : parking limité, bondé 10h-16h haute saison',
      '🚗 Voiture utile : Grand Baie proche mais quotidien nécessite transport',
      '🔇 Village CALME : aucune vie nocturne (Grand Baie pour ça)',
      '🌊 Coin de Mire visible : pyramide rocheuse iconique (162m), photos église+îlot'
    ],

    culture: {
      overview: 'Cap Malheureux village pêcheurs préservé. Nom "Malheureux" vient naufrage Saint-Géran 1744 (roman Paul et Virginie). Également débarquement britanniques 1810 (conquête île). Église Notre-Dame Auxiliatrice construite 1938, toit rouge vif unique Maurice (visible km). Devient icône photographique Maurice années 1970+ (cartes postales, guides touristiques). Pêche traditionnelle pirogues active : familles pêcheurs depuis générations, vendent prises quotidiennes. Village reste authentique malgré afflux touristes (excursions journée, pas séjour). Communauté majoritairement créole catholique, église centre vie sociale. Îlots nord (Coin de Mire, Île Plate, Île Ronde, Gabriel, Îlot Bernache) = réserves naturelles protégées : accès réglementé, conservation faune-flore endémiques.',

      events: [
        'Messes dimanches : 8h30, 10h (église bondée, touristes discrets svp)',
        'Fête Assomption (15 août) : procession, messe spéciale, village animé',
        'Week-ends mauriciens : pique-niques familles plage (locaux nombreux)',
        'Fête nationale 12 mars : célébrations village'
      ],

      etiquette: [
        'Église : lieu culte actif, respect absolu (silence, pas photos pendant messes)',
        'Tenue église : épaules-genoux couverts (shorts longs OK, pas mini-jupes)',
        'Dimanches matins : évitez 8h30-12h (messes, paroissiens prioritaires)',
        'Photos : OK extérieur église, demandez permission intérieur si messe',
        'Pirogues : NE montez PAS sans permission pêcheurs (outils travail)',
        'Marché poisson : négociez poliment, achetez si trop insistez (respect)',
        'Plage : ramassez déchets (préservation)',
        'Dérangement : village calme, respectez tranquillité habitants',
        'Topless : évitez (village conservateur, familles locales)',
        'Pourboire : apprécié restos (10% bon service)',
        'Bonjour/Merci : politesse appréciée (créoles très courtois)',
        'Parking église : ne bloquez pas (accès paroissiens prioritaire)',
        'Îles nord : respectez réserves naturelles (pas déchets, pas dérangement faune)',
        'Excursions : suivez consignes guides (sécurité + environnement)',
        'Crème solaire : REEF SAFE îles nord (protection coraux)'
      ]
    }
  },

  'trou-deau-douce': {
    slug: 'trou-deau-douce',
    name: 'Trou d\'Eau Douce',
    title: 'Que faire à Trou d\'Eau Douce',
    metaTitle: 'Trou d\'Eau Douce Maurice : Île aux Cerfs, GRSE cascade, village pêcheurs',
    metaDescription: 'Trou d\'Eau Douce côte est : point de départ Île aux Cerfs, GRSE waterfall, village de pêcheurs authentique et restaurants créoles locaux.',
    heroImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/03/ile-maurice-voyage-scaled.jpg',

    intro: 'Trou d\'Eau Douce est le village gateway de l\'Île aux Cerfs, perle de la côte est mauricienne. Ce village de pêcheurs authentique concentre l\'essentiel des départs en bateau vers l\'île paradisiaque tout en préservant son âme locale : embarcadère animé, pirogues colorées, restaurants créoles, excursions GRSE (Grand River South East) remontée rivière-cascade.',

    highlights: [
      'Gateway officiel Île aux Cerfs : embarcadère public, bateaux toutes les 30 min',
      'GRSE (Grande Rivière Sud-Est) : remontée rivière pirogue, cascade forêt, singes',
      'Village pêcheurs authentique : ambiance locale préservée vs tourisme',
      'Base économique est Maurice : guesthouses abordables, restos créoles pas chers',
      'Proximité Belle Mare (10 km) : plages sublimes accessibles',
      'Excursions variées : catamaran, snorkeling, paddleboard mangrove',
      'Restaurants fruits de mer : poisson frais pêche locale quotidienne'
    ],

    description: 'Trou d\'Eau Douce se situe sur la côte est, à 10 km au nord de Mahébourg et 50 km de l\'aéroport (55 min). Le nom signifie "trou d\'eau douce" : source eau douce alimentait village autrefois. Aujourd\'hui, le village vit principalement du tourisme lié à l\'Île aux Cerfs (10 min bateau) et de la pêche traditionnelle. L\'embarcadère public (jetty) = point névralgique : départs bateaux publics Île aux Cerfs toutes 30 min (10€ A/R), excursions catamaran organisées, speed boats privés. Ambiance animée matinée (8-10h départs), calme après-midi. Grand River South East (GRSE) traverse village : remontée rivière en pirogue traditionnelle (30-40€) jusqu\'à cascade forêt tropicale (20 min navigation), observation singes sauvages, végétation luxuriante, baignade cascade. Village reste authentique malgré afflux touristes : pirogues pêcheurs amarrées, marché poisson frais matinal, restaurants créoles abordables, guesthouses simples. Infrastructures basiques mais suffisantes : supérette, pharmacie, agences excursions, location vélos-scooters.',

    bestMonths: ['mai', 'juin', 'septembre', 'octobre', 'novembre'],

    weatherByMonth: {
      'mai': 'Excellent : 26°C, sec, mer calme, GRSE navigable, idéal excursions',
      'juin': 'Bon : 24°C, sec, vent parfois (agite mer), GRSE OK',
      'septembre': 'Parfait : 25°C, très sec, mer calme, conditions optimales',
      'octobre': 'Idéal : 26°C, sec, eau 25°C, meilleur mois',
      'novembre': 'Très bon : 28°C, début été, peu pluie encore, GRSE débit optimal'
    },

    coordinates: { lat: -20.2417, lng: 57.7833 },
    nearbyLocations: ['ile-aux-cerfs', 'belle-mare', 'mahebourg'],
    distanceFromAirport: '50 km (55 min en voiture)',

    accommodation: {
      overview: 'Trou d\'Eau Douce = base économique Île aux Cerfs. Guesthouses simples (35-70€), petits hôtels (60-100€). Proximité embarcadère = atout majeur (Île aux Cerfs 5 min marche). Pour luxe : Belle Mare (10 km, resorts 5*).',

      zones: [
        {
          name: 'Centre village Trou d\'Eau Douce',
          description: 'Cœur village autour embarcadère. Guesthouses, petits hôtels. À 5 min marche jetty Île aux Cerfs. Restaurants créoles, supérette, agences excursions. Ambiance locale animée.',
          priceRange: '35-80€/nuit',
          bestFor: 'Petits budgets, ceux voulant proximité max Île aux Cerfs, ambiance locale',
          pros: [
            'Embarcadère Île aux Cerfs 5 min marche (pratique)',
            'Prix abordables (35-70€ guesthouse)',
            'Restaurants créoles pas chers (8-18€)',
            'Ambiance authentique locale',
            'Agences excursions nombreuses (négociation facile)',
            'Supérette, pharmacie, services sur place'
          ],
          cons: [
            'Hébergements souvent basiques (confort simple)',
            'Village simple (pas luxe)',
            'Plage village moyenne (allez Île aux Cerfs/Belle Mare)',
            'Peu d\'animation soir',
            'Bruit possible proximité route (vérifiez avant)'
          ]
        },
        {
          name: 'Front de mer Trou d\'Eau Douce',
          description: 'Le long côte. Quelques petits hôtels, villas locations. Vue mer-GRSE. Plus calme que centre. À 10-15 min marche embarcadère.',
          priceRange: '60-120€/nuit',
          bestFor: 'Ceux cherchant calme + vue mer, familles petites villas',
          pros: [
            'Vue mer-rivière GRSE',
            'Plus calme que centre village',
            'Villas avec espaces (familles)',
            'Ambiance tranquille',
            'Prix raisonnables (60-100€)'
          ],
          cons: [
            'À 10-15 min marche embarcadère (pas immédiat)',
            'Moins de restaurants proches',
            'Voiture utile sorties',
            'Confort basique-moyen'
          ]
        },
        {
          name: 'Belle Mare (10 km sud)',
          description: 'Zone resorts 5* luxe. Plages privées sublimes. Trou d\'Eau Douce accessible 10 min voiture. Compromis luxe + accès facilités Île aux Cerfs.',
          priceRange: '150-600€/nuit',
          bestFor: 'Couples, familles aisées cherchant luxe + excursions',
          pros: [
            'Resorts 5* all-inclusive (piscines, spas, restos)',
            'Plages privées parmi plus belles Maurice',
            'Transferts Île aux Cerfs organisés',
            'Confort-service exceptionnels',
            'Golf Belle Mare Plage proche'
          ],
          cons: [
            'Prix élevés (150-600€/nuit)',
            'À 10 km Trou d\'Eau Douce (voiture quotidien)',
            'Isolement (voiture nécessaire)',
            'Moins authentique (ambiance resort)'
          ]
        }
      ],

      bookingTips: [
        'Trou d\'Eau Douce = best base économique Île aux Cerfs (proximité + prix)',
        'Guesthouses : réservez direct (téléphone/email) souvent moins cher',
        'Centre village > front mer : marche embarcadère (5 vs 15 min)',
        'Réservez 1 mois avance haute saison (juillet-août, décembre)',
        'Hors saison (avril-mai) : négociez -30-40% facilement',
        'Vérifiez distance embarcadère (annonces parfois imprécises)',
        'Belle Mare si budget permet : luxe + accès Île aux Cerfs 15 min',
        'Petit-déjeuner souvent inclus guesthouses (économie 5-8€)',
        'WiFi : vérifiez qualité (débit variable guesthouses)',
        'Long séjour (1 semaine+) : tarif dégressif (demandez)'
      ]
    },

    dining: {
      overview: 'Restauration Trou d\'Eau Douce = créole authentique, prix locaux. Spécialité fruits de mer frais (pêche quotidienne). 10-15 restos village (8-25€/repas). Ambiance familiale paillottes.',

      restaurants: [
        {
          name: 'Symon\'s',
          type: 'Créole-Fruits de mer',
          priceRange: '15-30€',
          specialty: 'Poisson frais grillé, langouste, curry. Terrasse vue mer-GRSE. Référence locale. Réservez.'
        },
        {
          name: 'La Chaumière Masala',
          type: 'Créole authentique',
          priceRange: '10-20€',
          specialty: 'Rougaille, vindaye, curry. Cuisine maison généreuse. Best rapport qualité-prix. Portions énormes.'
        },
        {
          name: 'Chez Tino',
          type: 'Fruits de mer',
          priceRange: '12-25€',
          specialty: 'Poulpe, calamars, poisson du jour. Paillote vue mer. Ambiance décontractée. Prix corrects.'
        },
        {
          name: 'Café des Arts',
          type: 'Café-Restaurant',
          priceRange: '8-18€',
          specialty: 'Sandwichs, salades, plats du jour. Terrasse sympa. WiFi gratuit. Fréquenté expats-routards.'
        },
        {
          name: 'Snacks embarcadère',
          type: 'Street food',
          priceRange: '3-8€',
          specialty: 'Dholl puri, samoussas, mine frite, gâteaux piments. Rapide pas cher. Avant bateau Île aux Cerfs.'
        }
      ],

      localSpecialties: [
        'Poisson frais grillé : capitaine, carangue, bonite, pêche locale',
        'Poulpe vindaye : spécialité est, marinade moutarde-curcuma',
        'Rougaille poisson : sauce tomate-piment créole classique',
        'Dholl puri : galette lentilles, snack #1 Maurice (50-80 Rs)',
        'Mine frite : nouilles sautées, copieux pas cher',
        'Langouste grillée : chère (35-60€) mais excellente fraîcheur'
      ],

      budgetMeals: 'Snacks embarcadère : dholl puri, samoussas 50-100 Rs (1-2€). La Chaumière Masala : créole complet 10-18€. Café des Arts : plat du jour 8-12€. Supérette Super U (Flacq 10 km) : courses cuisiner si appart.',

      fineDining: 'Pas gastronomie fine Trou d\'Eau Douce (village simple). Pour fine dining : Belle Mare resorts (10 km) - Blue Penny Café, Lakaze (40-80€).'
    },

    beaches: {
      overview: 'Plages Trou d\'Eau Douce village = moyennes (sable gris, algues possibles). L\'ATTRAIT = gateway Île aux Cerfs (plages sublimes 10 min bateau) + GRSE cascade. Belle Mare (10 km sud) = plage magnifique accessible voiture.',

      list: [
        {
          name: 'Plage village Trou d\'Eau Douce',
          description: 'Petite plage village. Sable gris, algues possibles (naturel). Embarcadère, pirogues pêcheurs (photogénique). Vue Île aux Cerfs au large. Baignade OK mais pas exceptionnelle.',
          bestFor: ['Baignade rapide', 'Photos pirogues', 'Ambiance locale', 'Proximité hébergement'],
          facilities: ['Embarcadère Île aux Cerfs', 'Snacks', 'Location bateaux', 'Parking gratuit'],
          access: 'Centre village, le long de la côte'
        },
        {
          name: 'Île aux Cerfs (10 min bateau)',
          description: '⭐⭐⭐ LA RAISON venir Trou d\'Eau Douce. Plages sublimes : Grande Plage (iconique), Petite Plage (calme), Plage Sud (sauvage). Sable blanc poudreux, lagon turquoise cristallin. Paradis.',
          bestFor: ['Plages carte postale', 'Baignade', 'Snorkeling', 'Activités nautiques', 'Photos de rêve'],
          facilities: ['Restaurants', 'Bars', 'Toilettes', 'Douches', 'Location activités nautiques', 'Transats payants'],
          access: 'Bateau public embarcadère (10€ A/R, 10 min traversée). Départs 9h-16h toutes 30 min.'
        },
        {
          name: 'GRSE Cascade (30 min pirogue)',
          description: 'Remontée Grand River South East en pirogue traditionnelle (30-40€). Cascade forêt tropicale, baignade eau douce, singes sauvages, végétation luxuriante. Nature exceptionnelle.',
          bestFor: ['Aventure nature', 'Cascade baignade', 'Photos forêt tropicale', 'Observation singes'],
          facilities: ['Pirogues location embarcadère', 'Guides locaux', 'Gilets sauvetage fournis'],
          access: 'Départ embarcadère village (négociez 30-40€/pirogue 2-4 personnes, 2h excursion)'
        },
        {
          name: 'Belle Mare Beach (10 km sud)',
          description: '⭐ L\'une des plus belles plages Maurice. 10 km sable blanc, lagon turquoise. 10 min voiture Trou d\'Eau Douce. Plage publique accès libre gratuit.',
          bestFor: ['Plage sublime', 'Baignade', 'Marche longue', 'Snorkeling'],
          facilities: ['Parking gratuit', 'Filaos ombre', 'Accès libre'],
          access: '10 km sud, route côtière, 10 min voiture'
        }
      ]
    },

    transport: {
      howToGetThere: 'Depuis aéroport SSR (50 km, 55 min) : Taxi (2000-2500 Rs = 45-55€). Voiture location (A1 puis route côtière est). Bus public (ligne Mahébourg, 1h30, 40 Rs). Transfert privé (50-70€). Depuis Belle Mare (10 km) : Taxi (300-500 Rs), Voiture (10 min).',

      gettingAround: 'Village Trou d\'Eau Douce compact : embarcadère + restaurants + guesthouses à pied (10 min max). Vélo excellent (plat, location 5€/j). Voiture utile excursions Belle Mare, Mahébourg, autres sites.',

      carRental: 'Optionnel si séjour centré Île aux Cerfs (village compact). Utile si exploration côte est-sud. 25-40€/jour. Agences Mahébourg ou livraison Trou d\'Eau Douce. Permis français valide. Conduite à gauche.',

      publicTransport: 'Bus publics : Trou d\'Eau Douce-Mahébourg (20 min, 25 Rs), Trou d\'Eau Douce-Flacq (20 min, 25 Rs), vers Port-Louis (2h, 50 Rs). Pratiques économiques. Limités soir (dernier 18-19h).',

      taxi: 'Taxis disponibles embarcadère. Tarifs : Trou d\'Eau Douce-Belle Mare 300-500 Rs, Trou d\'Eau Douce-Mahébourg 400-600 Rs, Trou d\'Eau Douce-Aéroport 2000-2500 Rs. Négociez avant montée.',

      parking: 'Parking gratuit embarcadère (ombragé, 30-40 places, complet 9-11h haute saison). Parking gratuit village. Gardiennage informel (pourboire 50-100 Rs apprécié).'
    },

    nightlife: {
      overview: 'Vie nocturne Trou d\'Eau Douce = tranquille. 2-3 bars locaux ferment 22-23h. Village calme familial. Pour vie nocturne : Grand Baie (50 km, 1h voiture, peu pratique).',

      venues: [
        {
          name: 'Bar Symon\'s',
          type: 'Bar-Restaurant',
          description: 'Bar resto vue mer. Bières, cocktails, rhum. Musique chill. Ferme 23h. Clientèle mélangée touristes-locaux.'
        },
        {
          name: 'Bars locaux village',
          type: 'Bars mauriciens',
          description: '2-3 bars basiques. Bières Phoenix, rhum local. Ambiance mauricienne populaire. Prix doux (bière 60-100 Rs). Ferme 22h.'
        }
      ]
    },

    shopping: {
      overview: 'Shopping Trou d\'Eau Douce = limité basique. Supérette village, boutiques souvenirs embarcadère. Pour grand shopping : Flacq (marché mercredi, 15 km), Mahébourg (20 min), Grand Baie (1h).',

      spots: [
        {
          name: 'Supérette village',
          type: 'Épicerie',
          bestFor: 'Courses basiques : eau, snacks, pain, conserves. Choix limité. Prix locaux corrects.'
        },
        {
          name: 'Boutiques souvenirs embarcadère',
          type: 'Souvenirs',
          bestFor: 'Pareos, t-shirts, chapeaux, crème solaire. Prix négociables. Qualité moyenne. Pratique avant Île aux Cerfs.'
        },
        {
          name: 'Marché Flacq (mercredi)',
          type: 'Marché local',
          bestFor: 'Fruits, légumes, épices, tissus, vêtements. Authentique, prix bas. 15 km, 15 min voiture. Négociez.'
        },
        {
          name: 'Super U Flacq',
          type: 'Supermarché',
          bestFor: 'Courses complètes : alimentaire, alcool, tout. 15 km. Parking gratuit. Prix normaux.'
        }
      ]
    },

    itineraries: [
      {
        duration: '1 jour',
        title: 'Journée Trou d\'Eau Douce + Île aux Cerfs',
        days: [
          {
            day: 1,
            morning: '8h : Arrivée Trou d\'Eau Douce (parking embarcadère). 8h15 : Bateau public Île aux Cerfs (10€ A/R, départ 8h30, 10 min traversée). 8h45-12h : Île aux Cerfs Grande Plage : baignade lagon turquoise, snorkeling (location 200 Rs), détente, photos.',
            afternoon: '12h : Déjeuner Île aux Cerfs (resto 25-50€ cher) OU pique-nique apporté (gratuit). 13h30-15h30 : Activités nautiques (parachute 50€, jet-ski 80€) OU marche Petite Plage (plus calme). 16h : Bateau retour Trou d\'Eau Douce (dernier 16h30).',
            evening: '16h45 : Excursion GRSE cascade (30-40€, 2h, départ embarcadère) : remontée rivière pirogue, forêt tropicale, singes, baignade cascade. 18h45 : Retour. Dîner La Chaumière Masala (créole 10-20€).'
          }
        ]
      },
      {
        duration: '3 jours',
        title: 'Week-end base Trou d\'Eau Douce côte est',
        days: [
          {
            day: 1,
            morning: 'Arrivée Trou d\'Eau Douce, installation guesthouse (40-70€). Courses supérette. Exploration village à pied.',
            afternoon: 'Excursion GRSE cascade (30-40€, 2h) : pirogue, forêt, singes, baignade eau douce. Retour 17h.',
            evening: 'Dîner Symon\'s (fruits de mer). Coucher tôt (lendemain matinal Île aux Cerfs).'
          },
          {
            day: 2,
            morning: '8h30 : Bateau Île aux Cerfs (10€ A/R). 9h-13h : Matinée complète île : baignade, snorkeling, activités nautiques (parachute, jet-ski), exploration plages.',
            afternoon: '13h : Déjeuner île (resto ou pique-nique). 14h-16h : Continuation détente, marche Petite Plage, photos. 16h30 : Retour Trou d\'Eau Douce.',
            evening: '18h : Repos guesthouse. 19h : Dîner Chez Tino (paillote mer). Soirée tranquille.'
          },
          {
            day: 3,
            morning: 'Route Belle Mare (10 km, 10 min voiture/bus) : matinée plage publique Belle Mare (sublime). Baignade, snorkeling.',
            afternoon: 'Déjeuner Belle Mare. 14h : Route vers autre destination Maurice OU retour Trou d\'Eau Douce check-out.',
            evening: 'Départ selon planning.'
          }
        ]
      }
    ],

    budget: {
      overview: 'Budget Trou d\'Eau Douce = économique. Hébergement 35-70€ guesthouse. Repas 8-20€ créole. Île aux Cerfs bateau 10€ A/R. GRSE 30-40€. Budget 70-100€/jour possible, 120-150€ avec activités.',

      daily: {
        budget: {
          total: '70-100€/jour',
          accommodation: '35-60€ guesthouse',
          food: '15-25€ (créole + snacks)',
          activities: '10€ (bateau Île aux Cerfs public)',
          transport: '5-10€ (bus, vélo)'
        },
        midRange: {
          total: '120-180€/jour',
          accommodation: '60-100€ petit hôtel',
          food: '30-50€ (restos tous repas)',
          activities: '40-70€ (excursion catamaran Île aux Cerfs BBQ + GRSE)',
          transport: '10-20€ (voiture location)'
        }
      },

      savingTips: [
        'Guesthouse Trou d\'Eau Douce vs resort Belle Mare : économie 100-500€/nuit',
        'Bateau public vs catamaran : économie 40-60€ (10€ vs 60-70€)',
        'Pique-nique Île aux Cerfs : économie 20-40€/repas',
        'GRSE : négociez direct embarcadère (30-35€ vs 50€ agences)',
        'Repas créole local : économie vs restos touristiques (10-15€ vs 25-40€)',
        'Snorkeling : apportez masque-tuba perso (économie 200 Rs location)',
        'Hors saison (avril-mai) : guesthouses -30-40%, négociez direct',
        'Bus publics : économie max (25-40 Rs vs 300-2000 Rs taxi)',
        'Vélo vs voiture : économie 20-35€/jour (5€ vs 25-40€)',
        'Long séjour : tarif dégressif guesthouses (semaine = réduc 20%)',
        'Courses + cuisiner : économie si appart/guesthouse cuisine',
        'Activités Île aux Cerfs : packages multi-activités = réduc 15-20%'
      ]
    },

    practical: {
      whatToBring: [
        'Maillots de bain (2-3)',
        'Équipement snorkeling (ou location 200 Rs)',
        'Crème solaire SPF50+ waterproof REEF SAFE',
        'Chaussures eau (coraux Île aux Cerfs)',
        'Sac étanche (bateaux, GRSE pirogue)',
        'Serviette microfibre',
        'Chapeau/casquette',
        'Lunettes soleil polarisées',
        'Rashguard anti-UV',
        'GoPro/appareil waterproof (photos GRSE, Île aux Cerfs)',
        'Répulsif moustique (GRSE forêt)',
        'Cash (petits commerces parfois pas CB)',
        'Pique-nique si économie (courses supérette)',
        'Gourde (eau robinet potable)',
        'Sac à dos waterproof (excursions)'
      ],

      services: {
        atm: 'DAB Trou d\'Eau Douce : centre village (MCB). Également Mahébourg (15 km) et Flacq (15 km, plusieurs DAB). Retirez suffisant (frais fixes).',
        medical: 'Dispensaire public Trou d\'Eau Douce (urgences mineures). Pharmacie village. Hôpital Mahébourg (15 km). Cliniques privées Belle Mare (10 km). Urgences : Clinique Darné Port-Louis (1h, +230 601 2300).',
        wifi: 'WiFi gratuit guesthouses (débit variable). Cafés WiFi clients. Carte SIM 4G recommandée (10€/10Go aéroport). Réseau 4G correct village.',
        phone: 'Réseau 4G correct. Carte SIM locale : Emtel ou MyT (aéroport, Mahébourg, Flacq, 10€ = 10Go valable 30j).'
      },

      safety: [
        'Bateaux Île aux Cerfs : gilets fournis (portez obligatoirement)',
        'GRSE pirogue : suivez consignes guide (courant rivière)',
        'Singes GRSE : ne touchez PAS, ne nourrissez PAS (sauvages, mordent)',
        'Cascade GRSE : rochers glissants (prudence baignade)',
        'Île aux Cerfs : horaire bateau retour 16h30 dernier (soyez à l\'heure)',
        'Soleil : crème SPF50+ toutes 2h (réverbération eau intense)',
        'Hydratation : 2-3L eau/jour (chaleur + mer + excursions)',
        'Snorkeling : ne touchez pas coraux Île aux Cerfs',
        'Objets valeur plage : ne laissez pas (vols opportunistes possibles)',
        'Route : conduite à gauche si voiture',
        'Cash : ayez suffisant (DAB limités, commerces basiques)',
        'Méduses : rares mais possibles nov-mars'
      ],

      emergency: 'Police : 112. SAMU : 114. Pompiers : 115. Police Trou d\'Eau Douce : +230 480 2469. Garde-côtes : 213 5151. Dispensaire : +230 480 5454. Hôpital Mahébourg : +230 631 9303.'
    },

    tips: [
      '🚤 Bateau public Île aux Cerfs = best deal (10€ A/R vs 60-70€ catamaran)',
      '⏰ Départ matinal Île aux Cerfs : 8-9h (plage pour vous, lumière photos)',
      '🏞️ GRSE cascade = must-do (nature exceptionnelle, singes, baignade)',
      '🐒 Singes GRSE : observez sans toucher (sauvages, distance respectueuse)',
      '💰 Base économique est Maurice : guesthouses 35-60€, repas 8-15€',
      '🥪 Pique-nique Île aux Cerfs : économie 20-40€ (restos île chers)',
      '🤿 Snorkeling : apportez masque-tuba (économie location 200 Rs)',
      '🏖️ Belle Mare : 10 min voiture, plage sublime gratuite (complément)',
      '📅 Meilleure période : sept-nov (sec, mer calme, GRSE débit optimal)',
      '🛏️ Guesthouse centre village : proximité embarcadère (5 min marche)',
      '🚲 Vélo location : excellent village (plat, économique 5€/j)',
      '⛵ Négociez GRSE : direct embarcadère (30-35€ vs 50€ agences)',
      '📸 Photos : pirogues colorées, GRSE forêt, Île aux Cerfs paradis',
      '🌅 Sunset limité : côte est (lever soleil magnifique par contre)',
      '🔇 Village calme : aucune vie nocturne (Grand Baie 1h pour ça)'
    ],

    culture: {
      overview: 'Trou d\'Eau Douce village pêcheurs traditionnel transformé gateway touristique Île aux Cerfs. Nom "trou d\'eau douce" vient source eau douce alimentant village autrefois. Pêche pirogues traditionnelles encore active : familles pêcheurs depuis générations, vendent prises embarcadère matinal. GRSE (Grande Rivière Sud-Est) = plus longue rivière Maurice (34 km), traverse forêt tropicale préservée, importance écologique (mangroves, biodiversité). Singes macaques à longue queue (introduits 16-17e siècles par colonisateurs) population sauvage forêt. Village reste authentique malgré afflux touristes Île aux Cerfs : vie locale continue, écoles, temple hindou, église, marchés. Économie mixte : pêche traditionnelle + tourisme (bateaux, restos, guesthouses). Communauté multiculturelle harmonieuse (créoles, indo-mauriciens). Développement touristique contrôlé : hauteur bâtiments limitée, pas grands resorts village (préservation caractère).',

      events: [
        'Week-ends mauriciens : pique-niques familles plage village (locaux nombreux)',
        'Cavadee (jan-fév) : procession tamoule traverse village (fête religieuse)',
        'Maha Shivaratri (fév-mars) : pèlerinage hindou Grand Bassin (passage village)',
        'Fête nationale 12 mars : célébrations, animations',
        'Diwali (oct-nov) : fête lumières hindoue, village illuminé'
      ],

      etiquette: [
        'Embarcadère : respectez file attente bateaux (priorité locaux si urgence)',
        'Négociation : polie et souriante (mauriciens apprécient bonne humeur)',
        'GRSE singes : NE nourrissez JAMAIS (change comportement, danger)',
        'Photos : demandez permission locaux avant photographier',
        'Pirogues pêcheurs : ne montez pas sans permission (outils travail)',
        'Déchets : ZÉRO déchet rivière/mer (préservation environnement crucial)',
        'Topless : évitez plage village (familles locales conservatrices)',
        'Pourboire : apprécié restos, guides GRSE (10% bon service)',
        'Île aux Cerfs : horaire retour respectez (dernier bateau 16h30)',
        'Bonjour/Merci : politesse appréciée (créoles très courtois)',
        'Marché poisson : négociez si achetez, sinon respectez distance (travail)',
        'Volume musique : modéré (respect tranquillité village)',
        'Crème solaire REEF SAFE : Île aux Cerfs parc marin protégé',
        'GRSE forêt : ne cueillez pas plantes (préservation flore)',
        'Cascade : ne savonnez pas eau (pollution rivière)'
      ]
    }
  },

  'port-louis': {
    slug: 'port-louis',
    name: 'Port-Louis',
    title: 'Que faire à Port-Louis',
    metaTitle: 'Port-Louis Maurice : capitale, Caudan Waterfront, marché central, musées',
    metaDescription: 'Port-Louis capitale : Caudan Waterfront, marché central coloré, musées historiques, Chinatown, quartiers coloniaux et shopping pour découvrir la ville mauricienne.',
    heroImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/03/ile-maurice-voyage-scaled.jpg',

    intro: 'Port-Louis est la capitale bouillonnante de l\'Île Maurice, cœur politique-économique-culturel du pays. Ville portuaire historique cosmopolite : Caudan Waterfront moderne, marché central authentique bouillonnant, Chinatown coloré, musées fascinants, fort Adélaïde panoramique, business district gratte-ciels. Contraste saisissant entre tradition et modernité, melting-pot culturel mauricien à l\'état pur.',

    highlights: [
      'Capitale Maurice : centre politique-économique, gratte-ciels modernes',
      'Caudan Waterfront : mall shopping-restaurants-casino, front de mer rénové',
      'Marché central : marché authentique fruits-légumes-épices-artisanat, ambiance locale intense',
      'Chinatown : quartier chinois historique, temples, street food, herboristeries',
      'Fort Adélaïde (Citadelle) : panorama 360° Port-Louis-baie, histoire coloniale',
      'Musées : Blue Penny (timbres rares), musée Histoire Naturelle, Aapravasi Ghat (UNESCO)',
      'Melting-pot culturel : créoles-indiens-chinois-musulmans, cohabitation harmonieuse'
    ],

    description: 'Port-Louis occupe la côte nord-ouest, à 20 km de l\'aéroport (25-30 min). Capitale depuis 1735 (époque française), devenue port stratégique océan Indien. Population 150 000 habitants (ville), 200 000+ (agglomération). Ville se divise en quartiers distincts : Business District (gratte-ciels, banques, sièges sociaux), Caudan Waterfront (shopping-loisirs face port), Marché Central (cœur populaire authentique), Chinatown (rue Corderie, commerces chinois), quartier musulman (mosquée Jummah, artisans), Plaine Verte (résidentiel populaire). Contraste urbain saisissant : modernité buildings vs architecture coloniale (Government House, théâtre, anciens entrepôts rénovés). Ambiance urbaine trépidante en semaine (bureaux, commerces, trafic intense), calme quasi-total dimanches-jours fériés (commerces fermés, ville déserte). Température +3-5°C vs côtes (cuvette urbaine, chaleur). Port-Louis = ville visite culturelle-historique-shopping journée, pas destination séjour balnéaire (plages médiocres, hébergements limités).',

    bestMonths: ['mai', 'juin', 'septembre', 'octobre', 'novembre'],

    weatherByMonth: {
      'mai': 'Bon : 27°C (+3°C vs côtes), sec, chaud mais supportable',
      'juin': 'Correct : 25°C, sec, frais relatif, meilleur mois visiter',
      'septembre': 'Bon : 26°C, sec, chaleur modérée',
      'octobre': 'Chaud : 28°C, sec, chaleur urbaine commence',
      'novembre': 'Très chaud : 30°C, humide commence, évitez après-midis'
    },

    coordinates: { lat: -20.1609, lng: 57.5012 },
    nearbyLocations: ['pamplemousses', 'moka'],
    distanceFromAirport: '20 km (25-30 min en voiture, 45 min-1h trafic)',

    accommodation: {
      overview: 'Port-Louis = destination visite journée (séjour côtes recommandé). Hébergements limités : quelques hôtels business (80-150€), guesthouses rares. La plupart visiteurs logent côtes (Grand Baie 20 km, Flic en Flac 30 km) et viennent excursion journée.',

      zones: [
        {
          name: 'Centre Port-Louis (Business)',
          description: 'Quartier affaires. Hôtels business (Labourdonnais Waterfront). Pratique réunions professionnelles. Ambiance urbaine bruyante. Désert le soir-dimanches.',
          priceRange: '80-180€/nuit',
          bestFor: 'Voyageurs affaires, ceux voulant immersion urbaine',
          pros: [
            'Centre-ville immédiat (Caudan, marché à pied)',
            'Hôtels business correct confort',
            'Restaurants nombreux semaine',
            'Pratique rendez-vous professionnels',
            'Parking hôtels sécurisé'
          ],
          cons: [
            'Ambiance urbaine bruyante (trafic, foule)',
            'Chaleur +3-5°C vs côtes',
            'Désert soirs-dimanches (commerces fermés)',
            'Aucune plage (mer polluée port)',
            'Peu de charme (béton, buildings)',
            'Prix élevés vs confort offert'
          ]
        },
        {
          name: 'Côtes nord-ouest (Grand Baie, Flic en Flac)',
          description: 'Stations balnéaires 20-30 km. Tous hébergements. Port-Louis accessible 30-45 min voiture. Recommandé : séjour plage + excursion journée capitale.',
          priceRange: '40-500€/nuit',
          bestFor: 'Tous : familles, couples, ceux voulant plage + culture',
          pros: [
            'Séjour balnéaire + excursion culturelle Port-Louis',
            'Tous budgets hébergements',
            'Plages sublimes, restos variés',
            'Ambiance vacances détendue',
            'Port-Louis faisable journée (30-45 min)'
          ],
          cons: [
            'À 20-30 km (voiture/bus quotidien si visite Port-Louis)',
            'Trajet temps + trafic possible',
            'Location voiture recommandée'
          ]
        }
      ],

      bookingTips: [
        'Port-Louis = visite journée depuis côtes (recommandé fortement)',
        'Si logez Port-Louis : hôtel business suffit (séjour court)',
        'Évitez week-ends Port-Louis : ville morte (commerces fermés)',
        'Grand Baie/Flic en Flac meilleures bases : plage + Port-Louis 30-45 min',
        'Réservez parking hôtel Port-Louis (stationnement rue difficile)',
        'Hôtel Labourdonnais Waterfront = meilleur Port-Louis (Caudan, vue)',
        'Vérifiez climatisation (essentiel, chaleur urbaine intense)'
      ]
    },

    dining: {
      overview: 'Port-Louis = paradis gastronomique mauricien. Toutes cuisines : créole, indienne, chinoise, musulmane, française, street food. Prix tous budgets (3-60€/repas). Caudan = restos modernes. Marché = street food authentique. Chinatown = spécialités chinoises.',

      restaurants: [
        {
          name: 'Le Courtyard (Caudan)',
          type: 'International-Fusion',
          priceRange: '20-45€',
          specialty: 'Cuisine fusion créole-européenne. Cadre élégant cour intérieure. Menu midi bureaux. Bon rapport qualité-prix.'
        },
        {
          name: 'First Restaurant (Chinatown)',
          type: 'Chinois',
          priceRange: '8-20€',
          specialty: 'Dim sum, nouilles, canard laqué. Institution chinoise Port-Louis depuis 1960. Authentique, copieux. Réservez.'
        },
        {
          name: 'Street food marché central',
          type: 'Street food créole',
          priceRange: '2-6€',
          specialty: 'Dholl puri, gâteaux piments, mine frite, samosas, alouda. Authentique, bondé midi. Prix dérisoires. Ambiance locale intense.'
        },
        {
          name: 'Namaste Restaurant',
          type: 'Indien végétarien',
          priceRange: '6-15€',
          specialty: 'Thali, dosa, biryani végétarien. Cuisine sud-indienne authentique. Quartier musulman. Prix doux, portions généreuses.'
        },
        {
          name: 'Le Capitaine (Caudan)',
          type: 'Fruits de mer',
          priceRange: '18-40€',
          specialty: 'Poissons, fruits de mer, vue port. Ambiance brasserie. Clientèle affaires midi. Bon poissons frais.'
        },
        {
          name: 'Lambic Caudan',
          type: 'Belge-International',
          priceRange: '20-40€',
          specialty: 'Moules-frites, bières belges. Succursale célèbre restaurant Grand Baie. Terrasse vue front de mer.'
        },
        {
          name: 'Gargotes rue Corderie (Chinatown)',
          type: 'Street food chinois',
          priceRange: '3-10€',
          specialty: 'Nouilles sautées, raviolis vapeur, poulet frit. Authentique, pas cher. Ambiance populaire.'
        }
      ],

      localSpecialties: [
        'Dholl puri marché : LA référence Maurice (50-80 Rs, queue 12-14h)',
        'Mine frite : nouilles sautées, spécialité sino-mauricienne',
        'Gâteaux piments : beignets lentilles épicés, apéritif local',
        'Alouda : boisson dessert (lait, agar-agar, sirop), rafraîchissante',
        'Briani musulman : riz épicé viande, quartier mosquée',
        'Dim sum Chinatown : raviolis vapeur, spécialité matinale',
        'Samoussas marché : bœuf, légumes, poulet (meilleurs Maurice)'
      ],

      budgetMeals: 'Street food marché central : 2-6€/repas complet (dholl puri, mine frite). Gargotes Chinatown : 3-10€. Namaste végétarien : 6-12€. Food courts Caudan : 8-15€.',

      fineDining: 'Le Courtyard (Caudan, fusion 20-45€), Table du Château (Château Labourdonnais, 15 km, gastronomie française 40-80€). Options limitées vs côtes touristiques.'
    },

    beaches: {
      overview: 'Port-Louis = ZÉRO plages recommandables. Baie port pollué (bateaux, industrie). Quelques plages urbaines déconseillées (Pointe aux Sables sale). Pour plages : côtes nord-ouest (Trou aux Biches, Flic en Flac, 20-30 km, 30 min voiture).',

      list: [
        {
          name: 'Pas de plages Port-Louis',
          description: 'Port-Louis = ville portuaire industrielle. Baie polluée. Plages urbaines (Pointe aux Sables) sales, non recommandées baignade. Port-Louis = visite culturelle-historique-shopping, PAS balnéaire.',
          bestFor: ['N/A - Allez côtes pour plages'],
          facilities: ['N/A'],
          access: 'N/A - Allez Trou aux Biches (20 km) ou Flic en Flac (30 km)'
        }
      ]
    },

    transport: {
      howToGetThere: 'Depuis aéroport SSR (20 km, 25-30 min) : Taxi (1200-1500 Rs = 28-35€). Voiture location (A1 Motorway directe). Bus public (nombreuses lignes, 1h, 40 Rs, peu pratique bagages). Transfert privé (30-40€). Depuis côtes : Bus publics fréquents toutes régions. Voiture 20-45 min selon origine.',

      gettingAround: 'Centre Port-Louis compact : Caudan-marché-Chinatown-fort Adélaïde faisables à pied (15-20 min distances). Taxis nombreux. Bus publics partout. Voiture déconseillée centre (trafic intense, parking difficile). Marche à pied = meilleur option visite.',

      carRental: 'Déconseillé centre Port-Louis (trafic cauchemardesque, parking rare-cher). Utile si base côte + excursion journée capitale (parking Caudan payant mais sécurisé 50-100 Rs/j). Si juste visite : bus/taxi meilleurs.',

      publicTransport: 'Bus publics excellents : Port-Louis = hub central Maurice. Lignes vers TOUTES régions île. Gare routière Immigration Square (nord) et Victoria Square (sud). Tarifs 25-50 Rs selon distance. Fréquents 6h-19h, limités après. Bondés heures pointe (8-9h, 16-18h).',

      taxi: 'Taxis nombreux (appelez ou stations). Tarifs : Port-Louis-Grand Baie 800-1000 Rs, Port-Louis-Flic en Flac 1000-1200 Rs, Port-Louis-Aéroport 1200-1500 Rs, Port-Louis intra-muros 100-200 Rs. Négociez AVANT. Trafic = ajoute temps.',

      parking: 'Parking payant Caudan (50-100 Rs/jour, sécurisé, recommandé). Parkings municipaux rares-complets. Stationnement rue difficile (places rares, gardiens informels 50-100 Rs). Évitez voiture si possible.'
    },

    nightlife: {
      overview: 'Vie nocturne Port-Louis = limitée. Casino Caudan, quelques bars-lounges. Ville se vide 18h (bureaux ferment, gens rentrent banlieues). Dimanches-jours fériés = ville fantôme. Pour vraie vie nocturne : Grand Baie (20 km).',

      venues: [
        {
          name: 'Casino de Maurice (Caudan)',
          type: 'Casino',
          description: 'Machines à sous, black jack, roulette, poker. Ouvert 10h-4h. Entrée gratuite, dress code correct. Bar, restaurant sur place.'
        },
        {
          name: 'Keg & Marlin (Caudan)',
          type: 'Pub-Bar',
          description: 'Pub britannique. Bières pression, retransmissions sportives. Ambiance conviviale. Ferme 23h. Clientèle expatriés-bureaux.'
        },
        {
          name: 'Bars Caudan Waterfront',
          type: 'Bars-Lounges',
          description: '3-4 bars terrasses Caudan. Cocktails, vue port. Ambiance after-work semaine. Ferme 23h-minuit. Calme vs Grand Baie.'
        }
      ]
    },

    shopping: {
      overview: '⭐ Port-Louis = CAPITALE shopping Maurice. Caudan Waterfront (mall moderne), marché central (authentique), Chinatown (herboristeries, tissus), rue Royale (bijoutiers, électronique). Tous budgets, tous styles. Négociez hors malls.',

      spots: [
        {
          name: 'Caudan Waterfront',
          type: 'Mall moderne',
          bestFor: 'Marques internationales, souvenirs qualité, restaurants, cinéma, casino. Prix fixes. Climatisé. Ouvert 9h30-19h30 (dim 9h30-15h). Parking sécurisé.'
        },
        {
          name: 'Marché Central',
          type: 'Marché authentique',
          bestFor: '⭐ IMMANQUABLE. Fruits, légumes, épices, artisanat, vêtements, souvenirs. Ambiance locale intense, odeurs, couleurs. Prix négociables. Ouvert lun-sam 6h-18h (dim 6h-12h).'
        },
        {
          name: 'Chinatown (rue Corderie)',
          type: 'Commerces chinois',
          bestFor: 'Herboristeries, médecine chinoise, tissus, baguettes, thés, décoration asiatique. Authentique, prix négociables. Ouvert lun-sam 9h-17h.'
        },
        {
          name: 'Rue Royale',
          type: 'Rue commerciale',
          bestFor: 'Bijoutiers (or, diamants), électronique, montres, parfums. Prix compétitifs. Négociez. Attention arnaques (vérifiez certifications bijoux).'
        },
        {
          name: 'Blue Penny Museum (Caudan)',
          type: 'Musée-Boutique',
          bestFor: 'Timbres rares (Blue Penny, Red Penny), histoire postale. Boutique souvenirs qualité. Entrée musée 200 Rs. Fascinant philatélistes.'
        }
      ]
    },

    itineraries: [
      {
        duration: '1 jour',
        title: 'Journée complète Port-Louis culture-histoire-shopping',
        days: [
          {
            day: 1,
            morning: '8h : Arrivée Port-Louis (bus côte ou voiture parking Caudan). 8h30-10h : Marché Central (matinée = meilleur moment, frais, moins chaud). Exploration étages : fruits-légumes (RDC), artisanat-souvenirs (1er), vêtements (2e). Photos, odeurs, ambiance locale intense. Street food breakfast : dholl puri, alouda (2-5€). 10h15-11h30 : Chinatown (rue Corderie 10 min marche) : herboristeries, temple Thien Thane, gargotes nouilles. 11h45-12h30 : Fort Adélaïde (Citadelle, 15 min marche montée) : panorama 360° Port-Louis-montagnes-baie. Photos. Histoire coloniale britannique.',
            afternoon: '12h45 : Déjeuner First Restaurant (Chinatown, dim sum, réservez) ou Le Courtyard (Caudan, fusion). 14h-16h : Caudan Waterfront : shopping (marques, souvenirs), Blue Penny Museum (timbres rares, 200 Rs, 1h visite), front de mer rénové. Pause café terrasse vue port. 16h15-17h15 : Aapravasi Ghat (UNESCO, gratuit, 15 min marche Caudan) : site historique immigration indienne, musée émouvant.',
            evening: '17h30 : Route retour côte (avant rush hour 18h) OU dîner Port-Louis (Lambic Caudan) puis retour 19-20h.'
          }
        ]
      },
      {
        duration: '3 jours',
        title: 'Week-end immersion urbaine + nord île',
        days: [
          {
            day: 1,
            morning: 'Arrivée Port-Louis, installation hôtel Labourdonnais (ou logement Grand Baie). 9h-12h : Marché Central complet : street food, shopping souvenirs, immersion locale.',
            afternoon: '13h : Déjeuner marché ou First Restaurant. 14h-17h : Chinatown (rue Corderie, temple), quartier musulman (mosquée Jummah, artisans), fort Adélaïde panorama.',
            evening: 'Dîner Caudan. Casino ou retour hébergement.'
          },
          {
            day: 2,
            morning: '9h-12h : Musées : Blue Penny (timbres, Caudan), Musée Histoire Naturelle (dodo, gratuit), Aapravasi Ghat (UNESCO, immigration indienne).',
            afternoon: '13h : Déjeuner Le Courtyard. 14h-17h : Caudan shopping complet. Détente front de mer. Photos port.',
            evening: 'Route Grand Baie (20 km, 30 min) : dîner + vie nocturne OU retour Port-Louis.'
          },
          {
            day: 3,
            morning: 'Excursion Jardin Pamplemousses (10 km nord, 20 min) : nénuphars géants, tortues, spices. 3h visite.',
            afternoon: 'Château Labourdonnais (15 km) : visite château colonial, dégustation rhums, déjeuner gastronomique.',
            evening: 'Retour Port-Louis ou continuation vers autre destination.'
          }
        ]
      }
    ],

    budget: {
      overview: 'Budget Port-Louis = économique à moyen. Street food 2-6€/repas. Entrées musées gratuits-200 Rs. Shopping variable. Visite journée = 30-60€ (transport + repas + entrées + achats). Hébergement si nuit = 80-150€.',

      daily: {
        budget: {
          total: '30-50€/jour (visite journée sans hébergement)',
          accommodation: '0€ (logement côte)',
          food: '10-20€ (street food + 1 resto)',
          activities: '5-10€ (musées, fort)',
          transport: '5-10€ (bus ou essence + parking)',
          shopping: '10-20€ (souvenirs marché)'
        },
        midRange: {
          total: '60-100€/jour',
          accommodation: '0€ (logement côte) ou 80-120€ si hôtel PL',
          food: '25-40€ (restos)',
          activities: '10-15€ (musées tous)',
          transport: '10-20€ (taxi ou voiture parking)',
          shopping: '20-50€ (Caudan + marché)'
        }
      },

      savingTips: [
        'Visite journée depuis côte vs hébergement PL : économie 80-120€',
        'Street food marché vs restos : économie 15-30€/j',
        'Bus publics vs taxi : économie 700-1200 Rs (25-50 Rs vs 800-1200 Rs)',
        'Musées gratuits : Histoire Naturelle, Aapravasi Ghat (économie vs payants)',
        'Shopping marché vs Caudan : économie 30-50% (négociez)',
        'Bouteille eau réutilisable : économie 100 Rs/j vs achats répétés',
        'Visite semaine vs week-end : commerces ouverts, ambiance vivante',
        'Marche à pied centre : gratuit vs taxis intra-muros (100-200 Rs)',
        'Déjeuner midi bureaux : menus affaires avantageux restos (économie 20-30%)',
        'Évitez bijoutiers rue Royale : souvent surpayés, arnaques fréquentes'
      ]
    },

    practical: {
      whatToBring: [
        'Vêtements légers respirants (chaleur urbaine +3-5°C)',
        'Chapeau/casquette (soleil intense)',
        'Lunettes soleil',
        'Bouteille eau réutilisable (hydratation essentielle)',
        'Sac à dos antivol (foule marché, pickpockets rares mais existent)',
        'Cash (marché, street food, taxis)',
        'Carte bancaire (Caudan)',
        'Chaussures confort marche (pavés, montée fort)',
        'Appareil photo (marché, Chinatown, fort colorés)',
        'Mouchoirs/lingettes (chaleur, transpiration)',
        'Crème solaire',
        'Tenue respectueuse (mosquée si visite : épaules-jambes couvertes)'
      ],

      services: {
        atm: 'DAB nombreux : Caudan Waterfront (plusieurs), rue Royale, gare routière, marché central zone. Toutes banques : MCB, SBM, Barclays. Retirez suffisant (évitez frais multiples).',
        medical: 'Pharmacies nombreuses centre (rue Royale, Caudan). Hôpital public Jeetoo (gratuit urgences, qualité correcte). Cliniques privées : Darné (+230 601 2300, urgences 24/7, meilleure privée Maurice), Wellkin, City Clinic. Ambulance : SAMU 114.',
        wifi: 'WiFi gratuit : Caudan Waterfront (mall complet), cafés-restos (clients), hôtels. Réseau 4G excellent centre. Carte SIM locale : boutiques Caudan, Emtel/MyT (10€/10Go).',
        phone: 'Réseau 4G excellent Port-Louis. Carte SIM : Caudan (boutiques Emtel/MyT), aéroport. 10€ = 10Go valable 30j.'
      },

      safety: [
        'Pickpockets : attention marché central, gare routière (foule). Sac devant, portefeuille poche avant.',
        'Arnaques bijoutiers : rue Royale vérifiez certifications, négociez, méfiez-vous super affaires',
        'Chaleur : hydratez 2-3L eau/jour (déshydratation rapide urbain)',
        'Soleil : chapeau essentiel (insolation fréquente étrangers)',
        'Trafic : traversées prudentes (conduite à gauche, scooters nombreux)',
        'Objets valeur voiture : rien visible (parking Caudan sécurisé OK)',
        'Évitez quartiers périphériques nuit : Plaine Verte, Vallée Pitot (pas dangereux mais peu éclairés)',
        'Mendicité : courante marché-gare, donnez ou ignorez poliment',
        'Marchands agressifs : rue Royale parfois insistants, refusez fermement poliment',
        'Photos : demandez permission marché (certains commerçants réticents)',
        'Hygiene street food : choisissez stands bondés locaux (fraîcheur garantie)',
        'Embouteillages : prévoyez temps supplémentaire (rush 7-9h, 16-18h)',
        'Dimanches : ville morte (commerces fermés, évitez si shopping prévu)'
      ],

      emergency: 'Police : 112. SAMU : 114. Pompiers : 115. Police Port-Louis : +230 212 2218. Clinique Darné (urgences 24/7) : +230 601 2300. Hôpital Jeetoo : +230 212 3201. Garde-côtes : 213 5151.'
    },

    tips: [
      '🏪 Marché central = IMMANQUABLE (ambiance locale intense, street food, souvenirs)',
      '⏰ Arrivez matinée marché : 8-10h (fraîcheur, moins chaud, produits frais)',
      '🥟 Street food marché : dholl puri queue 12-14h = MEILLEUR Maurice (valent attente)',
      '🏰 Fort Adélaïde : montée 15 min, panorama exceptionnel (photos obligatoires)',
      '🛍️ Shopping : marché (souvenirs pas chers, négociez) + Caudan (qualité, prix fixes)',
      '🐉 Chinatown : dim sum First Restaurant (réservez), herboristeries fascinantes',
      '🏛️ Musées gratuits : Histoire Naturelle (dodo), Aapravasi Ghat (UNESCO, émouvant)',
      '💰 Budget-friendly : street food 2-6€, bus 25-50 Rs, entrées gratuites-200 Rs',
      '🚌 Transport : bus publics excellents (hub central), marche centre suffisante',
      '🚗 Voiture déconseillée : trafic cauchemar, parking rare-cher (bus/taxi meilleurs)',
      '📅 Évitez dimanches : commerces fermés, ville fantôme (visite semaine impérative)',
      '☀️ Chaleur : +3-5°C vs côtes, hydratez constamment, chapeau essentiel',
      '⏱️ Rush hours : évitez 7-9h et 16-18h (embouteillages monstres)',
      '🏖️ Zéro plages : Port-Louis = culture-shopping, pas balnéaire (côtes pour ça)',
      '📸 Photos : marché coloré, Chinatown, fort panorama, architecture coloniale'
    ],

    culture: {
      overview: 'Port-Louis fondée 1735 par gouverneur français Mahé de Labourdonnais, nommée honneur roi Louis XV. Devient port stratégique Route des Indes, escale navires Europe-Asie. Architecture reflète histoire coloniale : bâtiments français 18e (Government House), britanniques 19e (théâtre, entrepôts), modernes 20-21e (gratte-ciels). Melting-pot culturel exceptionnel : créoles (descendants esclaves africains-malgaches), Indo-mauriciens (majorité, arrivés travailleurs engagés post-abolition 1835), Sino-mauriciens (commerçants, Chinatown depuis 19e), musulmans (commerçants, mosquée Jummah 1853). Cohabitation harmonieuse : temples hindous, mosquées, églises, pagodes coexistent. Économie : finance (offshore banking), commerce, port (4e Afrique), administrations, tourisme limité. Aapravasi Ghat (UNESCO) : site débarquement travailleurs engagés indiens 1849-1923 (500 000 personnes), lieu mémoire émigration indienne mondiale. Blue Penny Museum : timbres rares 1847 (Blue Penny, Red Penny, valeur millions €). Dodo (oiseau disparu, symbole Maurice) : squelette Musée Histoire Naturelle. Port-Louis = cœur identité mauricienne moderne : business, culture, mémoire historique.',

      events: [
        'Fête nationale 12 mars : défilés, concerts, animations centre-ville',
        'Thaipoosam Cavadee (jan-fév) : procession tamoule spectaculaire traversant ville',
        'Nouvel An chinois (jan-fév) : Chinatown décoré, danses lions, pétards',
        'Diwali (oct-nov) : fête lumières hindoue, illuminations ville',
        'Eid (dates variables) : fête musulmane, quartier mosquée animé',
        'Marathon Port-Louis (août) : course traversant capitale'
      ],

      etiquette: [
        'Marché : négociez poliment souvenirs, ne touchez pas fruits sans demander',
        'Photos : demandez permission commerçants-vendeurs marché (certains refusent)',
        'Mosquée Jummah : visite possible hors prières (épaules-jambes couvertes, chaussures retirées)',
        'Temples hindous-chinois : respect, chaussures retirées, pas photos intérieur sans permission',
        'Tenue : correcte (pas débardeurs trop courts, shorts très courts lieux culte)',
        'Marchandage : accepté marché-Chinatown-rue Royale, pas Caudan (prix fixes)',
        'Mendiants : donnez ou ignorez poliment (pas obligation)',
        'File attente : respectez (Mauriciens ordonnés, rechignent resquilleurs)',
        'Bonjour/Merci : créole "bonzour/mersi" apprécié (effort langue locale)',
        'Pourboire : non obligatoire, apprécié bons services restos (10%)',
        'Déchets : poubelles disponibles, ne jetez pas rue (amendes possibles)',
        'Klaxon : courant (trafic dense, patience nécessaire)',
        'Vendeurs rue : refusez fermement poliment (bijoux, montres souvent fausses)',
        'Street food : mangez debout acceptable (pas places assises souvent)',
        'Respect diversité : Port-Louis = melting-pot, respect toutes communautés essentiel'
      ]
    }
  },

  'souillac': {
    slug: 'souillac',
    name: 'Souillac',
    title: 'Que faire à Souillac',
    metaTitle: 'Souillac Maurice : Gris Gris, Rochester Falls, côte sauvage sud',
    metaDescription: 'Souillac sud Maurice : Gris Gris cliffs spectaculaires, Roche Qui Pleure, Rochester Falls cascade, côte sauvage battue par les vagues et village authentique.',
    heroImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/03/ile-maurice-voyage-scaled.jpg',

    intro: 'Souillac est le village sauvage de la côte sud mauricienne, aux antipodes des plages carte postale nord. Falaises dramatiques battues par vagues puissantes océan Indien, paysages spectaculaires Gris Gris, Roche Qui Pleure mystérieuse, Rochester Falls cascade forêt. Ambiance authentique mélancolique, nature brute préservée, loin tourisme de masse.',

    highlights: [
      'Gris Gris : falaises spectaculaires, vagues puissantes, paysages dramatiques côte sud',
      'Roche Qui Pleure : rocher troué vagues, légende romantique locale',
      'Rochester Falls : cascade 10m forêt tropicale, baignade bassin naturel',
      'Côte sauvage préservée : loin tourisme masse, nature brute authentique',
      'Village créole authentique : ambiance locale mélancolique tranquille',
      'Telfair Garden : jardin historique colonial, botanique',
      'Proximité Bois Chéri : plantation thé, usine, dégustation'
    ],

    description: 'Souillac se situe sur la côte sud, à 45 km de l\'aéroport (50 min) et 15 km à l\'ouest de Mahébourg. Village côtier de 4000 habitants, nommé Vicomte de Souillac (gouverneur français 1779-1787). La côte sud se distingue radicalement du reste de Maurice : pas de lagon protecteur (récif corallien absent), vagues océan Indien déferlent directement falaises basaltiques (8-15m hauteur), baignade dangereuse-interdite. Paysages spectaculaires dramatiques : Gris Gris (falaises noires, vagues explosant rochers, prairies verdoyantes contrastant bleu intense océan), Roche Qui Pleure (rocher basaltique troué par érosion, eau jaillit trou à chaque vague, légende femme pleurant mari perdu mer). Rochester Falls (Cascade Rochester) à 4 km intérieur : cascade rectangulaire 10m hauteur, colonnes basaltiques géométriques (orgues), bassin naturel baignade eau douce fraîche, forêt tropicale. Village Souillac reste authentique calme : quelques guesthouses, restos créoles, musée Robert Edward Hart (poète mauricien, maison-musée vue mer), front de mer promenade tranquille. Ambiance mélancolique tranquille : peu touristes, locaux pêche-agriculture canne, rythme lent. Sud Maurice = région la plus préservée : nature sauvage, villages créoles authentiques, traditions fortes.',

    bestMonths: ['mai', 'juin', 'juillet', 'août', 'septembre', 'octobre'],

    weatherByMonth: {
      'mai': 'Bon : 25°C, sec, vent sud commence (vagues puissantes spectacle)',
      'juin': 'Spectaculaire : 23°C, vent fort sud, vagues énormes Gris Gris (photos dramatiques)',
      'juillet': 'Très venteux : 22°C, vent maximum, vagues impressionnantes, frais',
      'août': 'Venteux : 22°C, vent fort continue, mer déchaînée spectaculaire',
      'septembre': 'Idéal : 23°C, vent diminue, mer encore agitée, meilleur compromis',
      'octobre': 'Parfait : 25°C, vent modéré, mer calme relatif, agréable visite'
    },

    coordinates: { lat: -20.5167, lng: 57.5167 },
    nearbyLocations: ['mahebourg', 'riviere-des-anguilles'],
    distanceFromAirport: '45 km (50 min en voiture)',

    accommodation: {
      overview: 'Souillac = destination excursion journée principalement (peu hébergements). Quelques guesthouses simples (35-60€), 1-2 hôtels (60-120€). La plupart visiteurs logent Mahébourg (15 km est, plus vivant) ou Blue Bay (25 km est, plage+snorkeling) et viennent excursion.',

      zones: [
        {
          name: 'Village Souillac',
          description: 'Centre village. Guesthouses créoles simples. Ambiance locale authentique calme. Proximité Gris Gris (3 km). Peu de commodités. Pour amateurs authenticité nature.',
          priceRange: '35-70€/nuit',
          bestFor: 'Amateurs nature sauvage, petits budgets, ceux cherchant solitude',
          pros: [
            'Ambiance authentique 100% locale',
            'Prix abordables (35-60€)',
            'Gris Gris 3 km (10 min voiture)',
            'Calme absolu (peu touristes)',
            'Rochester Falls 4 km',
            'Contact population locale facile'
          ],
          cons: [
            'Hébergements basiques (confort simple)',
            'Très peu restaurants (2-3 créoles)',
            'Aucune animation soir',
            'Pas de plage baignade (mer dangereuse)',
            'Voiture indispensable (isolement)',
            'Commerces limités (épicerie basique)'
          ]
        },
        {
          name: 'Mahébourg (15 km est)',
          description: 'Village historique animé. Plus de choix hébergements-restaurants. Front de mer agréable. Souillac accessible 15 min voiture. Meilleure base si visite sud multi-jours.',
          priceRange: '40-100€/nuit',
          bestFor: 'Ceux voulant base sud confortable + exploration Souillac',
          pros: [
            'Plus vivant que Souillac (marché, commerces)',
            'Choix hébergements-restaurants supérieur',
            'Front de mer promenade',
            'Musée Naval, histoire coloniale',
            'Souillac 15 km (15 min voiture)',
            'Proximité Blue Bay (15 km, snorkeling)'
          ],
          cons: [
            'À 15 km Souillac (voiture quotidien)',
            'Moins authentique que Souillac',
            'Pas de nature spectaculaire immédiate'
          ]
        }
      ],

      bookingTips: [
        'Souillac = excursion journée depuis Mahébourg ou Blue Bay (recommandé)',
        'Si logez Souillac : 1-2 nuits suffisent (voir Gris Gris, Rochester Falls, tranquillité)',
        'Guesthouses Souillac : réservez direct (téléphone, peu online)',
        'Mahébourg meilleure base sud : infrastructures + Souillac 15 min',
        'Hors saison (avril-mai) : guesthouses négociables -40% (peu demande)',
        'Voiture indispensable : Gris Gris 3 km, Rochester Falls 4 km, commerces Mahébourg',
        'Vérifiez chauffage eau (hiver juin-août frais 22°C)',
        'Prévoyez provisions : restaurants limités Souillac (2-3 seulement)'
      ]
    },

    dining: {
      overview: 'Restauration Souillac = très limitée. 2-3 restos créoles basiques (8-20€). Spécialité fruits de mer (pêche locale malgré mer agitée). Pour + choix : Mahébourg (15 km). Apportez provisions si séjour.',

      restaurants: [
        {
          name: 'Le Batelage',
          type: 'Créole-Fruits de mer',
          priceRange: '12-25€',
          specialty: 'Poisson frais, rougaille, curry. Terrasse vue falaises Gris Gris. Seul resto correct Souillac. Réservez week-ends.'
        },
        {
          name: 'Gargote village',
          type: 'Créole local',
          priceRange: '6-12€',
          specialty: 'Cuisine maison créole simple. Mine frite, carry, rougaille. Prix doux, portions correctes. Pas toujours ouvert (appeler avant).'
        },
        {
          name: 'Snacks Souillac',
          type: 'Street food',
          priceRange: '3-6€',
          specialty: 'Dholl puri, samoussas, gâteaux piments. Basique mais authentique. Prix locaux très doux.'
        }
      ],

      localSpecialties: [
        'Poulpe (ourite) curry : spécialité sud, poulpe pêché falaises',
        'Poisson salé créole : conservation traditionnelle, plat local',
        'Rougaille saucisse : plat réconfortant, populaire région',
        'Dholl puri : snack mauricien, moins bon que Port-Louis mais correct'
      ],

      budgetMeals: 'Snacks : dholl puri, samoussas 50-100 Rs (1-2€). Gargote : repas complet 6-10€. Pique-nique : provisions Mahébourg (Super U), mangez spots nature (Gris Gris, Rochester Falls).',

      fineDining: 'Aucune gastronomie Souillac (village simple). Le Batelage = meilleur (créole correct, vue). Pour fine dining : resorts nord-ouest (1h+) ou Mahébourg limité.'
    },

    beaches: {
      overview: 'Souillac = ZÉRO plages baignade. Côte sud = falaises, vagues puissantes, courants dangereux. Baignade MER INTERDITE (mortelle). L\'ATTRAIT = paysages spectaculaires dramatiques, nature sauvage, Rochester Falls baignade eau douce. Pour plages : Blue Bay (25 km, 30 min).',

      list: [
        {
          name: 'Gris Gris',
          description: '⭐⭐⭐ Site naturel spectaculaire. Falaises basaltiques noires 10-15m, vagues océan Indien explosant rochers (gerbes 5-10m), prairies verdoyantes, horizon infini. Paysage dramatique puissant. Baignade INTERDITE (dangereuse mortelle). Marche falaises, photos, contemplation nature brute.',
          bestFor: ['Photos paysages dramatiques', 'Contemplation nature', 'Marche falaises', 'Sensation puissance océan'],
          facilities: ['Parking gratuit', 'Sentiers balisés falaises', 'Toilettes basiques', 'Snack informel'],
          access: '3 km sud-ouest Souillac, route côtière. Gratuit.'
        },
        {
          name: 'Roche Qui Pleure',
          description: 'Rocher basaltique troué érosion (trou 1m diamètre). Chaque vague = eau jaillit trou comme larmes (d\'où nom). Légende romantique : femme pleurant mari perdu mer. Proximité Gris Gris (500m marche falaises). Photos symboliques.',
          bestFor: ['Photos artistiques', 'Légende locale', 'Géologie érosion', 'Contemplation'],
          facilities: ['Sentier Gris Gris (500m marche)'],
          access: '500m est Gris Gris, sentier falaises. Gratuit.'
        },
        {
          name: 'Rochester Falls',
          description: '⭐⭐ Cascade rectangulaire 10m hauteur, colonnes basaltiques (orgues volcaniques), bassin naturel eau douce. Baignade possible fraîche agréable (eau 20-22°C). Forêt tropicale. 4 km intérieur Souillac. Entrée payante 100-200 Rs.',
          bestFor: ['Baignade eau douce fraîche', 'Photos cascade géométrique', 'Nature forêt', 'Rafraîchissement'],
          facilities: ['Parking gratuit', 'Toilettes basiques', 'Snack informel', 'Gardien perception (100-200 Rs)'],
          access: '4 km nord Souillac, route intérieur. Payant 100-200 Rs. Marche 10 min depuis parking.'
        },
        {
          name: 'Plage Blue Bay (25 km est)',
          description: 'Parc marin protégé. Snorkeling exceptionnel, plage correcte. 25 km Souillac (30 min voiture). Si besoin baignade mer après visite Souillac.',
          bestFor: ['Baignade mer', 'Snorkeling coraux', 'Plage'],
          facilities: ['Parking', 'Restaurants', 'Location snorkeling'],
          access: '25 km est, route côtière, 30 min voiture'
        }
      ]
    },

    transport: {
      howToGetThere: 'Depuis aéroport SSR (45 km, 50 min) : Taxi (1800-2200 Rs = 40-50€). Voiture location (route côtière sud panoramique). Bus public (ligne vers Mahébourg puis local, 1h30, 40 Rs). Depuis Mahébourg (15 km) : Bus (20 min, 25 Rs), Taxi (400-600 Rs), Voiture (15 min).',

      gettingAround: 'Souillac village compact (marche OK). MAIS sites dispersés : Gris Gris 3 km, Rochester Falls 4 km, Roche Qui Pleure 3.5 km. Voiture INDISPENSABLE visite complète. Bus locaux rares.',

      carRental: 'INDISPENSABLE sud Maurice (sites dispersés, bus rares). 25-40€/jour. Louez Mahébourg ou apportez depuis aéroport. Permis français valide. Conduite à gauche. Route côtière sud panoramique magnifique.',

      publicTransport: 'Bus publics : Souillac-Mahébourg (20 min, 25 Rs, fréquents 7-17h). Souillac-Port-Louis (1h30, 50 Rs). Pas bus vers sites (Gris Gris, Rochester) : voiture/taxi nécessaire.',

      taxi: 'Taxis rares Souillac (village petit). Appelez en avance ou depuis Mahébourg. Tarifs : Souillac-Gris Gris 200-300 Rs, Souillac-Mahébourg 400-600 Rs, Souillac-Aéroport 1800-2200 Rs. Tour sud complet (Gris Gris + Rochester + Roche) : 1500-2000 Rs demi-journée négocié.',

      parking: 'Parking gratuit Gris Gris (terre battue, ombragé filaos). Parking gratuit Rochester Falls (petit 10-15 places). Parking gratuit village. Jamais complet (peu touristes).'
    },

    nightlife: {
      overview: 'Vie nocturne Souillac = inexistante (village tranquille isolé). 1 bar local ferme 21h. Soirées = contemplation étoiles, lecture, repos. Pour vie nocturne : Grand Baie (1h30 nord, peu réaliste).',

      venues: [
        {
          name: 'Bar local village',
          type: 'Bar mauricien',
          description: 'Unique bar Souillac. Bières Phoenix, rhum. Ambiance locale calme. Ferme 21h. Prix doux (bière 60-80 Rs).'
        }
      ]
    },

    shopping: {
      overview: 'Shopping Souillac = quasi inexistant (village simple). Épicerie basique. Pour shopping : Mahébourg (15 km, marché lundi, artisanat) ou centres commerciaux nord (1h+).',

      spots: [
        {
          name: 'Épicerie Souillac',
          type: 'Épicerie',
          bestFor: 'Provisions basiques : eau, pain, conserves. Choix très limité. Prix locaux.'
        },
        {
          name: 'Snack Gris Gris',
          type: 'Souvenirs',
          bestFor: 'Quelques souvenirs artisanaux informels. Prix négociables. Qualité moyenne.'
        },
        {
          name: 'Mahébourg (15 km)',
          type: 'Shopping local',
          bestFor: 'Marché lundi (artisanat, modèles bateaux), commerces, Super U courses. 15 min voiture.'
        }
      ]
    },

    itineraries: [
      {
        duration: '1 jour',
        title: 'Journée complète côte sauvage sud',
        days: [
          {
            day: 1,
            morning: '8h : Départ Mahébourg ou Blue Bay (voiture location). 8h30-10h30 : Gris Gris (3 km sud-ouest Souillac) : marche falaises, photos paysages dramatiques, contemplation vagues puissantes. 500m marche Roche Qui Pleure (photos rocher troué). 2h exploration complète site.',
            afternoon: '10h45-12h : Route Rochester Falls (4 km nord Souillac, 15 min voiture). 12h-14h : Rochester Falls : baignade bassin eau douce fraîche (rafraîchissant), photos cascade colonnes basaltiques, pique-nique forêt (apportez provisions). Entrée 100-200 Rs. 14h15-15h : Visite village Souillac : front de mer promenade, musée Robert Edward Hart optionnel (100 Rs, poète mauricien), ambiance locale.',
            evening: '15h15 : Déjeuner tardif Le Batelage (créole, vue falaises). 16h30 : Route Bois Chéri plantation thé (20 min, optionnel) : visite usine, dégustation thés (10€). 18h : Retour Mahébourg ou continuation vers autre destination.'
          }
        ]
      },
      {
        duration: '3 jours',
        title: 'Week-end découverte complète sud Maurice',
        days: [
          {
            day: 1,
            morning: 'Arrivée Mahébourg, installation guesthouse (40-80€) ou Blue Bay. Courses Super U (provisions). Exploration Mahébourg : front de mer, marché si lundi.',
            afternoon: 'Route Souillac (15 km, 15 min). Visite Gris Gris + Roche Qui Pleure (2-3h) : falaises, vagues, photos, marche.',
            evening: 'Dîner Le Batelage. Retour Mahébourg. Soirée tranquille.'
          },
          {
            day: 2,
            morning: 'Rochester Falls (30 min depuis Mahébourg) : baignade cascade, détente forêt, photos. 2-3h sur place.',
            afternoon: 'Route Chamarel (1h ouest) : Terre 7 Couleurs (10€), Cascade Chamarel, Usine Rhumerie (visite-dégustation). Paysages spectaculaires.',
            evening: 'Retour via route panoramique Black River. Arrivée Mahébourg 18h. Dîner local.'
          },
          {
            day: 3,
            morning: 'Blue Bay Marine Park (15 min Mahébourg) : snorkeling exceptionnel (parc marin protégé), glass bottom boat optionnel. Baignade mer après 2 jours nature sauvage.',
            afternoon: 'Bois Chéri plantation thé (30 min) : visite, dégustation, déjeuner vue panoramique. Continuation voyage ou retour aéroport (30 min Blue Bay).',
            evening: 'Départ selon planning.'
          }
        ]
      }
    ],

    budget: {
      overview: 'Budget Souillac = économique. Entrées sites gratuits-200 Rs. Repas 6-20€. Visite journée = 40-70€ (transport + repas + entrées). Hébergement si nuit = 35-60€ guesthouse.',

      daily: {
        budget: {
          total: '50-80€/jour',
          accommodation: '35-60€ guesthouse Souillac ou 40-80€ Mahébourg',
          food: '10-18€ (créole + snacks)',
          activities: '3-5€ (Rochester Falls 100-200 Rs)',
          transport: '5-15€ (essence voiture location quotidien)'
        },
        midRange: {
          total: '80-120€/jour',
          accommodation: '60-100€ hôtel Mahébourg',
          food: '25-40€ (restos + provisions)',
          activities: '10-20€ (Rochester + Bois Chéri dégustation)',
          transport: '15-25€ (voiture location + essence)'
        }
      },

      savingTips: [
        'Gris Gris gratuit : site principal sud Maurice, zéro coût (vs nord payant)',
        'Rochester Falls : 100-200 Rs seulement (cascade + baignade économique)',
        'Pique-niques : apportez provisions (économie restos limités)',
        'Guesthouse Souillac vs hôtel : économie 20-50€/nuit',
        'Base Mahébourg > Souillac : + infrastructures, prix similaires',
        'Visite journée vs séjour : économie hébergement (visite depuis Mahébourg/Blue Bay)',
        'Voiture : partagez frais si groupe (25-40€ divisé 3-4 personnes)',
        'Bus Mahébourg-Souillac : 25 Rs (vs taxi 400-600 Rs) mais sites inaccessibles après',
        'Musée Hart optionnel : économie 100 Rs si budget serré',
        'Snacks vs restos : économie 10-15€/repas (snacks 3-6€ vs restos 12-25€)'
      ]
    },

    practical: {
      whatToBring: [
        'Chaussures marche solides (falaises Gris Gris, sentiers)',
        'Coupe-vent léger (vent sud fort côte, surtout juin-août)',
        'Maillot bain (Rochester Falls baignade eau douce)',
        'Serviette microfibre',
        'Crème solaire SPF50+ (vent donne impression fraîcheur, soleil intense)',
        'Chapeau attaché (vent peut arracher)',
        'Lunettes soleil',
        'Appareil photo (paysages spectaculaires)',
        'Bouteille eau réutilisable',
        'Pique-nique (restos limités)',
        'Cash (petits commerces, Rochester Falls perception)',
        'Pull léger (frais relatif hiver juin-août 22°C)',
        'Chaussures eau (Rochester Falls rochers glissants)',
        'Sac à dos (marche, provisions)'
      ],

      services: {
        atm: 'Pas DAB Souillac. DAB plus proches : Mahébourg (15 km, MCB et SBM). Retirez avant arrivée Souillac (cash nécessaire Rochester Falls, snacks).',
        medical: 'Dispensaire public Souillac (urgences mineures). Pharmacie Mahébourg (15 km). Hôpital Mahébourg (20 min). Urgences : Clinique Darné Port-Louis (1h15, +230 601 2300).',
        wifi: 'WiFi gratuit guesthouses (débit faible-moyen). Pas WiFi public village. Réseau 4G correct mais zones blanches possible (falaises isolées). Carte SIM recommandée.',
        phone: 'Réseau 4G correct village, limité zones isolées (Gris Gris OK, intérieur terres variable). Carte SIM : Mahébourg ou aéroport (10€/10Go).'
      },

      safety: [
        'Baignade MER INTERDITE : vagues puissantes, courants, falaises (MORTELLE)',
        'Falaises Gris Gris : restez sentiers balisés, vent peut déséquilibrer',
        'Roche Qui Pleure : distance sécurité (vagues imprévisibles jaillissent)',
        'Rochester Falls : rochers glissants, baignade prudente (eau fraîche 20-22°C)',
        'Vent sud : fort juin-août, attachez chapeau, attention objets légers',
        'Soleil : crème SPF50+ malgré vent (illusion fraîcheur, brûlures rapides)',
        'Hydratation : 2L eau/jour minimum (vent déshydrate)',
        'Isolement : zones peu peuplées, prévoyez essence-cash-provisions',
        'Route : conduite à gauche, attention virages côte sud',
        'Téléphone : zones blanches possibles, prévenez itinéraire',
        'Marée : vérifiez horaires (vagues + puissantes marée haute)',
        'Objets valeur voiture : rien visible (sites isolés, parking non gardé)'
      ],

      emergency: 'Police : 112. SAMU : 114. Pompiers : 115. Police Souillac : +230 625 6043. Dispensaire Souillac : +230 625 5454. Hôpital Mahébourg : +230 631 9303. Garde-côtes : 213 5151.'
    },

    tips: [
      '🌊 Gris Gris = site #1 sud Maurice (paysages dramatiques, vagues spectaculaires)',
      '⚠️ Baignade MER INTERDITE : dangereuse mortelle (vagues, courants, falaises)',
      '💦 Rochester Falls : baignade eau douce fraîche (alternative mer, rafraîchissant)',
      '📸 Photos : Gris Gris vagues explosant falaises (spectacle puissance nature)',
      '💨 Vent sud fort : juin-août maximum (coupe-vent, chapeau attaché)',
      '🚗 Voiture indispensable : sites dispersés (Gris Gris 3 km, Rochester 4 km)',
      '🏡 Base Mahébourg > Souillac : + infrastructures, Souillac excursion journée',
      '🥪 Provisions : restos limités (2-3), apportez pique-nique',
      '💰 Budget-friendly : Gris Gris gratuit, Rochester 100-200 Rs, repas 6-15€',
      '📅 Meilleure période : juin-août (vagues spectaculaires) ou sept-oct (vent modéré)',
      '🌅 Sunset Gris Gris : côte sud-ouest, couchers soleil dans mer (magnifiques)',
      '⏰ Arrivez matinée : lumière photos meilleure, moins chaud, vagues spectaculaires',
      '🎒 Marche falaises : chaussures solides, sentiers parfois glissants (herbe)',
      '🔇 Souillac calme absolu : zéro vie nocturne, nature-tranquillité',
      '🍵 Bois Chéri : plantation thé proche (20 min), complément parfait (dégustation)'
    ],

    culture: {
      overview: 'Souillac village créole côte sud, nommé Vicomte de Souillac (gouverneur français 1779-1787). Région sud = la plus préservée Maurice : agriculture canne à sucre dominante, villages créoles authentiques, peu développement touristique (mer dangereuse baignade). Pêche traditionnelle active malgré mer agitée : pêcheurs courageux rochers falaises, techniques ancestrales. Gris Gris nom origine incertaine : peut-être sorcellerie créole (gris-gris = amulette) ou corruption "Grey-Grey" britannique. Légende Roche Qui Pleure romantique-tragique : femme esclave amoureuse marin, attend retour rocher, pleure éternellement (eau jaillit = larmes). Site mélancolique puissant. Rochester Falls nommée M. Rochester (propriétaire terrien 19e). Colonnes basaltiques (orgues) = phénomène géologique refroidissement lave (formations hexagonales géométriques parfaites). Musée Robert Edward Hart : poète mauricien célèbre (1891-1954), maison-musée surplombant océan, inspiration œuvres. Sud Maurice = identité créole forte préservée : séga traditionnel (musique-danse), langue créole prédominante, traditions culinaires (ourite curry, poisson salé), catholicisme populaire (processions, fêtes patronales). Économie : canne à sucre (champs omniprésents), pêche artisanale, tourisme limité émergent (nature-paysages vs plages nord).',

      events: [
        'Fête patronale Souillac (date variable) : procession, messe, animations',
        'Week-ends mauriciens : pique-niques familles falaises (locaux nombreux)',
        'Assomption 15 août : fête catholique, village animé',
        'Toussaint 1er novembre : cimetière fleuri, tradition forte sud'
      ],

      etiquette: [
        'Baignade mer : respectez interdiction (sécurité, panneaux présents)',
        'Falaises : restez sentiers (érosion fragile, danger chutes)',
        'Roche Qui Pleure : distance sécurité vagues (imprévisibles)',
        'Photos : demandez permission locaux si présents',
        'Légendes locales : respectez croyances (Roche Qui Pleure sacrée certains)',
        'Rochester Falls : ne savonnez pas eau (pollution rivière)',
        'Déchets : ramassez tout (préservation sites naturels)',
        'Vent : sécurisez objets (vole facilement, pollue océan)',
        'Pêcheurs falaises : ne dérangez pas (travail dangereux concentration)',
        'Village calme : respectez tranquillité (pas musique forte)',
        'Tenue : correcte village (pas maillot bain hors Rochester Falls)',
        'Pourboire : apprécié restos (10% si satisfait)',
        'Bonjour/Mersi : créole apprécié (effort langue)',
        'Nature sauvage : observation sans déranger (oiseaux marins nichent falaises)',
        'Routes étroites : cédez passage, patience mauricienne appréciée'
      ]
    }
  },

  'grand-gaube': {
    slug: 'grand-gaube',
    name: 'Grand Gaube',
    title: 'Que faire à Grand Gaube',
    metaTitle: 'Grand Gaube Maurice : village pêcheurs, plages calmes, authenticité',
    metaDescription: 'Grand Gaube côte est : village de pêcheurs authentique, plages calmes peu fréquentées, ambiance locale préservée loin du tourisme de masse.',
    heroImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/03/ile-maurice-voyage-scaled.jpg',

    intro: 'Grand Gaube est un village de pêcheurs authentique de la côte nord-est mauricienne, aux antipodes du tourisme de masse. Ambiance locale tranquille préservée : pirogues colorées amarrées baie, pêcheurs vendant prises matinales, familles mauriciennes pique-niquant plage calme week-ends. Destination confidentielle pour amateurs authenticité loin sentiers battus.',

    highlights: [
      'Village pêcheurs 100% authentique : loin tourisme masse, vie locale préservée',
      'Plages calmes peu fréquentées : sable blanc, lagon peu profond tranquille',
      'Ambiance locale familiale : familles mauriciennes week-ends, atmosphère conviviale',
      'Proximité îles nord (8 km Cap Malheureux) : excursions facilement accessibles',
      'Prix locaux abordables : guesthouses 35-60€, restaurants créoles 8-18€',
      'Pêche traditionnelle active : observation pirogues, marché poisson frais',
      'Calme absolu en semaine : plages quasi désertes, tranquillité totale'
    ],

    description: 'Grand Gaube occupe la côte nord-est entre Cap Malheureux au nord-ouest et Goodlands à l\'est, à 30 km de l\'aéroport (40 min). Village pêcheurs authentique 2000 habitants, reste très mauricien malgré quelques resorts discrets périphérie. La baie Grand Gaube offre lagon calme peu profond protégé par récif (500m large), eau turquoise claire, plages sable blanc tranquilles. Ambiance village : pirogues multicolores amarrées plage, pêcheurs réparant filets, vente poissons frais matinale informelle, vie quotidienne locale visible. Infrastructure touristique minimale volontaire : quelques guesthouses créoles simples, 2-3 restaurants locaux, pas de centres commerciaux-nightclubs. Familles mauriciennes viennent week-ends pique-niquer plage (tradition forte), ambiance conviviale bruyante samedi-dimanche, calme quasi-total semaine. Grand Gaube = destination confidentielle amateurs authenticité : pas d\'attractions majeures, pas d\'animations, juste vie locale tranquille rythme lent. Proximité Cap Malheureux (8 km, église toit rouge, excursions îles nord) et Grand Baie (12 km, infrastructures-shopping) permettent accès facilités tout en conservant calme base village pêcheurs.',

    bestMonths: ['mai', 'juin', 'septembre', 'octobre', 'novembre'],

    weatherByMonth: {
      'mai': 'Excellent : 26°C, sec, mer calme, lagon tranquille idéal familles',
      'juin': 'Bon : 24°C, sec, vent parfois (rafraîchit), mer OK',
      'septembre': 'Parfait : 25°C, très sec, mer calme, meilleur mois',
      'octobre': 'Idéal : 26°C, sec, eau 25°C, conditions optimales',
      'novembre': 'Très bon : 28°C, début été, eau chaude 26°C, peu pluie encore'
    },

    coordinates: { lat: -20.0083, lng: 57.6667 },
    nearbyLocations: ['cap-malheureux', 'grand-baie', 'goodlands'],
    distanceFromAirport: '30 km (40 min en voiture)',

    accommodation: {
      overview: 'Grand Gaube = destination confidentielle hébergements limités. Guesthouses créoles simples (35-60€), 1-2 petits hôtels (60-100€), resorts discrets périphérie (150-300€). Pour + choix : Grand Baie (12 km, tous budgets-styles).',

      zones: [
        {
          name: 'Village Grand Gaube',
          description: 'Cœur village pêcheurs. Guesthouses créoles familiales simples. Plage 5 min marche. Ambiance 100% locale authentique. Infrastructures basiques (épicerie, snacks). Pour puristes authenticité.',
          priceRange: '35-70€/nuit',
          bestFor: 'Amateurs authenticité max, petits budgets, ceux fuyant tourisme masse',
          pros: [
            'Ambiance authentique 100% mauricienne',
            'Prix abordables (35-60€ guesthouse)',
            'Plage calme 5 min marche',
            'Contact population locale facile',
            'Observation vie pêcheurs quotidienne',
            'Calme absolu semaine (quasi personne)'
          ],
          cons: [
            'Hébergements très basiques (confort simple)',
            'Restaurants limités (2-3 créoles)',
            'Zéro animation soir',
            'Commerces minimal (épicerie)',
            'Plage correcte mais pas exceptionnelle',
            'Voiture recommandée (isolement relatif)'
          ]
        },
        {
          name: 'Périphérie Grand Gaube',
          description: '1-2 resorts discrets périphérie village. Plages semi-privées, piscines, restos. Accès village à pied/vélo. Compromis confort + authenticité proximité.',
          priceRange: '150-300€/nuit',
          bestFor: 'Couples, familles cherchant confort + ambiance locale accessible',
          pros: [
            'Confort resort (piscines, restos, services)',
            'Plages semi-privées calmes',
            'Village authentique à 10 min marche',
            'Moins cher que resorts Grand Baie (-30%)',
            'Calme (pas foule touristes)',
            'Excursions îles nord organisées'
          ],
          cons: [
            'Prix élevés (150-300€/nuit)',
            'Moins authentique immersion (ambiance resort)',
            'Isolement (voiture utile sorties)',
            'Restaurants village limités (restos resort alternative)'
          ]
        },
        {
          name: 'Grand Baie (12 km)',
          description: 'Station balnéaire animée. Tous hébergements. Grand Gaube accessible 15 min voiture. Base si vous voulez infrastructures complètes + excursions village pêcheurs.',
          priceRange: '40-500€/nuit',
          bestFor: 'Tous profils voulant infrastructures + accès authenticité',
          pros: [
            'Choix hébergements immense (40-500€)',
            'Restaurants, shopping, vie nocturne',
            'Plage meilleure que Grand Gaube',
            'Grand Gaube excursion journée (15 min)',
            'Toutes commodités'
          ],
          cons: [
            'À 12 km Grand Gaube (voiture quotidien)',
            'Très touristique (opposé authenticité Grand Gaube)',
            'Plus cher que Grand Gaube',
            'Bruyant certains quartiers'
          ]
        }
      ],

      bookingTips: [
        'Guesthouses Grand Gaube : réservez direct (téléphone, peu online)',
        'Grand Gaube = séjour tranquille-authentique (pas plage exceptionnelle)',
        'Grand Baie meilleure base si infrastructures importantes : Grand Gaube excursion journée',
        'Week-ends mauriciens : guesthouses complètes (locaux viennent), réservez tôt',
        'Hors saison (avril-mai) : guesthouses négociables -40% (peu demande)',
        'Vérifiez distance plage (annonces parfois imprécises, max 10 min marche)',
        'WiFi : débit faible-moyen guesthouses (vérifiez si important)',
        'Voiture utile mais optionnel : village compact, Grand Baie-Cap Malheureux accessibles bus',
        'Resorts périphérie : bon compromis confort + authenticité proximité',
        'Séjour court 2-3 nuits suffisant (village calme, peu activités)'
      ]
    },

    dining: {
      overview: 'Restauration Grand Gaube = créole local authentique. 2-3 restos créoles (8-18€), snacks. Spécialité poisson frais pêche quotidienne. Pour + choix : Grand Baie (12 km, 50+ restos).',

      restaurants: [
        {
          name: 'Chez Rosy',
          type: 'Créole authentique',
          priceRange: '8-18€',
          specialty: 'Poisson frais grillé, rougaille, curry. Cuisine maison généreuse. Terrasse vue village. Institution locale. Réservez week-ends.'
        },
        {
          name: 'Resto village (nom variable)',
          type: 'Créole local',
          priceRange: '6-15€',
          specialty: 'Plats jour créoles. Mine frite, carry, vindaye. Portions copieuses, prix doux. Pas toujours ouvert (appeler avant).'
        },
        {
          name: 'Snacks Grand Gaube',
          type: 'Street food',
          priceRange: '2-6€',
          specialty: 'Dholl puri, samoussas, gâteaux piments. Authentique, prix locaux très doux. Matin surtout.'
        },
        {
          name: 'Marché poisson informel',
          type: 'Poisson frais',
          priceRange: '5-12€/kg',
          specialty: 'Poissons frais pêche matinale. Direct pêcheurs plage. Négociez. Cuisinez si guesthouse équipée.'
        }
      ],

      localSpecialties: [
        'Poisson frais grillé : capitaine, carangue, bonite, pêche locale quotidienne',
        'Poulpe vindaye : spécialité nord-est, marinade moutarde-curcuma',
        'Rougaille poisson : sauce tomate-piment créole classique',
        'Dholl puri : galette lentilles, snack mauricien (moins bon que Port-Louis)'
      ],

      budgetMeals: 'Snacks : dholl puri, samoussas 50-100 Rs (1-2€). Resto village : repas complet 6-12€. Marché poisson : achetez cuisinez (économie max). Pique-nique : provisions Grand Baie (Super U), mangez plage.',

      fineDining: 'Aucune gastronomie Grand Gaube (village simple). Pour fine dining : Grand Baie (12 km) - Lambic, La Terrasse (30-80€).'
    },

    beaches: {
      overview: 'Plages Grand Gaube = correctes mais pas exceptionnelles. Sable blanc, lagon calme peu profond, tranquilles. L\'ATTRAIT = calme absolu, ambiance locale, pas foule. Pour plages sublimes : Trou aux Biches (18 km), Belle Mare (35 km).',

      list: [
        {
          name: 'Plage publique Grand Gaube',
          description: 'Plage principale village 1 km. Sable blanc, lagon calme peu profond (1-2m). Pirogues pêcheurs colorées (photogénique). Filaos ombre. Calme semaine (quasi déserte), animée week-ends (familles mauriciennes pique-niques). Baignade OK enfants.',
          bestFor: ['Baignade calme familles', 'Ambiance locale authentique', 'Calme semaine', 'Photos pirogues', 'Détente tranquille'],
          facilities: ['Parking gratuit informel', 'Filaos ombre', 'Toilettes publiques basiques', 'Snacks village proche'],
          access: 'Centre village, 5 min marche depuis guesthouses. Accès libre gratuit.'
        },
        {
          name: 'Plages semi-privées resorts',
          description: 'Sections plage devant resorts périphérie. Transats, service. Moins fréquentées que plage publique. Belle mais similaire qualité.',
          bestFor: ['Clients resorts', 'Service plage', 'Calme'],
          facilities: ['Transats', 'Service bar', 'Sports nautiques'],
          access: 'Réservé clients resorts'
        },
        {
          name: 'Trou aux Biches (18 km)',
          description: '⭐ L\'une des plus belles plages Maurice. 18 km sud-ouest Grand Gaube (20 min voiture). Sable blanc fin, snorkeling tortues. Excursion journée facile.',
          bestFor: ['Plage exceptionnelle', 'Snorkeling tortues', 'Baignade de rêve'],
          facilities: ['Parking', 'Restaurants', 'Location activités'],
          access: '18 km, 20 min voiture'
        },
        {
          name: 'Îles nord (excursions)',
          description: 'Île Plate, Gabriel, Coin de Mire. Départs Cap Malheureux (8 km). Plages désertes sublimes, snorkeling exceptionnel. Catamaran journée 70-90€.',
          bestFor: ['Aventure', 'Plages carte postale', 'Snorkeling'],
          facilities: ['Inclus excursion : BBQ, boissons, équipement'],
          access: 'Excursion Cap Malheureux (8 km, 10 min voiture)'
        }
      ]
    },

    transport: {
      howToGetThere: 'Depuis aéroport SSR (30 km, 40 min) : Taxi (1700-2200 Rs = 40-50€). Voiture location (A1 puis route côtière nord). Bus public (ligne Grand Baie puis local, 1h15, 40 Rs). Depuis Grand Baie (12 km) : Bus (20 min, 30 Rs), Taxi (300-400 Rs), Voiture (15 min).',

      gettingAround: 'Village Grand Gaube très compact : plage + guesthouses + restos à pied (10 min max). Vélo excellent (plat, tranquille). Voiture utile excursions (Cap Malheureux 8 km, Grand Baie 12 km, Trou aux Biches 18 km).',

      carRental: 'Optionnel si séjour Grand Gaube uniquement (village compact, calme). Utile si exploration nord ou excursions multiples. 25-40€/jour. Permis français valide. Conduite à gauche.',

      publicTransport: 'Bus publics : Grand Gaube-Grand Baie (20 min, 30 Rs, fréquents 7-18h), Grand Gaube-Port-Louis (1h15, 45 Rs). Pratiques économiques. Limités soir (dernier 18-19h).',

      taxi: 'Taxis rares Grand Gaube (village petit). Appelez en avance ou depuis Grand Baie. Tarifs : Grand Gaube-Cap Malheureux 200-300 Rs, Grand Gaube-Grand Baie 300-400 Rs, Grand Gaube-Aéroport 1700-2200 Rs.',

      parking: 'Parking gratuit plage publique (informel, filaos, jamais complet sauf week-ends). Parking gratuit village. Stationnement rue libre.'
    },

    nightlife: {
      overview: 'Vie nocturne Grand Gaube = inexistante (village pêcheurs calme). 1 bar local ferme 21h. Soirées = tranquillité, étoiles, repos. Pour vie nocturne : Grand Baie (12 km, 15 min voiture, bars-clubs).',

      venues: [
        {
          name: 'Bar local village',
          type: 'Bar mauricien',
          description: 'Unique bar Grand Gaube. Bières Phoenix, rhum. Ambiance locale calme. Ferme 21h. Prix doux (bière 60-80 Rs).'
        }
      ]
    },

    shopping: {
      overview: 'Shopping Grand Gaube = quasi inexistant (village simple). Épicerie basique. Pour shopping : Grand Baie (12 km, La Croisette mall, Sunset Boulevard, marché).',

      spots: [
        {
          name: 'Épicerie village',
          type: 'Épicerie',
          bestFor: 'Provisions basiques : eau, pain, conserves. Choix très limité. Prix locaux.'
        },
        {
          name: 'Marché poisson informel',
          type: 'Poisson frais',
          bestFor: 'Poissons frais pêche matinale. Direct pêcheurs. Négociez. Si guesthouse équipée cuisinez.'
        },
        {
          name: 'Grand Baie (12 km)',
          type: 'Shopping complet',
          bestFor: 'La Croisette mall, Sunset Boulevard, marché mercredi, 50+ boutiques. Tout type shopping. 15 min voiture.'
        }
      ]
    },

    itineraries: [
      {
        duration: '1 jour',
        title: 'Journée immersion village pêcheurs Grand Gaube',
        days: [
          {
            day: 1,
            morning: '8h : Arrivée Grand Gaube (voiture ou bus Grand Baie). 8h15-10h : Marche village à pied : observation pirogues pêcheurs, vente poisson frais informelle plage, vie locale matinale. Photos pirogues colorées. 10h15-12h : Plage publique : baignade lagon calme, détente sous filaos, ambiance locale tranquille.',
            afternoon: '12h30 : Déjeuner Chez Rosy (créole, poisson frais). 14h-15h30 : Route Cap Malheureux (8 km, 10 min) : visite église toit rouge iconique, photos vue îlots nord, village pêcheurs. 16h-17h30 : Route Grand Baie (12 km, 15 min) : shopping La Croisette, cafés, exploration station balnéaire animée (contraste Grand Gaube calme).',
            evening: '18h : Retour Grand Gaube ou continuation vers hébergement autre zone. Dîner Grand Baie (50+ restos) OU retour Grand Gaube (Chez Rosy).'
          }
        ]
      },
      {
        duration: '3 jours',
        title: 'Week-end tranquille base Grand Gaube nord île',
        days: [
          {
            day: 1,
            morning: 'Arrivée Grand Gaube, installation guesthouse (35-60€). Exploration village à pied : plage, pirogues, épicerie, repérage.',
            afternoon: 'Première baignade plage publique. Observation vie locale. Détente filaos. Lecture.',
            evening: 'Dîner Chez Rosy. Coucher tôt (tranquillité village, récupération).'
          },
          {
            day: 2,
            morning: 'Excursion îles nord catamaran (70-90€, réservez veille Cap Malheureux) : départ 9h Cap Malheureux (8 km). Coin de Mire snorkeling, Île Plate/Gabriel plages désertes, BBQ.',
            afternoon: 'Continuation excursion, retour 16h. Repos guesthouse.',
            evening: 'Dîner village. Soirée tranquille. Observation étoiles plage (pollution lumineuse faible).'
          },
          {
            day: 3,
            morning: 'Matinée plage Grand Gaube : baignade finale, marche, photos pirogues. Check-out.',
            afternoon: 'Route Trou aux Biches (18 km, 20 min) : plage sublime, snorkeling tortues. Déjeuner Le Pescatore. OU route vers autre destination.',
            evening: 'Continuation voyage ou retour aéroport.'
          }
        ]
      }
    ],

    budget: {
      overview: 'Budget Grand Gaube = très économique. Hébergement 35-60€ guesthouse. Repas 6-15€ créole. Plage gratuite. Budget 60-90€/jour possible. Destination idéale petits budgets cherchant authenticité calme.',

      daily: {
        budget: {
          total: '60-90€/jour',
          accommodation: '35-60€ guesthouse',
          food: '12-20€ (créole + snacks)',
          activities: '0€ (plage gratuite, village gratuit)',
          transport: '5-10€ (bus ou essence partagée)'
        },
        midRange: {
          total: '100-150€/jour',
          accommodation: '60-100€ petit hôtel',
          food: '25-40€ (restos Grand Baie)',
          activities: '30-50€ (excursion îles nord si faite)',
          transport: '10-20€ (voiture location)'
        }
      },

      savingTips: [
        'Guesthouse Grand Gaube vs hôtel Grand Baie : économie 50-200€/nuit',
        'Repas créole local : économie vs restos touristiques (8-15€ vs 25-45€)',
        'Plage + village : gratuits (activités principales)',
        'Bus publics : économie max vs taxi (30 Rs vs 300-400 Rs Grand Baie)',
        'Marché poisson : achetez cuisinez (économie restos 10-15€/repas)',
        'Hors saison (avril-mai) : guesthouses négociables -40-50%',
        'Excursion îles : réservez Cap Malheureux direct vs resorts (économie 20%)',
        'Vélo vs voiture : économie si séjour Grand Gaube uniquement (gratuit vs 25-40€)',
        'Pique-niques : provisions Grand Baie Super U (économie restos)',
        'Long séjour (1 semaine+) : tarif dégressif guesthouses (négociez)',
        'Eau robinet potable : gourde (économie bouteilles 30-50 Rs/j)',
        'Week-end mauricien : ambiance locale gratuite (familles pique-niques plage)'
      ]
    },

    practical: {
      whatToBring: [
        'Maillots de bain',
        'Serviette microfibre',
        'Crème solaire SPF50+ waterproof',
        'Chapeau/casquette',
        'Lunettes soleil',
        'Chaussures eau (coraux possibles)',
        'Tenues décontractées légères',
        'Livre/liseuse (farniente plage)',
        'Appareil photo (pirogues colorées, ambiance locale)',
        'Cash (commerces basiques parfois pas CB)',
        'Répulsif moustique',
        'Gourde réutilisable',
        'Sac courses réutilisable',
        'Provisions si séjour long (commerces limités)'
      ],

      services: {
        atm: 'Pas DAB Grand Gaube. DAB plus proches : Grand Baie (12 km, nombreux) ou Goodlands (8 km est). Retirez avant arrivée Grand Gaube.',
        medical: 'Dispensaire public Grand Gaube (urgences mineures). Pharmacie Grand Baie (12 km). Hôpital public Pamplemousses (25 min). Urgences : Clinique Darné Port-Louis (40 min, +230 601 2300).',
        wifi: 'WiFi gratuit guesthouses (débit faible-moyen). Pas WiFi public village. Réseau 4G correct. Carte SIM recommandée (10€/10Go aéroport).',
        phone: 'Réseau 4G correct. Carte SIM locale : Grand Baie ou aéroport (10€ = 10Go valable 30j).'
      },

      safety: [
        'Lagon calme : baignade sécurisée enfants (peu profond 1-2m), surveillez quand même',
        'Soleil : crème SPF50+ toutes 2h',
        'Hydratation : 2L eau/jour minimum',
        'Objets valeur plage : ne laissez pas (vols opportunistes rares mais possibles)',
        'Week-ends : plage bondée familles mauriciennes (bruyant mais sans danger)',
        'Route : conduite à gauche si voiture',
        'Pirogues pêcheurs : ne montez pas sans permission',
        'Cash : ayez suffisant (pas DAB village)',
        'Isolement relatif : prévoyez provisions-cash avant arriver',
        'Moustiques : possibles soir (répulsif)',
        'Baignade : surveillez enfants (profondeur progressive)',
        'Marée : lagon reste navigable toutes marées (peu impact)'
      ],

      emergency: 'Police : 112. SAMU : 114. Pompiers : 115. Police Grand Gaube : +230 283 8041. Garde-côtes : 213 5151. Dispensaire Grand Gaube : +230 283 9446.'
    },

    tips: [
      '🐟 Village pêcheurs 100% authentique : zéro tourisme masse (rare Maurice)',
      '🏖️ Plage correcte : calme tranquille mais pas exceptionnelle (Trou aux Biches 18 km meilleure)',
      '💰 Budget-friendly : guesthouses 35-60€, repas 6-15€, plage gratuite',
      '⛪ Cap Malheureux : 8 km (10 min), église toit rouge + excursions îles nord',
      '🛍️ Grand Baie : 12 km (15 min), infrastructures-shopping-restaurants (contraste)',
      '📸 Photos : pirogues colorées, vie locale matinale, ambiance authentique',
      '🔇 Calme absolu semaine : plage quasi déserte, tranquillité totale',
      '👨‍👩‍👧 Week-ends mauriciens : plage animée familles locales (pique-niques, convivialité)',
      '🚌 Bus publics : Grand Baie 30 Rs, pratiques économiques',
      '🚗 Voiture optionnelle : village compact, bus OK, utile si exploration',
      '🏡 Séjour court : 2-3 nuits suffisent (village calme, peu activités)',
      '📅 Meilleure période : sept-oct (sec, mer calme, pas foule)',
      '🍽️ Restaurants limités : 2-3 créoles (prévoyez ou allez Grand Baie)',
      '🌅 Lever soleil : côte est, matinales plage magnifiques (vs sunset)',
      '💤 Zéro vie nocturne : destination repos-détente-authenticité'
    ],

    culture: {
      overview: 'Grand Gaube village pêcheurs créole traditionnel préservé. Nom origine incertaine : peut-être déformation "Grand Gobie" (poisson local) ou référence pêcheur célèbre. Pêche pirogues traditionnelles activité principale : familles pêcheurs depuis générations, techniques ancestrales (filets, nasses), sortie matinale 4-5h retour 8-9h. Vente poisson informelle plage : pêcheurs étalent prises sable, habitants village achètent frais (capitaine, carangue, bonite, poulpe). Village préserve traditions créoles fortes : langue créole prédominante (français-anglais limité), catholicisme populaire (processions fêtes patronales), séga traditionnel (musique-danse week-ends). Communauté soudée : entraide familiale, solidarité quartier, préservation identité locale malgré modernisation île. Architecture créole typique : cases tôle colorées, vérandas, jardins potagers. Économie : pêche dominante + quelques emplois Grand Baie proche. Tourisme limité volontaire : pas promotion massive, quelques guesthouses discrètes, préservation caractère authentique. Week-ends mauriciens = tradition forte : familles multiculturelles (créoles, indo-mauriciens) viennent plage pique-niquer, ambiance conviviale bruyante, musique, enfants jouant, partage nourritures.',

      events: [
        'Week-ends mauriciens : pique-niques familles plage (samedi-dimanche, très animé)',
        'Fête patronale (date variable) : procession, messe, animations village',
        'Assomption 15 août : fête catholique, village décoré',
        'Pêche traditionnelle quotidienne : retour pirogues 8-9h matinale (spectacle)'
      ],

      etiquette: [
        'Pirogues : NE montez PAS sans permission pêcheurs (outils travail)',
        'Marché poisson informel : négociez poliment si achetez',
        'Photos : demandez permission pêcheurs-locaux (certains timides)',
        'Week-ends : respectez espace familles mauriciennes pique-niques (bruyant normal)',
        'Topless : évitez (plage locale familiale, conservateurs)',
        'Déchets : ramassez tout (préservation plage)',
        'Musique : volume modéré (respect tranquillité semaine)',
        'Bonjour/Mersi : créole apprécié (effort langue locale)',
        'Filaos : ne cassez pas branches (ombre précieuse)',
        'Pourboire : apprécié restos (10% bon service)',
        'Village calme : respectez tranquillité (pas fêtes bruyantes)',
        'Enfants locaux : souriez mais demandez avant photographier',
        'Pêcheurs : observez travail distance respectueuse (concentration)',
        'Langue : créole prédominant (français-anglais limité, patience)',
        'Authenticité : préservez en respectant mode vie local (pas exigences touristiques)'
      ]
    }
  },

  'chamouny': {
    slug: 'chamouny',
    name: 'Chamouny',
    title: 'Que faire à Chamouny',
    metaTitle: 'Chamouny Maurice : randonnées montagnes, nature sauvage sud',
    metaDescription: 'Chamouny sud Maurice : point de départ randonnées parc national, forêts tropicales, Piton Petite Rivière Noire 828m. Nature préservée hors sentiers battus.',
    heroImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/03/ile-maurice-voyage-scaled.jpg',

    intro: 'Chamouny est une petite localité rurale du sud-ouest de Maurice, nichée au pied des montagnes du parc national des Gorges de Rivière Noire. Point de départ privilégié pour les randonnées vers le Piton de la Petite Rivière Noire (828m, point culminant de Maurice), cette zone offre des paysages de forêts tropicales préservées, des sentiers sauvages et une immersion totale dans la nature mauricienne authentique.',

    highlights: [
      'Point de départ randonnée Piton Petite Rivière Noire (828m, sommet Maurice)',
      'Forêts tropicales indigènes préservées : ébéniers, bois de natte, fougères arborescentes',
      'Zone rurale authentique : loin tourisme masse, vie locale mauricienne',
      'Accès direct parc national des Gorges de Rivière Noire',
      'Climat frais montagne : 3-5°C moins chaud que côte',
      'Observation oiseaux endémiques : pigeon rose, crécerelle Maurice, oiseau-lunettes vert',
      'Cascades secrètes accessibles randonnées (guides locaux)'
    ],

    description: 'Chamouny occupe un vallon verdoyant du sud-ouest mauricien, entre les villages de Chamarel et Case Noyale, à environ 45 km de l\'aéroport (1h). Cette zone montagneuse peu peuplée (quelques centaines d\'habitants) conserve un caractère rural authentique avec ses maisons créoles dispersées, ses champs de canne à sucre et ses forêts denses. L\'attraction principale reste l\'accès aux sentiers de randonnée du parc national : le trail vers le Piton de la Petite Rivière Noire part de Plaine Champagne (15 min en voiture) et offre 4-5h de marche dans la forêt tropicale jusqu\'au sommet de Maurice (828m, vue panoramique exceptionnelle). Le climat plus frais (18-24°C) et l\'humidité favorisent une végétation luxuriante : fougères géantes, orchidées sauvages, mousses tapissant les arbres. Les ornithologues viennent observer les espèces endémiques rares sauvées de l\'extinction (programmes conservation). Chamouny n\'est pas une destination balnéaire mais une base nature pour randonneurs et amateurs de forêts tropicales préservées.',

    bestMonths: ['mai', 'juin', 'juillet', 'août', 'septembre'],

    weatherByMonth: {
      'mai': 'Idéal : 20°C, fin saison humide, sentiers praticables, végétation luxuriante',
      'juin': 'Parfait : 18-22°C, sec, visibilité excellente sommets, meilleur mois',
      'juillet': 'Excellent : 17-21°C, sec frais, conditions randonnée optimales',
      'août': 'Très bon : 17-21°C, sec, parfois brumeux matin (atmosphère mystique)',
      'septembre': 'Idéal : 19-23°C, sec, nature verdoyante, sentiers secs'
    },

    coordinates: { lat: -20.4300, lng: 57.4000 },
    nearbyLocations: ['gorges-riviere-noire', 'le-morne', 'tamarin'],
    distanceFromAirport: '45 km (1h en voiture)',

    accommodation: {
      overview: 'Hébergement Chamouny = très limité (zone rurale). Quelques lodges nature (80-150€), gîtes ruraux (40-70€). Pour + choix : Chamarel (15 min, lodges luxe) ou côte ouest Tamarin/Flic-en-Flac (30 min, tous budgets).',

      zones: [
        {
          name: 'Chamouny village',
          description: 'Rares gîtes ruraux et chambres d\'hôtes créoles. Immersion nature totale. Hébergement basique mais authentique. Idéal randonneurs matinaux.',
          priceRange: '40-80€/nuit',
          bestFor: 'Randonneurs, amateurs nature authentique, petits budgets',
          pros: [
            'Immersion nature totale',
            'Calme absolu (zéro bruit)',
            'Proximité sentiers randonnée',
            'Prix abordables',
            'Accueil familial mauricien',
            'Fraîcheur montagne (bien dormir)'
          ],
          cons: [
            'Hébergement très basique',
            'Zéro restaurant à proximité',
            'Voiture indispensable',
            'Isolement (pas pour tous)',
            'WiFi limité ou absent',
            'Commerces inexistants'
          ]
        },
        {
          name: 'Chamarel (15 min)',
          description: 'Village touristique avec lodges de charme, restaurants gastronomiques. Terre des 7 Couleurs à proximité. Meilleur compromis confort + accès randonnées.',
          priceRange: '100-300€/nuit',
          bestFor: 'Couples, familles, confort + nature',
          pros: [
            'Lodges de qualité (piscines, vues)',
            'Restaurants gastronomiques',
            'Terre des 7 Couleurs à 5 min',
            'Chamouny accessible 15 min',
            'Ambiance nature préservée',
            'Vues panoramiques vallées'
          ],
          cons: [
            'Plus touristique que Chamouny',
            'Prix plus élevés',
            'Réservation conseillée haute saison',
            'Voiture nécessaire'
          ]
        },
        {
          name: 'Côte ouest (Tamarin/Flic-en-Flac, 30 min)',
          description: 'Stations balnéaires avec tous hébergements. Combinez plage + excursions randonnée Chamouny. Tous budgets et styles disponibles.',
          priceRange: '40-400€/nuit',
          bestFor: 'Ceux voulant plage + randonnée, familles, tous budgets',
          pros: [
            'Tous types hébergements',
            'Plages accessibles',
            'Restaurants nombreux',
            'Chamouny excursion journée (30 min)',
            'Infrastructures complètes'
          ],
          cons: [
            'À 30 min Chamouny (trajet quotidien si randos)',
            'Ambiance balnéaire (pas montagne)',
            'Départ randonnée moins pratique'
          ]
        }
      ],

      bookingTips: [
        'Gîtes Chamouny : réservez direct téléphone (peu présence online)',
        'Chamarel lodges : réservez 2-3 semaines avance haute saison',
        'Randonnées tôt matin (6h-7h) : hébergement proche = avantage majeur',
        'WiFi : ne comptez pas dessus zone Chamouny (prévoyez offline)',
        'Provisions : achetez avant (supermarché Rivière Noire ou Quatre Bornes)',
        'Petit-déjeuner inclus : important (pas café zone)',
        'Transferts : certains lodges proposent navettes depuis aéroport'
      ]
    },

    dining: {
      overview: 'Restauration Chamouny = quasi inexistante. Prévoyez pique-niques ou mangez Chamarel (15 min, plusieurs restos gastronomiques) ou côte ouest (30 min).',

      restaurants: [
        {
          name: 'Varangue sur Morne (Chamarel)',
          type: 'Gastronomique créole',
          priceRange: '30-60€',
          specialty: 'Vue panoramique exceptionnelle, cuisine créole raffinée, gibier (cerf, sanglier). Réservation obligatoire. Incontournable région.'
        },
        {
          name: 'Le Chamarel Restaurant',
          type: 'Créole traditionnel',
          priceRange: '15-35€',
          specialty: 'Cuisine créole authentique, terrasse vue vallée. Bon rapport qualité-prix. Près Terre 7 Couleurs.'
        },
        {
          name: 'Rhumerie de Chamarel',
          type: 'Bistrot/Dégustation',
          priceRange: '15-30€',
          specialty: 'Déjeuner après visite rhumerie. Plats créoles simples, cocktails rhum agricole. Ambiance plantation.'
        },
        {
          name: 'Snacks Rivière Noire (30 min)',
          type: 'Street food',
          priceRange: '3-8€',
          specialty: 'Dholl puri, mine frite, samoussas. Avant/après randonnée. Prix locaux.'
        }
      ],

      localSpecialties: [
        'Gibier : cerf, sanglier (chassés forêts région, restaurants gastronomiques)',
        'Miel sauvage : production locale apiculteurs montagne',
        'Fruits tropicaux : goyaves, longanes, letchis sauvages (saison)',
        'Rhum agricole Chamarel : distillé localement, dégustation rhumerie'
      ],

      budgetMeals: 'Pique-nique recommandé : préparez sandwichs/provisions avant randonnée. Snacks Rivière Noire ou Quatre Bornes pour repas économiques (3-8€). Gîtes parfois proposent repas (demandez).',

      fineDining: 'Varangue sur Morne (Chamarel) : gastronomique vue exceptionnelle (30-60€). Seule option fine dining région. Réservation obligatoire.'
    },

    beaches: {
      overview: 'Chamouny = destination montagne, AUCUNE plage. Plages accessibles : Le Morne (30 min, kitesurf), Tamarin (30 min, surf), Flic-en-Flac (35 min, baignade). Combinez randonnée matin + plage après-midi.',

      list: [
        {
          name: 'Plage Le Morne (30 min)',
          description: 'Lagons turquoise au pied du Morne Brabant. Spot mondial kitesurf. Plages sublimes, ambiance sportive. Excursion parfaite après randonnée Chamouny.',
          bestFor: ['Kitesurf', 'Plages carte postale', 'Baignade lagon'],
          facilities: ['Écoles kitesurf', 'Restaurants', 'Parkings'],
          access: '30 min voiture depuis Chamouny'
        },
        {
          name: 'Plage Tamarin (30 min)',
          description: 'Baie de surf mythique. Ambiance locale décontractée. Dauphins observables baie. Beach bars, restaurants.',
          bestFor: ['Surf', 'Dauphins', 'Ambiance locale'],
          facilities: ['Écoles surf', 'Restaurants', 'Beach bars'],
          access: '30 min voiture depuis Chamouny'
        },
        {
          name: 'Flic-en-Flac (35 min)',
          description: 'Longue plage de sable blanc, lagon calme baignade. Infrastructures complètes. Sunset magnifiques côte ouest.',
          bestFor: ['Baignade familles', 'Snorkeling', 'Coucher soleil'],
          facilities: ['Restaurants nombreux', 'Activités nautiques', 'Commerces'],
          access: '35 min voiture depuis Chamouny'
        }
      ]
    },

    transport: {
      howToGetThere: 'Depuis aéroport SSR (45 km, 1h) : Taxi (2000-2500 Rs = 45-55€). Voiture location fortement recommandée (routes montagneuses). Pas de bus direct. Via Quatre Bornes puis route Chamarel.',

      gettingAround: 'Voiture INDISPENSABLE. Zone rurale montagneuse sans transports publics. Routes sinueuses mais praticables (4x4 non nécessaire). GPS ou maps offline recommandé.',

      carRental: 'Indispensable à Chamouny. 30-50€/jour. SUV confortable mais voiture normale suffit. Réservez à l\'aéroport ou Grand Baie. Plein essence avant (stations éloignées).',

      publicTransport: 'Inexistant à Chamouny. Bus publics s\'arrêtent Rivière Noire ou Case Noyale (10-15 km). Non recommandé pour accès randonnées.',

      taxi: 'Taxis rares zone Chamouny. Négociez transferts avec hébergement. Tarifs : Chamouny-Aéroport 2000-2500 Rs, Chamouny-Chamarel 400-600 Rs, Chamouny-Tamarin 600-800 Rs.',

      parking: 'Parking gratuit départs sentiers (Plaine Champagne, Pétrin). Parking lodges/gîtes inclus. Jamais de problème stationnement (zone peu fréquentée).'
    },

    nightlife: {
      overview: 'Vie nocturne Chamouny = inexistante. Zone rurale montagnarde, coucher tôt. Pour soirées : Tamarin (30 min, bars), Flic-en-Flac (35 min, clubs). Soirées ici = étoiles, silence, repos.',

      venues: []
    },

    shopping: {
      overview: 'Shopping Chamouny = zéro. Épicerie basique Rivière Noire (15 min). Supermarchés : Quatre Bornes (25 min). Souvenirs : Chamarel (rhumerie, artisanat).',

      spots: [
        {
          name: 'Rhumerie de Chamarel',
          type: 'Boutique souvenirs',
          bestFor: 'Rhums agricoles, liqueurs, souvenirs. Visite + dégustation + achats. Incontournable région.'
        },
        {
          name: 'Boutique Terre des 7 Couleurs',
          type: 'Artisanat',
          bestFor: 'Souvenirs, maquettes bateaux, artisanat local. Après visite site.'
        },
        {
          name: 'Super U Quatre Bornes (25 min)',
          type: 'Supermarché',
          bestFor: 'Provisions complètes avant séjour Chamouny. Eau, snacks randonnée, repas.'
        }
      ]
    },

    itineraries: [
      {
        duration: '1 jour',
        title: 'Randonnée Piton Petite Rivière Noire depuis Chamouny',
        days: [
          {
            day: 1,
            morning: '5h30 : Réveil gîte Chamouny (ou départ côte 5h). 6h : Départ parking Plaine Champagne (15 min voiture). 6h15-10h30 : Randonnée Piton Petite Rivière Noire (4-5h aller-retour, 828m sommet Maurice). Forêt tropicale dense, montée progressive, vue panoramique 360° au sommet. Emportez 2L eau, snacks, coupe-vent.',
            afternoon: '11h : Retour parking, récupération. 12h : Déjeuner Varangue sur Morne ou Le Chamarel (réservez). 14h : Visite Rhumerie Chamarel (dégustation, boutique) OU Terre des 7 Couleurs. 16h : Route Le Morne ou Tamarin : plage détente, baignade récupération.',
            evening: '18h : Coucher soleil plage côte ouest. Dîner Tamarin ou retour hébergement. Repos mérité.'
          }
        ]
      },
      {
        duration: '2 jours',
        title: 'Week-end nature complète région Chamouny',
        days: [
          {
            day: 1,
            morning: 'Arrivée région. Installation lodge Chamarel ou gîte Chamouny. 10h : Visite Terre des 7 Couleurs + cascade Chamarel (1h30). Photos formations géologiques uniques.',
            afternoon: '12h30 : Déjeuner Le Chamarel Restaurant. 14h30 : Visite Rhumerie Chamarel (1h30, dégustation incluse). 16h30 : Route Plaine Champagne : repérage départ sentiers, point de vue Alexandra Falls.',
            evening: 'Dîner lodge. Coucher tôt (randonnée lendemain 6h).'
          },
          {
            day: 2,
            morning: '6h : Départ randonnée Piton Petite Rivière Noire (4-5h). Point culminant Maurice. Forêt tropicale, oiseaux endémiques, vue sommet exceptionnelle.',
            afternoon: '12h : Retour, récupération. Déjeuner Varangue sur Morne (vue, gastronomie). 15h : Route côte ouest : plage Le Morne ou Tamarin. Baignade, détente.',
            evening: 'Coucher soleil côte ouest. Dîner Tamarin. Retour ou continuation voyage.'
          }
        ]
      }
    ],

    budget: {
      daily: {
        budget: '60-90€/jour',
        midRange: '120-180€/jour',
        luxury: '200-300€/jour'
      },
      breakdown: {
        accommodation: 'Budget 40-60€ (gîte rural) / Mid 80-120€ (lodge Chamarel) / Luxe 150-250€ (lodge premium)',
        food: 'Budget 15-25€ (pique-niques) / Mid 30-50€ (restos Chamarel) / Luxe 60-80€ (gastronomique)',
        activities: 'Randonnées gratuites / Terre 7 Couleurs 6€ / Rhumerie 12€ / Guide privé 50-80€',
        transport: 'Voiture location 25-40€/jour indispensable. Taxi journée 70-90€.'
      }
    },

    practical: {
      atms: 'Pas de DAB Chamouny. Plus proches : Rivière Noire (15 min), Quatre Bornes (25 min). Retirez cash avant arrivée.',
      supermarkets: 'Aucun commerce Chamouny. Épicerie basique Rivière Noire (15 min). Supermarché Super U Quatre Bornes (25 min). Provisions avant.',
      pharmacy: 'Pas de pharmacie Chamouny. Pharmacie Rivière Noire (15 min). Pharmacie de garde Quatre Bornes.',
      hospital: 'Hôpital Quatre Bornes (30 min). Clinique privée Tamarin (35 min). Urgences : SAMU 114.',
      wifi: 'WiFi très limité ou absent gîtes Chamouny. Réseau mobile faible (2-3G). Téléchargez cartes offline. Lodges Chamarel = WiFi correct.',
      electricity: '220V, prises anglaises 3 broches. Adaptateur indispensable. Coupures possibles zone rurale.'
    },

    safety: {
      overall: 'Chamouny zone rurale très sûre. Aucun risque criminel. Dangers = nature : sentiers glissants, météo changeante, déshydratation, se perdre. Préparez bien randonnées.',

      tips: [
        'Randonnées : partez tôt (6h-7h) avant chaleur et pluies après-midi',
        'Sentiers : restez sur chemins balisés (se perdre = danger réel)',
        'Guide : recommandé sentiers non balisés ou longues randonnées',
        'Météo : vérifiez avant départ (brouillard, pluie = risques)',
        'Eau : emportez 2L minimum (déshydratation rapide)',
        'Téléphone : chargé mais réseau limité (prévenir quelqu\'un itinéraire)',
        'Seul : évitez randonnées isolées seul',
        'Animaux : macaques curieux mais inoffensifs (ne nourrissez pas)',
        'Glissades : sentiers humides = prudence (bâtons utiles)',
        'Heures retour : prévoyez large (nuit tombe vite 17h30)'
      ],

      emergency: 'Police : 112. SAMU : 114. Pompiers : 115. Poste police Rivière Noire : +230 483 6011. Garde forestiers : +230 507 0128.'
    },

    tips: [
      '⛰️ Point de départ idéal : randonnée Piton Petite Rivière Noire (sommet Maurice 828m)',
      '🌅 Départ 6h-7h obligatoire : éviter chaleur, pluies après-midi, profiter vue dégagée',
      '🚗 Voiture indispensable : zone rurale sans transports publics',
      '🥾 Chaussures randonnée : sentiers humides, terrain varié (pas sandales)',
      '💧 Eau 2L minimum : pas de point d\'eau sur sentiers',
      '🌧️ Coupe-vent : pluies possibles, vent frais sommet',
      '📴 Réseau limité : téléchargez cartes offline avant',
      '🏨 Hébergement limité : réservez gîte ou lodge Chamarel à l\'avance',
      '🍽️ Restaurants à Chamarel : Varangue sur Morne (vue), Le Chamarel (créole)',
      '🏖️ Combinez plage : Le Morne/Tamarin après-midi après randonnée matin',
      '🦜 Oiseaux endémiques : pigeon rose, crécerelle (jumelles utiles)',
      '🍯 Produits locaux : miel sauvage, rhum Chamarel',
      '🌡️ Climat frais : 3-5°C de moins que côte (agréable randonnée)',
      '📅 Meilleure période : mai-septembre (sec, frais, sentiers praticables)'
    ],

    culture: {
      overview: 'Chamouny représente la Maurice rurale authentique des hauts : communauté créole montagnarde vivant agriculture traditionnelle, élevage et travail forêt depuis générations. Habitants (quelques centaines) descendent esclaves marrons ayant fui plantations côtières 18e siècle pour se réfugier montagnes (toponymie créole préservée). Vie rythmée par saisons : coupe canne, cueillette fruits sauvages, chasse cerf (tradition coloniale maintenue). Relation forte avec forêt : connaissance plantes médicinales, sentiers secrets, cascades cachées transmis oralement. Catholicisme mêlé croyances populaires : autels marron cachés forêt, respect lieux sacrés. Langue créole prédominante. Accueil chaleureux mais discret : habitants peu habitués touristes (zone isolée). Préservation environnement = valeur forte : fierté parc national, implication programmes conservation oiseaux endémiques.',

      events: [
        'Chasse au cerf (juin-septembre) : tradition coloniale, battues organisées week-ends',
        'Fête Assumption 15 août : procession Chamarel, messe, pique-nique communautaire',
        'Récolte canne (juillet-décembre) : activité visible routes, odeur sucrée air',
        'Observation oiseaux (toute année) : programmes conservation pigeon rose accessibles'
      ],

      etiquette: [
        'Sentiers : restez sur chemins balisés (propriétés privées autour)',
        'Forêt : ne cueillez pas plantes (espèces protégées)',
        'Feu : strictement interdit (risque incendie forêt)',
        'Déchets : remportez tout (préservation parc national)',
        'Habitants : saluez (Bonzour) mais n\'envahissez pas intimité',
        'Photos : demandez permission si personnes présentes',
        'Chiens errants : ne nourrissez pas (prolifération)',
        'Macaques : ne nourrissez jamais (agressivité)',
        'Bruit : silence apprécié zone calme',
        'Chasse : ne traversez pas zones battue (dangereux, panneaux)',
        'Guides locaux : privilégiez (revenus communauté, savoirs)',
        'Lodges : respectez règles (gestion environnementale)'
      ]
    }
  },

  'chutes-tamarin': {
    slug: 'chutes-tamarin',
    name: 'Chutes de Tamarin',
    title: 'Que faire aux Chutes de Tamarin',
    metaTitle: 'Chutes Tamarin Maurice : canyoning 7 cascades, aventure jungle',
    metaDescription: 'Chutes de Tamarin (Tamarind Falls) : canyoning 7 cascades spectaculaires, sauts, rappels, toboggans naturels. Aventure jungle tropicale inoubliable.',
    heroImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/03/ile-maurice-voyage-scaled.jpg',

    intro: 'Les Chutes de Tamarin (Tamarind Falls ou 7 Cascades) offrent l\'aventure la plus spectaculaire de Maurice. Ce canyon de 7 cascades successives dans la jungle tropicale permet canyoning, sauts jusqu\'à 12 mètres, rappels et toboggans naturels. Bassins émeraude, forêt dense, sensations fortes : une expérience unique pour amateurs d\'aventure et nature sauvage.',

    highlights: [
      'Canyoning 7 cascades successives : expérience complète 5-6h avec guide',
      'Sauts spectaculaires : 3m à 12m (optionnels selon niveau)',
      'Rappels encadrés : descente cascades en rappel (équipement fourni)',
      'Toboggans naturels : glissades rochers polis par eau',
      'Bassins émeraude : baignade eaux cristallines entre cascades',
      'Jungle tropicale préservée : immersion forêt primaire',
      'Randonnée douce possible : accès 3 premières cascades sans canyoning'
    ],

    description: 'Les 7 Cascades de Tamarin (Tamarind Falls) se nichent dans les gorges de Rivière Noire, à 25 km de l\'aéroport (40 min). Ce site naturel exceptionnel s\'étage sur 300 mètres de dénivelé avec 7 chutes d\'eau successives, des bassins aux eaux vert émeraude et une végétation luxuriante. Deux options s\'offrent aux visiteurs : la randonnée douce (2-3h) permettant d\'atteindre les 3 premières cascades avec baignade, ou le canyoning complet (5-6h) descendant les 7 cascades avec sauts, rappels et toboggans. L\'eau fraîche (22-24°C) contraste avec la chaleur ambiante. Les prestataires certifiés fournissent équipement (casque, harnais, chaussures) et encadrement sécurisé. Niveau physique moyen requis, savoir nager obligatoire. Déconseillé enfants moins de 12 ans et personnes vertige/claustrophobie. Après fortes pluies, le site ferme (débit dangereux).',

    bestMonths: ['mai', 'juin', 'juillet', 'août', 'septembre', 'octobre'],

    weatherByMonth: {
      'mai': 'Bon : fin pluies, débit cascades impressionnant, eau fraîche 22°C',
      'juin': 'Idéal : sec, débit modéré parfait, conditions optimales canyoning',
      'juillet': 'Parfait : sec frais, eau 22°C, meilleur mois aventure',
      'août': 'Excellent : sec, eau claire, débit régulier',
      'septembre': 'Très bon : sec, eau 23°C, cascades photogéniques',
      'octobre': 'Bon : début réchauffement, eau 24°C agréable, avant pluies'
    },

    coordinates: { lat: -20.3833, lng: 57.4500 },
    nearbyLocations: ['tamarin', 'gorges-riviere-noire', 'flic-en-flac'],
    distanceFromAirport: '25 km (40 min en voiture)',

    accommodation: {
      overview: 'Pas d\'hébergement aux Chutes Tamarin (site naturel). Nuit avant/après : Tamarin (15 min, surf village), Flic-en-Flac (20 min, tous budgets), ou lodges Chamarel (25 min, nature). Excursion journée depuis n\'importe où Maurice.',

      zones: [
        {
          name: 'Tamarin (15 min)',
          description: 'Village surf authentique côte ouest. Ambiance décontractée, guesthouses et petits hôtels. Base idéale pour Chutes Tamarin + plage.',
          priceRange: '40-150€/nuit',
          bestFor: 'Surfeurs, amateurs authenticité, budgets moyens',
          pros: [
            'Proche Chutes Tamarin (15 min)',
            'Ambiance village surf décontractée',
            'Plage + dauphins baie',
            'Restaurants locaux qualité',
            'Prix raisonnables'
          ],
          cons: [
            'Plage non baignable (vagues)',
            'Hébergement limité haute saison',
            'Vie nocturne calme'
          ]
        },
        {
          name: 'Flic-en-Flac (20 min)',
          description: 'Station balnéaire majeure côte ouest. Tous hébergements, plage longue, infrastructures complètes. Chutes Tamarin excursion facile.',
          priceRange: '30-400€/nuit',
          bestFor: 'Familles, tous budgets, ceux voulant plage + aventure',
          pros: [
            'Tous types hébergements',
            'Longue plage baignade',
            'Restaurants, commerces nombreux',
            'Coucher soleil magnifiques',
            'Chutes Tamarin 20 min'
          ],
          cons: [
            'Plus touristique',
            'Plus loin que Tamarin',
            'Circulation week-ends'
          ]
        },
        {
          name: 'Lodges Chamarel (25 min)',
          description: 'Hébergements nature montagnes. Proche chutes + attractions sud-ouest. Ambiance reposante après aventure.',
          priceRange: '100-300€/nuit',
          bestFor: 'Couples, amateurs nature, séjour détente + aventure',
          pros: [
            'Cadre nature exceptionnel',
            'Calme après aventure',
            'Proche autres attractions (Terre 7 Couleurs)',
            'Gastronomie locale'
          ],
          cons: [
            'Prix plus élevés',
            'Plus loin plage (45 min)',
            'Voiture nécessaire'
          ]
        }
      ],

      bookingTips: [
        'Réservez canyoning AVANT hébergement (créneaux limités)',
        'Départ canyoning 8h-9h : hébergement proche = moins stress',
        'Après canyoning : fatigue = nuit sur place appréciable',
        'Haute saison (juil-sept) : réservez canyoning + hébergement 2 semaines avance',
        'Prestataires récupèrent parfois hôtels (vérifiez transferts inclus)'
      ]
    },

    dining: {
      overview: 'Pas de restaurant aux Chutes (site naturel). Déjeuner inclus dans excursion canyoning (BBQ pique-nique). Sinon : restos Tamarin (15 min) ou Flic-en-Flac (20 min) après activité.',

      restaurants: [
        {
          name: 'La Bonne Chute (Tamarin)',
          type: 'Créole bistrot',
          priceRange: '15-30€',
          specialty: 'Cuisine créole généreuse, terrasse décontractée. Parfait après canyoning. Nom approprié.'
        },
        {
          name: 'Tamarin Bay Hotel Restaurant',
          type: 'International/Créole',
          priceRange: '20-40€',
          specialty: 'Vue baie Tamarin, cuisine variée. Coucher soleil après journée aventure.'
        },
        {
          name: 'Zub Express (Flic-en-Flac)',
          type: 'Street food créole',
          priceRange: '5-12€',
          specialty: 'Institution locale, mine frite légendaire, portions XXL. Récupération après effort.'
        },
        {
          name: 'Pique-nique inclus canyoning',
          type: 'BBQ nature',
          priceRange: 'Inclus excursion',
          specialty: 'BBQ créole au bord cascade, grillades, salades, fruits. Moment convivial nature.'
        }
      ],

      localSpecialties: [
        'BBQ créole : saucisses, poulet, poisson grillé (pique-nique canyoning)',
        'Mine frite : après effort, réconfort carbs (Zub Express)',
        'Fruits tropicaux : ananas, mangues, litchis (inclus pique-niques)',
        'Phoenix/Blue Marlin : bière fraîche méritée après cascades'
      ],

      budgetMeals: 'Déjeuner inclus canyoning (BBQ). Sinon snacks Tamarin ou Flic-en-Flac : dholl puri, samoussas (2-5€). Zub Express : mine frite copieuse (5-8€).',

      fineDining: 'Pas de fine dining immédiat. Options : Tamarin Hotel (20-40€), ou retour Chamarel (Varangue sur Morne, 30-60€) pour soirée gastronomique après aventure.'
    },

    beaches: {
      overview: 'Chutes Tamarin = site intérieur montagneux, pas de plage. Après canyoning, détente plage côte ouest : Tamarin (surf, 15 min), Flic-en-Flac (baignade, 20 min), La Preneuse (calme, 25 min).',

      list: [
        {
          name: 'Baie de Tamarin (15 min)',
          description: 'Baie mythique surf Maurice. Vagues pour surfeurs (pas baignade tranquille). Dauphins observables. Ambiance locale authentique. Coucher soleil.',
          bestFor: ['Surf', 'Observation dauphins', 'Coucher soleil', 'Ambiance locale'],
          facilities: ['Écoles surf', 'Beach bars', 'Restaurants'],
          access: '15 min voiture depuis Chutes'
        },
        {
          name: 'Flic-en-Flac (20 min)',
          description: 'Longue plage sable blanc, lagon calme baignade. Idéale détente post-canyoning. Infrastructures complètes.',
          bestFor: ['Baignade récupération', 'Snorkeling', 'Familles', 'Sunset'],
          facilities: ['Restaurants', 'Commerces', 'Activités nautiques'],
          access: '20 min voiture depuis Chutes'
        },
        {
          name: 'La Preneuse (25 min)',
          description: 'Plage tranquille, tour Martello historique. Moins fréquentée que Flic-en-Flac. Baignade calme.',
          bestFor: ['Calme', 'Baignade tranquille', 'Moins touristique'],
          facilities: ['Parking', 'Snacks'],
          access: '25 min voiture depuis Chutes'
        }
      ]
    },

    transport: {
      howToGetThere: 'Depuis aéroport SSR (25 km, 40 min) : Taxi (1500-1800 Rs = 35-45€). Voiture location recommandée. Point de départ = Henrietta village (parking prestataires). La plupart des prestataires proposent transferts depuis hôtels (inclus ou supplément 500-1000 Rs).',

      gettingAround: 'Site unique = pas besoin mobilité sur place. Voiture utile si excursion indépendante ou combinaison plage après. Sinon transferts prestataires suffisent.',

      carRental: 'Pratique si autonomie souhaitée ou combinaison autres activités. 25-40€/jour. Parking gratuit Henrietta. Non indispensable si transferts inclus excursion.',

      publicTransport: 'Bus publics jusqu\'à Henrietta village (depuis Quatre Bornes, 45 min), mais horaires contraignants et marche 1km jusqu\'au point départ. Non recommandé.',

      taxi: 'Option si pas de voiture ni transfert inclus. Tarifs : Aéroport-Chutes 1500-1800 Rs, Flic-en-Flac-Chutes 600-800 Rs, Grand Baie-Chutes 1800-2200 Rs. Négociez attente retour.',

      parking: 'Parking gratuit chez prestataires canyoning (Henrietta). Sécurisé, gardé. Laissez objets valeur voiture ou casiers.'
    },

    nightlife: {
      overview: 'Pas de vie nocturne aux Chutes (nature). Après canyoning : repos mérité ou soirée Tamarin (bars décontractés), Flic-en-Flac (restaurants, bars plage).',

      venues: [
        {
          name: 'Beach bars Tamarin',
          type: 'Bars plage',
          description: 'Ambiance surf décontractée, bière coucher soleil, musique reggae. Parfait décompression post-aventure.'
        },
        {
          name: 'Kenzi Bar (Flic-en-Flac)',
          type: 'Bar restaurant',
          description: 'Institution locale, ambiance vivante week-ends, cocktails, musique. Si énergie reste après cascades.'
        }
      ]
    },

    shopping: {
      overview: 'Aucun shopping aux Chutes (site naturel). Équipement canyoning fourni. Souvenirs : prestataires vendent parfois photos/vidéos activité. Shopping : Flic-en-Flac (20 min), Cascavelle Mall (25 min).',

      spots: [
        {
          name: 'Photos/vidéos canyoning',
          type: 'Souvenirs',
          bestFor: 'Vidéo GoPro journée, photos sauts, souvenir unique. 30-50€ en plus. Recommandé (difficile filmer soi-même).'
        },
        {
          name: 'Cascavelle Mall (25 min)',
          type: 'Centre commercial',
          bestFor: 'Shopping complet, cinéma, restaurants. Si besoin après activité.'
        }
      ]
    },

    itineraries: [
      {
        duration: '1 jour',
        title: 'Canyoning complet 7 Cascades',
        days: [
          {
            day: 1,
            morning: '7h : Transfert ou route vers Henrietta (point RDV prestataire). 8h : Briefing sécurité, équipement (casque, harnais, chaussures canyon). 8h30-12h30 : Canyoning 7 cascades. Descente progressive : marche forêt, premiers bassins, sauts 3-5m (optionnels), rappels encadrés, toboggans naturels. Paysages jungle spectaculaires.',
            afternoon: '12h30-13h30 : Pique-nique BBQ au bord cascade (inclus). Repos, photos, baignade bassin. 14h-15h30 : Suite descente : cascades 5-6-7, sauts plus hauts (8-12m, optionnels), derniers rappels. 15h30-16h : Remontée finale, retour parking.',
            evening: '16h30 : Douche (certains prestataires), récupération. 17h : Route plage Tamarin ou Flic-en-Flac : coucher soleil, bière méritée. 19h : Dîner (La Bonne Chute ou Zub Express). Repos.'
          }
        ]
      },
      {
        duration: '1 jour',
        title: 'Randonnée douce 3 premières cascades (familles)',
        days: [
          {
            day: 1,
            morning: '8h : Départ parking Henrietta (avec guide local ou autonome). 8h30-11h : Randonnée descente vers 3 premières cascades (2-2.5h). Sentier forêt tropicale, escaliers naturels. Arrivée premier bassin : baignade eau fraîche émeraude.',
            afternoon: '11h-13h : Baignade bassins, photos cascades, pique-nique apporté. Détente nature. 13h-15h : Remontée (plus effort que descente, 1.5h). Hydratation importante. 15h : Retour parking.',
            evening: '15h30 : Route côte ouest. Plage Flic-en-Flac : récupération, baignade mer chaude. Coucher soleil. Dîner décontracté.'
          }
        ]
      }
    ],

    budget: {
      overview: 'Budget Chutes Tamarin = principalement coût excursion. Canyoning complet 90-130€/pers (tout inclus). Randonnée libre gratuite (guide optionnel 30-50€). Transport + repas en plus si non inclus.',

      daily: {
        budget: '100-150€/jour',
        midRange: '150-220€/jour',
        luxury: '250-350€/jour'
      },
      breakdown: {
        accommodation: 'Budget 40-60€ (guesthouse Tamarin) / Mid 60-100€ (hôtel Flic-en-Flac) / Luxe 150-250€ (resort)',
        food: 'Déjeuner inclus canyoning / Dîner budget 10-20€ (snacks) / Mid 25-40€ (restos) / Luxe 50-80€',
        activities: 'Canyoning 7 cascades 90-130€ / Vidéo GoPro +30-50€ / Randonnée 3 cascades gratuite / Guide local 30-50€',
        transport: 'Transferts souvent inclus. Voiture 25-40€/jour. Taxi A/R 40-60€.'
      }
    },

    practical: {
      atms: 'Pas de DAB sur site. Plus proches : Tamarin (15 min), Flic-en-Flac (20 min). Paiement CB accepté prestataires sérieux.',
      supermarkets: 'Aucun commerce sur site. Provisions : Tamarin (15 min), Flic-en-Flac (20 min). Déjeuner inclus excursion canyoning.',
      pharmacy: 'Pharmacie Tamarin ou Flic-en-Flac (15-20 min). Prestataires ont trousse premiers secours.',
      hospital: 'Clinique Tamarin (15 min). Hôpital Quatre Bornes (30 min). Urgences : SAMU 114.',
      wifi: 'Pas de WiFi site (nature). Réseau mobile limité (gorges). WiFi base prestataires (avant/après).',
      electricity: '220V. Pas de prise sur site. Chargez appareils avant. GoPro prestataire recommandée.'
    },

    safety: {
      overall: 'Activité encadrée par professionnels certifiés. Risques maîtrisés si consignes respectées. Savoir nager obligatoire. Condition physique moyenne suffisante.',

      tips: [
        'Prestataires certifiés UNIQUEMENT : vérifiez assurances, équipements, avis',
        'Savoir nager : obligatoire (bassins profonds, courants)',
        'Condition physique moyenne : 5-6h effort (pas besoin athlète)',
        'Sauts optionnels : ne forcez jamais si inconfortable',
        'Alcool : interdit avant/pendant (réflexes, jugement)',
        'Vertige sévère : déconseillé (hauteurs, rappels)',
        'Météo : annulation si fortes pluies (débit dangereux)',
        'Écoutez guides : consignes sécurité non négociables',
        'Équipement : casque obligatoire toute descente',
        'Enfants : minimum 12 ans',
        'Femmes enceintes : interdit'
      ],

      emergency: 'Police : 112. SAMU : 114. Pompiers : 115. Guides ont radios et premiers secours.'
    },

    tips: [
      '🏊 Savoir nager obligatoire : bassins profonds, pas de contournement',
      '💪 Condition physique moyenne : 5-6h mais pas besoin être sportif pro',
      '🦘 Sauts optionnels : 3-12m, personne ne force, allez à votre rythme',
      '📸 Vidéo GoPro : recommandé (30-50€), souvenirs uniques difficiles seul',
      '☔ Pluie = annulation : normal, sécurité (remboursement ou report)',
      '👟 Chaussures fournies : mais apportez les vôtres si confort important',
      '🩱 Maillot sous vêtements : pour canyoning, vêtements rechange après',
      '🍺 Bière après : méritée, bars Tamarin ou Flic-en-Flac',
      '📅 Réservez 1-2 semaines avance : créneaux limités haute saison',
      '🚐 Transferts souvent inclus : vérifiez (économie taxi)',
      '👨‍👩‍👧 Familles : randonnée 3 cascades si enfants <12 ans (gratuit, plus doux)',
      '⏰ Départ 8h-9h : évite chaleur max, lumière photos optimale',
      '🌡️ Eau 22-24°C : fraîche mais agréable (pas froid)',
      '😎 Aventure unique Maurice : expérience mémorable garantie'
    ],

    culture: {
      overview: 'Les Chutes de Tamarin (Tamarind Falls) tirent leur nom des tamariniers qui poussaient autrefois abondamment dans la région. Ce site était connu des esclaves marrons qui s\'y cachaient au 18e siècle, utilisant les gorges difficiles d\'accès comme refuge. Les habitants de Henrietta (village de départ) ont traditionnellement entretenu une relation de respect avec ces cascades, lieu de baignades familiales et de pêche aux chevrettes (crevettes d\'eau douce). Le développement du canyoning depuis les années 2000 a créé une économie locale : guides certifiés issus du village, prestataires employant jeunes locaux. Respect du site reste important : les anciens considèrent certains bassins comme lieux de purification. La faune aquatique (anguilles, chevrettes) est protégée. Les prestataires sérieux sensibilisent à la préservation de ce patrimoine naturel exceptionnel.',

      events: [
        'Pas d\'événements publics aux Chutes (site naturel protégé)',
        'Fermeture temporaire après cyclones/fortes pluies (sécurité)',
        'Haute saison canyoning : mai-octobre (conditions optimales)'
      ],

      etiquette: [
        'Écoutez les guides : sécurité non négociable',
        'Ne jetez rien : zéro déchet (emportez tout)',
        'Crème solaire biodégradable : préférez si possible (bassins)',
        'Ne nourrissez pas poissons/anguilles',
        'Respect autres groupes : attendez votre tour bassins/sauts',
        'Photos : demandez permission groupes inconnus',
        'Cris modérés : autres apprécient aussi tranquillité nature',
        'Pas d\'alcool : interdit et dangereux',
        'Pourboire guides : apprécié si satisfait (10-20€)',
        'Avis en ligne : aidez futurs visiteurs (prestataires sérieux vs douteux)',
        'Préservation : signalez dégradations observées (plastiques, graffitis)'
      ]
    }
  },

  'gorges-riviere-noire': {
    slug: 'gorges-riviere-noire',
    name: 'Gorges de Rivière Noire',
    title: 'Que faire aux Gorges de Rivière Noire',
    metaTitle: 'Gorges Rivière Noire Maurice : parc national, randonnées, cascades',
    metaDescription: 'Parc National Gorges Rivière Noire : 16 sentiers randonnée, forêt tropicale, cascades Alexandra Falls, oiseaux endémiques. Nature sauvage Maurice préservée.',
    heroImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/03/ile-maurice-voyage-scaled.jpg',

    intro: 'Le Parc National des Gorges de Rivière Noire est le plus grand espace naturel protégé de Maurice (6 754 hectares). Cette réserve préserve les dernières forêts tropicales indigènes de l\'île avec 16 sentiers de randonnée balisés, des cascades spectaculaires (Alexandra Falls, cascades 500 Pieds), des points de vue panoramiques et une faune endémique rare. Destination incontournable pour randonneurs et amoureux de nature sauvage.',

    highlights: [
      'Plus grand parc national Maurice : 6 754 hectares forêt tropicale protégée',
      '16 sentiers balisés : niveaux facile à difficile, 30 min à 8h',
      'Alexandra Falls : cascade 150m, point de vue accessible voiture',
      'Forêt indigène préservée : ébéniers, bois de natte, fougères géantes',
      'Oiseaux endémiques rares : pigeon rose, crécerelle Maurice, oiseau-lunettes vert',
      'Piton Petite Rivière Noire : sommet Maurice 828m (randonnée 4-5h)',
      'Points de vue panoramiques : Gorges Viewpoint, Black River Peak',
      'Entrée gratuite : accès libre parc national (patrimoine public)'
    ],

    description: 'Le Black River Gorges National Park couvre 3,5% de la superficie de Maurice dans le sud-ouest de l\'île, à 35 km de l\'aéroport (50 min). Créé en 1994, il protège les derniers vestiges de forêt tropicale d\'altitude qui couvrait autrefois l\'île entière. Les deux entrées principales sont Pétrin (sud, vers Chamarel) et Black River (ouest, vers Tamarin), reliées par une route panoramique traversant le parc. Le Centre d\'Information de Pétrin fournit cartes, conseils et infos faune. Les sentiers varient de balades faciles (30 min, Macchabée Forest Trail) à randonnées exigeantes (8h, traversée complète). Points forts : Alexandra Falls (accessible voiture, vue cascade 150m), Gorges Viewpoint (panorama gorges), Black River Peak/Piton Rivière Noire (sommet 828m). La faune inclut les derniers représentants d\'espèces endémiques sauvées de l\'extinction : pigeon rose (300 individus), crécerelle de Maurice (400), oiseau-lunettes vert (250). Climat plus frais et humide qu\'en bord de mer (18-24°C), pluies fréquentes après-midi. Meilleure visite : départ tôt matin (6h-7h).',

    bestMonths: ['mai', 'juin', 'juillet', 'août', 'septembre'],

    weatherByMonth: {
      'mai': 'Bon : 20°C, fin saison humide, végétation luxuriante, sentiers praticables',
      'juin': 'Idéal : 18°C, sec, visibilité excellente, meilleur mois observation',
      'juillet': 'Parfait : 17-20°C, sec frais, conditions randonnée optimales',
      'août': 'Très bon : 17-20°C, sec, brumes matinales magiques',
      'septembre': 'Excellent : 19-22°C, sec, floraisons certaines espèces'
    },

    coordinates: { lat: -20.4167, lng: 57.4500 },
    nearbyLocations: ['chamouny', 'chutes-tamarin', 'le-morne', 'tamarin'],
    distanceFromAirport: '35 km (50 min en voiture)',

    accommodation: {
      overview: 'Pas d\'hébergement dans le parc (zone protégée). Nuitées : Chamarel (10 min, lodges nature), côte ouest Tamarin/Flic-en-Flac (25-30 min, tous budgets). Excursion journée possible depuis n\'importe où Maurice.',

      zones: [
        {
          name: 'Chamarel (10 min entrée sud)',
          description: 'Village avec lodges nature de qualité. Proche entrée Pétrin. Idéal si plusieurs jours randonnée ou arrivée veille départ tôt.',
          priceRange: '80-300€/nuit',
          bestFor: 'Randonneurs sérieux, amateurs nature, couples',
          pros: [
            'À 10 min entrée parc Pétrin',
            'Lodges de charme vue montagnes',
            'Restaurants gastronomiques',
            'Terre des 7 Couleurs à proximité',
            'Fraîcheur altitude (bien dormir)'
          ],
          cons: [
            'Prix plus élevés',
            'Choix limité',
            'Pas de plage (45 min)',
            'Voiture nécessaire'
          ]
        },
        {
          name: 'Tamarin (25 min entrée ouest)',
          description: 'Village surf côte ouest. Accès entrée Black River. Combine plage + randonnée. Prix modérés.',
          priceRange: '40-150€/nuit',
          bestFor: 'Surfeurs, amateurs mer + montagne, budgets moyens',
          pros: [
            'Ambiance surf décontractée',
            'Plage + parc accessibles',
            'Prix raisonnables',
            'Restaurants qualité',
            'Dauphins baie'
          ],
          cons: [
            '25 min entrée parc',
            'Plage vagues (surf, pas baignade)',
            'Moins nature immédiate'
          ]
        },
        {
          name: 'Flic-en-Flac (30 min)',
          description: 'Station balnéaire majeure. Tous hébergements et budgets. Parc = excursion journée facile.',
          priceRange: '30-400€/nuit',
          bestFor: 'Familles, tous budgets, priorité plage + excursion parc',
          pros: [
            'Choix hébergements immense',
            'Longue plage baignade',
            'Infrastructures complètes',
            'Coucher soleil côte ouest'
          ],
          cons: [
            '30 min parc (1h A/R)',
            'Plus touristique',
            'Moins ambiance nature'
          ]
        }
      ],

      bookingTips: [
        'Randonnées longues : hébergement proche parc (départ 6h plus facile)',
        'Chamarel si plusieurs jours : combinez randos différentes',
        'Excursion journée : n\'importe quel hébergement île fonctionne',
        'Haute saison (juil-sept) : lodges Chamarel réservez 2 semaines avance',
        'Petit-déjeuner tôt : demandez si randonnée matinale (5h30)'
      ]
    },

    dining: {
      overview: 'Aucun restaurant dans le parc (zone protégée). Emportez pique-nique + eau. Après randonnée : restaurants Chamarel (10 min), ou côte ouest Tamarin/Flic-en-Flac (25-30 min).',

      restaurants: [
        {
          name: 'Varangue sur Morne (Chamarel)',
          type: 'Gastronomique créole',
          priceRange: '30-60€',
          specialty: 'Vue panoramique exceptionnelle, gibier local (cerf, sanglier), cuisine raffinée. Incontournable après randonnée. Réservation.'
        },
        {
          name: 'Le Chamarel Restaurant',
          type: 'Créole traditionnel',
          priceRange: '15-35€',
          specialty: 'Cuisine créole authentique, terrasse agréable. Bon rapport qualité-prix après effort.'
        },
        {
          name: 'Café Pétrin (centre info)',
          type: 'Snacks',
          priceRange: '3-8€',
          specialty: 'Café, snacks basiques au centre d\'information. Dépannage uniquement, pas de vrai repas.'
        },
        {
          name: 'La Bonne Chute (Tamarin)',
          type: 'Créole bistrot',
          priceRange: '15-30€',
          specialty: 'Cuisine créole généreuse après randonnée. Ambiance décontractée.'
        }
      ],

      localSpecialties: [
        'Gibier : cerf, sanglier (chasse autorisée zones périphériques parc)',
        'Miel forêt : apiculteurs locaux, production limitée',
        'Goyaves sauvages : cueillette possible (abondantes)',
        'Eau sources : potable certaines (vérifiez panneaux)'
      ],

      budgetMeals: 'Pique-nique obligatoire longues randonnées : préparez sandwichs, fruits, barres. Achetez provisions veille (supermarché Quatre Bornes ou côte). Café Pétrin = snacks dépannage.',

      fineDining: 'Varangue sur Morne (Chamarel) après randonnée : récompense gastronomique méritée avec vue exceptionnelle. Seule option fine dining région parc.'
    },

    beaches: {
      overview: 'Gorges Rivière Noire = parc montagneux intérieur, AUCUNE plage. Combinez randonnée matin + plage après-midi côte ouest : Le Morne (30 min), Tamarin (25 min), Flic-en-Flac (30 min).',

      list: [
        {
          name: 'Plage Le Morne (30 min)',
          description: 'Lagons turquoise au pied Morne Brabant (UNESCO). Kitesurf mondial, plages sublimes. Parfait après randonnée parc.',
          bestFor: ['Kitesurf', 'Plages paradisiaques', 'UNESCO'],
          facilities: ['Écoles kite', 'Restaurants', 'Hôtels luxe'],
          access: '30 min voiture depuis entrée parc'
        },
        {
          name: 'Baie de Tamarin (25 min)',
          description: 'Baie surf mythique, dauphins. Ambiance locale authentique. Coucher soleil.',
          bestFor: ['Surf', 'Dauphins', 'Sunset', 'Authenticité'],
          facilities: ['Écoles surf', 'Beach bars', 'Restaurants'],
          access: '25 min voiture depuis entrée parc'
        },
        {
          name: 'Flic-en-Flac (30 min)',
          description: 'Longue plage sable blanc, lagon calme. Baignade familles, snorkeling.',
          bestFor: ['Baignade', 'Familles', 'Snorkeling', 'Sunset'],
          facilities: ['Tout', 'Restaurants', 'Commerces', 'Activités'],
          access: '30 min voiture depuis entrée parc'
        }
      ]
    },

    transport: {
      howToGetThere: 'Depuis aéroport SSR (35 km, 50 min) : Taxi (1800-2200 Rs = 40-50€). Voiture location fortement recommandée. Deux entrées : Pétrin (sud, via Chamarel) et Black River (ouest, via Tamarin). Route panoramique traverse le parc entre les deux.',

      gettingAround: 'Voiture quasi-indispensable pour accéder différents points de départ. Certains sentiers accessibles bus (Pétrin depuis Curepipe), mais très contraignant. Parc grand = déplacements entre sites nécessaires.',

      carRental: 'Fortement recommandé. 25-40€/jour. Voiture normale suffit (routes asphaltées). Permet accès flexibles différentes entrées, points de vue, combinaison plage après.',

      publicTransport: 'Bus Curepipe-Pétrin (centre info sud) : 1h, 50 Rs, quelques trajets/jour. Très limité, horaires contraignants. Non recommandé si plusieurs randos ou flexibilité souhaitée.',

      taxi: 'Option si pas de voiture. Négociez journée complète avec attente (3000-4000 Rs = 70-90€). Sinon taxi aller + récupération = complexe et cher.',

      parking: 'Parkings gratuits : Centre Info Pétrin (principal), Black River entrance, Alexandra Falls viewpoint, Gorges Viewpoint. Jamais complet (parc peu fréquenté semaine).'
    },

    nightlife: {
      overview: 'Vie nocturne parc = zéro (fermeture au crépuscule, zone protégée). Observation étoiles possible zones dégagées. Pour soirées : Tamarin (25 min), Flic-en-Flac (30 min).',

      venues: []
    },

    shopping: {
      overview: 'Aucun shopping dans le parc (zone naturelle). Boutique Centre Info Pétrin : cartes, livres faune/flore, quelques souvenirs. Sinon : Chamarel (artisanat, rhumerie) ou côte.',

      spots: [
        {
          name: 'Boutique Centre Info Pétrin',
          type: 'Souvenirs nature',
          bestFor: 'Cartes randonnées, livres oiseaux endémiques, posters faune Maurice. Petit choix mais pertinent.'
        },
        {
          name: 'Rhumerie de Chamarel (15 min)',
          type: 'Alcools, souvenirs',
          bestFor: 'Rhums agricoles, liqueurs, souvenirs plantation. Visite + dégustation + achats.'
        }
      ]
    },

    itineraries: [
      {
        duration: '1 jour',
        title: 'Découverte essentielle parc national',
        days: [
          {
            day: 1,
            morning: '7h : Départ hébergement vers Centre Info Pétrin. 7h30 : Récupération carte, infos sentiers au centre. 8h-11h : Randonnée Macchabée Trail (2-3h, niveau moyen). Forêt indigène dense, observation oiseaux endémiques possibles (pigeon rose, crécerelle). Retour centre.',
            afternoon: '11h30 : Route panoramique vers Alexandra Falls Viewpoint (10 min). Vue cascade 150m, photos. 12h30 : Route Chamarel, déjeuner Varangue sur Morne ou Le Chamarel. 14h30 : Visite Terre des 7 Couleurs + cascade Chamarel (1h30). 16h : Route vers Gorges Viewpoint (15 min) : panorama gorges.',
            evening: '17h : Retour vers côte ouest (Tamarin/Flic-en-Flac). Coucher soleil plage. Dîner. Repos.'
          }
        ]
      },
      {
        duration: '1 jour',
        title: 'Randonnée Piton Petite Rivière Noire (sommet Maurice)',
        days: [
          {
            day: 1,
            morning: '5h30 : Réveil très tôt (hébergement proche recommandé). 6h : Départ parking Plaine Champagne (près Pétrin). 6h15-10h30 : Randonnée Piton Petite Rivière Noire (4-5h aller-retour). Montée forêt tropicale dense, dernière partie escarpée. Sommet 828m : vue panoramique 360° spectaculaire (mer, montagnes, lagons).',
            afternoon: '11h : Retour parking, récupération. 12h : Route Chamarel, déjeuner mérité (Varangue sur Morne). 14h30 : Temps libre : sieste, visite rhumerie, ou route plage.',
            evening: '16h30 : Route côte ouest si souhaité. Coucher soleil. Dîner. Repos mérité après belle randonnée.'
          }
        ]
      },
      {
        duration: '2 jours',
        title: 'Immersion complète parc national',
        days: [
          {
            day: 1,
            morning: 'Arrivée région, installation lodge Chamarel. 10h : Centre Info Pétrin : carte détaillée, conseils rangers. 10h30-13h : Randonnée Parakeet Trail (2.5h, facile-moyen). Observation oiseaux endémiques.',
            afternoon: '13h30 : Déjeuner Le Chamarel. 15h : Route vers Gorges Viewpoint + Alexandra Falls. Photos panoramas exceptionnels. 17h : Retour lodge.',
            evening: 'Dîner lodge ou Varangue sur Morne. Coucher tôt (randonnée lendemain 6h).'
          },
          {
            day: 2,
            morning: '6h : Départ Piton Petite Rivière Noire (sommet Maurice, 4-5h). Expérience mémorable.',
            afternoon: '12h : Retour, déjeuner. 14h : Route Black River entrance côté ouest. 14h30 : Courte randonnée Lower Gorges Trail (1h). Autre perspective parc.',
            evening: '16h30 : Route côte ouest. Plage Tamarin ou Flic-en-Flac. Coucher soleil, dîner. Fin séjour parc.'
          }
        ]
      }
    ],

    budget: {
      daily: {
        budget: '50-80€/jour',
        midRange: '100-160€/jour',
        luxury: '180-280€/jour'
      },
      breakdown: {
        accommodation: 'Budget 30-50€ (guesthouse côte) / Mid 80-120€ (lodge Chamarel) / Luxe 150-250€ (lodge premium)',
        food: 'Budget 15-25€ (pique-nique) / Mid 30-45€ (restos Chamarel) / Luxe 60-80€ (gastronomique)',
        activities: 'Entrée parc GRATUITE / Randonnées gratuites / Terre 7 Couleurs 6€ / Guide privé 50-80€',
        transport: 'Voiture location 25-40€/jour recommandée. Bus Curepipe-Pétrin 1€. Taxi journée 70-90€.'
      }
    },

    practical: {
      atms: 'Aucun DAB dans le parc. Plus proches : Quatre Bornes (25 min), Tamarin (30 min). Retirez avant arrivée.',
      supermarkets: 'Aucun commerce dans parc. Provisions avant : Quatre Bornes (25 min). Café snacks Centre Info Pétrin (basique).',
      pharmacy: 'Aucune pharmacie dans parc. Plus proche : Quatre Bornes (30 min). Rangers ont premiers secours basiques.',
      hospital: 'Hôpital Quatre Bornes (30 min). Urgences : SAMU 114. Rangers contactables Centre Info Pétrin.',
      wifi: 'Pas de WiFi parc. Centre Info Pétrin : WiFi faible. Réseau mobile limité forêt. Téléchargez cartes offline.',
      electricity: '220V. Aucune prise dans parc. Chargez appareils avant. Lampe frontale recommandée départs tôt.'
    },

    safety: {
      overall: 'Parc national sûr. Aucun risque criminel. Dangers = nature : se perdre, météo, déshydratation, chutes sentiers glissants. Respectez consignes rangers.',

      tips: [
        'Partez TÔT (6h-7h) : éviter chaleur, pluies après-midi',
        'Sentiers balisés : restez dessus (se perdre = danger réel)',
        'Randonnée seul : évitez longues distances (informez quelqu\'un)',
        'Météo : vérifiez avant (brouillard, pluie = glissant)',
        'Eau : 2L minimum (déshydratation rapide)',
        'Retour : prévoyez large (nuit tombe vite 17h30)',
        'Animaux : macaques (ne pas nourrir)',
        'Feu : strictement interdit',
        'Camping : interdit (zone protégée)',
        'Cyclones (nov-avril) : parc peut fermer'
      ],

      emergency: 'Police : 112. SAMU : 114. Pompiers : 115. Centre Info Pétrin : +230 507 0128.'
    },

    tips: [
      '🌿 Entrée GRATUITE : parc national patrimoine public Maurice',
      '⏰ Départ 6h-7h : éviter chaleur, pluies après-midi, meilleures conditions',
      '🗺️ Centre Info Pétrin : cartes gratuites, conseils, état sentiers',
      '🦜 Oiseaux endémiques : jumelles utiles (pigeon rose, crécerelle)',
      '⛰️ Piton Petite Rivière Noire : sommet Maurice 828m (randonnée 4-5h)',
      '📸 Alexandra Falls : cascade 150m, accessible voiture (viewpoint gratuit)',
      '🌧️ Coupe-vent obligatoire : pluies imprévisibles, frais altitude',
      '💧 Eau 2L minimum : pas de point fiable dans parc',
      '🍱 Pique-nique : aucune restauration dans parc',
      '🚗 Voiture recommandée : parc grand, départs dispersés',
      '📴 Réseau limité : téléchargez cartes offline avant',
      '🥾 Chaussures randonnée : sentiers parfois humides (pas sandales)',
      '📅 Mai-septembre : meilleure période (sec, frais, visibilité)',
      '🏖️ Combinez plage après-midi : Le Morne, Tamarin (30 min)',
      '🦌 Gibier (cerf, sanglier) : parfois visible aube/crépuscule'
    ],

    culture: {
      overview: 'Le Parc National des Gorges de Rivière Noire a été créé en 1994 pour protéger les derniers vestiges de forêt tropicale indigène de Maurice. Avant colonisation européenne, ces forêts couvraient l\'île entière. L\'exploitation du bois d\'ébène puis la conversion en plantations (canne, thé) ont réduit la forêt à 2% du territoire. Le parc préserve aujourd\'hui des espèces végétales uniques au monde (bois de natte, ébène noir, tambalacoque) et abrite des programmes de conservation réussis : le pigeon rose (Nesoenas mayeri), passé de 10 individus en 1977 à 400+ aujourd\'hui, est un succès mondial de la conservation. Les rangers mauriciens, souvent issus de villages voisins, perpétuent une connaissance intime de la forêt. Certains sentiers suivent d\'anciennes pistes utilisées par les esclaves marrons (runaway slaves) qui se réfugiaient dans ces montagnes au 18e siècle. Les noms créoles des lieux (Macchabée, Plaine Champagne, Alexandra) mélangent héritages français, créole et britannique.',

      events: [
        'Journée Mondiale Environnement (5 juin) : activités spéciales parc',
        'Comptages oiseaux endémiques (diverses périodes) : bénévolat possible',
        'Fermeture cyclones (nov-avril) : vérifiez météo (parc peut fermer)',
        'Saison sèche (mai-oct) : conditions optimales observation faune'
      ],

      etiquette: [
        'Sentiers balisés : restez dessus (protection végétation fragile)',
        'Zéro déchet : emportez tout (parc protégé)',
        'Silence relatif : observation faune (oiseaux, cerfs timides)',
        'Feu : strictement interdit (forêt inflammable)',
        'Camping : interdit (zone protégée)',
        'Cueillette : interdite (plantes protégées)',
        'Animaux : ne jamais nourrir (macaques, oiseaux)',
        'Photos : sans flash si oiseaux proches',
        'Drones : interdits sans autorisation spéciale',
        'Rangers : respectez consignes (protègent parc depuis décennies)',
        'Contribution : envisagez don conservation (boutique centre info)',
        'Partage : signalez observations rares aux rangers (science citoyenne)'
      ]
    }
  }
};
