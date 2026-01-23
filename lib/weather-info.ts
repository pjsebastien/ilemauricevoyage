/**
 * Informations météo par localisation à Maurice
 */

export interface MonthWeather {
  month: string;
  temperature: string;
  conditions: 'sunny' | 'rainy' | 'cloudy' | 'mixed';
  recommendation: 'excellent' | 'good' | 'fair' | 'avoid';
}

export interface LocationWeather {
  location: string;
  bestPeriod: string;
  months: MonthWeather[];
  generalInfo: string;
}

export const weatherData: Record<string, LocationWeather> = {
  'Chutes de Tamarin': {
    location: 'Chutes de Tamarin',
    bestPeriod: 'Avril à Novembre',
    generalInfo: 'Les cascades sont plus impressionnantes après les pluies (janvier-mars) mais l\'accès peut être difficile.',
    months: [
      { month: 'Jan', temperature: '27°C', conditions: 'rainy', recommendation: 'fair' },
      { month: 'Fév', temperature: '27°C', conditions: 'rainy', recommendation: 'fair' },
      { month: 'Mar', temperature: '27°C', conditions: 'mixed', recommendation: 'good' },
      { month: 'Avr', temperature: '26°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Mai', temperature: '25°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Juin', temperature: '23°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Juil', temperature: '22°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Août', temperature: '23°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Sep', temperature: '23°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Oct', temperature: '24°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Nov', temperature: '25°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Déc', temperature: '26°C', conditions: 'mixed', recommendation: 'good' },
    ],
  },
  'Le Morne': {
    location: 'Le Morne',
    bestPeriod: 'Mai à Novembre',
    generalInfo: 'Excellent pour le kitesurf avec des vents réguliers. Évitez janvier-février (cyclones).',
    months: [
      { month: 'Jan', temperature: '28°C', conditions: 'rainy', recommendation: 'avoid' },
      { month: 'Fév', temperature: '28°C', conditions: 'rainy', recommendation: 'avoid' },
      { month: 'Mar', temperature: '28°C', conditions: 'mixed', recommendation: 'fair' },
      { month: 'Avr', temperature: '27°C', conditions: 'sunny', recommendation: 'good' },
      { month: 'Mai', temperature: '26°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Juin', temperature: '24°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Juil', temperature: '23°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Août', temperature: '23°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Sep', temperature: '24°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Oct', temperature: '25°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Nov', temperature: '26°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Déc', temperature: '27°C', conditions: 'mixed', recommendation: 'good' },
    ],
  },
  'Grand Baie': {
    location: 'Grand Baie',
    bestPeriod: 'Avril à Décembre',
    generalInfo: 'Mer calme et conditions idéales pour les activités nautiques la majorité de l\'année.',
    months: [
      { month: 'Jan', temperature: '28°C', conditions: 'rainy', recommendation: 'fair' },
      { month: 'Fév', temperature: '28°C', conditions: 'rainy', recommendation: 'fair' },
      { month: 'Mar', temperature: '28°C', conditions: 'mixed', recommendation: 'good' },
      { month: 'Avr', temperature: '27°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Mai', temperature: '26°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Juin', temperature: '24°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Juil', temperature: '23°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Août', temperature: '23°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Sep', temperature: '24°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Oct', temperature: '25°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Nov', temperature: '26°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Déc', temperature: '27°C', conditions: 'sunny', recommendation: 'excellent' },
    ],
  },
  'Trou d\'Eau Douce': {
    location: 'Trou d\'Eau Douce',
    bestPeriod: 'Mai à Décembre',
    generalInfo: 'Côte est abritée, excellente pour les sorties en mer et visites des îles.',
    months: [
      { month: 'Jan', temperature: '28°C', conditions: 'rainy', recommendation: 'fair' },
      { month: 'Fév', temperature: '28°C', conditions: 'rainy', recommendation: 'fair' },
      { month: 'Mar', temperature: '28°C', conditions: 'mixed', recommendation: 'good' },
      { month: 'Avr', temperature: '27°C', conditions: 'mixed', recommendation: 'good' },
      { month: 'Mai', temperature: '26°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Juin', temperature: '24°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Juil', temperature: '23°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Août', temperature: '23°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Sep', temperature: '24°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Oct', temperature: '25°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Nov', temperature: '26°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Déc', temperature: '27°C', conditions: 'sunny', recommendation: 'excellent' },
    ],
  },
  'Chamarel': {
    location: 'Chamarel',
    bestPeriod: 'Avril à Novembre',
    generalInfo: 'Climat plus frais en altitude. Évitez les périodes de fortes pluies.',
    months: [
      { month: 'Jan', temperature: '25°C', conditions: 'rainy', recommendation: 'fair' },
      { month: 'Fév', temperature: '25°C', conditions: 'rainy', recommendation: 'fair' },
      { month: 'Mar', temperature: '25°C', conditions: 'mixed', recommendation: 'good' },
      { month: 'Avr', temperature: '24°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Mai', temperature: '23°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Juin', temperature: '21°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Juil', temperature: '20°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Août', temperature: '21°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Sep', temperature: '21°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Oct', temperature: '22°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Nov', temperature: '23°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Déc', temperature: '24°C', conditions: 'mixed', recommendation: 'good' },
    ],
  },
  'Rivière Noire': {
    location: 'Rivière Noire',
    bestPeriod: 'Avril à Novembre',
    generalInfo: 'Idéal pour la pêche au gros et sorties en mer. Mer plus agitée en hiver.',
    months: [
      { month: 'Jan', temperature: '28°C', conditions: 'rainy', recommendation: 'fair' },
      { month: 'Fév', temperature: '28°C', conditions: 'rainy', recommendation: 'fair' },
      { month: 'Mar', temperature: '28°C', conditions: 'mixed', recommendation: 'good' },
      { month: 'Avr', temperature: '27°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Mai', temperature: '26°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Juin', temperature: '24°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Juil', temperature: '23°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Août', temperature: '23°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Sep', temperature: '24°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Oct', temperature: '25°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Nov', temperature: '26°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Déc', temperature: '27°C', conditions: 'mixed', recommendation: 'good' },
    ],
  },
  'Port Louis': {
    location: 'Port Louis',
    bestPeriod: 'Avril à Décembre',
    generalInfo: 'Capitale accessible toute l\'année. Légèrement plus chaud et humide en été.',
    months: [
      { month: 'Jan', temperature: '29°C', conditions: 'rainy', recommendation: 'good' },
      { month: 'Fév', temperature: '29°C', conditions: 'rainy', recommendation: 'good' },
      { month: 'Mar', temperature: '29°C', conditions: 'mixed', recommendation: 'good' },
      { month: 'Avr', temperature: '28°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Mai', temperature: '27°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Juin', temperature: '25°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Juil', temperature: '24°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Août', temperature: '24°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Sep', temperature: '25°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Oct', temperature: '26°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Nov', temperature: '27°C', conditions: 'sunny', recommendation: 'excellent' },
      { month: 'Déc', temperature: '28°C', conditions: 'sunny', recommendation: 'excellent' },
    ],
  },
};

/**
 * Obtient les infos météo pour une localisation
 */
export function getWeatherInfo(location: string): LocationWeather | null {
  return weatherData[location] || null;
}

/**
 * Obtient l'icône météo selon les conditions
 */
export function getWeatherIcon(conditions: string): string {
  const icons: Record<string, string> = {
    sunny: '☀️',
    rainy: '🌧️',
    cloudy: '☁️',
    mixed: '⛅',
  };
  return icons[conditions] || '☀️';
}

/**
 * Obtient la couleur selon la recommandation
 */
export function getRecommendationColor(recommendation: string): string {
  const colors: Record<string, string> = {
    excellent: '#10b981', // green
    good: '#3b82f6', // blue
    fair: '#f59e0b', // orange
    avoid: '#ef4444', // red
  };
  return colors[recommendation] || '#6b7280';
}
