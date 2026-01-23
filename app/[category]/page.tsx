import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Section from '@/components/layout/Section';
import PageHero from '@/components/layout/PageHero';
import ActivityList from '@/components/activities/ActivityList';
import InfoBox from '@/components/ui/InfoBox';
import NextStepCTA from '@/components/journey/NextStepCTA';
import Badge from '@/components/ui/Badge';
import {
  getCategorySlugs,
  slugToCategory,
  getActivitiesByCategory,
  sortActivities,
} from '@/lib/activities';
import { getCategorySEO } from '@/lib/category-seo';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

/**
 * Génère les routes statiques pour toutes les catégories
 * Next.js générera ces pages au build time
 */
export async function generateStaticParams() {
  const categorySlugs = getCategorySlugs();
  return categorySlugs.map((item) => ({
    category: item.slug,
  }));
}

/**
 * Génère les métadonnées SEO pour chaque page catégorie
 */
export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const categoryName = slugToCategory(params.category);

  if (!categoryName) {
    return {
      title: 'Catégorie introuvable',
    };
  }

  const seoContent = getCategorySEO(categoryName);

  return {
    title: seoContent.title,
    description: seoContent.description,
    keywords: seoContent.keywords,
    openGraph: {
      title: seoContent.title,
      description: seoContent.description,
      type: 'website',
      locale: 'fr_FR',
    },
  };
}

/**
 * Page catégorie dynamique
 * URL: /[category-slug]-ile-maurice
 * Ex: /canyoning-ile-maurice, /plongee-sous-marine-ile-maurice
 */
export default function CategoryPage({ params }: CategoryPageProps) {
  // Récupérer la catégorie depuis le slug
  const categoryName = slugToCategory(params.category);

  if (!categoryName) {
    notFound();
  }

  // Récupérer les activités de cette catégorie
  const activities = getActivitiesByCategory(categoryName);
  const sortedActivities = sortActivities(activities, 'popular');

  // Récupérer le contenu SEO
  const seoContent = getCategorySEO(categoryName);

  // Statistiques
  const popularCount = activities.filter((a) => a.popular).length;
  const avgPrice =
    activities.reduce((sum, a) => sum + a.price, 0) / activities.length;
  const priceRange = {
    min: Math.min(...activities.map((a) => a.price)),
    max: Math.max(...activities.map((a) => a.price)),
  };

  return (
    <>
      {/* Hero Section */}
      <PageHero
        badge={categoryName}
        title={seoContent.h1}
        subtitle={seoContent.intro}
        backgroundImage={seoContent.backgroundImage}
        stats={[
          {
            value: `${activities.length}`,
            label: activities.length > 1 ? 'activités' : 'activité',
          },
          ...(popularCount > 0 ? [{
            value: `${popularCount}`,
            label: `populaire${popularCount > 1 ? 's' : ''}`,
          }] : []),
          {
            value: `dès ${priceRange.min.toFixed(0)}€`,
            label: 'par personne',
          },
        ]}
      />

      {/* Mots-clés associés */}
      {seoContent.relatedKeywords && seoContent.relatedKeywords.length > 0 && (
        <Section background="gray" spacing="sm">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-3">
              Recherches associées :
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {seoContent.relatedKeywords.map((keyword, index) => (
                <Badge key={index} variant="default">
                  {keyword}
                </Badge>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Liste des activités */}
      <Section background="white" spacing="lg" title="Toutes les activités">
        <ActivityList
          activities={sortedActivities}
          variant="standard"
          columns={3}
        />
      </Section>

      {/* Informations pratiques */}
      <Section
        background="gray"
        spacing="md"
        title="Informations pratiques"
      >
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <InfoBox type="info" title="Réservation">
            Réservez votre activité de {categoryName.toLowerCase()} en ligne.
            Les prix affichés sont par personne et incluent généralement
            l'équipement nécessaire.
          </InfoBox>

          <InfoBox type="tip" title="Meilleure période">
            La plupart des activités de {categoryName.toLowerCase()} sont
            disponibles toute l'année à l'île Maurice. Consultez les détails de
            chaque activité pour les conditions spécifiques.
          </InfoBox>
        </div>
      </Section>

      {/* CTA vers toutes les activités */}
      <Section background="white" spacing="md">
        <NextStepCTA
          title="Découvrez toutes nos activités"
          description="Explorez l'ensemble des expériences disponibles à l'île Maurice"
          ctaLabel="Voir toutes les activités"
          ctaHref="/activites-ile-maurice"
        />
      </Section>
    </>
  );
}
