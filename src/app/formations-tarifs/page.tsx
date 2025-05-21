
import React from 'react';
import { HeroSection } from "@/components/ui/hero-section";
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ListChecks, AlertTriangle, Info, Briefcase, Users, University, CreditCardIcon, Landmark, Banknote, CheckCircle } from "lucide-react";
import { coursesData, type Course, type PackageItem } from '../courses/page'; // Import from courses/page
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

// Function to extract supplementary services
const getSupplementaryServices = () => {
  const prestationsUnitesCourse = coursesData.find(course => course.id === "prestations-unites");
  if (prestationsUnitesCourse && prestationsUnitesCourse.packages.length > 0) {
    // Assuming features in "prestations-unites" are strings like "Service Name - Price"
    return prestationsUnitesCourse.packages[0].features.map(featureString => {
      const parts = featureString.split(" - ");
      return {
        name: parts[0],
        price: parts.length > 1 ? parts[1] : "N/A",
      };
    });
  }
  return [];
};

const supplementaryServices = getSupplementaryServices();

// Filter out "prestations-unites" for the main formations display
const mainFormations = coursesData.filter(course => course.id !== "prestations-unites");

const financingOptions = [
  {
    icon: <Briefcase className="h-6 w-6 mr-3 text-primary" />,
    title: "Compte Personnel de Formation (CPF)",
    description: "Utilisez vos droits CPF pour financer tout ou partie de votre permis. Nous sommes éligibles et vous accompagnons dans vos démarches.",
  },
  {
    icon: <Users className="h-6 w-6 mr-3 text-primary" />,
    title: "Aides France Travail (Pôle Emploi)",
    description: "Des aides peuvent être disponibles pour les demandeurs d'emploi. Renseignez-vous auprès de votre conseiller France Travail.",
  },
  {
    icon: <University className="h-6 w-6 mr-3 text-primary" />,
    title: "Aide Régionale (Île-de-France)",
    description: "La Région Île-de-France propose des aides pour les jeunes. Nous pouvons vous aider à vérifier votre éligibilité.",
  },
  {
    icon: <CreditCardIcon className="h-6 w-6 mr-3 text-primary" />,
    title: "Facilités de Paiement Internes",
    description: "Nous proposons des solutions de paiement échelonné pour s'adapter à votre budget. Contactez-nous pour en discuter.",
  },
];

const paymentMethods = [
  { icon: <CreditCardIcon className="h-5 w-5 mr-2 text-primary" />, name: "Carte Bancaire" },
  { icon: <Banknote className="h-5 w-5 mr-2 text-primary" />, name: "Espèces" },
  { icon: <Landmark className="h-5 w-5 mr-2 text-primary" />, name: "Chèque" }, 
  { icon: <Briefcase className="h-5 w-5 mr-2 text-primary" />, name: "Virement Bancaire" }, 
];


const FormationsTarifsPage: React.FC = () => {
  return (
    <>
      <HeroSection
        title="Nos Formations & Tarifs Détaillés"
        subtitle="Découvrez toutes nos formules et prestations pour vous accompagner vers la réussite de votre permis."
        imageUrl="https://placehold.co/1920x800.png"
        imageAlt="Tableau de tarifs"
        imageHint="price calculator"
      />
      <div className="container mx-auto px-4 py-12 md:py-16">
        <section id="main-formations" className="mb-12 animate-fade-in-up">
          <SectionTitle
            title="Nos Formules Permis & AAC"
            subtitle="Des packs complets adaptés à chaque besoin et chaque profil d'apprenti conducteur."
            centered
          />
          <div className="space-y-10">
            {mainFormations.map((course: Course, courseIndex: number) => (
              <div key={course.id} id={course.id} className={cn("scroll-mt-20 animate-fade-in-up", `animation-delay-${courseIndex * 200}ms`)}>
                <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-6 text-center">{course.title}</h3>
                {course.details?.description && <p className="text-center text-muted-foreground mb-6 max-w-2xl mx-auto">{course.details.description}</p>}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {course.packages.map((pkg: PackageItem, index: number) => (
                    <Card 
                      key={`${course.id}-${index}`} 
                      className={cn(
                        "flex flex-col h-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out",
                        "animate-fade-in-up",
                        `animation-delay-${(index + 1) * 100}ms` // Stagger package cards
                      )}
                    >
                      <CardHeader className="p-4 md:p-6 bg-muted/50">
                        <CardTitle className="text-xl md:text-2xl text-foreground">{pkg.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 md:p-6 flex-grow space-y-3">
                        <p className="text-2xl font-bold text-accent mb-2">{typeof pkg.price === 'number' ? `${pkg.price} €` : pkg.price}</p>
                        {pkg.duration && <p className="text-sm text-muted-foreground mb-3">Durée indicative : {pkg.duration}</p>}
                        
                        {pkg.features && pkg.features.length > 0 && (
                          <>
                            <h4 className="font-semibold text-foreground flex items-center"><ListChecks className="h-5 w-5 mr-2 text-primary" /> Inclus :</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground pl-2">
                              {pkg.features.map((feature, fIndex) => <li key={fIndex}>{feature}</li>)}
                            </ul>
                          </>
                        )}
                        {pkg.notes && pkg.notes.length > 0 && (
                          <>
                            <h4 className="font-semibold text-foreground mt-3 flex items-center"><Info className="h-5 w-5 mr-2 text-blue-500" /> À noter :</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground pl-2">
                              {pkg.notes.map((note, nIndex) => <li key={nIndex}>{note}</li>)}
                            </ul>
                          </>
                        )}
                         
                        {course.id === "post-permis" && course.details && (
                          <div className="mt-4">
                            {course.details.prerequisites && (
                                <>
                                <h4 className="font-semibold text-foreground mt-3">Conditions d’éligibilité :</h4>
                                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground pl-2">
                                    { course.details.prerequisites.map((item, idx) => <li key={`prereq-${idx}`}>{item}</li>)}
          
                                </ul>
                                </>
                            )}
                            {course.details.program && (
                                <>
                                <h4 className="font-semibold text-foreground mt-3">Programme :</h4>
                                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground pl-2">
                                    {course.details.program.map((item, idx) => <li key={`prog-${idx}`}>{item}</li>)}
                                </ul>
                                </>
                            )}
                            {course.details.advantages && (
                                <>
                                <h4 className="font-semibold text-foreground mt-3">Avantages :</h4>
                                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground pl-2">
                                    {course.details.advantages.map((item, idx) => <li key={`adv-${idx}`}>{item}</li>)}
                                </ul>
                                </>
                            )}
                          </div>
                        )}
                      </CardContent>
                      <CardFooter className="p-4 md:p-6">
                        <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                          <Link href={`/contact?course=${encodeURIComponent(course.title + " - " + pkg.title)}`}>S&apos;inscrire ou Devis</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                {course.details?.prerequisites && course.id !== "post-permis" && (
                    <div className="mt-6 p-4 bg-secondary rounded-md">
                        <h4 className="font-semibold text-foreground mb-2">Prérequis généraux pour {course.title}:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground pl-2">
                            {course.details.prerequisites.map((prereq, pIdx) => <li key={`prereq-detail-${pIdx}`}>{prereq}</li>)}
                        </ul>
                    </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="supplementary-services" className="mb-12 animate-fade-in-up animation-delay-400ms">
          <SectionTitle
            title="Prestations Supplémentaires & à la Carte"
            subtitle="Des options pour compléter votre formation ou répondre à des besoins spécifiques."
            centered
          />
          <Card className="shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out">
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

        <section id="financing-payment" className="mb-12 animate-fade-in-up animation-delay-600ms">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out animate-fade-in-up">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl text-primary">Solutions de Financement</CardTitle>
                <p className="text-sm text-muted-foreground">Découvrez les aides et facilités pour financer votre permis.</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {financingOptions.map((option, index) => (
                  <div key={index} className="flex items-start">
                    {option.icon}
                    <div>
                      <h4 className="font-semibold text-foreground">{option.title}</h4>
                      <p className="text-sm text-muted-foreground">{option.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out animate-fade-in-up animation-delay-200ms">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl text-primary">Nos Moyens de Paiement</CardTitle>
                 <p className="text-sm text-muted-foreground">Les options disponibles pour régler votre formation.</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {paymentMethods.map((method, index) => (
                    <li key={index} className="flex items-center text-muted-foreground">
                      {method.icon}
                      <span>{method.name}</span>
                    </li>
                  ))}
                </ul>
                 <p className="text-sm text-muted-foreground mt-4">Des facilités de paiement sont possibles, contactez-nous pour en savoir plus.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="animate-fade-in-up animation-delay-800ms">
          <Card className="bg-secondary shadow-md mt-12 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out">
            <CardHeader>
                <CardTitle className="text-xl md:text-2xl text-primary flex items-center">
                    <AlertTriangle className="h-6 w-6 mr-2 text-amber-500" /> À Noter
                </CardTitle>
            </CardHeader>
            <CardContent className="p-4 md:p-6">
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>L’évaluation de départ (obligatoire avant la signature du contrat) n’est pas comprise dans les forfaits (voir tarifs des prestations à l'unité).</li>
                <li>Toute leçon de conduite non annulée au minimum 48 heures ouvrables à l’avance sera facturée (sauf présentation d’un justificatif médical).</li>
                <li>Les tarifs sont valables jusqu’au 31/12/2025 sauf indication contraire, et sont susceptibles d'être ajustés.</li>
                <li>La redevance examen théorique (30€) est à régler directement au centre d'examen agréé par l'État.</li>
                <li>Les forfaits code (en ligne / en salle) sont valables 3 mois.</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </>
  );
};

export default FormationsTarifsPage;
