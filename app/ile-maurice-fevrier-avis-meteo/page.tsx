import { Metadata } from 'next';
import { februaryData } from '@/lib/all-months-data';
import MonthlyPage from '@/components/monthly/MonthlyPage';

export const metadata: Metadata = {
  title: februaryData.metaTitle,
  description: februaryData.metaDescription,
  openGraph: {
    title: februaryData.metaTitle,
    description: februaryData.metaDescription,
    type: 'article',
  },
};

export default function FevrierPage() {
  return <MonthlyPage data={februaryData} />;
}
