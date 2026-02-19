import { Metadata } from 'next';
import { aprilData } from '@/lib/all-months-data';
import MonthlyPage from '@/components/monthly/MonthlyPage';

export const metadata: Metadata = {
  alternates: { canonical: '/ile-maurice-avril-avis-meteo' },
  title: aprilData.metaTitle,
  description: aprilData.metaDescription,
  openGraph: {
    title: aprilData.metaTitle,
    description: aprilData.metaDescription,
    type: 'article',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Île Maurice Voyage' }],
  },
};

export default function AvrilPage() {
  return <MonthlyPage data={aprilData} />;
}
