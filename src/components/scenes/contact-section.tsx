import Link from "next/link";
import { PortfolioContactPanel } from "@/components/contact-section";
import { CallToAction } from "@/components/cta";
import {
  SectionFrame,
  SectionLabel,
  sectionActionLinkClass,
} from "@/components/primitives/section-frame";
import { profile } from "@/data/portfolio";
import { PageBleed } from "@/components/primitives/page-column";
import { cn } from "@/lib/cn";

/** Contact-5 inspired about teaser — person bridge without a form. */
export function AboutTeaserSection() {
  return (
    <SectionFrame id="about" border>
      <SectionLabel index="07" label="About" className="pt-2" />
      <PageBleed className="grid gap-px border-t border-border bg-border md:grid-cols-2">
        <div className="bg-background p-6 md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            I build modern web products with a strong focus on frontend systems,
            complex interactions, and maintainable architecture.
          </h2>
        </div>
        <div className="flex flex-col justify-center bg-background p-6 md:p-8">
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
      </PageBleed>
    </SectionFrame>
  );
}

export function ContactSection() {
  return (
    <SectionFrame id="contact" border spacing="tight">
      <SectionLabel index="08" label="Contact" />
      <PortfolioContactPanel className="max-w-none" layout="split" />
    </SectionFrame>
  );
}

export function FinalCtaSection() {
  return (
    <SectionFrame border spacing="tight" rail={false}>
      <PageBleed>
        <CallToAction />
      </PageBleed>
    </SectionFrame>
  );
}

export function ContactPanel() {
  return <PortfolioContactPanel />;
}
