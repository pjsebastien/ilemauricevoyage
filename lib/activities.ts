import { Activity, ActivityFilters, SortOption } from './types';
import activitiesData from '@/data/activities-clean.json';

/**
 * Récupère toutes les activités
 */
export function getAllActivities(): Activity[] {
  return activitiesData as Activity[];
}

/**
 * Récupère les activités populaires
 */
export function getPopularActivities(limit?: number): Activity[] {
  const activities = getAllActivities().filter(activity => activity.popular);
  return limit ? activities.slice(0, limit) : activities;
}

/**
 * Récupère une activité par son ID
 */
export function getActivityById(id: string): Activity | undefined {
  return getAllActivities().find(activity => activity.id === id);
}

/**
 * Récupère toutes les catégories uniques
 */
export function getCategories(): string[] {
  const categories = getAllActivities().map(activity => activity.category);
  return Array.from(new Set(categories)).sort();
}

/**
 * Récupère toutes les localisations uniques
 */
export function getLocations(): string[] {
  const locations = getAllActivities()
    .flatMap(activity => activity.locations)
    .filter(Boolean);
  return Array.from(new Set(locations)).sort();
}

/**
 * Filtre les activités selon les critères
 */
export function filterActivities(
  filters: ActivityFilters
): Activity[] {
  let activities = getAllActivities();

  if (filters.category) {
    activities = activities.filter(
      activity => activity.category === filters.category
    );
  }

  if (filters.location) {
    activities = activities.filter(
      activity => activity.locations.includes(filters.location!)
    );
  }

  if (filters.priceMin !== undefined) {
    activities = activities.filter(
      activity => activity.price >= filters.priceMin!
    );
  }

  if (filters.priceMax !== undefined) {
    activities = activities.filter(
      activity => activity.price <= filters.priceMax!
    );
  }

  if (filters.popular) {
    activities = activities.filter(activity => activity.popular);
  }

  return activities;
}

/**
 * Trie les activités
 */
export function sortActivities(
  activities: Activity[],
  sortBy: SortOption
): Activity[] {
  const sorted = [...activities];

  switch (sortBy) {
    case 'popular':
      return sorted.sort((a, b) => {
        if (a.popular && !b.popular) return -1;
        if (!a.popular && b.popular) return 1;
        return b.reviewCount - a.reviewCount;
      });

    case 'price-asc':
      return sorted.sort((a, b) => a.price - b.price);

    case 'price-desc':
      return sorted.sort((a, b) => b.price - a.price);

    case 'rating':
      return sorted.sort((a, b) => {
        const ratingA = a.rating ?? 0;
        const ratingB = b.rating ?? 0;
        if (ratingA !== ratingB) {
          return ratingB - ratingA;
        }
        return b.reviewCount - a.reviewCount;
      });

    case 'duration':
      return sorted.sort((a, b) => {
        const aDuration = a.duration.min || 0;
        const bDuration = b.duration.min || 0;
        return aDuration - bDuration;
      });

    default:
      return sorted;
  }
}

/**
 * Recherche d'activités par mots-clés
 */
export function searchActivities(query: string): Activity[] {
  const lowerQuery = query.toLowerCase();
  return getAllActivities().filter(
    activity =>
      activity.name.toLowerCase().includes(lowerQuery) ||
      activity.description.toLowerCase().includes(lowerQuery) ||
      activity.category.toLowerCase().includes(lowerQuery) ||
      activity.locations.some(loc => loc.toLowerCase().includes(lowerQuery))
  );
}

/**
 * Récupère les activités d'une catégorie
 */
export function getActivitiesByCategory(category: string): Activity[] {
  return getAllActivities().filter(
    activity => activity.category === category
  );
}

/**
 * Récupère les activités par zone géographique
 */
export function getActivitiesByLocation(location: string): Activity[] {
  return getAllActivities().filter(
    activity => activity.locations.includes(location)
  );
}

/**
 * Formate la durée pour l'affichage
 */
export function formatDuration(duration: Activity['duration']): string {
  if (duration.minRaw) {
    return duration.minRaw;
  }
  if (duration.min && duration.max && duration.min !== duration.max) {
    return `${duration.min}-${duration.max}h`;
  }
  if (duration.min) {
    return `${duration.min}h`;
  }
  return 'Durée non spécifiée';
}

/**
 * Formate le prix pour l'affichage
 */
export function formatPrice(price: number): string {
  return `${price.toFixed(2)} €`;
}

/**
 * Convertit une catégorie en slug SEO
 * Ex: "Plongée sous-marine" → "plongee-sous-marine-ile-maurice"
 */
export function categoryToSlug(category: string): string {
  return category
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\//g, '-')  // Remplacer les slashes par des tirets
    .replace(/[^a-z0-9\s-]/g, '')  // Retirer / de la liste des caractères autorisés
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-') + '-ile-maurice';
}

/**
 * Récupère la catégorie originale depuis un slug
 * Ex: "plongee-sous-marine-ile-maurice" → "Plongée sous-marine"
 */
export function slugToCategory(slug: string): string | undefined {
  // Enlever le suffixe "-ile-maurice"
  const cleanSlug = slug.replace(/-ile-maurice$/, '');

  // Chercher la catégorie correspondante
  const categories = getCategories();
  return categories.find(cat => categoryToSlug(cat).startsWith(cleanSlug));
}

/**
 * Récupère toutes les paires slug/catégorie pour la génération statique
 */
export function getCategorySlugs(): Array<{ slug: string; category: string }> {
  return getCategories().map(category => ({
    slug: categoryToSlug(category),
    category,
  }));
}
