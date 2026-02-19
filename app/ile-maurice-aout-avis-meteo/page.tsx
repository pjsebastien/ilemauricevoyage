import { Metadata } from 'next';
import { augustData } from '@/lib/all-months-data';
import MonthlyPage from '@/components/monthly/MonthlyPage';

export const metadata: Metadata = {
  title: augustData.metaTitle,
  description: augustData.metaDescription,
  openGraph: {
    title: augustData.metaTitle,
    description: augustData.metaDescription,
    type: 'article',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Île Maurice Voyage' }],
  },
};

export default function AoutPage() {
  return <MonthlyPage data={augustData} />;
}
