import { SectionTitle } from "@/components/ui/section-title";
import { SeoForm } from "@/components/SeoForm";
import { HeroSection } from "@/components/ui/hero-section";

export const metadata = {
  title: "SEO Content Generation Tool - DriveReady",
  description: "Utilize AI to generate SEO-optimized content for your web pages.",
};

export default function SeoToolsPage() {
  return (
    <>
      <HeroSection
        title="SEO Content Optimizer"
        subtitle="Leverage AI to enhance your website's search engine visibility."
        imageUrl="https://placehold.co/1920x800.png"
        imageAlt="SEO and AI icons"
        imageHint="seo analytics"
      />
      <div className="container mx-auto px-4 py-12 md:py-16">
        <SectionTitle
          title="AI-Powered SEO Tool"
          subtitle="Generate meta descriptions, keywords, and title tags automatically."
          centered
        />
        <SeoForm />
      </div>
    </>
  );
}
