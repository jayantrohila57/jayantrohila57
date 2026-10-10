import { getAbsoluteUrl, siteConfig } from "@/config/site";
import { getBlogPost } from "@/lib/blog";
import { getProject, projects } from "@/data/portfolio";

export type BreadcrumbCrumb = {
  label: string;
  href?: string;
};

const STATIC_LABELS: Record<string, string> = {
  work: "Work",
  writing: "Writing",
  engineering: "Engineering",
  about: "About",
  resume: "Resume",
  contact: "Contact",
  experiments: "Experiments",
  elsewhere: "Elsewhere",
  interests: "Interests",
};

/** Route hierarchy for child pages (empty on homepage). */
export function getBreadcrumbs(pathname: string): BreadcrumbCrumb[] {
  const normalized = pathname.split("?")[0].replace(/\/$/, "") || "/";
  if (normalized === "/") return [];

  const crumbs: BreadcrumbCrumb[] = [
    { label: "Home", href: "/" },
  ];

  const parts = normalized.split("/").filter(Boolean);
  const [root, ...rest] = parts;

  if (root === "work") {
    crumbs.push({ label: "Work", href: "/work" });
    const slug = rest[0];
    if (slug) {
      const project = getProject(slug);
      crumbs.push({
        label: project?.title ?? formatSlugLabel(slug),
        href: `/work/${slug}`,
      });
    }
    return crumbs;
  }

  if (root === "writing") {
    crumbs.push({ label: "Writing", href: "/writing" });
    const slug = rest[0];
    if (slug) {
      const post = getBlogPost(slug);
      crumbs.push({
        label: post?.title ?? formatSlugLabel(slug),
        href: `/writing/${slug}`,
      });
    }
    return crumbs;
  }

  const label = STATIC_LABELS[root] ?? formatSlugLabel(root);
  crumbs.push({ label, href: `/${root}` });
  return crumbs;
}

function formatSlugLabel(segment: string) {
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/** Parent route for the back button when history back is not used. */
export function getBackHref(crumbs: BreadcrumbCrumb[]): string {
  if (crumbs.length < 2) return "/";
  const parent = crumbs[crumbs.length - 2];
  return parent.href ?? "/";
}

export function breadcrumbListStructuredData(crumbs: BreadcrumbCrumb[]) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      item:
        crumb.href === "/"
          ? siteConfig.siteUrl
          : crumb.href
            ? getAbsoluteUrl(crumb.href)
            : undefined,
    })),
  });
}

/** Validate slug coverage for work projects (build-time sanity). */
export function allWorkSlugsHaveProjects() {
  return projects.every((p) => getProject(p.slug));
}
