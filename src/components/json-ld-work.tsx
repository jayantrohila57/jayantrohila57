import type { PortfolioProject } from "@/data/portfolio";
import {
  projectBreadcrumbStructuredData,
  projectWebPageStructuredData,
} from "@/lib/structured-data";

export function WorkProjectJsonLd({ project }: { project: PortfolioProject }) {
  const graph = [
    JSON.parse(projectWebPageStructuredData(project)),
    JSON.parse(projectBreadcrumbStructuredData(project)),
  ];

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
