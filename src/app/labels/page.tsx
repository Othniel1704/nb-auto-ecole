
import Image from "next/image";
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Award, ShieldCheck, Star, ThumbsUp } from "lucide-react";
import { HeroSection } from "@/components/ui/hero-section";
import { cn } from "@/lib/utils";

const qualityPoints = [
  {
    icon: <Award className="h-10 w-10 text-primary mb-4" />,
    title: "Agrément Préfectoral",
    description: "NB AUTO ÉCOLE DE LA MAIRIE est une auto-école agréée par la Préfecture, garantissant le respect des normes d'enseignement et de sécurité.",
    image: "/images/logo_ecole_de_conduite_qualité.png", // Placeholder, replace with actual image path
    imageHint: "official stamp"
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary mb-4" />,
    title: "Moniteurs Diplômés d'État",
    description: "Notre équipe est composée exclusivement de moniteurs titulaires du BEPECASER ou du Titre Professionnel ECSR, assurant une pédagogie de qualité.",
    image: "/images/logo_ecole_de_conduite_qualité.png", // Placeholder
    imageHint: "certificate diploma"
  },
  {
    icon: <Star className="h-10 w-10 text-primary mb-4" />,
    title: "Engagement Qualité",
    description: "Nous nous engageons à fournir une formation transparente, un suivi personnalisé et des conditions d'apprentissage optimales pour tous nos élèves.",
    image: "/images/logo_ecole_de_conduite_qualité.png", // Placeholder
    imageHint: "quality seal"
  },
  {
    icon: <ThumbsUp className="h-10 w-10 text-primary mb-4" />,
    title: "Taux de Réussite Élevé (Objectif)",
    description: "Nous mettons tout en œuvre pour maximiser vos chances de réussite aux examens du code et de la conduite. Nos méthodes visent un taux de réussite supérieur à la moyenne nationale.",
    image: "/images/logo_ecole_de_conduite_qualité.png", // Placeholder
    imageHint: "graph success"
  }
];

interface PartnerLabel {
  name: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  imageWidth?: number;
  imageHeight?: number;
}

const partnerLogos: PartnerLabel[] = [
  {
    name: "Certifié Qualiopi",
    description: "Notre organisme est officiellement certifié Qualiopi. Cette certification atteste de la qualité de nos processus de formation et de notre engagement envers l'amélioration continue.",
    imageUrl: "/images/LogoQualiopi.png",
    imageHint: "Qualiopi logo",
  },
  {
    name: "École de Conduite Qualité",
    description: "Gage de notre engagement pour une formation de qualité, reconnue par les professionnels du secteur.",
    imageUrl: "/images/logo_ecole_de_conduite_qualité.png",
    imageHint: "quality school",
  },
  {
    name: "Partenaire Région Île-de-France",
    description: "Nous vous accompagnons dans les démarches pour les aides régionales à la formation au permis de conduire.",
    imageUrl: "/images/logo.jpg", 
    imageHint: "iledefrance logo",
  },
  {
    name: "Référencé France Travail",
    description: "Nos formations peuvent être éligibles à des financements via France Travail (anciennement Pôle Emploi).",
    imageUrl: "/images/logo-france-travail.png",
    imageHint: "francetravail logo",
  },
  {
    name: "Éligible Mon Compte CPF",
    description: "Financez votre permis de conduire grâce à votre Compte Personnel de Formation (CPF).",
    imageUrl: "/images/Logo-Mon-Compte-Formation-Appli-CPF.jpg", 
    imageHint: "cpf logo",
  },
  {
    name: "Partenaire Code Rousseau",
    description: "Nous utilisons les outils pédagogiques de Code Rousseau, leader de la formation au code de la route.",
    imageUrl: "/images/coderousseau.jpg", 
    imageHint: "rousseau logo",
  },
];

export default function LabelsPage() {
  return (
    <>
    <HeroSection
        title="Nos Engagements Qualité & Labels"
        subtitle="La garantie d'une formation à la conduite sérieuse, transparente et efficace."
        imageUrl="https://placehold.co/1920x800.png"
        imageAlt="Quality seals and certificates"
        imageHint="certificates awards"
      />
    <div className="container mx-auto px-4 py-12 md:py-16 animate-fade-in-up">
      <SectionTitle
        title="Qualité et Confiance : Nos Priorités"
        subtitle="Chez NB AUTO ÉCOLE DE LA MAIRIE, nous sommes fiers de nos engagements pour vous offrir la meilleure formation possible."
        centered
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {qualityPoints.map((point, index) => (
          <Card 
            key={index} 
            className={cn(
              "hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out",
              "animate-fade-in-up",
              index % 2 === 0 ? "animation-delay-200ms" : "animation-delay-400ms"
            )}
          >
            <CardHeader className="items-center text-center">
              {point.icon}
              <CardTitle>{point.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center mb-4">{point.description}</CardDescription>
              <div className="flex justify-center">
                <Image
                  src={point.image}
                  alt={`${point.title} icon`}
                  width={150}
                  height={100}
                  className="rounded object-contain"
                  data-ai-hint={point.imageHint}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="bg-secondary p-8 rounded-lg animate-fade-in-up animation-delay-600ms">
        <SectionTitle
          title="Notre Engagement envers Vous"
          subtitle="Nous nous engageons à respecter les critères de qualité pour une formation réussie."
        />
        <ul className="list-disc list-inside space-y-3 text-muted-foreground">
          <li><strong>Information transparente :</strong> Accès facile aux informations sur les formations, les tarifs, et les taux de réussite (sur demande).</li>
          <li><strong>Évaluation initiale :</strong> Une évaluation de départ personnalisée pour déterminer le volume de formation adapté.</li>
          <li><strong>Parcours de formation clair :</strong> Un programme pédagogique structuré et des objectifs précis pour chaque étape.</li>
          <li><strong>Moyens pédagogiques adaptés :</strong> Locaux, véhicules et outils conformes et modernes.</li>
          <li><strong>Suivi personnalisé :</strong> Un accompagnement individualisé par des moniteurs qualifiés et à l'écoute.</li>
          <li><strong>Gestion des réclamations :</strong> Un processus simple pour recueillir et traiter vos remarques.</li>
        </ul>
      </section>

      <section className="mt-12 md:mt-16 animate-fade-in-up animation-delay-800ms">
        <SectionTitle
          title="Nos Labels et Partenariats Officiels"
          subtitle="Des reconnaissances qui attestent de notre sérieux et facilitent votre parcours vers le permis."
          centered
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {partnerLogos.map((partner, index) => (
            <Card 
              key={index} 
              className={cn(
                "hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out flex flex-col",
                "animate-fade-in-up",
                `animation-delay-${(index % 3) * 150}ms`
              )}
            >
              <CardHeader className="items-center text-center">
                <CardTitle>{partner.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center flex flex-col flex-grow items-center">
                <Image
                  src={partner.imageUrl}
                  alt={partner.name}
                  width={partner.imageWidth || 180}
                  height={partner.imageHeight || 90}
                  className="rounded mx-auto mb-4 object-contain"
                  data-ai-hint={partner.imageHint}
                />
                <CardDescription className="mt-auto">{partner.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
    </>
  );
}
