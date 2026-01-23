import Link from 'next/link';
import Button from '@/components/ui/Button';

interface NextStepCTAProps {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

/**
 * Composant NextStepCTA
 * Bloc "Prochaine étape" en fin de page
 * Guide l'utilisateur vers l'action suivante dans son parcours
 */
export default function NextStepCTA({
  title,
  description,
  ctaLabel,
  ctaHref,
}: NextStepCTAProps) {
  return (
    <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg p-8 text-center text-white shadow-lg">
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-primary-100 mb-6 max-w-2xl mx-auto">{description}</p>
      <Link href={ctaHref}>
        <Button variant="secondary" size="lg">
          {ctaLabel}
        </Button>
      </Link>
    </div>
  );
}
