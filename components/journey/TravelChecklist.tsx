import TravelStep from './TravelStep';

interface Step {
  number: number;
  title: string;
  description: string;
  links?: Array<{
    label: string;
    href: string;
  }>;
}

interface TravelChecklistProps {
  steps: Step[];
}

/**
 * Composant TravelChecklist
 * Liste des étapes pour organiser son voyage
 * Navigation progressive verticale avec ligne de connexion
 */
export default function TravelChecklist({ steps }: TravelChecklistProps) {
  return (
    <div className="relative">
      {/* Ligne verticale */}
      <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gray-200" />

      {/* Étapes */}
      <div className="relative space-y-0">
        {steps.map((step) => (
          <TravelStep key={step.number} {...step} />
        ))}
      </div>
    </div>
  );
}
