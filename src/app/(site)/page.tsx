import { HeroSection } from "@/components/hero";
import { BlogsSection } from "@/components/blogs-section";
import { FeatureSection } from "@/components/feature-section";
import { Integrations } from "@/components/integrations";
import { ContactSection } from "@/components/contact-section";
import { Contact } from "@/components/contact";
import { CallToAction } from "@/components/cta";
import {
  PortfolioAboutSection,
  PortfolioExperienceSection,
  PortfolioFocusSection,
} from "@/components/portfolio-home-sections";

export default function HomePage() {
  return (
    <div className="mx-auto min-h-dvh w-full max-w-5xl border-x bg-background">
      <HeroSection />
      <PortfolioFocusSection />
      <BlogsSection />
      <FeatureSection />
      <Integrations />
      <PortfolioExperienceSection />
      <PortfolioAboutSection />
      <section className="space-y-8 py-12">
        <div className="flex justify-center px-4">
          <ContactSection />
        </div>
        <Contact />
        <CallToAction />
      </section>
    </div>
  );
}
