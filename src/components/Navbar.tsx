
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2259079398.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1066292624.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2231036138.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1899752081.

"use client";

import Link from "next/link";
import { CarFront, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { HeroSection } from "./ui/hero-section";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "L’auto-école" },
  { href: "/courses", label: "Formation"},
  { href: "/formations-tarifs", label: "Formules" },
  { href: "/labels", label: "Labels " },
  { href: "/testimonials", label: "Avis" },
  { href: "/faq", label: "FAQ" },
  { href: "/news", label: "Actualités" },
  { href: "/contact", label: "Contact" },
  // { href: "/seo-tools", label: "SEO Tools (Admin)" }, 
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) {
    return null; 
  }

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <nav
      className={cn(
        "flex items-center gap-4 lg:gap-6",
        mobile
          ? "flex-col space-y-2 pt-6"
          : "hidden md:flex"
      )}
    >
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={() => mobile && setIsMobileMenuOpen(false)}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === item.href
              ? "text-primary"
              : "text-muted-foreground hover:underline underline-offset-4",
            mobile && "text-lg"
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
 <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
            <img src="/images/logo.png" alt="logo" className="h-7 w-7 " />
            <span className="text-lg font-bold text-primary">NB AUTO ÉCOLE</span>
        </Link>

        <div className="hidden md:flex mr-3">
          <NavLinks />
        </div>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center p-4 border-b">
                   <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
 <img src="/images/logo.png" alt="logo" className="h-6 w-6" />
                      <span className="text-lg font-bold text-primary">NB AUTO ÉCOLE</span>
                   </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Fermer le menu</span>
                  </Button>
                </div>
                <div className="p-4">
                 <NavLinks mobile />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
