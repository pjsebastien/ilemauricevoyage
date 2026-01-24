import { Metadata } from 'next';
import { aprilData } from '@/lib/all-months-data';
import MonthlyPage from '@/components/monthly/MonthlyPage';

export const metadata: Metadata = {
  title: aprilData.metaTitle,
  description: aprilData.metaDescription,
  openGraph: {
    title: aprilData.metaTitle,
    description: aprilData.metaDescription,
    type: 'article',
  },
};

export default function AvrilPage() {
  return <MonthlyPage data={aprilData} />;
}
