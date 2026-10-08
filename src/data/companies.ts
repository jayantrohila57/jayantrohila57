export type Company = {
  id: string;
  name: string;
  shortName: string;
  monogram: string;
  href: string;
  period: string;
  role: string;
  location?: string;
};

export const companies: Company[] = [
  {
    id: "aiqmen",
    name: "aiQmen (AIQMEN DESIGNS AND TECHNOLOGIES PVT LTD)",
    shortName: "aiQmen",
    monogram: "AQ",
    href: "/about#experience",
    period: "May 2026 – Present",
    role: "Product Engineer / Consultant–Product Engineer",
    location: "Noida",
  },
  {
    id: "binmile",
    name: "Binmile Technologies Pvt. Ltd.",
    shortName: "Binmile",
    monogram: "BM",
    href: "/about#experience",
    period: "Mar 2024 – Apr 2026",
    role: "Associate Software Developer",
  },
  {
    id: "teevro",
    name: "Teevro Solutions Pvt. Ltd.",
    shortName: "Teevro",
    monogram: "TV",
    href: "/about#experience",
    period: "Jan – Apr 2023",
    role: "Full Stack Development Intern",
  },
  {
    id: "braeon",
    name: "Braeon",
    shortName: "Braeon",
    monogram: "BR",
    href: "/about#experience",
    period: "Mid 2021 – Oct 2021",
    role: "Software Developer–Trainee",
  },
];

export function getCompany(id: string): Company | undefined {
  return companies.find((c) => c.id === id);
}
