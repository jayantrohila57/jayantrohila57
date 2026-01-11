import { CheckCircle2, Lightbulb } from "lucide-react";
import { Section } from "@/components/layout/section";
import SectionHeader from "@/components/layout/section-header";
import { TechBadge } from "@/components/ui/tech-badge";
import type { CaseStudy } from "@/data/types";

interface CaseStudySolutionProps {
  caseStudy: CaseStudy;
}

export function CaseStudySolution({ caseStudy }: CaseStudySolutionProps) {
  return (
    <>
      <SectionHeader
        subtitle="Solution"
        title="The Solution"
        description="How we solved it"
      />
      <Section className="bg-muted/30">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {caseStudy.solution.summary}
            </p>

            {/* Approach */}
            <div className="mt-6 rounded-xl border bg-card p-6">
              <h4 className="mb-4 flex items-center gap-2 font-semibold">
                <Lightbulb className="h-5 w-5 text-yellow-500" />
                Approach
              </h4>
              <ul className="space-y-3">
                {caseStudy.solution.approach.map((step) => (
                  <li
                    key={`approach-${caseStudy.title}-${step}`}
                    className="flex gap-3 text-muted-foreground"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tech Used */}
          <div className="rounded-xl border bg-card p-6">
            <h4 className="mb-4 font-semibold">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {caseStudy.solution.tech.map((tech) => (
                <TechBadge key={tech} tech={tech} variant="outline" size="lg" />
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
