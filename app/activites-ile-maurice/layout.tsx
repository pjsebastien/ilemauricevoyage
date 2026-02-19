import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Activités île Maurice : +40 expériences à réserver',
  description: 'Découvrez les meilleures activités à l\'île Maurice : plongée, catamaran, dauphins, randonnée, kitesurf, quad, canyoning. Réservez en ligne les expériences incontournables.',
  openGraph: {
    title: 'Activités île Maurice : les meilleures expériences à réserver',
    description: 'Plongée, catamaran, dauphins, randonnée, kitesurf... +40 activités à réserver pour votre voyage à Maurice.',
    type: 'article',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Île Maurice Voyage' }],
  },
};

export default function ActivitesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
