# Île Maurice Voyage - v2.0

Site web de présentation et de réservation d'activités pour l'île Maurice.
Refonte complète avec architecture composants réutilisables.

## 🎯 Objectifs du projet

- **UX et parcours utilisateur avant tout**
- **Intention de recherche claire par page**
- **SEO propre et durable**
- **Mobile-first**
- **SSR/SSG avec Next.js**
- **Code simple, lisible, maintenable**

## 🏗️ Architecture

### Stack technique

- **Framework** : Next.js 14 (App Router)
- **Langage** : TypeScript
- **Styling** : Tailwind CSS
- **Source de données** : JSON local (`data/activities-clean.json`)

### Structure des dossiers

```
ilemauricevoyagev2/
├── app/                              # Pages Next.js (App Router)
│   ├── layout.tsx                    # Layout racine
│   ├── page.tsx                      # Page d'accueil
│   ├── globals.css                   # Styles globaux
│   └── activites-ile-maurice/
│       └── page.tsx                  # Liste des activités
├── components/
│   ├── layout/                       # Composants de structure
│   │   ├── Header.tsx                # Navigation principale
│   │   ├── Footer.tsx                # Pied de page
│   │   └── Section.tsx               # Container de section
│   ├── activities/                   # Composants activités
│   │   ├── ActivityCard.tsx          # Carte activité
│   │   ├── ActivityList.tsx          # Grille d'activités
│   │   ├── ActivityFilters.tsx       # Filtres de recherche
│   │   └── ActivityHighlight.tsx     # Mise en avant
│   ├── journey/                      # Composants parcours utilisateur
│   │   ├── TravelStep.tsx            # Étape de checklist
│   │   ├── TravelChecklist.tsx       # Liste des étapes
│   │   └── NextStepCTA.tsx           # CTA prochaine étape
│   └── ui/                           # Composants UI génériques
│       ├── Button.tsx                # Bouton réutilisable
│       ├── Card.tsx                  # Container carte
│       ├── Badge.tsx                 # Label/badge
│       └── InfoBox.tsx               # Encadré informatif
├── lib/                              # Utilitaires et helpers
│   ├── types.ts                      # Types TypeScript
│   ├── activities.ts                 # Fonctions activités
│   └── utils.ts                      # Helpers génériques
├── data/
│   └── activities-clean.json         # Source de données
└── public/                           # Assets statiques
```

## 🧩 Composants clés réutilisables

### Layout & Structure

**Header** : Navigation sticky avec menu burger mobile
**Footer** : Pied de page avec liens utiles
**Section** : Container générique pour blocs de contenu (titre, sous-titre, background, spacing)

### Activités

**ActivityCard** : Carte d'activité (3 variantes : compact, standard, featured)
**ActivityList** : Grille responsive d'activités (2, 3 ou 4 colonnes)
**ActivityFilters** : Filtres catégorie, prix, localisation
**ActivityHighlight** : Mise en avant horizontale avec grande image

### Parcours utilisateur

**TravelStep** : Une étape de la checklist voyage
**TravelChecklist** : Liste progressive verticale des étapes
**NextStepCTA** : Bloc "prochaine étape" en fin de page

### UI Génériques

**Button** : 3 variantes (primary, secondary, outline) × 3 tailles (sm, md, lg)
**Card** : Container avec bordure, ombre et padding personnalisables
**Badge** : Labels colorés (default, success, warning, info, popular)
**InfoBox** : Encadrés informatifs (info, warning, success, tip)

## 📄 Pages

### Page d'accueil (`/`)

**Rôle** : Checklist d'organisation du voyage
**Intention SEO** : "Comment organiser mon voyage à l'île Maurice"

**Structure** :
- Hero avec titre et sous-titre
- Activité mise en avant (coup de cœur)
- Checklist des 7 étapes pour organiser son voyage
- Conseils pratiques (4 encadrés InfoBox)
- Sélection d'activités populaires
- CTA vers la page activités

### Page activités (`/activites-ile-maurice`)

**Rôle** : Catalogue filtrable des activités
**Intention SEO** : "Quelles activités faire à l'île Maurice"

**Structure** :
- Hero avec titre et compteur d'activités
- Encadré d'introduction
- Sidebar filtres (catégorie, localisation, popularité) + tri
- Grille d'activités responsive
- Conseils pratiques en bas de page

## 🎨 Design & UX

### Principes

- **Sobriété** : Design épuré, focus sur le contenu
- **Clarté** : Hiérarchie visuelle évidente
- **Utilité** : Chaque élément a un rôle précis
- **Mobile-first** : Responsive sur tous les écrans

### Couleurs

**Primary** : Bleu océan (tons 50 à 900)
**Secondary** : Beige sable (tons 50 à 900)
**Grays** : Gris neutres pour textes et backgrounds

### Typographie

**Police** : Inter (Google Fonts)
**Tailles** : Système cohérent via Tailwind

## 🔍 SEO

### Stratégie

- **1 page = 1 intention de recherche**
- **Pas de cannibalisation**
- **Contenu evergreen** (sans dates)
- **Métadonnées optimisées**
- **SSR/SSG** pour HTML visible

### Métadonnées

Chaque page possède :
- Title unique et descriptif
- Description optimisée
- Keywords pertinents
- Open Graph tags

## 📊 Données

**Source unique de vérité** : `data/activities-clean.json`

Les activités contiennent :
- Informations générales (nom, catégorie, description)
- Prix et notation
- Localisation et coordonnées
- Durée et niveau physique
- Détails enrichis (about, requirements)

**Pas d'appel API côté front** : Le JSON est importé statiquement.

## 🚀 Développement

### Installation

```bash
npm install
```

### Lancement en dev

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

### Build production

```bash
npm run build
npm start
```

## 🔄 Évolutivité

### Ajouter une nouvelle page

1. Créer le dossier dans `app/`
2. Créer `page.tsx`
3. **Réutiliser les composants existants**
4. Suivre la même structure (Section, Hero, CTA)

### Ajouter un composant

1. Identifier si un composant existant peut être réutilisé
2. Si nouveau composant nécessaire :
   - Le placer dans le bon dossier (`ui/`, `layout/`, etc.)
   - Documenter son rôle (JSDoc)
   - Le rendre réutilisable (props flexibles)
   - L'utiliser sur plusieurs pages si possible

## 📝 Règles de développement

### TOUJOURS

✅ Réutiliser les composants existants
✅ Composer plutôt que dupliquer
✅ Garder les composants simples et clairs
✅ Documenter les choix techniques
✅ Penser mobile-first

### JAMAIS

❌ Créer un composant spécifique à une seule page sans justification
❌ Dupliquer du code existant
❌ Complexifier sans raison
❌ Utiliser des couleurs/styles hors du design system
❌ Oublier l'accessibilité

## 🎯 Prochaines étapes

- [ ] Implémenter les pages de détail d'activités (`/activite/[slug]`)
- [ ] Ajouter des pages catégories (`/activites/canyoning`, etc.)
- [ ] Intégrer un système de réservation
- [ ] Optimiser les images (lazy loading, formats next-gen)
- [ ] Ajouter des tests (Jest, React Testing Library)
- [ ] Mettre en place l'analytics

## 📚 Documentation technique

### Helpers principaux

**`lib/activities.ts`**
- `getAllActivities()` : Récupère toutes les activités
- `getPopularActivities(limit)` : Activités populaires
- `filterActivities(filters)` : Filtre selon critères
- `sortActivities(activities, sortBy)` : Tri
- `getCategories()` : Liste des catégories
- `getLocations()` : Liste des localisations

**`lib/utils.ts`**
- `cn()` : Combine classes Tailwind
- `slugify()` : Génère un slug URL
- `truncate()` : Tronque un texte
- `decodeHtmlEntities()` : Décode entités HTML

## 👥 Contribution

Pour contribuer au projet :
1. Lire ce README en entier
2. Comprendre l'architecture des composants
3. Réutiliser au maximum l'existant
4. Documenter les nouveaux composants
5. Tester sur mobile et desktop

---

**Version** : 2.0.0
**Dernière mise à jour** : 2026-01-22
