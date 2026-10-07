import Link from "next/link";
import { PortfolioContactPanel } from "@/components/contact-section";
import { CallToAction } from "@/components/cta";
import {
  SectionFrame,
  SectionLabel,
  sectionActionLinkClass,
} from "@/components/primitives/section-frame";
import { profile } from "@/data/portfolio";
import { cn } from "@/lib/cn";

export function AboutTeaserSection() {
  return (
    <SectionFrame id="about" border>
      <SectionLabel index="04" label="About" className="px-4 pt-2" />
      <div className="grid gap-px border-t border-border bg-border md:grid-cols-2">
        <div className="bg-background p-6">
          <p className="font-mono text-[10px] text-muted-foreground uppercase">
            Profile
          </p>
          <h2 className="mt-3 text-2xl font-semibold">{profile.name}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{profile.title}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {profile.longBio}
          </p>
          <Link
            href="/about"
            className={cn("mt-6 inline-block", sectionActionLinkClass)}
          >
            Read more →
          </Link>
        </div>
        <div className="bg-background p-6">
          <p className="font-mono text-[10px] text-muted-foreground uppercase">
            Focus
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Modern web applications (Next.js, React, TypeScript)</li>
            <li>Typed APIs and data-heavy interfaces</li>
            <li>Open-source projects with live demos on GitHub</li>
          </ul>
        </div>
      </div>
    </SectionFrame>
  );
}

export function ContactSection() {
  return (
    <SectionFrame id="contact" border spacing="tight">
      <SectionLabel index="05" label="Contact" className="px-4" />
      <PortfolioContactPanel className="mx-4" />
    </SectionFrame>
  );
}

export function FinalCtaSection() {
  return (
    <SectionFrame border spacing="tight">
      <CallToAction />
    </SectionFrame>
  );
}

export function ContactPanel() {
  return <PortfolioContactPanel />;
}
