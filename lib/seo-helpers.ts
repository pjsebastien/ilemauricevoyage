import { Activity } from './types';

/**
 * Fonctions utilitaires pour extraire et réécrire les informations des activités
 */

/**
 * Extrait les points clés d'un texte "about" et les réécrit
 * Ne JAMAIS copier le texte tel quel
 */
export function extractAndRewriteKeyPoints(about: string, activityName: string): string[] {
  if (!about || about.length < 50) return [];

  const keyPoints: string[] = [];

  // Extraire mentions de cascades/hauteurs
  const heightMatches = about.match(/(\d+)\s*(?:mètres|m)/gi);
  if (heightMatches && heightMatches.length > 0) {
    const heights = heightMatches.map(h => parseInt(h)).filter(h => h > 5);
    if (heights.length > 0) {
      keyPoints.push(`Des passages techniques incluant des hauteurs allant jusqu'à ${Math.max(...heights)}m`);
    }
  }

  // Extraire mentions de durée/distance
  if (about.includes('demi-journée') || about.includes('demi journée')) {
    keyPoints.push('Une demi-journée d\'aventure dans un cadre naturel préservé');
  }

  // Extraire mentions de baignade
  if (about.toLowerCase().includes('baignade') || about.toLowerCase().includes('nage') || about.toLowerCase().includes('bassin')) {
    keyPoints.push('Moments de baignade dans des bassins naturels');
  }

  // Extraire mentions d'observation
  if (about.toLowerCase().includes('observation') || about.toLowerCase().includes('observer')) {
    if (about.toLowerCase().includes('dauphin')) {
      keyPoints.push('Observation des dauphins dans leur environnement naturel');
    }
    if (about.toLowerCase().includes('baleine')) {
      keyPoints.push('Observation des baleines lors de leur migration');
    }
  }

  // Extraire mentions de rappel/tyrolienne
  if (about.toLowerCase().includes('rappel')) {
    keyPoints.push('Techniques de descente en rappel encadrées par des professionnels');
  }
  if (about.toLowerCase().includes('tyrolienne')) {
    keyPoints.push('Parcours tyrolienne avec sensations garanties');
  }

  // Extraire mentions de nourriture/repas
  if (about.toLowerCase().includes('repas') || about.toLowerCase().includes('déjeuner') || about.toLowerCase().includes('barbecue') || about.toLowerCase().includes('bbq')) {
    keyPoints.push('Moment convivial avec repas inclus');
  }

  return keyPoints;
}

/**
 * Génère un paragraphe personnalisé basé sur les données de l'activité
 */
export function generatePersonalizedDescription(activity: Activity): string {
  const { name, category, enriched, duration } = activity;

  let desc = '';

  // Construire une phrase d'accroche basée sur le nom et la catégorie
  if (name.toLowerCase().includes('initiation')) {
    desc += `Cette initiation est parfaite pour découvrir ${category.toLowerCase()} dans des conditions optimales. `;
  } else if (name.toLowerCase().includes('découverte')) {
    desc += `Partez à la découverte de ${category.toLowerCase()} et explorez un univers fascinant. `;
  } else {
    desc += `Cette expérience ${category.toLowerCase()} vous promet une aventure mémorable. `;
  }

  // Utiliser les informations extraites de "about"
  if (enriched?.about) {
    const keyPoints = extractAndRewriteKeyPoints(enriched.about, name);
    if (keyPoints.length > 0) {
      desc += `Au programme: ${keyPoints.join(', ').toLowerCase()}. `;
    }
  }

  // Ajouter info durée
  if (duration?.min) {
    const hours = Math.floor(duration.min / 60);
    const mins = duration.min % 60;
    if (hours > 4) {
      desc += `Prévoyez une journée complète pour profiter pleinement de cette expérience. `;
    } else if (hours > 2) {
      desc += `Cette sortie de plusieurs heures vous permet de vous immerger totalement. `;
    }
  }

  // Ajouter info niveau si débutant
  if (enriched?.requirements?.minAge && enriched.requirements.minAge <= 8) {
    desc += `Accessible en famille dès ${enriched.requirements.minAge} ans. `;
  }

  return desc;
}

/**
 * Génère une section sur les tarifs
 */
export function generatePricingSection(activity: Activity): string {
  const { price, priceBy, details } = activity;

  let content = `## Tarifs et informations pratiques\n\n`;

  content += `Le tarif de cette sortie est de **${price.toFixed(0)}€ par personne**. `;

  content += `Ce prix comprend l'encadrement par ${details.organizedBy}, `;
  content += `le matériel technique nécessaire à l'activité, et l'assurance responsabilité civile. `;

  content += `\n\n### Ce qui est inclus\n\n`;
  content += `- Encadrement par un professionnel diplômé et expérimenté\n`;
  content += `- Tout le matériel technique de sécurité\n`;
  content += `- Assurance responsabilité civile\n`;
  content += `- Briefing de sécurité avant le départ\n\n`;

  content += `### Ce qui n'est pas inclus\n\n`;
  content += `- Le transport depuis votre hébergement (disponible en supplément sur demande)\n`;
  content += `- Les boissons et repas (sauf mention contraire dans la description)\n`;
  content += `- Les photos et vidéos de votre sortie (souvent proposées en option)\n\n`;

  content += `### Politique d'annulation\n\n`;
  content += `Annulation gratuite jusqu'à 48h avant la sortie. `;
  content += `En cas d'annulation pour cause de météo défavorable, un report ou un remboursement complet vous sera proposé.\n\n`;

  return content;
}

/**
 * Génère une section sur les avis
 */
export function generateReviewsSection(activity: Activity): string {
  const { rating, reviewCount, details } = activity;

  if (!rating || reviewCount === 0) {
    return `## Avis des participants\n\n` +
           `Cette activité vient d'être ajoutée à notre catalogue. Soyez parmi les premiers à la tester et partagez votre expérience !\n\n` +
           `${details.organizedBy} est un prestataire reconnu à Maurice pour la qualité de ses prestations et le professionnalisme de ses guides.\n\n`;
  }

  let content = `## Avis des participants\n\n`;

  content += `Cette sortie est notée **${rating}/5 étoiles** par ${reviewCount} participants, `;
  content += `témoignant de la qualité de l'expérience proposée par ${details.organizedBy}.\n\n`;

  // Analyse qualitative basée sur la note
  if (rating >= 4.8) {
    content += `### Une expérience exceptionnelle\n\n`;
    content += `Avec une note moyenne de ${rating}/5, cette activité fait partie des mieux notées de sa catégorie à l'île Maurice. `;
    content += `Les participants soulignent régulièrement le professionnalisme de l'encadrement, `;
    content += `la beauté du site, et l'organisation impeccable de la sortie.\n\n`;
  } else if (rating >= 4.5) {
    content += `### Une activité très appréciée\n\n`;
    content += `Les ${reviewCount} avis laissés par les participants sont largement positifs. `;
    content += `La qualité de l'encadrement et l'authenticité de l'expérience sont particulièrement appréciées.\n\n`;
  } else if (rating >= 4.0) {
    content += `### Des participants satisfaits\n\n`;
    content += `Cette sortie recueille des avis positifs de la part des participants. `;
    content += `L'équipe de ${details.organizedBy} s'attache à proposer une expérience de qualité à tous ses clients.\n\n`;
  }

  content += `### Ce que les participants apprécient\n\n`;
  content += `- Le professionnalisme et la pédagogie des guides\n`;
  content += `- Le matériel de qualité mis à disposition\n`;
  content += `- Le respect des consignes de sécurité\n`;
  content += `- La beauté des sites visités\n`;
  content += `- L'ambiance conviviale des sorties en petit groupe\n\n`;

  return content;
}
