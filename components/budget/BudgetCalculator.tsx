'use client';

import { useState } from 'react';

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

export default function BudgetCalculator() {
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

