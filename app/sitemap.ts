import { MetadataRoute } from 'next';

const baseUrl = 'https://www.ilemauricevoyage.fr';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // Pages principales (priorité haute)
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/que-faire-ile-maurice`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ou-aller-ile-maurice`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/activites-ile-maurice`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/itineraires-ile-maurice`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/budget-ile-maurice`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/quand-partir-ile-maurice`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/infos-pratiques-ile-maurice`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.2,
    },
    {
      url: `${baseUrl}/politique-de-confidentialite`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.2,
    },
  ];

  // Pages destinations "Que faire à..."
  const destinations = [
    'flic-en-flac',
    'le-morne',
    'ile-aux-cerfs',
    'belle-mare',
    'trou-aux-biches',
    'grand-baie',
    'tamarin',
    'cap-malheureux',
    'trou-deau-douce',
    'port-louis',
    'souillac',
    'grand-gaube',
    'chamouny',
    'chutes-tamarin',
    'gorges-riviere-noire',
  ];

  const destinationPages = destinations.map((dest) => ({
    url: `${baseUrl}/que-faire-${dest}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Page Blue Bay avec URL spécifique
  destinationPages.push({
    url: `${baseUrl}/blue-bay-ile-maurice`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  });

  // Pages mois avec URLs anciennes conservées
  const monthUrls = [
    'ile-maurice-janvier-meteo-et-avis',
    'ile-maurice-fevrier-avis-meteo',
    'ile-maurice-mars-avis-meteo',
    'ile-maurice-avril-avis-meteo',
    'ile-maurice-mai-avis',
    'ile-maurice-juin-avis-meteo',
    'ile-maurice-juillet-avis-meteo',
    'ile-maurice-aout-avis-meteo',
    'ile-maurice-septembre-avis',
    'ile-maurice-octobre-avis-meteo',
    'ile-maurice-novembre-avis-meteo',
    'ile-maurice-decembre-avis-meteo',
  ];

  const monthPages = monthUrls.map((monthUrl) => ({
    url: `${baseUrl}/${monthUrl}`,
    lastModified: currentDate,
    changeFrequency: 'yearly' as const,
    priority: 0.7,
  }));

  // Pages activités individuelles
  const activities = [
    'initiation-canyoning-aux-7-cascades-de-tamarin-sur-lile-maurice-8123',
    'observation-des-cetaces-flic-en-flac-ile-maurice',
    'randonnee-chutes-de-tamarin-ile-maurice',
    'randonnee-le-morne-ile-maurice',
    'excursion-en-quad-a-lile-maurice-pres-de-blue-bay-10160',
    'kayak-flic-en-flac-ile-maurice',
    'snorkeling-flic-en-flac-ile-maurice',
    'survol-du-lagon-nord-de-lile-maurice-en-hydravion-depuis-belle-mare-17449',
    'balade-a-cheval-le-morne-ile-maurice',
    'snorkeling-blue-bay-ile-maurice',
    'balade-en-catamaran-flic-en-flac-ile-maurice',
    'excursion-seabob-a-grand-baie-a-lile-maurice-4845',
    'balade-en-catamaran-sur-le-lagon-de-lile-aux-cerfs-depuis-trou-deau-douce-ile-14366',
    'croisiere-en-catamaran-a-lile-aux-cerfs-depuis-la-pointe-jerome-a-mahebourg-il-14179',
    'plongee-sous-marine-flic-en-flac-ile-maurice',
    'kayak-grand-gaube-ile-dambre-ile-maurice',
    'excursion-en-quad-au-valle-park-ile-maurice-13820',
    'excursion-en-buggy-a-lile-maurice-pres-de-blue-bay-17696',
    'plongee-sous-marine-grand-baie-ile-maurice',
    'kitesurf-le-morne-ile-maurice',
    'plongee-sous-marine-blue-bay-ile-maurice',
    'tyrolienne-chamouny-ile-maurice',
    'balade-en-bateau-blue-bay-ile-maurice',
    'nage-avec-les-dauphins-a-lile-maurice-depuis-bel-ombre-1907',
    'balade-a-cheval-flic-en-flac-ile-maurice',
    'excursion-en-kayak-de-mer-a-lile-aux-benitiers-ile-maurice-18022',
    'excursion-en-buggy-au-valle-park-ile-maurice-13837',
    'traversee-du-pont-nepalais-du-valle-park-ile-maurice-13828',
    'cours-prive-de-kitesurf-sur-la-plage-danse-la-raie-a-cap-malheureux-ile-mauric-16485',
    'randonnee-chamouny-ile-maurice',
    'descente-en-luge-de-montagne-au-valle-park-ile-maurice-13832',
    'excursion-a-lile-aux-aigrettes-plage-de-gris-gris-et-du-sud-est-de-lile-mauri-13212',
    'randonnee-au-pouce-pres-de-port-louis-sur-lile-maurice-8187',
    '4x4-jeep-chamouny-ile-maurice',
    'balade-a-cheval-souillac-ile-maurice-ile-maurice',
    'plongee-sous-marine-trou-deau-douce-ile-maurice',
    'randonnee-souillac-ile-maurice-ile-maurice',
    'location-de-vtt-a-grand-gaube-ile-maurice-15465',
    'balade-en-bateau-trou-deau-douce-ile-maurice',
    'excursion-de-snorkeling-au-coin-de-mire-a-lile-plate-et-a-lilot-gabriel-depui-26097',
    'excursion-a-vtt-a-chamouny-dans-le-bike-park-naturel-mobike-ile-maurice-25539',
    'croisiere-en-speed-boat-au-coucher-du-soleil-depuis-riviere-noire-ile-maurice-16559',
  ];

  const activityPages = activities.map((activity) => ({
    url: `${baseUrl}/activite/${activity}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Pages catégories d'activités
  const categories = [
    'sports-nautiques',
    'nature-randonnee',
    'aventure',
    'culture-patrimoine',
    'detente-bien-etre',
    'gastronomie',
    'famille',
    'romantique',
  ];

  const categoryPages = categories.map((category) => ({
    url: `${baseUrl}/${category}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [
    ...mainPages,
    ...destinationPages,
    ...monthPages,
    ...activityPages,
    ...categoryPages,
  ];
}
