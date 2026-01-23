# Structure des URLs et stratégie SEO

Documentation complète de l'architecture d'URLs du site ilemauricevoyage.fr

## 🎯 Objectif

Créer une architecture d'URLs **simple, lisible et optimisée SEO** :
- **Pas de préfixe inutile** : `/canyoning-ile-maurice` au lieu de `/activite/canyoning-ile-maurice`
- **Mots-clés dans l'URL** : Inclusion de "île maurice" pour le SEO
- **Cohérence** : Une seule URL par intention de recherche

## 📁 Architecture complète

### Pages principales

| URL | Page | Intention SEO | Génération |
|-----|------|---------------|------------|
| `/` | Page d'accueil | "organiser voyage île maurice" | Statique |
| `/activites-ile-maurice` | Liste complète | "activités île maurice" | Statique |

### Pages catégories (dynamiques)

**Pattern** : `/[category-slug]-ile-maurice`

**Exemples** :
- `/canyoning-ile-maurice`
- `/plongee-sous-marine-ile-maurice`
- `/observation-des-cetaces-ile-maurice`
- `/balade-en-catamaran-ile-maurice`

**Génération** : Statique au build (SSG) via `generateStaticParams()`

**Total** : 18 pages catégories générées automatiquement

## 🔤 Transformation des slugs

### Règles de slugification

Les catégories du JSON sont transformées en slugs SEO-friendly :

```typescript
categoryToSlug("Plongée sous-marine")
// → "plongee-sous-marine-ile-maurice"

categoryToSlug("4x4 / Jeep")
// → "4x4-jeep-ile-maurice"

categoryToSlug("Observation des cétacés")
// → "observation-des-cetaces-ile-maurice"
```

**Processus** :
1. Conversion en minuscules
2. Suppression des accents (NFD normalization)
3. Remplacement des caractères spéciaux
4. Remplacement des espaces par tirets
5. Ajout du suffixe `-ile-maurice`

### Liste complète des URLs générées

```
/canyoning-ile-maurice
/plongee-sous-marine-ile-maurice
/snorkeling-ile-maurice
/observation-des-cetaces-ile-maurice
/balade-en-catamaran-ile-maurice
/balade-en-bateau-ile-maurice
/randonnee-ile-maurice
/quad-ile-maurice
/buggy-ile-maurice
/4x4-jeep-ile-maurice
/kitesurf-ile-maurice
/kayak-ile-maurice
/balade-a-cheval-ile-maurice
/vols-panoramiques-ile-maurice
/tyrolienne-ile-maurice
/accrobranche-ile-maurice
/vtt-ile-maurice
/luge-de-montagne-ile-maurice
```

## 🎨 Contenu SEO par catégorie

Chaque page catégorie possède du contenu SEO unique défini dans `lib/category-seo.ts` :

### Structure du contenu

```typescript
{
  title: string,           // Meta title optimisé (50-60 char)
  description: string,     // Meta description (150-160 char)
  h1: string,             // Titre H1 de la page
  intro: string,          // Paragraphe d'introduction (2-3 phrases)
  keywords: string[],     // Mots-clés principaux
  relatedKeywords: string[] // Mots-clés associés (optionnel)
}
```

### Exemple : Canyoning

```typescript
{
  title: 'Canyoning à l\'Île Maurice : descentes sensationnelles',
  description: 'Découvrez le canyoning à l\'île Maurice : descentes en rappel, toboggans naturels et bassins cristallins...',
  h1: 'Canyoning à l\'Île Maurice',
  intro: 'Le canyoning à l\'île Maurice offre des sensations fortes...',
  keywords: [
    'canyoning île maurice',
    'canyoning tamarin',
    'descente rappel maurice',
    '7 cascades tamarin'
  ],
  relatedKeywords: [
    'canyon île maurice',
    'activité aventure maurice',
    'sport extrême maurice'
  ]
}
```

## 🔍 Stratégie de mots-clés

### Ciblage principal

Chaque page catégorie cible **[activité] + "île maurice"** :

| Catégorie | KW principal | Volume estimé |
|-----------|--------------|---------------|
| Canyoning | "canyoning île maurice" | Moyen |
| Plongée | "plongée sous marine maurice" | Élevé |
| Snorkeling | "snorkeling île maurice" | Élevé |
| Observation cétacés | "observation baleines île maurice" | Moyen |
| Catamaran | "catamaran île maurice" | Moyen |

### Variantes de mots-clés

Chaque page inclut des **variantes proches** pour capturer plus de trafic :

**Exemple Canyoning** :
- KW principal : "canyoning île maurice"
- Variantes : "canyon île maurice", "activité aventure maurice", "sport extrême maurice"
- Longue traîne : "canyoning tamarin", "descente rappel maurice", "7 cascades tamarin"

### Cannibalisation évitée

✅ **Bonne pratique** :
- `/canyoning-ile-maurice` → "canyoning île maurice"
- `/plongee-sous-marine-ile-maurice` → "plongée sous marine maurice"
- `/activites-ile-maurice` → "activités île maurice" (général)

❌ **Éviter** :
- Plusieurs pages ciblant le même mot-clé
- Pages avec intentions de recherche trop proches
- Contenu dupliqué entre pages

## 📊 Optimisations SEO par page

### Meta tags

Chaque page catégorie génère automatiquement :

```html
<title>Canyoning à l'Île Maurice : descentes sensationnelles</title>
<meta name="description" content="Découvrez le canyoning à l'île Maurice..." />
<meta name="keywords" content="canyoning île maurice, canyoning tamarin..." />

<!-- Open Graph -->
<meta property="og:title" content="Canyoning à l'Île Maurice..." />
<meta property="og:description" content="Découvrez le canyoning..." />
<meta property="og:type" content="website" />
<meta property="og:locale" content="fr_FR" />
```

### Structure HTML

```html
<h1>Canyoning à l'Île Maurice</h1>

<!-- Intro avec mots-clés naturels -->
<p>Le canyoning à l'île Maurice offre des sensations fortes...</p>

<!-- Statistiques (Trust signals) -->
<div>
  <span>12 activités</span>
  <span>8 populaires</span>
  <span>À partir de 68 €</span>
</div>

<!-- Mots-clés associés -->
<div>
  <span>canyon île maurice</span>
  <span>activité aventure maurice</span>
</div>

<!-- Liste d'activités -->
<div>
  <!-- ActivityCard × N -->
</div>

<!-- Contenu additionnel -->
<section>Informations pratiques</section>
```

### Maillage interne

Chaque page catégorie contient :
- **Lien vers page activités** (breadcrumb virtuel)
- **Liens vers activités individuelles** (via ActivityCard)
- **CTA vers `/activites-ile-maurice`** (en footer)

Pages d'entrée vers catégories :
- **Page d'accueil** : `CategoryGrid` avec liens vers toutes les catégories
- **Page activités** : Filtres catégories (potentiel lien)

## 🚀 Génération statique (SSG)

### Processus au build

```typescript
// app/[category]/page.tsx

export async function generateStaticParams() {
  const categorySlugs = getCategorySlugs();
  // Retourne : [
  //   { category: 'canyoning-ile-maurice' },
  //   { category: 'plongee-sous-marine-ile-maurice' },
  //   ...
  // ]
  return categorySlugs.map((item) => ({
    category: item.slug,
  }));
}
```

**Avantages SSG** :
- ✅ Génération au build (rapide)
- ✅ HTML visible par Google immédiatement
- ✅ Temps de chargement optimal
- ✅ Pas d'appel API côté client
- ✅ Toutes les pages indexables

### Revalidation

Pour mettre à jour les pages après modification du JSON :

```bash
npm run build
```

**Ou** avec Vercel :
- Revalidation automatique à chaque déploiement
- Revalidation on-demand via webhook (optionnel)

## 📈 KPIs SEO à suivre

### Par page catégorie

- **Impressions** : Nombre d'apparitions dans les SERPs
- **Clics** : CTR depuis Google
- **Position moyenne** : Classement sur KW principal
- **Taux de rebond** : Engagement utilisateur
- **Temps sur page** : Qualité du contenu

### Global

- **Nombre de pages indexées** : 2 + 18 = 20 pages minimum
- **Liens entrants** : Backlinks vers pages catégories
- **Trafic organique** : Évolution mois par mois
- **Conversions** : Clics vers Manawa (si tracking activé)

## 🎯 Prochaines optimisations

### Court terme

- [ ] Ajouter des FAQs par catégorie (SEO + UX)
- [ ] Enrichir le contenu textuel (200-300 mots min)
- [ ] Ajouter des images spécifiques aux catégories
- [ ] Implémenter les breadcrumbs structurés

### Moyen terme

- [ ] Pages localisations (`/activites-tamarin`, etc.)
- [ ] Landing pages thématiques ("famille", "couple", etc.)
- [ ] Blog pour longue traîne
- [ ] Schema.org markup (Product, AggregateRating)

### Long terme

- [ ] Version anglaise (`/en/`)
- [ ] Pages comparaisons ("canyoning vs via ferrata")
- [ ] Guides complets par activité
- [ ] Calculateur de budget voyage

## 📝 Checklist avant déploiement

- [x] 18 pages catégories générées
- [x] Meta tags uniques par page
- [x] Contenu SEO personnalisé
- [x] Maillage interne (CategoryGrid)
- [x] URLs propres et lisibles
- [x] Structure HTML sémantique
- [ ] Google Search Console configuré
- [ ] Sitemap.xml généré
- [ ] robots.txt créé
- [ ] Lighthouse SEO score > 95

---

**Note** : Cette architecture d'URLs est optimisée pour le SEO français sur le marché mauricien. Les URLs courtes avec mots-clés maximisent les chances de bon positionnement.
