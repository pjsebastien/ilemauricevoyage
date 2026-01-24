import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page introuvable - Île Maurice Voyage',
  description: 'Cette page n\'existe pas, mais l\'aventure continue ! Découvrez toutes nos destinations à l\'Île Maurice.',
};

export default function NotFound() {
  const suggestions = [
    {
      href: '/',
      label: 'Accueil',
      description: 'Retour au port d\'attache',
      icon: '🏠'
    },
    {
      href: '/que-faire-ile-maurice',
      label: 'Que faire',
      description: 'Activités et expériences',
      icon: '🎯'
    },
    {
      href: '/ou-aller-ile-maurice',
      label: 'Où aller',
      description: 'Les plus beaux spots',
      icon: '🗺️'
    },
    {
      href: '/activites-ile-maurice',
      label: 'Activités',
      description: 'Réservez une aventure',
      icon: '🏄'
    },
  ];

  return (
    <div className="min-h-[80vh] relative overflow-hidden bg-gradient-to-b from-primary-50 via-turquoise-50 to-primary-100">
      {/* Animated waves background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Wave 1 */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-30">
          <svg
            className="absolute bottom-0 w-[200%] animate-wave-404"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              fill="#0ea5e9"
              d="M0,64 C360,120 720,0 1080,64 C1260,96 1440,64 1440,64 L1440,120 L0,120 Z"
            />
          </svg>
        </div>
        {/* Wave 2 */}
        <div className="absolute bottom-0 left-0 right-0 h-24 opacity-40">
          <svg
            className="absolute bottom-0 w-[200%] animate-wave-404-slow"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              fill="#14b8d4"
              d="M0,96 C480,48 960,96 1440,48 L1440,120 L0,120 Z"
            />
          </svg>
        </div>
        {/* Wave 3 */}
        <div className="absolute bottom-0 left-0 right-0 h-16 opacity-60">
          <svg
            className="absolute bottom-0 w-[200%] animate-wave-404-fast"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              fill="#0284c7"
              d="M0,80 C240,120 480,80 720,100 C960,120 1200,80 1440,100 L1440,120 L0,120 Z"
            />
          </svg>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-[10%] text-6xl animate-float-404 opacity-20">🐚</div>
        <div className="absolute top-40 right-[15%] text-5xl animate-float-404-delayed opacity-20">🌴</div>
        <div className="absolute top-60 left-[20%] text-4xl animate-float-404 opacity-15">🐠</div>
        <div className="absolute bottom-40 right-[25%] text-5xl animate-float-404-delayed opacity-20">🦀</div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-4 py-16">
        {/* Compass/404 visual */}
        <div className="relative mb-8">
          <div className="relative">
            {/* Compass ring */}
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-primary-300 flex items-center justify-center bg-white/80 backdrop-blur-sm shadow-xl animate-pulse-slow-404">
              <div className="text-center">
                <span className="text-7xl md:text-8xl font-bold bg-gradient-to-br from-primary-600 via-turquoise-500 to-coral-500 bg-clip-text text-transparent">
                  404
                </span>
              </div>
            </div>
            {/* Compass directions */}
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-primary-600 font-bold text-sm bg-white px-2 rounded">N</span>
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-primary-400 font-medium text-sm bg-white px-2 rounded">S</span>
            <span className="absolute top-1/2 -left-3 -translate-y-1/2 text-primary-400 font-medium text-sm bg-white px-2 rounded">O</span>
            <span className="absolute top-1/2 -right-3 -translate-y-1/2 text-primary-400 font-medium text-sm bg-white px-2 rounded">E</span>
          </div>

          {/* Floating boat */}
          <div className="absolute -bottom-4 -right-8 text-4xl animate-boat-404">
            🚤
          </div>
        </div>

        {/* Text content */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Oups ! Vous vous êtes égaré dans le lagon...
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Cette page n&apos;existe pas ou a été déplacée.
          </p>
          <p className="text-gray-500">
            Pas de panique ! L&apos;Île Maurice regorge de merveilles à découvrir.
            <br />
            Laissez-nous vous guider vers votre prochaine aventure.
          </p>
        </div>

        {/* Navigation suggestions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
          {suggestions.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group p-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-primary-100 hover:border-primary-300"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h2 className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors">
                {item.label}
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                {item.description}
              </p>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-turquoise-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
        >
          <svg
            className="w-5 h-5 transition-transform group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Retour à l&apos;accueil
        </Link>

        {/* Fun fact */}
        <div className="mt-12 p-4 bg-white/60 backdrop-blur-sm rounded-lg max-w-md mx-auto border border-turquoise-200">
          <p className="text-sm text-gray-600 text-center">
            <span className="text-turquoise-600 font-semibold">Le saviez-vous ?</span>
            <br />
            L&apos;Île Maurice possède plus de 330 km de côtes à explorer.
            Vous trouverez forcément votre bonheur !
          </p>
        </div>
      </div>
    </div>
  );
}
