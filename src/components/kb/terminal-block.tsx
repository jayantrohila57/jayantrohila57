import { cn } from "@/lib/cn";

export function TerminalBlock({
  title = "terminal",
  lines,
  className,
}: {
  title?: string;
  lines: string[];
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "not-prose my-8 overflow-hidden border border-site-border",
        className,
      )}
    >
      <figcaption className="border-b border-site-border bg-site-surface px-4 py-2 font-mono text-[0.65rem] uppercase tracking-widest text-site-muted">
        {title}
      </figcaption>
      <pre
        className="overflow-x-auto bg-site-code-bg p-4 font-mono text-xs leading-relaxed text-site-code-fg"
      >
        <code>
          {lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </code>
      </pre>
    </figure>
  );
}
