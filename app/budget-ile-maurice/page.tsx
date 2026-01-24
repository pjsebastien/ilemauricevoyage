'use client';

import { useState } from 'react';
import Link from 'next/link';

// Note: metadata must be in a separate file for client components
// Create metadata in layout.tsx or use generateMetadata in a parent

// Prix de base en euros (mis à jour 2026)
const prices = {
  vols: {
    basseSaison: { min: 650, max: 850 },
    moyenneSaison: { min: 800, max: 1000 },
    hauteSaison: { min: 1000, max: 1400 },
  },
  hebergement: {
    budget: { min: 25, max: 50, label: 'Guesthouse / Airbnb basique' },
    moyen: { min: 80, max: 150, label: 'Hôtel 3★ / Airbnb confort' },
    confort: { min: 150, max: 300, label: 'Hôtel 4★ / Resort' },
    luxe: { min: 300, max: 800, label: 'Hôtel 5★ / Palace' },
  },
  repas: {
    budget: { petit: 0, midi: 5, soir: 8, label: 'Street food / Snacks locaux' },
    moyen: { petit: 5, midi: 12, soir: 20, label: 'Restaurants locaux' },
    confort: { petit: 15, midi: 25, soir: 45, label: 'Restaurants touristiques' },
    luxe: { petit: 25, midi: 50, soir: 100, label: 'Gastronomie / Hôtel' },
  },
  transport: {
    bus: 0.80,
    taxiAeroport: 40,
    taxiCourse: 15,
    locationVoiture: { min: 25, max: 50 },
    locationScooter: 20,
    essence: 1.40,
  },
  activites: {
    plongee: { min: 50, max: 80 },
    snorkeling: { min: 25, max: 45 },
    catamaran: { min: 80, max: 120 },
    dauphins: { min: 40, max: 70 },
    quad: { min: 60, max: 100 },
    zipline: { min: 70, max: 110 },
    sousMarinScooter: { min: 80, max: 120 },
    parasailing: { min: 50, max: 80 },
    kitesurf: { min: 80, max: 150 },
    helicoptere: { min: 200, max: 400 },
    spa: { min: 50, max: 150 },
    golf: { min: 80, max: 200 },
  },
  divers: {
    simLocale: 10,
    eau15L: 0.50,
    biere: 2.50,
    cocktail: 8,
    souvenirs: { min: 20, max: 100 },
    pourboires: 10,
  },
};

// Budgets par destination
const budgetParDestination = [
  { destination: 'Grand Baie', slug: 'grand-baie', budget: '€€€', hebergement: '80-250€', repas: '15-50€', commentaire: 'Zone touristique, prix plus élevés mais grand choix' },
  { destination: 'Flic-en-Flac', slug: 'flic-en-flac', budget: '€€', hebergement: '50-150€', repas: '10-30€', commentaire: 'Bon rapport qualité-prix, vie locale accessible' },
  { destination: 'Belle Mare', slug: 'belle-mare', budget: '€€€€', hebergement: '200-800€', repas: '30-100€', commentaire: 'Zone luxe, principalement des resorts haut de gamme' },
  { destination: 'Trou aux Biches', slug: 'trou-aux-biches', budget: '€€€', hebergement: '100-300€', repas: '15-45€', commentaire: 'Resorts familiaux, quelques options mid-range' },
  { destination: 'Le Morne', slug: 'le-morne', budget: '€€€', hebergement: '150-400€', repas: '20-60€', commentaire: 'Resorts isolés, peu d\'alternatives économiques' },
  { destination: 'Blue Bay', slug: 'blue-bay', budget: '€€', hebergement: '40-120€', repas: '8-25€', commentaire: 'Options économiques, guesthouses locales' },
  { destination: 'Tamarin', slug: 'tamarin', budget: '€€', hebergement: '50-150€', repas: '10-35€', commentaire: 'Ambiance surf, prix modérés' },
  { destination: 'Port Louis', slug: 'port-louis', budget: '€', hebergement: '30-80€', repas: '5-20€', commentaire: 'Street food pas cher, hébergement urbain' },
  { destination: 'Cap Malheureux', slug: 'cap-malheureux', budget: '€€', hebergement: '60-180€', repas: '10-30€', commentaire: 'Petit village, options limitées mais authentiques' },
  { destination: 'Souillac', slug: 'souillac', budget: '€', hebergement: '25-70€', repas: '5-15€', commentaire: 'Très économique, peu touristique' },
];

// Composant calculateur de budget
function BudgetCalculator() {
  const [duree, setDuree] = useState(7);
  const [voyageurs, setVoyageurs] = useState(2);
  const [styleVoyage, setStyleVoyage] = useState<'budget' | 'moyen' | 'confort' | 'luxe'>('moyen');
  const [saison, setSaison] = useState<'basseSaison' | 'moyenneSaison' | 'hauteSaison'>('moyenneSaison');
  const [avecVoiture, setAvecVoiture] = useState(true);
  const [activitesParJour, setActivitesParJour] = useState(0.5);

  // Calculs
  const volParPersonne = (prices.vols[saison].min + prices.vols[saison].max) / 2;
  const totalVols = volParPersonne * voyageurs;

  const hebergementParNuit = (prices.hebergement[styleVoyage].min + prices.hebergement[styleVoyage].max) / 2;
  const totalHebergement = hebergementParNuit * (duree - 1); // -1 car dernière nuit = vol retour

  const repasParJour = prices.repas[styleVoyage].petit + prices.repas[styleVoyage].midi + prices.repas[styleVoyage].soir;
  const totalRepas = repasParJour * voyageurs * duree;

  const transportParJour = avecVoiture ? 35 + 10 : 5; // voiture + essence vs bus/taxi occasionnel
  const totalTransport = transportParJour * duree + prices.transport.taxiAeroport * 2;

  const activiteMoyenne = 60;
  const nombreActivites = Math.round(duree * activitesParJour);
  const totalActivites = activiteMoyenne * nombreActivites * voyageurs;

  const divers = (duree * 10 + 50) * voyageurs; // 10€/jour + souvenirs

  const totalGeneral = totalVols + totalHebergement + totalRepas + totalTransport + totalActivites + divers;
  const parPersonne = totalGeneral / voyageurs;
  const parJour = totalGeneral / duree;

  return (
    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 shadow-xl">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
        <span className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xl">
          €
        </span>
        Calculateur de budget personnalisé
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Durée */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Durée du séjour
          </label>
          <select
            value={duree}
            onChange={(e) => setDuree(Number(e.target.value))}
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          >
            <option value={7}>1 semaine (7 jours)</option>
            <option value={10}>10 jours</option>
            <option value={14}>2 semaines (14 jours)</option>
            <option value={21}>3 semaines (21 jours)</option>
          </select>
        </div>

        {/* Voyageurs */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nombre de voyageurs
          </label>
          <select
            value={voyageurs}
            onChange={(e) => setVoyageurs(Number(e.target.value))}
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          >
            <option value={1}>1 personne (solo)</option>
            <option value={2}>2 personnes (couple)</option>
            <option value={3}>3 personnes</option>
            <option value={4}>4 personnes (famille)</option>
            <option value={5}>5 personnes</option>
            <option value={6}>6 personnes (groupe)</option>
          </select>
        </div>

        {/* Style de voyage */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Style de voyage
          </label>
          <select
            value={styleVoyage}
            onChange={(e) => setStyleVoyage(e.target.value as typeof styleVoyage)}
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          >
            <option value="budget">Routard / Petit budget</option>
            <option value="moyen">Confort moyen</option>
            <option value="confort">Confortable</option>
            <option value="luxe">Luxe / Premium</option>
          </select>
        </div>

        {/* Saison */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Période de voyage
          </label>
          <select
            value={saison}
            onChange={(e) => setSaison(e.target.value as typeof saison)}
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          >
            <option value="basseSaison">Basse saison (juin-sept)</option>
            <option value="moyenneSaison">Moyenne saison (avril-mai, oct-nov)</option>
            <option value="hauteSaison">Haute saison (déc-mars)</option>
          </select>
        </div>

        {/* Transport */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Transport sur place
          </label>
          <select
            value={avecVoiture ? 'voiture' : 'autre'}
            onChange={(e) => setAvecVoiture(e.target.value === 'voiture')}
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          >
            <option value="voiture">Location de voiture</option>
            <option value="autre">Bus / Taxi / Excursions</option>
          </select>
        </div>

        {/* Activités */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Activités prévues
          </label>
          <select
            value={activitesParJour}
            onChange={(e) => setActivitesParJour(Number(e.target.value))}
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          >
            <option value={0.2}>Peu (plage principalement)</option>
            <option value={0.5}>Modéré (1 activité / 2 jours)</option>
            <option value={1}>Actif (1 activité / jour)</option>
            <option value={1.5}>Très actif (plusieurs / jour)</option>
          </select>
        </div>
      </div>

      {/* Résultats */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="text-center p-4 bg-emerald-50 rounded-xl">
            <p className="text-sm text-emerald-600 font-medium">Budget total estimé</p>
            <p className="text-4xl font-bold text-emerald-700">{Math.round(totalGeneral).toLocaleString()}€</p>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-xl">
            <p className="text-sm text-blue-600 font-medium">Par personne</p>
            <p className="text-4xl font-bold text-blue-700">{Math.round(parPersonne).toLocaleString()}€</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-xl">
            <p className="text-sm text-purple-600 font-medium">Par jour (total)</p>
            <p className="text-4xl font-bold text-purple-700">{Math.round(parJour).toLocaleString()}€</p>
          </div>
        </div>

        <h4 className="font-semibold text-gray-900 mb-4">Détail du budget</h4>
        <div className="space-y-3">
          {[
            { label: 'Vols A/R', montant: totalVols, color: 'bg-red-100 text-red-700' },
            { label: `Hébergement (${duree - 1} nuits)`, montant: totalHebergement, color: 'bg-amber-100 text-amber-700' },
            { label: `Repas (${duree} jours)`, montant: totalRepas, color: 'bg-orange-100 text-orange-700' },
            { label: 'Transport sur place', montant: totalTransport, color: 'bg-blue-100 text-blue-700' },
            { label: `Activités (${nombreActivites})`, montant: totalActivites, color: 'bg-purple-100 text-purple-700' },
            { label: 'Divers & imprévus', montant: divers, color: 'bg-gray-100 text-gray-700' },
          ].map((item) => (
            <div key={item.label} className="flex justify-between items-center">
              <span className="text-gray-600">{item.label}</span>
              <span className={`px-3 py-1 rounded-full font-medium ${item.color}`}>
                {Math.round(item.montant).toLocaleString()}€
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Composant grille de prix
function PriceGrid() {
  const categories = [
    {
      title: 'Hébergement (par nuit)',
      icon: '🏨',
      items: [
        { name: 'Auberge de jeunesse / Dortoir', price: '15-25€' },
        { name: 'Guesthouse locale', price: '25-50€' },
        { name: 'Airbnb appartement', price: '40-80€' },
        { name: 'Hôtel 2-3 étoiles', price: '60-120€' },
        { name: 'Hôtel 4 étoiles', price: '120-250€' },
        { name: 'Resort 5 étoiles', price: '250-500€' },
        { name: 'Palace / Villa luxe', price: '500-1500€' },
      ],
    },
    {
      title: 'Restauration',
      icon: '🍽️',
      items: [
        { name: 'Dholl puri (street food)', price: '0.50-1€' },
        { name: 'Gâteau piment (beignet)', price: '0.30€' },
        { name: 'Bol renversé (plat local)', price: '3-5€' },
        { name: 'Mine frite (nouilles)', price: '3-6€' },
        { name: 'Repas resto local', price: '8-15€' },
        { name: 'Restaurant touristique', price: '20-40€' },
        { name: 'Restaurant gastronomique', price: '50-150€' },
        { name: 'Bière locale (Phoenix)', price: '2-4€' },
        { name: 'Cocktail bar/plage', price: '8-15€' },
        { name: 'Bouteille eau 1.5L', price: '0.50€' },
      ],
    },
    {
      title: 'Transport',
      icon: '🚗',
      items: [
        { name: 'Ticket bus', price: '0.50-1€' },
        { name: 'Taxi aéroport → hôtel', price: '30-60€' },
        { name: 'Course taxi (10km)', price: '10-20€' },
        { name: 'Location voiture / jour', price: '25-50€' },
        { name: 'Location scooter / jour', price: '15-25€' },
        { name: 'Essence (litre)', price: '1.40€' },
        { name: 'Uber (course moyenne)', price: '5-15€' },
        { name: 'Transfert privé aéroport', price: '50-80€' },
      ],
    },
    {
      title: 'Activités nautiques',
      icon: '🏄',
      items: [
        { name: 'Snorkeling (excursion)', price: '25-45€' },
        { name: 'Plongée bouteille', price: '50-80€' },
        { name: 'Catamaran journée', price: '80-120€' },
        { name: 'Sortie dauphins', price: '40-70€' },
        { name: 'Parasailing', price: '50-80€' },
        { name: 'Jet ski (30 min)', price: '60-100€' },
        { name: 'Kayak (heure)', price: '10-20€' },
        { name: 'Paddle (heure)', price: '15-25€' },
        { name: 'Cours kitesurf', price: '80-150€' },
        { name: 'Pêche au gros', price: '400-800€' },
      ],
    },
    {
      title: 'Activités terrestres',
      icon: '🌴',
      items: [
        { name: 'Quad (2h)', price: '60-100€' },
        { name: 'Tyrolienne / Zipline', price: '70-110€' },
        { name: 'Randonnée guidée', price: '30-60€' },
        { name: 'Casela Nature Parks', price: '30-50€' },
        { name: 'Jardin Pamplemousses', price: '5-10€' },
        { name: 'Chamarel (Terre 7 couleurs)', price: '10-15€' },
        { name: 'Tour de l\'île guidé', price: '60-100€' },
        { name: 'Cours de cuisine', price: '50-80€' },
        { name: 'Spa / Massage (1h)', price: '50-150€' },
        { name: 'Golf (18 trous)', price: '80-200€' },
      ],
    },
    {
      title: 'Divers',
      icon: '🛍️',
      items: [
        { name: 'Carte SIM locale (10Go)', price: '8-15€' },
        { name: 'Crème solaire', price: '8-15€' },
        { name: 'Masque snorkeling', price: '15-30€' },
        { name: 'T-shirt souvenir', price: '10-20€' },
        { name: 'Rhum arrangé (bouteille)', price: '10-25€' },
        { name: 'Thé Bois Chéri', price: '5-10€' },
        { name: 'Maquette bateau', price: '30-200€' },
        { name: 'Vanille (gousses)', price: '10-20€' },
      ],
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((cat) => (
        <div key={cat.title} className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4">
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-2xl">{cat.icon}</span>
              {cat.title}
            </h4>
          </div>
          <div className="p-4">
            <ul className="space-y-2">
              {cat.items.map((item) => (
                <li key={item.name} className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">{item.name}</span>
                  <span className="font-semibold text-emerald-600 whitespace-nowrap">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function BudgetMauricePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-emerald-200 text-sm font-medium mb-3">Mis à jour janvier 2026</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Quel budget prévoir pour<br />
            <span className="text-emerald-300">un voyage à l&apos;île Maurice ?</span>
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl leading-relaxed">
            Vols, hébergement, repas, activités, transport... Découvrez le coût réel d&apos;un séjour
            à Maurice avec notre calculateur interactif et tous les prix détaillés pour
            préparer votre budget en toute sérénité.
          </p>
        </div>
      </section>

      {/* Navigation sticky */}
      <nav className="bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <div className="flex flex-wrap gap-4 text-sm justify-center">
            <a href="#calculateur" className="text-gray-600 hover:text-emerald-600 font-medium">Calculateur</a>
            <a href="#1semaine" className="text-gray-600 hover:text-emerald-600 font-medium">Budget 1 semaine</a>
            <a href="#2semaines" className="text-gray-600 hover:text-emerald-600 font-medium">Budget 2 semaines</a>
            <a href="#destinations" className="text-gray-600 hover:text-emerald-600 font-medium">Par destination</a>
            <a href="#prix" className="text-gray-600 hover:text-emerald-600 font-medium">Tous les prix</a>
            <a href="#conseils" className="text-gray-600 hover:text-emerald-600 font-medium">Conseils</a>
            <a href="#faq" className="text-gray-600 hover:text-emerald-600 font-medium">FAQ</a>
          </div>
        </div>
      </nav>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            L&apos;île Maurice fait rêver, mais combien coûte réellement un voyage sur cette île paradisiaque
            de l&apos;océan Indien ? <strong>Bonne nouvelle</strong> : Maurice n&apos;est pas aussi cher qu&apos;on le pense.
            Si les hôtels de luxe affichent des tarifs élevés, le coût de la vie local reste abordable.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Comparé à la France, les restaurants sont <strong>54% moins chers</strong>, l&apos;alimentation
            <strong> 37% moins chère</strong>, et les loisirs <strong>61% moins chers</strong>. Seul
            l&apos;hébergement touristique tire les prix vers le haut (+43%), mais des alternatives
            économiques existent.
          </p>
          <div className="grid md:grid-cols-3 gap-4 my-8">
            <div className="bg-emerald-50 rounded-xl p-5 text-center">
              <p className="text-3xl font-bold text-emerald-600">1 800€</p>
              <p className="text-sm text-emerald-700">Budget routard / 2 sem.</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-5 text-center">
              <p className="text-3xl font-bold text-blue-600">3 500€</p>
              <p className="text-sm text-blue-700">Budget confort / 2 sem.</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-5 text-center">
              <p className="text-3xl font-bold text-purple-600">7 000€+</p>
              <p className="text-sm text-purple-700">Budget luxe / 2 sem.</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 text-center">
            * Estimations pour 2 personnes, vols inclus, depuis la France
          </p>
        </div>
      </section>

      {/* Calculateur */}
      <section id="calculateur" className="py-16 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Calculez votre budget personnalisé
          </h2>
          <BudgetCalculator />
        </div>
      </section>

      {/* Budget 1 semaine */}
      <section id="1semaine" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Budget pour 1 semaine à Maurice
          </h2>
          <p className="text-gray-600 mb-8">
            Une semaine permet de découvrir l&apos;essentiel de Maurice sans se presser. Voici les
            budgets types selon votre style de voyage (pour 2 personnes, vols inclus).
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Petit budget */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200">
              <div className="text-center mb-6">
                <span className="text-4xl">🎒</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2">Petit budget</h3>
                <p className="text-3xl font-bold text-green-600 mt-2">1 400 - 1 800€</p>
                <p className="text-sm text-gray-500">pour 2 personnes</p>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between">
                  <span className="text-gray-600">Vols A/R</span>
                  <span className="font-medium">1 300-1 600€</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Hébergement (6 nuits)</span>
                  <span className="font-medium">180-300€</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Repas (7 jours)</span>
                  <span className="font-medium">150-200€</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Transport (bus)</span>
                  <span className="font-medium">30-50€</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Activités (2-3)</span>
                  <span className="font-medium">100-150€</span>
                </li>
              </ul>
              <p className="mt-4 text-xs text-gray-500">
                Guesthouses, street food, bus, plages gratuites
              </p>
            </div>

            {/* Budget moyen */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-300 shadow-lg scale-105">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">Recommandé</span>
              </div>
              <div className="text-center mb-6">
                <span className="text-4xl">✈️</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2">Budget confort</h3>
                <p className="text-3xl font-bold text-blue-600 mt-2">2 500 - 3 500€</p>
                <p className="text-sm text-gray-500">pour 2 personnes</p>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between">
                  <span className="text-gray-600">Vols A/R</span>
                  <span className="font-medium">1 600-2 000€</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Hébergement (6 nuits)</span>
                  <span className="font-medium">600-900€</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Repas (7 jours)</span>
                  <span className="font-medium">350-500€</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Location voiture</span>
                  <span className="font-medium">200-300€</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Activités (4-5)</span>
                  <span className="font-medium">300-500€</span>
                </li>
              </ul>
              <p className="mt-4 text-xs text-gray-500">
                Hôtel 3★, restos locaux, voiture, excursions
              </p>
            </div>

            {/* Budget luxe */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200">
              <div className="text-center mb-6">
                <span className="text-4xl">💎</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2">Budget luxe</h3>
                <p className="text-3xl font-bold text-purple-600 mt-2">5 000 - 10 000€+</p>
                <p className="text-sm text-gray-500">pour 2 personnes</p>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between">
                  <span className="text-gray-600">Vols A/R (business)</span>
                  <span className="font-medium">2 500-5 000€</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Resort 5★ (6 nuits)</span>
                  <span className="font-medium">2 000-4 000€</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Repas gastronomiques</span>
                  <span className="font-medium">800-1 500€</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Transferts privés</span>
                  <span className="font-medium">200-400€</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Activités premium</span>
                  <span className="font-medium">1 000-2 000€</span>
                </li>
              </ul>
              <p className="mt-4 text-xs text-gray-500">
                Palace, gastronomie, spa, hélicoptère, yacht
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Budget 2 semaines */}
      <section id="2semaines" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Budget pour 2 semaines à Maurice
          </h2>
          <p className="text-gray-600 mb-8">
            Deux semaines est la durée idéale pour explorer Maurice en profondeur. Le budget
            n&apos;est pas le double d&apos;une semaine car les vols restent fixes.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Poste de dépense</th>
                  <th className="px-6 py-4 text-center">Petit budget</th>
                  <th className="px-6 py-4 text-center">Budget confort</th>
                  <th className="px-6 py-4 text-center">Budget luxe</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-6 py-4 font-medium">Vols A/R (2 pers.)</td>
                  <td className="px-6 py-4 text-center">1 300-1 600€</td>
                  <td className="px-6 py-4 text-center">1 600-2 000€</td>
                  <td className="px-6 py-4 text-center">2 500-5 000€</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Hébergement (13 nuits)</td>
                  <td className="px-6 py-4 text-center">400-650€</td>
                  <td className="px-6 py-4 text-center">1 200-2 000€</td>
                  <td className="px-6 py-4 text-center">4 000-8 000€</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Repas (14 jours)</td>
                  <td className="px-6 py-4 text-center">300-400€</td>
                  <td className="px-6 py-4 text-center">700-1 000€</td>
                  <td className="px-6 py-4 text-center">1 500-3 000€</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Transport</td>
                  <td className="px-6 py-4 text-center">60-100€</td>
                  <td className="px-6 py-4 text-center">400-600€</td>
                  <td className="px-6 py-4 text-center">500-1 000€</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Activités</td>
                  <td className="px-6 py-4 text-center">150-300€</td>
                  <td className="px-6 py-4 text-center">600-1 000€</td>
                  <td className="px-6 py-4 text-center">2 000-4 000€</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Divers</td>
                  <td className="px-6 py-4 text-center">100-150€</td>
                  <td className="px-6 py-4 text-center">200-400€</td>
                  <td className="px-6 py-4 text-center">500-1 000€</td>
                </tr>
                <tr className="bg-emerald-50 font-bold">
                  <td className="px-6 py-4">TOTAL (2 personnes)</td>
                  <td className="px-6 py-4 text-center text-emerald-700">2 300-3 200€</td>
                  <td className="px-6 py-4 text-center text-blue-700">4 700-7 000€</td>
                  <td className="px-6 py-4 text-center text-purple-700">11 000-22 000€</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="px-6 py-4 text-sm text-gray-600">Par personne</td>
                  <td className="px-6 py-4 text-center text-sm">1 150-1 600€</td>
                  <td className="px-6 py-4 text-center text-sm">2 350-3 500€</td>
                  <td className="px-6 py-4 text-center text-sm">5 500-11 000€</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Budget par destination */}
      <section id="destinations" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Budget selon votre destination
          </h2>
          <p className="text-gray-600 mb-8">
            Le coût de votre séjour varie significativement selon la région choisie. Voici
            un aperçu des prix moyens par destination.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="px-4 py-4 text-left">Destination</th>
                  <th className="px-4 py-4 text-center">Niveau prix</th>
                  <th className="px-4 py-4 text-center">Hébergement/nuit</th>
                  <th className="px-4 py-4 text-center">Repas/jour</th>
                  <th className="px-4 py-4 text-left">Remarque</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {budgetParDestination.map((dest) => (
                  <tr key={dest.slug} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <Link href={`/que-faire-${dest.slug}`} className="font-medium text-cyan-600 hover:text-cyan-700">
                        {dest.destination}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        dest.budget === '€' ? 'bg-green-100 text-green-700' :
                        dest.budget === '€€' ? 'bg-blue-100 text-blue-700' :
                        dest.budget === '€€€' ? 'bg-orange-100 text-orange-700' :
                        'bg-purple-100 text-purple-700'
                      }`}>
                        {dest.budget}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center text-sm">{dest.hebergement}</td>
                    <td className="px-4 py-3 text-center text-sm">{dest.repas}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{dest.commentaire}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-amber-50 rounded-2xl">
            <h3 className="font-bold text-gray-900 mb-3">Astuce budget malin</h3>
            <p className="text-gray-700">
              Pour optimiser votre budget, combinez les régions : séjournez à <Link href="/que-faire-flic-en-flac" className="text-cyan-600 hover:underline">Flic-en-Flac</Link> ou
              <Link href="/blue-bay-ile-maurice" className="text-cyan-600 hover:underline"> Blue Bay</Link> (économiques) et faites des excursions
              à la journée vers les zones plus chères comme <Link href="/que-faire-belle-mare" className="text-cyan-600 hover:underline">Belle Mare</Link> ou
              <Link href="/que-faire-le-morne" className="text-cyan-600 hover:underline"> Le Morne</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Budget activités */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Budget activités à Maurice
          </h2>
          <p className="text-gray-600 mb-8">
            Les activités représentent souvent 15-25% du budget total. Voici les prix moyens
            pour planifier vos excursions.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Activités gratuites */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">🆓</span> Activités gratuites
              </h3>
              <ul className="space-y-3">
                {[
                  'Toutes les plages publiques',
                  'Randonnée au Morne Brabant',
                  'Gorges de la Rivière Noire',
                  'Visite de Port Louis (marché, Chinatown)',
                  'Salines de Tamarin',
                  'Gris-Gris et côte sauvage',
                  'Couchers de soleil à Flic-en-Flac',
                  'Snorkeling (si équipement perso)',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Activités populaires */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">⭐</span> Activités populaires
              </h3>
              <ul className="space-y-3">
                {[
                  { name: 'Catamaran Île aux Cerfs', price: '80-120€', link: '/que-faire-ile-aux-cerfs' },
                  { name: 'Nage avec les dauphins', price: '40-70€', link: '/que-faire-tamarin' },
                  { name: 'Plongée sous-marine', price: '50-80€', link: '/que-faire-flic-en-flac' },
                  { name: 'Quad dans le Sud', price: '60-100€', link: '/que-faire-chamouny' },
                  { name: 'Tyrolienne Casela', price: '70-110€', link: null },
                  { name: 'Tour en hélicoptère', price: '200-400€', link: null },
                  { name: 'Canyoning 7 Cascades', price: '80-120€', link: '/que-faire-chutes-tamarin' },
                  { name: 'Cours de kitesurf', price: '80-150€', link: '/que-faire-le-morne' },
                ].map((item) => (
                  <li key={item.name} className="flex justify-between items-center">
                    {item.link ? (
                      <Link href={item.link} className="text-cyan-600 hover:text-cyan-700">
                        {item.name}
                      </Link>
                    ) : (
                      <span className="text-gray-700">{item.name}</span>
                    )}
                    <span className="font-semibold text-emerald-600">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/activites-ile-maurice"
              className="inline-flex items-center gap-2 bg-cyan-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-cyan-700 transition-colors"
            >
              Voir toutes nos activités
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Grille de tous les prix */}
      <section id="prix" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Tous les prix à Maurice
          </h2>
          <p className="text-gray-600 mb-10 text-center max-w-2xl mx-auto">
            Liste exhaustive des prix pour planifier votre budget dans les moindres détails.
            Prix indicatifs en euros, janvier 2026.
          </p>
          <PriceGrid />
        </div>
      </section>

      {/* Conseils économies */}
      <section id="conseils" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            10 conseils pour réduire votre budget
          </h2>

          <div className="space-y-6">
            {[
              {
                title: 'Voyagez en basse saison (juin-septembre)',
                desc: 'Les vols sont 20-30% moins chers, les hôtels jusqu\'à 40% moins chers. Le climat reste agréable (hiver austral sec).',
              },
              {
                title: 'Réservez vos vols 3-4 mois à l\'avance',
                desc: 'Les meilleurs tarifs se trouvent généralement 12-16 semaines avant le départ. Utilisez les alertes de prix.',
              },
              {
                title: 'Privilégiez les guesthouses aux hôtels',
                desc: 'Les chambres d\'hôtes locales offrent authenticité et économies (30-50€/nuit vs 100-150€ en hôtel).',
              },
              {
                title: 'Mangez comme les Mauriciens',
                desc: 'Le dholl puri (0.50€), le bol renversé (4€) ou le mine frite (5€) sont délicieux et économiques.',
              },
              {
                title: 'Louez une voiture plutôt que des taxis',
                desc: 'À partir de 25€/jour, la voiture revient moins cher dès 2-3 déplacements quotidiens.',
              },
              {
                title: 'Profitez des plages gratuites',
                desc: 'Toutes les plages mauriciennes sont publiques et gratuites. Emportez votre masque de snorkeling.',
              },
              {
                title: 'Achetez une carte SIM locale',
                desc: 'Pour 10-15€, vous avez 10Go de data. Évitez les forfaits roaming hors de prix.',
              },
              {
                title: 'Négociez les excursions sur place',
                desc: 'Les prix affichés sont souvent négociables de 10-20%, surtout hors saison.',
              },
              {
                title: 'Évitez les hôtels all-inclusive',
                desc: 'Vous économiserez en mangeant local et vous découvrirez la vraie cuisine mauricienne.',
              },
              {
                title: 'Faites vos courses au marché',
                desc: 'Fruits tropicaux, légumes frais à prix locaux. Le marché de Port Louis est le moins cher.',
              },
            ].map((conseil, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{conseil.title}</h3>
                  <p className="text-gray-600">{conseil.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monnaie et paiement */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Monnaie et moyens de paiement
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-amber-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">💰</span> La Roupie Mauricienne (MUR)
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Taux de change :</strong> 1€ ≈ 48-50 MUR</li>
                <li><strong>Billets :</strong> 25, 50, 100, 200, 500, 1000, 2000 MUR</li>
                <li><strong>Où changer :</strong> Banques, bureaux de change (évitez l&apos;aéroport)</li>
                <li><strong>Conseil :</strong> Retirez aux DAB pour le meilleur taux</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">💳</span> Paiements
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Cartes :</strong> Visa/Mastercard acceptées partout (hôtels, restos)</li>
                <li><strong>Frais :</strong> Comptez 1-2% de frais bancaires</li>
                <li><strong>Cash :</strong> Indispensable pour marchés, petits commerces, taxis</li>
                <li><strong>Pourboires :</strong> 10% appréciés mais non obligatoires</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Questions fréquentes sur le budget
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'Quel budget minimum pour Maurice ?',
                a: 'Pour 2 personnes pendant 1 semaine, comptez minimum 1 400€ (vols compris) en mode routard : guesthouses, street food, bus et plages gratuites. C\'est serré mais faisable hors haute saison.',
              },
              {
                q: 'Maurice est-il cher comparé à d\'autres destinations ?',
                a: 'Maurice est moins cher que les Maldives ou les Seychelles, comparable à la Thaïlande pour le coût de vie local, mais les vols depuis l\'Europe sont plus onéreux (650-1400€ A/R).',
              },
              {
                q: 'Vaut-il mieux réserver en France ou sur place ?',
                a: 'Les vols et hébergements sont généralement moins chers réservés à l\'avance depuis la France. En revanche, les activités et excursions peuvent être négociées sur place.',
              },
              {
                q: 'Combien prévoir pour les activités ?',
                a: 'Comptez 50-150€/personne pour une activité type (catamaran, plongée, quad). Pour 2 semaines actives, prévoyez 400-800€/personne d\'activités.',
              },
              {
                q: 'La nourriture est-elle chère à Maurice ?',
                a: 'Non ! La street food locale coûte 2-5€/repas. Les restaurants touristiques sont à 15-30€. Seuls les restos gastronomiques ou d\'hôtels sont chers (50-150€).',
              },
              {
                q: 'Faut-il louer une voiture ?',
                a: 'Fortement recommandé pour explorer l\'île librement. À 25-50€/jour, c\'est rentable dès 2-3 déplacements quotidiens. Sans voiture, vous dépendez des bus (lents) ou taxis (chers).',
              },
              {
                q: 'Quand partir pour économiser ?',
                a: 'La basse saison (juin-septembre) offre les meilleurs tarifs : vols 20-30% moins chers, hôtels -30 à -40%. C\'est l\'hiver austral mais le climat reste agréable.',
              },
              {
                q: 'Peut-on payer en euros à Maurice ?',
                a: 'Certains hôtels et commerces touristiques acceptent les euros, mais à un taux défavorable. Privilégiez la roupie mauricienne (MUR) pour de meilleurs prix.',
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
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à planifier votre voyage ?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Maintenant que vous connaissez les prix, découvrez nos itinéraires pour organiser
            votre séjour jour par jour.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/itineraires-ile-maurice"
              className="bg-white text-emerald-700 px-6 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition-colors shadow-lg"
            >
              Voir les itinéraires
            </Link>
            <Link
              href="/activites-ile-maurice"
              className="bg-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-400 transition-colors border border-emerald-400"
            >
              Réserver des activités
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
