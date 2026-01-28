import Image from 'next/image';
import Link from 'next/link';
import { ActivityPageProps, extractActivityEssentials, requiresSwimming } from '@/lib/activity-pages';
import { decodeHtmlEntities } from '@/lib/utils';
import { generateIndividualIntro, generateWhyChoose, generateFAQ, generatePricingSection, generateReviewsSection } from '@/lib/seo-content-generator';
import { getCategoryTheme } from '@/lib/activity-colors';
import Card from '@/components/ui/Card';
import RichText from '@/components/ui/RichText';
import WeatherCard from '@/components/ui/WeatherCard';
import QuickNav from '@/components/ui/QuickNav';
import StickyBookingButton from '@/components/activities/StickyBookingButton';
import ActivityInternalLinks from '@/components/activities/ActivityInternalLinks';

/**
 * Composant IndividualActivityPage
 * Affiche une page détaillée pour une activité unique
 * Structure: Titre, Intro, Essentiel, Description, Pour qui, Déroulement, Infos pratiques, CTA
 */
export default function IndividualActivityPage({ activity, relatedActivities, seo }: ActivityPageProps) {
  const essentials = extractActivityEssentials(activity);
  const { category, locations, enriched, details } = activity;
  const mainLocation = locations[0];
  const theme = getCategoryTheme(category);

  // Sections pour le menu de navigation rapide
  const navSections = [
    { id: 'presentation', label: 'Présentation', icon: '📋' },
    { id: 'pourquoi', label: 'Pourquoi choisir', icon: '⭐' },
    { id: 'pour-qui', label: 'Pour qui', icon: '👥' },
    ...(enriched?.program && enriched.program.length > 0 ? [{ id: 'deroulement', label: 'Déroulement', icon: '📍' }] : []),
    { id: 'tarifs', label: 'Tarifs', icon: '💰' },
    { id: 'avis', label: 'Avis', icon: '💬' },
    { id: 'infos', label: 'Infos pratiques', icon: '📌' },
    { id: 'faq', label: 'Questions', icon: '❓' },
  ];

  return (
    <>
      {/* Hero Section avec gradient thématique */}
      <div className="relative py-16 md:py-24" style={{ background: theme.gradientCSS }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <nav className="text-sm text-white/90 mb-6">
              <Link href="/" className="hover:text-white transition">Accueil</Link>
              <span className="mx-2">›</span>
              <Link href="/activites-ile-maurice" className="hover:text-white transition">Activités</Link>
              <span className="mx-2">›</span>
              <Link href={`/${category.toLowerCase().replace(/\s+/g, '-')}-ile-maurice`} className="hover:text-white transition">
                {category}
              </Link>
              <span className="mx-2">›</span>
              <span className="text-white font-medium">{mainLocation}</span>
            </nav>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              {activity.popular && (
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/95 backdrop-blur-sm rounded-full shadow-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" style={{ color: theme.badgeColor }}>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-semibold" style={{ color: theme.badgeColor }}>Populaire</span>
                </div>
              )}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/95 backdrop-blur-sm rounded-full shadow-lg">
                <span className="font-semibold" style={{ color: theme.badgeColor }}>{category}</span>
              </div>
            </div>

            {/* Titre H1 */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
              {decodeHtmlEntities(seo.h1)}
            </h1>

            {/* Stats rapides */}
            <div className="flex flex-wrap items-center gap-6 text-white/95">
              {activity.rating && activity.reviewCount > 0 && (
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-yellow-300 text-xl">★</span>
                  <span className="font-semibold">{activity.rating}/5</span>
                  <span className="text-white/80">({activity.reviewCount} avis)</span>
                </div>
              )}
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span>{locations.join(' • ')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu de navigation rapide */}
      <QuickNav sections={navSections} accentColor={theme.badgeColor} />

      {/* L'essentiel à savoir - Bloc en évidence */}
      <section id="presentation" className="py-8 md:py-12 bg-white relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-2xl border-2" style={{ borderColor: theme.badgeColor + '40' }}>
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: theme.gradientCSS }}>
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  L'essentiel à savoir
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-xs text-gray-600 uppercase tracking-wide mb-2 font-medium">Durée</div>
                  <div className="font-bold text-gray-900 text-xl">{essentials.duration}</div>
                </div>
                <div className="text-center p-4 rounded-xl" style={{ backgroundColor: theme.badgeColor + '10' }}>
                  <div className="text-xs text-gray-600 uppercase tracking-wide mb-2 font-medium">Prix</div>
                  <div className="font-bold text-2xl" style={{ color: theme.badgeColor }}>{essentials.price}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-xs text-gray-600 uppercase tracking-wide mb-2 font-medium">Difficulté</div>
                  <div className="font-bold text-gray-900 text-xl">{essentials.difficulty}</div>
                </div>
                {essentials.minAge && (
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-xs text-gray-600 uppercase tracking-wide mb-2 font-medium">Âge min</div>
                    <div className="font-bold text-gray-900 text-xl">{essentials.minAge} ans</div>
                  </div>
                )}
              </div>

              {/* Requirements spéciaux */}
              {requiresSwimming(activity) && (
                <div className="mb-6 flex justify-center">
                  <div className="inline-flex items-center gap-2 px-5 py-3 bg-blue-50 border-2 border-blue-200 rounded-xl text-sm font-medium text-blue-900">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Savoir nager requis
                  </div>
                </div>
              )}

              {/* CTA principal */}
              <a
                href={activity.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105 text-lg"
                style={{ background: theme.gradientCSS }}
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Voir les disponibilités et réserver
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </Card>
        </div>
      </section>

      {/* Introduction + Sidebar (Image + Météo) */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Colonne principale : Introduction SEO */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
                <RichText content={generateIndividualIntro(activity)} />
              </div>
            </div>

            {/* Sidebar : Image + Météo */}
            <div className="lg:col-span-1 space-y-8">
              {/* Image de l'activité */}
              <div className="relative h-64 lg:h-80 rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src={activity.image}
                  alt={decodeHtmlEntities(activity.name)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                {activity.rating && activity.reviewCount > 0 && (
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-yellow-500 text-xl">★</span>
                        <span className="font-bold text-gray-900 text-lg">{activity.rating}/5</span>
                        <span className="text-sm text-gray-600">({activity.reviewCount} avis)</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Météo */}
              <div>
                <WeatherCard location={mainLocation} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi choisir cette activité - SEO */}
      <section id="pourquoi" className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RichText content={generateWhyChoose(activity)} />
        </div>
      </section>

      {/* Pour qui ? */}
      <section id="pour-qui" className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Pour qui est cette activité ?
          </h2>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-lg mb-6">
                Cette sortie {category.toLowerCase()} s'adresse à :
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {details.physicalConditions?.min && (
                  <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: theme.badgeColor + '20' }}>
                      <svg className="w-6 h-6" style={{ color: theme.badgeColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Niveau physique</div>
                      <div className="text-gray-600">
                        {details.physicalConditions.min.name.toLowerCase()}
                        {details.physicalConditions.max && details.physicalConditions.max.level !== details.physicalConditions.min.level && (
                          <> à {details.physicalConditions.max.name.toLowerCase()}</>
                        )}
                      </div>
                    </div>
                  </div>
                )}
                {enriched?.requirements?.minAge && (
                  <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: theme.badgeColor + '20' }}>
                      <svg className="w-6 h-6" style={{ color: theme.badgeColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Âge minimum</div>
                      <div className="text-gray-600">{enriched.requirements.minAge} ans</div>
                    </div>
                  </div>
                )}
                {enriched?.requirements?.maxWeight && (
                  <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: theme.badgeColor + '20' }}>
                      <svg className="w-6 h-6" style={{ color: theme.badgeColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Poids maximum</div>
                      <div className="text-gray-600">{enriched.requirements.maxWeight} kg</div>
                    </div>
                  </div>
                )}
                {requiresSwimming(activity) && (
                  <div className="flex gap-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-blue-200">
                      <svg className="w-6 h-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-blue-900 mb-1">Savoir nager</div>
                      <div className="text-blue-700">Requis pour cette activité</div>
                    </div>
                  </div>
                )}
              </div>
              {!details.accessibleToDisabled && (
                <div className="mt-6 p-4 bg-orange-50 border border-orange-200 rounded-xl">
                  <div className="flex gap-3">
                    <svg className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <p className="text-sm text-orange-800">
                      Cette activité n'est pas adaptée aux personnes à mobilité réduite.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Déroulement / Programme */}
      {enriched?.program && Array.isArray(enriched.program) && enriched.program.length > 0 && (
        <section id="deroulement" className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Déroulement de l'activité
            </h2>
            <div className="space-y-6">
              {enriched.program.map((step, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg" style={{ background: theme.gradientCSS }}>
                    {step.step}
                  </div>
                  <div className="flex-1 pt-3">
                    <p className="text-lg text-gray-700 leading-relaxed">{decodeHtmlEntities(step.description)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tarifs et informations pratiques */}
      <section id="tarifs" className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-xl border-2" style={{ borderColor: theme.badgeColor + '30' }}>
            <RichText content={generatePricingSection(activity)} />
          </div>
        </div>
      </section>

      {/* Avis des participants */}
      <section id="avis" className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200">
            <RichText content={generateReviewsSection(activity)} />
          </div>
        </div>
      </section>

      {/* Informations pratiques */}
      <section id="infos" className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Informations pratiques
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Point de rendez-vous */}
            {activity.location.meetingPoint && (
              <Card className="bg-white">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: theme.badgeColor + '20' }}>
                    <svg className="w-6 h-6" style={{ color: theme.badgeColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-lg mb-2">Point de rendez-vous</h3>
                    <p className="text-gray-600">{activity.location.meetingPoint}</p>
                  </div>
                </div>
              </Card>
            )}

            {/* Organisateur */}
            <Card className="bg-white">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-secondary-100">
                  <svg className="w-6 h-6 text-secondary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Organisateur</h3>
                  <p className="text-gray-600">{details.organizedBy}</p>
                </div>
              </div>
            </Card>

            {/* Langues parlées */}
            {essentials.languages.length > 0 && (
              <Card className="bg-white">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-blue-100">
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-lg mb-2">Langues parlées</h3>
                    <p className="text-gray-600">{essentials.languages.join(', ')}</p>
                  </div>
                </div>
              </Card>
            )}

            {/* Accessibilité */}
            <Card className="bg-white">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-orange-100">
                  <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Accessibilité</h3>
                  <p className="text-gray-600">
                    {details.accessibleToDisabled
                      ? 'Accessible aux personnes à mobilité réduite'
                      : 'Non accessible aux personnes à mobilité réduite'}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ - SEO */}
      <section id="faq" className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200">
            <RichText content={generateFAQ(category, mainLocation)} />
          </div>
        </div>
      </section>

      {/* Maillage interne - Activités similaires et pages mères */}
      <ActivityInternalLinks
        currentCategory={category}
        currentLocation={mainLocation}
        currentActivityIds={[activity.id]}
      />

      {/* Bouton sticky de réservation */}
      <StickyBookingButton
        label="Réserver maintenant"
        price={`${activity.price.toFixed(0)}€`}
        bookingUrl={activity.url}
      />
    </>
  );
}
