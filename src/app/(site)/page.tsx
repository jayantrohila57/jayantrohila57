import { FullWidthDivider } from "@/components/full-width-divider";
import { EfferdRail } from "@/components/efferd-rail";
import {
  HeroSection,
  CurrentFocusSection,
} from "@/components/scenes/hero-section";
import { SelectedWorkSection } from "@/components/scenes/selected-work-section";
import { EngineeringSection } from "@/components/scenes/engineering-section";
import { StackSection } from "@/components/scenes/stack-section";
import { ExperimentsSection } from "@/components/scenes/experiments-section";
import { ExperienceSection } from "@/components/scenes/experience-section";
import {
  AboutTeaserSection,
  ContactSection,
  FinalCtaSection,
} from "@/components/scenes/contact-section";

function HomeBandDivider() {
  return (
    <EfferdRail bordered={false} className="py-2">
      <FullWidthDivider />
    </EfferdRail>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HomeBandDivider />
      <SelectedWorkSection />
      <HomeBandDivider />
      <EngineeringSection />
      <HomeBandDivider />
      <StackSection />
      <HomeBandDivider />
      <CurrentFocusSection />
      <HomeBandDivider />
      <ExperimentsSection />
      <HomeBandDivider />
      <ExperienceSection />
      <HomeBandDivider />
      <AboutTeaserSection />
      <HomeBandDivider />
      <ContactSection />
      <FinalCtaSection />
    </>
  );
}
