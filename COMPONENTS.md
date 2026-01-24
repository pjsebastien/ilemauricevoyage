# Guide des composants réutilisables

Documentation rapide de tous les composants disponibles et comment les utiliser.

## 📐 Layout & Structure

### Header

Navigation principale sticky avec menu burger mobile.

```tsx
import Header from '@/components/layout/Header';

// Utilisation automatique dans layout.tsx
// Pas besoin de l'importer ailleurs
```

**Caractéristiques** :
- Sticky top
- Menu burger sur mobile
- Navigation horizontale sur desktop
- Logo cliquable vers accueil

---

### Footer

Pied de page avec liens et copyright.

```tsx
import Footer from '@/components/layout/Footer';

// Utilisation automatique dans layout.tsx
// Pas besoin de l'importer ailleurs
```

**Caractéristiques** :
- 3 colonnes sur desktop
- Empilé sur mobile
- Copyright automatique avec année actuelle

---

### Section

Container générique pour blocs de contenu.

```tsx
import Section from '@/components/layout/Section';

<Section
  title="Titre de la section"
  subtitle="Sous-titre optionnel"
  background="white" // ou "gray" ou "primary"
  spacing="md" // ou "sm" ou "lg"
  id="ancre-url"
>
  {/* Contenu */}
</Section>
```

**Props** :
- `title?`: Titre H2 de la section
- `subtitle?`: Sous-titre en texte gris
- `background?`: Couleur de fond (`white` | `gray` | `primary`)
- `spacing?`: Espacement vertical (`sm` | `md` | `lg`)
- `id?`: ID pour ancrage URL
- `className?`: Classes supplémentaires

**Quand l'utiliser** :
- Toujours pour séparer des blocs de contenu
- Garantit la cohérence des espacements

---

### PageHero

Hero professionnel avec dégradés colorés, statistiques et éléments décoratifs.

```tsx
import PageHero from '@/components/layout/PageHero';

<PageHero
  variant="ocean"              // gradient | ocean | sunset | tropical
  size="large"                 // default | large
  badge={{ label: "Dossier complet", variant: "info" }}
  title="Titre principal"
  subtitle="Description du hero"
  stats={[
    {
      icon: <svg>...</svg>,
      value: "60+",
      label: "Activités"
    },
    // 2-3 stats recommandés
  ]}
/>
```

**Props** :
- `variant?`: Style de dégradé (`gradient` | `ocean` | `sunset` | `tropical`)
- `size?`: Taille du hero (`default` | `large`)
- `badge?`: Badge avec label et variante
- `title`: Titre H1 (requis)
- `subtitle?`: Sous-titre descriptif
- `stats?`: Tableau de statistiques avec icône, valeur et label
- `className?`: Classes supplémentaires

**Variantes** :
- `gradient`: Bleu primaire (professionnel)
- `ocean`: Cyan → Bleu (activités nautiques)
- `sunset`: Orange → Rose (romantique, coucher de soleil)
- `tropical`: Vert → Turquoise (nature, aventure)

**Caractéristiques** :
- Dégradés colorés inspirés de l'île Maurice
- Éléments décoratifs (formes abstraites, patterns)
- Stats avec glassmorphism (backdrop-blur)
- Vague SVG de transition vers le contenu
- Mobile responsive

**Quand l'utiliser** :
- En tête de toutes les pages principales
- Remplace les sections hero simples
- Apporte un impact visuel fort
- Affiche des trust signals (stats)

---

## 🎨 UI Génériques

### Button

Bouton réutilisable avec variantes et tailles.

```tsx
import Button from '@/components/ui/Button';

<Button variant="primary" size="md" onClick={handleClick}>
  Cliquez ici
</Button>
```

**Props** :
- `variant?`: Style du bouton (`primary` | `secondary` | `outline`)
- `size?`: Taille (`sm` | `md` | `lg`)
- `className?`: Classes supplémentaires
- Toutes les props HTML de `<button>`

**Variantes** :
- `primary`: Fond bleu, texte blanc (action principale)
- `secondary`: Fond beige, texte blanc (action secondaire)
- `outline`: Bordure bleue, fond transparent (action tertiaire)

---

### Card

Container générique avec bordure et ombre.

```tsx
import Card from '@/components/ui/Card';

<Card
  padding="md"
  hover={true}
  shadow="md"
  border={true}
>
  {/* Contenu */}
</Card>
```

**Props** :
- `padding?`: Espacement interne (`none` | `sm` | `md` | `lg`)
- `hover?`: Effet au survol (boolean)
- `shadow?`: Ombre portée (`none` | `sm` | `md` | `lg`)
- `border?`: Bordure (boolean)
- `className?`: Classes supplémentaires

**Quand l'utiliser** :
- Base pour créer d'autres composants de carte
- Conteneur pour blocs distincts

---

### Badge

Petit label coloré pour catégories et statuts.

```tsx
import Badge from '@/components/ui/Badge';

<Badge variant="popular">Populaire</Badge>
<Badge variant="success">Confirmé</Badge>
```

**Props** :
- `variant?`: Style (`default` | `success` | `warning` | `info` | `popular`)
- `className?`: Classes supplémentaires

**Variantes** :
- `default`: Gris neutre
- `success`: Vert
- `warning`: Orange
- `info`: Bleu
- `popular`: Bleu primaire (activités populaires)

---

### InfoBox

Encadré informatif avec icône et couleur.

```tsx
import InfoBox from '@/components/ui/InfoBox';

<InfoBox type="tip" title="Conseil pratique">
  Réservez vos activités à l'avance.
</InfoBox>
```

**Props** :
- `type?`: Type d'information (`info` | `warning` | `success` | `tip`)
- `title?`: Titre de l'encadré
- `className?`: Classes supplémentaires

**Types** :
- `info`: Bleu, icône 💡 (information)
- `warning`: Orange, icône ⚠️ (avertissement)
- `success`: Vert, icône ✓ (succès/validation)
- `tip`: Violet, icône 💭 (conseil)

---

## 🏖️ Activités

### ActivityCard

Carte d'activité cliquable.

```tsx
import ActivityCard from '@/components/activities/ActivityCard';
import { Activity } from '@/lib/types';

const activity: Activity = { /* ... */ };

<ActivityCard
  activity={activity}
  variant="standard" // ou "compact" ou "featured"
/>
```

**Props** :
- `activity`: Objet Activity (voir `lib/types.ts`)
- `variant?`: Format de la carte (`compact` | `standard` | `featured`)

**Variantes** :
- `compact`: Petite carte, image 150px, titre tronqué
- `standard`: Carte normale, image 200px, description
- `featured`: Grande carte, image 300px, description complète

**Contenu affiché** :
- Image avec badge "Populaire" si applicable
- Catégorie en petit texte
- Titre de l'activité
- Description (sauf variante compact)
- Durée et localisation
- Note et nombre d'avis
- Prix

---

### ActivityList

Grille responsive de cartes d'activités.

```tsx
import ActivityList from '@/components/activities/ActivityList';
import { Activity } from '@/lib/types';

const activities: Activity[] = [ /* ... */ ];

<ActivityList
  activities={activities}
  variant="standard"
  columns={3}
  emptyMessage="Aucune activité trouvée"
/>
```

**Props** :
- `activities`: Tableau d'Activity
- `variant?`: Variante des cartes (`compact` | `standard` | `featured`)
- `columns?`: Nombre de colonnes (`2` | `3` | `4`)
- `emptyMessage?`: Message si tableau vide

**Responsive** :
- 1 colonne sur mobile
- 2 colonnes sur tablette (selon `columns`)
- X colonnes sur desktop (selon `columns`)

---

### ActivityFilters

Filtres de recherche pour activités.

```tsx
import ActivityFilters from '@/components/activities/ActivityFilters';
import { ActivityFilters as Filters } from '@/lib/types';

const [filters, setFilters] = useState<Filters>({});

<ActivityFilters
  filters={filters}
  onFilterChange={setFilters}
/>
```

**Props** :
- `filters`: Objet de filtres actifs
- `onFilterChange`: Callback quand filtres changent

**Filtres disponibles** :
- Catégorie (select)
- Localisation (select)
- Activités populaires uniquement (checkbox)
- Bouton "Réinitialiser" si filtres actifs

---

### ActivityHighlight

Mise en avant horizontale d'une activité.

```tsx
import ActivityHighlight from '@/components/activities/ActivityHighlight';
import { Activity } from '@/lib/types';

const activity: Activity = { /* ... */ };

<ActivityHighlight
  activity={activity}
  label="Coup de cœur"
/>
```

**Props** :
- `activity`: Activité à mettre en avant
- `label?`: Texte du badge (défaut: "Coup de cœur")

**Layout** :
- Image à gauche (50%)
- Contenu à droite (50%)
- Empilé sur mobile
- Grande image (300px min)
- Bouton CTA "Découvrir"

---

## 🧭 Parcours utilisateur

### TravelStep

Une étape de checklist de voyage.

```tsx
import TravelStep from '@/components/journey/TravelStep';

<TravelStep
  number={1}
  title="Définir la période"
  description="L'île Maurice bénéficie d'un climat agréable..."
  links={[
    { label: 'Voir les activités', href: '/activites-ile-maurice' }
  ]}
/>
```

**Props** :
- `number`: Numéro de l'étape
- `title`: Titre de l'étape
- `description`: Description détaillée
- `links?`: Tableau de liens avec `label` et `href`
- `icon?`: Icône React à la place du numéro

**Apparence** :
- Cercle avec numéro/icône
- Titre en gras
- Description en texte normal
- Liens avec flèche

---

### TravelChecklist

Liste verticale d'étapes.

```tsx
import TravelChecklist from '@/components/journey/TravelChecklist';

const steps = [
  { number: 1, title: '...', description: '...', links: [...] },
  { number: 2, title: '...', description: '...', links: [...] },
];

<TravelChecklist steps={steps} />
```

**Props** :
- `steps`: Tableau d'objets step (number, title, description, links)

**Apparence** :
- Ligne verticale entre les étapes
- Navigation progressive
- Espacement cohérent

---

### NextStepCTA

Call-to-action "Prochaine étape" en fin de page.

```tsx
import NextStepCTA from '@/components/journey/NextStepCTA';

<NextStepCTA
  title="Prêt à découvrir les activités ?"
  description="Explorez notre sélection complète..."
  ctaLabel="Voir toutes les activités"
  ctaHref="/activites-ile-maurice"
/>
```

**Props** :
- `title`: Titre du CTA
- `description`: Description
- `ctaLabel`: Texte du bouton
- `ctaHref`: URL du lien

**Apparence** :
- Fond dégradé bleu
- Texte blanc centré
- Bouton secondaire (beige)
- Bordures arrondies

---

## 🛠️ Helpers

### Fonctions activités (`lib/activities.ts`)

```tsx
import {
  getAllActivities,
  getPopularActivities,
  filterActivities,
  sortActivities,
  getCategories,
  getLocations,
  formatDuration,
  formatPrice,
} from '@/lib/activities';

// Récupérer toutes les activités
const all = getAllActivities();

// Récupérer les 6 activités populaires
const popular = getPopularActivities(6);

// Filtrer
const filtered = filterActivities({
  category: 'Canyoning',
  location: 'Tamarin',
  popular: true,
});

// Trier
const sorted = sortActivities(filtered, 'price-asc');

// Listes
const categories = getCategories(); // ["Canyoning", "Plongée", ...]
const locations = getLocations(); // ["Tamarin", "Flic en Flac", ...]

// Formatage
formatDuration(activity.duration); // "3 h"
formatPrice(activity.price); // "68.05 €"
```

---

### Utilitaires (`lib/utils.ts`)

```tsx
import { cn, slugify, truncate, decodeHtmlEntities } from '@/lib/utils';

// Combiner classes Tailwind
cn('bg-white', 'p-4', isActive && 'bg-blue-500'); // "bg-blue-500 p-4"

// Générer slug
slugify('Canyoning aux 7 Cascades'); // "canyoning-aux-7-cascades"

// Tronquer texte
truncate('Texte très long...', 50); // "Texte très long..."

// Décoder entités HTML
decodeHtmlEntities('L&#x27;île Maurice'); // "L'île Maurice"
```

---

## 📋 Checklist d'utilisation

Avant de créer un nouveau composant, vérifier :

1. ✅ Un composant existant peut-il faire l'affaire ?
2. ✅ Puis-je composer plusieurs composants existants ?
3. ✅ Ai-je vraiment besoin d'un nouveau composant ?

Si la réponse est "oui" aux 3 :
- Documenter ici
- Ajouter des exemples
- Penser réutilisabilité
