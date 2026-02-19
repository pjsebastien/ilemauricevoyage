import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/infos-pratiques-ile-maurice' },
  title: 'Infos pratiques île Maurice : visa, santé, argent, téléphone',
  description: 'Tout savoir avant de partir à Maurice : visa, vaccins, carte SIM, location voiture, sécurité, électricité, décalage horaire. Le guide pratique complet.',

  openGraph: {
    title: 'Infos pratiques île Maurice : le dossier complet',
    description: 'Visa, santé, argent, téléphone, conduite, sécurité... Toutes les informations essentielles pour voyager à Maurice.',
    type: 'article',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Île Maurice Voyage' }],
  },
};

export default function InfosPratiquesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
