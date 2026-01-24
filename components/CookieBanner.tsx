'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

type CookieConsent = 'accepted' | 'declined' | null;

export default function CookieBanner() {
  const [consent, setConsent] = useState<CookieConsent>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà fait un choix
    const storedConsent = localStorage.getItem('cookie-consent') as CookieConsent;
    if (storedConsent) {
      setConsent(storedConsent);
    } else {
      // Afficher la bannière après un court délai pour une meilleure UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setConsent('accepted');
    setIsVisible(false);
    // Ici vous pouvez activer Google Analytics ou autres scripts
    // window.gtag?.('consent', 'update', { analytics_storage: 'granted' });
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setConsent('declined');
    setIsVisible(false);
    // Désactiver les cookies non essentiels
    // window.gtag?.('consent', 'update', { analytics_storage: 'denied' });
  };

  // Ne rien afficher si consent déjà donné ou bannière pas encore visible
  if (consent || !isVisible) return null;

  return (
    <>
      {/* Overlay semi-transparent */}
      <div
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[998] animate-fadeIn"
        onClick={handleDecline}
      />

      {/* Bannière */}
      <div className="fixed bottom-0 left-0 right-0 z-[999] p-4 animate-slideUp">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          <div className="p-6 md:p-8">
            {/* Header avec icône */}
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-turquoise-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🍪</span>
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-900 mb-1">
                  Nous utilisons des cookies
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  Pour améliorer votre expérience sur Île Maurice Voyage, nous utilisons des cookies.
                  Ils nous aident à comprendre comment vous utilisez notre site et à vous proposer
                  du contenu pertinent pour préparer votre voyage.
                </p>
              </div>
            </div>

            {/* Détails des cookies */}
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 text-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Cookies essentiels</p>
                    <p className="text-gray-500 text-xs">Nécessaires au fonctionnement du site</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Cookies analytiques</p>
                    <p className="text-gray-500 text-xs">Pour améliorer nos contenus</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Boutons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAccept}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-primary-600 to-turquoise-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                Accepter tous les cookies
              </button>
              <button
                onClick={handleDecline}
                className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-all duration-300"
              >
                Cookies essentiels uniquement
              </button>
            </div>

            {/* Lien politique */}
            <p className="text-center text-xs text-gray-500 mt-4">
              En savoir plus sur notre{' '}
              <Link
                href="/politique-de-confidentialite"
                className="text-primary-600 hover:underline"
              >
                politique de confidentialité
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Styles d'animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </>
  );
}
