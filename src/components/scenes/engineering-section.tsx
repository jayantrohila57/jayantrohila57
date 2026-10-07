import Link from "next/link";
import { FeatureBento } from "@/components/feature-section";
import {
  SectionFrame,
  SectionIntro,
  SectionLabel,
  sectionActionLinkClass,
} from "@/components/primitives/section-frame";
import { engineeringPrinciples } from "@/data/portfolio";

function PrincipleVisual({ type }: { type: string }) {
  const content: Record<string, string> = {
    "data-table": `Orders · Filters · Pagination
────────────────────────
Row select · Bulk actions
Form validation · Toasts`,
    "type-flow": `React
 ↓
TanStack Query / tRPC
 ↓
Server procedures
 ↓
Prisma / Drizzle
 ↓
PostgreSQL`,
    "ui-stack": `Button · Input · Select · Dialog
Table · Form · Sheet · Toast
        ↓
libyui · shared patterns`,
    "ci-pipeline": `Biome · Vitest
GitHub Actions → Build → Deploy`,
  };
  return (
    <pre className="mt-4 overflow-x-auto font-mono text-[10px] leading-relaxed text-muted-foreground">
      {content[type] ?? content["type-flow"]}
    </pre>
  );
}

/** Efferd `features-6` bento with evidence-style visuals. */
export function EngineeringSection() {
  const features = engineeringPrinciples.map((item) => ({
    title: item.title,
    description: item.description,
  }));

  return (
    <SectionFrame id="engineering" border>
      <div className="px-4 pt-2">
        <SectionLabel index="02" label="Engineering" />
        <SectionIntro
          title="How I build software."
          description="Where UX, architecture, and maintainability meet — backed by real project patterns."
          action={
            <Link href="/engineering" className={sectionActionLinkClass}>
              Deep dive →
            </Link>
          }
        />
      </div>
      <FeatureBento features={features} />
      <div className="grid gap-px border-t border-border bg-border md:grid-cols-2">
        {engineeringPrinciples.map((item) => (
          <div className="bg-background p-4 md:p-6" key={item.id}>
            <PrincipleVisual type={item.visual} />
          </div>
        ))}
      </div>
    </SectionFrame>
  );
}
