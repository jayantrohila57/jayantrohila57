import { LayoutWrapper } from "@/components/layout";
import {
  HeroSection,
  FeaturedProjectsSection,
  TechStackSection,
  ExperienceTimelineSection,
  TestimonialsSection,
  LatestPostsSection,
  SocialLinksSection,
} from "@/components/sections/home";
import { Summary } from "@/components/sections/home/summary";

export default function HomePage() {
  return (
    <LayoutWrapper>
      <HeroSection />
      <Summary />
      <FeaturedProjectsSection />
      <TechStackSection />
      <ExperienceTimelineSection />
      <TestimonialsSection />
      <LatestPostsSection />
      <SocialLinksSection />
    </LayoutWrapper>
  );
}
