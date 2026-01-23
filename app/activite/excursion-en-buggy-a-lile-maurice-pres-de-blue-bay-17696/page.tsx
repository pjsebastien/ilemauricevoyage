import { Metadata } from 'next';
import { getAllActivities } from '@/lib/activities';
import IndividualActivityPage from '@/components/activities/IndividualActivityPage';
import { generateActivityPageSEO } from '@/lib/activity-pages';

const activity = {
  "id": "17696",
  "name": "Excursion en buggy à l'Île Maurice, près de Blue Bay",
  "category": "Buggy",
  "description": "Découvrez les paysages incroyables du sud de l&#x27;Île Maurice en buggy lors de 3 heures de balade au départ de Trois Boutiques !Encore sauvage et préservée, la côte sud de l&#x27;Île Maurice entre Blue Bay et Souillac regorge de sentiers pa",
  "url": "https://www.manawa.com/fr-FR/activite/ile-maurice/blue-bay-maurice/quad-buggy/excursion-en-buggy-a-lile-maurice-pres-de-blue-bay/17696?_cid=713",
  "image": "https://res.cloudinary.com/manawa/image/private/f_auto,c_fill,w_400,h_300,q_auto/c34ff6fd23aaa37e8e8fd83390fb3c6a",
  "locations": [
    "Blue Bay",
    "Maurice"
  ],
  "price": 199.1,
  "priceBy": "total",
  "rating": 5,
  "reviewCount": 4,
  "duration": {
    "min": 180,
    "max": 180,
    "minRaw": "3 hrs",
    "maxRaw": "3 hrs"
  },
  "popular": false,
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
  "lastUpdate": "2026-01-05T10:52:06+00:00",
  "enriched": {
    "about": "Découvrez les paysages incroyables du sud de l'Île Maurice en buggy lors de 3 heures de balade au départ de Trois Boutiques !Encore sauvage et préservée, la côte sud de l'Île Maurice entre Blue Bay et Souillac regorge de sentiers parfaits pour profiter d'une excursion en buggy depuis Trois Boutiques. A 4 maximum par véhicule, vous aurez le plaisir de partir pour une balade guidée de 3 heures dans les champs de canne à sucre et le long du littoral sud de l'île. Que vous soyez en famille ou entre amis, vous passerez des moments inoubliables à la découverte de paysages propres à cette partie de Maurice !A la suite d'un guide natif qui vous partagera tout son savoir à propos de l'histoire de l'île et son environnement, cette excursion en buggy à l'Île Maurice vous permettra de découvrir entre autres une forêt de palmiers royaux, la plage de pointe Vacoas, Le Souffleur, ainsi que le Pont Naturel, une formation rocheuse à voir absolument sur la côte sud. Des sentiers parmi les champs de canne à sucre et une traversée de la rivière vous permettront de faire le plein de sensations à bord du buggy tout-terrain !Pour changer de la détente sur la plage, au bord du lagon de Blue Bay, rendez-vous sans tarder à Trois Boutiques pour cette excursion en buggy à l'Île Maurice, à moins d'un quart d'heure de route de Mahébourg !",
    "program": null,
    "requirements": {
      "minAge": 5,
      "maxWeight": null,
      "swimRequired": false
    },
    "scrapedAt": "2026-01-22T11:59:12.647Z"
  }
};

const group = {
  key: "Buggy - Blue Bay",
  category: "Buggy",
  mainLocation: "Blue Bay",
  activities: [activity],
  seoIntent: "Réserver une sortie buggy à Blue Bay",
  primaryKeyword: "buggy blue bay",
  needsFusion: false,
};

const seo = generateActivityPageSEO(group);

// Activités similaires (même catégorie)
const relatedActivities = getAllActivities()
  .filter(a => a.category === "Buggy" && a.id !== "17696")
  .slice(0, 4);

export const metadata: Metadata = {
  title: seo.title,
  description: seo.metaDescription,
  keywords: seo.relatedKeywords.join(', '),
};

export default function Page() {
  return <IndividualActivityPage activity={activity} relatedActivities={relatedActivities} seo={seo} />;
}
