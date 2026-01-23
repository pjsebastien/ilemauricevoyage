import { Metadata } from 'next';
import { juneData } from '@/lib/all-months-data';
import MonthlyPage from '@/components/monthly/MonthlyPage';

export const metadata: Metadata = {
  title: juneData.metaTitle,
  description: juneData.metaDescription,
  openGraph: {
    title: juneData.metaTitle,
    description: juneData.metaDescription,
    type: 'article',
  },
};

export default function JuinPage() {
  return <MonthlyPage data={juneData} />;
}
