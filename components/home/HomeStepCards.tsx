'use client';

import { useState } from 'react';
import Link from 'next/link';

const Icons = {
  Calendar: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  Wallet: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  ),
  MapPin: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Route: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  ),
  Sparkles: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  Info: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  ArrowRight: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  ),
};

const voyageSteps = [
  {
    number: 1,
    title: 'Choisir la période idéale',
    description: 'Découvrez le meilleur moment pour partir selon vos envies : plage, randonnée, plongée...',
    icon: Icons.Calendar,
    color: 'from-amber-500 to-orange-500',
    bgLight: 'bg-amber-50',
    href: '/quand-partir-ile-maurice',
    cta: 'Voir le climat',
  },
  {
    number: 2,
    title: 'Définir votre budget',
    description: 'Calculez le coût de votre séjour : vols, hébergement, activités, repas...',
    icon: Icons.Wallet,
    color: 'from-emerald-500 to-teal-500',
    bgLight: 'bg-emerald-50',
    href: '/budget-ile-maurice',
    cta: 'Calculer mon budget',
  },
  {
    number: 3,
    title: 'Sélectionner vos destinations',
    description: 'Nord festif, sud sauvage, est luxueux ou ouest authentique : comparez les régions.',
    icon: Icons.MapPin,
    color: 'from-blue-500 to-cyan-500',
    bgLight: 'bg-blue-50',
    href: '/ou-aller-ile-maurice',
    cta: 'Explorer les régions',
  },
  {
    number: 4,
    title: 'Planifier votre itinéraire',
    description: 'Circuits de 7, 10 ou 14 jours avec programme jour par jour et conseils locaux.',
    icon: Icons.Route,
    color: 'from-violet-500 to-purple-500',
    bgLight: 'bg-violet-50',
    href: '/itineraires-ile-maurice',
    cta: 'Voir les itinéraires',
  },
  {
    number: 5,
    title: 'Réserver vos activités',
    description: 'Plongée, dauphins, catamaran, randonnées... Réservez les meilleures expériences.',
    icon: Icons.Sparkles,
    color: 'from-pink-500 to-rose-500',
    bgLight: 'bg-pink-50',
    href: '/activites-ile-maurice',
    cta: 'Découvrir les activités',
  },
  {
    number: 6,
    title: 'Préparer votre départ',
    description: 'Visa, santé, carte SIM, location voiture, valise... Tout ce qu\'il faut savoir.',
    icon: Icons.Info,
    color: 'from-slate-500 to-gray-600',
    bgLight: 'bg-slate-50',
    href: '/infos-pratiques-ile-maurice',
    cta: 'Infos pratiques',
  },
];

function StepCard({ step, isActive, onClick }: {
  step: typeof voyageSteps[0];
  isActive: boolean;
  onClick: () => void;
}) {
  const IconComponent = step.icon;

  return (
    <div
      onClick={onClick}
      className={`relative cursor-pointer transition-all duration-300 ${
        isActive ? 'scale-105 z-10' : 'hover:scale-102'
      }`}
    >
      <div className={`
        relative overflow-hidden rounded-2xl border-2 transition-all duration-300
        ${isActive
          ? 'border-transparent shadow-2xl'
          : 'border-gray-100 shadow-lg hover:shadow-xl hover:border-gray-200'
        }
      `}>
        {isActive && (
          <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-10`} />
        )}

        <div className="relative p-6">
          <div className={`
            absolute -top-1 -right-1 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg
            bg-gradient-to-br ${step.color}
          `}>
            {step.number}
          </div>

          <div className={`
            w-14 h-14 rounded-xl flex items-center justify-center mb-4
            ${isActive ? `bg-gradient-to-br ${step.color} text-white` : `${step.bgLight}`}
          `}>
            <IconComponent className={`w-7 h-7 ${isActive ? 'text-white' : 'text-gray-700'}`} />
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{step.description}</p>

          <Link
            href={step.href}
            className={`
              inline-flex items-center gap-2 text-sm font-semibold transition-colors
              ${isActive
                ? 'text-gray-900'
                : 'text-gray-500 hover:text-gray-900'
              }
            `}
            onClick={(e) => e.stopPropagation()}
          >
            {step.cta}
            <Icons.ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function MobileTimeline() {
  return (
    <div className="relative">
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 via-emerald-500 via-blue-500 via-violet-500 via-pink-500 to-slate-500" />

      <div className="space-y-6">
        {voyageSteps.map((step) => {
          const IconComponent = step.icon;
          return (
            <div key={step.number} className="relative flex gap-4">
              <div className={`
                relative z-10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0
                bg-gradient-to-br ${step.color} text-white shadow-lg
              `}>
                <span className="font-bold">{step.number}</span>
              </div>

              <Link href={step.href} className="flex-1 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${step.bgLight} flex-shrink-0`}>
                    <IconComponent className="w-5 h-5 text-gray-700" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{step.description}</p>
                  </div>
                  <Icons.ArrowRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function HomeStepCards() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {voyageSteps.map((step, index) => (
          <StepCard
            key={step.number}
            step={step}
            isActive={activeStep === index}
            onClick={() => setActiveStep(index)}
          />
        ))}
      </div>

      {/* Mobile Timeline */}
      <div className="md:hidden">
        <MobileTimeline />
      </div>
    </>
  );
}
