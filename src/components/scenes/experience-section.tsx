import Link from "next/link";
import {
  SectionFrame,
  SectionIntro,
  SectionLabel,
  sectionActionLinkClass,
} from "@/components/primitives/section-frame";
import { PageBleed } from "@/components/primitives/page-column";
import { experience } from "@/data/portfolio";

function ExperienceCard({
  item,
  featured,
}: {
  item: (typeof experience)[number];
  featured?: boolean;
}) {
  return (
    <article
      className={
        featured ? "bg-background p-6 md:p-8" : "bg-background/80 p-6 md:p-8"
      }
    >
      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
            {item.company}
          </h3>
          <p className="mt-1 text-sm font-medium text-foreground">
            {item.role}
          </p>
        </div>
        <p className="font-mono text-[11px] text-muted-foreground uppercase md:text-right">
          {item.period}
          {item.location ? (
            <span className="mt-1 block normal-case">{item.location}</span>
          ) : null}
        </p>
      </div>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
        {item.summary}
      </p>
      {item.highlights.length > 0 ? (
        <ul className="mt-4 max-w-3xl space-y-2 text-sm leading-relaxed text-muted-foreground">
          {item.highlights.map((line) => (
            <li key={line} className="flex gap-2">
              <span className="text-link-accent" aria-hidden>
                ·
              </span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {item.technologies.length > 0 ? (
        <p className="mt-4 font-mono text-[10px] tracking-wide text-muted-foreground uppercase">
          {item.technologies.join(" · ")}
        </p>
      ) : null}
    </article>
  );
}

/** Homepage experience — weighted toward recent production roles. */
export function ExperienceSection() {
  const [primary, secondary, ...rest] = experience;

  return (
    <SectionFrame id="experience" border>
      <div className="pt-2">
        <SectionLabel index="06" label="Experience" />
        <SectionIntro
          title="Production software before side projects."
          description="~2 years shipping client-facing web features at Binmile; now Product Engineer at aiQmen."
          action={
            <Link href="/about#experience" className={sectionActionLinkClass}>
              Full timeline →
            </Link>
          }
        />
      </div>
      <PageBleed className="grid gap-px border-t border-border bg-border lg:grid-cols-2">
        {primary ? <ExperienceCard item={primary} featured /> : null}
        {secondary ? <ExperienceCard item={secondary} featured /> : null}
      </PageBleed>
      {rest.length > 0 ? (
        <PageBleed className="divide-y divide-border border-t border-border">
          {rest.map((item) => (
            <ExperienceCard key={item.id} item={item} />
          ))}
        </PageBleed>
      ) : null}
    </SectionFrame>
  );
}
