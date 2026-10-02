export function FactGrid({
  facts,
}: {
  facts: { label: string; value: string }[];
}) {
  return (
    <dl className="not-prose my-8 grid gap-px border border-site-border bg-site-border sm:grid-cols-2">
      {facts.map((fact) => (
        <div
          key={fact.label}
          className="grid bg-site-paper sm:grid-cols-[minmax(0,9rem)_1fr]"
        >
          <dt className="border-b border-site-border px-4 py-3 font-mono text-[0.65rem] uppercase tracking-wide text-site-muted sm:border-b-0 sm:border-r">
            {fact.label}
          </dt>
          <dd className="px-4 py-3 text-sm text-site-ink text-pretty">
            {fact.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
