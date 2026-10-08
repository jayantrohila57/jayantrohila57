import type { ReactNode } from "react";
import {
  PAGE_GUTTER_CLASS,
  PageBleed,
} from "@/components/primitives/page-column";
import type { ProjectCaseStudy } from "@/data/project-case-studies";
import { cn } from "@/lib/utils";

export function ProjectCaseStudyAtGlance({
  study,
}: {
  study: ProjectCaseStudy;
}) {
  const rows = [
    { label: "Role", value: study.atGlance.role },
    { label: "Duration", value: study.atGlance.duration },
    { label: "Team", value: study.atGlance.team },
    { label: "Stack", value: study.atGlance.stack },
  ];

  const metrics = study.metrics ?? [];
  const metricsOdd = metrics.length % 2 === 1;

  return (
    <PageBleed className="mb-8 border-y border-border bg-border">
      <div className={cn(PAGE_GUTTER_CLASS, "bg-background py-6 md:py-8")}>
        <p className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
          At a glance
        </p>
        <dl className="mt-4 grid gap-px border border-border bg-border sm:grid-cols-2">
          {rows.map((row) => (
            <div
              key={row.label}
              className="bg-background px-4 py-3 md:px-5 md:py-4"
            >
              <dt className="font-mono text-[10px] text-muted-foreground uppercase">
                {row.label}
              </dt>
              <dd className="mt-1 text-sm leading-relaxed text-foreground">
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
        {metrics.length > 0 ? (
          <div className="mt-6 border-t border-border pt-4">
            <p className="font-mono text-[10px] text-muted-foreground uppercase">
              Engineering metrics (from public repos)
            </p>
            <ul className="mt-3 grid gap-px border border-border bg-border sm:grid-cols-2">
              {metrics.map((metric, index) => (
                <li
                  key={metric.label}
                  className={cn(
                    "flex justify-between gap-3 bg-background px-4 py-2 text-sm md:px-5",
                    metricsOdd &&
                      index === metrics.length - 1 &&
                      "sm:col-span-2",
                  )}
                >
                  <span className="text-muted-foreground">{metric.label}</span>
                  <span className="text-right font-medium tabular-nums">
                    {metric.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </PageBleed>
  );
}

export function ProjectCaseStudySections({
  study,
}: {
  study: ProjectCaseStudy;
}) {
  const blocks: {
    key: string;
    label: string;
    content: ReactNode;
  }[] = [
    {
      key: "problem",
      label: "The problem",
      content: <p>{study.problem}</p>,
    },
    {
      key: "contribution",
      label: "My contribution",
      content: <p>{study.contribution}</p>,
    },
    {
      key: "challenges",
      label: "The hard parts",
      content: (
        <ul className="list-disc space-y-2 pl-5">
          {study.challenges.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ),
    },
    {
      key: "features",
      label: "Key features",
      content: (
        <ul className="list-disc space-y-2 pl-5">
          {study.features.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ),
    },
    {
      key: "decisions",
      label: "Key decisions",
      content: (
        <ul className="list-disc space-y-2 pl-5">
          {study.decisions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ),
    },
    {
      key: "outcome",
      label: "Result",
      content: <p>{study.outcome}</p>,
    },
  ];

  if (study.maturity) {
    blocks.push({
      key: "maturity",
      label: "What I’d do next",
      content: <p>{study.maturity}</p>,
    });
  }

  return (
    <div className="space-y-10 pb-8">
      {blocks.map((section, index) => (
        <section key={section.key} aria-labelledby={`case-${section.key}`}>
          <h2
            id={`case-${section.key}`}
            className="font-mono text-[11px] text-muted-foreground uppercase tracking-[0.18em]"
          >
            {String(index + 1).padStart(2, "0")} — {section.label}
          </h2>
          <div className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            {section.content}
          </div>
        </section>
      ))}
    </div>
  );
}
