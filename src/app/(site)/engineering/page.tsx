import Link from "next/link";
import {
  BentoPanel,
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
  return (
    <SectionFrame border={false} className="pt-12">
      <SectionIntro
        title="Engineering"
        description="Deeper view of how I structure applications — grounded in public project repos."
      />
      <div className="grid gap-1 md:grid-cols-2">
        {engineeringPrinciples.map((item, i) => (
          <BentoPanel key={item.id} dominant={i === 0}>
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="mt-3 text-sm text-muted">{item.description}</p>
          </BentoPanel>
        ))}
      </div>
      <div className="mt-12 border border-border p-6 font-mono text-xs leading-relaxed text-muted">
        <p className="text-foreground">Frontend systems</p>
        <pre className="mt-3">{`App → Layout → Feature → Data query → UI state`}</pre>
        <p className="mt-8 text-foreground">Data & API (where used in projects)</p>
        <pre className="mt-3">{`Client → tRPC / REST → Auth → PostgreSQL`}</pre>
        <p className="mt-8 text-foreground">Infrastructure (documented in repos)</p>
        <pre className="mt-3">{`Git push → GitHub Actions → Build → Vercel deploy`}</pre>
      </div>
      <Link
        href="/work"
        className="mt-10 inline-block font-mono text-sm text-accent hover:underline"
      >
        See evidence in projects →
      </Link>
    </SectionFrame>
  );
}
