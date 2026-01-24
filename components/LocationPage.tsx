import Link from 'next/link';
import Image from 'next/image';
import { LocationData, getNearbyLocations } from '@/lib/locations-data';
import { filterActivities } from '@/lib/activities';
import { Activity } from '@/lib/types';

interface LocationPageProps {
  location: LocationData;
}

export default function LocationPage({ location }: LocationPageProps) {
  // Get activities for this location
  const activities = filterActivities({ location: location.name });

  // Get nearby locations
  const nearbyLocs = getNearbyLocations(location.slug);

  // Group activities by category
  const activitiesByCategory = activities.reduce((acc, activity) => {
    const cat = activity.category;
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(activity);
    return acc;
  }, {} as Record<string, Activity[]>);

  const getCategoryEmoji = (category: string) => {
    const emojiMap: Record<string, string> = {
      'Plongée': '🤿',
      'Snorkeling': '🤿',
      'Canyoning': '🏞️',
      'Randonnée': '🥾',
      'Catamaran': '⛵',
      'Kitesurf': '🪁',
      'Surf': '🏄',
      'Quad': '🏍️',
      'Kayak': '🛶',
      'Paddle': '🏄',
      'Jet ski': '🏍️',
      'Parachute': '🪂',
      'Pêche': '🎣',
      'Golf': '⛳',
      'Spa': '💆',
      'Culture': '🏛️',
      'Gastronomie': '🍽️'
    };
    return emojiMap[category] || '🎯';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-500 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={location.heroImage}
            alt={`Que faire à ${location.name}`}
            fill
            className="object-cover opacity-20"
            sizes="100vw"
            priority
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/90 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span className="mx-2">/</span>
            <Link href="/que-faire-ile-maurice" className="hover:text-white transition-colors">Que faire à Maurice</Link>
            <span className="mx-2">/</span>
            <span className="font-medium">{location.name}</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {location.title}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mb-8">
            {location.intro}
          </p>

          {/* Highlights */}
          <div className="grid md:grid-cols-2 gap-4">
            {location.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <span className="text-2xl flex-shrink-0">✓</span>
                <span className="text-white/90">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 text-lg leading-relaxed">
            {location.description}
          </p>
        </div>

        {/* Best Months */}
        {location.bestMonths.length > 0 && (
          <div className="mt-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">📅</span>
              <h2 className="text-2xl font-bold text-gray-900">Meilleures périodes</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {location.bestMonths.map((month) => (
                <Link
                  key={month}
                  href={`/maurice-en-${month}`}
                  className="inline-block bg-white text-blue-600 px-4 py-2 rounded-xl font-medium hover:shadow-md transition-all"
                >
                  {month.charAt(0).toUpperCase() + month.slice(1)}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Activities Section */}
      {activities.length > 0 && (
        <div className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Activités à {location.name}
            </h2>
            <p className="text-gray-600 mb-8">
              {activities.length} {activities.length === 1 ? 'activité trouvée' : 'activités trouvées'} dans cette zone
            </p>

            {/* Activities by Category */}
            {Object.entries(activitiesByCategory).map(([category, catActivities]) => (
              <div key={category} className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{getCategoryEmoji(category)}</span>
                  <h3 className="text-2xl font-bold text-gray-900">{category}</h3>
                  <span className="text-gray-500">({catActivities.length})</span>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {catActivities.slice(0, 6).map((activity) => (
                    <a
                      key={activity.id}
                      href={activity.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
                    >
                      <div className="relative h-48">
                        <Image
                          src={activity.image}
                          alt={activity.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        {activity.popular && (
                          <div className="absolute top-3 right-3 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                            ⭐ Populaire
                          </div>
                        )}
                      </div>
                      <div className="p-5">
                        <h4 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                          {activity.name}
                        </h4>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-1">
                            <span className="text-yellow-500">★</span>
                            <span className="font-bold text-gray-900">{activity.rating}</span>
                            <span className="text-gray-500 text-sm">({activity.reviewCount})</span>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-blue-600">
                              {activity.price}€
                            </div>
                            <div className="text-xs text-gray-500">par pers.</div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {activity.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                {catActivities.length > 6 && (
                  <div className="mt-6 text-center">
                    <Link
                      href={`/activites-ile-maurice?location=${encodeURIComponent(location.name)}&category=${encodeURIComponent(category)}`}
                      className="inline-block bg-blue-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-600 transition-all"
                    >
                      Voir les {catActivities.length - 6} autres {category} →
                    </Link>
                  </div>
                )}
              </div>
            ))}

            {/* CTA to all activities */}
            <div className="mt-12 text-center">
              <Link
                href={`/activites-ile-maurice?location=${encodeURIComponent(location.name)}`}
                className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all"
              >
                Voir toutes les activités à {location.name} →
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Tips Section */}
      {location.tips.length > 0 && (
        <div className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-4xl">💡</span>
              <h2 className="text-3xl font-bold text-gray-900">Conseils pratiques</h2>
            </div>

            <div className="space-y-4">
              {location.tips.map((tip, idx) => (
                <div key={idx} className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r-xl">
                  <p className="text-gray-800">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Nearby Locations */}
      {nearbyLocs.length > 0 && (
        <div className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Lieux à proximité
            </h2>
            <p className="text-gray-600 mb-8">
              Découvrez également ces destinations proches de {location.name}
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nearbyLocs.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/que-faire-${nearby.slug}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
                >
                  <div className="relative h-48">
                    <Image
                      src={nearby.heroImage}
                      alt={`Que faire à ${nearby.name}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {nearby.name}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {nearby.intro}
                    </p>
                    <div className="mt-4 text-blue-600 font-medium flex items-center gap-2">
                      <span>Découvrir</span>
                      <span>→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Final CTA */}
      <div className="bg-gradient-to-br from-blue-600 to-cyan-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à explorer {location.name} ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Réservez vos activités en ligne et profitez des meilleurs tarifs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`/activites-ile-maurice?location=${encodeURIComponent(location.name)}`}
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg"
            >
              Toutes les activités →
            </Link>
            <Link
              href="/quand-partir-ile-maurice"
              className="inline-block bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all border-2 border-white"
            >
              Quand partir ?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
