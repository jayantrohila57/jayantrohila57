import Link from "next/link";
import { FullWidthDivider } from "@/components/full-width-divider";
import { ProjectScene } from "@/components/portfolio/project-scene";
import {
  inlineBodyLinkClass,
  SectionFrame,
  SectionIntro,
} from "@/components/primitives/section-frame";
import { generatePageMetadata } from "@/config/metadata";
import { getWorkPageProjectsByTier } from "@/data/portfolio";

export const metadata = generatePageMetadata({
  title: "Work",
  description:
    "Flagship and supporting software projects — Taskflow, Env Manager, libyui, commerce, and experiments.",
  path: "/work",
});

export default function WorkPage() {
  const tiers = getWorkPageProjectsByTier();
  let sceneIndex = 0;

  return (
    <SectionFrame border={false} spacing="tight" className="pt-8">
      <div className="px-4">
        <SectionIntro
          label="Work"
          title="Selected projects"
          description="Curated open-source work with repositories and live demos where available."
        />
      </div>
      <FullWidthDivider />
      {tiers.map((tier) => (
        <div key={tier.key}>
          <div className="border-b border-border px-4 py-6">
            <h2 className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
              {tier.title}
            </h2>
          </div>
          <div className="grid gap-px bg-border">
            {tier.projects.map((project) => {
              sceneIndex += 1;
              return (
                <ProjectScene
                  key={project.slug}
                  project={project}
                  index={sceneIndex}
                />
              );
            })}
          </div>
        </div>
      ))}
      <FullWidthDivider />
      <p className="px-4 py-8 text-sm text-muted-foreground">
        Private client repositories are not listed here.{" "}
        <Link href="/contact" className={inlineBodyLinkClass}>
          Contact
        </Link>{" "}
        for professional inquiries.
      </p>
    </SectionFrame>
  );
}
