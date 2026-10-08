import Link from "next/link";
import { FeatureBento } from "@/components/feature-section";
import { PortfolioStackIntegrations } from "@/components/integrations";
import {
  PAGE_GUTTER_CLASS,
  PageBleed,
} from "@/components/primitives/page-column";
import {
  SectionFrame,
  SectionIntro,
} from "@/components/primitives/section-frame";
import { generatePageMetadata } from "@/config/metadata";
import { staticPageSeo } from "@/config/page-seo";
import { engineeringPrinciples } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export const metadata = generatePageMetadata({
  title: staticPageSeo.engineering.title,
  description: staticPageSeo.engineering.description,
  path: "/engineering",
});

export default function EngineeringPage() {
  const features = engineeringPrinciples.map((item) => ({
    title: item.title,
    description: item.description,
  }));

  return (
    <SectionFrame border={false} spacing="tight">
      <SectionIntro
        label="Engineering"
        title="How I build"
        description="How I structure applications — UI layers, typed APIs, and delivery patterns from shipped projects."
      />
      <FeatureBento features={features} />
      <PageBleed className="mt-8 border-t border-border">
        <div className={cn(PAGE_GUTTER_CLASS, "py-8")}>
          <PortfolioStackIntegrations nested />
        </div>
      </PageBleed>
      <PageBleed className="mt-8 border border-border">
        <div
          className={cn(
            PAGE_GUTTER_CLASS,
            "py-6 font-mono text-xs leading-relaxed text-muted-foreground md:py-8",
          )}
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
        </div>
      </PageBleed>
      <Link
        href="/work"
        className="mt-8 inline-block font-mono text-sm text-link-accent hover:underline"
      >
        See evidence in projects →
      </Link>
    </SectionFrame>
  );
}
