# 🎨 Hero Professionnel - Version Finale

## ✅ Style sobre et moderne inspiré de GetYourGuide

Le hero a été complètement refait dans un style **épuré et professionnel** :

### Caractéristiques
- ✅ **Fond blanc** avec image de fond subtile (optionnelle)
- ✅ **Overlay discret** pour garder le texte parfaitement lisible
- ✅ **Typographie claire** avec tracking optimisé
- ✅ **Badge sobre** en uppercase
- ✅ **Stats minimalistes** (valeur + label, sans icônes)
- ✅ **Espacement généreux**
- ✅ **Bordure subtile** en bas pour séparer du contenu

## 📐 API simplifiée

```tsx
<PageHero
  size="large"                          // default | large
  badge="Dossier complet"                 // Optionnel
  title="Titre principal"               // Requis
  subtitle="Description"                // Optionnel
  backgroundImage="https://..."         // Optionnel - Image de fond subtile
  stats={[                              // Optionnel
    { value: "60+", label: "activités" },
    { value: "18", label: "catégories" },
  ]}
/>
```

## 🖼️ Images de fond

### Comment ça fonctionne

Quand une `backgroundImage` est fournie :
1. L'image est affichée en `object-cover` sur toute la zone
2. Un **overlay blanc semi-transparent** est appliqué (95-90% d'opacité)
3. Le texte reste **parfaitement lisible** sur fond clair
4. L'image apporte une touche visuelle **subtile** sans être envahissante

### Overlay utilisé

```css
bg-gradient-to-b from-white/95 via-white/90 to-white/95
```

Cela crée un dégradé blanc avec :
- 95% d'opacité en haut
- 90% d'opacité au milieu
- 95% d'opacité en bas

→ L'image est visible mais **très discrète**

### Sources d'images

**Option 1 : Unsplash (placeholder)**
```tsx
backgroundImage="https://images.unsplash.com/photo-1589394637989-9f1b6e278d0e"
```

**Option 2 : API WordPress (vos images)**
```tsx
backgroundImage="https://blog.ilemauricevoyage.fr/wp-content/uploads/..."
```

**Option 3 : Pas d'image**
```tsx
// Omettre le prop backgroundImage
<PageHero title="..." subtitle="..." />
```

## 📍 Exemples d'utilisation

### Page d'accueil (avec image)

```tsx
<PageHero
  size="large"
  badge="Dossier complet"
  title="Organisez votre voyage à l'Île Maurice"
  subtitle="Un guide étape par étape..."
  backgroundImage="https://images.unsplash.com/photo-1589394637989-9f1b6e278d0e"
  stats={[
    { value: "60+", label: "activités" },
    { value: "42", label: "populaires" },
    { value: "18", label: "catégories" },
  ]}
/>
```

### Page activités (avec image)

```tsx
<PageHero
  badge="Toutes nos activités"
  title="Activités à l'Île Maurice"
  subtitle="Découvrez plus de 60 expériences..."
  backgroundImage="https://images.unsplash.com/photo-1559827260-dc66d52bef19"
  stats={[
    { value: "60", label: "activités" },
    { value: "18", label: "catégories" },
    { value: "dès 45€", label: "par personne" },
  ]}
/>
```

### Page catégorie (sans image pour la sobriété)

```tsx
<PageHero
  badge="Canyoning"
  title="Canyoning à l'Île Maurice"
  subtitle="Découvrez les gorges spectaculaires..."
  stats={[
    { value: "12", label: "activités" },
    { value: "8", label: "populaires" },
    { value: "dès 68€", label: "par personne" },
  ]}
/>
```

## 🎯 Recommandations

### Quand utiliser une image de fond

✅ **Page d'accueil** : Image panoramique de l'île Maurice
✅ **Page activités** : Image d'activité nautique/nature
✅ **Pages thématiques** : Image correspondant au thème

### Quand NE PAS utiliser d'image

❌ **Pages catégories** : Garder sobre pour focus sur contenu
❌ **Pages techniques** : FAQ, Contact, etc.
❌ **Si pas d'image pertinente** : Mieux pas d'image qu'une mauvaise image

### Critères d'une bonne image de fond

1. **Claire et lumineuse** : Éviter les images trop sombres
2. **Peu de détails** : Éviter les images trop chargées
3. **Horizontale** : Format paysage
4. **Haute résolution** : Min 1920px de large
5. **Pertinente** : En rapport avec le sujet de la page

## 🔧 Configuration Next.js

Les domaines d'images autorisés dans `next.config.mjs` :

```js
images: {
  remotePatterns: [
    { hostname: 'res.cloudinary.com' },         // Manawa
    { hostname: 'blog.ilemauricevoyage.fr' },   // Votre WordPress
    { hostname: 'images.unsplash.com' },        // Unsplash
  ],
}
```

## 🎨 Personnalisation

### Modifier l'opacité de l'overlay

Dans `PageHero.tsx` :

```tsx
// Plus visible (moins d'overlay)
<div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/90" />

// Moins visible (plus d'overlay)
<div className="absolute inset-0 bg-gradient-to-b from-white/98 via-white/95 to-white/98" />
```

### Ajouter un flou (effet moderne)

```tsx
<Image
  src={backgroundImage}
  alt=""
  fill
  className="object-cover blur-sm"  // Ajouter blur-sm
  sizes="100vw"
  priority
/>
```

## ✨ Résultat

Un hero **professionnel, sobre et élégant** qui :
- Met en valeur le contenu (texte)
- Apporte une touche visuelle discrète
- Reste lisible sur tous les écrans
- S'inspire des meilleurs sites de voyage (GetYourGuide, Booking, etc.)

---

**Note** : Les images Unsplash sont des placeholders. Remplacez-les par vos propres images de l'île Maurice depuis votre API WordPress pour une cohérence totale avec votre contenu !

Pour récupérer vos images WordPress :
```
https://blog.ilemauricevoyage.fr/wp-json/wp/v2/media
```
