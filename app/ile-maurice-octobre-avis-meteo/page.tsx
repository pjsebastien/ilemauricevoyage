import { Metadata } from 'next';
import { octoberData } from '@/lib/all-months-data';
import MonthlyPage from '@/components/monthly/MonthlyPage';

export const metadata: Metadata = {
  title: octoberData.metaTitle,
  description: octoberData.metaDescription,
  openGraph: {
    title: octoberData.metaTitle,
    description: octoberData.metaDescription,
    type: 'article',
  },
};

export default function OctobrePage() {
  return <MonthlyPage data={octoberData} />;
}
