
import Link from "next/link";
import Image from "next/image";
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, ArrowRight } from "lucide-react";
import { HeroSection } from "@/components/ui/hero-section";
import { cn } from "@/lib/utils";

interface NewsArticle {
  id: string;
  title: string;
  date: string;
  summary: string;
  imageUrl: string;
  imageHint?: string;
  category?: string;
}

const newsData: NewsArticle[] = [
  {
    id: "ouverture-auto-ecole",
    title: "Grande Ouverture de NB AUTO ÉCOLE DE LA MAIRIE !",
    date: "Octobre 2024",
    summary: "Nous sommes ravis d'annoncer l'ouverture officielle de NB AUTO ÉCOLE DE LA MAIRIE à Vigneux-sur-Seine. Venez découvrir nos locaux et nos offres de lancement.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "grand opening celebration",
    category: "Événement",
  },
  {
    id: "nouveau-code-route",
    title: "Les dernières évolutions du Code de la Route expliquées",
    date: "Novembre 2024",
    summary: "Le code de la route évolue constamment. Découvrez les derniers changements et comment notre auto-école vous prépare au mieux pour l'examen théorique.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "road signs rules",
    category: "Conseils",
  },
  {
    id: "conduite-hiver",
    title: "Conseils pour une conduite sûre en hiver",
    date: "Décembre 2024",
    summary: "L'hiver approche ! Nos moniteurs partagent leurs meilleurs conseils pour adapter votre conduite aux conditions hivernales et garantir votre sécurité.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "car snow winter",
    category: "Sécurité",
  },
   {
    id: "journee-portes-ouvertes",
    title: "Journée Portes Ouvertes : Venez nous rencontrer !",
    date: "Janvier 2025 (Prévu)",
    summary: "Nous prévoyons une journée portes ouvertes pour vous présenter notre équipe, nos méthodes pédagogiques et répondre à toutes vos questions. Plus d'infos à venir !",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "open house event",
    category: "Événement",
  }
];

export default function NewsPage() {
  return (
    <>
    <HeroSection
        title="Actualités de l'Auto-École"
        subtitle="Restez informé des dernières nouvelles, événements et conseils de NB AUTO ÉCOLE DE LA MAIRIE."
        imageUrl="https://placehold.co/1920x800.png"
        imageAlt="Newspaper and road map"
        imageHint="newspaper information"
      />
    <div className="container mx-auto px-4 py-12 md:py-16 animate-fade-in-up">
      <SectionTitle
        title="Nos Dernières Actualités"
        subtitle="Informations, conseils, événements : tout ce qu'il faut savoir sur votre auto-école et le monde de la conduite."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsData.map((article, index) => (
          <Card 
            key={article.id} 
            className={cn(
              "flex flex-col h-full overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out",
              "animate-fade-in-up",
              index % 3 === 0 && "animation-delay-200ms",
              index % 3 === 1 && "animation-delay-400ms",
              index % 3 === 2 && "animation-delay-600ms"
            )}
          >
            <div className="relative w-full h-48">
             <Image
                src={article.imageUrl}
                alt={article.title}
                layout="fill"
                objectFit="cover"
                data-ai-hint={article.imageHint}
              />
            </div>
            <CardHeader>
              {article.category && <p className="text-sm text-primary font-medium mb-1">{article.category}</p>}
              <CardTitle className="text-xl">{article.title}</CardTitle>
              <div className="flex items-center text-xs text-muted-foreground">
                <CalendarDays className="h-4 w-4 mr-1" />
                {article.date}
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{article.summary}</CardDescription>
            </CardContent>
            <CardFooter>
              {/* In a real app, this would link to a full article page */}
              <Button variant="link" asChild className="text-primary hover:text-primary/80 p-0">
                <Link href={`#`}> 
                  Lire la suite <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      {/* Placeholder for pagination or load more button if many articles */}
      {/* <div className="mt-12 text-center">
        <Button variant="outline">Charger plus d'articles</Button>
      </div> */}
    </div>
    </>
  );
}
