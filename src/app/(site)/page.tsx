import { HeroSection } from "@/components/scenes/hero-section";
import { HomeBelowFold } from "@/components/scenes/home-below-fold";
import { generatePageMetadata } from "@/config/metadata";
import { homePageDescription, homePageTitle } from "@/config/page-seo";

export const metadata = generatePageMetadata({
  title: homePageTitle,
  description: homePageDescription,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HomeBelowFold />
    </>
  );
}
