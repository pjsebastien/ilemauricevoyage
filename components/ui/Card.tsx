import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
  border?: boolean;
  shadow?: 'none' | 'sm' | 'md' | 'lg';
}

/**
 * Composant Card générique
 * Container pour contenus avec bordure, ombre et padding personnalisables
 */
export default function Card({
  children,
  className,
  padding = 'md',
  hover = false,
  border = true,
  shadow = 'md',
}: CardProps) {
  const paddingStyles = {
    none: '',
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
  };

  const shadowStyles = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
  };

  return (
    <div
      className={cn(
        'bg-white rounded-lg',
        border && 'border border-gray-200',
        shadowStyles[shadow],
        paddingStyles[padding],
        hover && 'transition-shadow hover:shadow-xl',
        className
      )}
    >
      {children}
    </div>
  );
}
