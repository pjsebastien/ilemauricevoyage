/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/manawa/**',
      },
      {
        protocol: 'https',
        hostname: 'blog.ilemauricevoyage.fr',
        pathname: '/wp-content/**',
      },
      {
        protocol: 'https',
        hostname: 'www.blog.ilemauricevoyage.fr',
        pathname: '/wp-content/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      // Anciennes URLs itinéraires → nouvelle page
      { source: '/itineraire-ile-maurice-5-jours-vacances-reve', destination: '/itineraires-ile-maurice', permanent: true },
      { source: '/6-itineraires-road-trip-ile-maurice', destination: '/itineraires-ile-maurice', permanent: true },
      { source: '/itineraire-ile-maurice-decouvertes-inoubliables', destination: '/itineraires-ile-maurice', permanent: true },
      { source: '/itineraire-vacances-reve-ile-maurice', destination: '/itineraires-ile-maurice', permanent: true },
      { source: '/idee-week-end-ile-maurice', destination: '/itineraires-ile-maurice', permanent: true },

      // Activités spécifiques
      { source: '/canyoning-ile-maurice', destination: '/activite/initiation-canyoning-aux-7-cascades-de-tamarin-sur-lile-maurice-8123', permanent: true },
      { source: '/secrets-baleines-cachalots-ile-maurice', destination: '/activite/observation-des-cetaces-flic-en-flac-ile-maurice', permanent: true },
      { source: '/observation-baleine-ile-maurice', destination: '/activite/observation-des-cetaces-flic-en-flac-ile-maurice', permanent: true },
      { source: '/hydravion-ile-maurice', destination: '/activite/survol-du-lagon-nord-de-lile-maurice-en-hydravion-depuis-belle-mare-17449', permanent: true },

      // Pages infos pratiques
      { source: '/secrets-location-voiture-ile-maurice', destination: '/infos-pratiques-ile-maurice', permanent: true },
      { source: '/le-rhum-a-lile-maurice-un-heritage-culturel-et-gustatif', destination: '/infos-pratiques-ile-maurice', permanent: true },

      // Pages générales
      { source: '/secrets-sous-marins-ile-maurice-guide-ultime', destination: '/activites-ile-maurice', permanent: true },
      { source: '/meilleurs-hebergements-ile-maurice', destination: '/ou-aller-ile-maurice', permanent: true },
      { source: '/saut-parachute-ile-maurice', destination: '/activites-ile-maurice', permanent: true },
    ];
  },
};

export default nextConfig;
