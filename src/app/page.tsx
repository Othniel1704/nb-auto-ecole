
import Link from "next/link";
import Image from "next/image";
import { Button} from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Users, Award, MessageSquare, MapPin, Phone, Mail, Clock, Car, ShieldCheck, TrendingUp, BookOpen, Smile, CreditCard, Accessibility, CalendarClock, Presentation, Star } from "lucide-react";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionTitle } from "@/components/ui/section-title";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="NB AUTO ÉCOLE DE LA MAIRIE"
        subtitle="Votre partenaire pour la réussite de votre permis de conduire à Vigneux-sur-Seine."
        imageUrl="https://placehold.co/1920x800.png"
        imageAlt="Driving school hero image"
        imageHint="driving road"
        ctaText="Découvrir nos formations"
        ctaLink="#formations"
      />

      {/* Services/Courses Highlight - Moved Up */}
      <section id="formations" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Nos Formations Phares"
            subtitle="Des programmes adaptés à vos besoins pour apprendre à conduire en toute confiance."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              { title: "Permis B", description: "La formation classique pour votre permis voiture.", icon: <Car className="h-12 w-12 text-primary mb-4" />, link: "/courses#permis-b" },
              { title: "Conduite Accompagnée", description: "Une expérience progressive dès 15 ans.", icon: <Users className="h-12 w-12 text-primary mb-4" />, link: "/courses#conduite-accompagnee" }, 
              { title: "Permis Boîte Auto", description: "Apprentissage simplifié sur véhicule automatique.", icon: <ShieldCheck className="h-12 w-12 text-primary mb-4" />, link: "/formations-tarifs#permis-b" }, 
            ].map((service) => (
              <Card key={service.title} className="text-center hover:shadow-xl transition-shadow duration-300 group">
                <CardHeader className="items-center">
                  {service.icon}
                  <CardTitle className="text-xl group-hover:text-primary md:text-2xl transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 h-12">{service.description}</CardDescription> {}
                  <Button asChild variant="link" className="text-primary hover:text-primary/80">
                     <Link href={service.link}>Détails <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/formations-tarifs">Voir toutes nos formations et tarifs</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section id="avantages" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Pourquoi Choisir NB AUTO ÉCOLE ?"
            subtitle="Nous nous engageons à vous offrir une expérience d'apprentissage de qualité supérieure."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Certification Qualiopi", description: "Gage de notre engagement pour une formation de qualité, auditée et reconnue.", icon: <Award className="h-12 w-12 text-primary mb-4" /> },
              { title: "Moniteurs Experts", description: "Une équipe de moniteurs diplômés d'État, patients et pédagogues, dédiés à votre succès.", icon: <Users className="h-12 w-12 text-primary mb-4" /> },
              { title: "Suivi Personnalisé", description: "Un accompagnement sur mesure, adapté à votre rythme et à vos besoins spécifiques.", icon: <CheckCircle className="h-12 w-12 text-primary mb-4" /> },
              { title: "Objectif Réussite Élevé", description: "Nos méthodes éprouvées visent à maximiser vos chances de succès aux examens.", icon: <TrendingUp className="h-12 w-12 text-primary mb-4" /> },
              { title: "Véhicules Modernes", description: "Apprenez à conduire sur des véhicules récents, sécurisés et bien entretenus.", icon: <Car className="h-12 w-12 text-primary mb-4" /> },
              { title: "Pédagogie Positive", description: "Un environnement d'apprentissage bienveillant pour progresser en toute confiance.", icon: <Smile className="h-12 w-12 text-primary mb-4" /> },
              { title: "Facilités de Paiement", description: "Plusieurs options de paiement pour s'adapter à votre budget.", icon: <CreditCard className="h-12 w-12 text-primary mb-4" /> },
              { title: "Accès Facile", description: "Parking à proximité et bien desservi par les transports en commun.", icon: <Accessibility className="h-12 w-12 text-primary mb-4" /> },
              { title: "Horaires Flexibles", description: "Des horaires d'ouverture étendus et des leçons adaptables à vos disponibilités.", icon: <CalendarClock className="h-12 w-12 text-primary mb-4" /> },
              { title: "Salle de Code Moderne", description: "Un espace dédié et équipé des derniers outils pour l'apprentissage du code.", icon: <Presentation className="h-12 w-12 text-primary mb-4" /> },
              { title: "Label École Qualité", description: "Reconnue pour la qualité de son enseignement et ses services.", icon: <Star className="h-12 w-12 text-primary mb-4" /> },
            ].map((avantage) => (
              <Card key={avantage.title} className="text-center hover:shadow-xl transition-shadow duration-300 group">
                <CardHeader className="items-center">
                  {avantage.icon}
                  <CardTitle className="text-xl group-hover:text-primary md:text-2xl transition-colors">{avantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{avantage.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Snippet */}
      <section id="about-snippet" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Bienvenue chez NB AUTO ÉCOLE"
            subtitle="L'auto-école de la Mairie à Vigneux-sur-Seine, dédiée à votre succès sur la route."
            centered
          />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://placehold.co/600x450.png"
                alt="NB Auto École de la Mairie - locaux"
                width={600}
                height={450}
                className="rounded-lg shadow-lg"
                data-ai-hint="driving instructor"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                NB AUTO ÉCOLE DE LA MAIRIE, c'est l'engagement d'une formation de qualité pour votre réussite. Située à Vigneux-sur-Seine, notre auto-école met l'accent sur la transparence, la confiance et un accompagnement personnalisé.
              </p>
              <p className="text-lg text-muted-foreground">
                Nous sommes fiers de notre approche pédagogique et de nos certifications qui attestent de notre sérieux et de notre expertise.
              </p>

              {/* Contact Info & Highlights Quick View */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <Card className="bg-secondary">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg md:text-xl"><MapPin className="mr-2 h-5 w-5 text-primary"/>Coordonnées</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-muted-foreground">
                    <p className="flex items-center"><MapPin className="mr-2 h-4 w-4 opacity-75"/>50 B Rue Pierre Marin, 91270 Vigneux-sur-Seine</p>
                    <p className="flex items-center"><Phone className="mr-2 h-4 w-4 opacity-75"/>01.69.56.10.70</p>
                    <p className="flex items-center"><Mail className="mr-2 h-4 w-4 opacity-75"/>nbcontact.conduite@gmail.com</p>
                  </CardContent>
                </Card>

                <Card className="bg-secondary">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg md:text-xl"><Clock className="mr-2 h-5 w-5 text-primary"/>Horaires Bureau</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-1 text-xs text-muted-foreground">
                    <p>Lundi : 09h-12h, 14h-19h</p>
                    <p>Mardi : 09h-12h, 14h-19h</p>
                    <p>Mercredi : 09h-12h, 14h-19h</p>
                    <p>Jeudi : 09h-12h, 14h-19h</p>
                    <p>Vendredi : 09h-12h, 14h-19h</p>
                    <p>Samedi : 09h-16h</p>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-6">
                <Button asChild size="lg" className="w-full md:w-auto">
                  <Link href="/about">En savoir plus sur nous</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Snippet */}
      <section id="testimonials" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Ce que disent nos élèves"
            subtitle="Découvrez les témoignages de ceux qui nous ont fait confiance."
            centered
          />
          <div className="grid md:grid-cols-2 gap-8">
            {[ 
              { quote: "Une équipe formidable et très professionnelle. J'ai obtenu mon permis rapidement grâce à leurs conseils !", author: "Sophie D." },
              { quote: "Très bonne auto-école, les moniteurs sont super sympas et professionnels. Je recommande vivement !", author: "Marc L." },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-background">
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
          <div className="mt-12 md:mt-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Où nous trouver ?</h3>
            <div className="aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2633.300281555901!2d2.414217276348222!3d48.69974127131108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6750b252a14eb%3A0x8108fcf2a0598b66!2sNb%20auto%20%C3%A9cole%20de%20la%20mairie!5e0!3m2!1sfr!2sfr!4v1747643808019!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte de localisation NB Auto École de la Mairie"
              ></iframe>
            </div>
            <div className="mt-8 text-center">
              <Link href="https://auto-ecole.codesrousseau.fr/connexion" target="_blank" rel="noopener noreferrer" className="text-lg underline hover:no-underline hover:text-accent-foreground transition-colors">Accès à l&apos;Espace Élève Codes Rousseau</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

    