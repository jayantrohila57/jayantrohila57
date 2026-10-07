import {
  AboutTeaserSection,
  ContactSection,
  FinalCtaSection,
} from "@/components/scenes/contact-section";
import { CurrentFocusSection } from "@/components/scenes/current-focus-section";
import { EngineeringSection } from "@/components/scenes/engineering-section";
import { ExperienceSection } from "@/components/scenes/experience-section";
import { ExperimentsSection } from "@/components/scenes/experiments-section";
import { SelectedWorkSection } from "@/components/scenes/selected-work-section";
import { StackSection } from "@/components/scenes/stack-section";

/** Homepage IA (Efferd block map): work → engineering → stack → focus → experiments → experience → about → contact → CTA. */
export function HomeBelowFold() {
  return (
    <div className="[contain-intrinsic-size:auto_1200px] [content-visibility:auto]">
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
