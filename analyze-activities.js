const data = require('./data/activities-clean.json');

// Grouper par catégorie + lieu principal pour détecter les risques de cannibalisation
const groups = {};

data.forEach(activity => {
  const mainLocation = activity.locations[0] || 'Sans lieu';
  const key = `${activity.category} - ${mainLocation}`;

  if (!groups[key]) {
    groups[key] = [];
  }
  groups[key].push({
    id: activity.id,
    name: activity.name,
    price: activity.price,
    rating: activity.rating,
    reviews: activity.reviewCount
  });
});

// Afficher les groupes avec plusieurs activités (risque de cannibalisation)
console.log('=== RISQUES DE CANNIBALISATION DÉTECTÉS ===\n');
Object.keys(groups)
  .filter(key => groups[key].length > 1)
  .forEach(key => {
    console.log(`📍 ${key}`);
    console.log(`   → ${groups[key].length} activités similaires`);
    groups[key].forEach((act, i) => {
      console.log(`   ${i + 1}. ${act.name.substring(0, 80)}...`);
      console.log(`      Prix: ${act.price}€ | Note: ${act.rating} (${act.reviews} avis)`);
    });
    console.log('   ⚠️  FUSION RECOMMANDÉE sur 1 seule page\n');
  });

console.log('\n=== STATISTIQUES ===');
console.log(`Total activités: ${data.length}`);
console.log(`Groupes uniques: ${Object.keys(groups).length}`);
console.log(`Risques de cannibalisation: ${Object.keys(groups).filter(k => groups[k].length > 1).length}`);
