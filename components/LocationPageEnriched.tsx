import Link from 'next/link';
import Image from 'next/image';
import { LocationDataEnriched, getNearbyLocations } from '@/lib/locations-data-enriched';
import { filterActivities, getAllActivities } from '@/lib/activities';
import { Activity } from '@/lib/types';

interface LocationPageEnrichedProps {
  location: LocationDataEnriched;
}

export default function LocationPageEnriched({ location }: LocationPageEnrichedProps) {
  // Get activities for this location
  let activities = filterActivities({ location: location.name });

  // If less than 6 activities, include nearby locations
  const nearbyActivities: Activity[] = [];
  if (activities.length < 6 && location.nearbyLocations.length > 0) {
    const nearbyLocs = getNearbyLocations(location.slug);
    nearbyLocs.forEach(nearby => {
      const acts = filterActivities({ location: nearby.name });
      nearbyActivities.push(...acts);
    });
  }

  const allActivities = [...activities, ...nearbyActivities];
  const showingNearby = nearbyActivities.length > 0;

  // Group activities by category
  const activitiesByCategory = allActivities.reduce((acc, activity) => {
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
        <div className="absolute inset-0 z-0">
          <Image
            src={location.heroImage}
            alt={`Que faire à ${location.name} - Maurice`}
            fill
            className="object-cover opacity-20"
            sizes="100vw"
            priority
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/90 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span className="mx-2">/</span>
            <Link href="/que-faire-ile-maurice" className="hover:text-white transition-colors">Que faire à Maurice</Link>
            <span className="mx-2">/</span>
            <span className="font-medium">{location.name}</span>
          </nav>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Que faire à {location.name} ?
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-8">
            {location.intro}
          </p>

          {/* Key highlights */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {location.highlights.slice(0, 6).map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <span className="text-2xl flex-shrink-0">✓</span>
                <span className="text-white/90">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Info Bar */}
      <div className="bg-gray-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {location.distanceFromAirport && (
              <div className="flex items-center gap-2">
                <span>✈️</span>
                <span>{location.distanceFromAirport} de l'aéroport</span>
              </div>
            )}
            {location.bestMonths.length > 0 && (
              <div className="flex items-center gap-2">
                <span>📅</span>
                <span>Meilleurs mois : {location.bestMonths.slice(0, 3).map(m => m.charAt(0).toUpperCase() + m.slice(1)).join(', ')}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <span>🎯</span>
              <span>{allActivities.length} activités disponibles</span>
            </div>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-blue-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">📋 Vue d'ensemble</h2>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="#que-faire" className="text-blue-600 hover:underline">Que faire</a>
            <span className="text-gray-400">•</span>
            <a href="#hebergement" className="text-blue-600 hover:underline">Où loger</a>
            <span className="text-gray-400">•</span>
            <a href="#restaurants" className="text-blue-600 hover:underline">Où manger</a>
            <span className="text-gray-400">•</span>
            <a href="#plages" className="text-blue-600 hover:underline">Plages</a>
            <span className="text-gray-400">•</span>
            <a href="#transport" className="text-blue-600 hover:underline">Transport</a>
            <span className="text-gray-400">•</span>
            <a href="#itineraires" className="text-blue-600 hover:underline">Itinéraires</a>
            <span className="text-gray-400">•</span>
            <a href="#budget" className="text-blue-600 hover:underline">Budget</a>
            <span className="text-gray-400">•</span>
            <a href="#conseils" className="text-blue-600 hover:underline">Conseils</a>
          </div>
        </div>
      </div>

      {/* Introduction détaillée */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 text-lg leading-relaxed">
            {location.description}
          </p>
        </div>
      </div>

      {/* QUE FAIRE - Activities Section */}
      <div id="que-faire" className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Que faire à {location.name} ?
            </h2>
            <p className="text-xl text-gray-600">
              {allActivities.length} {allActivities.length === 1 ? 'activité' : 'activités'} et excursions
              {showingNearby && ' (incluant les lieux à proximité)'}
            </p>
          </div>

          {showingNearby && (
            <div className="mb-8 bg-blue-100 border-l-4 border-blue-500 p-4 rounded-r-xl">
              <p className="text-blue-900">
                ℹ️ <strong>Note :</strong> Les activités des lieux proches ({location.nearbyLocations.map(getNearbyLocations).flat().map(l => l.name).join(', ')}) sont incluses car situées à quelques minutes de {location.name}.
              </p>
            </div>
          )}

          {/* Activities by Category */}
          {Object.entries(activitiesByCategory).map(([category, catActivities]) => (
            <div key={category} className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-4xl">{getCategoryEmoji(category)}</span>
                <h3 className="text-3xl font-bold text-gray-900">{category}</h3>
                <span className="text-gray-500 text-lg">({catActivities.length})</span>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {catActivities.slice(0, 6).map((activity) => (
                  <a
                    key={activity.id}
                    href={activity.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all group"
                  >
                    <div className="relative h-48">
                      <Image
                        src={activity.image}
                        alt={activity.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {activity.popular && (
                        <div className="absolute top-3 right-3 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
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
                          <div className="text-xl font-bold text-blue-600">
                            {activity.price}€
                          </div>
                          <div className="text-xs text-gray-500">par pers.</div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                        {activity.description}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span>📍</span>
                        <span>{activity.locations.join(' • ')}</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {catActivities.length > 6 && (
                <div className="mt-6 text-center">
                  <Link
                    href={`/activites-ile-maurice?location=${encodeURIComponent(location.name)}&category=${encodeURIComponent(category)}`}
                    className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all"
                  >
                    Voir les {catActivities.length - 6} autres {category} →
                  </Link>
                </div>
              )}
            </div>
          ))}

          {/* CTA all activities */}
          <div className="mt-12 text-center bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Réservez vos activités en ligne
            </h3>
            <p className="text-gray-600 mb-6">
              Meilleurs tarifs garantis • Annulation gratuite • Confirmation immédiate
            </p>
            <Link
              href={`/activites-ile-maurice?location=${encodeURIComponent(location.name)}`}
              className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl transition-all"
            >
              Voir toutes les activités à {location.name} ({allActivities.length}) →
            </Link>
          </div>
        </div>
      </div>

      {/* HÉBERGEMENT */}
      <div id="hebergement" className="py-16 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl">🏨</span>
            <div>
              <h2 className="text-4xl font-bold text-gray-900">Où loger à {location.name} ?</h2>
              <p className="text-gray-600 mt-2">{location.accommodation.overview}</p>
            </div>
          </div>

          {/* Zones d'hébergement */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {location.accommodation.zones.map((zone, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{zone.name}</h3>
                <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {zone.priceRange}
                </div>
                <p className="text-gray-700 mb-4">{zone.description}</p>
                <div className="bg-gray-50 rounded-xl p-4 mb-4">
                  <div className="font-semibold text-gray-900 mb-2">✅ Idéal pour :</div>
                  <p className="text-gray-700 text-sm">{zone.bestFor}</p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="font-semibold text-green-700 mb-2">👍 Avantages</div>
                    <ul className="space-y-1">
                      {zone.pros.map((pro, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                          <span className="text-green-600">•</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold text-orange-700 mb-2">👎 Inconvénients</div>
                    <ul className="space-y-1">
                      {zone.cons.map((con, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                          <span className="text-orange-600">•</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Booking tips */}
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>💡</span>
              <span>Conseils réservation</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {location.accommodation.bookingTips.map((tip, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-yellow-600 flex-shrink-0">▸</span>
                  <span className="text-gray-800">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* RESTAURATION */}
      <div id="restaurants" className="bg-gray-50 py-16 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl">🍽️</span>
            <div>
              <h2 className="text-4xl font-bold text-gray-900">Où manger à {location.name} ?</h2>
              <p className="text-gray-600 mt-2">{location.dining.overview}</p>
            </div>
          </div>

          {/* Restaurants recommandés */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {location.dining.restaurants.map((resto, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{resto.name}</h3>
                  <span className="text-2xl">🍴</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-500">Type:</span>
                    <span className="text-sm text-gray-900">{resto.type}</span>
                  </div>
                  <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                    {resto.priceRange}
                  </div>
                  <p className="text-sm text-gray-700 mt-3">{resto.specialty}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Spécialités locales */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span>🇲🇺</span>
              <span>Spécialités locales à goûter</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {location.dining.localSpecialties.map((specialty, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white rounded-xl p-4">
                  <span className="text-xl">•</span>
                  <span className="text-gray-800">{specialty}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Budget meals vs fine dining */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 border-2 border-green-200">
              <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span>💰</span>
                <span>Budget serré</span>
              </h4>
              <p className="text-gray-700">{location.dining.budgetMeals}</p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-purple-200">
              <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span>⭐</span>
                <span>Gastronomie</span>
              </h4>
              <p className="text-gray-700">{location.dining.fineDining}</p>
            </div>
          </div>
        </div>
      </div>

      {/* PLAGES (if applicable) */}
      {location.beaches && (
        <div id="plages" className="py-16 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-5xl">🏖️</span>
              <div>
                <h2 className="text-4xl font-bold text-gray-900">Plages à {location.name}</h2>
                <p className="text-gray-600 mt-2">{location.beaches.overview}</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {location.beaches.list.map((beach, idx) => (
                <div key={idx} className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-blue-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{beach.name}</h3>
                  <p className="text-gray-700 mb-4">{beach.description}</p>

                  <div className="space-y-4">
                    <div>
                      <div className="font-semibold text-gray-900 mb-2">✨ Idéal pour :</div>
                      <div className="flex flex-wrap gap-2">
                        {beach.bestFor.map((item, i) => (
                          <span key={i} className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="font-semibold text-gray-900 mb-2">🏪 Équipements :</div>
                      <div className="flex flex-wrap gap-2">
                        {beach.facilities.map((facility, i) => (
                          <span key={i} className="text-sm text-gray-700">• {facility}</span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-4">
                      <div className="font-semibold text-gray-900 mb-1">📍 Accès :</div>
                      <p className="text-sm text-gray-700">{beach.access}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TRANSPORT */}
      <div id="transport" className="bg-gray-50 py-16 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl">🚗</span>
            <div>
              <h2 className="text-4xl font-bold text-gray-900">Comment se rendre et se déplacer ?</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🛬 Comment y aller</h3>
              <p className="text-gray-700">{location.transport.howToGetThere}</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🚶 Se déplacer sur place</h3>
              <p className="text-gray-700">{location.transport.gettingAround}</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🚙 Location de voiture</h3>
              <p className="text-gray-700">{location.transport.carRental}</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🚌 Transports publics</h3>
              <p className="text-gray-700">{location.transport.publicTransport}</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🚕 Taxis</h3>
              <p className="text-gray-700">{location.transport.taxi}</p>
            </div>

            {location.transport.parking && (
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🅿️ Parking</h3>
                <p className="text-gray-700">{location.transport.parking}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ITINÉRAIRES */}
      <div id="itineraires" className="py-16 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-5xl">📅</span>
            <div>
              <h2 className="text-4xl font-bold text-gray-900">Itinéraires suggérés</h2>
              <p className="text-gray-600 mt-2">Planifiez votre séjour avec nos programmes clé-en-main</p>
            </div>
          </div>

          <div className="space-y-8">
            {location.itineraries.map((itinerary, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 shadow-lg border border-purple-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-purple-600 text-white px-4 py-2 rounded-xl font-bold">
                    {itinerary.duration}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{itinerary.title}</h3>
                </div>

                <div className="space-y-6">
                  {itinerary.days.map((day) => (
                    <div key={day.day} className="bg-white rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-lg font-bold text-lg">
                          Jour {day.day}
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <div className="font-semibold text-gray-900 mb-2">🌅 Matin</div>
                          <p className="text-gray-700 pl-6">{day.morning}</p>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 mb-2">☀️ Après-midi</div>
                          <p className="text-gray-700 pl-6">{day.afternoon}</p>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 mb-2">🌙 Soir</div>
                          <p className="text-gray-700 pl-6">{day.evening}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BUDGET */}
      <div id="budget" className="bg-gradient-to-br from-green-50 to-emerald-50 py-16 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl">💰</span>
            <div>
              <h2 className="text-4xl font-bold text-gray-900">Budget à prévoir</h2>
              <p className="text-gray-600 mt-2">Estimations pour un séjour à {location.name}</p>
            </div>
          </div>

          {/* Budget journalier */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6 text-center shadow-md">
              <div className="text-3xl mb-3">🎒</div>
              <div className="text-sm text-gray-600 mb-2">Budget routard</div>
              <div className="text-3xl font-bold text-green-600">
                {typeof location.budget.daily.budget === 'string'
                  ? location.budget.daily.budget
                  : (location.budget.daily.budget as { total?: string })?.total || 'N/A'}
              </div>
              <div className="text-xs text-gray-500 mt-2">par personne/jour</div>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-md border-2 border-blue-300">
              <div className="text-3xl mb-3">🏨</div>
              <div className="text-sm text-gray-600 mb-2">Confort</div>
              <div className="text-3xl font-bold text-blue-600">
                {typeof location.budget.daily.midRange === 'string'
                  ? location.budget.daily.midRange
                  : (location.budget.daily.midRange as { total?: string })?.total || 'N/A'}
              </div>
              <div className="text-xs text-gray-500 mt-2">par personne/jour</div>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-md">
              <div className="text-3xl mb-3">⭐</div>
              <div className="text-sm text-gray-600 mb-2">Luxe</div>
              <div className="text-3xl font-bold text-purple-600">
                {typeof location.budget.daily.luxury === 'string'
                  ? location.budget.daily.luxury
                  : (location.budget.daily.luxury as { total?: string })?.total || 'N/A'}
              </div>
              <div className="text-xs text-gray-500 mt-2">par personne/jour</div>
            </div>
          </div>

          {/* Breakdown */}
          {location.budget.breakdown && (
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Détail du budget</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-700 font-medium">🏨 Hébergement</span>
                  <span className="text-gray-900 font-bold">{location.budget.breakdown.accommodation}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-700 font-medium">🍽️ Nourriture</span>
                  <span className="text-gray-900 font-bold">{location.budget.breakdown.food}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-700 font-medium">🎯 Activités</span>
                  <span className="text-gray-900 font-bold">{location.budget.breakdown.activities}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">🚗 Transport</span>
                  <span className="text-gray-900 font-bold">{location.budget.breakdown.transport}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* INFORMATIONS PRATIQUES */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl">ℹ️</span>
            <div>
              <h2 className="text-4xl font-bold text-gray-900">Infos pratiques</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span>🏧</span>
                <span>Distributeurs</span>
              </h4>
              <p className="text-sm text-gray-700">{location.practical.atms || (location.practical as { services?: { atm?: string } }).services?.atm || 'Non disponible'}</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span>🛒</span>
                <span>Supermarchés</span>
              </h4>
              <p className="text-sm text-gray-700">{location.practical.supermarkets || 'Informations non disponibles'}</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span>💊</span>
                <span>Pharmacie</span>
              </h4>
              <p className="text-sm text-gray-700">{location.practical.pharmacy || (location.practical as { services?: { medical?: string } }).services?.medical || 'Non disponible'}</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span>🏥</span>
                <span>Hôpital</span>
              </h4>
              <p className="text-sm text-gray-700">{location.practical.hospital || (location.practical as { services?: { medical?: string } }).services?.medical || 'Non disponible'}</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span>📶</span>
                <span>WiFi / Internet</span>
              </h4>
              <p className="text-sm text-gray-700">{location.practical.wifi || (location.practical as { services?: { wifi?: string } }).services?.wifi || 'Non disponible'}</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span>🔌</span>
                <span>Électricité</span>
              </h4>
              <p className="text-sm text-gray-700">{location.practical.electricity || '220V, prises anglaises 3 broches. Adaptateur nécessaire.'}</p>
            </div>
          </div>
        </div>
      </div>

      {/* SÉCURITÉ */}
      {location.safety && (
        <div className="bg-red-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-5xl">🛡️</span>
              <div>
                <h2 className="text-4xl font-bold text-gray-900">Sécurité</h2>
                <p className="text-gray-600 mt-2">{location.safety.overall || 'Zone globalement sûre. Vigilance normale recommandée.'}</p>
              </div>
            </div>

            {location.safety.tips && location.safety.tips.length > 0 && (
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">⚠️ Conseils de sécurité</h3>
                <div className="space-y-3">
                  {location.safety.tips.map((tip, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                      <span className="text-red-500 flex-shrink-0 font-bold">▸</span>
                      <span className="text-gray-800">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-red-100 border-l-4 border-red-500 rounded-r-xl p-6">
              <h4 className="font-bold text-red-900 mb-2">🚨 Numéros d'urgence</h4>
              <p className="text-red-800">{location.safety.emergency || 'Police : 112. SAMU : 114. Pompiers : 115.'}</p>
            </div>
          </div>
        </div>
      )}

      {/* CONSEILS FINAUX */}
      <div id="conseils" className="py-16 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl">💡</span>
            <div>
              <h2 className="text-4xl font-bold text-gray-900">Nos meilleurs conseils</h2>
              <p className="text-gray-600 mt-2">Les astuces indispensables pour réussir votre séjour</p>
            </div>
          </div>

          <div className="space-y-4">
            {location.tips.map((tip, idx) => (
              <div key={idx} className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-5 border-l-4 border-yellow-400">
                <p className="text-gray-800">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CULTURE (if applicable) */}
      {location.culture && (
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-5xl">🎭</span>
              <div>
                <h2 className="text-4xl font-bold text-gray-900">Culture locale</h2>
                <p className="text-gray-600 mt-2">{location.culture.overview}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🎉 Événements</h3>
                <ul className="space-y-2">
                  {location.culture.events.map((event, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-purple-600">•</span>
                      <span className="text-gray-800">{event}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🙏 Savoir-vivre</h3>
                <ul className="space-y-2">
                  {location.culture.etiquette.map((rule, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-purple-600">•</span>
                      <span className="text-gray-800">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* LIEUX À PROXIMITÉ */}
      {getNearbyLocations(location.slug).length > 0 && (
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Que faire dans les environs ?
            </h2>
            <p className="text-gray-600 mb-8">
              Découvrez également ces destinations proches de {location.name}
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getNearbyLocations(location.slug).map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/que-faire-${nearby.slug}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all group"
                >
                  <div className="relative h-48">
                    <Image
                      src={nearby.heroImage}
                      alt={`Que faire à ${nearby.name}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {nearby.name}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {nearby.intro}
                    </p>
                    <div className="text-blue-600 font-medium flex items-center gap-2">
                      <span>Découvrir que faire</span>
                      <span>→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* FINAL CTA */}
      <div className="bg-gradient-to-br from-blue-600 to-cyan-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Prêt à découvrir {location.name} ?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10">
            Réservez vos activités et organisez votre séjour de rêve
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href={`/activites-ile-maurice?location=${encodeURIComponent(location.name)}`}
              className="inline-block bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-2xl"
            >
              Réserver mes activités ({allActivities.length})
            </Link>
            <Link
              href="/quand-partir-ile-maurice"
              className="inline-block bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/20 transition-all border-2 border-white"
            >
              Quand partir ?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
