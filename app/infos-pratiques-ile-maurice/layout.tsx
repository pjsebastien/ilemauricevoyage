import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Infos pratiques île Maurice : visa, santé, argent, téléphone',
  description: 'Tout savoir avant de partir à Maurice : visa, vaccins, carte SIM, location voiture, sécurité, électricité, décalage horaire. Le guide pratique complet.',

  openGraph: {
    title: 'Infos pratiques île Maurice : le dossier complet',
    description: 'Visa, santé, argent, téléphone, conduite, sécurité... Toutes les informations essentielles pour voyager à Maurice.',
    type: 'article',
  },
};

export default function InfosPratiquesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
