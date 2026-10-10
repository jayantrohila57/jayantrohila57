import Link from "next/link";
import { FeatureBento } from "@/components/feature-section";
import { PortfolioStackIntegrations } from "@/components/integrations";
import { PageBleed, PageBorderedCell } from "@/components/primitives/page-column";
import { SectionIntro } from "@/components/primitives/section-frame";
import { engineeringPrinciples } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function EngineeringContent({ showIntro = true }: { showIntro?: boolean }) {
  const features = engineeringPrinciples.map((item) => ({
    title: item.title,
    description: item.description,
  }));

  return (
    <>
      {showIntro ? (
        <SectionIntro
          label="Engineering"
          title="How I build"
          description="How I structure applications — UI layers, typed APIs, and delivery patterns from shipped projects."
        />
      ) : null}
      <FeatureBento features={features} />
      <PageBleed className="mt-8 border-t border-border">
        <PageBorderedCell className="md:py-8">
          <PortfolioStackIntegrations nested />
        </PageBorderedCell>
      </PageBleed>
      <PageBleed className="mt-8 border border-border">
        <PageBorderedCell
          className="font-mono text-xs leading-relaxed text-muted-foreground md:py-8"
        >
          <p className="text-foreground">Frontend systems</p>
          <pre className="lenis-prevent mt-3 overflow-x-auto">
            {`App → Layout → Feature → Data query → UI state`}
          </pre>
          <p className="mt-8 text-foreground">
            Data & API (where used in projects)
          </p>
          <pre className="lenis-prevent mt-3 overflow-x-auto">
            {`Client → tRPC / REST → Auth → PostgreSQL`}
          </pre>
          <p className="mt-8 text-foreground">
            Infrastructure (documented in repos)
          </p>
          <pre className="lenis-prevent mt-3 overflow-x-auto">
            {`Git push → GitHub Actions → Build → Vercel deploy`}
          </pre>
        </PageBorderedCell>
      </PageBleed>
      <Link
        href="/work"
        className="mt-8 inline-block font-mono text-sm text-link-accent hover:underline"
      >
        See evidence in projects →
      </Link>
    </>
  );
}
