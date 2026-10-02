import { cn } from "@/lib/cn";

export function CodeBlock({
  title,
  language,
  children,
  className,
}: {
  title?: string;
  language?: string;
  children: string;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "not-prose my-8 overflow-hidden border border-site-border",
        className,
      )}
    >
      <figcaption className="flex items-center justify-between border-b border-site-border bg-site-surface px-4 py-2 font-mono text-[0.65rem] uppercase tracking-widest text-site-muted">
        <span>{title ?? "snippet"}</span>
        {language ? <span className="normal-case">{language}</span> : null}
      </figcaption>
      <pre
        className="overflow-x-auto bg-site-code-bg p-4 font-mono text-xs leading-relaxed text-site-code-fg"
      >
        <code>{children}</code>
      </pre>
    </figure>
  );
}
