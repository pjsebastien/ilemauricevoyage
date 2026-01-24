import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mentions légales - Île Maurice Voyage',
  description: 'Mentions légales du site Île Maurice Voyage. Informations sur l\'éditeur, l\'hébergeur et les conditions d\'utilisation.',
};

export default function MentionsLegales() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Mentions légales</h1>
          <p className="text-gray-600">Dernière mise à jour : Janvier 2025</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12 space-y-10">

          {/* Éditeur */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center text-sm font-bold">1</span>
              Éditeur du site
            </h2>
            <div className="bg-gray-50 rounded-xl p-6 space-y-2">
              <p><span className="font-semibold text-gray-700">Nom du site :</span> Île Maurice Voyage</p>
              <p><span className="font-semibold text-gray-700">URL :</span> https://www.ilemauricevoyage.fr</p>
              <p><span className="font-semibold text-gray-700">Éditeur :</span> Sébastien P.</p>
              <p><span className="font-semibold text-gray-700">Statut :</span> Particulier</p>
              <p><span className="font-semibold text-gray-700">Contact :</span> <Link href="/contact" className="text-primary-600 hover:underline">Formulaire de contact</Link></p>
            </div>
          </section>

          {/* Hébergeur */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center text-sm font-bold">2</span>
              Hébergeur
            </h2>
            <div className="bg-gray-50 rounded-xl p-6 space-y-2">
              <p><span className="font-semibold text-gray-700">Raison sociale :</span> Vercel Inc.</p>
              <p><span className="font-semibold text-gray-700">Adresse :</span> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
              <p><span className="font-semibold text-gray-700">Site web :</span> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">https://vercel.com</a></p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center text-sm font-bold">3</span>
              Propriété intellectuelle
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed">
                L&apos;ensemble du contenu présent sur le site Île Maurice Voyage (textes, images, graphismes, logo, icônes, etc.)
                est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site,
                quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable de l&apos;éditeur.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Certaines images utilisées sur ce site proviennent de banques d&apos;images libres de droits ou sont utilisées
                avec l&apos;autorisation de leurs auteurs respectifs.
              </p>
            </div>
          </section>

          {/* Responsabilité */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center text-sm font-bold">4</span>
              Limitation de responsabilité
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed">
                Les informations contenues sur ce site sont aussi précises que possible et sont mises à jour régulièrement.
                Cependant, elles peuvent contenir des inexactitudes ou des omissions. L&apos;utilisateur est donc invité à vérifier
                les informations auprès des sources officielles avant tout voyage.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                L&apos;éditeur ne pourra être tenu responsable des dommages directs ou indirects causés au matériel de l&apos;utilisateur
                lors de l&apos;accès au site, ou résultant de l&apos;utilisation d&apos;informations présentes sur ce site.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Ce site contient des liens vers des sites partenaires et des plateformes de réservation. L&apos;éditeur
                n&apos;exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
              </p>
            </div>
          </section>

          {/* Liens d'affiliation */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center text-sm font-bold">5</span>
              Liens d&apos;affiliation
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed">
                Ce site peut contenir des liens d&apos;affiliation vers des partenaires commerciaux (plateformes de réservation
                d&apos;activités, hébergements, etc.). Lorsque vous effectuez une réservation via ces liens, nous pouvons
                percevoir une commission, sans coût supplémentaire pour vous.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Ces partenariats nous permettent de maintenir ce site et de continuer à vous fournir des informations
                de qualité sur l&apos;Île Maurice.
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center text-sm font-bold">6</span>
              Cookies
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed">
                Ce site utilise des cookies pour améliorer l&apos;expérience utilisateur et analyser le trafic.
                Pour plus d&apos;informations sur l&apos;utilisation des cookies, veuillez consulter notre{' '}
                <Link href="/politique-de-confidentialite" className="text-primary-600 hover:underline">
                  politique de confidentialité
                </Link>.
              </p>
            </div>
          </section>

          {/* Droit applicable */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center text-sm font-bold">7</span>
              Droit applicable
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed">
                Les présentes mentions légales sont soumises au droit français. En cas de litige, et après échec
                de toute tentative de recherche d&apos;une solution amiable, les tribunaux français seront seuls compétents.
              </p>
            </div>
          </section>

        </div>

        {/* Footer links */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center text-sm">
          <Link href="/politique-de-confidentialite" className="text-primary-600 hover:underline">
            Politique de confidentialité
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
