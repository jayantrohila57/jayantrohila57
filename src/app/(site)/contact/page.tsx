import { PortfolioContactPanel } from "@/components/contact-section";
import { CallToAction } from "@/components/cta";
import {
  ContentShell,
  SectionBleed,
  SectionShell,
} from "@/components/layout/shells";
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
      <SectionShell dividerTop={false} spacing="compact">
        <ContentShell
          eyebrow="Contact"
          title="Get in touch"
          description="For hiring, product engineering, collaborations, and open-source discussions."
          variant="page"
          headingLevel="h1"
        />
        <SectionBleed className="mt-6 border border-border">
          <PortfolioContactPanel layout="split" flush showIntro={false} />
        </SectionBleed>
      </SectionShell>
      <SectionShell bleed>
        <SectionBleed className="border-t border-border">
          <CallToAction
            title="Have a product or role in mind?"
            description="Send a short note with context — repo link, problem space, or timeline."
            primaryLabel="Send email"
            primaryHref="mailto:jrohila55@gmail.com"
            secondaryHref="/work"
            secondaryLabel="View work"
          />
        </SectionBleed>
      </SectionShell>
    </>
  );
}
