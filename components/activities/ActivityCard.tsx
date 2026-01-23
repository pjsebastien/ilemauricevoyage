import Image from 'next/image';
import Link from 'next/link';
import { Activity } from '@/lib/types';
import { formatDuration, formatPrice } from '@/lib/activities';
import { decodeHtmlEntities, truncate } from '@/lib/utils';
import { getActivityUrl } from '@/lib/activity-url';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

interface ActivityCardProps {
  activity: Activity;
  variant?: 'compact' | 'standard' | 'featured';
}

/**
 * Composant ActivityCard
 * Affiche une activité sous forme de carte cliquable
 * Variantes : compact (petite), standard (normale), featured (mise en avant)
 * IMPORTANT: Pointe vers la page fusion si l'activité est groupée, sinon vers la page individuelle
 */
export default function ActivityCard({
  activity,
  variant = 'standard',
}: ActivityCardProps) {
  const activityUrl = getActivityUrl(activity);
  const imageHeight = variant === 'compact' ? 150 : variant === 'featured' ? 300 : 200;

  return (
    <Link href={activityUrl}>
      <Card hover padding="none" className="h-full overflow-hidden group">
        {/* Image */}
        <div className="relative overflow-hidden" style={{ height: imageHeight }}>
          <Image
            src={activity.image}
            alt={decodeHtmlEntities(activity.name)}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Badges superposés */}
          <div className="absolute top-3 left-3 flex gap-2">
            {activity.popular && <Badge variant="popular">Populaire</Badge>}
          </div>
        </div>

        {/* Contenu */}
        <div className="p-4">
          {/* Catégorie */}
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
            {activity.category}
          </p>

          {/* Titre */}
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
            {decodeHtmlEntities(
              variant === 'compact'
                ? truncate(activity.name, 60)
                : activity.name
            )}
          </h3>

          {/* Description (seulement pour standard et featured) */}
          {variant !== 'compact' && (
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
              {decodeHtmlEntities(truncate(activity.description, 120))}
            </p>
          )}

          {/* Informations pratiques */}
          <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-3">
            {/* Durée */}
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{formatDuration(activity.duration)}</span>
            </div>

            {/* Localisation(s) */}
            {activity.locations && activity.locations.length > 0 && (
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="truncate">
                  {activity.locations.slice(0, 2).join(', ')}
                  {activity.locations.length > 2 && ` +${activity.locations.length - 2}`}
                </span>
              </div>
            )}
          </div>

          {/* Prix et note */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            {activity.rating && activity.reviewCount > 0 ? (
              <div className="flex items-center gap-1">
                <span className="text-yellow-500">★</span>
                <span className="font-medium text-gray-900">{activity.rating}</span>
                <span className="text-xs text-gray-500">({activity.reviewCount})</span>
              </div>
            ) : (
              <div className="text-xs text-gray-500 font-medium">Nouveau</div>
            )}
            <div className="text-right">
              <span className="text-lg font-bold text-primary-600">
                {formatPrice(activity.price)}
              </span>
              <span className="text-xs text-gray-500 ml-1">/pers</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
