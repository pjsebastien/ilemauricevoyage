/**
 * Configuration et fonctions pour l'API WordPress
 *
 * URL de l'API WordPress pour récupérer les médias (images)
 * Base URL: https://blog.ilemauricevoyage.fr/wp-json/wp/v2/media
 *
 * Instructions d'utilisation :
 * 1. Pour récupérer toutes les images : GET /wp-json/wp/v2/media
 * 2. Pour récupérer une image spécifique : GET /wp-json/wp/v2/media/{id}
 * 3. Pour rechercher par slug : GET /wp-json/wp/v2/media?slug={slug}
 * 4. Pour rechercher par titre : GET /wp-json/wp/v2/media?search={titre}
 *
 * Structure de réponse WordPress :
 * - id: ID du média
 * - title.rendered: Titre du média
 * - source_url: URL complète de l'image
 * - media_details.sizes: Différentes tailles d'image disponibles
 * - alt_text: Texte alternatif de l'image
 */

const WORDPRESS_API_BASE = 'https://blog.ilemauricevoyage.fr/wp-json/wp/v2';

export interface WordPressImage {
  id: number;
  title: {
    rendered: string;
  };
  source_url: string;
  alt_text: string;
  media_details?: {
    width: number;
    height: number;
    sizes?: {
      [key: string]: {
        source_url: string;
        width: number;
        height: number;
      };
    };
  };
  slug: string;
}

/**
 * Récupère une image depuis WordPress par son slug
 */
export async function getImageBySlug(slug: string): Promise<WordPressImage | null> {
  try {
    const response = await fetch(`${WORDPRESS_API_BASE}/media?slug=${slug}&per_page=1`);
    if (!response.ok) return null;

    const data = await response.json();
    return data.length > 0 ? data[0] : null;
  } catch (error) {
    console.error(`Error fetching image with slug ${slug}:`, error);
    return null;
  }
}

/**
 * Récupère une image depuis WordPress par recherche de titre
 */
export async function getImageBySearch(searchTerm: string): Promise<WordPressImage | null> {
  try {
    const response = await fetch(`${WORDPRESS_API_BASE}/media?search=${encodeURIComponent(searchTerm)}&per_page=1`);
    if (!response.ok) return null;

    const data = await response.json();
    return data.length > 0 ? data[0] : null;
  } catch (error) {
    console.error(`Error searching image with term ${searchTerm}:`, error);
    return null;
  }
}

/**
 * Récupère plusieurs images depuis WordPress par slugs
 */
export async function getImagesByTags(tags: string[]): Promise<WordPressImage[]> {
  try {
    const promises = tags.map(tag => getImageBySearch(tag));
    const results = await Promise.all(promises);
    return results.filter((img): img is WordPressImage => img !== null);
  } catch (error) {
    console.error('Error fetching multiple images:', error);
    return [];
  }
}

/**
 * Récupère des images pour un mois spécifique de Maurice
 * Cherche dans WordPress avec des termes de recherche pertinents
 */
export async function getMonthImages(month: string): Promise<{
  hero?: string;
  weather?: string;
  activities?: string;
}> {
  try {
    // Recherche des images pour le mois
    const heroImage = await getImageBySearch(`maurice ${month} plage`);
    const weatherImage = await getImageBySearch(`maurice ${month} meteo`);
    const activitiesImage = await getImageBySearch(`maurice ${month} activites`);

    return {
      hero: heroImage?.source_url || '',
      weather: weatherImage?.source_url || '',
      activities: activitiesImage?.source_url || ''
    };
  } catch (error) {
    console.error(`Error fetching images for month ${month}:`, error);
    return {
      hero: '',
      weather: '',
      activities: ''
    };
  }
}
