"use client";

import Image from "next/image";
import { useState } from "react";
import { ProjectPreviewBySlug } from "@/components/portfolio/project-previews";
import type { PortfolioProject } from "@/data/portfolio";
import { cn } from "@/lib/cn";
import {
  getProjectScreenshotPath,
  projectHasScreenshot,
} from "@/lib/project-media";

type ProjectMediaProps = {
  project: PortfolioProject;
  className?: string;
  priority?: boolean;
};

export function ProjectMedia({
  project,
  className,
  priority = false,
}: ProjectMediaProps) {
  const [useFallback, setUseFallback] = useState(
    !projectHasScreenshot(project.slug),
  );

  if (useFallback) {
    return (
      <div className={cn("relative", className)} aria-hidden>
        <ProjectPreviewBySlug project={project} />
      </div>
    );
  }

  const src = getProjectScreenshotPath(project.slug);

  return (
    <div
      className={cn(
        "relative overflow-hidden border border-border bg-surface",
        className,
      )}
    >
      <Image
        src={src}
        alt={`Screenshot of ${project.title}`}
        width={1280}
        height={720}
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 640px"
        className="h-auto w-full object-cover object-top"
        onError={() => setUseFallback(true)}
      />
    </div>
  );
}
