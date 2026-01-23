import { Metadata } from 'next';
import { decemberData } from '@/lib/all-months-data';
import MonthlyPage from '@/components/monthly/MonthlyPage';

export const metadata: Metadata = {
  title: decemberData.metaTitle,
  description: decemberData.metaDescription,
  openGraph: {
    title: decemberData.metaTitle,
    description: decemberData.metaDescription,
    type: 'article',
  },
};

export default function DecembrePage() {
  return <MonthlyPage data={decemberData} />;
}
