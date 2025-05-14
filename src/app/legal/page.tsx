import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeroSection } from "@/components/ui/hero-section";

export default function LegalPage() {
  return (
    <>
    <HeroSection
        title="Informations Légales"
        subtitle="Consultez nos mentions légales et notre politique de confidentialité."
        imageUrl="https://placehold.co/1920x800.png"
        imageAlt="Legal documents gavel"
        imageHint="legal documents"
      />
    <div className="container mx-auto px-4 py-12 md:py-16">
      <SectionTitle
        title="Mentions Légales & Politique RGPD"
        subtitle="Informations relatives à l'éditeur du site et à la protection de vos données personnelles."
        centered
      />

      <div className="space-y-12">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl">Mentions Légales</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <section>
              <h3 className="font-semibold text-lg text-foreground mb-2">1. Éditeur du site</h3>
              <p><strong>Nom de l’entreprise :</strong> NB AUTO ÉCOLE DE LA MAIRIE</p>
              <p><strong>Forme juridique :</strong> (À préciser, ex: SAS, SARL, EI)</p>
              <p><strong>Adresse :</strong> 50 B Rue Pierre Marin, 91270 Vigneux-sur-Seine</p>
              <p><strong>Téléphone :</strong> (À préciser)</p>
              <p><strong>Email :</strong> (À préciser)</p>
              <p><strong>SIRET :</strong> (À préciser)</p>
              <p><strong>Numéro d’agrément préfectoral :</strong> (À préciser)</p>
              <p><strong>Responsable de la publication :</strong> (Nom du responsable)</p>
            </section>
            <section>
              <h3 className="font-semibold text-lg text-foreground mb-2">2. Hébergement</h3>
              <p><strong>Hébergeur :</strong> (Nom de l'hébergeur)</p>
              <p><strong>Adresse de l'hébergeur :</strong> (Adresse de l'hébergeur)</p>
              <p><strong>Téléphone de l'hébergeur :</strong> (Téléphone de l'hébergeur)</p>
            </section>
            <section>
              <h3 className="font-semibold text-lg text-foreground mb-2">3. Propriété intellectuelle</h3>
              <p>L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques. La reproduction de tout ou partie de ce site sur un support électronique quel qu&apos;il soit est formellement interdite sauf autorisation expresse du directeur de la publication.</p>
            </section>
             <section>
              <h3 className="font-semibold text-lg text-foreground mb-2">4. Crédits</h3>
              <p><strong>Conception et réalisation du site :</strong> Firebase Studio</p>
              <p><strong>Photographies :</strong> (À préciser, ex: NB AUTO ÉCOLE DE LA MAIRIE, Placehold.co)</p>
            </section>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl">Politique de Confidentialité (RGPD)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <section>
              <h3 className="font-semibold text-lg text-foreground mb-2">1. Collecte des données personnelles</h3>
              <p>Les informations personnelles recueillies dans le cadre du formulaire de contact ou de demande d'inscription sont destinées à NB AUTO ÉCOLE DE LA MAIRIE pour la gestion de votre demande. Elles ne sont en aucun cas transmises à des tiers.</p>
              <p>Les données collectées sont : nom, prénom, adresse e-mail, numéro de téléphone (facultatif), formation souhaitée (facultatif), et le contenu de votre message.</p>
            </section>
            <section>
              <h3 className="font-semibold text-lg text-foreground mb-2">2. Utilisation des données</h3>
              <p>Les données collectées sont utilisées pour :</p>
              <ul className="list-disc list-inside ml-4">
                <li>Répondre à vos demandes d'information.</li>
                <li>Gérer votre inscription et votre parcours de formation.</li>
                <li>Vous envoyer des informations relatives à nos services (si vous y consentez).</li>
              </ul>
            </section>
            <section>
              <h3 className="font-semibold text-lg text-foreground mb-2">3. Durée de conservation des données</h3>
              <p>Vos données personnelles sont conservées pendant la durée nécessaire au traitement de votre demande et à la gestion de la relation commerciale, puis archivées conformément aux obligations légales.</p>
            </section>
            <section>
              <h3 className="font-semibold text-lg text-foreground mb-2">4. Vos droits</h3>
              <p>Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression, d&apos;opposition, de limitation du traitement et de portabilité de vos données personnelles.</p>
              <p>Pour exercer ces droits, vous pouvez nous contacter par e-mail à (adresse e-mail RGPD) ou par courrier à l&apos;adresse postale de l&apos;auto-école, en joignant une copie de votre pièce d&apos;identité.</p>
            </section>
            <section>
              <h3 className="font-semibold text-lg text-foreground mb-2">5. Cookies</h3>
              <p>Ce site peut utiliser des cookies pour améliorer l'expérience utilisateur et réaliser des statistiques de visite (ex: Google Analytics). Vous pouvez configurer votre navigateur pour refuser les cookies. (Plus de détails à ajouter si des cookies spécifiques sont utilisés).</p>
              <p>Nous utilisons des cookies strictement nécessaires au fonctionnement du site. Pour les cookies analytiques ou publicitaires, votre consentement sera recueilli au préalable.</p>
            </section>
             <section>
              <h3 className="font-semibold text-lg text-foreground mb-2">6. Sécurité</h3>
              <p>NB AUTO ÉCOLE DE LA MAIRIE s&apos;engage à prendre toutes les précautions utiles pour préserver la sécurité de vos données personnelles et, notamment, empêcher qu&apos;elles soient déformées, endommagées, ou que des tiers non autorisés y aient accès.</p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
    </>
  );
}
