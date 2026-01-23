'use client';

import { useState, useMemo } from 'react';
import Section from '@/components/layout/Section';
import PageHero from '@/components/layout/PageHero';
import ActivityList from '@/components/activities/ActivityList';
import CategoryGrid from '@/components/activities/CategoryGrid';
import {
  getAllActivities,
  sortActivities,
  getCategories,
  getLocations,
} from '@/lib/activities';
import { SortOption } from '@/lib/types';

export default function ActivitiesPage() {
  const allActivities = getAllActivities();
  const categories = getCategories();
  const locations = getLocations();
  const popularCount = allActivities.filter(a => a.popular).length;
  const [sortBy, setSortBy] = useState<SortOption>('popular');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  // Filtrage et tri des activités
  const displayedActivities = useMemo(() => {
    let filtered = allActivities;

    // Filtre par recherche
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(activity =>
        activity.name.toLowerCase().includes(query) ||
        activity.description.toLowerCase().includes(query) ||
        activity.category.toLowerCase().includes(query)
      );
    }

    // Filtre par catégorie sélectionnée
    if (selectedCategory) {
      filtered = filtered.filter(activity => activity.category === selectedCategory);
    }

    // Filtre par lieu sélectionné
    if (selectedLocation) {
      filtered = filtered.filter(activity => activity.locations.includes(selectedLocation));
    }

    return sortActivities(filtered, sortBy);
  }, [allActivities, sortBy, searchQuery, selectedCategory, selectedLocation]);

  const priceRange = {
    min: Math.min(...allActivities.map(a => a.price)),
    max: Math.max(...allActivities.map(a => a.price)),
  };

  return (
    <>
      {/* Hero Section */}
      <PageHero
        badge="Toutes nos activités"
        title="Activités à l'Île Maurice"
        subtitle="Découvrez plus de 60 expériences authentiques : sports nautiques, randonnées, découvertes culturelles et bien plus encore"
        backgroundImage="https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2023/04/plage-ile-maurice-belle-mare.jpg"
        stats={[
          {
            value: `${allActivities.length}`,
            label: 'activités',
          },
          {
            value: `${categories.length}`,
            label: 'catégories',
          },
          {
            value: `dès ${priceRange.min.toFixed(0)}€`,
            label: 'par personne',
          },
        ]}
      />

      {/* Barre de recherche et filtres rapides */}
      <Section background="white" spacing="md">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Barre de recherche */}
          <div className="relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Rechercher une activité..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-primary-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Catégories en grille */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
              Filtrer par catégorie
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === null
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-primary-300 hover:bg-primary-50'
                }`}
              >
                <div className="font-semibold">Toutes</div>
                <div className="text-xs opacity-75">{allActivities.length} activités</div>
              </button>
              {categories.map((category) => {
                const count = allActivities.filter(a => a.category === category).length;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
                    className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all text-left ${
                      selectedCategory === category
                        ? 'bg-primary-600 text-white shadow-md'
                        : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-primary-300 hover:bg-primary-50'
                    }`}
                  >
                    <div className="font-semibold truncate">{category}</div>
                    <div className="text-xs opacity-75">{count} {count > 1 ? 'activités' : 'activité'}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Lieux en grille */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
              Filtrer par lieu
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
              <button
                onClick={() => setSelectedLocation(null)}
                className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                  selectedLocation === null
                    ? 'bg-secondary-500 text-white shadow-md'
                    : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-secondary-300 hover:bg-secondary-50'
                }`}
              >
                <div className="font-semibold">Tous les lieux</div>
              </button>
              {locations.slice(0, 17).map((location) => {
                const count = allActivities.filter(a => a.locations.includes(location)).length;
                return (
                  <button
                    key={location}
                    onClick={() => setSelectedLocation(location === selectedLocation ? null : location)}
                    className={`px-3 py-2 rounded-lg text-xs font-medium transition-all text-left ${
                      selectedLocation === location
                        ? 'bg-secondary-500 text-white shadow-md'
                        : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-secondary-300 hover:bg-secondary-50'
                    }`}
                  >
                    <div className="font-semibold truncate">{location}</div>
                    <div className="text-[10px] opacity-75">{count}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Compteur et tri */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <p className="text-sm text-gray-600">
                <span className="font-bold text-gray-900 text-lg">{displayedActivities.length}</span>{' '}
                {displayedActivities.length > 1 ? 'activités trouvées' : 'activité trouvée'}
              </p>
              {(selectedCategory || selectedLocation || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setSelectedLocation(null);
                    setSearchQuery('');
                  }}
                  className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Réinitialiser les filtres
                </button>
              )}
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="popular">Les plus populaires</option>
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix décroissant</option>
              <option value="rating">Meilleure note</option>
              <option value="duration">Durée</option>
            </select>
          </div>
        </div>
      </Section>

      {/* Liste des activités */}
      <Section background="gray" spacing="lg">
        <ActivityList
          activities={displayedActivities}
          variant="standard"
          columns={3}
          emptyMessage="Aucune activité ne correspond à votre recherche. Essayez d'autres mots-clés ou catégories."
        />
      </Section>

      {/* Explorer toutes les catégories */}
      <Section
        background="white"
        spacing="lg"
        title="Toutes les catégories d'activités"
        subtitle="Découvrez notre sélection complète organisée par type d'expérience"
      >
        <CategoryGrid />
      </Section>
    </>
  );
}
