# Guide d'utilisation de l'API WordPress pour les médias

## URL de l'API
```
https://blog.ilemauricevoyage.fr/wp-json/wp/v2/media
```

## Comment récupérer les images

### 1. Lister toutes les images
```bash
GET https://blog.ilemauricevoyage.fr/wp-json/wp/v2/media
```

### 2. Rechercher une image par titre
```bash
GET https://blog.ilemauricevoyage.fr/wp-json/wp/v2/media?search=maurice+janvier
```

### 3. Rechercher une image par slug
```bash
GET https://blog.ilemauricevoyage.fr/wp-json/wp/v2/media?slug=ile-maurice-janvier
```

### 4. Obtenir une image spécifique par ID
```bash
GET https://blog.ilemauricevoyage.fr/wp-json/wp/v2/media/{id}
```

## Structure de la réponse

Chaque image WordPress retourne les informations suivantes :
```json
{
  "id": 123,
  "title": {
    "rendered": "Plage de l'Île Maurice en janvier"
  },
  "source_url": "https://blog.ilemauricevoyage.fr/wp-content/uploads/2024/01/maurice-janvier.jpg",
  "alt_text": "Plage Maurice Janvier",
  "media_details": {
    "width": 1920,
    "height": 1080,
    "sizes": {
      "thumbnail": {
        "source_url": "https://...",
        "width": 150,
        "height": 150
      },
      "medium": {
        "source_url": "https://...",
        "width": 300,
        "height": 300
      },
      "large": {
        "source_url": "https://...",
        "width": 1024,
        "height": 1024
      }
    }
  }
}
```

## Intégration dans le projet

### 1. Configuration des images mensuelles

Dans `lib/monthly-data.ts`, ajoutez les URLs d'images dans le champ `images` :

```typescript
export const januaryData: MonthData = {
  // ... autres données ...
  images: {
    hero: 'https://blog.ilemauricevoyage.fr/wp-content/uploads/...',
    weather: 'https://blog.ilemauricevoyage.fr/wp-content/uploads/...',
    activities: 'https://blog.ilemauricevoyage.fr/wp-content/uploads/...'
  },
  // ... suite ...
};
```

### 2. Utilisation de l'API programmatique

Si vous voulez récupérer les images automatiquement, utilisez les fonctions dans `lib/wordpress-api.ts` :

```typescript
import { getMonthImages } from '@/lib/wordpress-api';

// Récupérer les images pour janvier
const images = await getMonthImages('janvier');
```

## Convention de nommage recommandée

Pour faciliter la recherche, nommez vos images dans WordPress avec cette structure :
- Hero : `maurice-[mois]-plage` (ex: `maurice-janvier-plage`)
- Météo : `maurice-[mois]-meteo` (ex: `maurice-janvier-meteo`)
- Activités : `maurice-[mois]-activites` (ex: `maurice-janvier-activites`)

## Meilleures pratiques

1. **Optimisation des images** : Uploadez des images de haute qualité (1920x1080 minimum pour hero)
2. **Alt text** : Toujours renseigner le texte alternatif pour le SEO
3. **Nommage cohérent** : Utilisez un système de nommage cohérent pour faciliter la recherche
4. **Compression** : Compressez vos images avant upload pour améliorer les performances

## Exemples de recherche

### Trouver toutes les images de janvier
```javascript
fetch('https://blog.ilemauricevoyage.fr/wp-json/wp/v2/media?search=janvier')
  .then(res => res.json())
  .then(images => console.log(images));
```

### Filtrer par catégorie (si configuré dans WordPress)
```javascript
fetch('https://blog.ilemauricevoyage.fr/wp-json/wp/v2/media?categories=12')
  .then(res => res.json())
  .then(images => console.log(images));
```

## Consignes globales pour l'utilisation

Quand vous avez besoin d'images pour les articles mensuels :
1. Recherchez d'abord dans l'API WordPress avec des termes pertinents
2. Utilisez le `source_url` de l'image trouvée
3. Intégrez l'URL directement dans `lib/monthly-data.ts`
4. Les images s'afficheront automatiquement sur la page si l'URL est renseignée
