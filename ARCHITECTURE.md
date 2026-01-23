# Documentation Architecture - Île Maurice Voyage

Cette documentation explique les choix d'architecture, UX et SEO du projet.

## 🎯 Vision globale

### Objectif principal

Créer un **socle durable et réutilisable** pour le site ilemauricevoyage.fr, permettant d'ajouter ou modifier des pages **sans jamais tout refaire**.

### Principes fondamentaux

1. **Composants réutilisables** : Chaque composant a un rôle clair et peut être utilisé sur plusieurs pages
2. **Composition > Duplication** : On compose avec l'existant plutôt que de créer du nouveau
3. **Intention claire** : Chaque page répond à une question utilisateur précise
4. **SEO propre** : Pas de cannibalisation, contenu evergreen, métadonnées optimisées

## 🧩 Stratégie de composants

### Philosophie

**Un composant doit être réutilisable ou ne pas exister.**

Si un composant n'est utilisé que sur une seule page sans raison valable, c'est un anti-pattern.

### Catégorisation

#### 1. Layout & Structure (`components/layout/`)

**Rôle** : Définir la structure globale du site

- **Header** : Navigation principale, identique sur toutes les pages
- **Footer** : Pied de page, identique sur toutes les pages
- **Section** : Container générique pour blocs de contenu

**Pourquoi Section est crucial** :
- Évite la duplication de code de structure
- Garantit une cohérence visuelle (espacements, backgrounds)
- Permet de modifier le look de toutes les sections en un seul endroit
- Props flexibles : `title`, `subtitle`, `background`, `spacing`

#### 2. UI Génériques (`components/ui/`)

**Rôle** : Briques de base réutilisables partout

- **Button** : 3 variantes × 3 tailles = 9 combinaisons sans dupliquer de code
- **Card** : Base pour ActivityCard et autres contenus encadrés
- **Badge** : Labels catégories, popularité, etc.
- **InfoBox** : Encadrés "À savoir", "Conseil", "Attention"

**Pourquoi ces composants** :
- Éviter le syndrome "bouton avec 47 classes Tailwind copiées-collées"
- Garantir la cohérence visuelle (tous les boutons se ressemblent)
- Faciliter les changements globaux (ex: changer le border-radius de toutes les cards)

#### 3. Activités (`components/activities/`)

**Rôle** : Affichage et interaction avec les activités

- **ActivityCard** : Affiche UNE activité (cliquable, 3 variantes)
- **ActivityList** : Grille de ActivityCard (responsive, 2/3/4 colonnes)
- **ActivityFilters** : Filtres de recherche (catégorie, lieu, prix)
- **ActivityHighlight** : Mise en avant horizontale (hero, coups de cœur)

**Pourquoi cette séparation** :
- **ActivityCard** est utilisé partout : accueil, liste, catégories, recherche
- **ActivityList** évite de réécrire la logique de grille à chaque fois
- **ActivityFilters** sera réutilisé sur toutes les pages de listing
- **ActivityHighlight** sert pour l'accueil ET les pages thématiques futures

#### 4. Parcours utilisateur (`components/journey/`)

**Rôle** : Guider l'utilisateur dans son organisation de voyage

- **TravelStep** : Une étape (numéro, titre, description, liens)
- **TravelChecklist** : Liste verticale de TravelStep
- **NextStepCTA** : Bloc "Prochaine étape" en fin de page

**Pourquoi ces composants** :
- La page d'accueil est une **checklist**, pas un blog
- TravelStep peut être réutilisé pour d'autres guides (ex: "Préparer sa valise")
- NextStepCTA guide l'utilisateur vers l'action suivante (UX fluide)

## 📄 Architecture des pages

### Page d'accueil (`/`)

**Intention utilisateur** : "Comment organiser mon voyage à l'île Maurice ?"

**Structure** :
```
Hero (Section)
  ↓
Activité mise en avant (ActivityHighlight)
  ↓
Checklist 7 étapes (TravelChecklist)
  ↓
Conseils pratiques (4 × InfoBox)
  ↓
Activités populaires (ActivityList)
  ↓
CTA "Voir toutes les activités" (NextStepCTA)
```

**Choix UX** :
- **Pas de carousel** : Les carousels ne sont pas accessibles et mal référencés
- **Checklist visible** : Tout est visible sans clic supplémentaire
- **Hiérarchie claire** : Du général (organisation) au spécifique (activités)
- **CTA évident** : L'utilisateur sait quelle est la prochaine étape

**Choix SEO** :
- Title : "Organiser votre voyage à l'Île Maurice | Guide complet"
- H1 : "Organisez votre voyage à l'Île Maurice en toute simplicité"
- Contenu structuré (H2, H3) pour les étapes
- Maillage interne vers /activites-ile-maurice

### Page activités (`/activites-ile-maurice`)

**Intention utilisateur** : "Quelles activités faire à l'île Maurice ?"

**Structure** :
```
Hero avec compteur (Section)
  ↓
Introduction (InfoBox)
  ↓
Layout 2 colonnes :
  - Sidebar : Filtres + Tri (sticky)
  - Contenu : Compteur résultats + ActivityList
  ↓
Conseils pratiques (3 × InfoBox)
```

**Choix UX** :
- **Filtres en sidebar** : Toujours visibles (sticky), facilitent la recherche
- **Compteur de résultats** : L'utilisateur sait combien d'activités correspondent
- **Pas de pagination** : Toutes les activités chargées (JSON local, rapide)
- **Message si vide** : Si filtres trop restrictifs, message explicatif

**Choix SEO** :
- Title : "Activités à l'Île Maurice : 60+ expériences authentiques"
- H1 : "Activités à l'Île Maurice"
- Nombre d'activités dans le title (Social proof)
- Texte d'introduction pour le contenu textuel
- Pas de "page 2" (évite la dilution du référencement)

## 🎨 Choix UX globaux

### Mobile-first

**Pourquoi** :
- 70%+ du trafic vient de mobile
- Google indexe en mobile-first
- Plus facile de passer de mobile à desktop que l'inverse

**Mise en œuvre** :
- Toutes les grilles sont `grid-cols-1` puis `md:grid-cols-X`
- Menu burger sur mobile, navigation horizontale sur desktop
- Images adaptatives (Next.js Image avec `sizes`)
- Espaces adaptés (padding plus petit sur mobile)

### Pas de surcharge visuelle

**Interdictions** :
- ❌ Pas de grandes hero images décoratives
- ❌ Pas de carousels automatiques
- ❌ Pas de vidéos en autoplay
- ❌ Pas d'animations distrayantes

**Autorisations** :
- ✅ Images pour illustrer une activité (utiles)
- ✅ Hover effects subtils (feedback utilisateur)
- ✅ Transitions douces (professionnalisme)

### Hiérarchie visuelle

**Tailles de titres** :
- H1 : `text-4xl md:text-5xl` (hero page)
- H2 : `text-3xl` (sections)
- H3 : `text-2xl` ou `text-xl` (sous-sections)

**Contrastes** :
- Texte principal : `text-gray-900`
- Texte secondaire : `text-gray-600`
- Texte tertiaire : `text-gray-500`

**Espacements** :
- Sections : `py-8`, `py-12` ou `py-16`
- Blocs : `mb-4`, `mb-6` ou `mb-8`
- Éléments : `gap-2`, `gap-4` ou `gap-6`

## 🔍 Choix SEO

### Stratégie de contenu

**Une page = une intention de recherche**

| Page | Intention | Mots-clés cibles |
|------|-----------|------------------|
| `/` | Organiser voyage | "organiser voyage île maurice", "guide île maurice" |
| `/activites-ile-maurice` | Activités à faire | "activités île maurice", "que faire île maurice" |
| `/activite/[slug]` | Activité spécifique | "[nom activité] île maurice" |

**Pas de cannibalisation** :
- Chaque intention a SA page
- Pas de duplication de contenu
- Maillage interne cohérent

### Optimisations techniques

**SSR/SSG** :
- HTML généré côté serveur (Next.js)
- Google voit le contenu immédiatement
- Temps de chargement optimisé

**Métadonnées** :
- Title unique par page (50-60 caractères)
- Description unique (150-160 caractères)
- Open Graph pour réseaux sociaux
- Keywords ciblés

**Images** :
- Next.js Image (lazy loading automatique)
- Alt text descriptifs
- Formats optimisés (WebP via Cloudinary)
- Responsive (srcset automatique)

**Structure HTML** :
- H1 unique par page
- Hiérarchie H2 > H3 respectée
- Listes sémantiques (`<ul>`, `<ol>`)
- Links accessibles (aria-label si besoin)

### Contenu evergreen

**Pas de dates** :
- ❌ "Guide 2026"
- ❌ "Meilleures activités en janvier"
- ✅ "Guide complet"
- ✅ "Activités incontournables"

**Pourquoi** :
- Le contenu reste valide dans le temps
- Pas besoin de mettre à jour chaque année
- Meilleur référencement long terme

## 🔄 Évolutivité

### Comment ajouter une page catégorie

Exemple : `/activites/canyoning`

**Étape 1** : Créer le dossier
```
app/activites/canyoning/page.tsx
```

**Étape 2** : Réutiliser les composants
```tsx
import Section from '@/components/layout/Section';
import ActivityList from '@/components/activities/ActivityList';
import { getActivitiesByCategory } from '@/lib/activities';

export default function CanyoningPage() {
  const activities = getActivitiesByCategory('Canyoning');

  return (
    <>
      <Section title="Canyoning à l'Île Maurice">
        <ActivityList activities={activities} />
      </Section>
    </>
  );
}
```

**Étape 3** : Optimiser SEO
- Title unique : "Canyoning à l'Île Maurice | X activités"
- Description spécifique au canyoning
- Contenu textuel sur le canyoning (1-2 paragraphes)

### Comment ajouter un nouveau composant

**Checklist avant de créer** :
1. ✅ Un composant existant ne peut-il pas faire l'affaire ?
2. ✅ Ce composant sera-t-il utilisé sur plusieurs pages ?
3. ✅ Son rôle est-il clairement défini et unique ?
4. ✅ Peut-il être paramétré avec des props plutôt que dupliqué ?

**Si toutes les réponses sont OUI**, créer le composant :
1. Le placer dans le bon dossier (`ui/`, `layout/`, etc.)
2. Documenter avec JSDoc
3. Props avec TypeScript
4. Tester sur plusieurs cas d'usage

## 📊 Monitoring de qualité

### Métriques UX à suivre

- **Core Web Vitals** (LCP, FID, CLS)
- **Taux de rebond** par page
- **Temps passé** sur la checklist
- **Clics sur CTA** (conversion)

### Métriques SEO à suivre

- **Positions** sur mots-clés cibles
- **Trafic organique** par page
- **Taux de clic** dans les SERPs
- **Backlinks** et autorité

### Code quality checks

- **TypeScript** : Pas d'erreurs de type
- **Accessibilité** : Tests axe/lighthouse
- **Performance** : Lighthouse score > 90
- **SEO** : Lighthouse SEO > 95

## ✅ Checklist avant déploiement

- [ ] Toutes les images ont un `alt` descriptif
- [ ] Toutes les pages ont un title et description uniques
- [ ] Mobile responsive testé sur iPhone et Android
- [ ] Lighthouse score vérifié (Performance, Accessibility, SEO)
- [ ] Pas d'erreurs TypeScript (`npm run build`)
- [ ] Liens internes fonctionnels
- [ ] Vitesse de chargement < 3s (mobile 3G)

---

**Note** : Cette architecture est pensée pour durer. Chaque ajout doit respecter ces principes pour garantir la pérennité du projet.
