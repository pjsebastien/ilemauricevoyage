import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Voyage île Maurice : le guide pour organiser votre séjour',
    template: '%s | Île Maurice Voyage',
  },
  description:
    'Organisez votre voyage à l\'île Maurice étape par étape. Destinations, budget, itinéraires, activités, quand partir et infos pratiques. Le guide ultime pour préparer votre séjour de rêve.',
  keywords: [
    'voyage ile maurice',
    'organiser voyage maurice',
    'séjour ile maurice',
    'vacances maurice',
    'partir ile maurice',
    'guide voyage maurice',
    'activités île maurice',
    'excursions île maurice',
  ],
  openGraph: {
    title: 'Voyage île Maurice : organisez votre séjour de rêve',
    description: 'Destinations, budget, itinéraires, activités... Le guide étape par étape pour préparer votre voyage à Maurice.',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Île Maurice Voyage',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Voyage île Maurice : le guide complet',
    description: 'Organisez votre séjour à Maurice : destinations, budget, itinéraires et activités.',
  },
  robots: {
    index: true,
    follow: true,
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
