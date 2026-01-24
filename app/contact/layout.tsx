import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Île Maurice Voyage',
  description: 'Contactez l\'équipe d\'Île Maurice Voyage. Une question sur votre voyage ? Une suggestion ? Nous vous répondons sous 48h.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
