import { Metadata } from 'next';
import { novemberData } from '@/lib/all-months-data';
import MonthlyPage from '@/components/monthly/MonthlyPage';

export const metadata: Metadata = {
  alternates: { canonical: '/ile-maurice-novembre-avis-meteo' },
  title: novemberData.metaTitle,
  description: novemberData.metaDescription,
  openGraph: {
    title: novemberData.metaTitle,
    description: novemberData.metaDescription,
    type: 'article',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Île Maurice Voyage' }],
  },
};

export default function NovembrePage() {
  return <MonthlyPage data={novemberData} />;
}
