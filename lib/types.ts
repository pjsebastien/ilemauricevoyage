/**
 * Types pour les activités de l'Île Maurice
 * Basés sur la structure du fichier activities-clean.json
 */

export interface Activity {
  id: string;
  name: string;
  category: string;
  description: string;
  url: string;
  image: string;
  locations: string[];
  price: number;
  priceBy: string;
  rating: number | null;
  reviewCount: number;
  duration: ActivityDuration;
  popular: boolean;
  location: ActivityLocation;
  details: ActivityDetails;
  lastUpdate: string;
  enriched: ActivityEnriched;
}

export interface ActivityDuration {
  min: number | null;
  max: number | null;
  minRaw: string;
  maxRaw: string;
}

export interface ActivityLocation {
  spot: string;
  country: string;
  countryIsoCode: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  meetingPoint: string;
}

export interface ActivityDetails {
  spokenLanguages: string[];
  organizedBy: string;
  sportId: number;
  accessibleToDisabled: boolean;
  sensationLevels: {
    min: number | null;
    max: number | null;
  };
  physicalConditions: {
    min: PhysicalCondition | null;
    max: PhysicalCondition | null;
  };
}

export interface PhysicalCondition {
  level: number;
  name: string;
}

export interface ActivityEnriched {
  about: string;
  program: ActivityProgram[] | null;
  requirements: {
    minAge: number | null;
    maxWeight: number | null;
    swimRequired: boolean;
  };
  scrapedAt: string;
}

export interface ActivityProgram {
  step: number;
  description: string;
}

/**
 * Filtres pour la recherche d'activités
 */
export interface ActivityFilters {
  category?: string;
  priceMin?: number;
  priceMax?: number;
  location?: string;
  duration?: string;
  popular?: boolean;
}

/**
 * Options de tri
 */
export type SortOption = 'popular' | 'price-asc' | 'price-desc' | 'rating' | 'duration';
