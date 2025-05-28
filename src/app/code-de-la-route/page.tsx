import React from 'react';
import { HeroSection } from "@/components/ui/hero-section";
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";

const CodeDeLaRoutePage: React.FC = () => {
  const sections = [
    {
      title: "La Signalisation",
      content: "Maîtrisez tous les panneaux et marquages routiers",
      image: "https://images.pexels.com/photos/5644439/pexels-photo-5644439.jpeg"
    },
    {
      title: "Les Règles de Priorité",
      content: "Comprendre qui passe en premier et pourquoi",
      image: "https://images.pexels.com/photos/4391480/pexels-photo-4391480.jpeg"
    },
    {
      title: "La Conduite de Nuit",
      content: "Les spécificités de la conduite nocturne",
      image: "https://images.pexels.com/photos/3737094/pexels-photo-3737094.jpeg"
    }
  ];

  return (
    <>
      <HeroSection
        title="Code de la Route"
        subtitle="Préparez-vous efficacement à l'examen du code de la route"
        imageUrl="https://images.pexels.com/photos/7015865/pexels-photo-7015865.jpeg"
        imageAlt="Panneaux de signalisation"
        imageHint="traffic signs"
      />
      <div className="container mx-auto px-4 py-12">
        <SectionTitle
          title="Formation au Code de la Route"
          subtitle="Une préparation complète pour réussir votre examen théorique"
          centered
        />
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {sections.map((section, index) => (
            <Card 
              key={index}
              className={cn(
                "overflow-hidden hover:shadow-lg transition-all duration-300",
                "animate-fade-in-up",
                `animation-delay-${index * 200}ms`
              )}
            >
              <div className="relative h-48">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{section.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative">
            <Image
              src="https://images.pexels.com/photos/7433822/pexels-photo-7433822.jpeg"
              alt="Apprentissage du code"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24">
              <Image
                src="https://images.pexels.com/photos/5644439/pexels-photo-5644439.jpeg"
                alt="Feu tricolore décoratif"
                width={96}
                height={96}
                className="rounded-full border-4 border-background"
              />
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Notre Méthode d'Apprentissage</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Cours en salle avec moniteur expérimenté</li>
              <li>• Tests en ligne illimités</li>
              <li>• Séries thématiques ciblées</li>
              <li>• Suivi personnalisé de votre progression</li>
              <li>• Correction détaillée de vos erreurs</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CodeDeLaRoutePage;