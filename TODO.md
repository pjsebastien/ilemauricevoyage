# TODO - Prochaines étapes

Liste des fonctionnalités et améliorations à implémenter.

## 🚀 Priorité haute (court terme)

### Pages détail activité

- [ ] Créer la page `/activite/[slug]`
- [ ] Composant `ActivityDetail` avec :
  - [ ] Hero image grande taille
  - [ ] Titre et catégorie
  - [ ] Note et avis
  - [ ] Prix et durée
  - [ ] Description complète (`enriched.about`)
  - [ ] Informations pratiques (âge min, poids max, etc.)
  - [ ] Localisation avec carte (optionnel)
  - [ ] Bouton réservation (lien externe Manawa)
  - [ ] Activités similaires en bas de page

### Installation et premier lancement

- [ ] Installer les dépendances : `npm install`
- [ ] Tester le build : `npm run build`
- [ ] Lancer en dev : `npm run dev`
- [ ] Vérifier que toutes les pages s'affichent correctement
- [ ] Tester sur mobile (responsive)

### Optimisations images

- [ ] Vérifier que Next.js Image fonctionne avec Cloudinary
- [ ] Ajouter des placeholders blur pour les images
- [ ] Optimiser les tailles d'images selon les breakpoints
- [ ] Tester le lazy loading

## 📊 Priorité moyenne (moyen terme)

### Pages catégories

- [ ] Créer `/activites/[category]`
- [ ] Listing filtré par catégorie
- [ ] Texte SEO spécifique à chaque catégorie
- [ ] Breadcrumb de navigation
- [ ] Mettre à jour le Header avec dropdown catégories

### Pages localisations

- [ ] Créer `/activites/lieux/[location]`
- [ ] Listing filtré par zone géographique
- [ ] Carte interactive (optionnel)
- [ ] Texte SEO par zone

### Amélioration filtres

- [ ] Filtre par fourchette de prix (slider)
- [ ] Filtre par durée
- [ ] Filtre par niveau physique
- [ ] Sauvegarder les filtres dans l'URL (query params)
- [ ] Persister les filtres (localStorage)

### SEO avancé

- [ ] Générer sitemap.xml automatique
- [ ] Ajouter robots.txt
- [ ] Structured data (JSON-LD) :
  - [ ] Page activité → Product schema
  - [ ] Liste activités → ItemList schema
  - [ ] Avis → AggregateRating schema
- [ ] Meta tags Open Graph pour chaque page
- [ ] Meta tags Twitter Card

### Performance

- [ ] Lighthouse audit (score > 90 partout)
- [ ] Lazy load composants lourds
- [ ] Optimiser les fonts (preload)
- [ ] Minifier CSS/JS en production
- [ ] Activer la compression gzip

## 🔧 Priorité basse (long terme)

### Fonctionnalités utilisateur

- [ ] Système de favoris (localStorage)
- [ ] Comparateur d'activités
- [ ] Partage sur réseaux sociaux
- [ ] Impression PDF d'une activité
- [ ] Newsletter (formulaire inscription)

### Contenu éditorial

- [ ] Blog de voyage (optionnel)
- [ ] Guides thématiques :
  - [ ] Voyage en famille
  - [ ] Voyage de noces
  - [ ] Voyage sportif
  - [ ] Voyage détente
- [ ] FAQ
- [ ] Page "À propos"
- [ ] Page "Contact"

### Intégrations

- [ ] Google Analytics
- [ ] Google Tag Manager
- [ ] Cookie consent banner (RGPD)
- [ ] Chatbot support (optionnel)
- [ ] Système de réservation propre (vs lien externe)

### Multilangue

- [ ] Version anglaise du site
- [ ] Détection automatique de la langue
- [ ] Switcher de langue dans Header
- [ ] Traduction des activités

### Tests

- [ ] Tests unitaires (Jest)
- [ ] Tests composants (React Testing Library)
- [ ] Tests E2E (Playwright)
- [ ] Tests accessibilité (axe)

### DevOps

- [ ] CI/CD (GitHub Actions)
- [ ] Déploiement automatique (Vercel)
- [ ] Environnements staging/production
- [ ] Monitoring erreurs (Sentry)
- [ ] Monitoring performance (Vercel Analytics)

## 🐛 Bugs connus

_Aucun bug connu pour le moment._

## 💡 Idées futures

- [ ] Mode sombre (dark mode)
- [ ] PWA (Progressive Web App)
- [ ] Notifications push pour offres spéciales
- [ ] Système de points/fidélité
- [ ] Recommandations personnalisées (IA)
- [ ] Réalité augmentée pour prévisualiser les lieux

## 📝 Notes

### Décisions à prendre

1. **Système de réservation** : Garder le lien externe Manawa ou créer un système interne ?
2. **Images** : Continuer avec Cloudinary ou héberger en propre ?
3. **Blog** : Créer un blog intégré ou utiliser WordPress headless existant ?
4. **Analytics** : Google Analytics, Plausible, ou autre ?

### Contraintes techniques

- Le JSON `activities-clean.json` ne doit PAS être modifié manuellement
- Toute nouvelle fonctionnalité doit respecter l'architecture composants
- Mobile-first obligatoire
- Accessibilité WCAG AA minimum

---

**Dernière mise à jour** : 2026-01-22
