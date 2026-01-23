import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Île Maurice Voyage - Organisez votre voyage et découvrez les meilleures activités',
  description:
    'Organisez votre voyage à l\'île Maurice en toute simplicité. Découvrez les meilleures activités, excursions et expériences authentiques.',
  keywords: [
    'île maurice',
    'voyage île maurice',
    'activités île maurice',
    'excursions île maurice',
    'tourisme île maurice',
  ],
  openGraph: {
    title: 'Île Maurice Voyage',
    description: 'Organisez votre voyage à l\'île Maurice et découvrez les meilleures activités',
    type: 'website',
    locale: 'fr_FR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
