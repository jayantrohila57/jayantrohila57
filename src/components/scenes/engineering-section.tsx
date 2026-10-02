import Link from "next/link";
import {
  BentoPanel,
  SectionFrame,
  SectionIntro,
  SectionLabel,
} from "@/components/primitives/section-frame";
import { engineeringPrinciples } from "@/data/portfolio";

function PrincipleVisual({ type }: { type: string }) {
  const content: Record<string, string> = {
    "data-table": `Orders · Filters · Pagination
────────────────────────
Row select · Bulk actions
Form validation · Toasts`,
    "type-flow": `UI → Query → tRPC → DB
End-to-end typed procedures`,
    "ui-stack": `Button · Input · Table
        ↓
Shared UI system (shadcn / Tailwind)`,
    "ci-pipeline": `Commit → CI → Build → Deploy
                              ● live`,
  };
  return (
    <pre className="mt-4 overflow-x-auto font-mono text-[10px] leading-relaxed text-muted">
      {content[type] ?? content["type-flow"]}
    </pre>
  );
}

export function EngineeringSection() {
  return (
    <SectionFrame id="engineering">
      <SectionLabel index="02" label="Engineering" />
      <SectionIntro
        title="How I design and build software."
        description="Product-first delivery with typed APIs, reusable UI, and repo-documented quality tooling."
        action={
          <Link
            href="/engineering"
            className="font-mono text-xs tracking-wide text-accent hover:underline"
          >
            Deep dive →
          </Link>
        }
      />
      <div className="grid gap-1 md:grid-cols-2">
        {engineeringPrinciples.map((item, i) => (
          <BentoPanel key={item.id} dominant={i === 0}>
            <p className="font-mono text-[10px] text-muted">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.description}</p>
            <PrincipleVisual type={item.visual} />
          </BentoPanel>
        ))}
      </div>
    </SectionFrame>
  );
}
