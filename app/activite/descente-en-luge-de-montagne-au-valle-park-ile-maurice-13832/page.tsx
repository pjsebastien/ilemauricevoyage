import { Metadata } from 'next';
import { getAllActivities } from '@/lib/activities';
import IndividualActivityPage from '@/components/activities/IndividualActivityPage';
import { generateActivityPageSEO } from '@/lib/activity-pages';

const activity = {
  "id": "13832",
  "name": "Descente en luge de montagne au Vallé Park, Île Maurice",
  "category": "Luge de montagne",
  "description": "Faites l’expérience d’une activité ludique et amusante à l’Île Maurice en participant à la descente en luge de montagne au cœur du Vallé Park !Si vous êtes à la recherche d’une activité à sensations fortes et fun à faire avec vos ",
  "url": "https://www.manawa.com/fr-FR/activite/ile-maurice/chamouny/activite-insolite/descente-en-luge-de-montagne-au-valle-park-ile-maurice/13832?_cid=713",
  "image": "https://res.cloudinary.com/manawa/image/private/f_auto,c_fill,w_400,h_300,q_auto/vvoqiqyjmwikyy5h8woh",
  "locations": [
    "Chamouny"
  ],
  "price": 12.56,
  "priceBy": "each",
  "rating": null,
  "reviewCount": 0,
  "duration": {
    "min": 20,
    "max": 20,
    "minRaw": "20 min",
    "maxRaw": "20 min"
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
    "sportId": 1545,
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
  "lastUpdate": "2025-05-23T13:24:12+00:00",
  "enriched": {
    "about": "Faites l’expérience d’une activité ludique et amusante à l’Île Maurice en participant à la descente en luge de montagne au cœur du Vallé Park !Si vous êtes à la recherche d’une activité à sensations fortes et fun à faire avec vos amis ou votre famille au sud de l’Île Maurice, venez essayer sans hésiter la descente en luge de montagne au Vallé Advenature Park ! La luge de montagne est une sorte de petit kart à trois roues permettant de descendre à toute vitesse la pente longue de 700 mètres qui se trouve au cœur du parc. Elle vous permettra donc de faire le plein d’adrénaline tout en faisant la course avec vos proches !Equipé d’un casque et de protections pour vos coudes et genoux, vous serez prêt à filer dans votre luge de montagne pendant 3 à 4 minutes en fonction de la vitesse à laquelle vous oserez descendre (jusqu'à 30 km/h !). Tout en vous amusant à vive allure, vous pourrez également profiter du magnifique cadre naturel du Vallé Advenature Park, ainsi que d’une vue sur la côte entre Souillac et Bel Ombre. Soyez prêt à en prendre plein les yeux !Que vous ayez soif d’aventures et de vitesse ou que vous ayez juste envie de vous amuser en descendant la pente à un rythme moins effréné, la luge de montagne est une activité à ne pas manquer sur l’Île Maurice si vous vous trouvez à proximité de Chamouny ou au sud du Parc national des Gorges de Rivière Noire !",
    "program": null,
    "requirements": {
      "minAge": 7,
      "maxWeight": null,
      "swimRequired": false
    },
    "scrapedAt": "2026-01-22T12:00:22.928Z"
  }
};

const group = {
  key: "Luge de montagne - Chamouny",
  category: "Luge de montagne",
  mainLocation: "Chamouny",
  activities: [activity],
  seoIntent: "Réserver une sortie luge de montagne à Chamouny",
  primaryKeyword: "luge de montagne chamouny",
  needsFusion: false,
};

const seo = generateActivityPageSEO(group);

// Activités similaires (même catégorie)
const relatedActivities = getAllActivities()
  .filter(a => a.category === "Luge de montagne" && a.id !== "13832")
  .slice(0, 4);

export const metadata: Metadata = {
  title: seo.title,
  description: seo.metaDescription,
  keywords: seo.relatedKeywords.join(', '),
};

export default function Page() {
  return <IndividualActivityPage activity={activity} relatedActivities={relatedActivities} seo={seo} />;
}
