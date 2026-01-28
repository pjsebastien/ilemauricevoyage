import Link from 'next/link';
import Image from 'next/image';
import { Activity } from '@/lib/types';
import { getAllActivities, categoryToSlug } from '@/lib/activities';
import { detectActivityGroups, getActivityPageSlug } from '@/lib/activity-pages';
import { decodeHtmlEntities, truncate } from '@/lib/utils';
import { getCategoryTheme } from '@/lib/activity-colors';

interface ActivityInternalLinksProps {
  currentCategory: string;
  currentLocation: string;
  currentActivityIds: string[]; // IDs des activités de la page courante à exclure
}

// Mapping des locations vers les slugs de pages que-faire
const locationToQueFaireSlug: Record<string, string> = {
  'Flic en Flac': 'que-faire-flic-en-flac',
  'Le Morne': 'que-faire-le-morne',
  'Île aux Cerfs': 'que-faire-ile-aux-cerfs',
  'Belle Mare': 'que-faire-belle-mare',
  'Trou aux Biches': 'que-faire-trou-aux-biches',
  'Grand Baie': 'que-faire-grand-baie',
  'Tamarin': 'que-faire-tamarin',
  'Cap Malheureux': 'que-faire-cap-malheureux',
  'Trou d\'Eau Douce': 'que-faire-trou-deau-douce',
  'Port Louis': 'que-faire-port-louis',
  'Souillac': 'que-faire-souillac',
  'Grand Gaube': 'que-faire-grand-gaube',
  'Chamouny': 'que-faire-chamouny',
  'Chutes de Tamarin': 'que-faire-chutes-tamarin',
  'Gorges Rivière Noire': 'que-faire-gorges-riviere-noire',
  'Blue Bay': 'blue-bay-ile-maurice',
  'Baie de Tamarin': 'que-faire-tamarin',
};

// Créer un mapping des activity IDs vers leurs slugs de page
function buildActivitySlugMap(): Map<string, string> {
  const allActivities = getAllActivities();
  const groups = detectActivityGroups(allActivities);
  const slugMap = new Map<string, string>();

  groups.forEach(group => {
    const pageSlug = getActivityPageSlug(group);
    // Toutes les activités du groupe pointent vers la même page
    group.activities.forEach(activity => {
      slugMap.set(activity.id, pageSlug);
    });
  });

  return slugMap;
}

/**
 * Composant de maillage interne pour les pages d'activités
 * Affiche des liens vers activités similaires + pages mères
 */
export default function ActivityInternalLinks({
  currentCategory,
  currentLocation,
  currentActivityIds,
}: ActivityInternalLinksProps) {
  const allActivities = getAllActivities();
  const theme = getCategoryTheme(currentCategory);
  const activitySlugMap = buildActivitySlugMap();

  // Récupérer les groupes d'activités pour identifier les pages uniques
  const groups = detectActivityGroups(allActivities);

  // Filtrer les groupes de la même catégorie (exclure le groupe courant)
  const sameCategoryGroups = groups.filter(group =>
    group.category === currentCategory &&
    !group.activities.some(a => currentActivityIds.includes(a.id))
  );

  // Filtrer les groupes du même lieu (exclure le groupe courant et ceux déjà dans sameCategoryGroups)
  const sameLocationGroups = groups.filter(group =>
    group.mainLocation === currentLocation &&
    !group.activities.some(a => currentActivityIds.includes(a.id)) &&
    !sameCategoryGroups.find(g => g.key === group.key)
  );

  // Prendre jusqu'à 6 groupes (priorité à la même catégorie)
  const displayedGroups = [
    ...sameCategoryGroups.slice(0, 6),
    ...sameLocationGroups.slice(0, Math.max(0, 6 - sameCategoryGroups.length))
  ].slice(0, 6);

  // Pages mères
  const categorySlug = categoryToSlug(currentCategory);
  const locationSlug = locationToQueFaireSlug[currentLocation];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre de section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Découvrir plus d'activités
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explorez d'autres expériences similaires ou découvrez toutes nos offres à l'Île Maurice
          </p>
        </div>

        {/* Liens vers les pages mères */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {/* Lien vers la page de la catégorie */}
          <Link
            href={`/${categorySlug}`}
            className="group relative overflow-hidden rounded-2xl p-6 text-white transition-transform hover:scale-[1.02]"
            style={{ background: theme.gradientCSS }}
          >
            <div className="relative z-10">
              <div className="text-sm font-medium text-white/80 mb-2">
                Toutes les activités
              </div>
              <div className="text-xl font-bold mb-2">
                {currentCategory}
              </div>
              <p className="text-sm text-white/90">
                Voir toutes les offres de {currentCategory.toLowerCase()} à l'Île Maurice
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold">
                Explorer
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Lien vers la page de la destination (si elle existe) */}
          {locationSlug && (
            <Link
              href={`/${locationSlug}`}
              className="group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-emerald-600 to-teal-500 text-white transition-transform hover:scale-[1.02]"
            >
              <div className="relative z-10">
                <div className="text-sm font-medium text-white/80 mb-2">
                  Que faire à
                </div>
                <div className="text-xl font-bold mb-2">
                  {currentLocation}
                </div>
                <p className="text-sm text-white/90">
                  Toutes les activités et conseils pour {currentLocation}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm font-semibold">
                  Découvrir
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          )}

          {/* Lien vers toutes les activités */}
          <Link
            href="/activites-ile-maurice"
            className="group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-gray-800 to-gray-900 text-white transition-transform hover:scale-[1.02]"
          >
            <div className="relative z-10">
              <div className="text-sm font-medium text-white/80 mb-2">
                Catalogue complet
              </div>
              <div className="text-xl font-bold mb-2">
                Toutes les activités
              </div>
              <p className="text-sm text-white/90">
                +60 expériences à découvrir sur l'ensemble de l'île
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold">
                Voir tout
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        </div>

        {/* Activités similaires (par groupe/page) */}
        {displayedGroups.length > 0 && (
          <>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {sameCategoryGroups.length > 0
                ? `Autres activités ${currentCategory.toLowerCase()}`
                : `Autres activités à ${currentLocation}`
              }
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedGroups.map((group) => (
                <ActivityGroupCard
                  key={group.key}
                  group={group}
                  slug={activitySlugMap.get(group.activities[0].id) || '#'}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

/**
 * Carte pour un groupe d'activités (page fusion ou individuelle)
 */
function ActivityGroupCard({ group, slug }: {
  group: {
    category: string;
    mainLocation: string;
    activities: Activity[];
    needsFusion: boolean;
  };
  slug: string;
}) {
  const mainActivity = group.activities[0];
  const priceMin = Math.min(...group.activities.map(a => a.price));
  const totalReviews = group.activities.reduce((sum, a) => sum + a.reviewCount, 0);
  const avgRating = group.activities.filter(a => a.rating).length > 0
    ? (group.activities.filter(a => a.rating).reduce((sum, a) => sum + (a.rating || 0), 0) / group.activities.filter(a => a.rating).length).toFixed(1)
    : null;

  return (
    <Link
      href={slug}
      className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative h-48">
        <Image
          src={mainActivity.image}
          alt={group.needsFusion
            ? `${group.category} à ${group.mainLocation}`
            : decodeHtmlEntities(mainActivity.name)
          }
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Badge nombre d'options si fusion */}
        {group.needsFusion && group.activities.length > 1 && (
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-full">
            <span className="text-xs font-semibold text-gray-900">{group.activities.length} options</span>
          </div>
        )}

        {/* Prix */}
        <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
          <span className="font-bold text-gray-900">
            {group.needsFusion ? `dès ${priceMin.toFixed(0)}€` : `${priceMin.toFixed(0)}€`}
          </span>
          <span className="text-sm text-gray-600">/pers</span>
        </div>

        {/* Note */}
        {avgRating && totalReviews > 0 && (
          <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
            <span className="text-yellow-500">★</span>
            <span className="text-sm font-semibold text-gray-900">{avgRating}</span>
            {totalReviews > 0 && (
              <span className="text-xs text-gray-500">({totalReviews})</span>
            )}
          </div>
        )}
      </div>

      {/* Contenu */}
      <div className="p-4">
        <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
          {group.category}
        </div>
        <h4 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {group.needsFusion
            ? `${group.category} à ${group.mainLocation}`
            : decodeHtmlEntities(truncate(mainActivity.name, 70))
          }
        </h4>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          </svg>
          {group.mainLocation}
        </div>
      </div>
    </Link>
  );
}
