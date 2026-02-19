'use client';

import { useState } from 'react';

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

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
            <svg className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
            <p className="px-5 pb-5 text-gray-600 leading-relaxed">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
