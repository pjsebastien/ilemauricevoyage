import { Metadata } from 'next';
import { getAllActivities } from '@/lib/activities';
import IndividualActivityPage from '@/components/activities/IndividualActivityPage';
import { generateActivityPageSEO } from '@/lib/activity-pages';

const activity = {
  "id": "8187",
  "name": "Randonnée au Pouce près de Port-Louis sur l'Île Maurice",
  "category": "Randonnée",
  "description": "Vous rêvez de découvrir une vue panoramique à 360° sur l&#x27;Île Maurice et ses paysages paradisiaques ? La randonnée au Pouce, située près de Port-Louis, vous emmènera à 811m d&#x27;altitude sur le troisième plus haut sommet de l&#x27;Î",
  "url": "https://www.manawa.com/fr-FR/activite/ile-maurice/port-louis-maurice/randonnee/randonnee-au-pouce-pres-de-port-louis-sur-lile-maurice/8187?_cid=713",
  "image": "https://res.cloudinary.com/manawa/image/private/f_auto,c_fill,w_400,h_300,q_auto/a37e84c6b5c1c86091ecba79097e61aa",
  "locations": [
    "Port-Louis, Maurice"
  ],
  "price": 34.78,
  "priceBy": "each",
  "rating": null,
  "reviewCount": 0,
  "duration": {
    "min": 240,
    "max": 240,
    "minRaw": "4 h",
    "maxRaw": "4 h"
  },
  "popular": false,
  "location": {
    "spot": "Port-Louis, Maurice",
    "country": "Île Maurice",
    "countryIsoCode": "MU",
    "coordinates": {
      "lat": -20.224982,
      "lng": 57.525716
    },
    "meetingPoint": "Les Alles D'Helvetia, Moka, Île Maurice"
  },
  "details": {
    "spokenLanguages": [
      "French",
      "English"
    ],
    "organizedBy": "A&A Adventurous Spirit",
    "sportId": 1194,
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
  "lastUpdate": "2025-01-10T03:53:54+00:00",
  "enriched": {
    "about": "Vous rêvez de découvrir une vue panoramique à 360° sur l'Île Maurice et ses paysages paradisiaques ? La randonnée au Pouce, située près de Port-Louis, vous emmènera à 811m d'altitude sur le troisième plus haut sommet de l'Île Maurice : cette ascension est accessible pratiquement à tous, ce qui en fait un classique de la randonnée sur l'île Maurice... une aventure à accomplir seul, entre amis ou même en famille ! Avec un début de randonnée sur une piste bordée de champs de canne à sucre, la marche vers Le Pouce vous emmènera progressivement vers une montée abrupte, en sous-bois... pas d'inquiétude, cette dernière est courte et accessible sans besoin d'un niveau sportif élevé. Puis, peu de temps après cet obstacle, vous arriverez sur le premier petit plateau. Depuis ce point de vue, vous pourrez admirer l'ouest de l'île et prendre la mesure de la beauté de Port-Louis, la capitale de l'Île Maurice.Le programme pour la suite de votre randonnée au Pouce, près de Port-Louis, se présente sous la forme d'un chemin de randonnée se transformant peu à peu en un joli sentier... le but ? Atteindre un second plateau offrant un panorama imprenable sur l'ouest, l'est, ainsi que le nord de Maurice et ses îles voisines ! Après un court instant de délectation face à la vue imprenable sur les alentours, vous aborderez l'ascension de l'arête finale du Pouce. À cet instant, vous entrerez dans la partie la plus sportive et aérienne de la randonnée au Pouce, près de Port-Louis à l'Île Maurice, la dernière ligne droite vers les 811m d'altitude ! Amis aventuriers, fans de paysages sauvages et florissants, vous venez d'arriver au sommet de la randonnée au Pouce, près de Port-Louis à l'Île Maurice, et voici votre récompense : profitez, dès à présent, d'une vue panoramique sur les splendides flans de ce sommet volcanique, tranquillement installés 811m au-dessus de la surface de l'océan.",
    "program": null,
    "requirements": {
      "minAge": 10,
      "maxWeight": null,
      "swimRequired": false
    },
    "scrapedAt": "2026-01-22T12:00:27.749Z"
  }
};

const group = {
  key: "Randonnée - Port-Louis, Maurice",
  category: "Randonnée",
  mainLocation: "Port-Louis, Maurice",
  activities: [activity],
  seoIntent: "Réserver une sortie randonnée à Port-Louis, Maurice",
  primaryKeyword: "randonnée port-louis, maurice",
  needsFusion: false,
};

const seo = generateActivityPageSEO(group);

// Activités similaires (même catégorie)
const relatedActivities = getAllActivities()
  .filter(a => a.category === "Randonnée" && a.id !== "8187")
  .slice(0, 4);

export const metadata: Metadata = {
  title: seo.title,
  description: seo.metaDescription,
  keywords: seo.relatedKeywords.join(', '),
};

export default function Page() {
  return <IndividualActivityPage activity={activity} relatedActivities={relatedActivities} seo={seo} />;
}
