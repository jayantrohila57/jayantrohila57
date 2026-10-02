import { Suspense } from "react";
import { HeroSection } from "@/components/scenes/hero-section";
import { HomeBelowFold } from "@/components/scenes/home-below-fold";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Suspense fallback={null}>
        <HomeBelowFold />
      </Suspense>
    </>
  );
}
