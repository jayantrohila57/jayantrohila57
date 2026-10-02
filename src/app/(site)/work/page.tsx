import Link from "next/link";
import { FullWidthDivider } from "@/components/full-width-divider";
import { ProjectScene } from "@/components/portfolio/project-scene";
import {
  SectionFrame,
  SectionIntro,
} from "@/components/primitives/section-frame";
import { generatePageMetadata } from "@/config/metadata";
import { projects } from "@/data/portfolio";

export const metadata = generatePageMetadata({
  title: "Work",
  description:
    "Selected software projects — e-commerce, Env Manager, Taskflow, and supporting experiments.",
  path: "/work",
});

const filters = ["All", "Product", "Frontend", "Backend", "Systems"];

export default function WorkPage() {
  return (
    <SectionFrame border={false} spacing="tight" className="pt-8">
      <div className="px-4">
        <SectionIntro
          label="Work"
          title="Selected projects"
          description="Open-source projects with public repositories and hosted demos where available."
        />
        <div className="mb-6 flex flex-wrap gap-2 font-mono text-[10px] text-muted-foreground uppercase">
          {filters.map((f) => (
            <span
              key={f}
              className="rounded-md border border-border px-2 py-1"
            >
              {f}
            </span>
          ))}
        </div>
      </div>
      <FullWidthDivider />
      <div className="grid gap-px bg-border">
        {projects.map((project, i) => (
          <ProjectScene key={project.slug} project={project} index={i + 1} />
        ))}
      </div>
      <FullWidthDivider />
      <p className="px-4 py-8 text-sm text-muted-foreground">
        bad-money and other private repositories are not listed here.{" "}
        <Link
          href="/contact"
          className="text-[color:var(--accent-muted)] hover:underline"
        >
          Contact
        </Link>{" "}
        for professional inquiries.
      </p>
    </SectionFrame>
  );
}
