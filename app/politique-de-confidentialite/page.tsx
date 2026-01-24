import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Politique de confidentialité - Île Maurice Voyage',
  description: 'Politique de confidentialité du site Île Maurice Voyage. Découvrez comment nous collectons, utilisons et protégeons vos données personnelles.',
};

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="text-primary-600 hover:text-primary-700 text-sm font-medium inline-flex items-center gap-1 mb-4"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour à l&apos;accueil
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Politique de confidentialité</h1>
          <p className="text-gray-600">Dernière mise à jour : Janvier 2025</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12 space-y-10">

          {/* Introduction */}
          <section>
            <div className="bg-turquoise-50 border border-turquoise-200 rounded-xl p-6">
              <p className="text-gray-700 leading-relaxed">
                Chez Île Maurice Voyage, nous accordons une grande importance à la protection de vos données personnelles.
                Cette politique de confidentialité vous informe sur la manière dont nous collectons, utilisons et protégeons
                vos informations lorsque vous visitez notre site.
              </p>
            </div>
          </section>

          {/* Responsable du traitement */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center text-sm font-bold">1</span>
              Responsable du traitement
            </h2>
            <div className="bg-gray-50 rounded-xl p-6 space-y-2">
              <p><span className="font-semibold text-gray-700">Responsable :</span> Sébastien P.</p>
              <p><span className="font-semibold text-gray-700">Site :</span> Île Maurice Voyage</p>
              <p><span className="font-semibold text-gray-700">Contact :</span> <Link href="/contact" className="text-primary-600 hover:underline">Formulaire de contact</Link></p>
            </div>
          </section>

          {/* Données collectées */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center text-sm font-bold">2</span>
              Données collectées
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed mb-4">
                Nous collectons les types de données suivants :
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Données de navigation</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Adresse IP (anonymisée)</li>
                <li>Type de navigateur et système d&apos;exploitation</li>
                <li>Pages visitées et durée de visite</li>
                <li>Source de trafic (moteur de recherche, lien direct, etc.)</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Données fournies volontairement</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Nom et adresse e-mail (via le formulaire de contact)</li>
                <li>Contenu des messages envoyés</li>
              </ul>
            </div>
          </section>

          {/* Utilisation des données */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center text-sm font-bold">3</span>
              Utilisation des données
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed mb-4">
                Vos données sont utilisées pour :
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Améliorer le contenu et l&apos;ergonomie du site</li>
                <li>Analyser le trafic et comprendre les besoins des visiteurs</li>
                <li>Répondre à vos demandes de contact</li>
                <li>Assurer la sécurité et le bon fonctionnement du site</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                <strong>Nous ne vendons jamais vos données personnelles à des tiers.</strong>
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center text-sm font-bold">4</span>
              Cookies
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed mb-4">
                Notre site utilise des cookies pour améliorer votre expérience de navigation :
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden mt-4">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Type</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Finalité</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Durée</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-600">Cookies essentiels</td>
                      <td className="px-4 py-3 text-sm text-gray-600">Fonctionnement du site</td>
                      <td className="px-4 py-3 text-sm text-gray-600">Session</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-600">Cookies analytiques</td>
                      <td className="px-4 py-3 text-sm text-gray-600">Statistiques de visite</td>
                      <td className="px-4 py-3 text-sm text-gray-600">13 mois</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-600 leading-relaxed mt-4">
                Vous pouvez à tout moment désactiver les cookies dans les paramètres de votre navigateur.
                Cependant, cela pourrait affecter le fonctionnement de certaines parties du site.
              </p>
            </div>
          </section>

          {/* Partage des données */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center text-sm font-bold">5</span>
              Partage des données
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed mb-4">
                Vos données peuvent être partagées avec :
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Vercel</strong> : hébergeur du site (traitement technique)</li>
                <li><strong>Google Analytics</strong> : analyse statistique du trafic (données anonymisées)</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Ces prestataires sont tenus de respecter la confidentialité de vos données conformément
                au RGPD et à leurs propres politiques de confidentialité.
              </p>
            </div>
          </section>

          {/* Vos droits */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center text-sm font-bold">6</span>
              Vos droits (RGPD)
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed mb-4">
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Droit d&apos;accès</h4>
                  <p className="text-sm text-gray-600">Obtenir une copie de vos données personnelles</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Droit de rectification</h4>
                  <p className="text-sm text-gray-600">Corriger des données inexactes</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Droit à l&apos;effacement</h4>
                  <p className="text-sm text-gray-600">Demander la suppression de vos données</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Droit à la portabilité</h4>
                  <p className="text-sm text-gray-600">Récupérer vos données dans un format lisible</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Droit d&apos;opposition</h4>
                  <p className="text-sm text-gray-600">Vous opposer au traitement de vos données</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Droit de limitation</h4>
                  <p className="text-sm text-gray-600">Limiter l&apos;utilisation de vos données</p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mt-6">
                Pour exercer ces droits, contactez-nous via notre{' '}
                <Link href="/contact" className="text-primary-600 hover:underline">formulaire de contact</Link>.
                Nous répondrons à votre demande dans un délai de 30 jours.
              </p>
            </div>
          </section>

          {/* Sécurité */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center text-sm font-bold">7</span>
              Sécurité des données
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed">
                Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles
                contre tout accès non autorisé, modification, divulgation ou destruction :
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                <li>Connexion sécurisée HTTPS</li>
                <li>Hébergement sur infrastructure sécurisée (Vercel)</li>
                <li>Accès limité aux données personnelles</li>
              </ul>
            </div>
          </section>

          {/* Modifications */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center text-sm font-bold">8</span>
              Modifications de cette politique
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed">
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment.
                Les modifications prendront effet dès leur publication sur cette page.
                Nous vous encourageons à consulter régulièrement cette page pour rester informé.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center text-sm font-bold">9</span>
              Nous contacter
            </h2>
            <div className="bg-turquoise-50 border border-turquoise-200 rounded-xl p-6">
              <p className="text-gray-700 leading-relaxed">
                Pour toute question concernant cette politique de confidentialité ou vos données personnelles,
                n&apos;hésitez pas à nous contacter via notre{' '}
                <Link href="/contact" className="text-primary-600 hover:underline font-semibold">
                  formulaire de contact
                </Link>.
              </p>
            </div>
          </section>

        </div>

        {/* Footer links */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center text-sm">
          <Link href="/mentions-legales" className="text-primary-600 hover:underline">
            Mentions légales
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="/contact" className="text-primary-600 hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
