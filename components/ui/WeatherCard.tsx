import { getWeatherInfo, getWeatherIcon, getRecommendationColor } from '@/lib/weather-info';

interface WeatherCardProps {
  location: string;
  className?: string;
}

/**
 * Composant affichant la météo par période pour une localisation
 */
export default function WeatherCard({ location, className = '' }: WeatherCardProps) {
  let weatherInfo = getWeatherInfo(location);

  // Si la localisation spécifique n'est pas trouvée, utiliser des données génériques pour Maurice
  if (!weatherInfo) {
    weatherInfo = {
      location: location,
      bestPeriod: 'Mai à Novembre',
      generalInfo: 'L\'île Maurice bénéficie d\'un climat tropical agréable toute l\'année. La saison sèche (mai à novembre) offre les conditions les plus favorables pour la plupart des activités outdoor, avec un temps ensoleillé et des températures modérées.',
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
    };
  }

  return (
    <div className={`bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl p-8 border border-sky-200 shadow-xl ${className}`}>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-500 rounded-xl flex items-center justify-center text-2xl">
          ☀️
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Météo & Meilleure période</h3>
          <p className="text-sm text-gray-600">{weatherInfo.location}</p>
        </div>
      </div>

      {/* Meilleure période en évidence */}
      <div className="mb-6 p-5 bg-white rounded-2xl border-2 border-green-200 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="flex-1">
            <div className="text-sm text-gray-600 font-medium">Meilleure période</div>
            <div className="text-xl font-bold text-green-700">{weatherInfo.bestPeriod}</div>
          </div>
        </div>
      </div>

      {/* Info générale */}
      <p className="text-sm text-gray-700 mb-6 leading-relaxed bg-white/50 p-4 rounded-xl">
        {weatherInfo.generalInfo}
      </p>

      {/* Calendrier mensuel */}
      <div className="bg-white rounded-2xl p-5 shadow-sm">
        <h4 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">Conditions par mois</h4>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {weatherInfo.months.map((month) => (
            <div
              key={month.month}
              className="text-center p-3 rounded-xl border-2 transition-all hover:scale-105 flex flex-col items-center"
              style={{
                borderColor: getRecommendationColor(month.recommendation) + '40',
                backgroundColor: getRecommendationColor(month.recommendation) + '08',
              }}
            >
              <div className="text-xl mb-1 flex items-center justify-center w-full">{getWeatherIcon(month.conditions)}</div>
              <div className="text-xs font-bold text-gray-900 mb-1">{month.month}</div>
              <div className="text-xs text-gray-600">{month.temperature}</div>
              <div className="mt-2 w-full h-1.5 rounded-full" style={{ backgroundColor: getRecommendationColor(month.recommendation) }} />
            </div>
          ))}
        </div>

        {/* Légende */}
        <div className="mt-5 pt-4 border-t border-gray-200">
          <div className="flex flex-wrap gap-4 justify-center text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-gray-600">Excellent</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500" />
              <span className="text-gray-600">Bon</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-500" />
              <span className="text-gray-600">Correct</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <span className="text-gray-600">À éviter</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
