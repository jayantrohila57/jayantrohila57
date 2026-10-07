import { FeatureCard } from "@/components/feature-section";
import { FullWidthDivider } from "@/components/full-width-divider";
import {
  SectionFrame,
  SectionIntro,
  SectionLabel,
} from "@/components/primitives/section-frame";
import { siteConfig } from "@/config/site";

const focusItems = [
  {
    title: "01 · Product engineering",
    description: `Building web products and software systems at ${siteConfig.author.employer.replace(" Pvt. Ltd.", "")}.`,
  },
  {
    title: "02 · Complex interface systems",
    description:
      "Tables, forms, dashboards, responsive workflows, and reusable UI across production apps.",
  },
  {
    title: "03 · Developer tooling",
    description:
      "Exploring tools that improve development workflows and application delivery.",
  },
];

/** Efferd `features-3` — current status without fake metrics. */
export function CurrentFocusSection() {
  return (
    <SectionFrame id="focus" border>
      <div className="px-4 pt-2">
        <SectionLabel index="04" label="Current focus" />
        <SectionIntro
          title="What I am working on now."
          description={`${siteConfig.author.role} · ${siteConfig.contact.location}`}
        />
      </div>
      <div className="relative grid grid-cols-1 gap-px bg-border md:grid-cols-3">
        <FullWidthDivider position="top" />
        {focusItems.map((item) => (
          <FeatureCard feature={item} key={item.title} />
        ))}
        <FullWidthDivider position="bottom" />
      </div>
    </SectionFrame>
  );
}
