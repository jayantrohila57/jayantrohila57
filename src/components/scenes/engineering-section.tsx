import Link from "next/link";
import { FeatureBento } from "@/components/feature-section";
import {
  SectionFrame,
  SectionIntro,
  SectionLabel,
  sectionActionLinkClass,
} from "@/components/primitives/section-frame";
import { engineeringPrinciples } from "@/data/portfolio";

/** Efferd `features-6` bento — principles only; diagrams live on /engineering and in case studies. */
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
    </SectionFrame>
  );
}
