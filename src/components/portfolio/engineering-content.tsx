import Link from "next/link";
import { FeatureBento } from "@/components/feature-section";
import { PortfolioStackIntegrations } from "@/components/integrations";
import {
  ContentShell,
  GridCell,
  SectionBleed,
} from "@/components/layout/shells";
import { engineeringPrinciples } from "@/data/portfolio";

export function EngineeringContent({ showIntro = true }: { showIntro?: boolean }) {
  const features = engineeringPrinciples.map((item) => ({
    title: item.title,
    description: item.description,
  }));

  return (
    <>
      {showIntro ? (
        <ContentShell
          eyebrow="Engineering"
          title="How I build"
          description="How I structure applications — UI layers, typed APIs, and delivery patterns from shipped projects."
        />
      ) : null}
      <FeatureBento features={features} />
      <SectionBleed className="mt-8 border-t border-border">
        <GridCell className="md:py-8">
          <PortfolioStackIntegrations nested />
        </GridCell>
      </SectionBleed>
      <SectionBleed className="mt-8 border border-border">
        <GridCell className="font-mono text-xs leading-relaxed text-muted-foreground md:py-8">
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
        </GridCell>
      </SectionBleed>
      <Link
        href="/work"
        className="mt-8 inline-block font-mono text-sm text-link-accent hover:underline"
      >
        See evidence in projects →
      </Link>
    </>
  );
}
