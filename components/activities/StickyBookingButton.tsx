'use client';

interface StickyBookingButtonProps {
  /** Texte du bouton */
  label: string;
  /** Prix à afficher */
  price?: string;
  /** URL de réservation (pour page individuelle) */
  bookingUrl?: string;
  /** ID de l'élément à scroller (pour page fusion) */
  scrollToId?: string;
}

/**
 * Bouton de réservation sticky en bas de l'écran
 * Visible en permanence pour faciliter la conversion
 */
export default function StickyBookingButton({
  label,
  price,
  bookingUrl,
  scrollToId,
}: StickyBookingButtonProps) {
  const handleClick = () => {
    if (scrollToId) {
      // Scroll vers les options (page fusion)
      const element = document.getElementById(scrollToId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else if (bookingUrl) {
      // Ouvrir le lien de réservation (page individuelle)
      window.open(bookingUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-gray-200 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Prix si disponible */}
          {price && (
            <div className="hidden sm:block">
              <p className="text-xs text-gray-600">À partir de</p>
              <p className="text-xl md:text-2xl font-bold text-primary-600">
                {price}
                <span className="text-sm font-normal text-gray-500">/pers</span>
              </p>
            </div>
          )}

          {/* Bouton principal */}
          <button
            onClick={handleClick}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg transition-colors text-base md:text-lg shadow-lg"
          >
            {label}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
