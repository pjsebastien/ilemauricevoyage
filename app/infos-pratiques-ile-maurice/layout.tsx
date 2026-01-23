import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Infos pratiques île Maurice : visa, santé, argent, téléphone',
  description: 'Tout savoir avant de partir à Maurice : visa, vaccins, carte SIM, location voiture, sécurité, électricité, décalage horaire. Le guide pratique complet.',
  keywords: 'infos pratiques maurice, visa maurice, carte sim maurice, location voiture maurice, sécurité maurice, santé maurice, adaptateur maurice',
  openGraph: {
    title: 'Infos pratiques île Maurice : le guide complet',
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
