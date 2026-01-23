import Link from 'next/link';
import { getCategories, getCategorySlugs, getActivitiesByCategory } from '@/lib/activities';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

/**
 * Composant CategoryGrid
 * Affiche une grille de toutes les catégories d'activités
 * Utilisé pour la navigation et le SEO (maillage interne)
 */
export default function CategoryGrid() {
  const categorySlugs = getCategorySlugs();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {categorySlugs.map(({ slug, category }) => {
        const activities = getActivitiesByCategory(category);
        const popularCount = activities.filter(a => a.popular).length;

        return (
          <Link key={slug} href={`/${slug}`}>
            <Card hover padding="md" className="h-full">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {category}
                </h3>
                {popularCount > 0 && (
                  <Badge variant="popular" className="ml-2">
                    {popularCount}
                  </Badge>
                )}
              </div>

              <p className="text-sm text-gray-600 mb-3">
                {activities.length} activité{activities.length > 1 ? 's' : ''} disponible
                {activities.length > 1 ? 's' : ''}
              </p>

              <div className="flex items-center text-sm text-primary-600 font-medium">
                Découvrir
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
