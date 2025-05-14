
import Link from "next/link";
import { CarFront, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted text-muted-foreground py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Link href="/" className="flex items-center gap-2 mb-4" prefetch={false}>
            <CarFront className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">DriveReady</span>
          </Link>
          <p className="text-sm">
            NB AUTO ÉCOLE DE LA MAIRIE - Formation à la conduite automobile depuis Octobre 2024.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Contactez-nous</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <MapPin className="h-5 w-5 mr-2 mt-0.5 shrink-0 text-primary" />
              <span>50 B Rue Pierre Marin, 91270 Vigneux-sur-Seine</span>
            </li>
            <li className="flex items-center">
              <Phone className="h-5 w-5 mr-2 shrink-0 text-primary" />
              <a href="tel:+33000000000" className="hover:text-primary transition-colors">00 00 00 00 00 (Placeholder)</a>
            </li>
            <li className="flex items-center">
              <Mail className="h-5 w-5 mr-2 shrink-0 text-primary" />
              <a href="mailto:contact@nbautoecolemairie.fr" className="hover:text-primary transition-colors">contact@nbautoecolemairie.fr (Placeholder)</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Liens utiles</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/courses" className="hover:text-primary transition-colors">Nos formations</Link></li>
            <li><Link href="/pricing" className="hover:text-primary transition-colors">Nos tarifs</Link></li>
            <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            <li><Link href="/legal" className="hover:text-primary transition-colors">Mentions légales & RGPD</Link></li>
             <li><Link href="/seo-tools" className="hover:text-primary transition-colors">SEO Tools (Admin)</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-8 border-t border-border text-center text-sm">
        <p>&copy; {currentYear} DriveReady - NB AUTO ÉCOLE DE LA MAIRIE. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
