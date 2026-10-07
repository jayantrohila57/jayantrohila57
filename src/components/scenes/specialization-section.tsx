import { FeatureCard } from "@/components/feature-section";
import { FullWidthDivider } from "@/components/full-width-divider";
import {
  SectionFrame,
  SectionIntro,
  SectionLabel,
} from "@/components/primitives/section-frame";
import { siteConfig } from "@/config/site";

const specialties = [
  {
    title: "Product interfaces",
    description:
      "Complex web UIs in Next.js and React with accessible, responsive layouts and clear information hierarchy.",
  },
  {
    title: "Typed systems",
    description:
      "End-to-end TypeScript — tRPC, REST APIs, and data-heavy views with predictable contracts.",
  },
  {
    title: "Shipping discipline",
    description:
      "From design handoff to production deploys on Vercel, with testing and CI-friendly repo tooling.",
  },
];

export function SpecializationSection() {
  return (
    <SectionFrame id="specialization" border>
      <div className="px-4 pt-2">
        <SectionLabel index="02" label="What I build" />
        <SectionIntro
          title="Product engineering for complex web applications."
          description={`${siteConfig.author.role} at ${siteConfig.author.employer.replace(" Pvt. Ltd.", "")} · ${siteConfig.contact.location}`}
        />
      </div>
      <div className="relative grid grid-cols-1 gap-px bg-border md:grid-cols-3">
        <FullWidthDivider position="top" />
        {specialties.map((item) => (
          <FeatureCard feature={item} key={item.title} />
        ))}
        <FullWidthDivider position="bottom" />
      </div>
    </SectionFrame>
  );
}
