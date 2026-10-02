import Link from "next/link";
import { CallToAction } from "@/components/cta";
import { PortfolioContactPanel } from "@/components/contact-section";
import { EfferdRail } from "@/components/efferd-rail";
import {
  SectionFrame,
  SectionLabel,
} from "@/components/primitives/section-frame";
import { profile } from "@/data/portfolio";

export function AboutTeaserSection() {
  return (
    <SectionFrame id="about" border={false}>
      <EfferdRail>
        <SectionLabel index="08" label="About" className="px-4 pt-4" />
        <div className="grid gap-px border-t border-border bg-border md:grid-cols-2">
          <div className="bg-background p-6">
            <p className="font-mono text-[10px] text-muted-foreground uppercase">
              Profile
            </p>
            <h2 className="mt-3 text-2xl font-semibold">{profile.name}</h2>
            <p className="mt-1 text-accent">{profile.title}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {profile.longBio}
            </p>
            <Link
              href="/about"
              className="mt-6 inline-block font-mono text-xs text-accent hover:underline"
            >
              Read more →
            </Link>
          </div>
          <div className="bg-background/80 p-6">
            <p className="font-mono text-[10px] text-muted-foreground uppercase">
              Focus
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Modern web applications (Next.js, React, TypeScript)</li>
              <li>Typed APIs and data-heavy interfaces</li>
              <li>Open-source projects with live demos on GitHub</li>
            </ul>
            <p className="mt-6 font-mono text-[10px] text-muted-foreground">
              Lucsum is an upcoming brand hub only — not employment.
            </p>
          </div>
        </div>
      </EfferdRail>
    </SectionFrame>
  );
}

export function ContactSection() {
  return (
    <SectionFrame id="contact" border={false} className="py-12">
      <EfferdRail bordered={false}>
        <SectionLabel index="09" label="Contact" className="px-4" />
        <PortfolioContactPanel className="mx-4" />
      </EfferdRail>
    </SectionFrame>
  );
}

export function FinalCtaSection() {
  return (
    <section className="border-t border-border py-12 md:py-16">
      <EfferdRail bordered={false}>
        <CallToAction />
      </EfferdRail>
    </section>
  );
}

/** @deprecated Use PortfolioContactPanel via ContactSection */
export function ContactPanel() {
  return <PortfolioContactPanel />;
}
