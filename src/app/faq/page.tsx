
import { SectionTitle } from "@/components/ui/section-title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HeroSection } from "@/components/ui/hero-section";
import { cn } from "@/lib/utils";

const faqData = [
  {
    question: "Quels documents dois-je fournir pour m'inscrire ?",
    answer: "Pour vous inscrire, vous aurez besoin d'une pièce d'identité en cours de validité, de photos d'identité récentes aux normes ANTS, d'un justificatif de domicile de moins de 6 mois, et de l'attestation de recensement ou du certificat de participation à la JDC (si applicable). Nous vous fournirons la liste complète lors de votre pré-inscription.",
  },
  {
    question: "Combien de temps dure la formation au permis B ?",
    answer: "La durée de la formation varie selon les individus. Le minimum légal est de 20 heures de conduite pour le permis B en boîte manuelle (13h en boîte automatique). En moyenne, nos élèves effectuent entre 25 et 35 heures. La formation au code peut prendre de quelques semaines à quelques mois selon votre assiduité.",
  },
  {
    question: "Quels sont les moyens de paiement acceptés ?",
    answer: "Nous acceptons les paiements par Carte Bancaire, Espèces, Chèque et Virement bancaire. Nous proposons également des facilités de paiement, n'hésitez pas à nous consulter pour plus de détails.",
  },
  {
    question: "Comment puis-je financer ma formation au permis de conduire ?",
    answer: "Plusieurs options de financement peuvent être disponibles : \n - Utilisez votre Compte Personnel de Formation (CPF). Notre auto-école est éligible.\n - Renseignez-vous sur les aides de France Travail (Pôle Emploi) si vous êtes demandeur d'emploi.\n - La Région Île-de-France propose des aides pour les jeunes.\n - Nous offrons également des facilités de paiement échelonné. \nN'hésitez pas à consulter notre page 'Formations & Tarifs' pour plus de détails ou à nous contacter directement.",
  },
  {
    question: "Quel est l'âge minimum pour commencer la conduite accompagnée (AAC) ?",
    answer: "Vous pouvez commencer la formation à la conduite accompagnée (AAC) dès l'âge de 15 ans. Cela vous permet d'acquérir une solide expérience de conduite avant de passer l'examen du permis de conduire à partir de 17 ans.",
  },
  {
    question: "Comment se déroule l'examen du code de la route ?",
    answer: "L'examen théorique général (ETG), ou code de la route, est un QCM de 40 questions. Pour le réussir, vous devez obtenir au moins 35 bonnes réponses. Nous vous préparons avec des cours en salle, des tests et un accès à des plateformes d'entraînement en ligne.",
  },
  {
    question: "Que se passe-t-il si j'échoue à l'examen de conduite ?",
    answer: "En cas d'échec à l'examen pratique, votre moniteur analysera avec vous les points à améliorer. Vous pourrez reprendre des heures de conduite pour vous perfectionner avant de vous représenter à l'examen. La conduite supervisée peut aussi être une option.",
  },
  {
    question: "Quels sont vos horaires d'ouverture ?",
    answer: "Nos horaires d'ouverture pour l'accueil et les cours de code sont : Lundi au Vendredi de 09h à 12h et de 14h à 19h, et le Samedi de 09h à 16h. Les heures de conduite sont planifiées individuellement avec votre moniteur, y compris en dehors de ces plages si possible.",
  },
];

export default function FaqPage() {
  return (
    <>
      <HeroSection
        title="Foire Aux Questions"
        subtitle="Trouvez les réponses aux interrogations les plus fréquentes concernant nos formations et services."
        imageUrl="https://placehold.co/1920x800.png"
        imageAlt="Question marks background"
        imageHint="question marks"
      />
      <div className="container mx-auto px-4 py-12 md:py-16 animate-fade-in-up">
        <SectionTitle
          title="Questions Fréquentes"
          subtitle="Nous avons compilé ici les réponses aux questions que vous vous posez le plus souvent."
          centered
        />
        <div className="max-w-3xl mx-auto animate-fade-in-up animation-delay-200ms">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <AccordionItem 
                value={`item-${index}`} 
                key={index}
                className={cn(
                  "animate-fade-in-up",
                  `animation-delay-${index * 100}ms` // Stagger accordion items
                )}
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground whitespace-pre-line">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="text-center mt-12 animate-fade-in-up animation-delay-400ms">
          <p className="text-lg text-muted-foreground">
            Vous ne trouvez pas la réponse à votre question ?
          </p>
          <a href="/contact" className="text-primary hover:underline font-semibold">
            Contactez-nous directement !
          </a>
        </div>
      </div>
    </>
  );
}
