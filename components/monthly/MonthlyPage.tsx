import Link from 'next/link';
import Image from 'next/image';
import { MonthData } from '@/lib/monthly-data';

interface MonthlyPageProps {
  data: MonthData;
}

export default function MonthlyPage({ data }: MonthlyPageProps) {
  const getStatusIcon = (status: 'good' | 'warning' | 'bad') => {
    switch (status) {
      case 'good': return '✓';
      case 'warning': return '⚠';
      case 'bad': return '✗';
    }
  };

  const getSummaryEmoji = (key: string) => {
    const emojiMap: { [key: string]: string } = {
      'weather': '🌤️',
      'swimming': '🏊',
      'diving': '🤿',
      'hiking': '🥾',
      'crowds': '👥',
      'prices': '💰',
      'cyclone': '🌀'
    };
    return emojiMap[key] || '';
  };

  const getRegionEmoji = (regionName: string) => {
    if (regionName.includes('Ouest')) return '☀️';
    if (regionName.includes('Nord')) return '🌊';
    if (regionName.includes('Est')) return '💨';
    if (regionName.includes('Central')) return '🌫️';
    return '📍';
  };

  const getStatusColor = (status: 'good' | 'warning' | 'bad') => {
    switch (status) {
      case 'good': return 'bg-green-50 border-green-200 text-green-900';
      case 'warning': return 'bg-orange-50 border-orange-200 text-orange-900';
      case 'bad': return 'bg-red-50 border-red-200 text-red-900';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-400 text-white overflow-hidden">
        {/* Background Image */}
        {data.images.hero && (
          <div className="absolute inset-0 z-0">
            <Image
              src={data.images.hero}
              alt={`Île Maurice en ${data.month}`}
              fill
              className="object-cover opacity-20"
              sizes="100vw"
              priority
            />
          </div>
        )}

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/90 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span className="mx-2">/</span>
            <Link href="/quand-partir-ile-maurice" className="hover:text-white transition-colors">Quand partir</Link>
            <span className="mx-2">/</span>
            <span className="font-medium">{data.title}</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">{data.title}</h1>
          <p className="text-xl text-white/95 leading-relaxed mb-8">{data.hero.intro}</p>

          {/* Highlights */}
          <div className="grid sm:grid-cols-2 gap-4">
            {data.hero.highlights.map((highlight, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <span className="text-white/90">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Summary Table */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{data.month} à Maurice en résumé</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(data.summary).map(([key, item]) => (
              <div key={key} className={`rounded-xl p-4 border-2 transition-all ${getStatusColor(item.status)}`}>
                <div className="flex items-start gap-3">
                  <div className="flex flex-col items-center gap-1 flex-shrink-0">
                    <span className="text-2xl">{getSummaryEmoji(key)}</span>
                    <span className="text-xl">{getStatusIcon(item.status)}</span>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">{item.label}</div>
                    <div className="text-sm">{item.value}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Weather Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Quelle météo à l'Île Maurice en {data.month.toLowerCase()} ?</h2>

        {/* Weather Stats */}
        <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">🌡️</div>
              <div className="text-3xl font-bold text-blue-600">{data.weather.tempMax}</div>
              <div className="text-sm text-gray-600 mt-1">Température max</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🌡️</div>
              <div className="text-3xl font-bold text-blue-600">{data.weather.tempMin}</div>
              <div className="text-sm text-gray-600 mt-1">Température min</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🌊</div>
              <div className="text-3xl font-bold text-cyan-600">{data.weather.water}</div>
              <div className="text-sm text-gray-600 mt-1">Eau de mer</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">💧</div>
              <div className="text-3xl font-bold text-blue-500">{data.weather.rainfall}</div>
              <div className="text-sm text-gray-600 mt-1">Précipitations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">☀️</div>
              <div className="text-3xl font-bold text-yellow-500">{data.weather.sunHours}</div>
              <div className="text-sm text-gray-600 mt-1">Ensoleillement</div>
            </div>
          </div>
        </div>

        {/* Weather Image */}
        {data.images.weather && (
          <div className="mb-8">
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={data.images.weather}
                alt={`Météo à l'Île Maurice en ${data.month}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          </div>
        )}

        {/* Regions */}
        <div className="space-y-4">
          {data.weather.regions.map((region, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">{getRegionEmoji(region.name)}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{region.name}</h3>
                  <p className="text-gray-600 text-sm">{region.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Opinion Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-8 h-8 ${i < data.opinion.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{data.opinion.title}</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <span className="text-xl">✓</span> Les points positifs
                </h3>
                <ul className="space-y-2">
                  {data.opinion.pros.map((pro, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex gap-2">
                      <span className="text-green-600 flex-shrink-0">•</span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="text-xl">✗</span> Les points négatifs
                </h3>
                <ul className="space-y-2">
                  {data.opinion.cons.map((con, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex gap-2">
                      <span className="text-red-600 flex-shrink-0">•</span>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-5 border-l-4 border-blue-500">
              <div className="font-semibold text-blue-900 mb-2">Notre conseil</div>
              <p className="text-blue-800 text-sm">{data.opinion.advice}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Budget Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Affluence et budget pour {data.month.toLowerCase()}</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              ✈️ Vols
            </h3>
            <div className="text-2xl font-bold text-blue-600 mb-2">{data.budget.flights.range}</div>
            <p className="text-sm text-gray-600">{data.budget.flights.tips}</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              🏨 Hébergement
            </h3>
            <div className="text-2xl font-bold text-blue-600 mb-2">{data.budget.accommodation.range}</div>
            <p className="text-sm text-gray-600">{data.budget.accommodation.tips}</p>
          </div>
        </div>

        <div className="mt-6 bg-amber-50 rounded-xl p-6 border border-amber-200">
          <p className="text-amber-900 text-sm">{data.budget.crowds}</p>
        </div>
      </div>

      {/* Activities Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Que faire à l'Île Maurice en {data.month.toLowerCase()} ?</h2>

          {/* Activities Image */}
          {data.images.activities && (
            <div className="mb-8">
              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={data.images.activities}
                  alt={`Activités à l'Île Maurice en ${data.month}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            {data.activities.map((activity, idx) => (
              <Link
                key={idx}
                href={activity.link}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-blue-300 transition-all group"
              >
                <div className="flex gap-4">
                  <div className="text-4xl flex-shrink-0">{activity.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {activity.title}
                    </h3>
                    <p className="text-sm text-gray-600">{activity.why}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Accommodation Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Où loger à l'Île Maurice en {data.month.toLowerCase()} ?</h2>

        <div className="space-y-6">
          {data.accommodation.map((zone, idx) => (
            <div key={idx} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200 p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900">{zone.zone}</h3>
                <span className="text-blue-600 font-semibold">{zone.priceRange}</span>
              </div>
              <p className="text-gray-700 text-sm">{zone.why}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tips Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Conseils pratiques pour {data.month.toLowerCase()}</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Que mettre dans sa valise</h3>
              <ul className="space-y-2">
                {data.tips.packing.map((item, idx) => (
                  <li key={idx} className="text-sm text-gray-700 flex gap-2">
                    <span className="text-blue-600 flex-shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Santé et précautions</h3>
              <ul className="space-y-2">
                {data.tips.health.map((item, idx) => (
                  <li key={idx} className="text-sm text-gray-700 flex gap-2">
                    <span className="text-blue-600 flex-shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Événements et jours fériés</h3>
              <ul className="space-y-2">
                {data.tips.events.map((item, idx) => (
                  <li key={idx} className="text-sm text-gray-700 flex gap-2">
                    <span className="text-blue-600 flex-shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Questions fréquentes sur {data.month.toLowerCase()} à Maurice</h2>

        <div className="space-y-4">
          {data.faq.map((item, idx) => (
            <details key={idx} className="bg-white rounded-xl border border-gray-200 p-6 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                <span>{item.question}</span>
                <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>

      {/* Verdict Section */}
      <div className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Notre verdict final : faut-il partir en {data.month.toLowerCase()} ?</h2>
          <p className="text-xl text-white/95 mb-8">{data.verdict.summary}</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-xl">✓</span> Partez en {data.month.toLowerCase()} si :
              </h3>
              <ul className="space-y-2">
                {data.verdict.bestFor.map((item, idx) => (
                  <li key={idx} className="text-white/90 text-sm flex gap-2">
                    <span className="flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-xl">✗</span> Privilégiez une autre période si :
              </h3>
              <ul className="space-y-2">
                {data.verdict.avoidIf.map((item, idx) => (
                  <li key={idx} className="text-white/90 text-sm flex gap-2">
                    <span className="flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/activites-ile-maurice"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Toutes nos activités →
            </Link>
            <Link
              href="/quand-partir-ile-maurice"
              className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors border border-white/30"
            >
              Voir tous les mois →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
