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
  },
};

export default function SeptembrePage() {
  return <MonthlyPage data={septemberData} />;
}
