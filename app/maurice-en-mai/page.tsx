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
  },
};

export default function MaiPage() {
  return <MonthlyPage data={mayData} />;
}
