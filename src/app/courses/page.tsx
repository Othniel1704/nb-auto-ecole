
import { SectionTitle } from "@/components/ui/section-title";
import { CourseCard, type Course } from "@/components/CourseCard";
import { HeroSection } from "@/components/ui/hero-section";

const coursesData: Course[] = [
  {
    id: "permis-b",
    title: "Permis B (Voiture)",
    shortDescription: "Formation complète pour l'examen du permis de conduire, disponible en boîte manuelle ou automatique, avec ou sans formation code incluse.",
    longDescription: "Notre formation au Permis B vous prépare intégralement à l'examen théorique (code de la route si option choisie) et pratique. Elle inclut des leçons de conduite personnalisées sur boîte manuelle (20h min.) ou automatique (13h min.), l'accès à des outils de révision du code en ligne, et un accompagnement jusqu'à l'examen.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "car steering wheel",
    price: "À partir de 860€", // Le moins cher: B Auto sans code
    features: [
      "Formation code en option (en salle et en ligne)",
      "Leçons de conduite sur boîte manuelle ou automatique",
      "Suivi pédagogique personnalisé",
      "Accompagnement à l'examen pratique",
      "Kit pédagogique numérique",
    ],
  },
  {
    id: "aac",
    title: "Conduite Accompagnée (AAC)",
    shortDescription: "Apprenez à conduire dès 15 ans et gagnez en expérience. Disponible en boîte manuelle ou automatique.",
    longDescription: "La Conduite Accompagnée permet de commencer l'apprentissage de la conduite dès 15 ans. Après une formation initiale en auto-école (code + conduite en boîte manuelle ou automatique), l'élève conduit avec un accompagnateur pour acquérir une solide expérience avant de passer le permis.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "teenager driving lesson",
    price: "À partir de 1350€", // AAC Auto
    features: [
      "Formation code + formation initiale pratique (manuelle ou auto)",
      "Rendez-vous préalable et pédagogiques obligatoires",
      "Conduite avec accompagnateur (kilométrage et durée selon réglementation)",
      "Taux de réussite potentiellement plus élevé au permis",
    ],
    ageRequirement: "Dès 15 ans",
  },
  {
    id: "supervisee",
    title: "Conduite Supervisée",
    shortDescription: "Perfectionnez votre conduite avec un accompagnateur après 18 ans, suite à la formation initiale.",
    longDescription: "La Conduite Supervisée s'adresse aux candidats de plus de 18 ans. Elle permet, après la formation initiale (Permis B manuelle ou automatique) ou après un échec à l'examen pratique, de conduire avec un accompagnateur pour améliorer ses compétences et gagner en confiance.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "adult learning drive",
    price: "Sur devis (basé sur formation initiale + RDV préalable)",
    features: [
      "Accessible après formation initiale (Permis B) ou échec au permis",
      "Conduite avec un accompagnateur expérimenté",
      "Rendez-vous préalable obligatoire avec l'auto-école",
      "Pas de durée minimale ni de kilométrage imposé réglementairement",
      "Alternative à l'AAC pour les plus de 18 ans",
    ],
    ageRequirement: "Dès 18 ans",
  },
  {
    id: "code",
    title: "Formation Code de la Route",
    shortDescription: "Préparez efficacement l'examen théorique général (ETG), en salle ou en ligne.",
    longDescription: "Nous proposons des cours de code en salle animés par des moniteurs, ainsi qu'un accès à des plateformes d'entraînement en ligne (PREPACODE) pour réviser à votre rythme. Notre objectif : votre réussite à l'examen du code.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "traffic signs collage",
    price: "À partir de 30€", // Code en ligne 3 mois
    features: [
      "Code en salle (optionnel, voir prestations)",
      "Accès plateforme d'entraînement en ligne PREPACODE (optionnel)",
      "Tests et examens blancs réguliers",
      "Livre de code (optionnel, voir prestations)",
    ],
  },
  {
    id: "post-permis",
    title: "Formation Post Permis",
    shortDescription: "Réduisez votre période probatoire grâce à cette formation complémentaire (7h).",
    longDescription: "Destinée aux conducteurs novices, cette formation de 7 heures, réalisée entre 6 et 12 mois après l'obtention du permis, permet de réduire la durée de la période probatoire et de renforcer ses compétences.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "confident driver road",
    price: "350€",
    features: [
      "7 heures de formation collective",
      "Sensibilisation aux risques routiers",
      "Partage d'expériences",
      "Réduction de la période probatoire (sous conditions)",
    ],
    ageRequirement: "Permis obtenu depuis 6 à 12 mois",
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
          centered
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

