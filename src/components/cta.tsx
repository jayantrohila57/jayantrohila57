import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type CallToActionProps = {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

/** Final homepage CTA — rail-to-rail width; borders come from section rules only. */
export function CallToAction({
  title = "Have something worth building?",
  description = "I work on product interfaces, frontend architecture, and full-stack web applications.",
  primaryHref = "/contact",
  primaryLabel = "Get in touch",
  secondaryHref = "/work",
  secondaryLabel = "View work",
}: CallToActionProps) {
  return (
    <div
      className="flex w-full flex-col justify-between gap-y-4 bg-background px-4 py-10 md:px-6 md:py-12"
    >
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
