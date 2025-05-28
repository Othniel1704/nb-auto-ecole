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
          priority
        />
      )}
      
      {/* Animated Traffic Light */}
      <div className="absolute top-10 right-10 hidden lg:block animate-float">
        <div className="traffic-light">
          <div className="traffic-light-lamp traffic-light-red"></div>
          <div className="traffic-light-lamp traffic-light-yellow"></div>
          <div className="traffic-light-lamp traffic-light-green"></div>
        </div>
      </div>

      {/* Animated Road Signs */}
      <div className="absolute left-10 top-1/4 hidden lg:block">
        <div className="road-sign animate-bounce-slow">
          <Image
            src="https://images.pexels.com/photos/5644439/pexels-photo-5644439.jpeg"
            alt="Stop Sign"
            width={80}
            height={80}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Moving Car */}
      <div className="absolute bottom-10 w-full overflow-hidden">
        <div className="moving-car">
          <Image
            src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg"
            alt="Car"
            width={100}
            height={60}
            className="object-contain"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className={cn(
          "text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary",
          "animate-fade-in-up"
        )}>
          {title}
        </h1>
        {subtitle && (
          <p className={cn(
            "text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto",
            "animate-fade-in-up animation-delay-200ms"
          )}>
            {subtitle}
          </p>
        )}
        {ctaText && ctaLink && (
          <Button asChild size="lg" className={cn(
            "animate-fade-in-up animation-delay-400ms button-hover-effect",
            "bg-primary hover:bg-primary/90 text-primary-foreground"
          )}>
            <Link href={ctaLink}>{ctaText}</Link>
          </Button>
        )}
        {children && (
          <div className={cn("mt-8", "animate-fade-in-up animation-delay-600ms")}>
            {children}
          </div>
        )}
      </div>

      <style jsx>{`
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