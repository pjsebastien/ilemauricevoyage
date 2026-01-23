import { Metadata } from 'next';
import { getAllActivities } from '@/lib/activities';
import IndividualActivityPage from '@/components/activities/IndividualActivityPage';
import { generateActivityPageSEO } from '@/lib/activity-pages';

const activity = {
  "id": "14179",
  "name": "Croisière en catamaran à l’île aux Cerfs depuis la Pointe Jérôme à Mahébourg, Île Maurice",
  "category": "Balade en catamaran",
  "description": "Parcourez les lagons de Mah&eacute;bourg et de Trou d&rsquo;Eau Douce lors d&rsquo;une croisi&egrave;re en catamaran le temps d&rsquo;une journ&eacute;e avec d&eacute;couverte de l&rsquo;&icirc;le aux Cerfs ! C&rsquo;est &agrave; bord d&rsquo;un cata",
  "url": "https://www.manawa.com/fr-FR/activite/ile-maurice/blue-bay-maurice/balade-en-bateau/croisiere-en-catamaran-a-lile-aux-cerfs-depuis-la-pointe-jerome-a-mahebourg-ile-maurice/14179?_cid=713",
  "image": "https://res.cloudinary.com/manawa/image/private/f_auto,c_fill,w_400,h_300,q_auto/686fd20e812710777c6cfd42485a1108",
  "locations": [
    "Blue Bay",
    "Maurice"
  ],
  "price": 74,
  "priceBy": "each",
  "rating": 5,
  "reviewCount": 9,
  "duration": {
    "min": 420,
    "max": 420,
    "minRaw": "7 h",
    "maxRaw": "7 h"
  },
  "popular": true,
  "location": {
    "spot": "Blue Bay - Maurice",
    "country": "Île Maurice",
    "countryIsoCode": "MU",
    "coordinates": {
      "lat": -20.42472,
      "lng": 57.72321
    },
    "meetingPoint": "Pointe Jérôme Embarkation Point, HPGF+474, Mahébourg, Maurice"
  },
  "details": {
    "spokenLanguages": [
      "English",
      "French"
    ],
    "organizedBy": "Catamaran Cruises Mauritius",
    "sportId": 1542,
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
  "lastUpdate": "2025-01-12T09:12:14+00:00",
  "enriched": {
    "about": "Parcourez les lagons de Mahébourg et de Trou d’Eau Douce lors d’une croisière en catamaran le temps d’une journée avec découverte de l’île aux Cerfs !C’est à bord d’un catamaran tout confort que vous aurez le plaisir de passer une journée sur les lagons de Mahébourg et de Trou d’Eau Douce, deux des plus importants lagons de l’Île Maurice, avec une escale sur l’île aux Cerfs. Après le départ de la croisière depuis la Pointe Jérôme, entre Mahébourg et Blue Bay, le capitaine vous emmènera sur un site de snorkeling aux eaux cristallines où vous pourrez profiter d’une baignade à la rencontre des poissons de récifs du lagon, ou bien simplement vous relaxer sur le filet trampoline du catamaran tout en sirotant une boisson fraîche.Le déjeuner se fera ensuite à bord du catamaran même, avant de rejoindre l’île aux Cerfs au sud de Trou d’Eau Douce, un lieu magnifique aux plages de sable blanc incroyables ! Vous aurez alors le temps de vous promener sur l’île pour admirer ses paysages ou de faire quelques activités de plages avant le retour à la Pointe Jérôme. Le but de ce tour en catamaran à l’île aux Cerfs étant que vous profitiez pleinement de votre journée sur les lagons de Mahébourg et de Trou d’Eau Douce.Que vous soyez en famille ou entre amis, cette croisière en catamaran à l’île aux Cerfs sera pour vous le moment de vous détendre tout en découvrant les sublimes lagons de l’est de l’Île Maurice, avec un équipage aux petits soins pour vous tout au long de la navigation !",
    "program": null,
    "requirements": {
      "minAge": null,
      "maxWeight": null,
      "swimRequired": false
    },
    "scrapedAt": "2026-01-22T11:58:53.105Z"
  }
};

const group = {
  key: "Balade en catamaran - Blue Bay",
  category: "Balade en catamaran",
  mainLocation: "Blue Bay",
  activities: [activity],
  seoIntent: "Réserver une sortie balade en catamaran à Blue Bay",
  primaryKeyword: "balade en catamaran blue bay",
  needsFusion: false,
};

const seo = generateActivityPageSEO(group);

// Activités similaires (même catégorie)
const relatedActivities = getAllActivities()
  .filter(a => a.category === "Balade en catamaran" && a.id !== "14179")
  .slice(0, 4);

export const metadata: Metadata = {
  title: seo.title,
  description: seo.metaDescription,
  keywords: seo.relatedKeywords.join(', '),
};

export default function Page() {
  return <IndividualActivityPage activity={activity} relatedActivities={relatedActivities} seo={seo} />;
}
