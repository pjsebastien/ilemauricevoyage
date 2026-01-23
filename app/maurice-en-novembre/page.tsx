import { Metadata } from 'next';
import { novemberData } from '@/lib/all-months-data';
import MonthlyPage from '@/components/monthly/MonthlyPage';

export const metadata: Metadata = {
  title: novemberData.metaTitle,
  description: novemberData.metaDescription,
  openGraph: {
    title: novemberData.metaTitle,
    description: novemberData.metaDescription,
    type: 'article',
  },
};

export default function NovembrePage() {
  return <MonthlyPage data={novemberData} />;
}
