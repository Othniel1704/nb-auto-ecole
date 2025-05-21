
"use client";

import type { ReactNode } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  imageAlt?: string;
  imageHint?: string;
  ctaText?: string;
  ctaLink?: string;
  children?: ReactNode;
}

export function HeroSection({
  title,
  subtitle,
  imageUrl,
  imageAlt = "Hero image",
  imageHint,
  ctaText,
  ctaLink,
  children,
}: HeroSectionProps) {
  return (
    <section className="relative bg-secondary text-secondary-foreground py-16 md:py-24 lg:py-32 overflow-hidden">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
          className="opacity-85 hero-bg-image-animate"
          data-ai-hint={imageHint}
          priority // Consider adding priority for LCP images
        />
      )}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className={cn(
          "text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary",
          "animate-fade-in-up" // Uses global animation
        )}>
          {title}
        </h1>
        {subtitle && (
          <p className={cn(
            "text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto",
            "animate-fade-in-up animation-delay-200ms" // Uses global animation and delay
          )}>
            {subtitle}
          </p>
        )}
        {ctaText && ctaLink && (
          <Button asChild size="lg" className={cn(
            "animate-fade-in-up animation-delay-400ms bg-primary hover:bg-primary/90 text-primary-foreground" // Uses global animation and delay
          )}>
            <Link href={ctaLink}>{ctaText}</Link>
          </Button>
        )}
        {children && <div className={cn("mt-8", "animate-fade-in-up animation-delay-600ms")}>{children}</div>}
      </div>
      <style jsx>{`
        /* Removed local fadeInUp and delay classes, they are global now */
        @keyframes subtleZoomPan {
          0% {
            transform: scale(1.05) translate(0%, 0%);
          }
          50% {
            transform: scale(1.1) translate(-1%, 1%);
          }
          100% {
            transform: scale(1.05) translate(1%, -1%);
          }
        }
        .hero-bg-image-animate {
          animation: subtleZoomPan 30s infinite alternate ease-in-out;
        }
      `}</style>
    </section>
  );
}
