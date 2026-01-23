import { Metadata } from 'next';
import { getAllActivities } from '@/lib/activities';
import IndividualActivityPage from '@/components/activities/IndividualActivityPage';
import { generateActivityPageSEO } from '@/lib/activity-pages';

const activity = {
  "id": "13828",
  "name": "Traversée du pont népalais du Vallé Park, Île Maurice",
  "category": "Accrobranche",
  "description": "Prenez votre courage à deux mains et osez traverser le pont népalais du Vallé Park long de 350 mètres !Plus long pont suspendu de l’Océan Indien, le pont népalais du Vallé Advenature Park offre une bonne bouffée d’air pur et d’adrénali",
  "url": "https://www.manawa.com/fr-FR/activite/ile-maurice/chamouny/accrobranche/traversee-du-pont-nepalais-du-valle-park-ile-maurice/13828?_cid=713",
  "image": "https://res.cloudinary.com/manawa/image/private/f_auto,c_fill,w_400,h_300,q_auto/kwuaskxiluzwj03by1v1",
  "locations": [
    "Chamouny"
  ],
  "price": 24.36,
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
    "meetingPoint": "La Vallée des Couleurs Nature Park B102, Chamouny, Mauritius"
  },
  "details": {
    "spokenLanguages": [
      "French",
      "English"
    ],
    "organizedBy": "Vallé Park",
    "sportId": 1514,
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
  "lastUpdate": "2025-04-14T14:53:05+00:00",
  "enriched": {
    "about": "Prenez votre courage à deux mains et osez traverser le pont népalais du Vallé Park long de 350 mètres !Plus long pont suspendu de l’Océan Indien, le pont népalais du Vallé Advenature Park offre une bonne bouffée d’air pur et d’adrénaline au sud de l’Île Maurice. Avec sa vue panoramique sur la côte entre Bel Ombre et Souillac, il permet de passer un bon moment en pleine nature, au-dessus d’une canopée située entre 80 et 100 mètres sous vos pieds !La traversée de ce pont népalais se fait sur 350 mètres, avec harnais et câbles de sécurité pour que vous passiez ce moment sereinement, seul ou avec vos proches. Vous profiterez alors pleinement du cadre naturel du Vallé Park qui se trouve entre le Parc national des Gorges de Rivière Noire et de Chamouny !Que vous soyez amateur de sensations ou que vous soyez tout simplement amoureux de la nature, cette traversée du pont népalais du Vallé Advenature Park vous offrira une belle expérience au-dessus de la jungle mauricienne !",
    "program": null,
    "requirements": {
      "minAge": 12,
      "maxWeight": 150,
      "swimRequired": false
    },
    "scrapedAt": "2026-01-22T12:00:08.418Z"
  }
};

const group = {
  key: "Accrobranche - Chamouny",
  category: "Accrobranche",
  mainLocation: "Chamouny",
  activities: [activity],
  seoIntent: "Réserver une sortie accrobranche à Chamouny",
  primaryKeyword: "accrobranche chamouny",
  needsFusion: false,
};

const seo = generateActivityPageSEO(group);

// Activités similaires (même catégorie)
const relatedActivities = getAllActivities()
  .filter(a => a.category === "Accrobranche" && a.id !== "13828")
  .slice(0, 4);

export const metadata: Metadata = {
  title: seo.title,
  description: seo.metaDescription,
  keywords: seo.relatedKeywords.join(', '),
};

export default function Page() {
  return <IndividualActivityPage activity={activity} relatedActivities={relatedActivities} seo={seo} />;
}
