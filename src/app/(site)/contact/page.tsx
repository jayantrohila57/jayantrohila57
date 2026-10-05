import { ContactSocialCards } from "@/components/contact";
import { ContactElsewhereLinks } from "@/components/contact-elsewhere";
import { CallToAction } from "@/components/cta";
import { PortfolioContactPanel } from "@/components/contact-section";
import {
  SectionFrame,
  SectionIntro,
} from "@/components/primitives/section-frame";
import { generatePageMetadata } from "@/config/metadata";

export const metadata = generatePageMetadata({
  title: "Contact",
  description:
    "Email, GitHub, LinkedIn, and verified public profiles for Jayant Rohila.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <SectionFrame border={false} spacing="tight" className="pt-8 pb-4">
        <div className="px-4">
          <SectionIntro
            compact
            label="Contact"
            title="Get in touch"
            description="Reach out for product engineering conversations or open-source questions."
          />
        </div>
        <PortfolioContactPanel className="mx-4 mt-0" />
        <div className="mt-8 border-t border-border pt-8">
          <ContactSocialCards />
        </div>
        <div className="mt-8 border-t border-border pt-8">
          <ContactElsewhereLinks />
        </div>
      </SectionFrame>
      <SectionFrame border spacing="tight">
        <CallToAction />
      </SectionFrame>
    </>
  );
}
