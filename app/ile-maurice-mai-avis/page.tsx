import { Metadata } from 'next';
import { mayData } from '@/lib/all-months-data';
import MonthlyPage from '@/components/monthly/MonthlyPage';

export const metadata: Metadata = {
  title: mayData.metaTitle,
  description: mayData.metaDescription,
  openGraph: {
    title: mayData.metaTitle,
    description: mayData.metaDescription,
    type: 'article',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Île Maurice Voyage' }],
  },
};

export default function MaiPage() {
  return <MonthlyPage data={mayData} />;
}
