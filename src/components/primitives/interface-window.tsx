import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function InterfaceWindow({
  title,
  children,
  className,
  chrome = true,
}: {
  title?: string;
  children: ReactNode;
  className?: string;
  chrome?: boolean;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[var(--radius-md)] border border-border bg-surface shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset]",
        className,
      )}
    >
      {chrome ? (
        <div className="flex items-center gap-2 border-b border-border bg-elevated/60 px-3 py-2">
          <span className="size-2 rounded-full bg-[#ff5f57]" />
          <span className="size-2 rounded-full bg-[#febc2e]" />
          <span className="size-2 rounded-full bg-[#28c840]" />
          {title ? (
            <span className="ml-2 truncate font-mono text-xs text-muted">
              {title}
            </span>
          ) : null}
        </div>
      ) : null}
      <div className="p-3 font-mono text-xs text-foreground/90 md:p-4">
        {children}
      </div>
    </div>
  );
}

export function TerminalWindow({
  prompt = "jayant@workspace",
  lines,
  className,
}: {
  prompt?: string;
  lines: string[];
  className?: string;
}) {
  return (
    <InterfaceWindow title={`${prompt} — zsh`} className={className}>
      <div className="space-y-1">
        {lines.map((line) => (
          <div key={line} className="text-muted">
            {line.startsWith("$") ? (
              <>
                <span className="text-accent">{line.slice(0, 1)} </span>
                {line.slice(2)}
              </>
            ) : (
              line
            )}
          </div>
        ))}
      </div>
    </InterfaceWindow>
  );
}

export function BrowserWindow({
  url,
  children,
  className,
}: {
  url: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <InterfaceWindow title={url} className={className}>
      {children}
    </InterfaceWindow>
  );
}

export function StatusBadge({
  label,
  status = "active",
}: {
  label: string;
  status?: "active" | "idle" | "demo";
}) {
  const dot =
    status === "active"
      ? "bg-accent"
      : status === "demo"
        ? "bg-amber-400"
        : "bg-muted";
  return (
    <span className="inline-flex items-center gap-2 rounded-[var(--radius-sm)] border border-border px-2 py-1 font-mono text-xs text-muted uppercase">
      <span className={cn("size-1.5 rounded-full", dot)} />
      {label}
    </span>
  );
}
