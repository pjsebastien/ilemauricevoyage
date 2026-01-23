import { Metadata } from 'next';
import { getAllActivities } from '@/lib/activities';
import IndividualActivityPage from '@/components/activities/IndividualActivityPage';
import { generateActivityPageSEO } from '@/lib/activity-pages';

const activity = {
  "id": "26097",
  "name": "Excursion de snorkeling au Coin de Mire, à l'Île Plate et à l'Îlot Gabriel depuis Cap Malheureux, Île Maurice",
  "category": "Snorkeling",
  "description": "Petits bijoux naturels encore préservés, les îles du nord de l&#x27;Île Maurice sont des spots parfaits pour faire du snorkeling depuis Cap Malheureux. Entre leurs eaux turquoise chaudes et leur riche faune et flore sous-marine, ils offrent les c",
  "url": "https://www.manawa.com/fr-FR/activite/ile-maurice/cap-malheureux/snorkeling/excursion-snorkeling-coin-de-mire-ile-plate-ilot-gabriel-depuis-cap-malheureux-maurice/26097?_cid=713",
  "image": "https://res.cloudinary.com/manawa/image/private/f_auto,c_fill,w_400,h_300,q_auto/xnitlqufflh4ijr1xfcs",
  "locations": [
    "Cap Malheureux"
  ],
  "price": 110,
  "priceBy": "each",
  "rating": null,
  "reviewCount": 0,
  "duration": {
    "min": 420,
    "max": 420,
    "minRaw": "7 hrs",
    "maxRaw": "7 hrs"
  },
  "popular": false,
  "location": {
    "spot": "Cap Malheureux",
    "country": "Île Maurice",
    "countryIsoCode": "MU",
    "coordinates": {
      "lat": -19.9859528,
      "lng": 57.6053958
    },
    "meetingPoint": "Bain Boeuf Public Beach - Cap Malheureux, Mauritius"
  },
  "details": {
    "spokenLanguages": [
      "English",
      "French"
    ],
    "organizedBy": "Evasea",
    "sportId": 1185,
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
  "lastUpdate": "2026-01-19T09:53:29+00:00",
  "enriched": {
    "about": "Petits bijoux naturels encore préservés, les îles du nord de l'Île Maurice sont des spots parfaits pour faire du snorkeling depuis Cap Malheureux. Entre leurs eaux turquoise chaudes et leur riche faune et flore sous-marine, ils offrent les conditions idéales pour se mettre à l'eau en palmes, masque et tuba. Alors pour en profiter, pourquoi ne pas vous joindre à cette excursion en bateau rapide dédiée au snorkeling au Coin de Mire, à l'Île Plate et à l'Îlot Gabriel ? Vous aurez le plaisir de vous baigner à chacun de ses 3 sites, avec palmes, masques et tubas à votre disposition pour observer leurs fonds marins. Entre poissons tropicaux, coraux, et même tortues si vous avez de la chance, vous ne manquerez pas d'en prendre plein les yeux !Cette balade en bateau avec snorkeling au départ de Cap Malheureux vous mènera pendant 7 heures à la découverte du superbe cadre offert par le Coin de Mire, l'Île Plate et l'Îlot Gabriel. Vous serez confortablement installés à bord d'un bateau rapide qui vous permettra de rejoindre assez vite chacun des arrêts prévus, vous laissant un maximum de temps sur place pour profiter de vos moments de baignade et de snorkeling. De plus, vous dégusterez un repas 100% local pour le déjeuner, et ce sur une plage de l'Île Plate (ou à bord du bateau selon conditions météo) pour une expérience des plus mémorables. L'équipage sera aux petits soins pour vous, vous assurant de vivre une virée en bateau inoubliable, qui plus est en petit comité de 10 participants maximum.Que vous souhaitiez profiter à fond de chaque arrêt baignade en vous mettant à l'eau ou tout simplement vous détendre à bord du bateau et sur la plage, cette excursion snorkeling en bateau au Coin de Mire, à l'Île Plate et à l'Îlot Gabriel depuis Cap Malheureux saura combler vos envies. De magnifiques paysages sauvages vous attendent, alors n'hésitez plus et réservez dès maintenant votre place à bord avec Evasea !",
    "program": [
      {
        "step": 1,
        "description": "Rencontre avec l équipage sur la plage publique de Bain Bœuf à Cap Malheureux, au moins 5 minutes avant le début de l activité (parking gratuit et toilettes disponibles à proximité)"
      },
      {
        "step": 2,
        "description": "Briefing sur le déroulé de l activité, les consignes de sécurité à bord et les bonnes pratiques de snorkeling"
      },
      {
        "step": 3,
        "description": "Embarquement à bord du bateau"
      },
      {
        "step": 4,
        "description": "Départ pour 7 heures d excursion aux îles du nord de l Île Maurice :navigation pendant 30 à 40 minutes jusqu à l Îlot Gabriel"
      },
      {
        "step": 5,
        "description": "premier arrêt de snorkeling libre à l Îlot Gabriel"
      },
      {
        "step": 6,
        "description": "navigation rapide jusqu à l île Plate, juste en face de l Îlot Gabriel"
      },
      {
        "step": 7,
        "description": "pause déjeuner sur la plage ou à bord du bateau selon la météo"
      },
      {
        "step": 8,
        "description": "temps libre pour se baigner et faire du snorkeling"
      },
      {
        "step": 9,
        "description": "navigation pendant 20 à 30 minutes jusqu au Coin de Mire"
      },
      {
        "step": 10,
        "description": "dernier arrêt de snorkeling libre au Coin de Mire"
      },
      {
        "step": 11,
        "description": "navigation retour à Cap Malheureux (10 à 15 minutes)"
      },
      {
        "step": 12,
        "description": "De retour à la plage de Bain Bœuf, débarquement et fin de l activité prévue vers 14h30"
      }
    ],
    "requirements": {
      "minAge": null,
      "maxWeight": null,
      "swimRequired": false
    },
    "scrapedAt": "2026-01-22T12:01:33.200Z"
  }
};

const group = {
  key: "Snorkeling - Cap Malheureux",
  category: "Snorkeling",
  mainLocation: "Cap Malheureux",
  activities: [activity],
  seoIntent: "Réserver une sortie snorkeling à Cap Malheureux",
  primaryKeyword: "snorkeling cap malheureux",
  needsFusion: false,
};

const seo = generateActivityPageSEO(group);

// Activités similaires (même catégorie)
const relatedActivities = getAllActivities()
  .filter(a => a.category === "Snorkeling" && a.id !== "26097")
  .slice(0, 4);

export const metadata: Metadata = {
  title: seo.title,
  description: seo.metaDescription,
  keywords: seo.relatedKeywords.join(', '),
};

export default function Page() {
  return <IndividualActivityPage activity={activity} relatedActivities={relatedActivities} seo={seo} />;
}
