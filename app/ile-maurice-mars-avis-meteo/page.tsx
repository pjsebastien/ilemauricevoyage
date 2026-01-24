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
  },
};

export default function MarsPage() {
  return <MonthlyPage data={marchData} />;
}
