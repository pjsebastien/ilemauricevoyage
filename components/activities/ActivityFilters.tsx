'use client';

import { ActivityFilters as Filters } from '@/lib/types';
import { getCategories, getLocations } from '@/lib/activities';
import Button from '@/components/ui/Button';

interface ActivityFiltersProps {
  filters: Filters;
  onFilterChange: (filters: Filters) => void;
}

/**
 * Composant ActivityFilters
 * Filtres pour rechercher et trier les activités
 * Gère catégorie, localisation et prix
 */
export default function ActivityFilters({
  filters,
  onFilterChange,
}: ActivityFiltersProps) {
  const categories = getCategories();
  const locations = getLocations();

  const handleCategoryChange = (category: string) => {
    onFilterChange({
      ...filters,
      category: category === 'all' ? undefined : category,
    });
  };

  const handleLocationChange = (location: string) => {
    onFilterChange({
      ...filters,
      location: location === 'all' ? undefined : location,
    });
  };

  const handlePopularToggle = () => {
    onFilterChange({
      ...filters,
      popular: !filters.popular,
    });
  };

  const handleReset = () => {
    onFilterChange({});
  };

  const hasActiveFilters =
    filters.category || filters.location || filters.popular;

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 space-y-4">
      {/* Catégorie */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Catégorie
        </label>
        <select
          value={filters.category || 'all'}
          onChange={(e) => handleCategoryChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <option value="all">Toutes les catégories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Localisation */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Localisation
        </label>
        <select
          value={filters.location || 'all'}
          onChange={(e) => handleLocationChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <option value="all">Toutes les localisations</option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>

      {/* Populaire */}
      <div className="flex items-center">
        <input
          type="checkbox"
          id="popular"
          checked={filters.popular || false}
          onChange={handlePopularToggle}
          className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
        />
        <label htmlFor="popular" className="ml-2 text-sm text-gray-700">
          Activités populaires uniquement
        </label>
      </div>

      {/* Bouton reset */}
      {hasActiveFilters && (
        <Button
          variant="outline"
          size="sm"
          onClick={handleReset}
          className="w-full"
        >
          Réinitialiser les filtres
        </Button>
      )}
    </div>
  );
}
