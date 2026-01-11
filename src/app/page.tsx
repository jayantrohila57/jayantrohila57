import { LayoutWrapper } from "@/components/layout";
import {
  ExperienceTimelineSection,
  FeaturedProjectsSection,
  HeroSection,
  LatestPostsSection,
  SocialLinksSection,
  TechStackSection,
  TestimonialsSection,
} from "@/components/sections/home";
import { Summary } from "@/components/sections/home/summary";
import { getExperiences, getSkills } from "@/sanity/query/queries";

export default async function HomePage() {
  const [experiences, skills] = await Promise.all([
    getExperiences(),
    getSkills(),
  ]);

  console.log(experiences);
  console.log(skills);
  return (
    <LayoutWrapper>
      <HeroSection />
      <Summary />
      <FeaturedProjectsSection />
      <TechStackSection skills={skills} />
      <ExperienceTimelineSection experiences={experiences} />
      <TestimonialsSection />
      <LatestPostsSection />
      <SocialLinksSection />
    </LayoutWrapper>
  );
}
