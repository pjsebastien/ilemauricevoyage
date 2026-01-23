const fs = require('fs');
const path = require('path');

// Charger les données
const activities = require('../data/activities-clean.json');

/**
 * Slugify une chaîne de caractères
 */
function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

/**
 * Détecte les groupes d'activités qui doivent être fusionnés
 */
function detectActivityGroups() {
  const groups = {};

  activities.forEach(activity => {
    const mainLocation = activity.locations[0] || 'Sans lieu';
    const key = `${activity.category} - ${mainLocation}`;

    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(activity);
  });

  return Object.keys(groups).map(key => {
    const parts = key.split(' - ');
    const category = parts[0];
    const mainLocation = parts[1];
    const groupActivities = groups[key];
    const needsFusion = groupActivities.length > 1;

    return {
      key,
      category,
      mainLocation,
      activities: groupActivities,
      needsFusion,
      slug: needsFusion
        ? `${slugify(category)}-${slugify(mainLocation)}-ile-maurice`
        : `${slugify(groupActivities[0].name.substring(0, 80))}-${groupActivities[0].id}`,
    };
  });
}

/**
 * Génère le template de page pour une fusion
 */
function generateFusionPageTemplate(group) {
  return `import { Metadata } from 'next';
import FusionActivityPage from '@/components/activities/FusionActivityPage';
import { generateActivityPageSEO } from '@/lib/activity-pages';

const group = {
  key: "${group.key}",
  category: "${group.category}",
  mainLocation: "${group.mainLocation}",
  activities: ${JSON.stringify(group.activities, null, 2)},
  seoIntent: "Comparer et choisir la meilleure sortie ${group.category.toLowerCase()} à ${group.mainLocation}",
  primaryKeyword: "${group.category.toLowerCase()} ${group.mainLocation.toLowerCase()}",
  needsFusion: true,
};

const seo = generateActivityPageSEO(group);

export const metadata: Metadata = {
  title: seo.title,
  description: seo.metaDescription,
  keywords: seo.relatedKeywords.join(', '),
};

export default function Page() {
  return <FusionActivityPage group={group} seo={seo} />;
}
`;
}

/**
 * Génère le template de page pour une activité individuelle
 */
function generateIndividualPageTemplate(group) {
  const activity = group.activities[0];

  return `import { Metadata } from 'next';
import { getAllActivities } from '@/lib/activities';
import IndividualActivityPage from '@/components/activities/IndividualActivityPage';
import { generateActivityPageSEO } from '@/lib/activity-pages';

const activity = ${JSON.stringify(activity, null, 2)};

const group = {
  key: "${group.key}",
  category: "${group.category}",
  mainLocation: "${group.mainLocation}",
  activities: [activity],
  seoIntent: "Réserver une sortie ${group.category.toLowerCase()} à ${group.mainLocation}",
  primaryKeyword: "${group.category.toLowerCase()} ${group.mainLocation.toLowerCase()}",
  needsFusion: false,
};

const seo = generateActivityPageSEO(group);

// Activités similaires (même catégorie)
const relatedActivities = getAllActivities()
  .filter(a => a.category === "${group.category}" && a.id !== "${activity.id}")
  .slice(0, 4);

export const metadata: Metadata = {
  title: seo.title,
  description: seo.metaDescription,
  keywords: seo.relatedKeywords.join(', '),
};

export default function Page() {
  return <IndividualActivityPage activity={activity} relatedActivities={relatedActivities} seo={seo} />;
}
`;
}

/**
 * Génère toutes les pages
 */
function generateAllPages() {
  const groups = detectActivityGroups();
  const pagesDir = path.join(__dirname, '../app/activite');

  // Créer le dossier activite s'il n'existe pas
  if (!fs.existsSync(pagesDir)) {
    fs.mkdirSync(pagesDir, { recursive: true });
  }

  const stats = {
    totalActivities: activities.length,
    fusionPages: 0,
    individualPages: 0,
    totalPages: 0,
  };

  console.log('🚀 Génération des pages d\'activités...\n');

  groups.forEach(group => {
    const pageDir = path.join(pagesDir, group.slug);
    const pagePath = path.join(pageDir, 'page.tsx');

    // Créer le dossier de la page
    if (!fs.existsSync(pageDir)) {
      fs.mkdirSync(pageDir, { recursive: true });
    }

    // Générer le contenu de la page
    const pageContent = group.needsFusion
      ? generateFusionPageTemplate(group)
      : generateIndividualPageTemplate(group);

    // Écrire la page
    fs.writeFileSync(pagePath, pageContent, 'utf-8');

    // Statistiques
    if (group.needsFusion) {
      stats.fusionPages++;
      console.log(`✅ Fusion: /${group.slug} (${group.activities.length} activités)`);
    } else {
      stats.individualPages++;
      console.log(`✅ Individuelle: /${group.slug}`);
    }
    stats.totalPages++;
  });

  console.log('\n📊 STATISTIQUES:');
  console.log(`Total activités: ${stats.totalActivities}`);
  console.log(`Pages fusion: ${stats.fusionPages}`);
  console.log(`Pages individuelles: ${stats.individualPages}`);
  console.log(`Total pages générées: ${stats.totalPages}`);
  console.log(`\n✨ Toutes les pages ont été générées dans app/activite/`);

  // Générer aussi un fichier de mapping pour référence
  const mappingPath = path.join(__dirname, '../data/activity-pages-mapping.json');
  const mapping = groups.map(g => ({
    slug: g.slug,
    category: g.category,
    mainLocation: g.mainLocation,
    needsFusion: g.needsFusion,
    activitiesCount: g.activities.length,
    activityIds: g.activities.map(a => a.id),
  }));

  fs.writeFileSync(mappingPath, JSON.stringify(mapping, null, 2), 'utf-8');
  console.log(`\n📋 Mapping sauvegardé dans data/activity-pages-mapping.json`);
}

// Exécuter la génération
generateAllPages();
