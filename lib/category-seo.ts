/**
 * Contenu SEO pour les pages catégories
 * Permet de personnaliser titre, description et contenu pour chaque catégorie
 */

export interface CategorySEO {
  title: string;
  description: string;
  h1: string;
  intro: string;
  keywords: string[];
  relatedKeywords?: string[];
  backgroundImage?: string;
}

/**
 * Mapping des catégories vers leur contenu SEO optimisé
 */
export const categorySEOContent: Record<string, CategorySEO> = {
  'Canyoning': {
    title: 'Canyoning à l\'Île Maurice : descentes sensationnelles',
    description: 'Découvrez le canyoning à l\'île Maurice : descentes en rappel, toboggans naturels et bassins cristallins dans les gorges spectaculaires de Tamarin.',
    h1: 'Canyoning à l\'Île Maurice',
    intro: 'Le canyoning à l\'île Maurice offre des sensations fortes dans un cadre naturel exceptionnel. Les gorges de Tamarin et leurs 7 cascades constituent le terrain de jeu idéal pour cette activité d\'aventure. Descentes en rappel, sauts dans les bassins naturels et glissades sur toboggans rocheux vous attendent.',
    keywords: ['canyoning île maurice', 'canyoning tamarin', 'descente rappel maurice', '7 cascades tamarin'],
    relatedKeywords: ['canyon île maurice', 'activité aventure maurice', 'sport extrême maurice'],
    backgroundImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2023/04/canyoning-ile-maurice.jpg',
  },
  'Plongée sous-marine': {
    title: 'Plongée sous-marine à l\'Île Maurice : spots et épaves',
    description: 'Explorez les fonds marins de l\'île Maurice : récifs coralliens, épaves mythiques et vie marine exceptionnelle. Sites de plongée pour tous niveaux.',
    h1: 'Plongée sous-marine à l\'Île Maurice',
    intro: 'La plongée sous-marine à l\'île Maurice révèle des merveilles sous-marines : récifs coralliens multicolores, épaves historiques et une biodiversité marine remarquable. Les eaux chaudes et claires de l\'océan Indien offrent des conditions idéales pour la plongée toute l\'année, avec une visibilité pouvant atteindre 30 mètres.',
    keywords: ['plongée île maurice', 'plongée sous marine maurice', 'spot plongée maurice', 'épave maurice'],
    relatedKeywords: ['diving mauritius', 'plongée blue bay', 'plongée flic en flac'],
    backgroundImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2023/04/1ere-plongee-encadree-ile-maurice.jpg',
  },
  'Snorkeling': {
    title: 'Snorkeling à l\'Île Maurice : lagons et récifs coralliens',
    description: 'Explorez les lagons turquoise en snorkeling : poissons tropicaux, coraux et tortues marines dans les plus beaux spots de l\'île Maurice.',
    h1: 'Snorkeling à l\'Île Maurice',
    intro: 'Le snorkeling à l\'île Maurice permet de découvrir facilement les merveilles sous-marines des lagons. Sans nécessiter de formation particulière, cette activité accessible à tous dévoile un monde aquatique coloré : poissons-clowns, poissons-perroquets, coraux et parfois même des tortues marines.',
    keywords: ['snorkeling île maurice', 'palmes masque tuba maurice', 'lagon île maurice', 'poissons tropicaux'],
    relatedKeywords: ['randonnée aquatique maurice', 'blue bay snorkeling', 'ile aux cerfs snorkeling'],
    backgroundImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2023/06/blue-bay-ile-maurice.jpg',
  },
  'Observation des cétacés': {
    title: 'Observation des baleines et dauphins à l\'Île Maurice',
    description: 'Partez observer les baleines et dauphins dans leur habitat naturel. Sorties en bateau et nage avec les dauphins au large de l\'île Maurice.',
    h1: 'Observation des cétacés à l\'Île Maurice',
    intro: 'L\'observation des cétacés à l\'île Maurice offre des moments magiques : baleines à bosse (juillet à octobre), grands dauphins et dauphins à long bec sont régulièrement observés au large de la côte ouest. Ces sorties en mer respectueuses permettent d\'approcher ces mammifères marins dans leur milieu naturel.',
    keywords: ['observation baleines île maurice', 'dauphins île maurice', 'whale watching mauritius', 'nage avec dauphins'],
    relatedKeywords: ['cétacés maurice', 'sortie bateau dauphins', 'tamarin dolphins'],
    backgroundImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2023/04/observer-cetaces-ile-maurice.jpg',
  },
  'Balade en catamaran': {
    title: 'Balade en catamaran à l\'Île Maurice : croisières et îlots',
    description: 'Voguez sur le lagon en catamaran : croisières vers l\'Île aux Cerfs, Île Plate et îlots paradisiaques. Snorkeling et barbecue inclus.',
    h1: 'Balade en catamaran à l\'Île Maurice',
    intro: 'Les balades en catamaran à l\'île Maurice combinent détente et découverte. Ces croisières vous emmènent vers les plus beaux îlots : Île aux Cerfs, Île Plate, Ilot Gabriel. Au programme : navigation sur les eaux turquoise, snorkeling dans les récifs, barbecue sur la plage et détente au soleil.',
    keywords: ['catamaran île maurice', 'croisière catamaran maurice', 'ile aux cerfs catamaran', 'sortie mer maurice'],
    relatedKeywords: ['bateau île maurice', 'excursion maritime', 'croisière lagon'],
    backgroundImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/05/7b352df391fd0e472945b75db418b484.jpg',
  },
  'Balade en bateau': {
    title: 'Balade en bateau à l\'Île Maurice : excursions maritimes',
    description: 'Découvrez l\'île Maurice depuis la mer : excursions en bateau vers les îlots, pêche au gros et croisières au coucher du soleil.',
    h1: 'Balade en bateau à l\'Île Maurice',
    intro: 'Les balades en bateau à l\'île Maurice offrent de multiples possibilités : excursions vers les îlots du nord, sorties pêche au gros, croisières romantiques au coucher du soleil ou découverte de la côte sauvage. Chaque sortie en mer révèle une facette différente de l\'île.',
    keywords: ['balade bateau île maurice', 'excursion bateau maurice', 'sortie mer maurice', 'croisière maurice'],
    relatedKeywords: ['bateau rapide maurice', 'speed boat mauritius', 'excursion maritime'],
    backgroundImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2023/08/activtes-ile-aux-cerfs-ile-maurice.jpg',
  },
  'Randonnée': {
    title: 'Randonnée à l\'Île Maurice : montagnes et cascades',
    description: 'Parcourez les sentiers de l\'île Maurice : ascension du Morne, Le Pouce, Trois Mamelles. Paysages spectaculaires et cascades rafraîchissantes.',
    h1: 'Randonnée à l\'Île Maurice',
    intro: 'La randonnée à l\'île Maurice dévoile des paysages montagneux spectaculaires et une nature luxuriante. Du sommet du Morne Brabant classé UNESCO aux cascades cachées de Chamarel, les sentiers mauriciens offrent des panoramas à couper le souffle sur le lagon, les montagnes verdoyantes et l\'océan Indien.',
    keywords: ['randonnée île maurice', 'trekking maurice', 'le morne maurice', 'montagne maurice'],
    relatedKeywords: ['hiking mauritius', 'le pouce', 'trois mamelles', 'cascade maurice'],
    backgroundImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2023/03/randonnee-ile-maurice.jpg',
  },
  'Quad': {
    title: 'Quad à l\'Île Maurice : raids tout-terrain et aventure',
    description: 'Vivez l\'aventure en quad : raids dans les terres intérieures, forêts et chemins accidentés de l\'île Maurice. Sensations garanties.',
    h1: 'Quad à l\'Île Maurice',
    intro: 'Le quad à l\'île Maurice combine aventure et découverte des paysages intérieurs. Ces raids motorisés vous emmènent hors des sentiers battus : plantation de cannes à sucre, forêts tropicales, chemins boueux et points de vue panoramiques. Une façon originale et sportive d\'explorer l\'île.',
    keywords: ['quad île maurice', 'raid quad maurice', 'quad casela', 'tout terrain maurice'],
    relatedKeywords: ['atv mauritius', 'moto tout terrain', 'activité motorisée'],
    backgroundImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2023/04/activite-ile-maurice.jpg',
  },
  'Buggy': {
    title: 'Buggy à l\'Île Maurice : aventure tout-terrain',
    description: 'Pilotez un buggy sur les chemins accidentés de l\'île Maurice : forêts, rivières et paysages sauvages. Raid buggy pour les amateurs de sensations.',
    h1: 'Buggy à l\'Île Maurice',
    intro: 'Le buggy à l\'île Maurice offre une expérience tout-terrain intense. Au volant de ces véhicules puissants, traversez des paysages variés : forêts denses, passages de rivières, montées escarpées et descentes techniques. Une activité idéale pour les amateurs de conduite sportive et d\'aventure.',
    keywords: ['buggy île maurice', 'raid buggy maurice', 'tout terrain buggy', 'buggy casela'],
    relatedKeywords: ['ssv maurice', 'véhicule tout terrain', 'buggy adventure'],
    backgroundImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2023/04/activite-ile-maurice.jpg',
  },
  '4x4 / Jeep': {
    title: '4x4 et Jeep à l\'Île Maurice : safaris et circuits tout-terrain',
    description: 'Explorez l\'île Maurice en 4x4 : safaris dans les terres intérieures, cascades cachées et points de vue panoramiques.',
    h1: '4x4 et Jeep à l\'Île Maurice',
    intro: 'Les circuits en 4x4 et Jeep à l\'île Maurice permettent d\'accéder aux endroits les plus reculés de l\'île. Ces safaris vous emmènent à la découverte de cascades secrètes, villages authentiques, plantations de thé et forêts primaires. Un moyen confortable d\'explorer l\'arrière-pays mauricien.',
    keywords: ['4x4 île maurice', 'jeep maurice', 'safari 4x4 maurice', 'excursion jeep'],
    relatedKeywords: ['safari mauritius', 'tour 4x4', 'circuit tout terrain'],
    backgroundImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2023/05/cascade-sous-marine-ile-maurice.jpg',
  },
  'Kitesurf': {
    title: 'Kitesurf à l\'Île Maurice : spots et conditions idéales',
    description: 'Pratiquez le kitesurf à l\'île Maurice : lagons protégés, vent régulier et eau turquoise. Cours et sessions pour tous niveaux.',
    h1: 'Kitesurf à l\'Île Maurice',
    intro: 'Le kitesurf à l\'île Maurice bénéficie de conditions exceptionnelles : vent constant (juin à novembre), lagons protégés et eau chaude. Le Morne est le spot de référence mondiale, avec ses conditions parfaites pour débutants et riders confirmés. L\'île offre également d\'autres spots réputés à Poste Lafayette et Belle Mare.',
    keywords: ['kitesurf île maurice', 'kite maurice', 'le morne kitesurf', 'spot kite mauritius'],
    relatedKeywords: ['kiteboarding mauritius', 'kite school', 'cours kitesurf'],
    backgroundImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2023/04/cours-kitesurf-ile-maurice.jpeg',
  },
  'Kayak': {
    title: 'Kayak à l\'Île Maurice : mangroves et lagons',
    description: 'Pagayez en kayak dans les lagons et mangroves de l\'île Maurice. Découverte nature et spots préservés en kayak de mer.',
    h1: 'Kayak à l\'Île Maurice',
    intro: 'Le kayak à l\'île Maurice permet une exploration douce et respectueuse des écosystèmes côtiers. Pagayez dans les mangroves luxuriantes, longez la côte pour découvrir des anses secrètes ou traversez le lagon turquoise. Une activité accessible qui allie sport et découverte de la nature.',
    keywords: ['kayak île maurice', 'kayak de mer maurice', 'mangrove kayak', 'paddle maurice'],
    relatedKeywords: ['canoë maurice', 'kayak lagon', 'kayak mahébourg'],
    backgroundImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2023/03/paddle-ile-maurice.jpg',
  },
  'Balade à cheval': {
    title: 'Balade à cheval à l\'Île Maurice : plages et montagnes',
    description: 'Chevauchez sur les plages et dans les montagnes mauriciennes. Balades équestres pour cavaliers débutants et confirmés.',
    h1: 'Balade à cheval à l\'Île Maurice',
    intro: 'Les balades à cheval à l\'île Maurice offrent des expériences uniques : galop sur les plages de sable fin au lever du soleil, randonnées équestres dans les montagnes verdoyantes ou promenades dans les domaines sucriers. Une façon romantique et paisible de découvrir les paysages mauriciens.',
    keywords: ['cheval île maurice', 'balade équestre maurice', 'équitation maurice', 'horseback riding mauritius'],
    relatedKeywords: ['randonnée cheval', 'galop plage', 'centre équestre'],
    backgroundImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2023/03/cheval-ile-maurice.jpg',
  },
  'Vols panoramiques': {
    title: 'Vols panoramiques à l\'Île Maurice : hélicoptère et ULM',
    description: 'Survolez l\'île Maurice en hélicoptère ou ULM : cascades, montagnes, lagons turquoise et terre des 7 couleurs vue du ciel.',
    h1: 'Vols panoramiques à l\'Île Maurice',
    intro: 'Les vols panoramiques à l\'île Maurice offrent une perspective spectaculaire sur la beauté de l\'île. En hélicoptère ou en ULM, admirez les cascades de Chamarel, le Morne Brabant, les lagons turquoise, la terre des 7 couleurs et les récifs coralliens. Un moment inoubliable pour découvrir l\'île sous un angle unique.',
    keywords: ['vol hélicoptère île maurice', 'survol maurice', 'hélicoptère mauritius', 'vol panoramique'],
    relatedKeywords: ['scenic flight', 'ulm maurice', 'helicopter tour'],
    backgroundImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2023/03/hydravion-maurice-tarif-avis-reserver.jpg',
  },
  'Tyrolienne': {
    title: 'Tyrolienne à l\'Île Maurice : sensations fortes et nature',
    description: 'Glissez sur les tyroliennes géantes de l\'île Maurice : cascades, forêts et canyons. Parcours aventure et sensations garanties.',
    h1: 'Tyrolienne à l\'Île Maurice',
    intro: 'Les tyroliennes à l\'île Maurice combinent sensations fortes et immersion dans la nature. Glissez au-dessus des cascades, survolez la canopée des forêts tropicales ou traversez les gorges spectaculaires. Ces parcours aventure offrent des points de vue uniques sur les paysages mauriciens tout en procurant des montées d\'adrénaline.',
    keywords: ['tyrolienne île maurice', 'zipline mauritius', 'parcours aventure maurice', 'tyrolienne cascade'],
    relatedKeywords: ['accrobranche tyrolienne', 'via ferrata', 'parcours suspendu'],
    backgroundImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2023/05/cascade-ile-maurice.jpg',
  },
  'Accrobranche': {
    title: 'Accrobranche à l\'Île Maurice : parcours aventure en forêt',
    description: 'Parcourez les arbres en accrobranche : ponts suspendus, tyroliennes et défis dans les forêts mauriciennes. Parcours tous niveaux.',
    h1: 'Accrobranche à l\'Île Maurice',
    intro: 'L\'accrobranche à l\'île Maurice propose des parcours aériens dans les plus belles forêts de l\'île. Ponts de singe, tyroliennes, passages d\'arbre en arbre et autres ateliers suspendus constituent ces parcours aventure adaptés à tous les niveaux. Une activité familiale qui allie sport, nature et amusement.',
    keywords: ['accrobranche île maurice', 'parcours aventure maurice', 'parc aventure mauritius', 'tree adventure'],
    relatedKeywords: ['parcours acrobatique', 'casela adventure', 'forêt aventure'],
    backgroundImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2023/07/Design-sans-titre-2023-07-29T093823.170.jpg',
  },
  'VTT': {
    title: 'VTT à l\'Île Maurice : trails et descentes en montagne',
    description: 'Dévalez les sentiers mauriciens en VTT : trails techniques, descentes en forêt et chemins côtiers. VTT électrique disponible.',
    h1: 'VTT à l\'Île Maurice',
    intro: 'Le VTT à l\'île Maurice révèle des sentiers variés entre mer et montagne. Des descentes techniques dans les forêts du centre aux balades côtières, les parcours mauriciens offrent des défis pour tous niveaux. Les VTT électriques permettent également de découvrir l\'arrière-pays sans effort excessif.',
    keywords: ['vtt île maurice', 'mountain bike mauritius', 'vélo tout terrain maurice', 'bike park'],
    relatedKeywords: ['cyclisme maurice', 'descente vtt', 'vélo électrique'],
    backgroundImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2023/03/activite-maurice.jpg',
  },
  'Luge de montagne': {
    title: 'Luge de montagne à l\'Île Maurice : descentes sensationnelles',
    description: 'Dévalez les pentes en luge sur rail à l\'île Maurice. Activité familiale et sensations fortes garanties à Casela.',
    h1: 'Luge de montagne à l\'Île Maurice',
    intro: 'La luge de montagne à l\'île Maurice offre des descentes spectaculaires sur rail. Cette activité originale et fun permet de dévaler les pentes à toute vitesse tout en contrôlant sa descente. Les luges sur rail de Casela offrent des parcours sinueux avec virages relevés et passages en forêt pour des sensations garanties.',
    keywords: ['luge de montagne maurice', 'toboggan géant maurice', 'luge sur rail casela', 'mountain luge'],
    relatedKeywords: ['toboggan casela', 'luge alpine', 'descente luge'],
    backgroundImage: 'https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2023/05/cascade-ile-maurice.jpg',
  },
};

/**
 * Récupère le contenu SEO d'une catégorie
 * Retourne un contenu par défaut si la catégorie n'a pas de contenu personnalisé
 */
export function getCategorySEO(category: string): CategorySEO {
  if (categorySEOContent[category]) {
    return categorySEOContent[category];
  }

  // Contenu par défaut si la catégorie n'est pas dans le mapping
  return {
    title: `${category} à l'Île Maurice`,
    description: `Découvrez les meilleures activités de ${category.toLowerCase()} à l'île Maurice. Réservez votre expérience en ligne.`,
    h1: `${category} à l'Île Maurice`,
    intro: `Explorez les activités de ${category.toLowerCase()} disponibles à l'île Maurice. Des expériences uniques vous attendent dans un cadre paradisiaque.`,
    keywords: [`${category.toLowerCase()} île maurice`, `${category.toLowerCase()} mauritius`],
  };
}
