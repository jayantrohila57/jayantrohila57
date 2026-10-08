import { PortfolioContactPanel } from "@/components/contact-section";
import { CallToAction } from "@/components/cta";
import { PageBleed } from "@/components/primitives/page-column";
import {
  SectionFrame,
  SectionIntro,
} from "@/components/primitives/section-frame";
import { generatePageMetadata } from "@/config/metadata";
import { staticPageSeo } from "@/config/page-seo";

export const metadata = generatePageMetadata({
  title: staticPageSeo.contact.title,
  description: staticPageSeo.contact.description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <SectionFrame border={false} spacing="tight">
        <SectionIntro
          compact
          label="Contact"
          title="Get in touch"
          description="For hiring, product engineering, collaborations, and open-source discussions."
        />
        <PageBleed className="mt-6 border border-border">
          <PortfolioContactPanel layout="split" flush showIntro={false} />
        </PageBleed>
      </SectionFrame>
      <SectionFrame border spacing="none" bleedContent>
        <PageBleed className="border-t border-border">
          <CallToAction
            title="Have a product or role in mind?"
            description="Send a short note with context — repo link, problem space, or timeline."
            primaryLabel="Send email"
            primaryHref="mailto:jrohila55@gmail.com"
            secondaryHref="/work"
            secondaryLabel="View work"
          />
        </PageBleed>
      </SectionFrame>
    </>
  );
}
