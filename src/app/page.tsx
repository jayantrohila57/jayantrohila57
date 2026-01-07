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

export default function HomePage() {
  return (
    <LayoutWrapper>
      <HeroSection />
      <FeaturedProjectsSection />
      <TechStackSection />
      <ExperienceTimelineSection />
      <TestimonialsSection />
      <LatestPostsSection />
      <SocialLinksSection />
    </LayoutWrapper>
  );
}
