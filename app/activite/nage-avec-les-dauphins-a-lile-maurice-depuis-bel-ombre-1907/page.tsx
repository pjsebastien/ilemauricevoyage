import { Metadata } from 'next';
import { getAllActivities } from '@/lib/activities';
import IndividualActivityPage from '@/components/activities/IndividualActivityPage';
import { generateActivityPageSEO } from '@/lib/activity-pages';

const activity = {
  "id": "1907",
  "name": "Nage avec les dauphins à l'Île Maurice depuis Bel Ombre",
  "category": "Snorkeling",
  "description": "Profitez d'une excursion en bateau d'une demi-journ&eacute;e &agrave; l'&Icirc;le Maurice pour nager avec les dauphins ! Que vous soyez en couple, en famille ou avec un groupe d'amis, profitez de cette activit&eacute; hors du commun &agrave; bord d'u",
  "url": "https://www.manawa.com/fr-FR/activite/ile-maurice/le-morne/snorkeling/nage-avec-les-dauphins-a-lile-maurice-depuis-bel-ombre/1907?_cid=713",
  "image": "https://res.cloudinary.com/manawa/image/private/f_auto,c_fill,w_400,h_300,q_auto/2e48bad42caf4d35b81acb528fb1fe86",
  "locations": [
    "Le Morne"
  ],
  "price": 400,
  "priceBy": "total",
  "rating": 5,
  "reviewCount": 2,
  "duration": {
    "min": null,
    "max": null,
    "minRaw": "1 demi journée",
    "maxRaw": "1 demi journée"
  },
  "popular": false,
  "location": {
    "spot": "Le Morne",
    "country": "Île Maurice",
    "countryIsoCode": "MU",
    "coordinates": {
      "lat": -20.503443,
      "lng": 57.407688
    },
    "meetingPoint": "C Beach Club à Bel Ombre"
  },
  "details": {
    "spokenLanguages": [
      "English",
      "French",
      "German"
    ],
    "organizedBy": "KiteGlobing - Bel Ombre",
    "sportId": 1185,
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
  "lastUpdate": "2025-02-03T16:23:10+00:00",
  "enriched": {
    "about": "Profitez d'une excursion en bateau d'une demi-journée à l'Île Maurice pour nager avec les dauphins !Que vous soyez en couple, en famille ou avec un groupe d'amis, profitez de cette activité hors du commun à bord d'un bateau rien que pour vous ! Vous êtes en quête de l'expérience suprême qui fera de vos vacances à Maurice les plus inoubliables qui soient ? Rejoignez donc KiteGlobing pour cette sortie d'une demi-journée pendant laquelle vous nagerez avec les dauphins !Au départ de Bel Ombre, près du Morne au sud de l'Île Maurice, vous embarquerez pour vivre un moment exceptionnel en mer. Tandis que vous admirerez le superbe paysage côtier du sud de Maurice tout en naviguant, laissez-vous tenter par les rafraîchissement et collations qui vous seront servis à bord avant de plonger avec les dauphins ! Vous pourrez faire du snorkeling en compagnie de ces magnifiques animaux autant de fois que vous le souhaitez, une opportunité à ne pas manquer à Maurice.Enfin, pour terminer cette sortie en mer en beauté, vous serez conduit vers l'île aux Bénitiers et son rocher de cristal, un lieu incontournable sur l'Île Maurice ! Une nouvelle session de snorkeling avec les poissons du lagon vous y attendra avant le retour à Bel Ombre.",
    "program": null,
    "requirements": {
      "minAge": null,
      "maxWeight": null,
      "swimRequired": true
    },
    "scrapedAt": "2026-01-22T11:59:34.429Z"
  }
};

const group = {
  key: "Snorkeling - Le Morne",
  category: "Snorkeling",
  mainLocation: "Le Morne",
  activities: [activity],
  seoIntent: "Réserver une sortie snorkeling à Le Morne",
  primaryKeyword: "snorkeling le morne",
  needsFusion: false,
};

const seo = generateActivityPageSEO(group);

// Activités similaires (même catégorie)
const relatedActivities = getAllActivities()
  .filter(a => a.category === "Snorkeling" && a.id !== "1907")
  .slice(0, 4);

export const metadata: Metadata = {
  title: seo.title,
  description: seo.metaDescription,
  keywords: seo.relatedKeywords.join(', '),
};

export default function Page() {
  return <IndividualActivityPage activity={activity} relatedActivities={relatedActivities} seo={seo} />;
}
