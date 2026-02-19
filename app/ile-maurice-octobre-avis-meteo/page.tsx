import { Metadata } from 'next';
import { octoberData } from '@/lib/all-months-data';
import MonthlyPage from '@/components/monthly/MonthlyPage';

export const metadata: Metadata = {
  alternates: { canonical: '/ile-maurice-octobre-avis-meteo' },
  title: octoberData.metaTitle,
  description: octoberData.metaDescription,
  openGraph: {
    title: octoberData.metaTitle,
    description: octoberData.metaDescription,
    type: 'article',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Île Maurice Voyage' }],
  },
};

export default function OctobrePage() {
  return <MonthlyPage data={octoberData} />;
}
