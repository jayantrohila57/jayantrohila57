import { cn } from "@/lib/cn";

export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-mono text-[0.7rem] font-medium uppercase tracking-[0.2em] text-site-muted",
        className,
      )}
    >
      {children}
    </p>
  );
}
