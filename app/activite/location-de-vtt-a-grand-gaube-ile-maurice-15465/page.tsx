import { Metadata } from 'next';
import { getAllActivities } from '@/lib/activities';
import IndividualActivityPage from '@/components/activities/IndividualActivityPage';
import { generateActivityPageSEO } from '@/lib/activity-pages';

const activity = {
  "id": "15465",
  "name": "Location de VTT à Grand Gaube, Île Maurice",
  "category": "VTT",
  "description": "Partez à la découverte de la côte nord-est de l&#x27;Île Maurice, de Cap Malheureux à l&#x27;Île d&#x27;Ambre, en louant un VTT à Grand Gaube !VTT classiques et VTT à assistance électrique vous attendent au nord de la plage de Butte à l&#x2",
  "url": "https://www.manawa.com/fr-FR/activite/ile-maurice/grand-gaube-ile-ambre/vtt/location-de-vtt-a-grand-gaube-ile-maurice/15465?_cid=713",
  "image": "https://res.cloudinary.com/manawa/image/private/f_auto,c_fill,w_400,h_300,q_auto/102e66fbfcb89f90199c74bdfaa540ec",
  "locations": [
    "Grand Gaube, Île d'Ambre"
  ],
  "price": 12,
  "priceBy": "each",
  "rating": 5,
  "reviewCount": 1,
  "duration": {
    "min": null,
    "max": null,
    "minRaw": "1 jour",
    "maxRaw": "1 jour"
  },
  "popular": false,
  "location": {
    "spot": "Grand Gaube, Île d'Ambre",
    "country": "Île Maurice",
    "countryIsoCode": "MU",
    "coordinates": {
      "lat": -19.99803,
      "lng": 57.65381
    },
    "meetingPoint": "Yemaya Adventures - Butte a L Herbe Calodyne MU, 30603, Maurice"
  },
  "details": {
    "spokenLanguages": [
      "French",
      "English"
    ],
    "organizedBy": "Yemaya Adventures",
    "sportId": 1198,
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
  "lastUpdate": "2025-04-14T07:14:06+00:00",
  "enriched": {
    "about": "Partez à la découverte de la côte nord-est de l'Île Maurice, de Cap Malheureux à l'Île d'Ambre, en louant un VTT à Grand Gaube !VTT classiques et VTT à assistance électrique vous attendent au nord de la plage de Butte à l'Herbe pour vous permettre de découvrir le nord-est de l'Île Maurice en autonomie, avec ou sans GPS. Le temps d'une journée, louer un VTT depuis Grand Gaube vous offrira l'opportunité d'aller vous aventurer hors des sentiers battus, entre les champs de canne à sucre de Goodlands ou bien encore le long des plages et de la côte en direction de Cap Malheureux ou de l'Île d'Ambre.La base de location de VTT près de Butte à l'Herbe propose différents types de VTT, dont des VTTAE (à assistance électrique). A vous de choisir celui qui vous conviendra le mieux pour votre escapade d'une journée, et ce en fonction de votre gabarit et des chemins que vous souhaitez emprunter ! Les moniteurs présents sur place seront là pour vous conseiller sur les itinéraires que vous pourrez suivre afin de profiter au maximum de votre sortie.En famille, en couple, entre amis ou même en solo, louer un VTT depuis Grand Gaube vous fera passer de bons moments face aux splendides paysages du nord-est de l'Île Maurice !",
    "program": null,
    "requirements": {
      "minAge": 5,
      "maxWeight": null,
      "swimRequired": false
    },
    "scrapedAt": "2026-01-22T12:01:13.867Z"
  }
};

const group = {
  key: "VTT - Grand Gaube, Île d'Ambre",
  category: "VTT",
  mainLocation: "Grand Gaube, Île d'Ambre",
  activities: [activity],
  seoIntent: "Réserver une sortie vtt à Grand Gaube, Île d'Ambre",
  primaryKeyword: "vtt grand gaube, île d'ambre",
  needsFusion: false,
};

const seo = generateActivityPageSEO(group);

// Activités similaires (même catégorie)
const relatedActivities = getAllActivities()
  .filter(a => a.category === "VTT" && a.id !== "15465")
  .slice(0, 4);

export const metadata: Metadata = {
  title: seo.title,
  description: seo.metaDescription,
  keywords: seo.relatedKeywords.join(', '),
};

export default function Page() {
  return <IndividualActivityPage activity={activity} relatedActivities={relatedActivities} seo={seo} />;
}
