import { Activity } from './types';
import { ActivityGroup } from './activity-pages';
import {
  extractAndRewriteKeyPoints,
  generatePersonalizedDescription,
  generatePricingSection,
  generateReviewsSection
} from './seo-helpers';

// Ré-exporter les fonctions pour qu'elles soient accessibles
export { generatePricingSection, generateReviewsSection } from './seo-helpers';

/**
 * Génère du contenu SEO original pour les pages d'activités
 * IMPORTANT: Contenu 100% unique, jamais copié depuis les sources externes
 */

/**
 * Contenu SEO pour les différents lieux de Maurice
 */
const locationContent: Record<string, {
  description: string;
  whyVisit: string;
  access: string;
}> = {
  'Chutes de Tamarin': {
    description: "Les Chutes de Tamarin, aussi connues sous le nom des 7 Cascades, constituent l'un des sites naturels les plus spectaculaires de l'île Maurice. Situées dans le sud-ouest de l'île, au cœur du Parc National des Gorges de Rivière Noire, ces cascades offrent un cadre tropical luxuriant.",
    whyVisit: "Ce site est idéal pour les amateurs de nature et de sensations. L'eau fraîche des cascades, les bassins naturels et la forêt tropicale environnante créent un décor unique. Vous pourrez observer une faune et une flore endémiques tout en profitant de vues panoramiques sur les gorges.",
    access: "Le site est accessible depuis Vacoas-Phœnix, à environ 30 minutes en voiture depuis la côte ouest."
  },
  'Flic en Flac': {
    description: "Flic en Flac est une station balnéaire animée située sur la côte ouest de Maurice, réputée pour sa longue plage de sable blanc et son lagon turquoise. Cette zone est particulièrement prisée pour les activités nautiques grâce à ses eaux calmes et claires.",
    whyVisit: "Les eaux protégées de Flic en Flac offrent des conditions idéales pour observer la vie marine. Le récif corallien abrite de nombreuses espèces de poissons tropicaux, et la zone est fréquentée par les dauphins et parfois les baleines en saison.",
    access: "Situé à 15 km au sud de Port-Louis, Flic en Flac est facilement accessible en voiture ou en transport public."
  },
  'Le Morne': {
    description: "Le Morne Brabant est une montagne emblématique inscrite au patrimoine mondial de l'UNESCO. Cette péninsule du sud-ouest offre des paysages époustouflants avec ses plages sauvages, son lagon aux eaux cristallines et ses conditions de vent exceptionnelles.",
    whyVisit: "Le Morne est mondialement reconnu comme l'un des meilleurs spots de sports de glisse de l'océan Indien. Les vents réguliers et le lagon peu profond en font un terrain de jeu idéal pour le kitesurf et la planche à voile. Les plages désertes ajoutent au charme du lieu.",
    access: "Le Morne se trouve à l'extrême sud-ouest de Maurice, à environ 1h de route depuis la côte ouest ou Port-Louis."
  },
  'Grand Baie': {
    description: "Grand Baie est la principale station balnéaire du nord de Maurice, connue pour son ambiance dynamique, ses boutiques, restaurants et son magnifique lagon aux eaux turquoise. C'est le point de départ idéal pour explorer les îles du nord.",
    whyVisit: "Cette zone offre un accès facile aux plus beaux sites de plongée et snorkeling de Maurice, notamment les îles du nord (Coin de Mire, Île Plate, Îlot Gabriel). La vie marine y est particulièrement riche.",
    access: "Grand Baie se situe au nord de l'île, à environ 25 km de Port-Louis, accessible facilement par la route côtière."
  },
  'Blue Bay': {
    description: "Blue Bay est une réserve marine protégée située dans le sud-est de Maurice. Son lagon aux eaux translucides et son jardin de corail en font l'un des plus beaux sites de snorkeling de l'île. La zone est classée parc marin depuis 1997.",
    whyVisit: "Les fonds marins de Blue Bay abritent plus de 50 espèces de coraux et une multitude de poissons tropicaux colorés. L'eau peu profonde et cristalline permet d'observer facilement cette biodiversité exceptionnelle, même pour les débutants.",
    access: "Blue Bay se trouve au sud-est de Maurice, près de Mahébourg, à environ 45 minutes de l'aéroport."
  },
  'Chamouny': {
    description: "Chamouny est un site naturel du sud-ouest de Maurice, réputé pour ses activités d'aventure en pleine nature. La région offre des paysages vallonnés, des forêts luxuriantes et des parcours aménagés pour les activités outdoor.",
    whyVisit: "Cette zone est parfaite pour les amateurs d'adrénaline et de nature. Les parcours d'aventure sont variés, allant de la tyrolienne au quad, en passant par les ponts suspendus, le tout dans un cadre naturel préservé.",
    access: "Situé dans le district de Rivière Noire, Chamouny est accessible depuis la côte ouest en 20-30 minutes de voiture."
  },
  'Trou d\'Eau Douce': {
    description: "Trou d'Eau Douce est un charmant village de pêcheurs sur la côte est de Maurice, servant de point de départ principal pour l'Île aux Cerfs. Cette zone paisible offre un aperçu authentique de la vie mauricienne.",
    whyVisit: "Depuis Trou d'Eau Douce, vous pouvez facilement accéder à l'Île aux Cerfs et à son lagon paradisiaque. Les excursions en bateau permettent de découvrir la mangrove, les îlots et les meilleurs spots de snorkeling de la côte est.",
    access: "Le village se situe sur la côte est, à environ 50 km de Port-Louis, facilement accessible via la route côtière."
  }
};

/**
 * Génère une introduction SEO riche et contextualisée pour une page fusion
 * Analyse les activités regroupées pour créer un contenu unique et pertinent
 */
export function generateFusionIntro(group: ActivityGroup): string {
  const { category, mainLocation, activities } = group;
  const priceRange = {
    min: Math.min(...activities.map(a => a.price)),
    max: Math.max(...activities.map(a => a.price)),
  };

  const locationInfo = locationContent[mainLocation] || {
    description: `${mainLocation} est une destination prisée de l'île Maurice.`,
    whyVisit: `Cette zone offre des conditions idéales pour pratiquer ${category.toLowerCase()}.`,
    access: `Le site est facilement accessible depuis les principales zones touristiques de Maurice.`
  };

  let intro = '';

  // Introduction contextuelle selon la catégorie et le lieu
  if (category === 'Canyoning' && mainLocation.includes('Tamarin')) {
    intro += `Le canyoning aux Chutes de Tamarin représente l'une des aventures outdoor les plus spectaculaires de Maurice. `;
    intro += `Ce site exceptionnel, avec ses 7 cascades successives nichées dans le Parc National des Gorges de Rivière Noire, attire les amateurs de sensations fortes du monde entier. `;
    intro += `Des rappels vertigineux jusqu'à 40 mètres, des sauts dans des bassins naturels, des toboggans aquatiques : chaque descente est unique.\n\n`;
  } else if (category === 'Kitesurf' && mainLocation.includes('Morne')) {
    intro += `Le Morne s'est imposé comme LA destination kitesurf de l'océan Indien. `;
    intro += `Ce spot de classe mondiale bénéficie de conditions exceptionnelles : vents réguliers, lagon turquoise peu profond, plan d'eau étendu et températures idéales toute l'année. `;
    intro += `Que vous découvriez le kitesurf ou que vous cherchiez à progresser en freestyle, ce cadre paradisiaque offre un terrain de jeu sans égal.\n\n`;
  } else if (category === 'Observation des cétacés') {
    intro += `L'observation des cétacés à Maurice est une expérience qui marque les esprits. `;
    intro += `Les eaux chaudes de l'océan Indien accueillent plusieurs espèces de dauphins résidents et, de juillet à octobre, les majestueuses baleines à bosse viennent se reproduire au large de ${mainLocation}. `;
    intro += `Ces rencontres avec la vie marine, dans le respect des animaux et de leur environnement, offrent des moments d'émotion pure.\n\n`;
  } else if (category.includes('Kayak')) {
    intro += `Explorer les eaux de ${mainLocation} en kayak offre une perspective unique sur la beauté des lagons mauriciens. `;
    intro += `Cette approche douce permet d'accéder à des zones préservées, d'observer la vie marine de près et de profiter des paysages à son rythme. `;
    intro += `Entre mangroves, îlots déserts et récifs coralliens, chaque sortie révèle de nouveaux trésors.\n\n`;
  } else {
    intro += `${mainLocation} est un site de choix pour pratiquer le ${category.toLowerCase()} à l'île Maurice. `;
    intro += locationInfo.description + ' ' + locationInfo.whyVisit + '\n\n';
  }

  // Présentation des formules disponibles
  intro += `## Les ${activities.length} formules disponibles\n\n`;

  const hasInitiation = activities.some(a => a.name.toLowerCase().includes('initiation') || a.name.toLowerCase().includes('découverte'));
  const hasAdvanced = activities.some(a => {
    const level = a.details.physicalConditions?.min?.name?.toLowerCase() || '';
    return level.includes('sportif') || level.includes('confirmé');
  });

  if (hasInitiation && hasAdvanced) {
    intro += `Que vous débutiez ou que vous cherchiez une expérience plus engagée, vous trouverez la formule adaptée à votre niveau. `;
  } else if (hasInitiation) {
    intro += `Ces formules s'adressent particulièrement aux débutants souhaitant découvrir l'activité en toute sécurité. `;
  } else if (hasAdvanced) {
    intro += `Ces sorties s'adressent aux pratiquants en bonne condition physique recherchant des sensations et de l'engagement. `;
  }

  intro += `Les tarifs varient de **${priceRange.min.toFixed(0)}€ à ${priceRange.max.toFixed(0)}€ par personne** selon la durée, le niveau et les prestations incluses.\n\n`;

  // Analyse et présentation détaillée de chaque formule
  activities.forEach((activity, index) => {
    const hours = activity.duration?.min ? Math.floor(activity.duration.min / 60) : 0;
    const mins = activity.duration?.min ? activity.duration.min % 60 : 0;
    const durationText = hours > 0 ? `${hours}h${mins > 0 ? mins : ''}` : (mins > 0 ? `${mins} minutes` : 'adaptable');
    const difficultyText = activity.details.physicalConditions?.min?.name || 'tous niveaux';

    // Titre avec indication du positionnement
    const isLessExpensive = activity.price <= (priceRange.min + (priceRange.max - priceRange.min) * 0.4);
    const isPremium = activity.price >= (priceRange.min + (priceRange.max - priceRange.min) * 0.7);

    intro += `### ${index + 1}. ${activity.name.substring(0, 100)}${activity.name.length > 100 ? '...' : ''}\n\n`;

    // Description contextuelle
    if (activity.enriched?.about && activity.enriched.about.length > 100) {
      const keyPoints = extractAndRewriteKeyPoints(activity.enriched.about, activity.name);
      if (keyPoints.length > 0) {
        intro += `Cette formule se distingue par : ${keyPoints.slice(0, 2).join(', ').toLowerCase()}. `;
      }
    }

    intro += `Proposée par **${activity.details.organizedBy}**, cette sortie de **${durationText}** est classée **${difficultyText}**. `;

    // Informations pratiques
    if (activity.enriched?.requirements?.minAge) {
      intro += `Accessible à partir de ${activity.enriched.requirements.minAge} ans. `;
    }

    if (activity.enriched?.requirements?.swimRequired) {
      intro += `Savoir nager est requis. `;
    }

    if (activity.details.spokenLanguages && activity.details.spokenLanguages.length > 0) {
      intro += `Guidage en ${activity.details.spokenLanguages.join(', ')}. `;
    }

    // Indication de prix avec contexte
    if (isLessExpensive && activities.length > 2) {
      intro += `\n\n**Tarif : ${activity.price.toFixed(0)}€/personne** - L'option la plus accessible de cette sélection.\n\n`;
    } else if (isPremium && activities.length > 2) {
      intro += `\n\n**Tarif : ${activity.price.toFixed(0)}€/personne** - Formule premium pour une expérience approfondie.\n\n`;
    } else {
      intro += `\n\n**Tarif : ${activity.price.toFixed(0)}€/personne**\n\n`;
    }

    // Avis si disponibles
    if (activity.rating && activity.reviewCount >= 10) {
      intro += `Note moyenne : ${activity.rating}/5 étoiles (${activity.reviewCount} avis)\n\n`;
    }
  });

  intro += `## Comment choisir la formule qui vous convient ?\n\n`;

  intro += `Plusieurs critères vous guideront dans votre choix :\n\n`;
  intro += `- **Votre expérience** : Les formules d'initiation conviennent aux débutants, tandis que les sorties sportives s'adressent aux pratiquants aguerris\n`;
  intro += `- **Votre budget** : Les tarifs reflètent la durée, le niveau d'encadrement et les prestations incluses\n`;
  intro += `- **Le temps disponible** : De quelques heures à une demi-journée selon vos contraintes\n`;
  intro += `- **Vos attentes** : Découverte tranquille ou recherche d'adrénaline, chaque formule a sa personnalité\n\n`;

  return intro;
}

/**
 * Génère du contenu "À quoi s'attendre" pour une page fusion
 */
export function generateWhatToExpect(group: ActivityGroup): string {
  const { category, mainLocation } = group;

  let content = `## À quoi s'attendre lors de votre sortie ${category.toLowerCase()} ?\n\n`;

  // Contenu spécifique par catégorie
  if (category === 'Randonnée') {
    content += `Une sortie randonnée à ${mainLocation} vous permet de découvrir la nature mauricienne sous son aspect le plus authentique. `;
    content += `Vous évoluerez sur des sentiers balisés ou plus sauvages, accompagné d'un guide local qui partagera ses connaissances sur la faune et la flore endémiques.\n\n`;
    content += `**Déroulement type :**\n`;
    content += `- Accueil au point de rendez-vous et briefing de sécurité\n`;
    content += `- Marche d'approche à travers la forêt tropicale ou les zones dégagées\n`;
    content += `- Arrêts réguliers pour admirer les points de vue et se désaltérer\n`;
    content += `- Possibilité de baignade dans les bassins naturels selon la formule choisie\n`;
    content += `- Retour au point de départ avec débriefing\n\n`;
  } else if (category === 'Kitesurf') {
    content += `${mainLocation} offre des conditions de vent et de lagon parmi les meilleures de l'océan Indien pour le kitesurf. `;
    content += `Que vous soyez débutant ou confirmé, vous profiterez d'un plan d'eau peu profond et sécurisé.\n\n`;
    content += `**Déroulement type :**\n`;
    content += `- Accueil à la base nautique et mise à disposition du matériel\n`;
    content += `- Pour les débutants : théorie au sol, puis pratique dans l'eau peu profonde\n`;
    content += `- Pour les confirmés : session libre avec conseils du moniteur\n`;
    content += `- Possibilité de progresser vers les tricks et le freestyle selon votre niveau\n\n`;
  } else if (category === 'Observation des cétacés') {
    content += `Les eaux au large de ${mainLocation} accueillent dauphins et baleines selon les saisons. `;
    content += `Cette expérience unique vous permet d'observer ces mammifères marins dans leur milieu naturel, dans le respect de leur tranquillité.\n\n`;
    content += `**Déroulement type :**\n`;
    content += `- Départ matinal du port pour maximiser les chances d'observation\n`;
    content += `- Navigation vers les zones fréquentées par les cétacés\n`;
    content += `- Observation depuis le bateau avec explications du guide\n`;
    content += `- Mise à l'eau possible selon les conditions et le comportement des animaux\n`;
    content += `- Retour au port en milieu de matinée ou après-midi\n\n`;
  } else if (category.includes('Kayak') || category.includes('kayak')) {
    content += `Le kayak de mer à ${mainLocation} vous offre une façon paisible et écologique d'explorer le lagon et ses richesses. `;
    content += `Vous pagayerez à votre rythme tout en profitant des paysages marins exceptionnels.\n\n`;
    content += `**Déroulement type :**\n`;
    content += `- Initiation à la pagaie et briefing de sécurité\n`;
    content += `- Départ depuis la plage vers le lagon\n`;
    content += `- Exploration des zones peu profondes avec observation de la vie marine\n`;
    content += `- Arrêts baignade et snorkeling selon le parcours\n`;
    content += `- Retour à la base avec possibilité de douche\n\n`;
  } else {
    content += `Votre sortie ${category.toLowerCase()} à ${mainLocation} sera encadrée par des professionnels diplômés qui garantissent votre sécurité tout en vous faisant vivre une expérience mémorable.\n\n`;
  }

  return content;
}

/**
 * Génère les conseils pratiques pour une page fusion
 */
export function generatePracticalAdvice(group: ActivityGroup): string {
  const { category, mainLocation } = group;
  const locationInfo = locationContent[mainLocation];

  let content = `## Conseils pratiques pour votre sortie\n\n`;

  content += `### Quand partir ?\n\n`;
  if (mainLocation === 'Le Morne' && category === 'Kitesurf') {
    content += `La meilleure période pour le kitesurf au Morne s'étend de **mai à novembre**, avec des vents réguliers et soutenus. `;
    content += `Les mois de juillet-août offrent les conditions les plus constantes.\n\n`;
  } else if (category === 'Observation des cétacés') {
    content += `Les dauphins sont présents toute l'année, tandis que les baleines à bosse visitent Maurice de **juillet à octobre**. `;
    content += `Pour maximiser vos chances d'observation, privilégiez les sorties matinales.\n\n`;
  } else {
    content += `Maurice bénéficie d'un climat tropical agréable toute l'année. La saison sèche (mai à novembre) offre généralement les meilleures conditions, `;
    content += `mais l'été austral (décembre à avril) permet aussi de profiter des activités dans une nature luxuriante.\n\n`;
  }

  content += `### Que prévoir ?\n\n`;
  content += `**Équipement personnel recommandé :**\n`;
  content += `- Crème solaire haute protection (écologique pour les activités marines)\n`;
  content += `- Eau en quantité suffisante\n`;
  content += `- Vêtements adaptés (maillot de bain, tenue de sport légère)\n`;

  if (category === 'Randonnée') {
    content += `\n- Chaussures de randonnée avec bonne adhérence\n`;
    content += `- Chapeau ou casquette\n`;
    content += `- Vêtements de rechange si baignade prévue\n`;
  } else if (category.includes('marine') || category.includes('Kayak') || category.includes('Snorkeling')) {
    content += `\n- Serviette de plage\n`;
    content += `- Lycra ou t-shirt anti-UV\n`;
    content += `- Sac étanche pour vos affaires\n`;
  }

  content += `\n\n**Le matériel technique est fourni par l'organisateur** (équipement de sécurité, matériel spécifique à l'activité).\n\n`;

  content += `### Comment s'y rendre ?\n\n`;
  if (locationInfo) {
    content += locationInfo.access;
  } else {
    content += `Le point de rendez-vous exact vous sera communiqué après réservation. `;
    content += `La plupart des organisateurs proposent le transfert depuis votre hébergement moyennant supplément.`;
  }

  content += `\n\n`;

  return content;
}

/**
 * Génère une introduction SEO personnalisée et réfléchie pour une page individuelle
 * Approche contextuelle qui analyse les données JSON pour créer un contenu unique
 */
export function generateIndividualIntro(activity: Activity): string {
  const { name, category, locations, price, duration, details, enriched } = activity;
  const mainLocation = locations[0];
  const locationInfo = locationContent[mainLocation];

  let intro = '';

  // Analyser le nom de l'activité pour personnaliser l'introduction
  const isInitiation = name.toLowerCase().includes('initiation') || name.toLowerCase().includes('découverte');
  const isPrivate = name.toLowerCase().includes('privé') || name.toLowerCase().includes('private');
  const isFamily = name.toLowerCase().includes('famille') || name.toLowerCase().includes('family');

  // Extraire les points clés de "about" s'il existe
  const keyPoints = enriched?.about ? extractAndRewriteKeyPoints(enriched.about, name) : [];

  // Introduction contextuelle basée sur le type d'activité
  if (category === 'Canyoning' && mainLocation.includes('Tamarin')) {
    intro += `Les 7 Cascades de Tamarin offrent l'un des parcours de canyoning les plus spectaculaires de l'île Maurice. `;
    intro += `Ce site naturel exceptionnel, niché au cœur du Parc National des Gorges de Rivière Noire, combine cascades imposantes, bassins d'eau cristalline et forêt tropicale luxuriante. `;

    if (keyPoints.length > 0) {
      const hasRappel = keyPoints.some(p => p.toLowerCase().includes('rappel'));
      const hasSaut = keyPoints.some(p => p.toLowerCase().includes('saut'));

      if (hasRappel && hasSaut) {
        intro += `Cette aventure vous fera vivre des sensations intenses avec des rappels vertigineux et des sauts dans les bassins naturels. `;
      } else if (hasRappel) {
        intro += `Vous descendrez en rappel des cascades impressionnantes, entouré d'une nature sauvage et préservée. `;
      }
    }
  } else if (category === 'Kitesurf') {
    intro += `Le Morne est reconnu mondialement comme l'un des meilleurs spots de kitesurf de l'océan Indien. `;
    intro += `Son lagon turquoise peu profond, ses vents réguliers et son cadre naturel exceptionnel en font un terrain de jeu idéal pour tous les niveaux. `;

    if (isInitiation) {
      intro += `Cette initiation vous permettra de découvrir les joies de la glisse en toute sécurité, avec un apprentissage progressif adapté aux débutants. `;
    } else {
      intro += `Que vous souhaitiez perfectionner votre technique ou simplement profiter de conditions optimales, ce spot vous offrira des sessions mémorables. `;
    }
  } else if (category === 'Observation des cétacés') {
    intro += `Les eaux chaudes de l'océan Indien au large de ${mainLocation} accueillent dauphins et baleines dans un environnement préservé. `;
    intro += `Cette sortie en mer vous offre une opportunité rare d'observer ces mammifères marins majestueux dans leur habitat naturel, dans le respect de leur bien-être. `;

    if (enriched?.about?.toLowerCase().includes('nage')) {
      intro += `Selon les conditions et le comportement des animaux, vous pourrez même avoir la chance de nager à leurs côtés pour un moment d'exception. `;
    }
  } else if (category.includes('Kayak')) {
    intro += `Explorer ${mainLocation} en kayak de mer offre une perspective unique sur les beautés du lagon mauricien. `;
    intro += `Cette approche douce et respectueuse de l'environnement vous permet d'accéder à des zones préservées tout en observant la riche vie marine. `;
  } else if (category === 'Randonnée') {
    intro += `${mainLocation} révèle ses trésors naturels aux randonneurs qui empruntent ses sentiers. `;

    if (locationInfo) {
      intro += locationInfo.description + ' ';
    }

    if (keyPoints.length > 0) {
      const hasCascade = keyPoints.some(p => p.toLowerCase().includes('cascade'));
      const hasBassin = keyPoints.some(p => p.toLowerCase().includes('bassin'));

      if (hasCascade && hasBassin) {
        intro += `Cette randonnée vous mènera à travers la forêt jusqu'à des cascades spectaculaires et des bassins naturels où vous pourrez vous rafraîchir. `;
      }
    }
  } else {
    // Introduction générique mais personnalisée
    intro += `${mainLocation} est le cadre idéal pour pratiquer le ${category.toLowerCase()}. `;
    if (locationInfo) {
      intro += locationInfo.description + ' ';
    }
  }

  intro += '\n\n';

  // Informations pratiques contextualisées
  const hours = duration.min ? Math.floor(duration.min / 60) : 0;
  const mins = duration.min ? duration.min % 60 : 0;
  const durationText = hours > 0 ? `${hours}h${mins > 0 ? mins : ''}` : (mins > 0 ? `${mins} minutes` : 'adaptable');

  intro += `## L'essentiel de cette sortie\n\n`;

  intro += `**Organisateur:** ${details.organizedBy}\n`;
  intro += `**Durée:** ${durationText}\n`;
  intro += `**Tarif:** ${price.toFixed(0)}€ par personne\n`;

  const difficultyText = details.physicalConditions?.min?.name || 'tous niveaux';
  intro += `**Niveau requis:** ${difficultyText}\n`;

  if (enriched?.requirements?.minAge) {
    intro += `**Âge minimum:** ${enriched.requirements.minAge} ans\n`;
  }

  if (enriched?.requirements?.swimRequired) {
    intro += `**Prérequis:** Savoir nager\n`;
  }

  if (enriched?.requirements?.maxWeight) {
    intro += `**Poids maximum:** ${enriched.requirements.maxWeight} kg\n`;
  }

  if (details.spokenLanguages && details.spokenLanguages.length > 0) {
    intro += `**Langues:** ${details.spokenLanguages.join(', ')}\n`;
  }

  intro += `\n`;

  // Ajouter une description enrichie basée sur "about"
  if (enriched?.about && enriched.about.length > 100) {
    intro += `## Une expérience immersive\n\n`;

    // Extraire et réécrire les éléments clés
    if (keyPoints.length > 0) {
      intro += `Cette sortie vous réserve plusieurs moments forts : ${keyPoints.slice(0, 3).join(', ').toLowerCase()}. `;
    }

    // Ajouter le contexte de l'encadrement
    intro += `L'encadrement est assuré par ${details.organizedBy}, professionnel reconnu pour son expertise et sa connaissance approfondie du site. `;
    intro += `Votre guide partagera avec vous sa passion et veillera à ce que vous viviez cette expérience en toute sécurité.\n\n`;
  }

  // Programme détaillé si disponible
  if (enriched?.program && Array.isArray(enriched.program) && enriched.program.length > 0 && enriched.program.length <= 6) {
    intro += `## Déroulement de votre sortie\n\n`;
    enriched.program.forEach((step) => {
      intro += `**${step.step}.** ${step.description}\n\n`;
    });
  }

  return intro;
}

/**
 * Génère du contenu "Pourquoi choisir cette activité" personnalisé et contextualisé
 */
export function generateWhyChoose(activity: Activity): string {
  const { name, category, locations, details, rating, reviewCount, price, enriched } = activity;
  const mainLocation = locations[0];
  const locationInfo = locationContent[mainLocation];

  let content = `## Pourquoi choisir cette sortie ?\n\n`;

  // Analyser les atouts spécifiques de l'activité
  const hasGoodRating = rating && rating >= 4.5 && reviewCount >= 10;
  const multiLanguage = details.spokenLanguages && details.spokenLanguages.length >= 3;

  // Section 1: Les points forts du site
  content += `### Un site naturel d'exception\n\n`;

  if (locationInfo) {
    content += locationInfo.whyVisit + ' ';
  }

  // Contextualiser selon la catégorie
  if (category === 'Canyoning' && mainLocation.includes('Tamarin')) {
    content += `Les 7 Cascades offrent une variété de passages techniques : sauts, toboggans naturels, rappels et nage en eaux vives. `;
    content += `La beauté du canyon, avec sa végétation luxuriante et ses bassins d'eau claire, en fait l'un des plus beaux parcours de canyoning de l'océan Indien. `;
  } else if (category === 'Kitesurf' && mainLocation.includes('Morne')) {
    content += `Le spot bénéficie de vents thermiques réguliers, d'un lagon peu profond idéal pour l'apprentissage, et d'une zone de navigation étendue pour les riders confirmés. `;
    content += `La montagne du Morne en toile de fond ajoute une dimension spectaculaire à vos sessions. `;
  } else if (category === 'Observation des cétacés') {
    content += `Les eaux chaudes et profondes au large de ${mainLocation} constituent un habitat privilégié pour les dauphins à long bec et les dauphins souffleurs. `;
    content += `De juillet à octobre, les baleines à bosse viennent se reproduire dans ces eaux, offrant des rencontres inoubliables. `;
  } else if (mainLocation === 'Île aux Cerfs') {
    content += `L'île aux Cerfs est considérée comme l'un des plus beaux lagons de Maurice, avec ses eaux cristallines, ses plages de sable fin et sa végétation tropicale. `;
    content += `L'isolement de l'île garantit une expérience paisible loin de l'agitation touristique. `;
  }

  content += '\n\n';

  // Section 2: L'expertise du prestataire
  content += `### Un encadrement expert et passionné\n\n`;
  content += `${details.organizedBy} s'est imposé comme une référence pour le ${category.toLowerCase()} à l'île Maurice. `;

  if (hasGoodRating) {
    content += `Avec une note moyenne de **${rating}/5 étoiles** basée sur ${reviewCount} avis, la qualité du service est plébiscitée par les participants. `;
    content += `Cette reconnaissance témoigne du professionnalisme des guides et de l'attention portée à chaque sortie. `;
  } else if (rating && reviewCount > 0) {
    content += `Les ${reviewCount} participants ayant évalué cette activité lui attribuent une note de ${rating}/5 étoiles. `;
  } else {
    content += `Les guides diplômés mettent leur expérience au service de votre sécurité et de votre plaisir. `;
  }

  if (multiLanguage) {
    content += `L'équipe polyglotte (${details.spokenLanguages.join(', ')}) facilite les échanges et vous permet de profiter pleinement des explications et anecdotes. `;
  } else if (details.spokenLanguages && details.spokenLanguages.length > 0) {
    content += `Les guides s'expriment en ${details.spokenLanguages.join(' et ')}, assurant une communication fluide. `;
  }

  content += '\n\n';

  // Section 3: Accessibilité et conditions
  content += `### Une activité accessible et bien encadrée\n\n`;

  const level = details.physicalConditions?.min?.name || 'tous niveaux';
  const levelLower = level.toLowerCase();

  if (levelLower.includes('débutant') || levelLower.includes('facile')) {
    content += `Cette sortie classée **${level}** est parfaite pour une première expérience. `;
    content += `Aucune expérience préalable n'est nécessaire, le guide adapte son accompagnement à votre rythme. `;
  } else if (levelLower.includes('moyen') || levelLower.includes('intermédiaire')) {
    content += `Le niveau **${level}** implique une bonne condition physique sans pour autant nécessiter une expérience spécifique. `;
    content += `Les passages techniques sont encadrés de près pour garantir votre progression en confiance. `;
  } else if (levelLower.includes('sportif') || levelLower.includes('difficile')) {
    content += `Cette sortie **${level}** s'adresse aux personnes en bonne forme physique et recherchant des sensations. `;
    content += `L'engagement et l'intensité de l'activité en font une expérience sportive à part entière. `;
  } else {
    content += `Le niveau requis (**${level}**) permet à un large public de participer. `;
  }

  if (enriched?.requirements?.minAge) {
    if (enriched.requirements.minAge <= 8) {
      content += `Accessible dès **${enriched.requirements.minAge} ans**, cette activité convient aux familles souhaitant partager un moment ensemble. `;
    } else if (enriched.requirements.minAge >= 14) {
      content += `L'âge minimum de **${enriched.requirements.minAge} ans** s'explique par les aspects techniques et la condition physique requise. `;
    } else {
      content += `Âge minimum requis: **${enriched.requirements.minAge} ans**. `;
    }
  }

  if (enriched?.requirements?.swimRequired) {
    content += `Savoir nager est indispensable pour votre sécurité. `;
  }

  if (enriched?.requirements?.maxWeight) {
    content += `Poids maximum autorisé: ${enriched.requirements.maxWeight} kg (contraintes du matériel de sécurité). `;
  }

  content += '\n\n';

  // Section 4: Rapport qualité-prix
  content += `### Une prestation complète à ${price.toFixed(0)}€\n\n`;
  content += `Le tarif de **${price.toFixed(0)}€ par personne** inclut tout le nécessaire pour vivre cette expérience en toute tranquillité : `;
  content += `encadrement par un professionnel diplômé, mise à disposition de l'équipement technique, briefing de sécurité, et assurance. `;

  if (price < 60) {
    content += `Ce positionnement tarifaire rend l'activité accessible tout en maintenant un excellent niveau de prestation. `;
  } else if (price > 150) {
    content += `Ce positionnement reflète le caractère premium de l'expérience et la qualité de l'encadrement proposé. `;
  }

  content += '\n\n';

  return content;
}

/**
 * Génère une section FAQ pour les pages
 */
export function generateFAQ(category: string, mainLocation: string): string {
  let faq = `## Questions fréquentes\n\n`;

  faq += `### Dois-je réserver à l'avance ?\n`;
  faq += `Oui, la réservation à l'avance est fortement recommandée, surtout en haute saison touristique (juillet-août et décembre-janvier). `;
  faq += `Cela vous garantit votre place et permet à l'organisateur de préparer au mieux votre sortie.\n\n`;

  faq += `### Que se passe-t-il en cas de mauvais temps ?\n`;
  faq += `La sécurité est prioritaire. Si les conditions météo ne permettent pas de réaliser l'activité en toute sécurité, `;
  faq += `l'organisateur vous proposera un report ou un remboursement complet. `;
  faq += `Dans la plupart des cas, une solution alternative est trouvée rapidement.\n\n`;

  faq += `### Le transport est-il inclus ?\n`;
  faq += `Le transport n'est généralement pas inclus dans le tarif de base, mais la plupart des organisateurs proposent un service de transfert `;
  faq += `depuis les principales zones hôtelières moyennant supplément. Renseignez-vous lors de la réservation.\n\n`;

  if (category === 'Randonnée' || category.includes('Observation')) {
    faq += `### Puis-je apporter mon appareil photo ?\n`;
    faq += `Oui, vous pouvez apporter votre appareil photo ou smartphone. `;
    faq += `Prévoyez toutefois un sac étanche pour le protéger de l'humidité et des éclaboussures. `;
    faq += `Les guides font régulièrement des pauses photos aux plus beaux points de vue.\n\n`;
  }

  faq += `### Puis-je annuler ma réservation ?\n`;
  faq += `Les conditions d'annulation varient selon l'organisateur, mais la plupart proposent une annulation gratuite jusqu'à 24-48h avant la sortie. `;
  faq += `Consultez les conditions spécifiques lors de votre réservation.\n\n`;

  return faq;
}
