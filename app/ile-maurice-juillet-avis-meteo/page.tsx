import { Metadata } from 'next';
import { julyData } from '@/lib/all-months-data';
import MonthlyPage from '@/components/monthly/MonthlyPage';

export const metadata: Metadata = {
  title: julyData.metaTitle,
  description: julyData.metaDescription,
  openGraph: {
    title: julyData.metaTitle,
    description: julyData.metaDescription,
    type: 'article',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Île Maurice Voyage' }],
  },
};

export default function JuilletPage() {
  return <MonthlyPage data={julyData} />;
}
