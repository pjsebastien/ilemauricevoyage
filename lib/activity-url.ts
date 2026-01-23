import { Activity } from './types';
import mapping from '../data/activity-pages-mapping.json';

/**
 * Détermine l'URL vers laquelle pointer pour une activité
 * Si l'activité fait partie d'un groupe fusion, retourne l'URL de la page fusion
 * Sinon, retourne l'URL de la page individuelle
 */
export function getActivityUrl(activity: Activity): string {
  // Trouver le mapping pour cette activité
  const activityMapping = mapping.find(m => m.activityIds.includes(activity.id));

  if (!activityMapping) {
    // Fallback : URL individuelle si pas trouvé dans le mapping
    const slug = slugifyText(activity.name.substring(0, 80));
    return `/activite/${slug}-${activity.id}`;
  }

  // Retourner le slug de la page (fusion ou individuelle)
  return `/activite/${activityMapping.slug}`;
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
