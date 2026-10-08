import { FeatureCard } from "@/components/feature-section";
import {
  SectionFrame,
  SectionIntro,
  SectionLabel,
} from "@/components/primitives/section-frame";
import { PageBleed } from "@/components/primitives/page-column";
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
      <div className="pt-2">
        <SectionLabel index="02" label="What I build" />
        <SectionIntro
          title="Product engineering for complex web applications."
          description={`${siteConfig.author.role} at ${siteConfig.author.employer.replace(" Pvt. Ltd.", "")} · ${siteConfig.contact.location}`}
        />
      </div>
      <PageBleed className="relative grid grid-cols-1 gap-px border-t border-border bg-border md:grid-cols-3">
        {specialties.map((item) => (
          <FeatureCard feature={item} key={item.title} />
        ))}
      </PageBleed>
    </SectionFrame>
  );
}
