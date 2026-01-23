import { Metadata } from 'next';
import { getAllActivities } from '@/lib/activities';
import IndividualActivityPage from '@/components/activities/IndividualActivityPage';
import { generateActivityPageSEO } from '@/lib/activity-pages';

const activity = {
  "id": "14366",
  "name": "Balade en catamaran sur le lagon de l’Ile aux Cerfs depuis Trou d’Eau Douce, Île Maurice",
  "category": "Balade en catamaran",
  "description": "A l’Île Maurice, la balade en catamaran sur le lagon de l’Ile aux Cerfs est l’une des activités à faire absolument si vous vous trouvez à Trou d’Eau Douce ou ses alentours. Avec ses eaux turquoises et ses fonds de sable blanc, il offre un",
  "url": "https://www.manawa.com/fr-FR/activite/ile-maurice/trou-deau-douce-ile-aux-cerfs/balade-en-bateau/balade-en-catamaran-sur-le-lagon-de-lile-aux-cerfs-depuis-trou-deau-douce-ile-maurice/14366?_cid=713",
  "image": "https://res.cloudinary.com/manawa/image/private/f_auto,c_fill,w_400,h_300,q_auto/942ad095c364278add0da7330453b31b",
  "locations": [
    "Trou d'Eau Douce",
    "Ile aux Cerfs"
  ],
  "price": 69.21,
  "priceBy": "each",
  "rating": 5,
  "reviewCount": 10,
  "duration": {
    "min": 420,
    "max": 420,
    "minRaw": "7 hrs",
    "maxRaw": "7 hrs"
  },
  "popular": true,
  "location": {
    "spot": "Trou d'Eau Douce - Ile aux Cerfs",
    "country": "Île Maurice",
    "countryIsoCode": "MU",
    "coordinates": {
      "lat": -20.25362,
      "lng": 57.79753
    },
    "meetingPoint": "Pointe Maurice Jetty, near The Shangri-La Resort, Trou d’Eau Douce"
  },
  "details": {
    "spokenLanguages": [
      "French",
      "English"
    ],
    "organizedBy": "Océane Cruises Mauritius",
    "sportId": 1542,
    "accessibleToDisabled": true,
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
  "lastUpdate": "2025-07-18T09:50:06+00:00",
  "enriched": {
    "about": "A l’Île Maurice, la balade en catamaran sur le lagon de l’Ile aux Cerfs est l’une des activités à faire absolument si vous vous trouvez à Trou d’Eau Douce ou ses alentours. Avec ses eaux turquoises et ses fonds de sable blanc, il offre un cadre magnifique pour faire du snorkeling et se détendre sur le trampoline d’un catamaran tout confort comprenant une douche et des toilettes. Tout ce qu’il vous reste à faire est de choisir si vous souhaitez participer à une croisière partagée avec d’autres participants à bord, ou bien une croisière privée rien que pour vous et vos proches dont vous pouvez personnaliser le déroulement !Pendant 6h30 à 7h, vous aurez l’opportunité de faire du snorkeling dans les eaux cristallines du lagon de l’Ile aux Cerfs, repérer les singes qui se cachent dans la végétation le long de la Grande Rivière Sud Est, admirer la belle cascade GRSE, profiter d’un bain de soleil lors d’une escale sur l’Ile aux Cerfs, mais aussi déguster un barbecue pour le déjeuner à bord du catamaran. Avec un équipage de skippers formés pour veiller à votre sécurité et votre bien-être à bord, votre croisière sur le lagon de l’Ile aux Cerfs vous offrira des moments de détente inégalables à l’Île Maurice !Alors si vous devez choisir une activité à faire à Trou d’Eau Douce, optez sans hésiter pour cette balade en catamaran sur le lagon de l’Ile aux Cerfs !",
    "program": null,
    "requirements": {
      "minAge": null,
      "maxWeight": null,
      "swimRequired": false
    },
    "scrapedAt": "2026-01-22T11:58:50.687Z"
  }
};

const group = {
  key: "Balade en catamaran - Trou d'Eau Douce",
  category: "Balade en catamaran",
  mainLocation: "Trou d'Eau Douce",
  activities: [activity],
  seoIntent: "Réserver une sortie balade en catamaran à Trou d'Eau Douce",
  primaryKeyword: "balade en catamaran trou d'eau douce",
  needsFusion: false,
};

const seo = generateActivityPageSEO(group);

// Activités similaires (même catégorie)
const relatedActivities = getAllActivities()
  .filter(a => a.category === "Balade en catamaran" && a.id !== "14366")
  .slice(0, 4);

export const metadata: Metadata = {
  title: seo.title,
  description: seo.metaDescription,
  keywords: seo.relatedKeywords.join(', '),
};

export default function Page() {
  return <IndividualActivityPage activity={activity} relatedActivities={relatedActivities} seo={seo} />;
}
