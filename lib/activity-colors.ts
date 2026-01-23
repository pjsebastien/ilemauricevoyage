/**
 * Couleurs thématiques par catégorie d'activité
 * Format: gradient CSS inline + couleur de badge
 */

export interface CategoryTheme {
  gradientCSS: string; // Gradient CSS inline
  badgeColor: string;  // Couleur principale du badge
}

export const categoryThemes: Record<string, CategoryTheme> = {
  // Activités aquatiques - Bleu océan
  'Observation des cétacés': {
    gradientCSS: 'linear-gradient(to bottom right, #3b82f6, #06b6d4, #2dd4bf)',
    badgeColor: '#1d4ed8',
  },
  'Snorkeling': {
    gradientCSS: 'linear-gradient(to bottom right, #22d3ee, #3b82f6, #2563eb)',
    badgeColor: '#0e7490',
  },
  'Plongée sous-marine': {
    gradientCSS: 'linear-gradient(to bottom right, #2563eb, #6366f1, #1d4ed8)',
    badgeColor: '#1e40af',
  },
  'Kayak': {
    gradientCSS: 'linear-gradient(to bottom right, #2dd4bf, #22d3ee, #3b82f6)',
    badgeColor: '#0f766e',
  },
  'Balade en catamaran': {
    gradientCSS: 'linear-gradient(to bottom right, #38bdf8, #3b82f6, #06b6d4)',
    badgeColor: '#0369a1',
  },
  'Balade en bateau': {
    gradientCSS: 'linear-gradient(to bottom right, #3b82f6, #38bdf8, #22d3ee)',
    badgeColor: '#1d4ed8',
  },
  'Kitesurf': {
    gradientCSS: 'linear-gradient(to bottom right, #fb923c, #fbbf24, #facc15)',
    badgeColor: '#c2410c',
  },

  // Activités terrestres - Vert nature
  'Randonnée': {
    gradientCSS: 'linear-gradient(to bottom right, #22c55e, #10b981, #14b8a6)',
    badgeColor: '#15803d',
  },
  'Canyoning': {
    gradientCSS: 'linear-gradient(to bottom right, #10b981, #14b8a6, #0891b2)',
    badgeColor: '#047857',
  },
  'Balade à cheval': {
    gradientCSS: 'linear-gradient(to bottom right, #d97706, #f97316, #ef4444)',
    badgeColor: '#92400e',
  },

  // Activités aventure - Orange/Rouge
  'Tyrolienne': {
    gradientCSS: 'linear-gradient(to bottom right, #ef4444, #f97316, #f59e0b)',
    badgeColor: '#b91c1c',
  },
  '4x4 / Jeep': {
    gradientCSS: 'linear-gradient(to bottom right, #57534e, #d97706, #ea580c)',
    badgeColor: '#44403c',
  },
  'Quad': {
    gradientCSS: 'linear-gradient(to bottom right, #ea580c, #ef4444, #f43f5e)',
    badgeColor: '#c2410c',
  },
  'Buggy': {
    gradientCSS: 'linear-gradient(to bottom right, #f59e0b, #f97316, #ef4444)',
    badgeColor: '#92400e',
  },
  'VTT': {
    gradientCSS: 'linear-gradient(to bottom right, #84cc16, #22c55e, #059669)',
    badgeColor: '#4d7c0f',
  },

  // Activités aériennes - Violet/Mauve
  'Hydravion': {
    gradientCSS: 'linear-gradient(to bottom right, #a78bfa, #c084fc, #e879f9)',
    badgeColor: '#6d28d9',
  },

  // Activités spéciales - Mix
  'Seabob': {
    gradientCSS: 'linear-gradient(to bottom right, #06b6d4, #3b82f6, #6366f1)',
    badgeColor: '#0e7490',
  },
  'Luge de montagne': {
    gradientCSS: 'linear-gradient(to bottom right, #7dd3fc, #38bdf8, #22d3ee)',
    badgeColor: '#0369a1',
  },
  'Pont népalais': {
    gradientCSS: 'linear-gradient(to bottom right, #16a34a, #0d9488, #047857)',
    badgeColor: '#15803d',
  },
  'Nage avec les dauphins': {
    gradientCSS: 'linear-gradient(to bottom right, #3b82f6, #22d3ee, #2dd4bf)',
    badgeColor: '#1d4ed8',
  },
  'Speed boat': {
    gradientCSS: 'linear-gradient(to bottom right, #ef4444, #f97316, #f59e0b)',
    badgeColor: '#b91c1c',
  },
};

/**
 * Obtient le thème de couleur pour une catégorie
 * Retourne un thème par défaut si la catégorie n'est pas trouvée
 */
export function getCategoryTheme(category: string): CategoryTheme {
  return categoryThemes[category] || {
    gradientCSS: 'linear-gradient(to bottom right, #0891b2, #06b6d4, #14b8a6)',
    badgeColor: '#0e7490',
  };
}
