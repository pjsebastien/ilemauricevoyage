import { Metadata } from 'next';
import { getAllActivities } from '@/lib/activities';
import IndividualActivityPage from '@/components/activities/IndividualActivityPage';
import { generateActivityPageSEO } from '@/lib/activity-pages';

const activity = {
  "id": "4845",
  "name": "Excursion seabob à Grand Baie à l'Île Maurice",
  "category": "Snorkeling",
  "description": "Ludique et simple d'utilisation, venez vite essayer le seabob &agrave; Grand Baie pour profiter d'une activit&eacute; nautique inoubliable et unique en son genre &agrave; Maurice ! Le seabob est un v&eacute;hicule nautique submersible polyvalent, des",
  "url": "https://www.manawa.com/fr-FR/activite/ile-maurice/grand-baie-trou-aux-biches/snorkeling/excursion-seabob-a-grand-baie-a-lile-maurice/4845?_cid=713",
  "image": "https://res.cloudinary.com/manawa/image/private/f_auto,c_fill,w_400,h_300,q_auto/18f8c6a0dce54c4c5fa7cddc3db956c1",
  "locations": [
    "Grand Baie",
    "Trou aux Biches"
  ],
  "price": 70.14,
  "priceBy": "each",
  "rating": 5,
  "reviewCount": 8,
  "duration": {
    "min": 60,
    "max": 300,
    "minRaw": "1 hr",
    "maxRaw": "1.5 hr"
  },
  "popular": true,
  "location": {
    "spot": "Grand Baie - Trou aux Biches",
    "country": "Île Maurice",
    "countryIsoCode": "MU",
    "coordinates": {
      "lat": -20.014162,
      "lng": 57.583686
    },
    "meetingPoint": "At the Seabob Mauritius shop, Sunset Boulevard (earth side, in front of the car park), Grand Baie, Mauritius"
  },
  "details": {
    "spokenLanguages": [
      "English",
      "French"
    ],
    "organizedBy": "Seabob Mauritius",
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
  "lastUpdate": "2025-01-13T21:19:14+00:00",
  "enriched": {
    "about": "Ludique et simple d'utilisation, venez vite essayer le seabob à Grand Baie pour profiter d'une activité nautique inoubliable et unique en son genre à Maurice !Le seabob est un véhicule nautique submersible polyvalent, design, silencieux et écologique. Il s'agit du meilleur moyen pour découvrir de façon fun le lagon de l'Île Maurice ! Détendu en mode snorkeling ou intense en mode conduite sportive dans l’eau, vous pourrez atteindre des vitesses impressionnantes de 20 km/h sur l'eau et 18 km/h sous l'eau, de quoi vous offrir de belles sensations de glisse !Tel un dauphin, vous entrerez dans une nouvelle dimension en explorant les fonds marins jusqu’à 2,50 mètres de profondeur à l'aide de ce scooter sous-marin. Vous n'aurez alors besoin que d'un masque pour pouvoir admirer les fonds marins, l'idéal pour faire du snorkeling sans s'encombrer d'un tuba et de palmes ! De plus, le seabob est accessible à tous avec sa puissance réglable individuellement, et moins de 2 minutes suffisent pour le maîtriser.Des sensations uniques, totalement différentes des autres activités aquatiques vous attendent à Grand Baie grâce au seabob ! N'attendez donc plus et rejoignez vite Seabob Mauritius pour vivre des aventures inédites sur l'Île Maurice !",
    "program": null,
    "requirements": {
      "minAge": 8,
      "maxWeight": null,
      "swimRequired": false
    },
    "scrapedAt": "2026-01-22T11:58:48.278Z"
  }
};

const group = {
  key: "Snorkeling - Grand Baie",
  category: "Snorkeling",
  mainLocation: "Grand Baie",
  activities: [activity],
  seoIntent: "Réserver une sortie snorkeling à Grand Baie",
  primaryKeyword: "snorkeling grand baie",
  needsFusion: false,
};

const seo = generateActivityPageSEO(group);

// Activités similaires (même catégorie)
const relatedActivities = getAllActivities()
  .filter(a => a.category === "Snorkeling" && a.id !== "4845")
  .slice(0, 4);

export const metadata: Metadata = {
  title: seo.title,
  description: seo.metaDescription,
  keywords: seo.relatedKeywords.join(', '),
};

export default function Page() {
  return <IndividualActivityPage activity={activity} relatedActivities={relatedActivities} seo={seo} />;
}
