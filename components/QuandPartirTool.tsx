'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function QuandPartirTool() {
  const [selectedPreferences, setSelectedPreferences] = useState({
    weather: '',
    budget: '',
    activity: '',
    crowd: ''
  });

  const [recommendation, setRecommendation] = useState<string[]>([]);

  const handlePreferenceChange = (category: string, value: string) => {
    const newPreferences = { ...selectedPreferences, [category]: value };
    setSelectedPreferences(newPreferences);

    // Generate recommendation based on preferences
    const recommended: string[] = [];

    if (newPreferences.weather === 'sec' || newPreferences.activity === 'randonnee') {
      recommended.push('mai', 'juin', 'juillet', 'septembre', 'octobre');
    }
    if (newPreferences.weather === 'chaud') {
      recommended.push('janvier', 'fevrier', 'novembre', 'decembre');
    }
    if (newPreferences.budget === 'economique') {
      recommended.push('avril', 'mai', 'juin', 'septembre', 'octobre');
    }
    if (newPreferences.budget === 'flexible') {
      recommended.push('juillet', 'aout', 'decembre');
    }
    if (newPreferences.activity === 'plage') {
      recommended.push('janvier', 'octobre', 'novembre', 'decembre');
    }
    if (newPreferences.activity === 'plongee') {
      recommended.push('octobre', 'novembre', 'decembre', 'mars', 'avril');
    }
    if (newPreferences.activity === 'kite') {
      recommended.push('juin', 'juillet', 'aout');
    }
    if (newPreferences.activity === 'baleines') {
      recommended.push('juillet', 'aout', 'septembre');
    }
    if (newPreferences.crowd === 'calme') {
      recommended.push('avril', 'mai', 'juin', 'septembre');
    }

    // Count occurrences and sort
    const counts: { [key: string]: number } = {};
    recommended.forEach(month => {
      counts[month] = (counts[month] || 0) + 1;
    });

    const sortedMonths = Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .map(([month]) => month)
      .slice(0, 3);

    setRecommendation(sortedMonths);
  };

  const getMonthName = (slug: string) => {
    const monthNames: { [key: string]: string } = {
      'janvier': 'Janvier', 'fevrier': 'Février', 'mars': 'Mars',
      'avril': 'Avril', 'mai': 'Mai', 'juin': 'Juin',
      'juillet': 'Juillet', 'aout': 'Août', 'septembre': 'Septembre',
      'octobre': 'Octobre', 'novembre': 'Novembre', 'decembre': 'Décembre'
    };
    return monthNames[slug] || slug;
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 shadow-xl border border-blue-100">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-4xl">🎯</span>
        <h2 className="text-3xl font-bold text-gray-900">Trouvez votre mois idéal</h2>
      </div>
      <p className="text-gray-600 mb-8">
        Répondez à quelques questions et nous vous recommanderons les meilleurs mois pour votre voyage.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Weather Preference */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            🌤️ Quelle météo préférez-vous ?
          </label>
          <div className="space-y-2">
            <button
              onClick={() => handlePreferenceChange('weather', 'sec')}
              className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all ${
                selectedPreferences.weather === 'sec'
                  ? 'border-blue-500 bg-blue-50 text-blue-900'
                  : 'border-gray-200 bg-white hover:border-blue-300'
              }`}
            >
              <div className="font-medium">Climat sec et ensoleillé</div>
              <div className="text-sm text-gray-600">Mai à octobre (hiver austral)</div>
            </button>
            <button
              onClick={() => handlePreferenceChange('weather', 'chaud')}
              className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all ${
                selectedPreferences.weather === 'chaud'
                  ? 'border-blue-500 bg-blue-50 text-blue-900'
                  : 'border-gray-200 bg-white hover:border-blue-300'
              }`}
            >
              <div className="font-medium">Chaleur tropicale intense</div>
              <div className="text-sm text-gray-600">Novembre à avril (été austral)</div>
            </button>
          </div>
        </div>

        {/* Budget Preference */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            💰 Quel est votre budget ?
          </label>
          <div className="space-y-2">
            <button
              onClick={() => handlePreferenceChange('budget', 'economique')}
              className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all ${
                selectedPreferences.budget === 'economique'
                  ? 'border-blue-500 bg-blue-50 text-blue-900'
                  : 'border-gray-200 bg-white hover:border-blue-300'
              }`}
            >
              <div className="font-medium">Budget serré (€€)</div>
              <div className="text-sm text-gray-600">Avril, mai, juin, septembre, octobre</div>
            </button>
            <button
              onClick={() => handlePreferenceChange('budget', 'flexible')}
              className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all ${
                selectedPreferences.budget === 'flexible'
                  ? 'border-blue-500 bg-blue-50 text-blue-900'
                  : 'border-gray-200 bg-white hover:border-blue-300'
              }`}
            >
              <div className="font-medium">Budget flexible (€€€€)</div>
              <div className="text-sm text-gray-600">Tous les mois possibles</div>
            </button>
          </div>
        </div>

        {/* Activity Preference */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            🏄 Quelle activité principale ?
          </label>
          <div className="space-y-2">
            <button
              onClick={() => handlePreferenceChange('activity', 'plage')}
              className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all ${
                selectedPreferences.activity === 'plage'
                  ? 'border-blue-500 bg-blue-50 text-blue-900'
                  : 'border-gray-200 bg-white hover:border-blue-300'
              }`}
            >
              <div className="font-medium">Plage et farniente</div>
            </button>
            <button
              onClick={() => handlePreferenceChange('activity', 'randonnee')}
              className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all ${
                selectedPreferences.activity === 'randonnee'
                  ? 'border-blue-500 bg-blue-50 text-blue-900'
                  : 'border-gray-200 bg-white hover:border-blue-300'
              }`}
            >
              <div className="font-medium">Randonnée et nature</div>
            </button>
            <button
              onClick={() => handlePreferenceChange('activity', 'plongee')}
              className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all ${
                selectedPreferences.activity === 'plongee'
                  ? 'border-blue-500 bg-blue-50 text-blue-900'
                  : 'border-gray-200 bg-white hover:border-blue-300'
              }`}
            >
              <div className="font-medium">Plongée et snorkeling</div>
            </button>
            <button
              onClick={() => handlePreferenceChange('activity', 'kite')}
              className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all ${
                selectedPreferences.activity === 'kite'
                  ? 'border-blue-500 bg-blue-50 text-blue-900'
                  : 'border-gray-200 bg-white hover:border-blue-300'
              }`}
            >
              <div className="font-medium">Kitesurf et sports nautiques</div>
            </button>
            <button
              onClick={() => handlePreferenceChange('activity', 'baleines')}
              className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all ${
                selectedPreferences.activity === 'baleines'
                  ? 'border-blue-500 bg-blue-50 text-blue-900'
                  : 'border-gray-200 bg-white hover:border-blue-300'
              }`}
            >
              <div className="font-medium">Observation des baleines</div>
            </button>
          </div>
        </div>

        {/* Crowd Preference */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            👥 Affluence touristique ?
          </label>
          <div className="space-y-2">
            <button
              onClick={() => handlePreferenceChange('crowd', 'calme')}
              className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all ${
                selectedPreferences.crowd === 'calme'
                  ? 'border-blue-500 bg-blue-50 text-blue-900'
                  : 'border-gray-200 bg-white hover:border-blue-300'
              }`}
            >
              <div className="font-medium">Tranquillité recherchée</div>
              <div className="text-sm text-gray-600">Avril, mai, juin, septembre</div>
            </button>
            <button
              onClick={() => handlePreferenceChange('crowd', 'ambiance')}
              className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all ${
                selectedPreferences.crowd === 'ambiance'
                  ? 'border-blue-500 bg-blue-50 text-blue-900'
                  : 'border-gray-200 bg-white hover:border-blue-300'
              }`}
            >
              <div className="font-medium">Ambiance animée acceptée</div>
              <div className="text-sm text-gray-600">Juillet, août, décembre</div>
            </button>
          </div>
        </div>
      </div>

      {/* Recommendation Results */}
      {recommendation.length > 0 && (
        <div className="mt-8 bg-white rounded-2xl p-6 border-2 border-blue-300 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">✨</span>
            <h3 className="text-2xl font-bold text-gray-900">Nos recommandations pour vous</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {recommendation.map((slug, index) => (
              <Link
                key={slug}
                href={`/maurice-en-${slug}`}
                className="block bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-xl p-5 hover:shadow-xl transition-all hover:scale-105"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold">{index + 1}</span>
                  <span className="text-2xl">🏆</span>
                </div>
                <div className="text-2xl font-bold mb-1">{getMonthName(slug)}</div>
                <div className="text-sm text-white/90">Voir le guide détaillé →</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
