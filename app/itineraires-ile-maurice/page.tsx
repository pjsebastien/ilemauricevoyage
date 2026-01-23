'use client';

import { useState } from 'react';
import Link from 'next/link';

// Types
type DayActivity = {
  time: string;
  activity: string;
  link?: string;
  type: 'transport' | 'visite' | 'plage' | 'activite' | 'repas' | 'hebergement';
};

type Day = {
  jour: number;
  titre: string;
  region: string;
  description: string;
  activites: DayActivity[];
  hebergement: string;
  hebergementLink?: string;
  conseil?: string;
};

// Itinéraire 7 jours
const itineraire7jours: Day[] = [
  {
    jour: 1,
    titre: 'Arrivée et découverte du Nord',
    region: 'Nord',
    description: 'Atterrissage à l\'aéroport SSR, récupération de la voiture de location et direction le nord de l\'île pour votre première nuit.',
    activites: [
      { time: 'Matin', activity: 'Arrivée aéroport, location voiture', type: 'transport' },
      { time: 'Midi', activity: 'Route vers le Nord (1h30)', type: 'transport' },
      { time: 'Après-midi', activity: 'Installation hôtel + baignade plage Trou aux Biches', link: '/que-faire-trou-aux-biches', type: 'plage' },
      { time: 'Soir', activity: 'Dîner à Grand Baie (resto local)', link: '/que-faire-grand-baie', type: 'repas' },
    ],
    hebergement: 'Trou aux Biches ou Grand Baie',
    hebergementLink: '/que-faire-trou-aux-biches',
    conseil: 'Arrivée souvent tôt le matin (6-8h). Profitez du décalage horaire pour visiter dès le premier jour.',
  },
  {
    jour: 2,
    titre: 'Excursion îles du Nord',
    region: 'Nord',
    description: 'Journée en catamaran vers les îles du nord : Coin de Mire, Île Plate et Île Gabriel. Snorkeling, barbecue et eaux cristallines.',
    activites: [
      { time: '8h', activity: 'Départ catamaran depuis Grand Baie', link: '/que-faire-grand-baie', type: 'activite' },
      { time: '9h-11h', activity: 'Snorkeling à Coin de Mire', type: 'activite' },
      { time: '12h', activity: 'Barbecue créole sur l\'Île Gabriel', type: 'repas' },
      { time: '14h-16h', activity: 'Baignade et farniente Île Plate', type: 'plage' },
      { time: '17h', activity: 'Retour Grand Baie', type: 'transport' },
    ],
    hebergement: 'Trou aux Biches ou Grand Baie',
    conseil: 'Réservez cette excursion à l\'avance en haute saison. Emportez crème solaire et anti-nausée si sensible.',
  },
  {
    jour: 3,
    titre: 'Cap Malheureux et jardins',
    region: 'Nord',
    description: 'Matinée à la célèbre église au toit rouge de Cap Malheureux, puis visite du Jardin de Pamplemousses, le plus ancien jardin botanique de l\'hémisphère sud.',
    activites: [
      { time: 'Matin', activity: 'Cap Malheureux (église au toit rouge)', link: '/que-faire-cap-malheureux', type: 'visite' },
      { time: '10h', activity: 'Jardin de Pamplemousses (nénuphars géants)', type: 'visite' },
      { time: 'Midi', activity: 'Déjeuner local à Pamplemousses', type: 'repas' },
      { time: 'Après-midi', activity: 'Route vers l\'Ouest, coucher de soleil Flic-en-Flac', link: '/que-faire-flic-en-flac', type: 'plage' },
    ],
    hebergement: 'Flic-en-Flac',
    hebergementLink: '/que-faire-flic-en-flac',
    conseil: 'Le jardin ouvre à 8h30 - arrivez tôt pour éviter les groupes. Coucher de soleil magique à Flic-en-Flac.',
  },
  {
    jour: 4,
    titre: 'Dauphins et Sud sauvage',
    region: 'Ouest / Sud',
    description: 'Réveil à l\'aube pour nager avec les dauphins à Tamarin, puis découverte du sud sauvage : Chamarel, Terre des 7 couleurs et cascades.',
    activites: [
      { time: '5h30', activity: 'Sortie dauphins à Tamarin', link: '/que-faire-tamarin', type: 'activite' },
      { time: '9h', activity: 'Petit-déjeuner à Tamarin', type: 'repas' },
      { time: '10h', activity: 'Route vers Chamarel', type: 'transport' },
      { time: '11h', activity: 'Terre des 7 couleurs + Cascade Chamarel', type: 'visite' },
      { time: '13h', activity: 'Déjeuner au Varangue sur Morne', type: 'repas' },
      { time: '15h', activity: 'Installation au Morne, plage', link: '/que-faire-le-morne', type: 'plage' },
    ],
    hebergement: 'Le Morne',
    hebergementLink: '/que-faire-le-morne',
    conseil: 'Les dauphins se voient mieux entre 6h et 8h. Réservez la veille auprès d\'un opérateur responsable.',
  },
  {
    jour: 5,
    titre: 'Le Morne et côte Est',
    region: 'Sud / Est',
    description: 'Randonnée matinale au Morne Brabant (UNESCO) pour les sportifs, ou plage. Puis route vers la côte Est et le lagon de Blue Bay.',
    activites: [
      { time: 'Matin', activity: 'Randonnée Morne Brabant (3h) OU plage du Morne', link: '/que-faire-le-morne', type: 'activite' },
      { time: 'Midi', activity: 'Route vers l\'Est via la côte sud', type: 'transport' },
      { time: '14h', activity: 'Arrêt Gris-Gris (falaises, côte sauvage)', link: '/que-faire-souillac', type: 'visite' },
      { time: '15h30', activity: 'Blue Bay - snorkeling parc marin', link: '/que-faire-blue-bay', type: 'plage' },
      { time: '18h', activity: 'Installation Belle Mare / Trou d\'Eau Douce', type: 'hebergement' },
    ],
    hebergement: 'Belle Mare ou Trou d\'Eau Douce',
    hebergementLink: '/que-faire-belle-mare',
    conseil: 'La randonnée du Morne démarre à 6h (guide obligatoire). Sans rando, profitez de la magnifique plage du Morne.',
  },
  {
    jour: 6,
    titre: 'Île aux Cerfs',
    region: 'Est',
    description: 'Journée de rêve sur l\'Île aux Cerfs, le joyau de Maurice. Plages de carte postale, eaux turquoise et activités nautiques.',
    activites: [
      { time: '9h', activity: 'Départ bateau vers Île aux Cerfs', link: '/que-faire-ile-aux-cerfs', type: 'transport' },
      { time: '10h-12h', activity: 'Plage + snorkeling Île aux Cerfs', link: '/que-faire-ile-aux-cerfs', type: 'plage' },
      { time: '12h', activity: 'Déjeuner sur l\'île', type: 'repas' },
      { time: '14h', activity: 'Parasailing ou kayak (optionnel)', type: 'activite' },
      { time: '16h', activity: 'Retour Trou d\'Eau Douce', link: '/que-faire-trou-deau-douce', type: 'transport' },
      { time: 'Soir', activity: 'Dîner fruits de mer à Belle Mare', link: '/que-faire-belle-mare', type: 'repas' },
    ],
    hebergement: 'Belle Mare ou Trou d\'Eau Douce',
    conseil: 'Prenez le bateau public (5€) plutôt que les excursions organisées (30-50€). Arrivez tôt pour éviter la foule.',
  },
  {
    jour: 7,
    titre: 'Port Louis et départ',
    region: 'Centre',
    description: 'Dernière matinée à Maurice : visite de la capitale Port Louis, son marché central et le Caudan Waterfront avant le vol retour.',
    activites: [
      { time: 'Matin', activity: 'Check-out et route vers Port Louis', type: 'transport' },
      { time: '9h', activity: 'Marché Central de Port Louis', link: '/que-faire-port-louis', type: 'visite' },
      { time: '10h30', activity: 'Chinatown + Fort Adelaide', link: '/que-faire-port-louis', type: 'visite' },
      { time: '12h', activity: 'Déjeuner Caudan Waterfront', type: 'repas' },
      { time: '14h', activity: 'Route vers aéroport + restitution voiture', type: 'transport' },
      { time: '16h+', activity: 'Vol retour', type: 'transport' },
    ],
    hebergement: '-',
    conseil: 'Le marché central est fermé le dimanche. Prévoyez 3h avant votre vol pour la restitution voiture et l\'enregistrement.',
  },
];

// Itinéraire 10 jours
const itineraire10jours: Day[] = [
  ...itineraire7jours.slice(0, 5),
  {
    jour: 6,
    titre: 'Randonnée et cascades',
    region: 'Centre',
    description: 'Journée aventure dans les terres : randonnée aux 7 Cascades de Tamarin (Tamarind Falls), le spot nature le plus spectaculaire de Maurice.',
    activites: [
      { time: '7h', activity: 'Départ vers Henrietta', type: 'transport' },
      { time: '8h-13h', activity: 'Randonnée 7 Cascades (avec guide)', link: '/que-faire-chutes-tamarin', type: 'activite' },
      { time: '13h', activity: 'Pique-nique / déjeuner local', type: 'repas' },
      { time: '15h', activity: 'Gorges de la Rivière Noire - point de vue', link: '/que-faire-gorges-riviere-noire', type: 'visite' },
      { time: '17h', activity: 'Retour côte, repos', type: 'transport' },
    ],
    hebergement: 'Flic-en-Flac ou Tamarin',
    hebergementLink: '/que-faire-flic-en-flac',
    conseil: 'Obligatoire avec guide local. Prévoir chaussures de rando, maillot et serviette pour les baignades.',
  },
  {
    jour: 7,
    titre: 'Plongée ou farniente',
    region: 'Ouest',
    description: 'Journée relax sur la côte ouest : baptême de plongée à Flic-en-Flac (excellent spot) ou journée plage au choix.',
    activites: [
      { time: 'Matin', activity: 'Baptême de plongée Flic-en-Flac', link: '/que-faire-flic-en-flac', type: 'activite' },
      { time: 'Midi', activity: 'Déjeuner resto plage', type: 'repas' },
      { time: 'Après-midi', activity: 'Plage Flic-en-Flac + balade village', type: 'plage' },
      { time: '18h', activity: 'Coucher de soleil mythique', type: 'plage' },
      { time: 'Soir', activity: 'Dîner local (mine frite, bol renversé)', type: 'repas' },
    ],
    hebergement: 'Flic-en-Flac',
    conseil: 'Le site de plongée "La Cathédrale" est exceptionnel. Réservez la veille au club de plongée.',
  },
  {
    jour: 8,
    titre: 'Côte Est et Belle Mare',
    region: 'Est',
    description: 'Route vers la côte Est, la plus luxueuse de Maurice. Installation à Belle Mare et découverte de cette plage de 10 km.',
    activites: [
      { time: 'Matin', activity: 'Route vers l\'Est', type: 'transport' },
      { time: '11h', activity: 'Arrêt Trou d\'Eau Douce', link: '/que-faire-trou-deau-douce', type: 'visite' },
      { time: 'Midi', activity: 'Déjeuner fruits de mer', type: 'repas' },
      { time: 'Après-midi', activity: 'Installation Belle Mare + plage', link: '/que-faire-belle-mare', type: 'plage' },
      { time: 'Soir', activity: 'Dîner gastronomique hôtel', type: 'repas' },
    ],
    hebergement: 'Belle Mare',
    hebergementLink: '/que-faire-belle-mare',
    conseil: 'La plage de Belle Mare est la plus belle de l\'île, surtout tôt le matin avant l\'affluence.',
  },
  {
    jour: 9,
    titre: 'Île aux Cerfs',
    region: 'Est',
    description: 'Journée de rêve sur l\'Île aux Cerfs, le joyau de Maurice.',
    activites: [
      { time: '9h', activity: 'Départ bateau vers Île aux Cerfs', link: '/que-faire-ile-aux-cerfs', type: 'transport' },
      { time: '10h-16h', activity: 'Plage, snorkeling, activités nautiques', link: '/que-faire-ile-aux-cerfs', type: 'plage' },
      { time: '12h30', activity: 'Déjeuner sur l\'île', type: 'repas' },
      { time: '16h', activity: 'Retour Trou d\'Eau Douce', type: 'transport' },
      { time: 'Soir', activity: 'Dîner tranquille', type: 'repas' },
    ],
    hebergement: 'Belle Mare',
    conseil: 'Le meilleur moment : avant 10h et après 15h quand la foule diminue.',
  },
  {
    jour: 10,
    titre: 'Port Louis et départ',
    region: 'Centre',
    description: 'Visite de la capitale et vol retour.',
    activites: [
      { time: 'Matin', activity: 'Route vers Port Louis', type: 'transport' },
      { time: '9h', activity: 'Marché Central + Chinatown', link: '/que-faire-port-louis', type: 'visite' },
      { time: '12h', activity: 'Déjeuner + shopping Caudan', type: 'repas' },
      { time: '14h', activity: 'Route aéroport', type: 'transport' },
      { time: '17h+', activity: 'Vol retour', type: 'transport' },
    ],
    hebergement: '-',
  },
];

// Itinéraire 14 jours
const itineraire14jours: Day[] = [
  ...itineraire10jours.slice(0, 9),
  {
    jour: 10,
    titre: 'Grand Gaube et authenticité',
    region: 'Nord-Est',
    description: 'Découverte du nord-est authentique, loin du tourisme de masse. Grand Gaube, ses pêcheurs et ses petites criques secrètes.',
    activites: [
      { time: 'Matin', activity: 'Route vers Grand Gaube', link: '/que-faire-grand-gaube', type: 'transport' },
      { time: '10h', activity: 'Balade village de pêcheurs', link: '/que-faire-grand-gaube', type: 'visite' },
      { time: 'Midi', activity: 'Déjeuner poisson grillé (resto local)', type: 'repas' },
      { time: 'Après-midi', activity: 'Plages secrètes du nord-est', type: 'plage' },
      { time: 'Soir', activity: 'Installation Grand Baie', link: '/que-faire-grand-baie', type: 'hebergement' },
    ],
    hebergement: 'Grand Baie',
    hebergementLink: '/que-faire-grand-baie',
    conseil: 'Grand Gaube est parfait pour ceux qui cherchent l\'authenticité mauricienne.',
  },
  {
    jour: 11,
    titre: 'Shopping et détente',
    region: 'Nord',
    description: 'Journée relax à Grand Baie : shopping duty-free, plages et vie nocturne.',
    activites: [
      { time: 'Matin', activity: 'Grasse matinée + plage La Cuvette', link: '/que-faire-grand-baie', type: 'plage' },
      { time: 'Midi', activity: 'Déjeuner resto tendance Grand Baie', type: 'repas' },
      { time: 'Après-midi', activity: 'Shopping Sunset Boulevard (duty-free)', type: 'visite' },
      { time: '17h', activity: 'Sundowner cocktail vue mer', type: 'repas' },
      { time: 'Soir', activity: 'Sortie nocturne Grand Baie', type: 'activite' },
    ],
    hebergement: 'Grand Baie',
    conseil: 'Grand Baie est le seul endroit de Maurice avec une vraie vie nocturne.',
  },
  {
    jour: 12,
    titre: 'Quad et aventure',
    region: 'Sud',
    description: 'Journée adrénaline : quad dans les champs de canne et forêts du Sud, puis retour par la côte sauvage.',
    activites: [
      { time: '8h', activity: 'Route vers Chamouny', type: 'transport' },
      { time: '9h-12h', activity: 'Excursion quad 3h', link: '/que-faire-chamouny', type: 'activite' },
      { time: '12h30', activity: 'Déjeuner local', type: 'repas' },
      { time: '14h', activity: 'Rochester Falls', link: '/que-faire-souillac', type: 'visite' },
      { time: '16h', activity: 'Gris-Gris (falaises)', link: '/que-faire-souillac', type: 'visite' },
      { time: '18h', activity: 'Retour hébergement', type: 'transport' },
    ],
    hebergement: 'Flic-en-Flac ou Blue Bay',
    hebergementLink: '/que-faire-blue-bay',
  },
  {
    jour: 13,
    titre: 'Journée plage au choix',
    region: 'Variable',
    description: 'Dernière vraie journée : retournez à votre plage préférée ou découvrez-en une nouvelle. Repos avant le départ.',
    activites: [
      { time: 'Journée', activity: 'Plage au choix (Morne, Blue Bay, Trou aux Biches...)', type: 'plage' },
      { time: 'Midi', activity: 'Déjeuner bord de mer', type: 'repas' },
      { time: 'Après-midi', activity: 'Dernière baignade / snorkeling', type: 'plage' },
      { time: 'Soir', activity: 'Dîner d\'au revoir', type: 'repas' },
    ],
    hebergement: 'Selon localisation vol',
    conseil: 'Choisissez un hébergement proche de l\'aéroport pour le lendemain (sud ou est).',
  },
  {
    jour: 14,
    titre: 'Derniers achats et départ',
    region: 'Centre',
    description: 'Matinée shopping souvenirs et derniers instants mauriciens avant le vol retour.',
    activites: [
      { time: 'Matin', activity: 'Shopping souvenirs (rhum, vanille, thé)', type: 'visite' },
      { time: '11h', activity: 'Port Louis (si pas visité) ou plage rapide', link: '/que-faire-port-louis', type: 'visite' },
      { time: '13h', activity: 'Route aéroport', type: 'transport' },
      { time: '15h', activity: 'Restitution voiture + enregistrement', type: 'transport' },
      { time: '18h+', activity: 'Vol retour', type: 'transport' },
    ],
    hebergement: '-',
    conseil: 'Achetez le rhum et les épices à l\'aéroport (duty-free) pour éviter les soucis en soute.',
  },
];

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
function ItineraireSection({
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
function ItineraireBuilder() {
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

export default function ItinerairesMauricePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-indigo-200 text-sm font-medium mb-3">Mis à jour janvier 2026</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Itinéraires à l&apos;île Maurice<br />
            <span className="text-pink-300">7, 10 ou 14 jours</span>
          </h1>
          <p className="text-xl text-indigo-100 max-w-3xl leading-relaxed">
            Découvrez nos circuits détaillés jour par jour pour explorer Maurice. Du nord animé
            au sud sauvage, des plages paradisiaques aux montagnes luxuriantes, organisez le
            road trip parfait selon votre durée de séjour.
          </p>
        </div>
      </section>

      {/* Navigation */}
      <nav className="bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <div className="flex flex-wrap gap-4 text-sm justify-center">
            <a href="#constructeur" className="text-gray-600 hover:text-indigo-600 font-medium">Constructeur</a>
            <a href="#7jours" className="text-gray-600 hover:text-indigo-600 font-medium">7 jours</a>
            <a href="#10jours" className="text-gray-600 hover:text-indigo-600 font-medium">10 jours</a>
            <a href="#14jours" className="text-gray-600 hover:text-indigo-600 font-medium">14 jours</a>
            <a href="#conseils" className="text-gray-600 hover:text-indigo-600 font-medium">Conseils pratiques</a>
            <a href="#faq" className="text-gray-600 hover:text-indigo-600 font-medium">FAQ</a>
          </div>
        </div>
      </nav>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Vous partez à Maurice et vous demandez <strong>comment organiser votre voyage</strong> ?
            Avec seulement 65 km du nord au sud, l&apos;île semble petite sur la carte. Pourtant,
            chaque région offre une atmosphère unique et mérite qu&apos;on s&apos;y attarde.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Le piège classique : vouloir tout voir et passer son temps en voiture. Notre conseil :
            <strong> limitez vos changements d&apos;hébergement</strong> (2-3 maximum) et rayonnez
            depuis chaque base. Nos itinéraires sont conçus pour optimiser vos déplacements tout
            en voyant l&apos;essentiel.
          </p>

          <div className="grid md:grid-cols-3 gap-4 my-8">
            <Link href="#7jours" className="bg-cyan-50 rounded-xl p-5 text-center hover:bg-cyan-100 transition-colors">
              <p className="text-3xl font-bold text-cyan-600">7 jours</p>
              <p className="text-sm text-cyan-700">L&apos;essentiel de Maurice</p>
            </Link>
            <Link href="#10jours" className="bg-indigo-50 rounded-xl p-5 text-center hover:bg-indigo-100 transition-colors">
              <p className="text-3xl font-bold text-indigo-600">10 jours</p>
              <p className="text-sm text-indigo-700">Idéal premier voyage</p>
            </Link>
            <Link href="#14jours" className="bg-purple-50 rounded-xl p-5 text-center hover:bg-purple-100 transition-colors">
              <p className="text-3xl font-bold text-purple-600">14 jours</p>
              <p className="text-sm text-purple-700">Découverte complète</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Constructeur */}
      <section id="constructeur" className="py-16 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4">
          <ItineraireBuilder />
        </div>
      </section>

      {/* Itinéraire 7 jours */}
      <div className="bg-white">
        <ItineraireSection
          id="7jours"
          title="Itinéraire 7 jours à Maurice"
          duration="7 jours / 6 nuits"
          description="Une semaine pour découvrir l'essentiel : le nord animé, les dauphins de l'ouest, le sud sauvage et l'île aux Cerfs. Rythme soutenu mais réalisable."
          days={itineraire7jours}
          highlights={[
            'Excursion catamaran îles du nord',
            'Nage avec les dauphins à Tamarin',
            'Terre des 7 couleurs de Chamarel',
            'Île aux Cerfs et son lagon',
            'Plus belles plages (Trou aux Biches, Belle Mare)',
          ]}
          budgetRange="1 400 - 3 500€ pour 2 personnes"
        />
      </div>

      {/* Itinéraire 10 jours */}
      <div className="bg-gray-50">
        <ItineraireSection
          id="10jours"
          title="Itinéraire 10 jours à Maurice"
          duration="10 jours / 9 nuits"
          description="La durée idéale pour un premier voyage. Vous avez le temps de tout voir sans courir, avec des journées détente pour profiter des plages."
          days={itineraire10jours}
          highlights={[
            'Tout le programme 7 jours + :',
            'Randonnée 7 Cascades (Tamarind Falls)',
            'Baptême de plongée à Flic-en-Flac',
            'Journée complète côte Est luxueuse',
            'Plus de temps plage et détente',
          ]}
          budgetRange="2 000 - 5 000€ pour 2 personnes"
        />
      </div>

      {/* Itinéraire 14 jours */}
      <div className="bg-white">
        <ItineraireSection
          id="14jours"
          title="Itinéraire 14 jours à Maurice"
          duration="14 jours / 13 nuits"
          description="Deux semaines pour explorer Maurice en profondeur, des villages de pêcheurs authentiques aux resorts de luxe, en passant par les aventures sportives."
          days={itineraire14jours}
          highlights={[
            'Tout le programme 10 jours + :',
            'Grand Gaube et authenticité nord-est',
            'Shopping et vie nocturne Grand Baie',
            'Aventure quad dans le Sud',
            'Journée relax avant le départ',
            'Rochester Falls et côte sauvage',
          ]}
          budgetRange="2 800 - 7 000€ pour 2 personnes"
        />
      </div>

      {/* Carte des régions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Les régions de Maurice en un coup d&apos;œil
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { region: 'Nord', desc: 'Plages, vie nocturne, shopping', color: 'bg-amber-50 border-amber-200', lieux: ['Grand Baie', 'Trou aux Biches', 'Cap Malheureux'] },
              { region: 'Est', desc: 'Luxe, resorts, Île aux Cerfs', color: 'bg-green-50 border-green-200', lieux: ['Belle Mare', 'Trou d\'Eau Douce', 'Île aux Cerfs'] },
              { region: 'Sud', desc: 'Sauvage, kitesurf, authenticité', color: 'bg-blue-50 border-blue-200', lieux: ['Le Morne', 'Blue Bay', 'Souillac'] },
              { region: 'Ouest', desc: 'Couchers de soleil, dauphins', color: 'bg-orange-50 border-orange-200', lieux: ['Flic-en-Flac', 'Tamarin'] },
            ].map((r) => (
              <div key={r.region} className={`rounded-xl p-5 border-2 ${r.color}`}>
                <h3 className="font-bold text-gray-900 mb-1">{r.region}</h3>
                <p className="text-sm text-gray-600 mb-3">{r.desc}</p>
                <ul className="space-y-1">
                  {r.lieux.map((lieu) => (
                    <li key={lieu} className="text-sm text-gray-700">• {lieu}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/ou-aller-ile-maurice"
              className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-medium"
            >
              Voir toutes les destinations en détail
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Conseils pratiques */}
      <section id="conseils" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Conseils pour organiser votre road trip
          </h2>

          <div className="space-y-6">
            {[
              {
                titre: 'Location de voiture : indispensable',
                contenu: 'Maurice se découvre en voiture. Les transports en commun sont lents et les taxis chers. Comptez 25-50€/jour. Réservez à l\'avance en haute saison. Attention : on roule à gauche !',
              },
              {
                titre: 'Limitez les changements d\'hôtel',
                contenu: 'L\'île est petite (1h30 max de route). Plutôt que changer d\'hôtel chaque nuit, posez vos valises 2-3 jours au même endroit et rayonnez. Vous éviterez la fatigue des check-in/check-out.',
              },
              {
                titre: 'Réservez les excursions phares',
                contenu: 'Catamaran îles du nord, dauphins à Tamarin, Île aux Cerfs : réservez 1-2 jours avant en haute saison. Hors saison, vous pouvez improviser sur place et négocier les prix.',
              },
              {
                titre: 'Adaptez selon la météo',
                contenu: 'La côte est est plus exposée au vent et à la pluie en hiver (juin-sept). Privilégiez l\'ouest à cette période. L\'inverse en été. Restez flexible et consultez la météo chaque matin.',
              },
              {
                titre: 'Ne sous-estimez pas les temps de trajet',
                contenu: 'Les routes sont correctes mais sinueuses. Comptez 1h30-2h pour traverser l\'île du nord au sud. Les embouteillages autour de Port Louis peuvent rallonger les trajets.',
              },
              {
                titre: 'Gardez des journées "plage"',
                contenu: 'Le piège : vouloir tout voir et revenir épuisé. Prévoyez des journées sans programme où vous profitez simplement de la plage. C\'est aussi ça, les vacances à Maurice !',
              },
            ].map((conseil, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{conseil.titre}</h3>
                  <p className="text-gray-600">{conseil.contenu}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Questions fréquentes sur les itinéraires
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'Quelle est la durée idéale pour visiter Maurice ?',
                a: '10 à 14 jours est l\'idéal pour découvrir Maurice sans courir. Une semaine permet de voir l\'essentiel mais c\'est intense. Moins de 7 jours, concentrez-vous sur une ou deux régions.',
              },
              {
                q: 'Faut-il absolument louer une voiture ?',
                a: 'Fortement recommandé pour être libre de vos mouvements. Sans voiture, vous dépendez des excursions organisées (plus chères) et des bus (lents et peu fiables). Exception : séjour 100% resort all-inclusive.',
              },
              {
                q: 'Combien d\'hébergements différents prévoir ?',
                a: 'Pour 7 jours : 2 hébergements (Nord/Ouest + Est/Sud). Pour 10-14 jours : 3 maximum. Changer tous les 2-3 jours épuise et fait perdre du temps (check-in, valises...).',
              },
              {
                q: 'Quel sens de visite : Nord vers Sud ou Sud vers Nord ?',
                a: 'Peu importe ! Nous recommandons de commencer par le Nord (plus proche de l\'aéroport, meilleures infrastructures) puis descendre vers le Sud/Est. Mais l\'inverse fonctionne aussi.',
              },
              {
                q: 'Peut-on combiner Maurice et Rodrigues ?',
                a: 'Oui, c\'est une excellente idée si vous avez 14+ jours. Comptez 4-5 jours minimum pour Rodrigues. Vol Air Mauritius (1h30, ~150€ A/R). Deux îles, deux ambiances très différentes.',
              },
              {
                q: 'Les itinéraires sont-ils adaptés aux familles ?',
                a: 'Oui, tous nos itinéraires conviennent aux familles. Adaptez simplement le rythme (moins de visites/jour) et privilégiez les plages avec lagon peu profond (Blue Bay, Trou aux Biches).',
              },
              {
                q: 'Que faire si la météo est mauvaise ?',
                a: 'Visitez Port Louis (marché couvert), faites un spa, cours de cuisine, shopping à Grand Baie, ou changez de côte : quand il pleut à l\'est, il fait souvent beau à l\'ouest et vice-versa.',
              },
              {
                q: 'Faut-il réserver les hôtels à l\'avance ?',
                a: 'En haute saison (décembre-janvier, juillet-août) : oui, réservez 2-3 mois avant. Hors saison : vous pouvez réserver 1-2 semaines avant, voire sur place pour négocier.',
              },
            ].map((faq, index) => (
              <details key={index} className="bg-white rounded-xl shadow-sm overflow-hidden group">
                <summary className="px-6 py-5 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 flex justify-between items-center">
                  {faq.q}
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à réserver votre voyage ?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Maintenant que vous avez votre itinéraire, calculez votre budget et réservez
            vos activités pour un voyage parfait.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/budget-ile-maurice"
              className="bg-white text-indigo-700 px-6 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition-colors shadow-lg"
            >
              Calculer le budget
            </Link>
            <Link
              href="/activites-ile-maurice"
              className="bg-indigo-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-400 transition-colors border border-indigo-400"
            >
              Réserver des activités
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
