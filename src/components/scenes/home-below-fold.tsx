import {
  AboutTeaserSection,
  ContactSection,
  FinalCtaSection,
} from "@/components/scenes/contact-section";
import { ExperienceSection } from "@/components/scenes/experience-section";
import { SelectedWorkSection } from "@/components/scenes/selected-work-section";
import { SpecializationSection } from "@/components/scenes/specialization-section";

/** Homepage IA: work → specialization → experience → about → contact (detail on /engineering, /experiments). */
export function HomeBelowFold() {
  return (
    <div className="[contain-intrinsic-size:auto_1200px] [content-visibility:auto]">
      <SelectedWorkSection />
      <SpecializationSection />
      <ExperienceSection />
      <AboutTeaserSection />
      <ContactSection />
      <FinalCtaSection />
    </div>
  );
}
