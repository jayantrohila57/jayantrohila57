import {
  ContactPanel,
  FinalCtaSection,
} from "@/components/scenes/contact-section";
import { SectionFrame, SectionIntro } from "@/components/primitives/section-frame";
import { generatePageMetadata } from "@/config/metadata";

export const metadata = generatePageMetadata({
  title: "Contact",
  description: "Email, GitHub, and LinkedIn for Jayant Rohila.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <SectionFrame border={false} className="pt-12 pb-0">
        <SectionIntro
          title="Contact"
          description="Reach out for product engineering conversations or open-source questions."
        />
      </SectionFrame>
      <SectionFrame border={false} className="pt-0">
        <ContactPanel />
      </SectionFrame>
      <FinalCtaSection />
    </>
  );
}
