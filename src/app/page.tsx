import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Users, Award, MessageSquare } from "lucide-react";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionTitle } from "@/components/ui/section-title";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="NB AUTO ÉCOLE DE LA MAIRIE"
        subtitle="Votre réussite au permis de conduire est notre priorité. Formation de qualité à Vigneux-sur-Seine."
        imageUrl="https://placehold.co/1920x1080.png"
        imageAlt="Driving school hero image"
        imageHint="driving road"
        ctaText="Découvrir nos formations"
        ctaLink="/courses"
      />

      {/* About Us Snippet */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Bienvenue chez DriveReady"
            subtitle="L'auto-école de la Mairie à Vigneux-sur-Seine, dédiée à votre succès sur la route."
            centered
          />
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="https://placehold.co/600x400.png"
                alt="NB Auto École de la Mairie - locaux"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
                data-ai-hint="modern office"
              />
            </div>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">
                Fondée en Octobre 2024, NB AUTO ÉCOLE DE LA MAIRIE s&apos;engage à offrir une formation complète et personnalisée pour l&apos;obtention du permis de conduire (catégorie B). Nous combinons un enseignement théorique rigoureux du code de la route avec une formation pratique dispensée par des moniteurs diplômés et passionnés.
              </p>
              <p className="text-lg text-muted-foreground">
                Notre mission est de vous accompagner à chaque étape, de l&apos;inscription jusqu&apos;à la réussite de votre examen, dans une ambiance conviviale et professionnelle.
              </p>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Link href="/about">
                  En savoir plus sur nous <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services/Courses Highlight */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Nos Formations Phares"
            subtitle="Des programmes adaptés à vos besoins pour apprendre à conduire en toute confiance."
            centered
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Permis B", description: "Formation complète pour l'examen du permis de conduire catégorie B.", icon: <CheckCircle className="h-12 w-12 text-primary mb-4" />, link: "/courses#permis-b" },
              { title: "Conduite Accompagnée (AAC)", description: "Apprenez à conduire dès 15 ans avec un accompagnateur.", icon: <Users className="h-12 w-12 text-primary mb-4" />, link: "/courses#aac" },
              { title: "Conduite Supervisée", description: "Perfectionnez votre conduite avec un accompagnateur après la formation initiale.", icon: <Award className="h-12 w-12 text-primary mb-4" />, link: "/courses#supervisee" },
            ].map((service) => (
              <Card key={service.title} className="text-center hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-center">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{service.description}</CardDescription>
                  <Button asChild variant="link" className="text-primary hover:text-primary/80">
                     <Link href={service.link}>Détails <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/courses">Voir toutes nos formations</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Snippet */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Ce que disent nos élèves"
            subtitle="Découvrez les témoignages de ceux qui nous ont fait confiance."
            centered
          />
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { quote: "Une équipe pédagogique au top, patiente et à l'écoute. J'ai eu mon permis du premier coup !", author: "Sophie D." },
              { quote: "Très bonne auto-école, les moniteurs sont super sympas et professionnels. Je recommande vivement !", author: "Marc L." },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-secondary">
                <CardContent className="pt-6">
                  <MessageSquare className="h-8 w-8 text-primary mb-4" />
                  <p className="text-muted-foreground italic mb-4">&quot;{testimonial.quote}&quot;</p>
                  <p className="font-semibold text-foreground">- {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link href="/testimonials">
                Lire plus d&apos;avis <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

       {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à prendre la route ?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins et commencer votre formation à la conduite.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contact">Nous contacter</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
