import Link from "next/link";
import { FeatureBento } from "@/components/feature-section";
import { PortfolioStackIntegrations } from "@/components/integrations";
import {
  SectionFrame,
  SectionIntro,
} from "@/components/primitives/section-frame";
import { engineeringPrinciples } from "@/data/portfolio";
import { generatePageMetadata } from "@/config/metadata";

export const metadata = generatePageMetadata({
  title: "Engineering",
  description:
    "How Jayant Rohila approaches product UI, type-safe architecture, reusable systems, and delivery.",
  path: "/engineering",
});

export default function EngineeringPage() {
  const features = engineeringPrinciples.map((item) => ({
    title: item.title,
    description: item.description,
  }));

  return (
    <SectionFrame border={false} spacing="tight" className="pt-8">
      <div className="px-4 pb-4">
        <SectionIntro
          label="Engineering"
          title="How I build"
          description="Deeper view of how I structure applications — grounded in public project repos."
        />
      </div>
      <FeatureBento features={features} />
      <div className="mt-8 border-t border-border px-4">
        <PortfolioStackIntegrations nested />
      </div>
      <div className="mx-4 mt-8 border border-border p-6 font-mono text-xs leading-relaxed text-muted-foreground">
        <p className="text-foreground">Frontend systems</p>
        <pre className="mt-3">{`App → Layout → Feature → Data query → UI state`}</pre>
        <p className="mt-8 text-foreground">Data & API (where used in projects)</p>
        <pre className="mt-3">{`Client → tRPC / REST → Auth → PostgreSQL`}</pre>
        <p className="mt-8 text-foreground">Infrastructure (documented in repos)</p>
        <pre className="mt-3">{`Git push → GitHub Actions → Build → Vercel deploy`}</pre>
      </div>
      <Link
        href="/work"
        className="mt-10 inline-block px-4 pb-10 font-mono text-sm text-[color:var(--accent-muted)] hover:underline"
      >
        See evidence in projects →
      </Link>
    </SectionFrame>
  );
}
