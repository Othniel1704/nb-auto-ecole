
import Image from "next/image";
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Building, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <SectionTitle
        title="À Propos de NB AUTO ÉCOLE DE LA MAIRIE"
        subtitle="Votre partenaire de confiance pour l'apprentissage de la conduite à Vigneux-sur-Seine."
        centered
      />

      <section className="mb-12 md:mb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Image
            src="https://placehold.co/700x500.png"
            alt="Locaux de NB Auto École de la Mairie"
            width={700}
            height={500}
            className="rounded-lg shadow-xl"
            data-ai-hint="driving school"
          />
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">Notre Histoire</h3>
            <p className="text-muted-foreground mb-4">
              Fondée en Octobre 2024, NB AUTO ÉCOLE DE LA MAIRIE est née de la passion pour l&apos;enseignement de la conduite et du désir d&apos;offrir une formation de qualité supérieure. Située au cœur de Vigneux-sur-Seine, notre auto-école s&apos;engage à former des conducteurs responsables et compétents.
            </p>
            <p className="text-muted-foreground">
              Nous sommes fiers de notre approche pédagogique moderne, de nos installations accueillantes et de nos véhicules récents, assurant une expérience d&apos;apprentissage optimale pour tous nos élèves.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12 md:mb-16">
        <SectionTitle title="Nos Valeurs & Notre Mission" centered />
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-secondary hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out">
            <CardHeader>
              <CardTitle className="flex items-center text-foreground">
                <Heart className="h-6 w-6 mr-2 text-primary" /> Nos Valeurs
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <p><strong>Professionnalisme :</strong> Enseignement rigoureux et suivi personnalisé.</p>
              <p><strong>Patience :</strong> Adaptation au rythme de chaque élève.</p>
              <p><strong>Sécurité :</strong> Priorité absolue à la formation d&apos;un conducteur sûr.</p>
              <p><strong>Transparence :</strong> Informations claires sur nos formations et tarifs.</p>
            </CardContent>
          </Card>
          <Card className="bg-secondary hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out">
            <CardHeader>
              <CardTitle className="flex items-center text-foreground">
                <Target className="h-6 w-6 mr-2 text-primary" /> Notre Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                Notre mission est de vous fournir les compétences, les connaissances et la confiance nécessaires pour devenir un conducteur autonome, responsable et respectueux des autres usagers de la route. Nous visons l&apos;excellence dans la formation à la conduite, en vous accompagnant de l&apos;apprentissage du code jusqu&apos;à l&apos;obtention de votre permis.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <SectionTitle title="Nos Locaux & Véhicules" subtitle="Un environnement d'apprentissage moderne et confortable." centered />
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
              <Building className="h-6 w-6 mr-2 text-primary" /> Nos Locaux
            </h3>
            <p className="text-muted-foreground mb-4">
              Notre auto-école, située au <strong> 50 B Rue Pierre Marin, 91270 Vigneux-sur-Seine</strong>, vous accueille dans des locaux modernes et climatisés. Nous disposons de salles de code équipées des derniers outils pédagogiques pour un apprentissage interactif et efficace.
            </p>
            <Image
              src="/images/IMG_3339.jpeg"
              alt="Salle de code NB Auto École"
              width={600}
              height={400}
              className="rounded-lg shadow-md mb-4"
              data-ai-hint="classroom interior"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
              <Users className="h-6 w-6 mr-2 text-primary" /> Nos Véhicules
            </h3>
            <p className="text-muted-foreground mb-4">
              Nous mettons à votre disposition une flotte de véhicules récents, bien entretenus et équipés pour faciliter votre apprentissage. Tous nos véhicules sont conformes aux normes de sécurité et adaptés à la formation à la conduite.
            </p>
            <Image
              src="https://placehold.co/600x400.png"
              alt="Véhicules de NB Auto École"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
              data-ai-hint="modern cars"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
