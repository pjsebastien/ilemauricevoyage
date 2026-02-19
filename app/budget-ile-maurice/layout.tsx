import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/budget-ile-maurice' },
  title: 'Budget voyage île Maurice : combien prévoir ? Prix et calcul',
  description: 'Calculez votre budget pour Maurice : vols, hôtels, repas, activités. Prix détaillés pour 1 semaine, 2 semaines. Tous les coûts par destination et conseils pour économiser.',

  openGraph: {
    title: 'Budget voyage île Maurice : tous les prix et notre calculateur',
    description: 'Vols, hébergement, repas, activités... Découvrez le coût réel d\'un voyage à Maurice avec notre calculateur interactif.',
    type: 'article',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Île Maurice Voyage' }],
  },
};

export default function BudgetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
