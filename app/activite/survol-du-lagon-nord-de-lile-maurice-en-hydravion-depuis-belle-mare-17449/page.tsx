import { Metadata } from 'next';
import { getAllActivities } from '@/lib/activities';
import IndividualActivityPage from '@/components/activities/IndividualActivityPage';
import { generateActivityPageSEO } from '@/lib/activity-pages';

const activity = {
  "id": "17449",
  "name": "Survol du lagon nord de l’Île Maurice en hydravion depuis Belle Mare",
  "category": "Vols panoramiques",
  "description": "C’est au bord de la plage Belle Mare, à Quatre Cocos, que vous attend un X-Air Hawk, un hydravion à 2 places (pilote + 1 passager) qui vous offrira des vues spectaculaires sur l’un des plus grands lagons de l’Île Maurice. Pendant 15, 20 ou 3",
  "url": "https://www.manawa.com/fr-FR/activite/ile-maurice/trou-deau-douce-ile-aux-cerfs/vols-panoramiques/survol-du-lagon-nord-de-l-ile-maurice-en-hydravion-depuis-belle-mare/17449?_cid=713",
  "image": "https://res.cloudinary.com/manawa/image/private/f_auto,c_fill,w_400,h_300,q_auto/eic4fg7edu5spcdidvhj",
  "locations": [
    "Trou d'Eau Douce",
    "Belle Mare"
  ],
  "price": 170,
  "priceBy": "each",
  "rating": 5,
  "reviewCount": 8,
  "duration": {
    "min": 35,
    "max": 90,
    "minRaw": "35 min",
    "maxRaw": "1 h 30"
  },
  "popular": true,
  "location": {
    "spot": "Trou d'Eau Douce - Ile aux Cerfs",
    "country": "Île Maurice",
    "countryIsoCode": "MU",
    "coordinates": {
      "lat": -20.202432003237,
      "lng": 57.784639223482
    },
    "meetingPoint": "Sur la plage de la Residence Thalassa - QQWM+PQ7, Quatre Cocos, Maurice"
  },
  "details": {
    "spokenLanguages": [
      "French",
      "English"
    ],
    "organizedBy": "Sealoy Flights Mauritius",
    "sportId": 1528,
    "accessibleToDisabled": false,
    "sensationLevels": {
      "min": null,
      "max": null
    },
    "physicalConditions": {
      "min": {
        "level": 1,
        "name": "Accessible à tous"
      },
      "max": {
        "level": 1,
        "name": "Accessible à tous"
      }
    }
  },
  "lastUpdate": "2025-02-04T06:43:06+00:00",
  "enriched": {
    "about": "C’est au bord de la plage Belle Mare, à Quatre Cocos, que vous attend un X-Air Hawk, un hydravion à 2 places (pilote + 1 passager) qui vous offrira des vues spectaculaires sur l’un des plus grands lagons de l’Île Maurice. Pendant 15, 20 ou 30 minutes selon votre choix, vous profiterez d’un vol panoramique au-dessus de l’Île d’Ambre et toute la côte nord-est de l’île, de Roches Noires à Cap Malheureux : à vous les plus belles vues sur les récifs coralliens au travers des eaux translucides du lagon, sur les plages de sable blanc et sur la mangrove !Vous monterez à bord de l’appareil aux côtés d’un pilote diplômé et expérimenté qui vous commentera ce vol en hydravion depuis Belle Mare, l’idéal pour vous permettre d’en connaître davantage à propos de la faune et flore de l’Île Maurice, mais aussi son histoire. De plus, l’hydravion vous offrira des sensations de vol uniques, notamment lors du décollage, puis de l’amerrissage !Avec le lagon et l’océan sous vos pieds, et plus loin une vue pouvant aller jusqu’aux montagnes de Moka, près de Port-Louis, ce vol en hydravion au-dessus du lagon nord-est de l’Île Maurice depuis Belle Mare vous laissera des images inoubliables !",
    "program": null,
    "requirements": {
      "minAge": 15,
      "maxWeight": 100,
      "swimRequired": false
    },
    "scrapedAt": "2026-01-22T11:58:38.440Z"
  }
};

const group = {
  key: "Vols panoramiques - Trou d'Eau Douce",
  category: "Vols panoramiques",
  mainLocation: "Trou d'Eau Douce",
  activities: [activity],
  seoIntent: "Réserver une sortie vols panoramiques à Trou d'Eau Douce",
  primaryKeyword: "vols panoramiques trou d'eau douce",
  needsFusion: false,
};

const seo = generateActivityPageSEO(group);

// Activités similaires (même catégorie)
const relatedActivities = getAllActivities()
  .filter(a => a.category === "Vols panoramiques" && a.id !== "17449")
  .slice(0, 4);

export const metadata: Metadata = {
  title: seo.title,
  description: seo.metaDescription,
  keywords: seo.relatedKeywords.join(', '),
};

export default function Page() {
  return <IndividualActivityPage activity={activity} relatedActivities={relatedActivities} seo={seo} />;
}
