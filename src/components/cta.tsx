import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DecorIcon } from "@/components/decor-icon";
import { ArrowRightIcon } from "lucide-react";

type CallToActionProps = {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CallToAction({
  title = "Have a product or system worth shipping?",
  description = "Product engineering and typed full-stack delivery — reach out with context from your repo or roadmap.",
  primaryHref = "/contact",
  primaryLabel = "Get in touch",
  secondaryHref = "/work",
  secondaryLabel = "View work",
}: CallToActionProps) {
  return (
    <div className="relative mx-auto flex w-full max-w-3xl flex-col justify-between gap-y-4 overflow-hidden border-y border-border px-4 py-10 dark:bg-[radial-gradient(35%_80%_at_25%_0%,--theme(--color-foreground/.08),transparent)]">
      <DecorIcon className="size-4" position="top-left" />
      <DecorIcon className="size-4" position="top-right" />
      <DecorIcon className="size-4" position="bottom-left" />
      <DecorIcon className="size-4" position="bottom-right" />

      <div className="pointer-events-none absolute -inset-y-6 -left-px w-px border-l border-border" />
      <div className="pointer-events-none absolute -inset-y-6 -right-px w-px border-r border-border" />

      <p className="text-center font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
        Collaborate
      </p>
      <h2 className="text-center font-semibold text-xl md:text-3xl">{title}</h2>
      <p className="text-balance text-center font-medium text-muted-foreground text-sm md:text-base">
        {description}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button asChild variant="outline">
          <Link href={secondaryHref}>{secondaryLabel}</Link>
        </Button>
        <Button asChild variant="accent">
          <Link href={primaryHref}>
            {primaryLabel}
            <ArrowRightIcon data-icon="inline-end" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
