'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

// Icônes SVG
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
  Check: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ),
  ArrowRight: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  ),
  Sun: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  Plane: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  ),
  Beach: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  Heart: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  ),
  Clock: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Globe: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Euro: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Users: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  Star: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  ChevronDown: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  ),
};

// Données des étapes du voyage
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

// Données des highlights Maurice
const mauriceHighlights = [
  { icon: Icons.Sun, value: '300+', label: 'jours de soleil/an' },
  { icon: Icons.Beach, value: '330 km', label: 'de côtes' },
  { icon: Icons.Globe, value: '11h', label: 'de vol depuis Paris' },
  { icon: Icons.Clock, value: '+3h', label: 'décalage horaire (hiver)' },
  { icon: Icons.Euro, value: '~1 500€', label: 'budget moyen/semaine' },
  { icon: Icons.Users, value: '1.3M', label: 'touristes/an' },
];

// Données des points forts
const whyMaurice = [
  {
    title: 'Plages paradisiaques',
    description: 'Lagons turquoise, sable blanc, récifs coralliens... Les plus belles plages de l\'océan Indien.',
    image: '/images/plage.jpg',
  },
  {
    title: 'Nature préservée',
    description: 'Montagnes, cascades, forêts tropicales et jardins botaniques à explorer.',
    image: '/images/nature.jpg',
  },
  {
    title: 'Culture métissée',
    description: 'Un mélange unique de cultures indienne, africaine, française et chinoise.',
    image: '/images/culture.jpg',
  },
  {
    title: 'Gastronomie savoureuse',
    description: 'Curry, rougaille, dholl puri... Une cuisine fusion aux saveurs inoubliables.',
    image: '/images/food.jpg',
  },
];

// Composant Step Card interactif
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
        {/* Gradient Background when active */}
        {isActive && (
          <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-10`} />
        )}

        <div className="relative p-6">
          {/* Number badge */}
          <div className={`
            absolute -top-1 -right-1 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg
            bg-gradient-to-br ${step.color}
          `}>
            {step.number}
          </div>

          {/* Icon */}
          <div className={`
            w-14 h-14 rounded-xl flex items-center justify-center mb-4
            ${isActive ? `bg-gradient-to-br ${step.color} text-white` : `${step.bgLight}`}
          `}>
            <IconComponent className={`w-7 h-7 ${isActive ? 'text-white' : 'text-gray-700'}`} />
          </div>

          {/* Content */}
          <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{step.description}</p>

          {/* CTA */}
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

// Composant Timeline verticale pour mobile
function MobileTimeline({ steps }: { steps: typeof voyageSteps }) {
  return (
    <div className="relative">
      {/* Ligne verticale */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 via-emerald-500 via-blue-500 via-violet-500 via-pink-500 to-slate-500" />

      <div className="space-y-6">
        {steps.map((step) => {
          const IconComponent = step.icon;
          return (
            <div key={step.number} className="relative flex gap-4">
              {/* Circle */}
              <div className={`
                relative z-10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0
                bg-gradient-to-br ${step.color} text-white shadow-lg
              `}>
                <span className="font-bold">{step.number}</span>
              </div>

              {/* Card */}
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

// Composant FAQ
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Quelle est la meilleure période pour partir à l\'île Maurice ?',
      answer: 'La période idéale s\'étend de mai à décembre, avec un pic entre septembre et novembre. L\'hiver austral (mai-octobre) offre un climat sec et doux, parfait pour les activités. L\'été (novembre-avril) est plus chaud et humide mais les paysages sont verdoyants.',
    },
    {
      question: 'Quel budget prévoir pour un voyage à Maurice ?',
      answer: 'Comptez environ 1 500€ à 2 500€ par personne pour une semaine, incluant vols (600-900€), hébergement (50-150€/nuit), repas (30-60€/jour) et activités. Un voyage luxe peut atteindre 4 000€+ par personne.',
    },
    {
      question: 'Faut-il un visa pour aller à Maurice ?',
      answer: 'Non, les ressortissants français, belges, suisses et canadiens n\'ont pas besoin de visa pour un séjour touristique de moins de 90 jours. Un passeport valide 6 mois après la date de retour suffit.',
    },
    {
      question: 'Combien de temps rester à Maurice ?',
      answer: 'Pour un premier voyage, 10 à 14 jours permettent de bien découvrir l\'île. Une semaine convient si vous restez dans une région. Les voyageurs réguliers apprécient des séjours de 2-3 semaines pour explorer en profondeur.',
    },
    {
      question: 'Vaut-il mieux louer une voiture à Maurice ?',
      answer: 'Oui, la location de voiture est vivement recommandée pour explorer l\'île librement. Comptez 25-40€/jour. Attention : on conduit à gauche ! Alternativement, les taxis et chauffeurs privés sont accessibles.',
    },
    {
      question: 'Quelles sont les activités incontournables ?',
      answer: 'Les must-do incluent : nager avec les dauphins, faire du catamaran à l\'Île aux Cerfs, randonner au Morne Brabant, visiter Chamarel et ses terres colorées, plonger à Blue Bay, et déguster un rhum mauricien.',
    },
  ];

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
            <Icons.ChevronDown className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
            <p className="px-5 pb-5 text-gray-600 leading-relaxed">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// Page principale
export default function HomePage() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/03/ile-maurice-voyage-scaled.jpg"
            alt="Plage paradisiaque de l'île Maurice"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6">
              <Icons.Plane className="w-4 h-4" />
              <span>Mis à jour janvier 2026</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Organiser son voyage à{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                l&apos;île Maurice
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
              Le guide étape par étape pour préparer votre séjour de rêve sur l&apos;île paradisiaque de l&apos;océan Indien.
              Destinations, budget, itinéraires, activités : tout est là.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#organiser"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-emerald-600 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Commencer l&apos;organisation
                <Icons.ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/activites-ile-maurice"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/30 hover:bg-white/20 transition-all"
              >
                <Icons.Sparkles className="w-5 h-5" />
                Voir les activités
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 mt-10 pt-8 border-t border-white/20">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Icons.Star key={star} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <span className="text-white/80 text-sm">
                <strong className="text-white">+2 000</strong> voyageurs accompagnés
              </span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icons.ChevronDown className="w-8 h-8 text-white/60" />
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {mauriceHighlights.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-50 to-emerald-50 mb-3">
                    <IconComponent className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{item.value}</div>
                  <div className="text-sm text-gray-500">{item.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Organisation Section */}
      <section id="organiser" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-semibold mb-4">
              <Icons.Route className="w-4 h-4" />
              Votre feuille de route
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Les 6 étapes pour organiser votre voyage
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Suivez ce parcours pour ne rien oublier et partir l&apos;esprit tranquille
            </p>
          </div>

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
            <MobileTimeline steps={voyageSteps} />
          </div>

          {/* CTA after steps */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">Vous savez déjà ce que vous voulez ?</p>
            <Link
              href="/activites-ile-maurice"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
            >
              Aller directement aux activités
              <Icons.ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Que faire section (preview) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 text-pink-700 text-sm font-semibold mb-4">
                <Icons.Sparkles className="w-4 h-4" />
                Que faire à Maurice
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Des activités pour tous les goûts
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                De la nage avec les dauphins aux randonnées dans les montagnes, en passant par les
                journées catamaran et les visites culturelles : Maurice offre une diversité d&apos;expériences
                unique au monde.
              </p>

              {/* Activity categories */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { name: 'Sports nautiques', count: '15+' },
                  { name: 'Excursions nature', count: '20+' },
                  { name: 'Culture & patrimoine', count: '10+' },
                  { name: 'Gastronomie', count: '8+' },
                ].map((cat) => (
                  <div key={cat.name} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{cat.count}</span>
                    </div>
                    <span className="font-medium text-gray-900">{cat.name}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/que-faire-ile-maurice"
                className="inline-flex items-center gap-2 text-pink-600 font-semibold hover:text-pink-700 transition-colors"
              >
                Voir toutes les idées d&apos;activités
                <Icons.ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Right - Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: 'Dauphins', gradient: 'from-blue-400 to-cyan-500' },
                { title: 'Catamaran', gradient: 'from-emerald-400 to-teal-500' },
                { title: 'Randonnée', gradient: 'from-amber-400 to-orange-500' },
                { title: 'Plongée', gradient: 'from-violet-400 to-purple-500' },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className={`relative h-40 rounded-2xl overflow-hidden ${index === 0 || index === 3 ? 'mt-6' : ''}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
                  <div className="absolute inset-0 flex items-end p-4">
                    <span className="text-white font-bold text-lg">{item.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-4">
              <Icons.MapPin className="w-4 h-4" />
              Où aller à Maurice
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              4 régions, 4 ambiances
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Du nord festif au sud sauvage, chaque coin de l&apos;île a sa personnalité
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { region: 'Nord', description: 'Plages animées, vie nocturne, Grand Baie', color: 'from-cyan-500 to-blue-500', slug: 'grand-baie' },
              { region: 'Sud', description: 'Nature sauvage, falaises, authenticité', color: 'from-emerald-500 to-teal-500', slug: 'le-morne' },
              { region: 'Est', description: 'Resorts de luxe, lagons turquoise', color: 'from-violet-500 to-purple-500', slug: 'ile-aux-cerfs' },
              { region: 'Ouest', description: 'Couchers de soleil, Chamarel, Flic en Flac', color: 'from-amber-500 to-orange-500', slug: 'flic-en-flac' },
            ].map((item) => (
              <Link
                key={item.region}
                href={`/que-faire-${item.slug}`}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
              >
                <div className={`h-32 bg-gradient-to-br ${item.color}`} />
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
                    {item.region}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icons.ArrowRight className="w-5 h-5 text-gray-700" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/ou-aller-ile-maurice"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
            >
              Comparer toutes les destinations
              <Icons.ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pourquoi Maurice */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 text-rose-700 text-sm font-semibold mb-4">
              <Icons.Heart className="w-4 h-4" />
              Pourquoi l&apos;île Maurice
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Une destination qui fait rêver
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyMaurice.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white mb-4">
                  <Icons.Star className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 text-amber-700 text-sm font-semibold mb-4">
              <Icons.Info className="w-4 h-4" />
              Questions fréquentes
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Tout savoir sur votre voyage à Maurice
            </h2>
          </div>

          <FAQ />

          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-4">Vous avez d&apos;autres questions ?</p>
            <Link
              href="/infos-pratiques-ile-maurice"
              className="inline-flex items-center gap-2 text-cyan-600 font-semibold hover:text-cyan-700 transition-colors"
            >
              Consulter le guide pratique complet
              <Icons.ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-blue-600 to-emerald-600" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à vivre l&apos;aventure mauricienne ?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Commencez dès maintenant à planifier votre voyage de rêve. Notre guide vous accompagne à chaque étape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/itineraires-ile-maurice"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Icons.Route className="w-5 h-5" />
              Voir les itinéraires
            </Link>
            <Link
              href="/activites-ile-maurice"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all"
            >
              <Icons.Sparkles className="w-5 h-5" />
              Réserver des activités
            </Link>
          </div>
        </div>
      </section>

      {/* Schema.org structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            "name": "Île Maurice Voyage",
            "description": "Guide complet pour organiser votre voyage à l'île Maurice : destinations, budget, itinéraires, activités et conseils pratiques.",
            "url": "https://ilemauricevoyage.fr",
            "areaServed": {
              "@type": "Country",
              "name": "Mauritius"
            },
            "knowsAbout": [
              "Voyage île Maurice",
              "Activités île Maurice",
              "Destinations Maurice",
              "Budget voyage Maurice",
              "Itinéraires Maurice"
            ]
          })
        }}
      />
    </>
  );
}
