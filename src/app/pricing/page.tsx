import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, Info } from "lucide-react";
import { HeroSection } from "@/components/ui/hero-section";

const pricingData = [
  { category: "Permis B (Boîte Manuelle)", service: "Forfait Classique (Code + 20h conduite)", price: "1250€", features: ["Frais administratifs", "Formation code (salle + en ligne)", "20h de conduite", "1 accompagnement examen pratique"] },
  { category: "Permis B (Boîte Manuelle)", service: "Leçon de conduite supplémentaire", price: "50€/heure", features: [] },
  { category: "Permis B (Boîte Automatique)", service: "Forfait Classique (Code + 13h conduite)", price: "1100€", features: ["Frais administratifs", "Formation code (salle + en ligne)", "13h de conduite", "1 accompagnement examen pratique"] },
  { category: "Permis B (Boîte Automatique)", service: "Leçon de conduite supplémentaire", price: "55€/heure", features: [] },
  { category: "Conduite Accompagnée (AAC)", service: "Forfait Complet (Dès 15 ans)", price: "1450€", features: ["Formation initiale complète (code + conduite)", "2 RDV pédagogiques"] },
  { category: "Formation Code", service: "Forfait Code seul (accès salle + en ligne)", price: "350€", features: ["Accès illimité salle de code", "Tests en ligne", "Livre de code"] },
  { category: "Frais Annexes", service: "Accompagnement examen de conduite (supplémentaire)", price: "50€", features: [] },
  { category: "Frais Annexes", service: "Frais de dossier / démarches ANTS", price: "80€", features: [] },
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
