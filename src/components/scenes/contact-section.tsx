import Link from "next/link";
import { PortfolioContactPanel } from "@/components/contact-section";
import { CallToAction } from "@/components/cta";
import { PageBleed, PageBleedGrid } from "@/components/primitives/page-column";
import {
  SectionFrame,
  SectionLabel,
  sectionActionLinkClass,
} from "@/components/primitives/section-frame";
import { profile } from "@/data/portfolio";
import { cn } from "@/lib/cn";

/** Contact-5 inspired about teaser — person bridge without a form. */
export function AboutTeaserSection() {
  return (
    <SectionFrame id="about" border>
      <SectionLabel index="07" label="About" className="pt-2" />
      <PageBleedGrid className="md:grid-cols-2">
        <div className="flex min-h-full flex-col justify-center bg-background p-6 md:min-h-[12rem] md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            I build modern web products with a strong focus on frontend systems,
            complex interactions, and maintainable architecture.
          </h2>
        </div>
        <div className="flex min-h-full flex-col justify-center bg-background p-6 md:min-h-[12rem] md:p-8">
          <p className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
            Profile
          </p>
          <p className="mt-3 text-xl font-semibold">{profile.name}</p>
          <p className="text-sm text-muted-foreground">{profile.title}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {profile.location}
          </p>
          <Link
            href="/about"
            className={cn("mt-6 inline-block", sectionActionLinkClass)}
          >
            About me →
          </Link>
        </div>
      </PageBleedGrid>
    </SectionFrame>
  );
}

export function ContactSection() {
  return (
    <SectionFrame id="contact" border>
      <SectionLabel index="08" label="Contact" />
      <PageBleed className="border-t border-border">
        <PortfolioContactPanel flush layout="split" className="max-w-none" />
      </PageBleed>
    </SectionFrame>
  );
}

export function FinalCtaSection() {
  return (
    <SectionFrame border>
      <PageBleed className="border-t border-border">
        <CallToAction />
      </PageBleed>
    </SectionFrame>
  );
}

export function ContactPanel() {
  return <PortfolioContactPanel />;
}
