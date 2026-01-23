import Image from 'next/image';
import Link from 'next/link';
import { Activity } from '@/lib/types';
import { formatDuration, formatPrice } from '@/lib/activities';
import { decodeHtmlEntities, slugify } from '@/lib/utils';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

interface ActivityHighlightProps {
  activity: Activity;
  label?: string;
}

/**
 * Composant ActivityHighlight
 * Mise en avant d'une activité "coup de cœur"
 * Format horizontal avec grande image
 */
export default function ActivityHighlight({
  activity,
  label = 'Coup de cœur',
}: ActivityHighlightProps) {
  const slug = slugify(activity.name);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="grid md:grid-cols-2 gap-0">
        {/* Image */}
        <div className="relative h-64 md:h-full min-h-[300px]">
          <Image
            src={activity.image}
            alt={decodeHtmlEntities(activity.name)}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <div className="absolute top-4 left-4">
            <Badge variant="popular" className="text-sm px-3 py-1">
              {label}
            </Badge>
          </div>
        </div>

        {/* Contenu */}
        <div className="p-6 md:p-8 flex flex-col justify-center">
          <p className="text-sm text-primary-600 font-medium uppercase tracking-wide mb-2">
            {activity.category}
          </p>

          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {decodeHtmlEntities(activity.name)}
          </h3>

          <p className="text-gray-600 mb-6">
            {decodeHtmlEntities(activity.description)}
          </p>

          {/* Informations pratiques */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{formatDuration(activity.duration)}</span>
            </div>

            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{activity.locations[0]}</span>
            </div>

            <div className="flex items-center gap-1">
              <span className="text-yellow-500 text-lg">★</span>
              <span className="font-medium text-gray-900">{activity.rating}</span>
              <span className="text-gray-500">({activity.reviewCount} avis)</span>
            </div>
          </div>

          {/* Prix et CTA */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-3xl font-bold text-primary-600">
                {formatPrice(activity.price)}
              </span>
              <span className="text-gray-500 ml-2">par personne</span>
            </div>
            <Link href={`/activite/${slug}-${activity.id}`}>
              <Button size="lg">
                Découvrir
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
