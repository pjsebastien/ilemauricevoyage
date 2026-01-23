import { Activity } from '@/lib/types';
import ActivityCard from './ActivityCard';
import { cn } from '@/lib/utils';

interface ActivityListProps {
  activities: Activity[];
  variant?: 'compact' | 'standard' | 'featured';
  columns?: 2 | 3 | 4;
  emptyMessage?: string;
}

/**
 * Composant ActivityList
 * Affiche une grille responsive d'activités
 * Colonnes : 2, 3 ou 4 (défaut: 3)
 */
export default function ActivityList({
  activities,
  variant = 'standard',
  columns = 3,
  emptyMessage = 'Aucune activité trouvée.',
}: ActivityListProps) {
  if (activities.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">{emptyMessage}</p>
      </div>
    );
  }

  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div
      className={cn(
        'grid gap-6',
        gridCols[columns]
      )}
    >
      {activities.map((activity) => (
        <ActivityCard
          key={activity.id}
          activity={activity}
          variant={variant}
        />
      ))}
    </div>
  );
}
