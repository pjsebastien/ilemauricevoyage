import { Metadata } from 'next';
import { getAllActivities } from '@/lib/activities';
import IndividualActivityPage from '@/components/activities/IndividualActivityPage';
import { generateActivityPageSEO } from '@/lib/activity-pages';

const activity = {
  "id": "18022",
  "name": "Excursion en kayak de mer à l'île aux Bénitiers, Île Maurice",
  "category": "Kayak",
  "description": "Entourée d&#x27;un lagon aux eaux turquoise à couper le souffle, l&#x27;île aux Bénitiers est un site incroyable pour faire du kayak de mer au Morne, au sud-ouest de l&#x27;Île Maurice. Accompagnés par un guide local, vous naviguerez paisiblem",
  "url": "https://www.manawa.com/fr-FR/activite/ile-maurice/le-morne/kayak-de-mer/excursion-en-kayak-de-mer-a-lile-aux-benitiers-ile-maurice/18022?_cid=713",
  "image": "https://res.cloudinary.com/manawa/image/private/f_auto,c_fill,w_400,h_300,q_auto/9b5c96a2c357665fd07c585eba77c87e",
  "locations": [
    "Le Morne"
  ],
  "price": 38.81,
  "priceBy": "each",
  "rating": 5,
  "reviewCount": 1,
  "duration": {
    "min": 300,
    "max": 300,
    "minRaw": "2.5 hrs",
    "maxRaw": "2.5 hrs"
  },
  "popular": false,
  "location": {
    "spot": "Le Morne",
    "country": "Île Maurice",
    "countryIsoCode": "MU",
    "coordinates": {
      "lat": -20.44583,
      "lng": 57.34344
    },
    "meetingPoint": "On the dirt road opposite Explorers Mauritius, Route Cotiere, Le Morne Brabant 91202, Mauritius"
  },
  "details": {
    "spokenLanguages": [
      "French",
      "English"
    ],
    "organizedBy": "Yanature Kayak",
    "sportId": 1506,
    "accessibleToDisabled": false,
    "sensationLevels": {
      "min": null,
      "max": null
    },
    "physicalConditions": {
      "min": {
        "level": 2,
        "name": "Occasionally sporty"
      },
      "max": {
        "level": 2,
        "name": "Occasionally sporty"
      }
    }
  },
  "lastUpdate": "2025-09-03T12:09:05+00:00",
  "enriched": {
    "about": "Entourée d'un lagon aux eaux turquoise à couper le souffle, l'île aux Bénitiers est un site incroyable pour faire du kayak de mer au Morne, au sud-ouest de l'Île Maurice. Accompagnés par un guide local, vous naviguerez paisiblement dans les eaux calmes du lagon afin de rejoindre en premier lieu le Crystal Rock, puis l'île aux Bénitiers et sa plage de sable blanc dont vous profiterez pour une petite pause baignade.Cette excursion en kayak de mer à l'île aux Bénitiers vous offrira 2h à 2h30 d'escapade sur l'un des plus beaux lagons de l'Île Maurice, avec en toile de fond le superbe Morne Brabant. Vous aurez le plaisir de pouvoir admirer des paysages magnifiques, tout en bénéficiant des commentaires enrichissants de votre guide au sujet de ce site préservé !Se déroulant à votre rythme, en petit comité de 12 participants maximum pour vivre un moment convivial, cette balade en kayak de mer à l'île aux Bénitiers depuis Le Morne vous laissera de magnifiques souvenirs !",
    "program": null,
    "requirements": {
      "minAge": 12,
      "maxWeight": 100,
      "swimRequired": true
    },
    "scrapedAt": "2026-01-22T11:59:41.725Z"
  }
};

const group = {
  key: "Kayak - Le Morne",
  category: "Kayak",
  mainLocation: "Le Morne",
  activities: [activity],
  seoIntent: "Réserver une sortie kayak à Le Morne",
  primaryKeyword: "kayak le morne",
  needsFusion: false,
};

const seo = generateActivityPageSEO(group);

// Activités similaires (même catégorie)
const relatedActivities = getAllActivities()
  .filter(a => a.category === "Kayak" && a.id !== "18022")
  .slice(0, 4);

export const metadata: Metadata = {
  title: seo.title,
  description: seo.metaDescription,
  keywords: seo.relatedKeywords.join(', '),
};

export default function Page() {
  return <IndividualActivityPage activity={activity} relatedActivities={relatedActivities} seo={seo} />;
}
