import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface InfoBoxProps {
  children: ReactNode;
  title?: string;
  type?: 'info' | 'warning' | 'success' | 'tip';
  className?: string;
}

/**
 * Composant InfoBox pour encadrés informatifs
 * Types : info, warning, success, tip
 * Usage : conseils, avertissements, informations importantes
 */
export default function InfoBox({
  children,
  title,
  type = 'info',
  className,
}: InfoBoxProps) {
  const typeStyles = {
    info: {
      container: 'bg-blue-50 border-blue-200',
      title: 'text-blue-900',
      text: 'text-blue-800',
      icon: '💡',
    },
    warning: {
      container: 'bg-orange-50 border-orange-200',
      title: 'text-orange-900',
      text: 'text-orange-800',
      icon: '⚠️',
    },
    success: {
      container: 'bg-green-50 border-green-200',
      title: 'text-green-900',
      text: 'text-green-800',
      icon: '✓',
    },
    tip: {
      container: 'bg-purple-50 border-purple-200',
      title: 'text-purple-900',
      text: 'text-purple-800',
      icon: '💭',
    },
  };

  const styles = typeStyles[type];

  return (
    <div
      className={cn(
        'border-l-4 p-4 rounded-r-lg',
        styles.container,
        className
      )}
    >
      {title && (
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg">{styles.icon}</span>
          <h4 className={cn('font-semibold text-sm', styles.title)}>
            {title}
          </h4>
        </div>
      )}
      <div className={cn('text-sm', styles.text, !title && 'flex items-start gap-2')}>
        {!title && <span className="text-lg">{styles.icon}</span>}
        <div>{children}</div>
      </div>
    </div>
  );
}
