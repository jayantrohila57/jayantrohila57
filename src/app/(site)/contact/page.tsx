import { CallToAction } from "@/components/cta";
import { ContactSocialCards } from "@/components/contact";
import { PortfolioContactPanel } from "@/components/contact-section";
import {
  SectionFrame,
  SectionIntro,
} from "@/components/primitives/section-frame";
import { generatePageMetadata } from "@/config/metadata";

export const metadata = generatePageMetadata({
  title: "Contact",
  description: "Email, GitHub, and LinkedIn for Jayant Rohila.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <SectionFrame border={false} spacing="tight" className="pt-8">
        <div className="px-4">
          <SectionIntro
            label="Contact"
            title="Get in touch"
            description="Reach out for product engineering conversations or open-source questions."
          />
        </div>
        <PortfolioContactPanel className="mx-4" />
        <div className="mt-10 border-t border-border pt-10">
          <ContactSocialCards />
        </div>
      </SectionFrame>
      <SectionFrame border spacing="tight">
        <CallToAction />
      </SectionFrame>
    </>
  );
}
