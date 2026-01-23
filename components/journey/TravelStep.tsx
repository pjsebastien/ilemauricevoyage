import Link from 'next/link';
import { ReactNode } from 'react';

interface TravelStepProps {
  number: number;
  title: string;
  description: string;
  links?: Array<{
    label: string;
    href: string;
  }>;
  icon?: ReactNode;
}

/**
 * Composant TravelStep
 * Une étape de la checklist de voyage
 * Utilisé sur la page d'accueil pour guider l'utilisateur
 */
export default function TravelStep({
  number,
  title,
  description,
  links,
  icon,
}: TravelStepProps) {
  return (
    <div className="flex gap-4 group">
      {/* Numéro / Icône */}
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-lg group-hover:bg-primary-600 group-hover:text-white transition-colors">
          {icon || number}
        </div>
      </div>

      {/* Contenu */}
      <div className="flex-1 pb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        {/* Liens */}
        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 hover:underline"
              >
                {link.label}
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
