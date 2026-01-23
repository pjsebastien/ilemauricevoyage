import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  background?: 'white' | 'gray' | 'primary';
  spacing?: 'sm' | 'md' | 'lg';
  className?: string;
  id?: string;
}

/**
 * Composant Section générique
 * Container pour blocs de contenu avec titre, sous-titre et espacement
 * Utilisé pour créer une cohérence visuelle sur toutes les pages
 */
export default function Section({
  children,
  title,
  subtitle,
  background = 'white',
  spacing = 'md',
  className,
  id,
}: SectionProps) {
  const backgroundStyles = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary-50',
  };

  const spacingStyles = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
  };

  return (
    <section
      id={id}
      className={cn(
        backgroundStyles[background],
        spacingStyles[spacing],
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="mb-8 text-center">
            {title && (
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
