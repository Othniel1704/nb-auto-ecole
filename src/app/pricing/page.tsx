import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, Info } from "lucide-react";
import { HeroSection } from "@/components/ui/hero-section";

const pricingData = [
  // Permis B Boîte Manuelle
  { 
    category: "Permis B (Boîte Manuelle)", 
    service: "Forfait 20h sans code", 
    price: "1180€", 
    features: [
      "Gestion administrative",
      "Livret numérique",
      "20h de conduite (50min)",
      "Accompagnement examen pratique",
      "1 disque A"
    ] 
  },
  { 
    category: "Permis B (Boîte Manuelle)", 
    service: "Forfait 20h avec code", 
    price: "1300€", 
    features: [
      "Gestion administrative",
      "Code en ligne (3 mois)",
      "Code en salle (3 mois)",
      "20h de conduite",
      "Accompagnement examen",
      "1 disque A"
    ] 
  },
  { 
    category: "Permis B (Boîte Manuelle)", 
    service: "Leçon de conduite supplémentaire", 
    price: "60€/50min", 
    features: [] 
  },

  // Permis B Boîte Automatique
  { 
    category: "Permis B (Boîte Automatique)", 
    service: "Forfait 13h sans code", 
    price: "860€", 
    features: [
      "Gestion administrative",
      "Livret numérique",
      "13h de conduite",
      "Accompagnement examen",
      "1 disque A"
    ] 
  },
  { 
    category: "Permis B (Boîte Automatique)", 
    service: "Forfait 13h avec code", 
    price: "970€", 
    features: [
      "Gestion administrative",
      "Code en ligne (3 mois)",
      "Code en salle (3 mois)",
      "13h de conduite",
      "Accompagnement examen",
      "1 disque A"
    ] 
  },
  { 
    category: "Permis B (Boîte Automatique)", 
    service: "Forfait 20h avec code", 
    price: "1300€", 
    features: [
      "Gestion administrative",
      "Code en ligne (3 mois)",
      "Code en salle (3 mois)",
      "20h de conduite",
      "Accompagnement examen",
      "1 disque A"
    ] 
  },
  { 
    category: "Permis B (Boîte Automatique)", 
    service: "Leçon de conduite supplémentaire", 
    price: "60€/50min", 
    features: [] 
  },

  // Conduite Accompagnée (AAC)
  { 
    category: "Conduite Accompagnée (AAC)", 
    service: "Boîte Manuelle", 
    price: "1595€", 
    features: [
      "Code complet (3 mois)",
      "20h de conduite",
      "1 RV préalable (2h)",
      "2 RV pédagogiques (3h)",
      "Accompagnement examen",
      "1 disque AAC"
    ] 
  },
  { 
    category: "Conduite Accompagnée (AAC)", 
    service: "Boîte Automatique", 
    price: "1350€", 
    features: [
      "Code complet (3 mois)",
      "13h de conduite",
      "1 RV préalable (2h)",
      "2 RV pédagogiques (3h)",
      "Accompagnement examen",
      "1 disque AAC"
    ] 
  },

  // Formation Post-Permis
  { 
    category: "Perfectionnement", 
    service: "Formation Post-Permis", 
    price: "350€", 
    features: [
      "7h de formation en salle",
      "Attestation officielle",
      "Gestion de dossier",
      "Réduction période probatoire"
    ] 
  },

  // Prestations à l'unité
  { 
    category: "Services Annexes", 
    service: "Évaluation de départ (voiture)", 
    price: "60€", 
    features: [] 
  },
  { 
    category: "Services Annexes", 
    service: "Gestion administrative", 
    price: "90€", 
    features: [] 
  },
  { 
    category: "Services Annexes", 
    service: "Accompagnement examen pratique", 
    price: "60€", 
    features: [] 
  },
  { 
    category: "Services Annexes", 
    service: "Code en ligne (3 mois)", 
    price: "30€", 
    features: [] 
  },
  { 
    category: "Services Annexes", 
    service: "Rendez-vous pédagogique (3h)", 
    price: "180€", 
    features: [] 
  }
];

export default function PricingPage() {
  return (
    <>
    <HeroSection
        title="Nos Tarifs Transparents"
        subtitle="Des solutions de formation à la conduite adaptées à votre budget, sans surprises."
        imageUrl="https://placehold.co/1920x800.png"
        imageAlt="Piggy bank with coins"
        imageHint="money savings"
      />
    <div className="container mx-auto px-4 py-12 md:py-16">
      <SectionTitle
        title="Grille Tarifaire"
        subtitle="Découvrez nos différentes formules et options pour obtenir votre permis de conduire."
        centered
      />

      <Card className="mb-12 shadow-lg">
        <CardHeader>
          <CardTitle>Détail des Prestations</CardTitle>
          <CardDescription>Tous nos tarifs sont TTC. Des facilités de paiement peuvent être proposées, n&apos;hésitez pas à nous consulter.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[30%]">Catégorie</TableHead>
                <TableHead className="w-[40%]">Prestation</TableHead>
                <TableHead className="text-right">Prix</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pricingData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.category}</TableCell>
                  <TableCell>
                    {item.service}
                    {item.features && item.features.length > 0 && (
                        <ul className="mt-1 text-xs text-muted-foreground list-disc list-inside">
                            {item.features.map((feature, fIndex) => <li key={fIndex}>{feature}</li>)}
                        </ul>
                    )}
                  </TableCell>
                  <TableCell className="text-right font-semibold text-accent">{item.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="bg-secondary">
          <CardHeader>
            <CardTitle className="flex items-center"><CheckCircle className="h-6 w-6 mr-2 text-green-500" />Ce qui est inclus</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Suivi pédagogique personnalisé par des moniteurs diplômés.</li>
              <li>Véhicules modernes et entretenus.</li>
              <li>Salles de code climatisées et équipées.</li>
              <li>Conseils et accompagnement pour les démarches administratives.</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-secondary">
          <CardHeader>
            <CardTitle className="flex items-center"><Info className="h-6 w-6 mr-2 text-blue-500" />Informations importantes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Les tarifs sont susceptibles d&apos;évoluer. Consultez-nous pour un devis personnalisé.</li>
              <li>L&apos;évaluation de départ (obligatoire) est facturée 50€.</li>
              <li>Modalités de paiement : nous consulter pour les facilités de paiement.</li>
              <li>Pour les forfaits, toute heure non effectuée n&apos;est pas remboursable.</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <SectionTitle title="Une question sur nos tarifs ?" subtitle="N'hésitez pas à nous contacter pour plus d'informations ou pour un devis personnalisé." centered/>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href="/contact">Demander un devis</Link>
        </Button>
      </div>
    </div>
    </>
  );
}
