export type KbSection =
  | "about"
  | "career"
  | "work"
  | "contact"
  | "presence"
  | "archive"
  | "normalize";

const sectionLabels: Record<KbSection, string> = {
  about: "About",
  career: "Career",
  work: "Engineering work",
  contact: "Contact",
  presence: "Presence",
  archive: "Archive",
  normalize: "Normalize",
};

export function getKbSection(slug: string[]): KbSection | "root" {
  const root = slug[0];
  if (!root) return "root";
  if (root in sectionLabels) return root as KbSection;
  return "root";
}

export function getSectionLabel(section: KbSection | "root"): string {
  if (section === "root") return "Knowledge base";
  return sectionLabels[section];
}

export function buildBreadcrumbs(slug: string[], pageTitle: string) {
  const crumbs: { label: string; href?: string }[] = [
    { label: "Home", href: "/" },
    { label: "Knowledge base", href: "/about/overview" },
  ];

  if (slug.length === 0) return crumbs;

  const section = getKbSection(slug);
  if (section !== "root") {
    const sectionHref = defaultSectionHref(section, slug);
    crumbs.push({ label: getSectionLabel(section), href: sectionHref });
  }

  const pathParts = slug.slice(1);
  let acc = `/${slug[0]}`;
  for (const part of pathParts) {
    acc += `/${part}`;
    crumbs.push({
      label: formatSegment(part),
      href: acc,
    });
  }

  if (crumbs.length > 0) {
    crumbs[crumbs.length - 1] = { label: pageTitle };
  }

  return crumbs;
}

function defaultSectionHref(section: KbSection, slug: string[]): string {
  switch (section) {
    case "about":
      return "/about/overview";
    case "career":
      return "/career/timeline";
    case "work":
      return slug[1] === "case-studies"
        ? "/work/case-studies"
        : "/work/projects";
    case "contact":
      return "/contact";
    case "presence":
      return "/presence/website";
    case "archive":
      return "/archive/mentions";
    case "normalize":
      return "/normalize/charter";
    default:
      return `/${slug[0]}`;
  }
}

function formatSegment(segment: string): string {
  return segment
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export function isArchiveSection(slug: string[]): boolean {
  const section = getKbSection(slug);
  return section === "archive" || section === "normalize";
}
