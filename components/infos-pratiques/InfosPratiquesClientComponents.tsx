'use client';

import { useState } from 'react';

// Composant section accordéon
export function InfoSection({
  id,
  icon,
  title,
  children,
  defaultOpen = false,
}: {
  id: string;
  icon: string;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div id={id} className="bg-white rounded-2xl shadow-lg overflow-hidden scroll-mt-24">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <span className="text-3xl">{icon}</span>
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
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
          {children}
        </div>
      )}
    </div>
  );
}

// Composant checklist interactive
export function Checklist({ items }: { items: string[] }) {
  const [checked, setChecked] = useState<string[]>([]);

  const toggle = (item: string) => {
    setChecked(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item}>
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={checked.includes(item)}
              onChange={() => toggle(item)}
              className="w-5 h-5 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
            />
            <span className={`${checked.includes(item) ? 'line-through text-gray-400' : 'text-gray-700'} group-hover:text-gray-900`}>
              {item}
            </span>
          </label>
        </li>
      ))}
    </ul>
  );
}

// Convertisseur de devises interactif
export function CurrencyConverter() {
  const [euros, setEuros] = useState(100);
  const rate = 48.5; // Taux approximatif EUR/MUR

  return (
    <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-5 my-4">
      <h4 className="font-semibold text-gray-900 mb-3">Convertisseur EUR → MUR</h4>
      <div className="flex items-center gap-4 flex-wrap">
        <div>
          <label className="text-sm text-gray-600">Euros</label>
          <input
            type="number"
            value={euros}
            onChange={(e) => setEuros(Number(e.target.value))}
            className="block w-32 p-2 border rounded-lg mt-1"
          />
        </div>
        <span className="text-2xl text-gray-400">=</span>
        <div>
          <label className="text-sm text-gray-600">Roupies</label>
          <div className="text-2xl font-bold text-emerald-600 mt-1">
            {Math.round(euros * rate).toLocaleString()} MUR
          </div>
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-2">Taux indicatif : 1€ ≈ {rate} MUR</p>
    </div>
  );
}

// Calculateur de décalage horaire
export function TimezoneCalculator() {
  const [parisTime, setParisTime] = useState('12:00');

  const calculateMauritiusTime = (time: string, isSummer: boolean) => {
    const [hours, minutes] = time.split(':').map(Number);
    const offset = isSummer ? 2 : 3; // +2h en été, +3h en hiver
    const newHours = (hours + offset) % 24;
    return `${newHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-5 my-4">
      <h4 className="font-semibold text-gray-900 mb-3">Décalage horaire Paris → Maurice</h4>
      <div className="flex items-center gap-4 flex-wrap">
        <div>
          <label className="text-sm text-gray-600">Heure à Paris</label>
          <input
            type="time"
            value={parisTime}
            onChange={(e) => setParisTime(e.target.value)}
            className="block p-2 border rounded-lg mt-1"
          />
        </div>
        <span className="text-2xl text-gray-400">→</span>
        <div>
          <label className="text-sm text-gray-600">Heure à Maurice</label>
          <div className="mt-1">
            <div className="text-xl font-bold text-indigo-600">
              {calculateMauritiusTime(parisTime, true)} <span className="text-sm font-normal">(été)</span>
            </div>
            <div className="text-xl font-bold text-purple-600">
              {calculateMauritiusTime(parisTime, false)} <span className="text-sm font-normal">(hiver)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
