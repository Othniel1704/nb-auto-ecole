import { SectionTitle } from "@/components/ui/section-title";
import { TestimonialCard, type Testimonial } from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HeroSection } from "@/components/ui/hero-section";

const testimonialsData: Testimonial[] = [
  {
    name: "Laura P.",
    date: "15 Octobre 2024",
    text: "Une expérience incroyable ! Les moniteurs sont très pédagogues et patients. J'ai eu mon permis B du premier coup grâce à eux. Merci NB Auto École !",
    rating: 5,
    course: "Permis B",
  },
  {
    name: "Julien M.",
    date: "28 Octobre 2024",
    text: "Super auto-école ! L'ambiance est conviviale et les cours de code bien expliqués. La conduite accompagnée m'a vraiment mis en confiance.",
    rating: 5,
    course: "Conduite Accompagnée (AAC)",
  },
  {
    name: "Chloé B.",
    date: "5 Novembre 2024",
    text: "Très satisfaite de ma formation. Les locaux sont propres, les voitures agréables à conduire et l'équipe toujours disponible pour répondre aux questions.",
    rating: 4,
    course: "Permis B - Boîte Automatique",
  },
  {
    name: "Alexandre G.",
    date: "12 Novembre 2024",
    text: "Je recommande cette auto-école. Le suivi est personnalisé et on se sent vraiment accompagné. Le moniteur a su s'adapter à mes difficultés.",
    rating: 5,
    course: "Permis B",
  },
  {
    name: "Manon L.",
    date: "20 Novembre 2024",
    text: "Les cours de code en ligne étaient très pratiques pour réviser à mon rythme. J'ai réussi mon code rapidement !",
    rating: 4,
    course: "Formation Code",
  },
   {
    name: "Thomas R.",
    date: "25 Novembre 2024",
    text: "Après un échec dans une autre auto-école, j'ai repris confiance ici. Les moniteurs ont su identifier mes points faibles et m'aider à progresser. Permis en poche !",
    rating: 5,
    course: "Permis B",
  },
];

export default function TestimonialsPage() {
  return (
    <>
    <HeroSection
        title="La Parole à Nos Élèves"
        subtitle="Découvrez ce que nos anciens élèves pensent de leur expérience chez NB AUTO ÉCOLE DE LA MAIRIE."
        imageUrl="https://placehold.co/1920x800.png"
        imageAlt="Happy students with driving licenses"
        imageHint="happy people"
      />
    <div className="container mx-auto px-4 py-12 md:py-16">
      
      <section id="google-reviews" className="mb-12 md:mb-16">
        <SectionTitle
          title="Nos Avis Google en Direct"
          subtitle="Voyez ce que nos clients disent de nous sur Google !"
          centered
        />
        <div className="elfsight-app-8e6d143d-552a-495d-9a7e-714ed522c452" data-elfsight-app-lazy></div>
      </section>

      <SectionTitle
        title="Avis & Témoignages de nos Élèves"
        subtitle="La satisfaction de nos élèves est notre meilleure publicité. Lisez leurs retours d'expérience."
        centered
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
      <div className="mt-12 text-center">
        <p className="text-lg text-muted-foreground mb-4">Vous aussi, partagez votre expérience !</p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href="https://g.page/r/CWaLWaDy_AiBEBM/review" target="_blank" rel="noopener noreferrer">
            Laisser un avis sur Google
          </Link>
        </Button>
         <p className="text-sm text-muted-foreground mt-2">
            (Nous visons un minimum de 10 avis positifs collectés dans les 6 prochains mois !)
          </p>
      </div>
    </div>
    </>
  );
}
