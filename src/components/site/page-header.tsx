import { cn } from "@/lib/cn";
import { SectionLabel } from "./section-label";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
  className,
}: PageHeaderProps) {
  return (
    <header
      className={cn(
        "border-b border-site-border pb-10 pt-4 md:pb-12 md:pt-6",
        className,
      )}
    >
      {eyebrow ? <SectionLabel className="mb-4">{eyebrow}</SectionLabel> : null}
      <h1 className="max-w-3xl font-display text-4xl font-medium tracking-tight text-balance text-site-ink md:text-5xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-site-muted text-pretty">
          {description}
        </p>
      ) : null}
      {children ? <div className="mt-6">{children}</div> : null}
    </header>
  );
}
