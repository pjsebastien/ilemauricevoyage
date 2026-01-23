import { Metadata } from 'next';
import Section from '@/components/layout/Section';
import PageHero from '@/components/layout/PageHero';
import TravelChecklist from '@/components/journey/TravelChecklist';
import ActivityHighlight from '@/components/activities/ActivityHighlight';
import ActivityList from '@/components/activities/ActivityList';
import CategoryGrid from '@/components/activities/CategoryGrid';
import NextStepCTA from '@/components/journey/NextStepCTA';
import InfoBox from '@/components/ui/InfoBox';
import { getPopularActivities, getAllActivities, getCategories } from '@/lib/activities';

export const metadata: Metadata = {
  title: 'Organiser votre voyage à l\'Île Maurice | Activités et conseils pratiques',
  description:
    'Organisez votre voyage à l\'île Maurice étape par étape : activités incontournables, hébergement, transport, budget et tous nos conseils pratiques.',
};

export default function HomePage() {
  const popularActivities = getPopularActivities(6);
  const highlightActivity = popularActivities[0];
  const allActivities = getAllActivities();
  const categories = getCategories();
  const popularCount = allActivities.filter(a => a.popular).length;

  const travelSteps = [
    {
      number: 1,
      title: 'Définir la période de votre voyage',
      description:
        'L\'île Maurice bénéficie d\'un climat tropical agréable toute l\'année. La haute saison touristique s\'étend d\'octobre à avril, avec des températures chaudes et un temps sec. De mai à septembre, l\'hiver austral offre des températures plus douces, idéales pour les activités sportives.',
      links: [
        { label: 'Voir les activités', href: '/activites-ile-maurice' },
      ],
    },
    {
      number: 2,
      title: 'Réserver vos vols',
      description:
        'L\'aéroport international Sir Seewoosagur Ramgoolam est situé à Plaine Magnien, au sud-est de l\'île. Plusieurs compagnies proposent des vols directs depuis Paris. Comparez les prix et réservez vos billets en avance pour bénéficier des meilleurs tarifs.',
    },
    {
      number: 3,
      title: 'Choisir votre hébergement',
      description:
        'L\'île Maurice offre une large gamme d\'hébergements : hôtels de luxe, guesthouses, villas, appartements. Le choix dépend de votre budget et de vos envies. Privilégiez les côtes Ouest et Nord pour les plages paradisiaques, ou l\'Est pour plus de tranquillité.',
    },
    {
      number: 4,
      title: 'Sélectionner vos activités',
      description:
        'Plongée, randonnée, sports nautiques, visites culturelles, découverte de la gastronomie locale... L\'île Maurice propose des activités pour tous les goûts. Réservez à l\'avance les activités populaires pour garantir votre place.',
      links: [
        { label: 'Découvrir toutes les activités', href: '/activites-ile-maurice' },
      ],
    },
    {
      number: 5,
      title: 'Organiser vos déplacements',
      description:
        'La location de voiture est le moyen le plus pratique pour explorer l\'île en toute liberté. Pensez à réserver votre véhicule à l\'avance. Alternativement, vous pouvez utiliser les taxis, les bus locaux ou faire appel à des chauffeurs privés.',
    },
    {
      number: 6,
      title: 'Préparer vos documents et formalités',
      description:
        'Pour un séjour de moins de 3 mois, les ressortissants français n\'ont besoin que d\'un passeport valide. Aucun visa n\'est nécessaire. Pensez à votre assurance voyage, votre permis de conduire international si vous louez une voiture, et vos réservations.',
    },
    {
      number: 7,
      title: 'Budget et conseils pratiques',
      description:
        'La monnaie locale est la roupie mauricienne (MUR). Prévoyez un budget adapté à vos activités et hébergement. Les cartes bancaires sont largement acceptées. Emportez de la crème solaire, un anti-moustique et des vêtements légers.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <PageHero
        size="large"
        badge="Planifiez votre séjour"
        title="Organisez votre voyage à l'Île Maurice"
        subtitle="Toutes les étapes pour préparer votre séjour de rêve sur l'île paradisiaque de l'océan Indien"
        backgroundImage="https://www.blog.ilemauricevoyage.fr/wp-content/uploads/2024/03/ile-maurice-voyage-scaled.jpg"
        stats={[
          {
            value: `${allActivities.length}+`,
            label: 'activités',
          },
          {
            value: `${popularCount}`,
            label: 'populaires',
          },
          {
            value: `${categories.length}`,
            label: 'catégories',
          },
        ]}
      />

      {/* Activité mise en avant */}
      {highlightActivity && (
        <Section background="gray" spacing="md">
          <ActivityHighlight
            activity={highlightActivity}
            label="Activité incontournable"
          />
        </Section>
      )}

      {/* Checklist du voyage */}
      <Section
        id="organiser"
        background="white"
        spacing="lg"
        title="Les 7 étapes pour organiser votre voyage"
        subtitle="Suivez ce guide progressif pour ne rien oublier et profiter pleinement de votre séjour"
      >
        <div className="max-w-3xl mx-auto">
          <TravelChecklist steps={travelSteps} />
        </div>
      </Section>

      {/* Conseils pratiques */}
      <Section
        id="conseils"
        background="gray"
        spacing="md"
        title="Conseils pratiques"
      >
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <InfoBox type="tip" title="Meilleure période">
            Pour profiter du meilleur climat, privilégiez les mois d'octobre à
            avril. L'eau est chaude (25-28°C) et les conditions sont idéales pour
            les activités nautiques.
          </InfoBox>

          <InfoBox type="info" title="Décalage horaire">
            L'île Maurice est à GMT+4. Le décalage horaire avec la France est de
            +2h en été et +3h en hiver.
          </InfoBox>

          <InfoBox type="success" title="Langue">
            Le français et l'anglais sont largement parlés. Le créole mauricien
            est la langue locale. Vous n'aurez aucun mal à communiquer.
          </InfoBox>

          <InfoBox type="warning" title="Santé">
            Aucun vaccin n'est obligatoire. Pensez à emporter une protection
            solaire élevée et un répulsif anti-moustiques.
          </InfoBox>
        </div>
      </Section>

      {/* Catégories d'activités */}
      <Section
        background="white"
        spacing="lg"
        title="Activités par catégorie"
        subtitle="Explorez toutes les expériences disponibles à l'île Maurice"
      >
        <CategoryGrid />
      </Section>

      {/* Activités populaires */}
      <Section
        background="white"
        spacing="lg"
        title="Activités populaires"
        subtitle="Les expériences les plus appréciées par nos voyageurs"
      >
        <ActivityList activities={popularActivities} variant="standard" columns={3} />
      </Section>

      {/* CTA Prochaine étape */}
      <Section background="gray" spacing="md">
        <NextStepCTA
          title="Prêt à découvrir toutes les activités ?"
          description="Explorez notre sélection complète d'activités et réservez vos expériences préférées"
          ctaLabel="Voir toutes les activités"
          ctaHref="/activites-ile-maurice"
        />
      </Section>
    </>
  );
}
