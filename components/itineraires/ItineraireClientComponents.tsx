'use client';

import { useState } from 'react';
import Link from 'next/link';

// Types
export type DayActivity = {
  time: string;
  activity: string;
  link?: string;
  type: 'transport' | 'visite' | 'plage' | 'activite' | 'repas' | 'hebergement';
};


export type Day = {
  jour: number;
  titre: string;
  region: string;
  description: string;
  activites: DayActivity[];
  hebergement: string;
  hebergementLink?: string;
  conseil?: string;
};

// Composant jour
function DayCard({ day, isOpen, onToggle }: { day: Day; isOpen: boolean; onToggle: () => void }) {
  const typeColors = {
    transport: 'bg-gray-100 text-gray-700',
    visite: 'bg-purple-100 text-purple-700',
    plage: 'bg-cyan-100 text-cyan-700',
    activite: 'bg-orange-100 text-orange-700',
    repas: 'bg-amber-100 text-amber-700',
    hebergement: 'bg-indigo-100 text-indigo-700',
  };

  const typeIcons = {
    transport: '🚗',
    visite: '📸',
    plage: '🏖️',
    activite: '🎯',
    repas: '🍽️',
    hebergement: '🏨',
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
            J{day.jour}
          </div>
          <div className="text-left">
            <h3 className="font-bold text-gray-900">{day.titre}</h3>
            <p className="text-sm text-gray-500">{day.region}</p>
          </div>
        </div>
        <svg
          className={`w-6 h-6 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="px-6 pb-6 border-t border-gray-100">
          <p className="text-gray-600 my-4">{day.description}</p>

          <div className="space-y-3 mb-6">
            {day.activites.map((act, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-sm font-medium text-gray-500 w-16 flex-shrink-0">{act.time}</span>
                <span className={`px-2 py-0.5 rounded text-xs ${typeColors[act.type]}`}>
                  {typeIcons[act.type]}
                </span>
                {act.link ? (
                  <Link href={act.link} className="text-cyan-600 hover:text-cyan-700 hover:underline">
                    {act.activity}
                  </Link>
                ) : (
                  <span className="text-gray-700">{act.activity}</span>
                )}
              </div>
            ))}
          </div>

          {day.hebergement !== '-' && (
            <div className="flex items-center gap-2 p-3 bg-indigo-50 rounded-lg">
              <span className="text-lg">🏨</span>
              <span className="text-sm font-medium text-indigo-900">Nuit à :</span>
              {day.hebergementLink ? (
                <Link href={day.hebergementLink} className="text-indigo-600 hover:underline">
                  {day.hebergement}
                </Link>
              ) : (
                <span className="text-indigo-700">{day.hebergement}</span>
              )}
            </div>
          )}

          {day.conseil && (
            <div className="mt-4 p-3 bg-amber-50 rounded-lg border-l-4 border-amber-400">
              <p className="text-sm text-amber-800">
                <strong>Conseil :</strong> {day.conseil}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// Composant itinéraire complet
export function ItineraireSection({
  id,
  title,
  duration,
  description,
  days,
  highlights,
  budgetRange,
}: {
  id: string;
  title: string;
  duration: string;
  description: string;
  days: Day[];
  highlights: string[];
  budgetRange: string;
}) {
  const [openDays, setOpenDays] = useState<number[]>([1]);

  const toggleDay = (jour: number) => {
    setOpenDays(prev =>
      prev.includes(jour) ? prev.filter(d => d !== jour) : [...prev, jour]
    );
  };

  const expandAll = () => setOpenDays(days.map(d => d.jour));
  const collapseAll = () => setOpenDays([]);

  return (
    <section id={id} className="py-16 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block bg-cyan-100 text-cyan-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            {duration}
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded-xl p-5 shadow">
            <h4 className="font-semibold text-gray-900 mb-3">Points forts</h4>
            <ul className="space-y-2">
              {highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl p-5 shadow">
            <h4 className="font-semibold text-gray-900 mb-3">Infos pratiques</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>Durée :</strong> {duration}</li>
              <li><strong>Budget estimé :</strong> {budgetRange}</li>
              <li><strong>Transport :</strong> Location voiture recommandée</li>
              <li><strong>Meilleure période :</strong> Mai à novembre</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-end gap-3 mb-4">
          <button onClick={expandAll} className="text-sm text-cyan-600 hover:text-cyan-700">
            Tout déplier
          </button>
          <span className="text-gray-300">|</span>
          <button onClick={collapseAll} className="text-sm text-cyan-600 hover:text-cyan-700">
            Tout replier
          </button>
        </div>

        <div className="space-y-4">
          {days.map((day) => (
            <DayCard
              key={day.jour}
              day={day}
              isOpen={openDays.includes(day.jour)}
              onToggle={() => toggleDay(day.jour)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Constructeur d'itinéraire interactif
export function ItineraireBuilder() {
  const [duree, setDuree] = useState(10);
  const [style, setStyle] = useState<'relax' | 'equilibre' | 'actif'>('equilibre');
  const [priorites, setPriorites] = useState<string[]>(['plages', 'nature']);

  const togglePriorite = (p: string) => {
    setPriorites(prev =>
      prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p]
    );
  };

  const destinations = [
    { id: 'plages', label: 'Plages paradisiaques', icon: '🏖️', lieux: ['Trou aux Biches', 'Belle Mare', 'Blue Bay', 'Le Morne'] },
    { id: 'nature', label: 'Nature & Randonnées', icon: '🌿', lieux: ['Gorges Rivière Noire', '7 Cascades', 'Chamouny', 'Chamarel'] },
    { id: 'nautique', label: 'Sports nautiques', icon: '🏄', lieux: ['Le Morne (kite)', 'Tamarin (surf)', 'Flic-en-Flac (plongée)', 'Île aux Cerfs'] },
    { id: 'culture', label: 'Culture & Gastronomie', icon: '🎭', lieux: ['Port Louis', 'Grand Baie', 'Cap Malheureux'] },
    { id: 'luxe', label: 'Luxe & Bien-être', icon: '💎', lieux: ['Belle Mare', 'Le Morne', 'Grand Baie'] },
    { id: 'famille', label: 'Activités famille', icon: '👨‍👩‍👧‍👦', lieux: ['Casela', 'Blue Bay', 'Île aux Cerfs', 'Pamplemousses'] },
  ];

  const selectedDestinations = destinations
    .filter(d => priorites.includes(d.id))
    .flatMap(d => d.lieux);

  const uniqueDestinations = [...new Set(selectedDestinations)];

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 shadow-xl">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
        <span className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xl">
          🗺️
        </span>
        Construisez votre itinéraire
      </h3>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Durée de votre voyage
          </label>
          <select
            value={duree}
            onChange={(e) => setDuree(Number(e.target.value))}
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500"
          >
            <option value={7}>7 jours</option>
            <option value={10}>10 jours</option>
            <option value={14}>14 jours</option>
            <option value={21}>21 jours</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Style de voyage
          </label>
          <select
            value={style}
            onChange={(e) => setStyle(e.target.value as typeof style)}
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500"
          >
            <option value="relax">Relax (peu de déplacements)</option>
            <option value="equilibre">Équilibré (découverte + détente)</option>
            <option value="actif">Actif (maximum de visites)</option>
          </select>
        </div>
      </div>

      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Vos priorités (sélectionnez 2-3)
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {destinations.map((d) => (
            <button
              key={d.id}
              onClick={() => togglePriorite(d.id)}
              className={`p-3 rounded-xl border-2 text-left transition-all ${
                priorites.includes(d.id)
                  ? 'border-indigo-500 bg-indigo-50'
                  : 'border-gray-200 bg-white hover:border-indigo-300'
              }`}
            >
              <span className="text-2xl">{d.icon}</span>
              <p className="text-sm font-medium text-gray-900 mt-1">{d.label}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Résultat */}
      <div className="bg-white rounded-2xl p-6 shadow">
        <h4 className="font-bold text-gray-900 mb-4">Votre itinéraire suggéré</h4>

        <div className="mb-6">
          <p className="text-gray-600 mb-3">
            Pour <strong>{duree} jours</strong> en mode <strong>{style}</strong>,
            nous vous recommandons de visiter :
          </p>
          <div className="flex flex-wrap gap-2">
            {uniqueDestinations.slice(0, duree > 10 ? 8 : 5).map((lieu) => (
              <span key={lieu} className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
                {lieu}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-gray-50 rounded-xl">
            <p className="text-sm text-gray-600">Hébergements suggérés</p>
            <p className="font-medium">
              {duree <= 7 ? '2 hébergements (Nord + Sud/Ouest)' :
               duree <= 10 ? '3 hébergements (Nord, Ouest, Est)' :
               '3-4 hébergements pour tout couvrir'}
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-xl">
            <p className="text-sm text-gray-600">Nombre de régions</p>
            <p className="font-medium">
              {style === 'relax' ? '2-3 régions max' :
               style === 'equilibre' ? '3-4 régions' :
               '4-5 régions'}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={`#${duree <= 7 ? '7jours' : duree <= 10 ? '10jours' : '14jours'}`}
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-xl font-medium hover:bg-indigo-700 transition-colors"
          >
            Voir l&apos;itinéraire {duree <= 7 ? '7' : duree <= 10 ? '10' : '14'} jours
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <Link
            href="/budget-ile-maurice"
            className="inline-flex items-center gap-2 bg-white text-indigo-600 px-5 py-2.5 rounded-xl font-medium border border-indigo-200 hover:bg-indigo-50 transition-colors"
          >
            Estimer le budget
          </Link>
        </div>
      </div>
    </div>
  );
}

