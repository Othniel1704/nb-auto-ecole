import Link from "next/link";
import Image from "next/image";
import { Button} from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Users, Award, MessageSquare, MapPin, Phone, Mail, Clock } from "lucide-react";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionTitle } from "@/components/ui/section-title";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="NB AUTO ÉCOLE DE LA MAIRIE"
 subtitle="Votre partenaire pour la réussite de votre permis de conduire à Vigneux-sur-Seine."
        imageUrl="https://placehold.co/1920x1080.png"
        imageAlt="Driving school hero image"
        imageHint="driving road"
        ctaText="Découvrir nos formations"
 ctaLink="#formations"
      />

      {/* About Us Snippet */}
      <section id="about" className="py-16 md:py-24 bg-background">
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
 <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
 NB AUTO ÉCOLE DE LA MAIRIE, c'est l'engagement d'une formation de qualité pour votre réussite. Située à Vigneux-sur-Seine, notre auto-école met l'accent sur la transparence, la confiance et un accompagnement personnalisé.
              </p>
              <p className="text-lg text-muted-foreground">
 Nous sommes fiers de notre taux de réussite et de nos certifications qui attestent de notre sérieux et de notre expertise.
              </p>

 {/* Contact Info & Highlights */}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <Card>
 <CardHeader>
 <CardTitle className="flex items-center"><MapPin className="mr-2 h-5 w-5 text-primary"/>Coordonnées</CardTitle>
 </CardHeader>
 <CardContent className="space-y-2 text-muted-foreground">
 <p className="flex items-center"><MapPin className="mr-2 h-4 w-4 opacity-75"/>91270 Vigneux-sur-Seine</p>
 <p className="flex items-center"><Phone className="mr-2 h-4 w-4 opacity-75"/>01.69.56.10.70</p>
 <p className="flex items-center"><Mail className="mr-2 h-4 w-4 opacity-75"/>nbcontact.conduite@gmail.com</p>
 </CardContent>
 </Card>

 <Card>
 <CardHeader>
 <CardTitle className="flex items-center"><Clock className="mr-2 h-5 w-5 text-primary"/>Horaires Bureau</CardTitle>
 </CardHeader>
 <CardContent className="space-y-2 text-muted-foreground">
 {/* Need actual hours data */}
 <p>Lundi : 10h00 - 12h00, 14h00 - 18h00</p>
 <p>Mardi : 10h00 - 12h00, 14h00 - 18h00</p>
 <p>Mercredi : Fermé</p>
 <p>Jeudi : 10h00 - 12h00, 14h00 - 18h00</p>
 <p>Vendredi : 10h00 - 12h00, 14h00 - 18h00</p>
 <p>Samedi : 10h00 - 12h00</p>
 </CardContent>
 </Card>

 <Card className="md:col-span-2">
 <CardHeader>
 <CardTitle className="flex items-center"><Award className="mr-2 h-5 w-5 text-primary"/>Nos Points Forts</CardTitle>
 </CardHeader>
 <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-muted-foreground">
 <p className="flex items-start"><CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-1"/>Formation de qualité et transparente</p>
 <p className="flex items-start"><CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-1"/>Taux de réussite élevé</p>
 <p className="flex items-start"><CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-1"/>Certifications (Qualiopi)</p>
 <p className="flex items-start"><CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-1"/>Accompagnement personnalisé</p>
 <p className="flex items-start"><CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-1"/>Véhicules conformes et entretenus</p>
 <p className="flex items-start"><CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-1"/>Démarches administratives prises en charge</p>
 </CardContent>
 </Card>
 </div>
 <Button asChild size="lg" className="mt-6 w-full">
 <Link href="#contact">Nous Contacter</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services/Courses Highlight */}
      <section id="formations" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Nos Formations Phares"
            subtitle="Des programmes adaptés à vos besoins pour apprendre à conduire en toute confiance."
            centered
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[ /* Placeholder descriptions, full details on courses page */
              { title: "Permis B", description: "La formation classique pour votre permis de conduire.", icon: <CheckCircle className="h-12 w-12 text-primary mb-4" />, link: "/courses#permis-b" },
              { title: "Conduite Accompagnée (AAC)", description: "Une expérience progressive dès 15 ans.", icon: <Users className="h-12 w-12 text-primary mb-4" />, link: "/courses#aac" },
              { title: "Permis Boîte Automatique (BEA)", description: "Facilité d'apprentissage sur véhicule automatique.", icon: <Award className="h-12 w-12 text-primary mb-4" />, link: "/courses#bea" },
            ].map((service) => (
              <Card key={service.title} className="text-center hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
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
      <section id="testimonials" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Ce que disent nos élèves"
            subtitle="Découvrez les témoignages de ceux qui nous ont fait confiance."
            centered
          />
          <div className="grid md:grid-cols-2 gap-8">
            {[ /* Placeholder testimonials, more on testimonials page */
              { quote: "Une équipe formidable et très professionnelle. J'ai obtenu mon permis rapidement grâce à leurs conseils !", author: "Sophie D." },
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

 {/* Call to Action & Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à prendre la route ?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins et commencer votre formation à la conduite.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contact">Nous contacter</Link>
          </Button>

 {/* Google Map Embed */}
 <div className="mt-16">
 <h3 className="text-2xl font-bold mb-6">Où nous trouver ?</h3>
 <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
 {/* Replace the src with the actual embed code from Google Maps */}
 <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1dXXXXX!2dXXXXX!3dXXXXX!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5e1f3f3a8f83d%3A0x9a4f1f9c9f3b8c9!2sNB%20AUTO%20%C3%89COLE%20DE%20LA%20MAIRIE!5e0!3m2!1sfr!2sfr!4vYYYYYYYYYY"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
 ></iframe>
 </div>
 <div className="mt-8 text-center">
 <Link href="https://auto-ecole.codesrousseau.fr/connexion" target="_blank" rel="noopener noreferrer" className="text-lg underline hover:no-underline">Accès à l'Espace Élève Codes Rousseau</Link>
 </div>
 </div>
        </div>
      </section>
    </div>
  );
}
