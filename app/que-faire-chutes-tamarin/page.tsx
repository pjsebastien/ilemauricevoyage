import { Metadata } from 'next';
import { getLocationBySlug } from '@/lib/locations-data-enriched';
import LocationPageEnriched from '@/components/LocationPageEnriched';
import { notFound } from 'next/navigation';

const slug = 'chutes-tamarin';
const locationData = getLocationBySlug(slug)!;

export const metadata: Metadata = {
  alternates: { canonical: '/que-faire-chutes-tamarin' },
  title: `Que faire aux ${locationData.name} : canyoning, cascades et aventure`,
  description: locationData.metaDescription,
  openGraph: {
    title: `Que faire aux ${locationData.name} ? Canyoning, 7 cascades, aventure`,
    description: locationData.metaDescription,
    type: 'article',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Île Maurice Voyage' }],
  },
};

export default function LocationPageRoute() {
  if (!locationData) notFound();
  return <LocationPageEnriched location={locationData} />;
}
