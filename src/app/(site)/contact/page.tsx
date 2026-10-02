import { CallToAction } from "@/components/cta";
import { ContactSocialCards } from "@/components/contact";
import { PortfolioContactPanel } from "@/components/contact-section";
import { EfferdRail } from "@/components/efferd-rail";
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
        <EfferdRail bordered={false}>
          <div className="px-4">
            <SectionIntro
              title="Contact"
              description="Reach out for product engineering conversations or open-source questions."
            />
          </div>
        </EfferdRail>
      </SectionFrame>
      <SectionFrame border={false} className="pt-4 pb-8">
        <EfferdRail bordered={false}>
          <PortfolioContactPanel className="mx-4" />
          <div className="mt-10">
            <ContactSocialCards />
          </div>
        </EfferdRail>
      </SectionFrame>
      <section className="border-t border-border py-12">
        <EfferdRail bordered={false}>
          <CallToAction />
        </EfferdRail>
      </section>
    </>
  );
}
