"use client";

import type { ReactNode } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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
    <section className="relative bg-secondary text-secondary-foreground py-16 md:py-24 lg:py-32">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
          className="opacity-85"
          data-ai-hint={imageHint}
        />
      )}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary animate-fadeInUp">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
            {subtitle}
          </p>
        )}
        {ctaText && ctaLink && (
          <Button asChild size="lg" className="animate-fadeInUp animation-delay-400 bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href={ctaLink}>{ctaText}</Link>
          </Button>
        )}
        {children && <div className="mt-8 animate-fadeInUp animation-delay-600">{children}</div>}
      </div>
      <style jsx>{`
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease-out forwards;
          opacity: 0; /* Start hidden */
        }
      `}</style>
    </section>
  );
}
