import {
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

export function HomeBelowFold() {
  return (
    <div
      className="[contain-intrinsic-size:auto_1200px] [content-visibility:auto]"
    >
      <SelectedWorkSection />
      <EngineeringSection />
      <StackSection />
      <CurrentFocusSection />
      <ExperimentsSection />
      <ExperienceSection />
      <AboutTeaserSection />
      <ContactSection />
      <FinalCtaSection />
    </div>
  );
}
