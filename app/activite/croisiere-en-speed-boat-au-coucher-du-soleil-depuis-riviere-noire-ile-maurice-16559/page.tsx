import { Metadata } from 'next';
import { getAllActivities } from '@/lib/activities';
import IndividualActivityPage from '@/components/activities/IndividualActivityPage';
import { generateActivityPageSEO } from '@/lib/activity-pages';

const activity = {
  "id": "16559",
  "name": "Croisière en speed boat au coucher du soleil depuis Rivière Noire, Île Maurice",
  "category": "Balade en bateau",
  "description": "Admirez le coucher du soleil depuis le lagon du sud-ouest de l&rsquo;&Icirc;le Maurice lors d&rsquo;une croisi&egrave;re en speed boat depuis Rivi&egrave;re Noire ! A la fois relaxante et d&eacute;paysante, cette croisi&egrave;re au coucher du soleil",
  "url": "https://www.manawa.com/fr-FR/activite/ile-maurice/flic-en-flac-baie-de-tamarin/balade-en-bateau/croisiere-en-speed-boat-au-coucher-du-soleil-depuis-riviere-noire-ile-maurice/16559?_cid=713",
  "image": "https://res.cloudinary.com/manawa/image/private/f_auto,c_fill,w_400,h_300,q_auto/eff55b56fb7f9ff609fd2ab7f0bbecdd",
  "locations": [
    "Flic en Flac",
    "Baie de Tamarin"
  ],
  "price": 276.81,
  "priceBy": "total",
  "rating": null,
  "reviewCount": 0,
  "duration": {
    "min": 150,
    "max": 150,
    "minRaw": "2 h 30",
    "maxRaw": "2 h 30"
  },
  "popular": false,
  "location": {
    "spot": "Flic en Flac - Baie de Tamarin",
    "country": "Île Maurice",
    "countryIsoCode": "MU",
    "coordinates": {
      "lat": -20.36449,
      "lng": 57.3716
    },
    "meetingPoint": "Baba Cool Ltd, MU, La Jetée Rd, Black River 90601, Maurice"
  },
  "details": {
    "spokenLanguages": [
      "French",
      "English"
    ],
    "organizedBy": "Baba Cool",
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
  "lastUpdate": "2024-10-01T18:10:03+00:00",
  "enriched": {
    "about": "Admirez le coucher du soleil depuis le lagon du sud-ouest de l’Île Maurice lors d’une croisière en speed boat depuis Rivière Noire !A la fois relaxante et dépaysante, cette croisière au coucher du soleil à l’Île Maurice vous offrira des moments inoubliables avec vos proches depuis Rivière Noire. A bord d’un speed boat pouvant accueillir au maximum 8 passagers, vous profiterez du coucher de soleil sur le lagon du sud-ouest de l’Île Maurice en petit comité et ferez face à des paysages sublimés par les couleurs chaudes du début de soirée.Le bateau naviguant autour de l’île aux Bénitiers et du Rocher Diamant, vous aurez également l’occasion de faire du snorkeling dans les eaux limpides du lagon riche en faune et en flore sous-marines : l’ambiance de la fin de journée donnera une toute autre atmosphère à votre baignade qui n’en sera que plus agréable ! Et alors que vous admirerez le soleil se coucher sur l’océan Indien, snacks et boissons s’ajouteront à la croisière pour clôre l’expérience sur un moment convivial avec votre skipper.Terminez votre journée en beauté à l’Île Maurice en choisissant cette croisière au coucher du soleil depuis Rivière Noire, au sud de Tamarin et de Flic-en-Flac !",
    "program": null,
    "requirements": {
      "minAge": null,
      "maxWeight": null,
      "swimRequired": true
    },
    "scrapedAt": "2026-01-22T12:01:59.847Z"
  }
};

const group = {
  key: "Balade en bateau - Flic en Flac",
  category: "Balade en bateau",
  mainLocation: "Flic en Flac",
  activities: [activity],
  seoIntent: "Réserver une sortie balade en bateau à Flic en Flac",
  primaryKeyword: "balade en bateau flic en flac",
  needsFusion: false,
};

const seo = generateActivityPageSEO(group);

// Activités similaires (même catégorie)
const relatedActivities = getAllActivities()
  .filter(a => a.category === "Balade en bateau" && a.id !== "16559")
  .slice(0, 4);

export const metadata: Metadata = {
  title: seo.title,
  description: seo.metaDescription,
  keywords: seo.relatedKeywords.join(', '),
};

export default function Page() {
  return <IndividualActivityPage activity={activity} relatedActivities={relatedActivities} seo={seo} />;
}
