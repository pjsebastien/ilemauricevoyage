'use client';

import { useState } from 'react';
import Link from 'next/link';

// Composant section accordéon
function InfoSection({
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
function Checklist({ items }: { items: string[] }) {
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

// Composant info box
function InfoBox({ type, children }: { type: 'info' | 'warning' | 'success' | 'tip'; children: React.ReactNode }) {
  const styles = {
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    warning: 'bg-amber-50 border-amber-200 text-amber-800',
    success: 'bg-green-50 border-green-200 text-green-800',
    tip: 'bg-purple-50 border-purple-200 text-purple-800',
  };
  const icons = {
    info: 'ℹ️',
    warning: '⚠️',
    success: '✅',
    tip: '💡',
  };

  return (
    <div className={`p-4 rounded-xl border-2 ${styles[type]} my-4`}>
      <div className="flex gap-3">
        <span className="text-xl">{icons[type]}</span>
        <div className="text-sm">{children}</div>
      </div>
    </div>
  );
}

// Convertisseur de devises interactif
function CurrencyConverter() {
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
function TimezoneCalculator() {
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

// Numéros d'urgence
const emergencyNumbers = [
  { service: 'Police', number: '999 / 112', icon: '👮' },
  { service: 'SAMU / Ambulance', number: '114', icon: '🚑' },
  { service: 'Pompiers', number: '115', icon: '🚒' },
  { service: 'Garde côtière', number: '212 2747', icon: '⚓' },
  { service: 'Renseignements', number: '150', icon: '📞' },
  { service: 'Ambassade de France', number: '+230 202 0100', icon: '🇫🇷' },
];

// Données opérateurs télécom
const telecomOperators = [
  {
    name: 'Emtel',
    coverage: '4G/5G',
    tourist: 'Emtel Tourist SIM',
    price: '500-1000 MUR (10-20€)',
    data: '5-15 Go',
    where: 'Aéroport, boutiques Emtel',
  },
  {
    name: 'my.t (Mauritius Telecom)',
    coverage: '4G/5G',
    tourist: 'Tourist Pack',
    price: '400-800 MUR (8-16€)',
    data: '3-10 Go',
    where: 'Aéroport, centres commerciaux',
  },
  {
    name: 'CHILI',
    coverage: '4G',
    tourist: 'Prepaid SIM',
    price: '300-600 MUR (6-12€)',
    data: '2-8 Go',
    where: 'Supermarchés, stations essence',
  },
];

// Hôpitaux principaux
const hospitals = [
  { name: 'Clinique Darné', location: 'Floréal (centre)', phone: '+230 601 2300', type: 'Privée' },
  { name: 'Apollo Bramwell Hospital', location: 'Moka (centre)', phone: '+230 605 1000', type: 'Privée' },
  { name: 'City Clinic', location: 'Port Louis', phone: '+230 217 2532', type: 'Privée' },
  { name: 'Wellkin Hospital', location: 'Moka', phone: '+230 605 1900', type: 'Privée' },
  { name: 'Hôpital Dr. Jeetoo', location: 'Port Louis', phone: '+230 212 3201', type: 'Public' },
  { name: 'Hôpital Victoria', location: 'Candos', phone: '+230 425 3031', type: 'Public' },
];

export default function InfosPratiquesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-700 text-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-teal-200 text-sm font-medium mb-3">Mis à jour janvier 2026</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Infos pratiques<br />
            <span className="text-cyan-300">pour voyager à Maurice</span>
          </h1>
          <p className="text-xl text-cyan-100 max-w-3xl leading-relaxed">
            Visa, santé, argent, téléphone, conduite, sécurité... Toutes les informations
            essentielles pour préparer votre voyage à l&apos;île Maurice en toute sérénité.
          </p>
        </div>
      </section>

      {/* Navigation rapide */}
      <nav className="bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <div className="flex flex-wrap gap-3 text-sm justify-center">
            {[
              { id: 'visa', label: '🛂 Visa' },
              { id: 'sante', label: '🏥 Santé' },
              { id: 'argent', label: '💰 Argent' },
              { id: 'telephone', label: '📱 Téléphone' },
              { id: 'voiture', label: '🚗 Voiture' },
              { id: 'securite', label: '🛡️ Sécurité' },
              { id: 'pratique', label: '⚡ Pratique' },
              { id: 'valise', label: '🧳 Valise' },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="px-3 py-1 bg-gray-100 rounded-full hover:bg-cyan-100 hover:text-cyan-700 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Contenu principal */}
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">

        {/* VISA ET ENTRÉE */}
        <InfoSection id="visa" icon="🛂" title="Visa et formalités d'entrée" defaultOpen={true}>
          <div className="mt-4 space-y-4">
            <InfoBox type="success">
              <strong>Bonne nouvelle !</strong> Les ressortissants français, belges, suisses et canadiens
              n&apos;ont <strong>pas besoin de visa</strong> pour un séjour touristique jusqu&apos;à 90 jours.
            </InfoBox>

            <h3 className="font-bold text-gray-900 mt-6 mb-3">Documents requis à l&apos;arrivée</h3>
            <Checklist items={[
              'Passeport valide 6 mois après la date de retour',
              'Billet d\'avion retour ou de continuation',
              'Justificatif d\'hébergement (réservation hôtel)',
              'Preuve de fonds suffisants (carte bancaire, espèces)',
            ]} />

            <h3 className="font-bold text-gray-900 mt-6 mb-3">Procédure à l&apos;aéroport</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Remplir le formulaire d&apos;immigration (distribué dans l&apos;avion ou à l&apos;arrivée)</li>
              <li>Passer le contrôle des passeports (file &quot;All Passports&quot;)</li>
              <li>Récupérer vos bagages</li>
              <li>Passer la douane (rien à déclarer = file verte)</li>
            </ol>

            <InfoBox type="info">
              <strong>Durée du contrôle :</strong> Comptez 30-60 minutes entre l&apos;atterrissage et la sortie
              de l&apos;aéroport, selon l&apos;affluence.
            </InfoBox>

            <h3 className="font-bold text-gray-900 mt-6 mb-3">Douanes : ce qu&apos;on peut ramener</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-xl">
                <h4 className="font-semibold text-green-800 mb-2">✅ Autorisé (par personne)</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• 200 cigarettes ou 50 cigares</li>
                  <li>• 1L d&apos;alcool fort + 2L de vin</li>
                  <li>• 250ml de parfum</li>
                  <li>• Cadeaux jusqu&apos;à 430€</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-xl">
                <h4 className="font-semibold text-red-800 mb-2">❌ Interdit</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Drogues (tolérance zéro)</li>
                  <li>• Armes</li>
                  <li>• Contrefaçons</li>
                  <li>• Plantes, graines, fruits frais</li>
                  <li>• Viande, produits laitiers</li>
                </ul>
              </div>
            </div>

            <InfoBox type="warning">
              <strong>Attention :</strong> Les contrôles douaniers peuvent être stricts. Ne transportez
              jamais de colis pour un tiers. Les peines pour trafic de drogue sont très sévères à Maurice.
            </InfoBox>
          </div>
        </InfoSection>

        {/* SANTÉ */}
        <InfoSection id="sante" icon="🏥" title="Santé et vaccinations">
          <div className="mt-4 space-y-4">
            <h3 className="font-bold text-gray-900 mb-3">Vaccinations</h3>
            <InfoBox type="success">
              <strong>Aucun vaccin obligatoire</strong> pour entrer à Maurice (sauf fièvre jaune si
              vous venez d&apos;une zone endémique). Pas de paludisme à Maurice.
            </InfoBox>

            <h4 className="font-semibold text-gray-800 mt-4 mb-2">Vaccins recommandés (à jour)</h4>
            <Checklist items={[
              'DTP (Diphtérie, Tétanos, Polio)',
              'Hépatite A',
              'Hépatite B (séjours longs ou répétés)',
              'Typhoïde (si séjour en conditions précaires)',
            ]} />

            <h3 className="font-bold text-gray-900 mt-6 mb-3">Risques sanitaires</h3>
            <div className="space-y-3">
              <div className="p-4 bg-amber-50 rounded-xl">
                <h4 className="font-semibold text-amber-800">🦟 Dengue et Chikungunya</h4>
                <p className="text-sm text-amber-700 mt-1">
                  Présents à Maurice (moustiques de jour). Utilisez du répulsif et portez des vêtements
                  longs le soir. Pas de vaccin disponible.
                </p>
              </div>
              <div className="p-4 bg-blue-50 rounded-xl">
                <h4 className="font-semibold text-blue-800">☀️ Soleil et chaleur</h4>
                <p className="text-sm text-blue-700 mt-1">
                  Indice UV très élevé. Crème solaire 50+, chapeau, lunettes et hydratation sont essentiels.
                  Évitez l&apos;exposition entre 11h et 15h.
                </p>
              </div>
              <div className="p-4 bg-cyan-50 rounded-xl">
                <h4 className="font-semibold text-cyan-800">🌊 Vie marine</h4>
                <p className="text-sm text-cyan-700 mt-1">
                  Oursins, poissons-pierres et méduses occasionnelles. Portez des chaussures d&apos;eau
                  dans les zones rocheuses. En cas de piqûre, consultez rapidement.
                </p>
              </div>
            </div>

            <h3 className="font-bold text-gray-900 mt-6 mb-3">Eau et alimentation</h3>
            <InfoBox type="info">
              L&apos;<strong>eau du robinet est potable</strong> à Maurice, mais son goût chloré peut déplaire.
              L&apos;eau en bouteille est peu chère (0.50€/1.5L). La nourriture locale est généralement sûre.
            </InfoBox>

            <h3 className="font-bold text-gray-900 mt-6 mb-3">Hôpitaux et cliniques</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-3 py-2 text-left">Établissement</th>
                    <th className="px-3 py-2 text-left">Localisation</th>
                    <th className="px-3 py-2 text-left">Type</th>
                    <th className="px-3 py-2 text-left">Téléphone</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {hospitals.map((h) => (
                    <tr key={h.name}>
                      <td className="px-3 py-2 font-medium">{h.name}</td>
                      <td className="px-3 py-2 text-gray-600">{h.location}</td>
                      <td className="px-3 py-2">
                        <span className={`px-2 py-0.5 rounded text-xs ${h.type === 'Privée' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}`}>
                          {h.type}
                        </span>
                      </td>
                      <td className="px-3 py-2 text-gray-600">{h.phone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <InfoBox type="tip">
              <strong>Conseil :</strong> Souscrivez une assurance voyage avec rapatriement.
              Les cliniques privées offrent d&apos;excellents soins mais sont chères (consultation ~50-100€).
              Conservez toutes les factures pour remboursement.
            </InfoBox>

            <h3 className="font-bold text-gray-900 mt-6 mb-3">Pharmacies</h3>
            <p className="text-gray-700">
              Pharmacies nombreuses dans toutes les villes. Médicaments courants disponibles sans
              ordonnance. Emportez vos traitements habituels avec l&apos;ordonnance (en anglais de préférence).
            </p>
          </div>
        </InfoSection>

        {/* ARGENT */}
        <InfoSection id="argent" icon="💰" title="Argent et moyens de paiement">
          <div className="mt-4 space-y-4">
            <h3 className="font-bold text-gray-900 mb-3">La Roupie Mauricienne (MUR)</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-emerald-50 p-4 rounded-xl">
                <h4 className="font-semibold text-emerald-800 mb-2">Billets</h4>
                <p className="text-sm text-emerald-700">25, 50, 100, 200, 500, 1000, 2000 MUR</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-xl">
                <h4 className="font-semibold text-amber-800 mb-2">Pièces</h4>
                <p className="text-sm text-amber-700">5, 10, 20 cents + 1, 5, 10, 20 MUR</p>
              </div>
            </div>

            <CurrencyConverter />

            <h3 className="font-bold text-gray-900 mt-6 mb-3">Où changer / retirer de l&apos;argent</h3>
            <div className="space-y-3">
              <div className="flex gap-4 items-start">
                <span className="text-2xl">🏧</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Distributeurs (ATM)</h4>
                  <p className="text-sm text-gray-600">
                    Partout (aéroport, villes, centres commerciaux). Meilleur taux. Frais bancaires
                    variables selon votre banque (1-3€/retrait). Plafond souvent 10 000-15 000 MUR.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl">🏦</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Bureaux de change</h4>
                  <p className="text-sm text-gray-600">
                    En ville et centres commerciaux. Taux correct mais commission possible.
                    Évitez l&apos;aéroport (taux défavorable).
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl">💳</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Cartes bancaires</h4>
                  <p className="text-sm text-gray-600">
                    Visa et Mastercard acceptées partout (hôtels, restos, commerces).
                    Frais de paiement à l&apos;étranger selon votre banque (1-2%).
                  </p>
                </div>
              </div>
            </div>

            <InfoBox type="tip">
              <strong>Astuce :</strong> Utilisez une banque en ligne (N26, Revolut, Boursorama...)
              pour éviter les frais de change. Retirez en roupies, payez par carte.
            </InfoBox>

            <h3 className="font-bold text-gray-900 mt-6 mb-3">Pourboires</h3>
            <p className="text-gray-700 mb-3">
              Les pourboires ne sont pas obligatoires mais appréciés. Voici les usages :
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { service: 'Restaurant', tip: '10% si service non inclus' },
                { service: 'Hôtel (bagagiste)', tip: '50-100 MUR (1-2€)' },
                { service: 'Chauffeur excursion', tip: '200-500 MUR (4-10€)' },
                { service: 'Guide', tip: '300-500 MUR (6-10€)' },
                { service: 'Taxi', tip: 'Arrondir au supérieur' },
                { service: 'Femme de chambre', tip: '100-200 MUR/jour' },
              ].map((item) => (
                <div key={item.service} className="flex justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">{item.service}</span>
                  <span className="font-medium text-gray-900">{item.tip}</span>
                </div>
              ))}
            </div>

            <InfoBox type="info">
              <strong>Payer en euros ?</strong> Certains commerces touristiques acceptent les euros,
              mais à un taux défavorable. Préférez toujours payer en roupies.
            </InfoBox>

            <div className="mt-4">
              <Link href="/budget-ile-maurice" className="text-cyan-600 hover:text-cyan-700 font-medium flex items-center gap-2">
                Voir notre page budget détaillée
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </InfoSection>

        {/* TÉLÉPHONE ET INTERNET */}
        <InfoSection id="telephone" icon="📱" title="Téléphone et internet">
          <div className="mt-4 space-y-4">
            <h3 className="font-bold text-gray-900 mb-3">Carte SIM locale : la meilleure option</h3>
            <InfoBox type="success">
              <strong>Notre recommandation :</strong> Achetez une carte SIM locale dès l&apos;aéroport.
              Pour 10-20€, vous avez 5-15 Go de data et appels locaux. Bien plus économique que le roaming !
            </InfoBox>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-3 py-2 text-left">Opérateur</th>
                    <th className="px-3 py-2 text-left">Offre touriste</th>
                    <th className="px-3 py-2 text-left">Prix</th>
                    <th className="px-3 py-2 text-left">Data</th>
                    <th className="px-3 py-2 text-left">Réseau</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {telecomOperators.map((op) => (
                    <tr key={op.name}>
                      <td className="px-3 py-2 font-medium">{op.name}</td>
                      <td className="px-3 py-2 text-gray-600">{op.tourist}</td>
                      <td className="px-3 py-2 text-emerald-600 font-medium">{op.price}</td>
                      <td className="px-3 py-2">{op.data}</td>
                      <td className="px-3 py-2">
                        <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs">{op.coverage}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h4 className="font-semibold text-gray-800 mt-4 mb-2">Où acheter une carte SIM</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>À l&apos;aéroport SSR : comptoirs Emtel et my.t (24h/24)</li>
              <li>Boutiques opérateurs en ville</li>
              <li>Supermarchés (Super U, Jumbo, Winners)</li>
              <li>Stations essence</li>
            </ul>

            <InfoBox type="info">
              <strong>Documents nécessaires :</strong> Passeport uniquement. L&apos;activation est immédiate.
              Le vendeur configure souvent la carte pour vous.
            </InfoBox>

            <h3 className="font-bold text-gray-900 mt-6 mb-3">Roaming depuis la France</h3>
            <p className="text-gray-700 mb-3">
              Maurice n&apos;est <strong>pas inclus</strong> dans le roaming européen. Vérifiez votre forfait :
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-red-50 rounded-xl">
                <h4 className="font-semibold text-red-800">❌ Sans option</h4>
                <p className="text-sm text-red-700">Data : 10-15€/Mo (!). Appels : 2-3€/min</p>
              </div>
              <div className="p-4 bg-green-50 rounded-xl">
                <h4 className="font-semibold text-green-800">✅ Pass destination</h4>
                <p className="text-sm text-green-700">~10-20€/semaine pour quelques Go</p>
              </div>
            </div>

            <h3 className="font-bold text-gray-900 mt-6 mb-3">WiFi</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li><strong>Hôtels :</strong> WiFi gratuit presque partout (parfois lent)</li>
              <li><strong>Restaurants :</strong> Souvent disponible, demander le mot de passe</li>
              <li><strong>Aéroport :</strong> WiFi gratuit (30 min, puis payant)</li>
              <li><strong>Plages :</strong> Pas de WiFi public</li>
            </ul>

            <h3 className="font-bold text-gray-900 mt-6 mb-3">Appeler Maurice depuis la France</h3>
            <p className="text-gray-700">
              Indicatif : <strong>+230</strong> suivi du numéro à 8 chiffres.<br />
              Exemple : +230 5XXX XXXX (mobile) ou +230 2XX XXXX (fixe)
            </p>
          </div>
        </InfoSection>

        {/* VOITURE ET CONDUITE */}
        <InfoSection id="voiture" icon="🚗" title="Location de voiture et conduite">
          <div className="mt-4 space-y-4">
            <InfoBox type="warning">
              <strong>Important :</strong> À Maurice, on roule à <strong>GAUCHE</strong> (comme au Royaume-Uni).
              Les voitures ont le volant à droite.
            </InfoBox>

            <h3 className="font-bold text-gray-900 mb-3">Permis de conduire</h3>
            <p className="text-gray-700">
              Votre <strong>permis français</strong> (ou européen) est valable à Maurice pour les séjours
              touristiques de moins de 3 mois. Pas besoin de permis international.
            </p>

            <h3 className="font-bold text-gray-900 mt-6 mb-3">Location de voiture</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Prix moyens</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>Citadine : 25-35€/jour</li>
                  <li>SUV : 40-60€/jour</li>
                  <li>Automatique : +10-15€/jour</li>
                  <li>Assurance tous risques : +10-15€/jour</li>
                </ul>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Conditions</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>Âge minimum : 21-23 ans</li>
                  <li>Permis depuis 1-2 ans</li>
                  <li>Carte bancaire (caution)</li>
                  <li>Passeport</li>
                </ul>
              </div>
            </div>

            <h4 className="font-semibold text-gray-800 mt-4 mb-2">Loueurs recommandés</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li><strong>Internationaux :</strong> Hertz, Avis, Europcar, Sixt (à l&apos;aéroport)</li>
              <li><strong>Locaux :</strong> ABC Car Rental, Maki Car Rental, Pingouin (souvent moins chers)</li>
            </ul>

            <InfoBox type="tip">
              <strong>Conseil :</strong> Réservez à l&apos;avance en ligne (meilleurs prix). Prenez des photos
              de la voiture avant de partir. L&apos;assurance tous risques est recommandée vu l&apos;état des routes.
            </InfoBox>

            <h3 className="font-bold text-gray-900 mt-6 mb-3">Règles de conduite</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Limitations de vitesse</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>Ville : 40 km/h</li>
                  <li>Route : 60-80 km/h</li>
                  <li>Autoroute : 110 km/h</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">À savoir</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>Ceinture obligatoire</li>
                  <li>Téléphone interdit au volant</li>
                  <li>Alcool : 0.5 g/L max</li>
                  <li>Priorité à droite aux ronds-points</li>
                </ul>
              </div>
            </div>

            <h3 className="font-bold text-gray-900 mt-6 mb-3">État des routes</h3>
            <p className="text-gray-700 mb-3">
              Les routes principales sont correctes mais étroites et sinueuses. Attention aux :
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Nids de poule (surtout après la pluie)</li>
              <li>Chiens errants et animaux sur la route</li>
              <li>Motos et scooters qui doublent partout</li>
              <li>Piétons sur les bas-côtés</li>
              <li>Camions de canne à sucre (lents)</li>
            </ul>

            <InfoBox type="info">
              <strong>Temps de trajet :</strong> Comptez 1h30-2h pour traverser l&apos;île du nord au sud.
              Les embouteillages autour de Port Louis peuvent doubler les temps de trajet aux heures de pointe.
            </InfoBox>

            <h3 className="font-bold text-gray-900 mt-6 mb-3">Essence</h3>
            <p className="text-gray-700">
              Prix : environ <strong>1.40€/litre</strong>. Stations-service nombreuses.
              La plupart acceptent les cartes bancaires. Certaines ferment tôt (19h).
            </p>

            <h3 className="font-bold text-gray-900 mt-6 mb-3">Alternatives à la voiture</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-xl text-center">
                <span className="text-3xl">🚌</span>
                <h4 className="font-semibold text-blue-900 mt-2">Bus</h4>
                <p className="text-sm text-blue-700">0.50-1€. Lent mais économique.</p>
              </div>
              <div className="p-4 bg-amber-50 rounded-xl text-center">
                <span className="text-3xl">🚕</span>
                <h4 className="font-semibold text-amber-900 mt-2">Taxi</h4>
                <p className="text-sm text-amber-700">Négocier avant. Comptez 30-40€ aéroport.</p>
              </div>
              <div className="p-4 bg-green-50 rounded-xl text-center">
                <span className="text-3xl">🛵</span>
                <h4 className="font-semibold text-green-900 mt-2">Scooter</h4>
                <p className="text-sm text-green-700">15-25€/jour. Casque obligatoire.</p>
              </div>
            </div>
          </div>
        </InfoSection>

        {/* SÉCURITÉ */}
        <InfoSection id="securite" icon="🛡️" title="Sécurité">
          <div className="mt-4 space-y-4">
            <InfoBox type="success">
              <strong>Maurice est une destination sûre.</strong> La criminalité violente est rare.
              Les principaux risques sont les vols à la tire dans les zones touristiques.
            </InfoBox>

            <h3 className="font-bold text-gray-900 mb-3">Précautions de base</h3>
            <Checklist items={[
              'Ne pas laisser d\'objets de valeur visibles dans la voiture',
              'Utiliser le coffre-fort de l\'hôtel',
              'Éviter de montrer des signes de richesse',
              'Ne pas se promener seul(e) la nuit dans les zones isolées',
              'Faire attention aux pickpockets dans les marchés',
              'Garder une copie de votre passeport séparément',
            ]} />

            <h3 className="font-bold text-gray-900 mt-6 mb-3">Zones à éviter</h3>
            <p className="text-gray-700 mb-3">
              Aucune zone n&apos;est réellement dangereuse, mais soyez plus vigilant dans :
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Certains quartiers de Port Louis la nuit</li>
              <li>Les plages isolées après le coucher du soleil</li>
              <li>Les zones de forte affluence (pickpockets)</li>
            </ul>

            <h3 className="font-bold text-gray-900 mt-6 mb-3">Numéros d&apos;urgence</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {emergencyNumbers.map((e) => (
                <div key={e.service} className="flex items-center gap-3 p-3 bg-red-50 rounded-xl">
                  <span className="text-2xl">{e.icon}</span>
                  <div>
                    <p className="font-medium text-gray-900">{e.service}</p>
                    <p className="text-red-700 font-bold">{e.number}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="font-bold text-gray-900 mt-6 mb-3">Risques naturels</h3>
            <div className="space-y-3">
              <div className="p-4 bg-blue-50 rounded-xl">
                <h4 className="font-semibold text-blue-800">🌀 Cyclones (janvier-mars)</h4>
                <p className="text-sm text-blue-700 mt-1">
                  Saison cyclonique de novembre à avril. Les hôtels ont des procédures en cas d&apos;alerte.
                  Suivez les consignes des autorités locales (alertes 1 à 4).
                </p>
              </div>
              <div className="p-4 bg-amber-50 rounded-xl">
                <h4 className="font-semibold text-amber-800">🌊 Courants marins</h4>
                <p className="text-sm text-amber-700 mt-1">
                  Certaines plages ont des courants forts, surtout sur la côte sud.
                  Respectez les drapeaux et évitez de nager hors des zones surveillées.
                </p>
              </div>
            </div>

            <h3 className="font-bold text-gray-900 mt-6 mb-3">Assurance voyage</h3>
            <InfoBox type="warning">
              <strong>Fortement recommandée !</strong> Souscrivez une assurance couvrant :
              frais médicaux, rapatriement, annulation, bagages. Vérifiez si votre carte bancaire
              n&apos;offre pas déjà une couverture.
            </InfoBox>
          </div>
        </InfoSection>

        {/* INFOS PRATIQUES */}
        <InfoSection id="pratique" icon="⚡" title="Informations pratiques">
          <div className="mt-4 space-y-4">

            <h3 className="font-bold text-gray-900 mb-3">Électricité</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-yellow-50 rounded-xl">
                <h4 className="font-semibold text-yellow-800 mb-2">Prises électriques</h4>
                <p className="text-sm text-yellow-700">
                  <strong>Type G</strong> (britannique, 3 broches rectangulaires).<br />
                  Voltage : 220V / 50Hz
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-xl">
                <h4 className="font-semibold text-green-800 mb-2">Adaptateur</h4>
                <p className="text-sm text-green-700">
                  <strong>Indispensable</strong> pour les appareils français.<br />
                  Disponible à l&apos;aéroport et dans les hôtels (~5€).
                </p>
              </div>
            </div>

            <h3 className="font-bold text-gray-900 mt-6 mb-3">Décalage horaire</h3>
            <TimezoneCalculator />
            <p className="text-gray-700">
              Maurice est en avance sur Paris : <strong>+3h en hiver</strong>, <strong>+2h en été</strong> (pas de changement d&apos;heure à Maurice).
            </p>

            <h3 className="font-bold text-gray-900 mt-6 mb-3">Langues</h3>
            <p className="text-gray-700 mb-3">
              Vous n&apos;aurez aucun problème de communication :
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li><strong>Français :</strong> Parlé par la majorité (deuxième langue)</li>
              <li><strong>Anglais :</strong> Langue officielle (administration, business)</li>
              <li><strong>Créole mauricien :</strong> Langue du quotidien (proche du français)</li>
            </ul>

            <InfoBox type="tip">
              <strong>Quelques mots de créole :</strong> Bonzour (Bonjour), Ki manière? (Comment ça va?),
              Mersi boukou (Merci beaucoup), Ça mem (D&apos;accord)
            </InfoBox>

            <h3 className="font-bold text-gray-900 mt-6 mb-3">Jours fériés 2026</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-3 py-2 text-left">Date</th>
                    <th className="px-3 py-2 text-left">Fête</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {[
                    { date: '1er janvier', fete: 'Nouvel An' },
                    { date: '1er février', fete: 'Abolition de l\'esclavage' },
                    { date: 'Février (variable)', fete: 'Thaipoosam Cavadee' },
                    { date: 'Février/Mars', fete: 'Maha Shivaratri' },
                    { date: '12 mars', fete: 'Fête nationale' },
                    { date: 'Mars/Avril', fete: 'Ougadi (Nouvel An tamoul)' },
                    { date: '1er mai', fete: 'Fête du travail' },
                    { date: 'Août/Sept', fete: 'Ganesh Chaturthi' },
                    { date: '2 novembre', fete: 'Arrivée des engagés' },
                    { date: 'Novembre', fete: 'Divali' },
                    { date: '25 décembre', fete: 'Noël' },
                  ].map((j) => (
                    <tr key={j.fete}>
                      <td className="px-3 py-2 font-medium">{j.date}</td>
                      <td className="px-3 py-2 text-gray-600">{j.fete}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <InfoBox type="info">
              Maurice est une société multiculturelle : hindoue, musulmane, chrétienne, bouddhiste.
              Chaque communauté célèbre ses fêtes, ce qui donne de nombreux jours fériés !
            </InfoBox>

            <h3 className="font-bold text-gray-900 mt-6 mb-3">Horaires d&apos;ouverture</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Commerces</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>Lun-Sam : 9h-17h30</li>
                  <li>Dim : souvent fermé (sauf zones touristiques)</li>
                  <li>Centres commerciaux : 9h-21h</li>
                </ul>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Banques</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>Lun-Ven : 9h-15h</li>
                  <li>Sam : 9h-11h30</li>
                  <li>Dim : fermé</li>
                </ul>
              </div>
            </div>
          </div>
        </InfoSection>

        {/* QUE METTRE DANS SA VALISE */}
        <InfoSection id="valise" icon="🧳" title="Que mettre dans sa valise">
          <div className="mt-4 space-y-4">
            <InfoBox type="info">
              Maurice a un climat tropical. Privilégiez les vêtements légers et respirants.
              N&apos;oubliez pas que les hôtels ont souvent un code vestimentaire le soir.
            </InfoBox>

            <h3 className="font-bold text-gray-900 mb-3">Vêtements essentiels</h3>
            <Checklist items={[
              'T-shirts / tops légers en coton',
              'Shorts et bermudas',
              'Maillots de bain (minimum 2)',
              'Robe légère / chemise pour les soirées',
              'Pantalon léger (visites temples, restos)',
              'Pull léger / gilet (clim dans les transports)',
              'Coupe-vent imperméable (averses soudaines)',
              'Casquette ou chapeau',
            ]} />

            <h3 className="font-bold text-gray-900 mt-6 mb-3">Chaussures</h3>
            <Checklist items={[
              'Sandales / tongs pour la plage',
              'Chaussures d\'eau (récifs, oursins)',
              'Baskets ou chaussures de rando (si randonnées prévues)',
              'Chaussures fermées pour les soirées',
            ]} />

            <h3 className="font-bold text-gray-900 mt-6 mb-3">Protection solaire et santé</h3>
            <Checklist items={[
              'Crème solaire SPF 50+ (chère sur place)',
              'Après-soleil / Aloe Vera',
              'Lunettes de soleil UV',
              'Répulsif anti-moustiques (DEET)',
              'Pharmacie de base (doliprane, anti-diarrhéique, pansements)',
              'Vos médicaments habituels + ordonnance',
            ]} />

            <h3 className="font-bold text-gray-900 mt-6 mb-3">Équipement plage et activités</h3>
            <Checklist items={[
              'Masque et tuba (moins cher qu\'à louer)',
              'Serviette microfibre (sèche vite)',
              'Sac étanche pour le téléphone',
              'GoPro ou caméra waterproof',
              'Lampe frontale (si randonnées)',
            ]} />

            <h3 className="font-bold text-gray-900 mt-6 mb-3">Documents et tech</h3>
            <Checklist items={[
              'Passeport valide 6 mois',
              'Billets d\'avion (version papier en backup)',
              'Réservations hôtels',
              'Permis de conduire',
              'Carte bancaire (vérifier les plafonds)',
              'Assurance voyage (numéro d\'urgence noté)',
              'Adaptateur prise UK',
              'Chargeur portable / batterie externe',
              'Câbles de recharge',
            ]} />

            <h3 className="font-bold text-gray-900 mt-6 mb-3">Ce qu&apos;on peut acheter sur place</h3>
            <p className="text-gray-700">
              Pas la peine de surcharger votre valise, vous trouverez facilement sur place :
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>Crème solaire (mais plus chère)</li>
              <li>Tongs et paréos (marchés, plages)</li>
              <li>Chapeau de paille (souvenirs)</li>
              <li>Adaptateur prise (hôtels, aéroport)</li>
              <li>Carte SIM locale</li>
            </ul>

            <InfoBox type="tip">
              <strong>Astuce :</strong> Laissez de la place dans votre valise pour le retour (rhum, thé, vanille, artisanat...).
              Vérifiez le poids autorisé par votre compagnie aérienne.
            </InfoBox>
          </div>
        </InfoSection>

        {/* CULTURE ET ÉTIQUETTE */}
        <InfoSection id="culture" icon="🙏" title="Culture et bonnes pratiques">
          <div className="mt-4 space-y-4">
            <p className="text-gray-700">
              Maurice est une société multiculturelle harmonieuse. Quelques règles de respect
              vous aideront à être bien accueilli partout.
            </p>

            <h3 className="font-bold text-gray-900 mt-6 mb-3">Dans les temples et lieux de culte</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Retirer ses chaussures avant d&apos;entrer</li>
              <li>Couvrir les épaules et les genoux</li>
              <li>Demander avant de photographier</li>
              <li>Parler à voix basse</li>
              <li>Ne pas pointer du doigt les statues</li>
            </ul>

            <h3 className="font-bold text-gray-900 mt-6 mb-3">Dans la vie quotidienne</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Saluer les gens (Bonjour, merci sont appréciés)</li>
              <li>Éviter le topless sur les plages (toléré dans certains resorts)</li>
              <li>Ne pas photographier les gens sans demander</li>
              <li>Respecter les files d&apos;attente</li>
              <li>Éviter les discussions politiques ou religieuses</li>
            </ul>

            <h3 className="font-bold text-gray-900 mt-6 mb-3">Environnement</h3>
            <InfoBox type="success">
              <strong>Éco-responsabilité :</strong> Maurice fait des efforts pour préserver son environnement.
              Ne jetez rien sur les plages, ne touchez pas les coraux, ne nourrissez pas les poissons.
            </InfoBox>

            <h3 className="font-bold text-gray-900 mt-6 mb-3">Gastronomie locale à essayer</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { plat: 'Dholl puri', desc: 'Galette de lentilles avec curry (street food n°1)' },
                { plat: 'Bol renversé', desc: 'Riz avec viande, légumes et œuf frit' },
                { plat: 'Mine frite', desc: 'Nouilles sautées à la mauricienne' },
                { plat: 'Rougaille', desc: 'Sauce tomate épicée avec poisson ou saucisse' },
                { plat: 'Vindaye', desc: 'Poisson mariné moutarde et curcuma' },
                { plat: 'Gâteau piment', desc: 'Beignet épicé aux lentilles' },
                { plat: 'Alouda', desc: 'Boisson lactée aux graines de basilic' },
                { plat: 'Napolitaine', desc: 'Gâteau local à la confiture' },
              ].map((item) => (
                <div key={item.plat} className="p-3 bg-amber-50 rounded-xl">
                  <h4 className="font-semibold text-amber-900">{item.plat}</h4>
                  <p className="text-sm text-amber-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </InfoSection>

        {/* LIENS UTILES */}
        <InfoSection id="liens" icon="🔗" title="Liens et ressources utiles">
          <div className="mt-4 space-y-4">
            <h3 className="font-bold text-gray-900 mb-3">Sites officiels</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://mauritiusnow.com" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline flex items-center gap-2">
                  Office du Tourisme Maurice
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.diplomatie.gouv.fr/fr/conseils-aux-voyageurs/conseils-par-pays-destination/maurice/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline flex items-center gap-2">
                  Conseils aux voyageurs (France Diplomatie)
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
            </ul>

            <h3 className="font-bold text-gray-900 mt-6 mb-3">Nos autres ressources</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/budget-ile-maurice" className="p-4 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-colors">
                <h4 className="font-semibold text-emerald-900">💰 Budget Maurice</h4>
                <p className="text-sm text-emerald-700">Calculez votre budget voyage</p>
              </Link>
              <Link href="/itineraires-ile-maurice" className="p-4 bg-indigo-50 rounded-xl hover:bg-indigo-100 transition-colors">
                <h4 className="font-semibold text-indigo-900">🗺️ Itinéraires</h4>
                <p className="text-sm text-indigo-700">Circuits 7, 10 et 14 jours</p>
              </Link>
              <Link href="/quand-partir-ile-maurice" className="p-4 bg-amber-50 rounded-xl hover:bg-amber-100 transition-colors">
                <h4 className="font-semibold text-amber-900">📅 Quand partir</h4>
                <p className="text-sm text-amber-700">Climat et meilleure période</p>
              </Link>
              <Link href="/ou-aller-ile-maurice" className="p-4 bg-cyan-50 rounded-xl hover:bg-cyan-100 transition-colors">
                <h4 className="font-semibold text-cyan-900">📍 Où aller</h4>
                <p className="text-sm text-cyan-700">Toutes les destinations</p>
              </Link>
            </div>
          </div>
        </InfoSection>

      </div>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Questions fréquentes
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'Faut-il un visa pour aller à Maurice ?',
                a: 'Non, les ressortissants français n\'ont pas besoin de visa pour un séjour touristique de moins de 90 jours. Un passeport valide 6 mois après le retour suffit.',
              },
              {
                q: 'L\'eau du robinet est-elle potable ?',
                a: 'Oui, l\'eau du robinet est potable à Maurice. Son goût chloré peut déplaire, l\'eau en bouteille est peu chère (0.50€/1.5L).',
              },
              {
                q: 'Quelle carte SIM acheter ?',
                a: 'Emtel ou my.t sont les meilleurs opérateurs. Comptez 10-20€ pour une carte SIM avec 5-15 Go de data. Disponible à l\'aéroport 24h/24.',
              },
              {
                q: 'Faut-il un adaptateur électrique ?',
                a: 'Oui, Maurice utilise les prises britanniques (type G, 3 broches). Achetez un adaptateur avant de partir ou à l\'aéroport.',
              },
              {
                q: 'Comment se déplacer à Maurice ?',
                a: 'La location de voiture est recommandée (25-50€/jour). Attention, on roule à gauche. Sinon : bus (économique mais lent) ou taxis.',
              },
              {
                q: 'Maurice est-il dangereux ?',
                a: 'Non, Maurice est une destination très sûre. Les vols à la tire existent dans les zones touristiques mais la criminalité violente est rare.',
              },
              {
                q: 'Quel décalage horaire avec la France ?',
                a: 'Maurice est en avance sur Paris : +3h en hiver français, +2h en été français. Pas de changement d\'heure à Maurice.',
              },
              {
                q: 'Parle-t-on français à Maurice ?',
                a: 'Oui ! Le français est parlé par la grande majorité de la population. L\'anglais est la langue officielle et le créole la langue du quotidien.',
              },
            ].map((faq, index) => (
              <details key={index} className="bg-gray-50 rounded-xl overflow-hidden group">
                <summary className="px-6 py-5 cursor-pointer font-semibold text-gray-900 hover:bg-gray-100 flex justify-between items-center">
                  {faq.q}
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-gray-700 leading-relaxed border-t border-gray-200 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-cyan-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à partir ?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Vous avez maintenant toutes les informations pratiques. Planifiez votre itinéraire
            et réservez vos activités pour un voyage inoubliable !
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/itineraires-ile-maurice"
              className="bg-white text-teal-700 px-6 py-3 rounded-xl font-semibold hover:bg-teal-50 transition-colors shadow-lg"
            >
              Voir les itinéraires
            </Link>
            <Link
              href="/activites-ile-maurice"
              className="bg-teal-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal-400 transition-colors border border-teal-400"
            >
              Réserver des activités
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
