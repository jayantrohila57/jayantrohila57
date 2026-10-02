import dynamic from "next/dynamic";
import { HeroSection } from "@/components/scenes/hero-section";

const SelectedWorkSection = dynamic(() =>
  import("@/components/scenes/selected-work-section").then(
    (m) => m.SelectedWorkSection,
  ),
);
const EngineeringSection = dynamic(() =>
  import("@/components/scenes/engineering-section").then(
    (m) => m.EngineeringSection,
  ),
);
const StackSection = dynamic(() =>
  import("@/components/scenes/stack-section").then((m) => m.StackSection),
);
const CurrentFocusSection = dynamic(() =>
  import("@/components/scenes/hero-section").then((m) => m.CurrentFocusSection),
);
const ExperimentsSection = dynamic(() =>
  import("@/components/scenes/experiments-section").then(
    (m) => m.ExperimentsSection,
  ),
);
const ExperienceSection = dynamic(() =>
  import("@/components/scenes/experience-section").then(
    (m) => m.ExperienceSection,
  ),
);
const AboutTeaserSection = dynamic(() =>
  import("@/components/scenes/contact-section").then((m) => m.AboutTeaserSection),
);
const ContactSection = dynamic(() =>
  import("@/components/scenes/contact-section").then((m) => m.ContactSection),
);
const FinalCtaSection = dynamic(() =>
  import("@/components/scenes/contact-section").then((m) => m.FinalCtaSection),
);

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="below-fold-paint">
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
    </>
  );
}
