import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Budget voyage île Maurice : combien prévoir ? Prix et calcul',
  description: 'Calculez votre budget pour Maurice : vols, hôtels, repas, activités. Prix détaillés pour 1 semaine, 2 semaines. Tous les coûts par destination et conseils pour économiser.',
  keywords: 'budget ile maurice, budget 1 semaine maurice, budget 2 semaines maurice, cout voyage maurice, prix maurice, combien coute maurice',
  openGraph: {
    title: 'Budget voyage île Maurice : tous les prix et notre calculateur',
    description: 'Vols, hébergement, repas, activités... Découvrez le coût réel d\'un voyage à Maurice avec notre calculateur interactif.',
    type: 'article',
  },
};

export default function BudgetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
