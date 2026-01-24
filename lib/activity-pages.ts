import { Activity } from './types';

/**
 * Groupe d'activités similaires qui doivent être fusionnées sur une seule page
 */
export interface ActivityGroup {
  key: string; // Format: "category - mainLocation"
  category: string;
  mainLocation: string;
  activities: Activity[];
  seoIntent: string;
  primaryKeyword: string;
  needsFusion: boolean;
}

/**
 * Structure SEO pour une page d'activité
 */
export interface ActivityPageSEO {
  title: string; // Title tag SEO (max 60 caractères)
  metaDescription: string; // Meta description (max 155 caractères)
  h1: string; // H1 principal de la page
  primaryKeyword: string; // Mot-clé principal
  relatedKeywords: string[]; // Mots-clés secondaires
}

/**
 * Section "L'essentiel à savoir" d'une activité
 */
export interface ActivityEssentials {
  duration: string;
  price: string;
  priceRange?: string; // Pour les fusions avec plusieurs prix
  difficulty: string;
  minAge?: number;
  languages: string[];
  groupSize?: string;
  included?: string[];
  notIncluded?: string[];
}

/**
 * Props pour le composant de page d'activité individuelle
 */
export interface ActivityPageProps {
  activity: Activity;
  relatedActivities?: Activity[];
  seo: ActivityPageSEO;
}

/**
 * Props pour le composant de page fusion (plusieurs activités)
 */
export interface FusionPageProps {
  group: ActivityGroup;
  seo: ActivityPageSEO;
}

/**
 * Détecte les groupes d'activités qui doivent être fusionnés
 * Règle: même catégorie + même lieu principal = fusion obligatoire
 */
export function detectActivityGroups(activities: Activity[]): ActivityGroup[] {
  const groups: { [key: string]: Activity[] } = {};

  // Grouper par catégorie + lieu principal
  activities.forEach(activity => {
    const mainLocation = activity.locations[0] || 'Sans lieu';
    const key = `${activity.category} - ${mainLocation}`;

    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(activity);
  });

  // Convertir en ActivityGroup
  return Object.keys(groups).map(key => {
    const parts = key.split(' - ');
    const category = parts[0];
    const mainLocation = parts[1];
    const groupActivities = groups[key];
    const needsFusion = groupActivities.length > 1;

    return {
      key,
      category,
      mainLocation,
      activities: groupActivities,
      seoIntent: needsFusion
        ? `Comparer et choisir la meilleure sortie ${category.toLowerCase()} à ${mainLocation}`
        : `Réserver une sortie ${category.toLowerCase()} à ${mainLocation}`,
      primaryKeyword: `${category.toLowerCase()} ${mainLocation.toLowerCase()}`,
      needsFusion,
    };
  });
}

/**
 * Génère l'URL slug pour une page d'activité
 * Format pour fusion: /activite/categorie-lieu-ile-maurice
 * Format pour individuelle: /activite/nom-activite-id
 */
export function getActivityPageSlug(group: ActivityGroup): string {
  if (group.needsFusion) {
    // Page fusion: /activite/randonnee-chutes-de-tamarin-ile-maurice
    const categorySlug = slugifyText(group.category);
    const locationSlug = slugifyText(group.mainLocation);
    return `/activite/${categorySlug}-${locationSlug}-ile-maurice`;
  } else {
    // Page individuelle: /activite/nom-activite-8123
    const activity = group.activities[0];
    const nameSlug = slugifyText(activity.name.substring(0, 80)); // Limiter la longueur
    return `/activite/${nameSlug}-${activity.id}`;
  }
}

/**
 * Génère le SEO pour une page d'activité ou fusion
 */
export function generateActivityPageSEO(group: ActivityGroup): ActivityPageSEO {
  const { category, mainLocation, activities, needsFusion } = group;

  if (needsFusion) {
    // SEO pour page fusion
    const priceRange = {
      min: Math.min(...activities.map(a => a.price)),
      max: Math.max(...activities.map(a => a.price)),
    };

    return {
      title: `${category} à ${mainLocation} : ${activities.length} sorties dès ${priceRange.min.toFixed(0)}€`,
      metaDescription: `Comparez ${activities.length} sorties ${category.toLowerCase()} à ${mainLocation}, Île Maurice. Prix de ${priceRange.min.toFixed(0)}€ à ${priceRange.max.toFixed(0)}€. Réservez la meilleure expérience pour vous.`,
      h1: `${category} à ${mainLocation}`,
      primaryKeyword: `${category.toLowerCase()} ${mainLocation.toLowerCase()}`,
      relatedKeywords: [
        `${category.toLowerCase()} ${mainLocation.toLowerCase()} île maurice`,
        `${category.toLowerCase()} ${mainLocation.toLowerCase()} tarif`,
        `sortie ${category.toLowerCase()} ${mainLocation.toLowerCase()}`,
        `excursion ${category.toLowerCase()} ${mainLocation.toLowerCase()}`,
      ],
    };
  } else {
    // SEO pour page individuelle
    const activity = activities[0];
    const shortName = activity.name.length > 60
      ? activity.name.substring(0, 57) + '...'
      : activity.name;

    return {
      title: `${shortName} - dès ${activity.price.toFixed(0)}€`,
      metaDescription: `${activity.description.substring(0, 140)}... Prix: ${activity.price.toFixed(0)}€. Note: ${activity.rating}/5 (${activity.reviewCount} avis). Réservez maintenant.`,
      h1: activity.name,
      primaryKeyword: `${category.toLowerCase()} ${mainLocation.toLowerCase()}`,
      relatedKeywords: [
        `${activity.name.toLowerCase()}`,
        `${category.toLowerCase()} île maurice`,
        `${category.toLowerCase()} ${mainLocation.toLowerCase()}`,
      ],
    };
  }
}

/**
 * Extrait les informations essentielles d'une activité
 */
export function extractActivityEssentials(activity: Activity): ActivityEssentials {
  const { duration, price, details, enriched } = activity;

  // Formatter la durée
  let durationStr = 'Non spécifié';
  if (duration.min && duration.max) {
    if (duration.min === duration.max) {
      durationStr = `${duration.min} minutes`;
      if (duration.min >= 60) {
        durationStr = `${Math.floor(duration.min / 60)}h${duration.min % 60 > 0 ? duration.min % 60 : ''}`;
      }
    } else {
      durationStr = `${duration.min}-${duration.max} min`;
    }
  } else if (duration.minRaw) {
    durationStr = duration.minRaw;
  }

  // Difficulté basée sur physicalConditions
  let difficulty = 'Tous niveaux';
  if (details.physicalConditions?.min) {
    difficulty = details.physicalConditions.min.name;
  }

  // Langues parlées
  const languages = details.spokenLanguages || [];

  return {
    duration: durationStr,
    price: `${price.toFixed(0)}€`,
    difficulty,
    minAge: enriched?.requirements?.minAge ?? undefined,
    languages,
  };
}

/**
 * Helper pour slugifier du texte
 */
function slugifyText(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

/**
 * Détermine si une activité nécessite la mention "Savoir nager requis"
 */
export function requiresSwimming(activity: Activity): boolean {
  return activity.enriched?.requirements?.swimRequired === true;
}

/**
 * Génère une introduction originale pour une page d'activité
 * Basée uniquement sur les données du JSON (pas d'invention)
 */
export function generateActivityIntro(group: ActivityGroup): string {
  const { category, mainLocation, activities, needsFusion } = group;

  if (needsFusion) {
    const count = activities.length;
    const priceRange = {
      min: Math.min(...activities.map(a => a.price)),
      max: Math.max(...activities.map(a => a.price)),
    };
    const avgRating = (activities.reduce((sum, a) => sum + (a.rating ?? 0), 0) / count).toFixed(1);

    return `Vous cherchez une sortie ${category.toLowerCase()} à ${mainLocation} ? Cette page regroupe ${count} expériences différentes pour vous aider à choisir celle qui vous correspond le mieux. Les tarifs varient de ${priceRange.min.toFixed(0)}€ à ${priceRange.max.toFixed(0)}€ par personne selon la formule choisie. Ces activités affichent une note moyenne de ${avgRating}/5 d'après les avis de participants.`;
  } else {
    const activity = activities[0];
    return `Cette sortie ${category.toLowerCase()} à ${mainLocation} est notée ${activity.rating ?? 5}/5 par ${activity.reviewCount} participant${activity.reviewCount > 1 ? 's' : ''}. Au tarif de ${activity.price.toFixed(0)}€ par personne, cette expérience vous permet de découvrir ${mainLocation} sous un angle unique.`;
  }
}
