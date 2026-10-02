export type RoleStep = {
  title: string;
  from: string;
  to?: string;
  note?: string;
};

export const roleProgressionByCompany: Record<string, RoleStep[]> = {
  binmile: [
    {
      title: "Trainee (from join)",
      from: "18 Mar 2024",
      to: "16 Jun 2024",
    },
    {
      title: "Associate Software Developer",
      from: "17 Jun 2024",
      to: "16 Apr 2026",
      note: "HR title used on this site; some profiles say Software Engineer / SDE.",
    },
  ],
};

export type CompanyFacts = {
  facts: { label: string; value: string }[];
  external?: { label: string; href: string }[];
};

export const companyFacts: Record<string, CompanyFacts> = {
  aiqmen: {
    facts: [
      { label: "Entity", value: "AIQMEN DESIGNS AND TECHNOLOGIES PVT LTD" },
      { label: "Title", value: "Product Engineer / Consultant–Product Engineer" },
      { label: "Joined", value: "18 May 2026" },
      { label: "Status", value: "Present" },
      { label: "Location", value: "Noida" },
    ],
    external: [
      { label: "Work GitHub", href: "https://github.com/jayantaiqmen" },
    ],
  },
  binmile: {
    facts: [
      { label: "Employer", value: "Binmile Technologies Pvt. Ltd." },
      { label: "Title", value: "Associate Software Developer" },
      { label: "Start", value: "18 March 2024" },
      { label: "Last working day", value: "16 April 2026" },
    ],
    external: [
      { label: "Profile notes (titles)", href: "/archive/conflicts" },
    ],
  },
  teevro: {
    facts: [
      { label: "Employer", value: "Teevro Solutions Pvt. Ltd." },
      { label: "Title", value: "Full Stack Development Intern" },
      { label: "Period", value: "24 Jan – 30 Apr 2023" },
    ],
  },
  braeon: {
    facts: [
      { label: "Employer", value: "Braeon" },
      { label: "Title", value: "Software Developer–Trainee" },
      { label: "Period", value: "~Jul/Aug – Oct 2021" },
      { label: "Focus", value: "ServiceNow admin & development" },
    ],
  },
};
