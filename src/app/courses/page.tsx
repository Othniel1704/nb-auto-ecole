import { SectionTitle } from "@/components/ui/section-title";
import { CourseCard, type Course } from "@/components/CourseCard";
import { HeroSection } from "@/components/ui/hero-section";

const coursesData: Course[] = [
  {
    id: "permis-b",
    title: "Permis B (Boîte Manuelle / Automatique)",
    shortDescription: "Formation complète pour l'examen du permis de conduire voiture.",
    longDescription: "Notre formation au Permis B vous prépare intégralement à l'examen théorique (code de la route) et pratique. Elle inclut des leçons de conduite personnalisées, l'accès à des outils de révision du code en ligne, et un accompagnement jusqu'à l'examen.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "car steering wheel",
    price: "À partir de 1200€",
    features: [
      "Formation code de la route (en salle et en ligne)",
      "20 heures de conduite minimum (boîte manuelle)",
      "13 heures de conduite minimum (boîte automatique)",
      "Accompagnement à l'examen pratique",
      "Suivi pédagogique personnalisé",
    ],
  },
  {
    id: "aac",
    title: "Conduite Accompagnée (AAC)",
    shortDescription: "Apprenez à conduire dès 15 ans et gagnez en expérience.",
    longDescription: "La Conduite Accompagnée permet de commencer l'apprentissage de la conduite dès 15 ans. Après une formation initiale en auto-école, l'élève conduit avec un accompagnateur pour acquérir une solide expérience avant de passer le permis.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "teenager driving lesson",
    price: "À partir de 1400€",
    features: [
      "Formation code + formation initiale pratique",
      "Rendez-vous pédagogiques obligatoires",
      "Conduite avec accompagnateur (3000 km minimum sur 1 an)",
      "Taux de réussite plus élevé au permis",
    ],
    ageRequirement: "Dès 15 ans",
  },
  {
    id: "supervisee",
    title: "Conduite Supervisée",
    shortDescription: "Perfectionnez votre conduite avec un accompagnateur après 18 ans.",
    longDescription: "La Conduite Supervisée s'adresse aux candidats de plus de 18 ans. Elle permet, après la formation initiale ou après un échec à l'examen pratique, de conduire avec un accompagnateur pour améliorer ses compétences et gagner en confiance.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "adult learning drive",
    price: "Sur devis",
    features: [
      "Accessible après formation initiale (20h/13h) ou échec au permis",
      "Conduite avec un accompagnateur expérimenté",
      "Pas de durée minimale ni de kilométrage imposé",
      "Alternative à l'AAC pour les plus de 18 ans",
    ],
    ageRequirement: "Dès 18 ans",
  },
  {
    id: "code",
    title: "Formation Code de la Route",
    shortDescription: "Préparez efficacement l'examen théorique général (ETG).",
    longDescription: "Nous proposons des cours de code en salle animés par des moniteurs, ainsi qu'un accès à des plateformes d'entraînement en ligne pour réviser à votre rythme. Notre objectif : votre réussite à l'examen du code dès la première tentative.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "traffic signs collage",
    price: "À partir de 300€",
    features: [
      "Cours de code en présentiel avec moniteur",
      "Accès illimité à la salle de code aux horaires d'ouverture",
      "Tests et examens blancs réguliers",
      "Accès plateforme d'entraînement en ligne (Prépacode, etc.)",
    ],
  },
];

export default function CoursesPage() {
  return (
    <>
      <HeroSection
        title="Nos Formations à la Conduite"
        subtitle="Des programmes sur mesure pour vous mener vers la réussite et l'autonomie sur la route."
        imageUrl="https://placehold.co/1920x800.png"
        imageAlt="Various road signs"
        imageHint="road signs collection"
      />
      <div className="container mx-auto px-4 py-12 md:py-16">
        <SectionTitle
          title="Catalogue des Formations"
          subtitle="Choisissez la formule qui correspond le mieux à vos besoins et à vos objectifs."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </>
  );
}
