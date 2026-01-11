import { AlertCircle } from "lucide-react";
import { Section } from "@/components/layout/section";
import SectionHeader from "@/components/layout/section-header";
import type { CaseStudy } from "@/data/types";

interface CaseStudyProblemProps {
  caseStudy: CaseStudy;
}

export function CaseStudyProblem({ caseStudy }: CaseStudyProblemProps) {
  return (
    <>
      <SectionHeader
        subtitle="Problem"
        title="The Problem"
        description="What needed to be solved"
      />
      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {caseStudy.problem.summary}
            </p>
          </div>
          <div className="rounded-xl border bg-card p-6">
            <h4 className="mb-4 flex items-center gap-2 font-semibold">
              <AlertCircle className="h-5 w-5 text-destructive" />
              Key Challenges
            </h4>
            <ul className="space-y-3">
              {caseStudy.problem.details.map((detail, index) => (
                <li
                  key={`detail-${index}-${detail}`}
                  className="flex gap-3 text-muted-foreground"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
