import { Metadata } from 'next';
import { getAllActivities } from '@/lib/activities';
import IndividualActivityPage from '@/components/activities/IndividualActivityPage';
import { generateActivityPageSEO } from '@/lib/activity-pages';

const activity = {
  "id": "13820",
  "name": "Excursion en quad au Vallé Park, Île Maurice",
  "category": "Quad",
  "description": "Partez pour une ou deux heures d’excursion en quad au Vallé Park pour découvrir la faune et la flore de l’Île Maurice !C’est au sud de l’Île Maurice, entre le Parc national des Gorges de Rivière Noire et le village de Chamouny, que se tr",
  "url": "https://www.manawa.com/fr-FR/activite/ile-maurice/chamouny/quad-buggy/excursion-en-quad-au-valle-park-ile-maurice/13820?_cid=713",
  "image": "https://res.cloudinary.com/manawa/image/private/f_auto,c_fill,w_400,h_300,q_auto/pzomopcdsdrdxurxqkmh",
  "locations": [
    "Chamouny"
  ],
  "price": 85.3,
  "priceBy": "each",
  "rating": 5,
  "reviewCount": 5,
  "duration": {
    "min": 300,
    "max": 180,
    "minRaw": "1.5 hr",
    "maxRaw": "3 hrs"
  },
  "popular": true,
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
        "level": 2,
        "name": "Occasionally sporty"
      }
    }
  },
  "lastUpdate": "2025-04-14T15:11:05+00:00",
  "enriched": {
    "about": "Partez pour une ou deux heures d’excursion en quad au Vallé Park pour découvrir la faune et la flore de l’Île Maurice !C’est au sud de l’Île Maurice, entre le Parc national des Gorges de Rivière Noire et le village de Chamouny, que se trouve le parc naturel de Vallé Advenature Park. S’étendant sur près de 450 arpents, il se compose de deux circuits qui permettent de le visiter en quad. Une bonne occasion de faire le plein d’adrénaline tout en découvrant les merveilles naturelles qui se trouvent dans ce parc incontournable à proximité de Souillac et de Bel Ombre ! Sur la selle d’un quad de 450 cc, seul en tant que conducteur ou accompagné d’un passager, vous aurez le choix entre 3 parcours pour découvrir le Vallé Advenature Park.Le parcours découverte vous fera à la fois découvrir ce qu’est la sensation de faire du quad, mais aussi la richesse naturelle du parc en traversant ses terres aux 23 couleurs, en passant devant ses quelques superbes cascades et points de vue, mais aussi en admirant les arbres endémiques et les animaux en liberté qui y résident. Peut-être parviendrez-vous à admirer l’un des fameux cerfs albinos qui s’y trouvent depuis 2020 !Le parcours aventure permet quant à lui de passer par des sentiers spécialement aménagés pour faire le plein de sensations tout en faisant la visite. Il conviendra parfaitement aux visiteurs en recherche d’adrénaline. Et si une heure ne vous suffit pas, vous pouvez combiner les deux parcours pour profiter de 2 heures de quad dans le Vallé Park !Avec un professionnel du parc pour vous guider lors de votre excursion en quad et une prise en main de cinq minutes avant le départ, vous êtes sûr de passer une ou deux heures de pur plaisir aux commandes de votre engin de 450 cc au Vallé Advenature Park !",
    "program": null,
    "requirements": {
      "minAge": 12,
      "maxWeight": null,
      "swimRequired": false
    },
    "scrapedAt": "2026-01-22T11:59:07.807Z"
  }
};

const group = {
  key: "Quad - Chamouny",
  category: "Quad",
  mainLocation: "Chamouny",
  activities: [activity],
  seoIntent: "Réserver une sortie quad à Chamouny",
  primaryKeyword: "quad chamouny",
  needsFusion: false,
};

const seo = generateActivityPageSEO(group);

// Activités similaires (même catégorie)
const relatedActivities = getAllActivities()
  .filter(a => a.category === "Quad" && a.id !== "13820")
  .slice(0, 4);

export const metadata: Metadata = {
  title: seo.title,
  description: seo.metaDescription,
  keywords: seo.relatedKeywords.join(', '),
};

export default function Page() {
  return <IndividualActivityPage activity={activity} relatedActivities={relatedActivities} seo={seo} />;
}
