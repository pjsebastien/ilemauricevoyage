import Image from 'next/image';
import { cn } from '@/lib/utils';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
  backgroundImage?: string;
  stats?: Array<{
    value: string;
    label: string;
  }>;
  size?: 'default' | 'large';
  className?: string;
}

/**
 * Composant PageHero professionnel
 * Style sobre et épuré inspiré de GetYourGuide
 * Focus sur la clarté, la lisibilité et la simplicité
 * Support d'image de fond subtile (optionnel)
 */
export default function PageHero({
  title,
  subtitle,
  badge,
  backgroundImage,
  stats,
  size = 'default',
  className,
}: PageHeroProps) {
  const sizes = {
    default: 'py-12 md:py-16',
    large: 'py-16 md:py-20',
  };

  return (
    <div className={cn('relative bg-white border-b border-gray-100 overflow-hidden', sizes[size], className)}>
      {/* Image de fond subtile */}
      {backgroundImage && (
        <>
          <div className="absolute inset-0">
            <Image
              src={backgroundImage}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
          {/* Overlay chaleureux inspiré de l'île Maurice */}
          <div className="absolute inset-0 bg-gradient-to-br from-turquoise-50/85 via-primary-50/80 to-coral-50/85" />
        </>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl bg-white/5 backdrop-blur-[2px] rounded-2xl p-6 md:p-8 border border-white/10">
          {/* Badge en bulle élégante */}
          {badge && (
            <div className="mb-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-sm border border-primary-200 text-primary-700 uppercase tracking-wide shadow-sm">
                {badge}
              </span>
            </div>
          )}

          {/* Titre principal - Style GetYourGuide */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight tracking-tight">
            {title}
          </h1>

          {/* Sous-titre sobre */}
          {subtitle && (
            <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed max-w-3xl">
              {subtitle}
            </p>
          )}

          {/* Statistiques en bulles élégantes */}
          {stats && stats.length > 0 && (
            <div className="flex flex-wrap items-center gap-3 md:gap-4 pt-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-xl md:text-2xl font-bold text-primary-600">
                    {stat.value}
                  </span>
                  <span className="text-xs md:text-sm font-medium text-gray-600 uppercase tracking-wide">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
