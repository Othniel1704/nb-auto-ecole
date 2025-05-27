import Link from "next/link";
import Image from "next/image";
import { Button} from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Users, Award, MessageSquare, MapPin, Phone, Mail, Clock, Car, ShieldCheck, TrendingUp, BookOpen, Smile, CreditCard, Accessibility, CalendarClock, Presentation, Star } from "lucide-react";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionTitle } from "@/components/ui/section-title";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="NB AUTO ÉCOLE DE LA MAIRIE"
        subtitle="Votre partenaire pour la réussite de votre permis de conduire à Vigneux-sur-Seine."
        imageUrl="https://images.pexels.com/photos/7433835/pexels-photo-7433835.jpeg"
        imageAlt="Jeune conducteur apprenant à conduire"
        imageHint="driving lesson"
        ctaText="Découvrir nos formations"
        ctaLink="/formations-tarifs"
      />

      <section id="formations" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 animate-fade-in-up">
          <SectionTitle
            title="Nos Formations Phares"
            subtitle="Des programmes adaptés à vos besoins pour apprendre à conduire en toute confiance."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Permis B",
                description: "La formation classique pour votre permis voiture.",
                icon: <Car className="h-12 w-12 text-primary mb-4" />,
                link: "/formations-tarifs#permis-b",
                image: "https://images.pexels.com/photos/7433822/pexels-photo-7433822.jpeg"
              },
              {
                title: "Conduite Accompagnée",
                description: "Une expérience progressive dès 15 ans.",
                icon: <Users className="h-12 w-12 text-primary mb-4" />,
                link: "/formations-tarifs#conduite-accompagnee",
                image: "https://images.pexels.com/photos/7433835/pexels-photo-7433835.jpeg"
              },
              {
                title: "Permis Boîte Auto",
                description: "Apprentissage simplifié sur véhicule automatique.",
                icon: <ShieldCheck className="h-12 w-12 text-primary mb-4" />,
                link: "/formations-tarifs#permis-b",
                image: "https://images.pexels.com/photos/7433831/pexels-photo-7433831.jpeg"
              },
            ].map((service, index) => (
              <Card
                key={service.title}
                className={cn(
                  "text-center hover-card-effect group image-hover-zoom",
                  "animate-fade-in-up",
                  index === 0 && "animation-delay-200ms",
                  index === 1 && "animation-delay-400ms",
                  index === 2 && "animation-delay-600ms"
                )}
              >
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <CardHeader className="items-center">
                  {service.icon}
                  <CardTitle className="text-xl group-hover:text-primary md:text-2xl transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 h-12">{service.description}</CardDescription>
                  <Button asChild variant="link" className="text-primary hover:text-primary/80">
                    <Link href={service.link}>Détails <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12 animate-fade-in-up animation-delay-800ms">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/formations-tarifs">Voir toutes nos formations et tarifs</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="avantages" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 animate-fade-in-up">
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
              { title: "Accès Facile", description: "Parking à proximité et bien desservi par les transports en commun.",  icon: <MapPin className="h-12 w-12 text-primary mb-4" /> },
              { title: "Horaires Flexibles", description: "Des horaires d'ouverture étendus et des leçons adaptables à vos disponibilités.", icon: <CalendarClock className="h-12 w-12 text-primary mb-4" /> },
              { title: "Salle de Code Moderne", description: "Un espace dédié et équipé des derniers outils pour l'apprentissage du code.", icon: <Presentation className="h-12 w-12 text-primary mb-4" /> },
              { title: "Label École Qualité", description: "Reconnue pour la qualité de son enseignement et ses services.", icon: <Star className="h-12 w-12 text-primary mb-4" /> },
            ].map((avantage, index) => (
              <Card
                key={avantage.title}
                className={cn(
                  "text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out group",
                  "animate-fade-in-up",
                  `animation-delay-${(index % 3) * 200}ms`
                )}
              >
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

      <section id="contact" className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à prendre la route ?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins et commencer votre formation à la conduite.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-secondary hover:gray /90 text-primary-foreground">
            <Link href="/contact">Nous contacter</Link>
          </Button>

          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <Card className="bg-card text-card-foreground hover:-translate-y-1 transition-all duration-300 ease-in-out animate-fade-in-up animation-delay-200ms">
              <CardHeader>
                <CardTitle className="flex items-center text-lg md:text-xl"><MapPin className="mr-2 h-5 w-5 text-primary"/>Coordonnées</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center"><MapPin className="mr-2 h-4 w-4 opacity-75"/>50 B Rue Pierre Marin, 91270 Vigneux-sur-Seine</p>
                <p className="flex items-center"><Phone className="mr-2 h-4 w-4 opacity-75"/>01.69.56.10.70</p>
                <p className="flex items-center"><Mail className="mr-2 h-4 w-4 opacity-75"/>nbcontact.conduite@gmail.com</p>
              </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground hover:-translate-y-1 transition-all duration-300 ease-in-out animate-fade-in-up animation-delay-400ms">
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

          <div className="mt-12 md:mt-16 animate-fade-in-up animation-delay-600ms">
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