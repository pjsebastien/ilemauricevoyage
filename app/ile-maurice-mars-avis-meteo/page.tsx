import { Metadata } from 'next';
import { marchData } from '@/lib/all-months-data';
import MonthlyPage from '@/components/monthly/MonthlyPage';

export const metadata: Metadata = {
  title: marchData.metaTitle,
  description: marchData.metaDescription,
  openGraph: {
    title: marchData.metaTitle,
    description: marchData.metaDescription,
    type: 'article',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Île Maurice Voyage' }],
  },
};

export default function MarsPage() {
  return <MonthlyPage data={marchData} />;
}
