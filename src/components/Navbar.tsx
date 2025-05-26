
"use client";

import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggleButton } from "./ThemeToggleButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const mainItems = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "L’auto-école" },
  { href: "/formations-tarifs", label: "Formules" },
  { href: "/courses", label: "Formation" },
  { href: "/testimonials", label: "Avis" },
  { href: "/contact", label: "Contact" },
];

const moreItems = [
  { href: "/labels", label: "Labels" },
  { href: "/engagements", label: "Nos Engagements" },
  { href: "/faq", label: "FAQ" },
  { href: "/news", label: "Actualités" },
  
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <img src="/images/logo.png" alt="logo" className="h-7 w-7" />
            <span className="text-lg font-bold text-primary">NB AUTO ÉCOLE</span>
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-9 w-9 md:h-10 md:w-10" disabled />
          </div>
        </div>
      </header>
    );
  }

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <nav className={cn("flex items-center gap-1 lg:gap-2", mobile ? "flex-col space-y-4 pt-6" : "hidden md:flex")}>
      {mainItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={() => mobile && setIsMobileMenuOpen(false)}
          className={cn(
            "px-2.5 py-1 text-sm font-medium rounded-md transition-colors whitespace-nowrap",
            pathname === item.href
              ? "bg-primary/10 text-primary"
              : "text-muted-foreground hover:bg-accent/50",
            mobile && "text-base w-full text-left px-3"
          )}
        >
          {item.label}
        </Link>
      ))}

      <DropdownMenu>
        <DropdownMenuTrigger className="px-2.5 py-1 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-md data-[state=open]:bg-primary/10 data-[state=open]:text-primary focus:outline-none flex items-center gap-1 whitespace-nowrap">
          Plus <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-48 min-w-max" sideOffset={8}>
          {moreItems.map((item) => (
            <DropdownMenuItem key={item.href} asChild className="px-3 py-2">
              <Link
                href={item.href}
                className={cn(
                  "text-sm w-full",
                  pathname === item.href ? "bg-primary/10 text-primary" : ""
                )}
              >
                {item.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 flex-shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
          <img src="/images/logo.png" alt="logo" className="h-9 w-9" />
          <span className="text-lg font-bold text-primary hidden sm:inline">NB AUTO ÉCOLE</span>
        </Link>

        <div className="hidden md:flex items-center gap-2 flex-nowrap">
          <NavLinks />
          <Button 
            asChild 
            variant="default" 
            size="sm" 
            className="ml-2 whitespace-nowrap px-3"
          >
            <Link href="https://auto-ecole.codesrousseau.fr/connexion">Espace élève</Link>
          </Button>
          <ThemeToggleButton />
        </div>

        <div className="flex items-center md:hidden gap-1">
          <ThemeToggleButton />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-[300px]">
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
                <div className="p-4 flex flex-col flex-grow gap-4">
                  <NavLinks mobile />
                  <Button 
                    asChild 
                    variant="default" 
                    className="mt-auto w-full"
                    size="lg"
                  >
                    <Link 
                      href="https://auto-ecole.codesrousseau.fr/connexion" 
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Espace élève
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
