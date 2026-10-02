import Link from "next/link";
import { ProjectScene } from "@/components/portfolio/project-scene";
import { SectionFrame, SectionIntro } from "@/components/primitives/section-frame";
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
    <SectionFrame border={false} className="pt-12">
      <SectionIntro
        title="Work"
        description="Open-source projects with public repositories and hosted demos where available."
      />
      <div className="mb-8 flex flex-wrap gap-2 font-mono text-[10px] text-muted uppercase">
        {filters.map((f) => (
          <span key={f} className="rounded-[var(--radius-sm)] border border-border px-2 py-1">
            {f}
          </span>
        ))}
      </div>
      <div className="space-y-6">
        {projects.map((project, i) => (
          <ProjectScene key={project.slug} project={project} index={i + 1} />
        ))}
      </div>
      <p className="mt-12 text-sm text-muted">
        bad-money and other private repositories are not listed here.{" "}
        <Link href="/contact" className="text-accent hover:underline">
          Contact
        </Link>{" "}
        for professional inquiries.
      </p>
    </SectionFrame>
  );
}
