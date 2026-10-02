import type { ProjectPreview } from "@/data/projects";
import { cn } from "@/lib/cn";

export function ProjectPreviewPanel({
  preview,
  className,
}: {
  preview: ProjectPreview;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative min-h-[9rem] overflow-hidden border border-site-border bg-site-code-bg p-4 font-mono text-[0.7rem] leading-relaxed text-site-code-fg md:text-xs",
        className,
      )}
      aria-hidden
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--site-grid) 1px, transparent 1px), linear-gradient(90deg, var(--site-grid) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />
      {preview.type === "terminal" ? (
        <ul className="relative space-y-1">
          {preview.lines.map((line) => (
            <li key={line} className="text-pretty">
              <span className="text-site-accent/90">{line.startsWith("$") ? "" : "› "}</span>
              {line}
            </li>
          ))}
        </ul>
      ) : null}
      {preview.type === "code" ? (
        <pre className="relative whitespace-pre-wrap text-pretty">
          <code>{preview.snippet}</code>
        </pre>
      ) : null}
      {preview.type === "architecture" ? (
        <ul className="relative space-y-2">
          {preview.items.map((item, i) => (
            <li key={item} className="flex gap-2">
              <span className="text-site-muted">{String(i + 1).padStart(2, "0")}</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
