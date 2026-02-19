import { Metadata } from 'next';
import { getLocationBySlug } from '@/lib/locations-data-enriched';
import LocationPageEnriched from '@/components/LocationPageEnriched';
import { notFound } from 'next/navigation';

const slug = 'flic-en-flac';
const locationData = getLocationBySlug(slug)!;

export const metadata: Metadata = {
  alternates: { canonical: '/que-faire-flic-en-flac' },
  title: `Que faire à ${locationData.name} : activités, plages et excursions`,
  description: locationData.metaDescription,
  openGraph: {
    title: `Que faire à ${locationData.name} ? Plage, plongée, activités`,
    description: locationData.metaDescription,
    type: 'article',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Île Maurice Voyage' }],
  },
};

export default function LocationPageRoute() {
  if (!locationData) notFound();
  return <LocationPageEnriched location={locationData} />;
}
