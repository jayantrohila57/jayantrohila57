import Link from "next/link";
import {
  SectionFrame,
  SectionIntro,
  SectionLabel,
  BentoPanel,
} from "@/components/primitives/section-frame";
import { experiments } from "@/data/portfolio";

export function ExperimentsSection() {
  return (
    <SectionFrame id="experiments">
      <SectionLabel index="06" label="Experiments" />
      <SectionIntro
        title="Lab shelf — smaller tools and libraries."
        action={
          <Link
            href="/experiments"
            className="font-mono text-xs tracking-wide text-accent hover:underline"
          >
            Open lab →
          </Link>
        }
      />
      <div className="grid auto-rows-fr gap-1 md:grid-cols-12">
        {experiments.map((exp, i) => (
          <BentoPanel
            key={exp.slug}
            className={
              i === 0
                ? "md:col-span-7 md:row-span-2"
                : i === 1
                  ? "md:col-span-5"
                  : "md:col-span-12"
            }
          >
            <p className="font-mono text-[10px] text-muted uppercase">
              Experiment
            </p>
            <h3 className="mt-2 text-lg font-semibold">{exp.title}</h3>
            <p className="mt-2 text-sm text-muted">{exp.summary}</p>
            <div className="mt-4 flex flex-wrap gap-3 font-mono text-[10px]">
              {exp.links.github ? (
                <a
                  href={exp.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  GitHub
                </a>
              ) : null}
              {exp.links.live ? (
                <a
                  href={exp.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-foreground"
                >
                  Live
                </a>
              ) : null}
            </div>
          </BentoPanel>
        ))}
      </div>
    </SectionFrame>
  );
}
