import { getAbsoluteUrl } from "@/config/site";
import type { PortfolioProject } from "@/data/portfolio";
import { projectWebPageStructuredData } from "@/lib/structured-data";

export function WorkProjectJsonLd({ project }: { project: PortfolioProject }) {
  const graph: Record<string, unknown>[] = [
    JSON.parse(projectWebPageStructuredData(project)),
  ];

  if (project.links.github) {
    graph.push({
      "@type": "SoftwareSourceCode",
      name: project.title,
      description: project.ogDescription ?? project.summary,
      url: project.links.github,
      codeRepository: project.links.github,
      programmingLanguage: "TypeScript",
      author: {
        "@type": "Person",
        name: "Jayant Rohila",
        url: getAbsoluteUrl("/"),
      },
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        }),
      }}
    />
  );
}
