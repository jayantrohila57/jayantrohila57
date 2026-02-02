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
import {
  getExperiences,
  getPosts,
  getProfile,
  getProjects,
  getSkills,
  getTestimonials,
} from "@/sanity/query/queries";

export default async function HomePage() {
  const [experiences, skills, projects, testimonials, posts, profile] =
    await Promise.all([
      getExperiences(),
      getSkills(),
      getProjects(),
      getTestimonials(),
      getPosts(),
      getProfile(),
    ]);

  return (
    <LayoutWrapper>
      <HeroSection profile={profile} />
      <Summary />
      <FeaturedProjectsSection projects={projects} />
      <TechStackSection skills={skills} />
      <ExperienceTimelineSection experiences={experiences} />
      <TestimonialsSection testimonials={testimonials} />
      <LatestPostsSection posts={posts} />
      <SocialLinksSection social={profile?.social} />
    </LayoutWrapper>
  );
}
