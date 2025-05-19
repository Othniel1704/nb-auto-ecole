import React from 'react';
import { HeroSection } from "@/components/ui/hero-section";
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Ajouté pour potentiellement styler les cartes

const formationsData = [
  {
    title: "Code à l’auto-école",
    price: "150 €",
    features: [
      "Gestion administrative",
      "Cours + tests + accompagnement pédagogique en ligne",
      "Séances de tests à l’auto-école",
    ],
    id: "code-ecole"
  },
  {
    title: "Formule B Conduite Accompagnée (AAC Traditionnelle)",
    price: "1595 €",
    features: [
      "Gestion administrative",
      "Formation code en ligne",
      "Formation code classique",
      "Kit de formation pratique",
      "20 leçons de conduite",
      "Cours de préparation à l’interrogation orale",
      "Frais d’accompagnement à l’examen pratique",
      "Rendez-vous préalable",
      "Rendez-vous pédagogique pratique",
      "Livret numérique",
      "1 disque A ou AAC",
    ],
    id: "aac-traditionnelle"
  },
  {
    title: "Formule B Traditionnelle (Boîte Manuelle)",
    price: "1300 €",
    features: [
      "Gestion administrative",
      "Formation code en ligne",
      "Formation code classique",
      "Kit de formation pratique",
      "20 leçons de conduite",
      "Cours de préparation à l’interrogation orale",
      "Frais d’accompagnement à l’examen pratique",
    ],
    id: "b-manuelle"
  },
  {
    title: "Formule B Boîte Automatique (13h avec code)",
    price: "970 €",
    features: [
      "Gestion administrative",
      "Formation code en ligne",
      "Formation code classique",
      "Kit de formation pratique",
      "13 leçons de conduite",
      "Cours de préparation à l’interrogation orale",
      "Frais d’accompagnement à l’examen pratique",
    ],
    id: "b-auto-13h-code"
  },
  {
    title: "Formule B Boîte Automatique (20h avec code)",
    price: "1300 €",
    features: [
      "Gestion administrative",
      "Formation code en ligne",
      "Formation code classique",
      "Kit de formation pratique",
      "20 leçons de conduite",
      "Cours de préparation à l’interrogation orale",
      "Frais d’accompagnement à l’examen pratique",
    ],
    id: "b-auto-20h-code"
  },
  {
    title: "Formule B Conduite Accompagnée Boîte Automatique (AAC Automatique)",
    price: "1350 €",
    features: [
      "Gestion administrative",
      "Formation code en ligne",
      "Formation code classique",
      "Kit de formation pratique",
      "13 leçons de conduite",
      "Cours de préparation à l’interrogation orale",
      "Frais d’accompagnement à l’examen pratique",
      "Rendez-vous préalable",
      "Rendez-vous pédagogique pratique",
      "Livret numérique",
      "1 disque A ou AAC",
    ],
    id: "aac-automatique"
  },
  {
    title: "Formule B Traditionnelle (Boîte Manuelle, sans code)",
    price: "1180 €",
    features: [
      "Gestion administrative",
      "Kit de formation pratique",
      "20 leçons de conduite",
      "Cours de préparation à l’interrogation orale",
      "Frais d’accompagnement à l’examen pratique",
    ],
    id: "b-manuelle-sans-code"
  },
  {
    title: "Formule B Boîte Automatique (13h, sans code)",
    price: "860 €",
    features: [
      "Gestion administrative",
      "Kit de formation pratique",
      "13 leçons de conduite",
      "Frais d’accompagnement à l’examen pratique",
    ],
    id: "b-auto-13h-sans-code"
  },
  {
    title: "Formule B - Post Permis",
    price: "350 €",
    priceDetails: "(payable en 1 échéance, tarif valable jusqu’au 31/12/2025)",
    features: [
      "Frais administratifs (création, modification, mise à jour de dossier, gestion interne, programmation, suivi…)",
      "7 leçons en salle avec enseignant diplômé",
      "Attestation de formation",
      "Frais de gestion de dossier",
    ],
    objective: "Permet d’obtenir les 12 points du permis plus rapidement (2 ans au lieu de 3 pour la formation traditionnelle, 18 mois au lieu de 2 ans pour la conduite accompagnée)",
    eligibility: [
      "Avoir entre 6 mois et 1 an de permis",
      "Aucune infraction ayant entraîné une perte de point",
    ],
    documents: [
      "Pièce d'identité (recto-verso)",
      "Permis de conduire (recto-verso)",
      "Justificatif de domicile de moins de 3 mois",
      "Attestation d’hébergement",
    ],
    id: "post-permis"
  }
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
            title="Nos Formules"
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
                  <p className="text-2xl font-bold text-accent mb-3">{formation.price}</p>
                  {formation.priceDetails && <p className="text-xs text-muted-foreground mb-3">{formation.priceDetails}</p>}
                  
                  <h4 className="font-semibold text-foreground">Inclus :</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {formation.features.map((feature, index) => <li key={index}>{feature}</li>)}
                  </ul>

                  {formation.objective && (
                    <>
                      <h4 className="font-semibold text-foreground mt-3">Objectif :</h4>
                      <p className="text-sm text-muted-foreground">{formation.objective}</p>
                    </>
                  )}
                  {formation.eligibility && (
                    <>
                      <h4 className="font-semibold text-foreground mt-3">Conditions d’éligibilité :</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {formation.eligibility.map((item, index) => <li key={index}>{item}</li>)}
                      </ul>
                    </>
                  )}
                  {formation.documents && (
                    <>
                      <h4 className="font-semibold text-foreground mt-3">Pièces à fournir :</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
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
            title="Prestations Supplémentaires"
            subtitle="Des options à la carte pour compléter votre formation ou répondre à des besoins spécifiques."
            centered
          />
          <Card className="shadow-md">
            <CardContent className="p-4 md:p-6">
              <ul className="list-disc list-inside space-y-2 text-muted-foreground md:text-lg">
                <li>Évaluation initiale : <strong>60 €</strong></li>
                <li>Accompagnement à l’examen supplémentaire : <strong>60 €</strong></li>
                <li>Cours de conduite supplémentaire : <strong>60 €</strong></li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section>
          <SectionTitle
            title="Remarques importantes"
            subtitle="Quelques points à connaître avant de vous engager."
            centered
          />
          <Card className="bg-secondary">
            <CardContent className="p-4 md:p-6">
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>L’évaluation de départ n’est pas comprise dans les forfaits.</li>
                <li>Toute leçon non annulée 48h à l’avance sera facturée (sauf justificatif médical).</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </>
  );
};

export default FormationsTarifsPage;
