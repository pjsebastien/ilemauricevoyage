import { Metadata } from 'next';
import { getAllActivities } from '@/lib/activities';
import IndividualActivityPage from '@/components/activities/IndividualActivityPage';
import { generateActivityPageSEO } from '@/lib/activity-pages';

const activity = {
  "id": "13212",
  "name": "Excursion à l'île aux Aigrettes, plage de Gris Gris et du sud-est de l'Île Maurice",
  "category": "Randonnée",
  "description": "Passez une journée de rêve à la découverte de l&#x27;île aux Aigrettes, Blue Bay, La Vanille Nature Park et la plage Gris Gris à Maurice !Le sud-est de l&#x27;Île Maurice est réputé pour son large lagon abritant l&#x27;île aux Aigrettes, î",
  "url": "https://www.manawa.com/fr-FR/activite/ile-maurice/blue-bay-maurice/randonnee/excursion-a-lile-aux-aigrettes-plage-de-gris-gris-et-du-sud-est-de-lile-maurice/13212?_cid=713",
  "image": "https://res.cloudinary.com/manawa/image/private/f_auto,c_fill,w_400,h_300,q_auto/8b52e4694a66f844026c846b112bfb0c",
  "locations": [
    "Blue Bay",
    "Maurice"
  ],
  "price": 56.67,
  "priceBy": "each",
  "rating": null,
  "reviewCount": 0,
  "duration": {
    "min": null,
    "max": null,
    "minRaw": "1 jour",
    "maxRaw": "1 jour"
  },
  "popular": false,
  "location": {
    "spot": "Blue Bay - Maurice",
    "country": "Île Maurice",
    "countryIsoCode": "MU",
    "coordinates": {
      "lat": -20.42479,
      "lng": 57.72319
    },
    "meetingPoint": "Pick up à votre hébergement sur toute l'île pour vous emmener sur les lieux de l'activité : après réservation, il vous faudra informer le guide de la position exacte de votre hébergement"
  },
  "details": {
    "spokenLanguages": [
      "French",
      "English"
    ],
    "organizedBy": "Bonjour Mauritius",
    "sportId": 1194,
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
  "lastUpdate": "2024-09-20T07:19:39+00:00",
  "enriched": {
    "about": "Passez une journée de rêve à la découverte de l'île aux Aigrettes, Blue Bay, La Vanille Nature Park et la plage Gris Gris à Maurice !Le sud-est de l'Île Maurice est réputé pour son large lagon abritant l'île aux Aigrettes, île déclarée réserve naturelle en 1965 de par sa faune et sa flore unique qu'il est nécessaire de protéger. Située entre Mahébourg et Blue Bay, votre visite sur l'île aux Aigrettes vous permettra de découvrir des plantes et des animaux locaux tels que le pigeon rose, la tortue géante d'Aldabra, ou bien encore le gecko diurne orné de l'Île Maurice, et ainsi vous sensibiliser à la protection de l'environnement.Suite à votre matinée sur l'île aux Aigrettes, vous aurez le plaisir de profiter à votre rythme du reste de votre excursion au sud-est de Maurice : temps libre pour déjeuner et vous détendre sur la plage de Blue Bay, visite de La Vanille Nature Park pour admirer un grand nombre de reptiles et d'insectes, et enfin passage à la plage Gris Gris pour aller voir la Roche qui pleure.Cette excursion sera pour vous le moment de non seulement découvrir des lieux incontournables sur l'Île Maurice, mais aussi profiter selon vos envies d'un tour personnalisé pour passer une journée incroyable !",
    "program": null,
    "requirements": {
      "minAge": null,
      "maxWeight": null,
      "swimRequired": false
    },
    "scrapedAt": "2026-01-22T12:00:25.342Z"
  }
};

const group = {
  key: "Randonnée - Blue Bay",
  category: "Randonnée",
  mainLocation: "Blue Bay",
  activities: [activity],
  seoIntent: "Réserver une sortie randonnée à Blue Bay",
  primaryKeyword: "randonnée blue bay",
  needsFusion: false,
};

const seo = generateActivityPageSEO(group);

// Activités similaires (même catégorie)
const relatedActivities = getAllActivities()
  .filter(a => a.category === "Randonnée" && a.id !== "13212")
  .slice(0, 4);

export const metadata: Metadata = {
  title: seo.title,
  description: seo.metaDescription,
  keywords: seo.relatedKeywords.join(', '),
};

export default function Page() {
  return <IndividualActivityPage activity={activity} relatedActivities={relatedActivities} seo={seo} />;
}
