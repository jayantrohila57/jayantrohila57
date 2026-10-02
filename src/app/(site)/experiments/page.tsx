import Link from "next/link";
import {
  BentoPanel,
  SectionFrame,
  SectionIntro,
} from "@/components/primitives/section-frame";
import { experiments } from "@/data/portfolio";
import { generatePageMetadata } from "@/config/metadata";

export const metadata = generatePageMetadata({
  title: "Experiments",
  description: "Secondary libraries, CMS experiments, and meta projects.",
  path: "/experiments",
});

export default function ExperimentsPage() {
  return (
    <SectionFrame border={false} className="pt-12">
      <SectionIntro
        title="Experiments"
        description="Smaller public repos and UI libraries — supporting the flagship work."
      />
      <div className="grid gap-1 md:grid-cols-2">
        {experiments.map((exp, i) => (
          <BentoPanel key={exp.slug} dominant={i === 0}>
            <h2 className="text-xl font-semibold">{exp.title}</h2>
            <p className="mt-3 text-sm text-muted">{exp.summary}</p>
            <p className="mt-4 font-mono text-[10px] text-muted">
              {exp.stack.join(" · ")}
            </p>
            <div className="mt-6 flex gap-4 font-mono text-xs">
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
      <Link
        href="/"
        className="mt-10 inline-block font-mono text-sm text-accent hover:underline"
      >
        ← Home
      </Link>
    </SectionFrame>
  );
}
