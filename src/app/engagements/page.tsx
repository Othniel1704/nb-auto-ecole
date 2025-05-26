
import React from 'react';
import { HeroSection } from "@/components/ui/hero-section";
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ShieldCheck, Users, BookOpen, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

const EngagementsPage: React.FC = () => {
  return (
    <>
      <HeroSection
        title="Nos Engagements envers Vous"
        subtitle="Qualité, transparence et sécurité sont au cœur de notre démarche pédagogique."
        imageUrl="https://placehold.co/1920x800.png"
        imageAlt="Poignée de main accord"
        imageHint="handshake agreement"
      />
      <div className="container mx-auto px-4 py-12 md:py-16 animate-fade-in-up">
        <SectionTitle
          title="Notre Promesse : Une Formation de Qualité"
          subtitle="Nous nous engageons à vous offrir un environnement d'apprentissage optimal et un accompagnement personnalisé."
          centered
        />

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up animation-delay-200ms hover:-translate-y-1 duration-300 ease-in-out">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <CheckCircle className="h-6 w-6 mr-2" /> Qualité et Transparence
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Qualité de la formation : transparence et confiance.</li>
                <li>Documentation détaillée fournie à chaque élève.</li>
                <li>Évaluation de départ systématique pour adapter la formation à vos besoins.</li>
                <li>Contrat de formation en double exemplaire pour une clarté totale.</li>
                <li>Remise systématique du règlement intérieur.</li>
                <li>Kit pédagogique complet (livre de code, pack web, livret d’apprentissage).</li>
                <li>Suivi rigoureux de votre assiduité et de vos résultats.</li>
                <li>Fiche de suivi pratique consultable à tout moment.</li>
                <li>Véhicules conformes et entretenus pour votre sécurité et confort.</li>
                <li>Cours assurés par des enseignants diplômés et passionnés.</li>
                <li>Prise en charge de toutes les démarches administratives.</li>
                <li>Bilans de compétences remis régulièrement pour évaluer votre progression.</li>
                <li>Présentation à l’examen dès que le niveau requis est atteint, sans attente inutile.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up animation-delay-400ms hover:-translate-y-1 duration-300 ease-in-out">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <ShieldCheck className="h-6 w-6 mr-2" /> Votre Satisfaction et Sécurité
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Accompagnement en cas de litige grâce à un processus de médiation.</li>
                <li>Garantie financière pour sécuriser votre investissement.</li>
                <li>Rendez-vous post-permis proposé pour consolider vos acquis.</li>
                <li>Documentation sur les enjeux de la formation, liste des enseignants, règlement intérieur, taux de réussite, questionnaires de satisfaction, coordonnées médiateur disponibles sur demande.</li>
                <li>Un questionnaire de satisfaction vous est remis après avoir réussi l’examen pour recueillir vos retours.</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <section className="bg-secondary p-6 md:p-8 rounded-lg shadow-md animate-fade-in-up animation-delay-600ms mb-12">
           <SectionTitle
            title="Nos Partenaires Pédagogiques"
            subtitle="Nous collaborons avec des experts reconnus pour vous offrir les meilleurs outils d'apprentissage."
          />
          <div className="flex items-center justify-center">
            <Card className="max-w-md w-full hover:-translate-y-1 duration-300 ease-in-out hover:shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center text-primary">
                        <BookOpen className="h-6 w-6 mr-2"/> Codes Rousseau
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Nous travaillons en étroite collaboration avec Codes Rousseau, leader des fournisseurs pédagogiques, pour la qualité de leurs outils et supports de formation au code de la route et à la conduite.</p>
                </CardContent>
            </Card>
          </div>
        </section>

        <section className="animate-fade-in-up animation-delay-800ms">
          <SectionTitle
            title="Soumettre une Réclamation"
            subtitle="Votre avis est important pour nous. Si vous souhaitez nous faire part d'une réclamation, veuillez utiliser le formulaire ci-dessous. Nous nous engageons à traiter votre demande dans les meilleurs délais."
            centered
          />
          <div className="bg-card p-4 md:p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
            <iframe 
              src="https://app.kalio-pi.fr/iframe/claim/form/ec6ea68d48ce569e9b59cca6f2d77d3fe4aa1b16010be7i0b2" 
              width="100%" 
              height="550px" 
              style={{ border:'none' }}
              title="Formulaire de réclamation Kalio-pi"
              loading="lazy"
            ></iframe>
          </div>
        </section>

      </div>
    </>
  );
};

export default EngagementsPage;
