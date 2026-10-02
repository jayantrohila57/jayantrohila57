import type { RoleStep } from "@/data/career-roles";

export function RoleProgression({ steps }: { steps: RoleStep[] }) {
  if (steps.length === 0) return null;

  return (
    <section className="not-prose my-8" aria-labelledby="role-progression">
      <h2
        id="role-progression"
        className="font-mono text-[0.65rem] uppercase tracking-widest text-site-muted"
      >
        Documented title progression
      </h2>
      <ol className="mt-4 border-l border-site-border">
        {steps.map((step) => (
          <li
            key={step.title}
            className="relative ms-4 border-b border-site-border py-4 last:border-b-0"
          >
            <span
              className="absolute top-5 -left-[1.125rem] size-2 rounded-full border border-site-accent bg-site-paper"
              aria-hidden
            />
            <p className="font-medium text-site-ink">{step.title}</p>
            <p className="mt-1 font-mono text-xs text-site-muted">
              {step.from}
              {step.to ? ` → ${step.to}` : " → present"}
            </p>
            {step.note ? (
              <p className="mt-2 text-sm text-site-muted text-pretty">{step.note}</p>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  );
}
