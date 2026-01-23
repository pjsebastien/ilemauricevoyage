import { Metadata } from 'next';
import { getLocationBySlug } from '@/lib/locations-data-enriched';
import LocationPageEnriched from '@/components/LocationPageEnriched';
import { notFound } from 'next/navigation';

const slug = 'souillac';
const locationData = getLocationBySlug(slug)!;

export const metadata: Metadata = {
  title: `Que faire à ${locationData.name} en ${locationData.bestMonths.map(m => m.charAt(0).toUpperCase() + m.slice(1)).join(', ')} ?`,
  description: `${locationData.name} : ${locationData.intro.substring(0, 140)}... Meilleurs mois : ${locationData.bestMonths.join(', ')}.`,
  openGraph: {
    title: `Que faire à ${locationData.name} ? Gris Gris, Rochester Falls, sud sauvage`,
    description: locationData.metaDescription,
    type: 'article',
  },
};

export default function LocationPageRoute() {
  if (!locationData) notFound();
  return <LocationPageEnriched location={locationData} />;
}
