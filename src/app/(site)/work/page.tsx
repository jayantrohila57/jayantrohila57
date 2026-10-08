import Link from "next/link";
import { ProjectScene } from "@/components/portfolio/project-scene";
import { PageBleed } from "@/components/primitives/page-column";
import {
  inlineBodyLinkClass,
  SectionFrame,
  SectionIntro,
} from "@/components/primitives/section-frame";
import { generatePageMetadata } from "@/config/metadata";
import { staticPageSeo } from "@/config/page-seo";
import { getWorkPageProjectsByTier } from "@/data/portfolio";

export const metadata = generatePageMetadata({
  title: staticPageSeo.work.title,
  description: staticPageSeo.work.description,
  path: "/work",
});

export default function WorkPage() {
  const tiers = getWorkPageProjectsByTier();
  let sceneIndex = 0;

  return (
    <SectionFrame border={false} spacing="tight" className="pt-8">
      <div>
        <SectionIntro
          label="Work"
          title="Selected projects"
          description="Curated open-source work with repositories and live demos where available."
        />
      </div>
      {tiers.map((tier) => (
        <div key={tier.key}>
          <PageBleed className="border-t border-border">
          <div className="border-b border-border px-4 py-6 md:px-6">
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
          </PageBleed>
        </div>
      ))}
      <p className="py-8 text-sm text-muted-foreground">
        Private client repositories are not listed here.{" "}
        <Link href="/contact" className={inlineBodyLinkClass}>
          Contact
        </Link>{" "}
        for professional inquiries.
      </p>
    </SectionFrame>
  );
}
