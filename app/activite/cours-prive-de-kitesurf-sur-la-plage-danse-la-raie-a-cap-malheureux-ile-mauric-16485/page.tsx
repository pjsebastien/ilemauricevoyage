import { Metadata } from 'next';
import { getAllActivities } from '@/lib/activities';
import IndividualActivityPage from '@/components/activities/IndividualActivityPage';
import { generateActivityPageSEO } from '@/lib/activity-pages';

const activity = {
  "id": "16485",
  "name": "Cours privé de kitesurf sur la plage d’Anse la Raie à Cap Malheureux, Île Maurice",
  "category": "Kitesurf",
  "description": "Pratiquez le kitesurf depuis la plage d&rsquo;Anse la Raie &agrave; Cap Malheureux, le spot id&eacute;al pour d&eacute;couvrir le kitesurf &agrave; l&rsquo;&Icirc;le Maurice ! Que vous soyez un grand d&eacute;butant ou que vous ayez d&eacute;j&agrave",
  "url": "https://www.manawa.com/fr-FR/activite/ile-maurice/cap-malheureux/kitesurf/cours-prive-de-kitesurf-sur-la-plage-danse-la-raie-a-cap-malheureux-ile-maurice/16485?_cid=713",
  "image": "https://res.cloudinary.com/manawa/image/private/f_auto,c_fill,w_400,h_300,q_auto/fe470f59f9a873b1912b0a47f50c34b5",
  "locations": [
    "Cap Malheureux"
  ],
  "price": 120,
  "priceBy": "each",
  "rating": null,
  "reviewCount": 0,
  "duration": {
    "min": 120,
    "max": 120,
    "minRaw": "2 h",
    "maxRaw": "2 h"
  },
  "popular": false,
  "location": {
    "spot": "Cap Malheureux",
    "country": "Île Maurice",
    "countryIsoCode": "MU",
    "coordinates": {
      "lat": -19.99035,
      "lng": 57.63273
    },
    "meetingPoint": "Kiteaholic Bastard Mauritius Anse La Raie, RIVIERE DU REMPART MU, 31701, Maurice"
  },
  "details": {
    "spokenLanguages": [
      "English",
      "French"
    ],
    "organizedBy": "Kiteaholic Bastard",
    "sportId": 1179,
    "accessibleToDisabled": false,
    "sensationLevels": {
      "min": null,
      "max": null
    },
    "physicalConditions": {
      "min": {
        "level": 2,
        "name": "Sportif occasionnel"
      },
      "max": {
        "level": 2,
        "name": "Sportif occasionnel"
      }
    }
  },
  "lastUpdate": "2024-12-04T12:39:30+00:00",
  "enriched": {
    "about": "Pratiquez le kitesurf depuis la plage d’Anse la Raie à Cap Malheureux, le spot idéal pour découvrir le kitesurf à l’Île Maurice !Que vous soyez un grand débutant ou que vous ayez déjà quelques bases dans la discipline, les cours privés de kitesurf depuis la plage d’Anse la Raie à Cap Malheureux proposés par les moniteurs indépendants de Kiteaholic Bastard sont faits pour vous ! Adaptés par niveau, ces cours sont concentrés sur des objectifs précis afin de vous permettre de progresser à un bon rythme :- le cours de niveau grand débutant se déroule principalement sur la plage avec la découverte du matériel et des bases du kitesurf, puis sur l’eau pour une petite session de découverte du pilotage de l’aile ;- le cours de niveau débutant / intermédiaire se concentre sur l’amélioration de votre pilotage de l’aile pour vous permettre de générer plus de puissance avec le cerf-volant de traction ;- le cours de niveau intermédiaire vous apprend à coordonner la planche et l’aile afin de découvrir vos premières belles sensations de glisse sur l’eau.D’une durée de 2 heures, ces cours privés de kitesurf à la plage d’Anse la Raie vous offriront non seulement l’opportunité de vous améliorer en kite grâce à l'aide d'un moniteur qui vous sera dédié, mais aussi de pratiquer dans un cadre magnifique. Entre plage de sable blanc et lagon turquoise, vous garderez pour sûr de superbes souvenirs de votre session privée de kitesurf à Cap Malheureux !",
    "program": null,
    "requirements": {
      "minAge": 12,
      "maxWeight": null,
      "swimRequired": true
    },
    "scrapedAt": "2026-01-22T12:00:13.231Z"
  }
};

const group = {
  key: "Kitesurf - Cap Malheureux",
  category: "Kitesurf",
  mainLocation: "Cap Malheureux",
  activities: [activity],
  seoIntent: "Réserver une sortie kitesurf à Cap Malheureux",
  primaryKeyword: "kitesurf cap malheureux",
  needsFusion: false,
};

const seo = generateActivityPageSEO(group);

// Activités similaires (même catégorie)
const relatedActivities = getAllActivities()
  .filter(a => a.category === "Kitesurf" && a.id !== "16485")
  .slice(0, 4);

export const metadata: Metadata = {
  title: seo.title,
  description: seo.metaDescription,
  keywords: seo.relatedKeywords.join(', '),
};

export default function Page() {
  return <IndividualActivityPage activity={activity} relatedActivities={relatedActivities} seo={seo} />;
}
