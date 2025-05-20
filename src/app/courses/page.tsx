
import { SectionTitle } from "@/components/ui/section-title";
import { CourseCard, type Course as CourseCardType } from "@/components/CourseCard"; // Renamed to avoid conflict
import { HeroSection } from "@/components/ui/hero-section";

// Define the detailed course data structure based on user input
export interface PackageItem {
  title: string;
  price: number | string;
  duration?: string;
  features: string[];
  notes?: string[];
}

export interface CourseDetails {
  description: string;
  prerequisites?: string[];
  program?: string[];
  advantages?: string[];
}

export interface Course {
  id: string;
  title: string;
  shortDescription: string;
  categories?: string[];
  packages: PackageItem[];
  details?: CourseDetails;
  ageRequirement?: string;
  imageUrl: string; 
  imageHint: string; 
}

export const coursesData: Course[] = [
  {
    id: "permis-b",
    title: "Permis B (Voiture)",
    shortDescription: "Formation complète pour l'examen du permis de conduire, disponible en boîte manuelle ou automatique, avec ou sans formation code incluse.",
    categories: ["permis-b"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "car lesson",
    packages: [
      {
        title: "Boîte Manuelle - 20 leçons sans code",
        price: 1180,
        duration: "20 leçons de 50min",
        features: [
          "Gestion administrative",
          "Livret numérique",
          "20 leçons de conduite (50min)",
          "Accompagnement à l'examen pratique",
          "1 disque A ou AAC"
        ],
       
      },
      {
        title: "Boîte Manuelle - 20 leçons avec code",
        price: 1300,
        duration: "20 leçons de 50min",
        features: [
          "Gestion administrative",
          "Code en ligne (3 mois)",
          "Code en salle (3 mois)",
          "Livret numérique",
          "20 leçons de conduite (50min)",
          "Accompagnement à l'examen pratique",
          "1 disque A ou AAC"
        ],
       
      },
      {
        title: "Boîte Automatique - 13 leçons sans code",
        price: 860,
        duration: "13 leçons de 50min",
        features: [
          "Gestion administrative",
          "Livret numérique",
          "13 leçons de conduite (50min)",
          "Accompagnement à l'examen pratique",
          "1 disque A ou AAC"
        ],
       
      },
      {
        title: "Boîte Automatique - 13 leçons avec code",
        price: 970,
        duration: "13 leçons de 50min",
        features: [
          "Gestion administrative",
          "Code en ligne (3 mois)",
          "Code en salle (3 mois)",
          "Livret numérique",
          "13 leçons de conduite (50min)",
          "Accompagnement à l'examen pratique",
          "1 disque A ou AAC"
        ],
       
      },
      {
        title: "Boîte Automatique - 20 leçons avec code",
        price: 1300, 
        duration: "20 leçons de 50min",
        features: [
          "Gestion administrative",
          "Code en ligne (3 mois)",
          "Code en salle (3 mois)",
          "Livret numérique",
          "20 leçons de conduite (50min)",
          "Accompagnement à l'examen pratique",
          "1 disque A ou AAC"
        ],
       
      }
    ],
    details: {
      description: "Formation complète pour obtenir le permis de conduire catégorie B, avec différentes options selon le type de transmission (manuelle ou automatique) et l'inclusion du code de la route.",
      prerequisites: [
        "Avoir au moins 17 ans pour la formation classique",
        "Avoir 15 ans minimum pour la conduite accompagnée (AAC)"
      ],
      program: [
        "Évaluation de départ (obligatoire, facturée séparément)",
        "Formation théorique (code de la route) si incluse",
        "Formation pratique avec un enseignant diplômé",
        "Préparation à l'examen pratique"
      ]
    }
  },
  {
    id: "conduite-accompagnee",
    title: "Conduite Accompagnée (AAC)",
    shortDescription: "Apprentissage anticipé de la conduite à partir de 15 ans, permettant de réduire la période probatoire après l'obtention du permis.",
    categories: ["permis-b", "jeunes"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "teenager lesson",
    packages: [
      {
        title: "AAC Boîte Manuelle",
        price: 1595,
        duration: "20 leçons de 50min",
        features: [
          "Gestion administrative",
          "Code en ligne (3 mois)",
          "Code en salle (3 mois)",
          "Livret numérique",
          "20 leçons de conduite (50min)",
          "1 rendez-vous préalable (2h)",
          "2 rendez-vous pédagogiques (3h)",
          "Accompagnement à l'examen pratique",
          "1 disque AAC"
        ],
       
      },
      {
        title: "AAC Boîte Automatique",
        price: 1350,
        duration: "13 leçons de 50min",
        features: [
          "Gestion administrative",
          "Code en ligne (3 mois)",
          "Code en salle (3 mois)",
          "Livret numérique",
          "13 leçons de conduite (50min)",
          "1 rendez-vous préalable (2h)",
          "2 rendez-vous pédagogiques (3h)",
          "Accompagnement à l'examen pratique",
          "1 disque AAC"
        ],
      }
    ],
    details: {
      description: "L'Apprentissage Anticipé de la Conduite permet de commencer la formation dès 15 ans et d'acquérir une expérience de conduite avec un accompagnateur avant le passage de l'examen du permis.",
      prerequisites: [
        "Avoir 15 ans minimum",
        "Avoir l'accord de l'assureur du véhicule",
        "Avoir un accompagnateur titulaire du permis B depuis au moins 5 ans"
      ],
      program: [
        "Évaluation de départ",
        "Formation initiale en auto-école",
        "Conduite accompagnée (minimum 1 an et 3000 km)",
        "2 rendez-vous pédagogiques obligatoires",
        "Passage de l'examen du permis à 17 ans et demi"
      ],
      advantages: [
        "Taux de réussite plus élevé à l'examen",
        "Période probatoire réduite à 2 ans au lieu de 3",
        "Prime d'assurance souvent moins élevée"
      ]
    },
    ageRequirement: "Dès 15 ans",
  },
  {
    id: "post-permis",
    title: "Formation Post-Permis",
    shortDescription: "Stage de sensibilisation permettant de récupérer ses 12 points plus rapidement.",
    categories: ["perfectionnement"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "confident driver",
    packages: [
      {
        title: "Formation Post-Permis",
        price: 385,
        duration: "7 heures de formation",
        features: [
          "Frais administratifs",
          "7 heures de leçons en salle",
          "Attestation de formation",
          "Frais de gestion de dossier"
        ],
        notes: [
          "Payable en une seule fois"
        ]
      }
    ],
    details: {
      description: "Cette formation permet aux jeunes conducteurs d'obtenir leurs 12 points plus rapidement s'ils n'ont commis aucune infraction entraînant un retrait de points.",
      prerequisites: [
        "Avoir obtenu son permis depuis 6 à 12 mois",
        "N'avoir commis aucune infraction entraînant une perte de points"
      ],
      program: [
        "Sensibilisation aux risques routiers",
        "Partage d'expériences",
        "Analyse de situations de conduite"
      ],
      advantages: [
        "Réduction de la période probatoire (12 points en 2 ans au lieu de 3)",
        "Pour les anciens AAC : 12 points en 18 mois au lieu de 2 ans"
      ]
    },
    ageRequirement: "Permis obtenu depuis 6 à 12 mois"
  },
  {
    id: "passerelle-bea-manuelle-2025", 
    title: "Formule Passerelle - Boîte Automatique vers Manuelle",
    shortDescription: "Formation de 7 heures pour passer d'un permis B automatique à manuel.",
    categories: ["Permis B", "Boîte Manuelle", "Passerelle"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "manual transmission",
    packages: [
      {
        title: "Formule Passerelle 2025",
        price: 385,
        duration: "7 heures",
        features: [
          "7 leçons de conduite (50 min chacune)",
          "Gestion administrative",
          "Demande de fabrication du permis",
          "1 disque A ou AAC"
        ],
       
      }
    ],
    details: {
      description: "Cette formation de 7h sur boîte manuelle s’adresse aux titulaires du permis B sur boîte automatique (hors raisons médicales) souhaitant obtenir la capacité de conduire une voiture à boîte manuelle.",
      "prerequisites": [
        "Être âgé de 18 ans minimum",
        "Avoir le permis B78 depuis au moins 3 mois"
      ],
      program: [
        "7 heures de conduite sur boîte manuelle",
        "Accompagnement administratif",
        "Demande de fabrication du permis"
      ],
      advantages: [
        "Permet de conduire un véhicule à boîte manuelle",
        "Formation rapide et ciblée"
      ]
    },
    ageRequirement: "18+"
  },
  {
    id: "prestations-unites",
    title: "Prestations à l'Unité",
    shortDescription: "Services individuels disponibles à la carte selon vos besoins spécifiques.",
    categories: ["permis-b", "code"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "options list",
    packages: [
      {
        title: "Services individuels",
        price: "Variable", 
        features: [ 
          "Gestion administrative - 90€",
          "Code en salle - 150€",
          "Code en ligne (valable 3 mois) - 30€",
          "Extension du code en ligne - 30€",
          "Redevance examen théorique - 30€",
          "Livret de code - 15€",
          "Évaluation de départ sur tablette - 50€",
          "Évaluation de départ en voiture - 60€",
          "Leçon de conduite (50mn) - 60€",
          "Rendez-vous préalable (2h) - 120€",
          "Rendez-vous pédagogique (3h) - 180€",
          "Accompagnement à l'examen pratique - 60€"
        ]
      }
    ]
  }
];

// Helper function to calculate the summary price for CourseCard
function getSummaryPrice(course: Course): string {
  if (course.id === "prestations-unites") {
    return "Selon prestation";
  }
  if (course.packages && course.packages.length > 0) {
    const prices = course.packages
      .map(p => p.price)
      .filter(p => typeof p === 'number') as number[];
    if (prices.length > 0) {
      const minPrice = Math.min(...prices);
      return `À partir de ${minPrice}€`;
    }
  }
  return "Prix sur demande"; // Fallback
}

export default function CoursesPage() {
  const coursesToDisplay: CourseCardType[] = coursesData.map(course => ({
    id: course.id,
    title: course.title,
    shortDescription: course.shortDescription,
    imageUrl: course.imageUrl,
    imageHint: course.imageHint,
    price: getSummaryPrice(course), 
    ageRequirement: course.ageRequirement,
  }));

  return (
    <>
      <HeroSection
        title="Nos Formations à la Conduite"
        subtitle="Des programmes sur mesure pour vous mener vers la réussite et l'autonomie sur la route."
        imageUrl="https://placehold.co/1920x800.png"
        imageAlt="Various road signs"
        imageHint="road signs"
      />
      <div className="container mx-auto px-4 py-12 md:py-16">
        <SectionTitle
          title="Catalogue des Formations"
          subtitle="Choisissez la formule qui correspond le mieux à vos besoins et à vos objectifs."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesToDisplay.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </>
  );
}

    
