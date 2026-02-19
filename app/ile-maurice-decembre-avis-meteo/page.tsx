import { Metadata } from 'next';
import { decemberData } from '@/lib/all-months-data';
import MonthlyPage from '@/components/monthly/MonthlyPage';

export const metadata: Metadata = {
  alternates: { canonical: '/ile-maurice-decembre-avis-meteo' },
  title: decemberData.metaTitle,
  description: decemberData.metaDescription,
  openGraph: {
    title: decemberData.metaTitle,
    description: decemberData.metaDescription,
    type: 'article',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Île Maurice Voyage' }],
  },
};

export default function DecembrePage() {
  return <MonthlyPage data={decemberData} />;
}
