import Image from 'next/image';
import Link from 'next/link';
import { Activity } from '@/lib/types';
import { FusionPageProps, extractActivityEssentials, requiresSwimming } from '@/lib/activity-pages';
import { decodeHtmlEntities, truncate } from '@/lib/utils';
import { generateFusionIntro, generateWhatToExpect, generatePracticalAdvice, generateFAQ } from '@/lib/seo-content-generator';
import { getCategoryTheme } from '@/lib/activity-colors';
import Card from '@/components/ui/Card';
import RichText from '@/components/ui/RichText';
import WeatherCard from '@/components/ui/WeatherCard';
import QuickNav from '@/components/ui/QuickNav';
import StickyBookingButton from '@/components/activities/StickyBookingButton';

/**
 * Composant FusionActivityPage
 * Affiche une page fusion pour plusieurs activités similaires (même catégorie + même lieu)
 * Objectif: aider l'utilisateur à comparer et choisir la meilleure option pour lui
 */
export default function FusionActivityPage({ group, seo }: FusionPageProps) {
  const { activities, category, mainLocation } = group;

  // Statistiques du groupe
  const priceRange = {
    min: Math.min(...activities.map(a => a.price)),
    max: Math.max(...activities.map(a => a.price)),
  };
  const activitiesWithRating = activities.filter(a => a.rating !== null && a.rating > 0);
  const avgRating = activitiesWithRating.length > 0
    ? (activitiesWithRating.reduce((sum, a) => sum + (a.rating ?? 0), 0) / activitiesWithRating.length).toFixed(1)
    : '5.0';
  const totalReviews = activities.reduce((sum, a) => sum + a.reviewCount, 0);

  // Trier les activités par popularité (note + avis)
  const sortedActivities = [...activities].sort((a, b) => {
    const ratingA = a.rating || 0;
    const ratingB = b.rating || 0;
    const scoreA = ratingA * Math.log(a.reviewCount + 1);
    const scoreB = ratingB * Math.log(b.reviewCount + 1);
    return scoreB - scoreA;
  });

  const mostPopular = sortedActivities[0];
  const theme = getCategoryTheme(category);

  // Sections pour le menu de navigation rapide
  const navSections = [
    { id: 'presentation', label: 'Présentation', icon: '📋' },
    { id: 'options', label: 'Comparer', icon: '⚖️' },
    { id: 'attendre', label: 'À quoi s\'attendre', icon: '🎯' },
    { id: 'conseils', label: 'Conseils pratiques', icon: '💡' },
    { id: 'faq', label: 'Questions', icon: '❓' },
  ];

  return (
    <>
      <div id="top" />

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

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 px-5 py-2.5 bg-white/95 backdrop-blur-sm rounded-full shadow-lg">
              <svg className="w-5 h-5" style={{ color: theme.badgeColor }} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold" style={{ color: theme.badgeColor }}>
                {activities.length} options disponibles
              </span>
            </div>

            {/* Titre H1 */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
              {seo.h1}
            </h1>

            {/* Stats rapides */}
            <div className="flex flex-wrap items-center gap-6 text-white/95">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-yellow-300 text-xl">★</span>
                <span className="font-semibold">{avgRating}/5</span>
                <span className="text-white/80">({totalReviews} avis)</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                <span className="font-semibold">À partir de {priceRange.min.toFixed(0)}€</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span>{mainLocation}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu de navigation rapide */}
      <QuickNav sections={navSections} accentColor={theme.badgeColor} />

      {/* Introduction SEO riche + Météo */}
      <section id="presentation" className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Introduction */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                <RichText content={generateFusionIntro(group)} />
              </div>
            </div>

            {/* Météo */}
            <div className="lg:col-span-1">
              <WeatherCard location={mainLocation} />
            </div>
          </div>
        </div>
      </section>

      {/* Comparaison des activités */}
      <section className="py-12 md:py-16 bg-white" id="options">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comparez les {activities.length} options
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Chaque formule est unique. Trouvez celle qui correspond le mieux à votre niveau et vos attentes.
            </p>
          </div>

          <div className="space-y-8 mb-24">
            {sortedActivities.map((activity, index) => {
              const essentials = extractActivityEssentials(activity);
              const isPopular = activity.id === mostPopular.id;

              return (
                <Card key={activity.id} padding="none" className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <div className="grid md:grid-cols-[350px_1fr] gap-0">
                    {/* Image */}
                    <div className="relative h-72 md:h-full">
                      <Image
                        src={activity.image}
                        alt={decodeHtmlEntities(activity.name)}
                        fill
                        className="object-cover"
                        sizes="350px"
                      />
                      {isPopular && (
                        <div className="absolute top-4 left-4">
                          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-full shadow-lg">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            Le plus populaire
                          </div>
                        </div>
                      )}
                      {activity.rating && activity.reviewCount > 0 && (
                        <div className="absolute bottom-4 left-4">
                          <div className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                            <div className="flex items-center gap-2">
                              <span className="text-yellow-500 text-lg">★</span>
                              <span className="font-bold text-gray-900">{activity.rating}/5</span>
                              <span className="text-sm text-gray-600">({activity.reviewCount})</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Contenu */}
                    <div className="p-8">
                      {/* Titre */}
                      <div className="mb-6">
                        <div className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: theme.badgeColor }}>
                          Option {index + 1}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {decodeHtmlEntities(truncate(activity.name, 100))}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {decodeHtmlEntities(activity.description)}
                        </p>
                      </div>

                      {/* Infos essentielles en grille */}
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6 p-6 bg-gray-50 rounded-2xl">
                        <div>
                          <div className="text-xs text-gray-500 uppercase tracking-wide mb-1 font-medium">Durée</div>
                          <div className="font-bold text-gray-900 text-lg">{essentials.duration}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 uppercase tracking-wide mb-1 font-medium">Difficulté</div>
                          <div className="font-bold text-gray-900 text-lg">{essentials.difficulty}</div>
                        </div>
                        {essentials.minAge && (
                          <div>
                            <div className="text-xs text-gray-500 uppercase tracking-wide mb-1 font-medium">Âge min</div>
                            <div className="font-bold text-gray-900 text-lg">{essentials.minAge} ans</div>
                          </div>
                        )}
                        <div>
                          <div className="text-xs text-gray-500 uppercase tracking-wide mb-1 font-medium">Langues</div>
                          <div className="font-bold text-gray-900 text-sm truncate">{essentials.languages.join(', ')}</div>
                        </div>
                      </div>

                      {/* Requirements spéciaux */}
                      <div className="flex flex-wrap gap-3 mb-6">
                        {requiresSwimming(activity) && (
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm font-medium text-blue-800">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Savoir nager requis
                          </div>
                        )}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          {activity.details.organizedBy}
                        </div>
                      </div>

                      {/* Prix et CTA */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-gray-200">
                        <div>
                          <div className="text-sm text-gray-600 mb-1">À partir de</div>
                          <div className="text-4xl font-bold" style={{ color: theme.badgeColor }}>
                            {activity.price.toFixed(0)}€
                            <span className="text-lg font-normal text-gray-500">/pers</span>
                          </div>
                        </div>
                        <a
                          href={activity.url}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105"
                          style={{ background: theme.gradientCSS }}
                        >
                          Voir les disponibilités
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* À quoi s'attendre - SEO */}
      <section id="attendre" className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <RichText content={generateWhatToExpect(group)} />
          </div>
        </div>
      </section>

      {/* Conseils pratiques - SEO */}
      <section id="conseils" className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RichText content={generatePracticalAdvice(group)} />
        </div>
      </section>

      {/* FAQ - SEO */}
      <section id="faq" className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <RichText content={generateFAQ(category, mainLocation)} />
          </div>
        </div>
      </section>

      {/* Bouton sticky de réservation */}
      <StickyBookingButton
        label="Comparer les options"
        price={`dès ${priceRange.min.toFixed(0)}€`}
        scrollToId="options"
      />
    </>
  );
}
