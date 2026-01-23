import { Metadata } from 'next';
import { getAllActivities } from '@/lib/activities';
import IndividualActivityPage from '@/components/activities/IndividualActivityPage';
import { generateActivityPageSEO } from '@/lib/activity-pages';

const activity = {
  "id": "13837",
  "name": "Excursion en buggy au Vallé Park, Île Maurice",
  "category": "Buggy",
  "description": "Faites la visite du Vallé Park en buggy pour 1 heure d’aventures sur l’Île Maurice !Si vous avez envie de visiter le parc naturel du Vallé Advenature Park tout en faisant le plein d’adrénaline, cette excursion guidée en buggy est l’activ",
  "url": "https://www.manawa.com/fr-FR/activite/ile-maurice/chamouny/quad-buggy/excursion-en-buggy-au-valle-park-ile-maurice/13837?_cid=713",
  "image": "https://res.cloudinary.com/manawa/image/private/f_auto,c_fill,w_400,h_300,q_auto/acc9fc560f1c29ba1914c27cca90f5c3",
  "locations": [
    "Chamouny"
  ],
  "price": 131.39,
  "priceBy": "each",
  "rating": 4,
  "reviewCount": 1,
  "duration": {
    "min": 90,
    "max": 90,
    "minRaw": "1 h 30",
    "maxRaw": "1 h 30"
  },
  "popular": false,
  "location": {
    "spot": "Chamouny",
    "country": "Île Maurice",
    "countryIsoCode": "MU",
    "coordinates": {
      "lat": -20.45761,
      "lng": 57.48517
    },
    "meetingPoint": "La Vallée des Couleurs Nature Park B102, Chamouny, Maurice"
  },
  "details": {
    "spokenLanguages": [
      "French",
      "English"
    ],
    "organizedBy": "Vallé Park",
    "sportId": 1201,
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
  "lastUpdate": "2025-04-14T14:27:06+00:00",
  "enriched": {
    "about": "Faites la visite du Vallé Park en buggy pour 1 heure d’aventures sur l’Île Maurice !Si vous avez envie de visiter le parc naturel du Vallé Advenature Park tout en faisant le plein d’adrénaline, cette excursion guidée en buggy est l’activité qu’il vous faut ! Pendant une heure, vous aurez le plaisir de parcourir un circuit permettant d’admirer toutes les merveilles naturelles présentes dans le parc. Il ne vous reste qu’à choisir si vous avez envie d’opter pour un buggy standard de 450 cc, ou bien un buggy un peu plus puissant de 600 cc pour plus de sensations !Le Vallé Park est réputé pour ses terres aux 23 couleurs, attraction naturelle incontournable devant laquelle vous passerez lors de votre tour en buggy. Logé entre le Parc national des Gorges de Rivière Noire et Chamouny, le parc est un véritable écrin de verdure au coeur duquel vous découvrirez non seulement des arbres endémiques de l’Île Maurice, mais aussi des animaux sauvages, des points de vue imprenables sur la côte sud de l’île entre Bel Ombre et Souillac, ainsi que des cascades comme la cascade Cheveux d’Ange ou encore la cascade Vacoas.Avec un professionnel du parc du Vallé Advenature Park pour vous guider lors de votre excursion en buggy, vous passerez une heure exceptionnelle entre découvertes naturelles et sensations fortes sur des sentiers boisés sensationnels !",
    "program": null,
    "requirements": {
      "minAge": 6,
      "maxWeight": null,
      "swimRequired": false
    },
    "scrapedAt": "2026-01-22T12:00:05.988Z"
  }
};

const group = {
  key: "Buggy - Chamouny",
  category: "Buggy",
  mainLocation: "Chamouny",
  activities: [activity],
  seoIntent: "Réserver une sortie buggy à Chamouny",
  primaryKeyword: "buggy chamouny",
  needsFusion: false,
};

const seo = generateActivityPageSEO(group);

// Activités similaires (même catégorie)
const relatedActivities = getAllActivities()
  .filter(a => a.category === "Buggy" && a.id !== "13837")
  .slice(0, 4);

export const metadata: Metadata = {
  title: seo.title,
  description: seo.metaDescription,
  keywords: seo.relatedKeywords.join(', '),
};

export default function Page() {
  return <IndividualActivityPage activity={activity} relatedActivities={relatedActivities} seo={seo} />;
}
