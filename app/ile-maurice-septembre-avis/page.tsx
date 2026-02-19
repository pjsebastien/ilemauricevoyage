import { Metadata } from 'next';
import { septemberData } from '@/lib/all-months-data';
import MonthlyPage from '@/components/monthly/MonthlyPage';

export const metadata: Metadata = {
  title: septemberData.metaTitle,
  description: septemberData.metaDescription,
  openGraph: {
    title: septemberData.metaTitle,
    description: septemberData.metaDescription,
    type: 'article',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Île Maurice Voyage' }],
  },
};

export default function SeptembrePage() {
  return <MonthlyPage data={septemberData} />;
}
