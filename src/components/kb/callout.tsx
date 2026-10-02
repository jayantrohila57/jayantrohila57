import { cn } from "@/lib/cn";

type CalloutVariant = "note" | "tip" | "status" | "engineering";

const styles: Record<CalloutVariant, string> = {
  note: "border-l-site-muted bg-site-surface",
  tip: "border-l-site-accent bg-site-surface",
  status: "border-l-amber-600/70 bg-amber-50/50 dark:bg-amber-950/20",
  engineering: "border-l-site-ink bg-site-code-bg text-site-code-fg",
};

const labels: Record<CalloutVariant, string> = {
  note: "Note",
  tip: "Tip",
  status: "Status",
  engineering: "Engineering",
};

export function Callout({
  variant = "note",
  title,
  children,
  className,
}: {
  variant?: CalloutVariant;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <aside
      className={cn(
        "not-prose my-6 border-l-4 py-3 pe-4 ps-4 text-sm leading-relaxed",
        styles[variant],
        className,
      )}
    >
      <p className="font-mono text-[0.65rem] uppercase tracking-widest opacity-80">
        {title ?? labels[variant]}
      </p>
      <div className="mt-2 text-pretty [&_a]:underline [&_a]:underline-offset-2">
        {children}
      </div>
    </aside>
  );
}
