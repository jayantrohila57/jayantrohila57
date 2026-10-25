/** How a portfolio item relates to employment — used for /work filters only. */
export type WorkEngagement = "personal" | "professional" | "freelance";

export const workEngagementFilters: {
  key: WorkEngagement | "all";
  label: string;
  description: string;
}[] = [
  {
    key: "all",
    label: "All",
    description: "Every public project and lab repo on this site.",
  },
  {
    key: "personal",
    label: "Personal",
    description: "Open-source and side projects with public repos or demos.",
  },
];

export function parseWorkEngagementFilter(
  value: string | undefined,
): WorkEngagement | "all" {
  if (
    value === "personal" ||
    value === "professional" ||
    value === "freelance"
  ) {
    return value;
  }
  return "all";
}
