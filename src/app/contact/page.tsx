import { Suspense } from 'react';
import { ContactForm } from "@/components/ContactForm";
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { HeroSection } from "@/components/ui/hero-section";
import { cn } from '@/lib/utils';

function ContactFormWrapper() {
  return <ContactForm />;
}

export default function ContactPage() {
  const address = "50 B Rue Pierre Marin, 91270 Vigneux-sur-Seine";
  const mapQuery = encodeURIComponent(address);
  const mapUrl = `https://maps.google.com/maps?q=${mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <>
    <HeroSection
        title="Contactez-Nous"
        subtitle="Nous sommes à votre écoute pour toute question, demande d'information ou inscription."
        imageUrl="https://images.pexels.com/photos/7433831/pexels-photo-7433831.jpeg"
        imageAlt="Contact et support client"
        imageHint="customer support"
      />
    <div className="container mx-auto px-4 py-12 md:py-16 animate-fade-in-up">
      <SectionTitle
        title="Prendre Contact avec NB AUTO ÉCOLE DE LA MAIRIE"
        subtitle="Remplissez le formulaire ci-dessous ou utilisez nos coordonnées directes. Nous vous répondrons dans les meilleurs délais."
      />

      <div className="grid md:grid-cols-2 gap-12">
        <div className="animate-fade-in-up animation-delay-200ms">
          <h3 className="text-2xl font-semibold text-foreground mb-6">Envoyez-nous un message</h3>
          {/* Wrap ContactForm in Suspense for searchParams usage */}
          <Suspense fallback={<div>Chargement du formulaire...</div>}>
            <ContactFormWrapper />
          </Suspense>
        </div>

        <div className="space-y-8 animate-fade-in-up animation-delay-400ms">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">Nos Coordonnées</h3>
            <Card className="bg-secondary">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-3 mt-1 text-primary shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Adresse</h4>
                    <p className="text-muted-foreground">{address}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-3 mt-1 text-primary shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Téléphone</h4>
                    <a href="tel:+331 69 56 10 70" className="text-muted-foreground hover:text-primary transition-colors">01 69 56 10 70</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-3 mt-1 text-primary shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">E-mail</h4>
                    <a href="mailto:nbcontact.conduite@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">nbcontact.conduite@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 mr-3 mt-1 text-primary shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Horaires d&apos;ouverture (Accueil & Code)</h4>
                    <p className="text-muted-foreground">Lundi - Vendredi : 09h-12h & 14h-19h</p>
                    <p className="text-muted-foreground">Samedi : 09h-16h</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="animate-fade-in-up animation-delay-600ms">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Notre Localisation</h3>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Carte de ${address}`}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}