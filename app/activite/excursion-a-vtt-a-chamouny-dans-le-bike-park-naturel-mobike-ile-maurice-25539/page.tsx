import { Metadata } from 'next';
import { getAllActivities } from '@/lib/activities';
import IndividualActivityPage from '@/components/activities/IndividualActivityPage';
import { generateActivityPageSEO } from '@/lib/activity-pages';

const activity = {
  "id": "25539",
  "name": "Excursion à VTT à Chamouny dans le Bike Park naturel Mo’Bike, Île Maurice",
  "category": "VTT",
  "description": "Ce sont plus de 25 km de pistes de différents niveaux qui vous attendent dans ce Bike Park à Chamouny, dans le sud de l’Île Maurice. Ce super terrain de jeu pour les vélos offre un espace parfaitement sécurisé pour pratiquer le VTT de descent",
  "url": "https://www.manawa.com/fr-FR/activite/ile-maurice/chamouny/vtt/excursion-a-vtt-a-chamouny-dans-le-bike-park-naturel-mo-bike-ile-maurice/25539?_cid=713",
  "image": "https://res.cloudinary.com/manawa/image/private/f_auto,c_fill,w_400,h_300,q_auto/ji9gkeqzwneejmugolxh",
  "locations": [
    "Chamouny"
  ],
  "price": 50,
  "priceBy": "each",
  "rating": null,
  "reviewCount": 0,
  "duration": {
    "min": 300,
    "max": 300,
    "minRaw": "3.5 hrs",
    "maxRaw": "3.5 hrs"
  },
  "popular": false,
  "location": {
    "spot": "Chamouny",
    "country": "Île Maurice",
    "countryIsoCode": "MU",
    "coordinates": {
      "lat": -20.4652618,
      "lng": 57.4602806
    },
    "meetingPoint": "Mo'Bike - Mauritius Biking Trails - Impasse de la Foret, Chamouny, Mauritius"
  },
  "details": {
    "spokenLanguages": [
      "English",
      "French"
    ],
    "organizedBy": "Mo’Bike",
    "sportId": 1198,
    "accessibleToDisabled": false,
    "sensationLevels": {
      "min": null,
      "max": null
    },
    "physicalConditions": {
      "min": {
        "level": 2,
        "name": "Occasionally sporty"
      },
      "max": {
        "level": 2,
        "name": "Occasionally sporty"
      }
    }
  },
  "lastUpdate": "2025-07-09T08:52:05+00:00",
  "enriched": {
    "about": "Ce sont plus de 25 km de pistes de différents niveaux qui vous attendent dans ce Bike Park à Chamouny, dans le sud de l’Île Maurice. Ce super terrain de jeu pour les vélos offre un espace parfaitement sécurisé pour pratiquer le VTT de descente tout comme de simples balades, sur des pistes balisées et entretenues régulièrement. Et pour en profiter, il suffit de réserver un pack “Full Pass” qui vous permettra d’avoir accès à toutes les pistes pendant 3 heures, avec une navette pour vous conduire au point de départ des pistes en illimité ! Tout l’équipement (VTT Enduro, casque et gants) vous sera fourni, mais il est également possible de venir avec votre propre vélo, à condition qu’il respecte les critères de qualité requis pour vivre cette expérience de VTT à Chamouny en toute sécurité.Que vous soyez pratiquant occasionnel ou régulier, l’équipe sur place vous dirigera vers les pistes adaptées à votre niveau afin que vous puissiez les découvrir en toute autonomie. Vous trouverez des pistes de niveau vert (pour les débutants, elles sont larges, fluides et accessibles à tous), des pistes de niveau bleu (niveau intermédiaire avec quelques obstacles, dont des virages, petites bosses et racines) ainsi que des pistes de niveau rouge (plus difficiles avec des pentes techniques, de la vitesse et des obstacles). Et, peu importe l’itinéraire que vous emprunterez, vous aurez toujours le plaisir de pédaler face à de superbes paysages sur la côte sud de l’Île Maurice et l’océan, entre forêts et collines où vous pourrez peut-être rencontrer la faune locale (cerfs, singes, chauves-souris, etc.) !Aux côtés d’un coach ou non selon vos besoins, cette expérience de VTT à Chamouny dans le Bike Park Mo’Bike vous offrira une agréable sortie en plein air, à seulement 20 minutes de route de Bel Ombre et de Souillac !",
    "program": [
      {
        "step": 1,
        "description": "Accueil au « Cerf d’Or », à l’entrée du domaine privé de Saint-Félix, 30 minutes avant le début de l activité"
      },
      {
        "step": 2,
        "description": "Enregistrement et formalités administratives (vérification de votre pièce d’identité, signature de la décharge de responsabilité et briefing sur les règles du Bike Park)"
      },
      {
        "step": 3,
        "description": "Attribution des VTT et du matériel de sécurité avec réglages au besoin"
      },
      {
        "step": 4,
        "description": "Briefing de sécurité sur le balisage des pistes, les zones à risque, le protocole d’urgence et les numéros utiles"
      },
      {
        "step": 5,
        "description": "Prise en main des VTT et évaluation de votre niveau sur un petit circuit technique qui permettra de vous orienter vers les pistes adaptées"
      },
      {
        "step": 6,
        "description": "Montée en navette 4x4 jusqu au sommet du Bike Park avec rappel des itinéraires et du balisage"
      },
      {
        "step": 7,
        "description": "Départ pour 3 heures de VTT dans le Bike Park : vous pourrez enchaîner les descentes à votre rythme, avec à chaque arrivée en bas de piste la navette qui vous attend pour remonter, tout en pouvant faire une pause entre temps à la zone de repos du parc comprenant un café"
      },
      {
        "step": 8,
        "description": "A la fin des 3 heures, restitution du matériel prêté et débriefing de l expérience avant de terminer l activité"
      }
    ],
    "requirements": {
      "minAge": 10,
      "maxWeight": null,
      "swimRequired": false
    },
    "scrapedAt": "2026-01-22T12:01:42.851Z"
  }
};

const group = {
  key: "VTT - Chamouny",
  category: "VTT",
  mainLocation: "Chamouny",
  activities: [activity],
  seoIntent: "Réserver une sortie vtt à Chamouny",
  primaryKeyword: "vtt chamouny",
  needsFusion: false,
};

const seo = generateActivityPageSEO(group);

// Activités similaires (même catégorie)
const relatedActivities = getAllActivities()
  .filter(a => a.category === "VTT" && a.id !== "25539")
  .slice(0, 4);

export const metadata: Metadata = {
  title: seo.title,
  description: seo.metaDescription,
  keywords: seo.relatedKeywords.join(', '),
};

export default function Page() {
  return <IndividualActivityPage activity={activity} relatedActivities={relatedActivities} seo={seo} />;
}
