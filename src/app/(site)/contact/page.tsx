import { PortfolioContactPanel } from "@/components/contact-section";
import { CallToAction } from "@/components/cta";
import {
  SectionFrame,
  SectionIntro,
} from "@/components/primitives/section-frame";
import { generatePageMetadata } from "@/config/metadata";

export const metadata = generatePageMetadata({
  title: "Contact",
  description:
    "Email, GitHub, and LinkedIn for product engineering roles and collaborations.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <SectionFrame border={false} spacing="tight" className="pt-8 pb-8">
        <div className="px-4">
          <SectionIntro
            compact
            label="Contact"
            title="Get in touch"
            description="For hiring, product engineering, collaborations, and open-source discussions."
          />
        </div>
        <PortfolioContactPanel className="mx-4 mt-6" showIntro={false} />
      </SectionFrame>
      <SectionFrame border spacing="tight">
        <CallToAction
          title="Have a product or role in mind?"
          description="Send a short note with context — repo link, problem space, or timeline."
          primaryLabel="Send email"
          primaryHref="mailto:jrohila55@gmail.com"
          secondaryHref="/work"
          secondaryLabel="View work"
        />
      </SectionFrame>
    </>
  );
}
