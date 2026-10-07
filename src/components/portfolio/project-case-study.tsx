import type { ProjectCaseStudy } from "@/data/project-case-studies";

const sections: {
  key: keyof ProjectCaseStudy;
  label: string;
  list?: boolean;
}[] = [
  { key: "problem", label: "Problem / context" },
  { key: "contribution", label: "My contribution" },
  { key: "features", label: "Key features", list: true },
  { key: "decisions", label: "Decisions & trade-offs", list: true },
  { key: "outcome", label: "Outcome" },
];

export function ProjectCaseStudySections({
  study,
}: {
  study: ProjectCaseStudy;
}) {
  return (
    <div className="space-y-10 px-4 pb-8">
      {sections.map((section, index) => {
        const value = study[section.key];
        return (
          <section key={section.key} aria-labelledby={`case-${section.key}`}>
            <h2
              id={`case-${section.key}`}
              className="font-mono text-[11px] text-muted-foreground uppercase tracking-[0.18em]"
            >
              {String(index + 1).padStart(2, "0")} — {section.label}
            </h2>
            {section.list && Array.isArray(value) ? (
              <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                {value.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                {value as string}
              </p>
            )}
          </section>
        );
      })}
    </div>
  );
}
