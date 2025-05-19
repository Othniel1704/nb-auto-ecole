
import React from 'react';
import { HeroSection } from "@/components/ui/hero-section";
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ListChecks, AlertTriangle } from "lucide-react";

const formationsData = [
  {
    id: "permis-b-manuelle-sans-code",
    title: "Permis B - Boîte Manuelle (Sans Code)",
    price: "1180 €",
    priceDetails: "Valide du 01/01/2025 au 31/12/2025",
    features: [
      "20 leçons de conduite (boîte manuelle)",
      "Kit pédagogique numérique",
      "Accompagnement à l’examen pratique (1 présentation)",
      "Frais de gestion de dossier",
    ],
  },
  {
    id: "permis-b-manuelle-avec-code",
    title: "Permis B - Boîte Manuelle (Avec Code)",
    price: "1300 €",
    priceDetails: "Valide du 01/01/2025 au 31/12/2025",
    features: [
      "Formation code (accès salle et en ligne PREPACODE)",
      "20 leçons de conduite (boîte manuelle)",
      "Kit pédagogique numérique",
      "Accompagnement à l’examen pratique (1 présentation)",
      "Frais de gestion de dossier",
    ],
  },
  {
    id: "permis-b-auto-sans-code",
    title: "Permis B - Boîte Automatique (Sans Code)",
    price: "860 €",
    priceDetails: "Valide du 01/01/2025 au 31/12/2025",
    features: [
      "13 leçons de conduite (boîte automatique)",
      "Kit pédagogique numérique",
      "Accompagnement à l’examen pratique (1 présentation)",
      "Frais de gestion de dossier",
    ],
  },
  {
    id: "permis-b-auto-avec-code",
    title: "Permis B - Boîte Automatique (Avec Code)",
    price: "970 €",
    priceDetails: "Valide du 01/01/2025 au 31/12/2025",
    features: [
      "Formation code (accès salle et en ligne PREPACODE)",
      "13 leçons de conduite (boîte automatique)",
      "Kit pédagogique numérique",
      "Accompagnement à l’examen pratique (1 présentation)",
      "Frais de gestion de dossier",
    ],
  },
  {
    id: "aac-manuelle",
    title: "Conduite Accompagnée (AAC) - Manuelle",
    price: "1595 €",
    priceDetails: "Valide du 01/01/2025 au 31/12/2025",
    features: [
      "Formation code (accès salle et en ligne PREPACODE)",
      "20 leçons de conduite (boîte manuelle)",
      "Rendez-vous préalable (2h)",
      "2 Rendez-vous pédagogiques (3h chacun)",
      "Kit pédagogique numérique",
      "Accompagnement à l’examen pratique (1 présentation)",
      "Frais de gestion de dossier",
    ],
  },
  {
    id: "aac-automatique",
    title: "Conduite Accompagnée (AAC) - Automatique",
    price: "1350 €",
    priceDetails: "Valide du 01/01/2025 au 31/12/2025",
    features: [
      "Formation code (accès salle et en ligne PREPACODE)",
      "13 leçons de conduite (boîte automatique)",
      "Rendez-vous préalable (2h)",
      "2 Rendez-vous pédagogiques (3h chacun)",
      "Kit pédagogique numérique",
      "Accompagnement à l’examen pratique (1 présentation)",
      "Frais de gestion de dossier",
    ],
  },
  {
    id: "post-permis",
    title: "Formation Post Permis",
    price: "350 €",
    priceDetails: "Tarif valable jusqu’au 31/12/2025",
    features: [
      "7 heures de formation collective en salle avec enseignant diplômé",
      "Attestation de formation",
    ],
    objective: "Permet d’obtenir les 12 points du permis plus rapidement (2 ans au lieu de 3 pour la formation traditionnelle, 18 mois au lieu de 2 ans pour la conduite accompagnée).",
    eligibility: [
      "Avoir obtenu son premier permis de conduire (A1, A2, B1 ou B)",
      "Avoir entre 6 mois et 1 an de permis (période probatoire)",
      "Ne pas avoir commis d’infraction ayant entraîné une perte de points sur son permis ou une mesure de restriction du droit de conduire.",
    ],
    documents: [
      "Pièce d'identité (recto-verso)",
      "Permis de conduire (recto-verso)",
      "Justificatif de domicile de moins de 3 mois",
      "Attestation d’hébergement (si applicable) et pièce d'identité de l'hébergeant",
    ],
  }
];

const supplementaryServices = [
  { name: "Gestion administrative", price: "90 €" },
  { name: "Code en salle (accès illimité)", price: "150 €" },
  { name: "Code en ligne PREPACODE (accès 3 mois)", price: "30 €" },
  { name: "Extension du code en ligne PREPACODE (par 3 mois)", price: "30 €" },
  { name: "Redevance examen théorique (ETG)", price: "30 €" },
  { name: "Livret de code", price: "15 €" },
  { name: "Évaluation de départ (sur tablette)", price: "50 €" },
  { name: "Évaluation de départ (en voiture)", price: "60 €" },
  { name: "Leçon de conduite (50mn)", price: "60 €" },
  { name: "Rendez-vous préalable AAC/Supervisée (2h)", price: "120 €" },
  { name: "Rendez-vous pédagogique AAC/Supervisée (3h)", price: "180 €" },
  { name: "Accompagnement à l’examen pratique (supplémentaire)", price: "60 €" },
];

const FormationsTarifsPage: React.FC = () => {
  return (
    <>
      <HeroSection
        title="Nos Formations & Tarifs"
        subtitle="Découvrez toutes nos formules et prestations pour vous accompagner vers la réussite de votre permis."
        imageUrl="https://placehold.co/1920x800.png"
        imageAlt="Tableau de tarifs"
        imageHint="price list calculator"
      />
      <div className="container mx-auto px-4 py-12 md:py-16">
        <section className="mb-12">
          <SectionTitle
            title="Nos Formules Permis & AAC"
            subtitle="Des packs complets adaptés à chaque besoin et chaque profil d'apprenti conducteur."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {formationsData.map((formation) => (
              <Card key={formation.id} className="flex flex-col h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="p-4 md:p-6 bg-muted/50">
                  <CardTitle className="text-xl md:text-2xl text-primary">{formation.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-6 flex-grow space-y-3">
                  <p className="text-2xl font-bold text-accent mb-2">{formation.price}</p>
                  {formation.priceDetails && <p className="text-xs text-muted-foreground mb-3">{formation.priceDetails}</p>}
                  
                  {formation.features && formation.features.length > 0 && (
                    <>
                      <h4 className="font-semibold text-foreground flex items-center"><ListChecks className="h-5 w-5 mr-2 text-primary" /> Inclus :</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground pl-2">
                        {formation.features.map((feature, index) => <li key={index}>{feature}</li>)}
                      </ul>
                    </>
                  )}

                  {formation.objective && (
                    <>
                      <h4 className="font-semibold text-foreground mt-3">Objectif :</h4>
                      <p className="text-sm text-muted-foreground">{formation.objective}</p>
                    </>
                  )}
                  {formation.eligibility && formation.eligibility.length > 0 && (
                    <>
                      <h4 className="font-semibold text-foreground mt-3">Conditions d’éligibilité :</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground pl-2">
                        {formation.eligibility.map((item, index) => <li key={index}>{item}</li>)}
                      </ul>
                    </>
                  )}
                  {formation.documents && formation.documents.length > 0 && (
                    <>
                      <h4 className="font-semibold text-foreground mt-3">Pièces à fournir :</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground pl-2">
                        {formation.documents.map((item, index) => <li key={index}>{item}</li>)}
                      </ul>
                    </>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <SectionTitle
            title="Prestations Supplémentaires & à la Carte"
            subtitle="Des options pour compléter votre formation ou répondre à des besoins spécifiques."
            centered
          />
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl text-primary">Liste des Prestations</CardTitle>
            </CardHeader>
            <CardContent className="p-4 md:p-6">
              <ul className="space-y-2 text-muted-foreground md:text-base columns-1 md:columns-2">
                {supplementaryServices.map(service => (
                  <li key={service.name} className="flex justify-between border-b border-dashed pb-1">
                    <span>{service.name}</span>
                    <strong className="text-foreground">{service.price}</strong>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section>
          <SectionTitle
            title="Remarques Importantes"
            subtitle="Quelques points à connaître avant de vous engager."
            centered
          />
          <Card className="bg-secondary shadow-md">
            <CardHeader>
                <CardTitle className="text-xl md:text-2xl text-primary flex items-center">
                    <AlertTriangle className="h-6 w-6 mr-2 text-amber-500" /> À Noter
                </CardTitle>
            </CardHeader>
            <CardContent className="p-4 md:p-6">
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>L’évaluation de départ (obligatoire avant la signature du contrat) n’est pas comprise dans les forfaits (voir tarifs des prestations supplémentaires).</li>
                <li>Toute leçon de conduite non annulée au minimum 48 heures ouvrables à l’avance sera facturée (sauf présentation d’un justificatif médical).</li>
                <li>Les tarifs des forfaits sont valables pour la période indiquée. Les prix sont susceptibles d'être ajustés.</li>
                <li>La redevance examen théorique (30€) est à régler directement au centre d'examen agréé par l'État.</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </>
  );
};

export default FormationsTarifsPage;
