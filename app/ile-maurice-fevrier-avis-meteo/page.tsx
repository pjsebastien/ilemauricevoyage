import { Metadata } from 'next';
import { februaryData } from '@/lib/all-months-data';
import MonthlyPage from '@/components/monthly/MonthlyPage';

export const metadata: Metadata = {
  alternates: { canonical: '/ile-maurice-fevrier-avis-meteo' },
  title: februaryData.metaTitle,
  description: februaryData.metaDescription,
  openGraph: {
    title: februaryData.metaTitle,
    description: februaryData.metaDescription,
    type: 'article',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Île Maurice Voyage' }],
  },
};

export default function FevrierPage() {
  return <MonthlyPage data={februaryData} />;
}
