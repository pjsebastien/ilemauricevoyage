import { Metadata } from 'next';
import { getAllActivities } from '@/lib/activities';
import IndividualActivityPage from '@/components/activities/IndividualActivityPage';
import { generateActivityPageSEO } from '@/lib/activity-pages';

const activity = {
  "id": "8123",
  "name": "Initiation canyoning aux 7 cascades de Tamarin sur l'Île Maurice",
  "category": "Canyoning",
  "description": "Partez à la découverte de sensations extrêmes dans un cadre somptueux lors de l&#x27;initiation canyoning aux 7 cascades de Tamarin à l&#x27;île Maurice... une expérience aussi dépaysante que fantastique, tant le sublime du cadre des chutes de",
  "url": "https://www.manawa.com/fr-FR/activite/ile-maurice/chutes-de-tamarin-gorges-de-riviere-noire/canyoning/initiation-canyoning-aux-7-cascades-de-tamarin-sur-lile-maurice/8123?_cid=713",
  "image": "https://res.cloudinary.com/manawa/image/private/f_auto,c_fill,w_400,h_300,q_auto/fd8fd58d88c6803f25241b0737ed720c",
  "locations": [
    "Chutes de Tamarin",
    "Gorges de Rivière Noire"
  ],
  "price": 68.05,
  "priceBy": "each",
  "rating": 5,
  "reviewCount": 107,
  "duration": {
    "min": null,
    "max": null,
    "minRaw": "1 demi journée",
    "maxRaw": "1 demi journée"
  },
  "popular": true,
  "location": {
    "spot": "Chutes de Tamarin - Gorges de Rivière Noire",
    "country": "Île Maurice",
    "countryIsoCode": "MU",
    "coordinates": {
      "lat": -20.343014,
      "lng": 57.471432
    },
    "meetingPoint": "Henrietta Bus Station, Henrietta Branch Road, Vacoas-Phœnix, Île Maurice"
  },
  "details": {
    "spokenLanguages": [
      "English",
      "French"
    ],
    "organizedBy": "A&A Adventurous Spirit",
    "sportId": 1192,
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
  "lastUpdate": "2025-06-13T07:34:05+00:00",
  "enriched": {
    "about": "Partez à la découverte de sensations extrêmes dans un cadre somptueux lors de l'initiation canyoning aux 7 cascades de Tamarin à l'île Maurice... une expérience aussi dépaysante que fantastique, tant le sublime du cadre des chutes de Tamarin va vous couper le souffle ! Amis vacanciers, envie de vivre une véritable aventure lors de votre séjour à l'Île Maurice ? Avec l'initiation canyoning, accessible au plus grand nombre, découvrez les sensations diverses et variées de cette discipline lors d'une demi-journée passée sur l'un des plus beaux sites de l'Île Maurice : les Chutes de Tamarin et ses 7 cascades. Pour vos débuts en canyoning et tout au long de cette demi-journée d'aventure, vous serez accompagnés d'un moniteur diplômé. Au programme de cette sortie canyoning, vous accomplirez une spectaculaire descente en rappel d'une cascade de 40 mètres. Une fois à son pied, vous vous faufilerez sous « la douche » : un passage esthétique sous la cascade, sécurisé par une corde. Puis, en guise de récompense, vous traverserez à la nage un bassin d'une cinquantaine de mètres de diamètre pour un moment bien rafraîchissant !Pour la suite de l'initiation canyoning aux 7 cascades de Tamarin sur l'Île Maurice, vous ferez face à un nouveau rappel... cette fois-ci, votre obstacle sera la descente d'une cascade d'environ 12 mètres, suivie d’une courte nage. Enfin, pour franchir la dernière cascade d'environ 20 mètres, les adultes auront la possibilité d'accomplir un saut à 6 mètres de haut, après une descente sur corde. Pour rappel : les sauts ne sont jamais obligatoires, il vous sera donc possible de descendre en rappel si cette solution vous plaît d'avantage. Afin de terminer l'initiation canyoning aux 7 cascades de Tamarin sur l'Île Maurice, en beauté... votre guide vous emmènera au point culminant d'une grande cascade de 55 mètres et depuis cette endroit, vous obtiendrez une vue sur toute la gorge : un moment époustouflant.Amis vacanciers ou locaux en recherche de nouvelles aventures à accomplir, l'initiation canyoning aux 7 cascades de Tamarin convient tout autant aux grands débutants comme aux personnes ayant déjà de l'expérience en canyoning... lors de ce parcours de 2h30, n'oubliez pas de regarder autour de vous et de profiter un maximum des paysages typiques et somptueux de l'Île Maurice !",
    "program": null,
    "requirements": {
      "minAge": 12,
      "maxWeight": 110,
      "swimRequired": true
    },
    "scrapedAt": "2026-01-22T11:58:21.465Z"
  }
};

const group = {
  key: "Canyoning - Chutes de Tamarin",
  category: "Canyoning",
  mainLocation: "Chutes de Tamarin",
  activities: [activity],
  seoIntent: "Réserver une sortie canyoning à Chutes de Tamarin",
  primaryKeyword: "canyoning chutes de tamarin",
  needsFusion: false,
};

const seo = generateActivityPageSEO(group);

// Activités similaires (même catégorie)
const relatedActivities = getAllActivities()
  .filter(a => a.category === "Canyoning" && a.id !== "8123")
  .slice(0, 4);

export const metadata: Metadata = {
  title: seo.title,
  description: seo.metaDescription,
  keywords: seo.relatedKeywords.join(', '),
};

export default function Page() {
  return <IndividualActivityPage activity={activity} relatedActivities={relatedActivities} seo={seo} />;
}
