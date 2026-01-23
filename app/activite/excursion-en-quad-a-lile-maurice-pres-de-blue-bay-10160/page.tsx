import { Metadata } from 'next';
import { getAllActivities } from '@/lib/activities';
import IndividualActivityPage from '@/components/activities/IndividualActivityPage';
import { generateActivityPageSEO } from '@/lib/activity-pages';

const activity = {
  "id": "10160",
  "name": "Excursion en quad à l'Île Maurice, près de Blue Bay",
  "category": "Quad",
  "description": "Que ce soit en tant que pilote ou passager, une excursion en quad près de Bleu Bay vous permettra de faire le plein de sensations tout en découvrant l&#x27;Île Maurice, et plus particulièrement sa côte sud ! Encore sauvage et préservée, la cô",
  "url": "https://www.manawa.com/fr-FR/activite/ile-maurice/blue-bay-maurice/quad-buggy/excursion-en-quad-a-lile-maurice-pres-de-blue-bay/10160?_cid=713",
  "image": "https://res.cloudinary.com/manawa/image/private/f_auto,c_fill,w_400,h_300,q_auto/4f8a6aedc2404d10761b2a13bd4b392d",
  "locations": [
    "Blue Bay",
    "Maurice"
  ],
  "price": 90.7,
  "priceBy": "each",
  "rating": 5,
  "reviewCount": 31,
  "duration": {
    "min": 180,
    "max": 180,
    "minRaw": "3 hrs",
    "maxRaw": "3 hrs"
  },
  "popular": true,
  "location": {
    "spot": "Blue Bay - Maurice",
    "country": "Île Maurice",
    "countryIsoCode": "MU",
    "coordinates": {
      "lat": -20.45135,
      "lng": 57.65159
    },
    "meetingPoint": "DS Adventures - Ayodhya Lane, Trois Boutiques, Mauritius"
  },
  "details": {
    "spokenLanguages": [
      "English",
      "French"
    ],
    "organizedBy": "Ds Adventures",
    "sportId": 1201,
    "accessibleToDisabled": false,
    "sensationLevels": {
      "min": null,
      "max": null
    },
    "physicalConditions": {
      "min": {
        "level": 1,
        "name": "Everybody welcome"
      },
      "max": {
        "level": 1,
        "name": "Everybody welcome"
      }
    }
  },
  "lastUpdate": "2025-02-03T17:04:17+00:00",
  "enriched": {
    "about": "Que ce soit en tant que pilote ou passager, une excursion en quad près de Bleu Bay vous permettra de faire le plein de sensations tout en découvrant l'Île Maurice, et plus particulièrement sa côte sud ! Encore sauvage et préservée, la côte s'étalant de Blue Bay à Souillac regorge de sentiers qu'il est idéal de parcourir en quad.Accompagné d'un guide natif qui vous partagera tout son savoir à propos de l'histoire de Maurice et son environnement. Ces 3 heures de randonnée en quad à l'île Maurice près de Blue Bay vous permettront de découvrir entre autres une forêt de palmiers royaux, la pointe Vacoas et sa plage voisine de La Cambuse, Le Bouchon, ainsi que le Pont Naturel, une formation rocheuse à voir absolument au sud de l'Île Maurice. Des sentiers parmi les champs de canne à sucre et une traversée de la rivière vous offriront aussi de superbes sensations sur la selle de votre engin tout-terrain !En famille, entre amis ou bien en solo, cette sortie en quad au départ de Trois Boutiques vous montrera une autre facette de l'Île Maurice qu'il est indispensable de découvrir pour parfaire son séjour ! N'hésitez donc plus et ajoutez cette belle balade en quad à l'île Maurice à votre programme si vous vous trouvez aux alentours de Blue Bay !",
    "program": null,
    "requirements": {
      "minAge": 6,
      "maxWeight": null,
      "swimRequired": false
    },
    "scrapedAt": "2026-01-22T11:58:31.176Z"
  }
};

const group = {
  key: "Quad - Blue Bay",
  category: "Quad",
  mainLocation: "Blue Bay",
  activities: [activity],
  seoIntent: "Réserver une sortie quad à Blue Bay",
  primaryKeyword: "quad blue bay",
  needsFusion: false,
};

const seo = generateActivityPageSEO(group);

// Activités similaires (même catégorie)
const relatedActivities = getAllActivities()
  .filter(a => a.category === "Quad" && a.id !== "10160")
  .slice(0, 4);

export const metadata: Metadata = {
  title: seo.title,
  description: seo.metaDescription,
  keywords: seo.relatedKeywords.join(', '),
};

export default function Page() {
  return <IndividualActivityPage activity={activity} relatedActivities={relatedActivities} seo={seo} />;
}
