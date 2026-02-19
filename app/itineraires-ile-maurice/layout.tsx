import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Itinéraires île Maurice : 7, 10 ou 14 jours (circuit jour par jour)',
  description: 'Nos itinéraires détaillés pour visiter Maurice : circuit 7 jours, 10 jours, 14 jours. Programme jour par jour, hébergements, activités. Construisez votre road trip parfait.',

  openGraph: {
    title: 'Itinéraires île Maurice : circuits 7, 10 et 14 jours',
    description: 'Découvrez nos circuits détaillés jour par jour pour explorer Maurice. Du nord au sud, organisez le road trip parfait.',
    type: 'article',
  },
};

export default function ItinerairesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
