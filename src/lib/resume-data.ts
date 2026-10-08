export type ResumeExperience = {
  organization: string;
  title: string;
  period: string;
  location?: string;
  bullets: string[];
};

export type ResumeProject = {
  name: string;
  href: string;
  liveHref?: string;
  summary: string;
};

export const resumeData = {
  name: "Jayant Rohila",
  headline: "Frontend-first Product Engineer | Next.js · React · TypeScript",
  location: "Noida, India",
  email: "jrohila55@gmail.com",
  summary:
    "Product engineer building full-stack web applications — clear UX, typed APIs, and maintainable delivery. Public GitHub work includes storefront, env tooling, and multi-tenant task platforms with live demos.",
  links: [
    { label: "Portfolio", href: "https://jayantrohila.com" },
    { label: "GitHub", href: "https://github.com/jayantrohila57" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jayant-rohila/" },
    { label: "Work GitHub", href: "https://github.com/jayantaiqmen" },
    { label: "Linktree", href: "https://linktr.ee/JayantRohila" },
  ],
  experience: [
    {
      organization: "aiQmen Designs & Technologies Pvt. Ltd.",
      title: "Product Engineer",
      period: "18 May 2026 – Present",
      location: "Noida",
      bullets: [
        "Building product interfaces and full-stack features with TypeScript, React, and Next.js on client software engagements.",
        "Own UI implementation, component structure, and API integration for product-facing features.",
      ],
    },
    {
      organization: "Binmile Technologies Pvt. Ltd.",
      title: "Associate Software Developer",
      period: "18 Mar 2024 – 16 Apr 2026",
      location: "Noida",
      bullets: [
        "Shipped production React and Next.js features — forms, tables, REST integration, and responsive UI in a services team.",
        "Built and maintained client-facing UI flows with validation-heavy forms, data tables, filters, and responsive layouts.",
        "Integrated frontend views with backend APIs and handled loading, error, and empty states.",
      ],
    },
    {
      organization: "Teevro Solutions Pvt. Ltd.",
      title: "Full Stack Development Intern",
      period: "24 Jan 2023 – 30 Apr 2023",
      bullets: [
        "Structured full-stack internship — web application patterns alongside a product team.",
      ],
    },
    {
      organization: "Braeon Technocrats Pvt. Ltd.",
      title: "Software Developer – Trainee",
      period: "Jul 2021 – Oct 2021",
      bullets: [
        "ServiceNow administration and development during a trainee software role.",
      ],
    },
  ] satisfies ResumeExperience[],
  education: [
    {
      credential: "B.Tech, Computer Science",
      institution: "Dev Bhoomi Group of Institutions, Saharanpur",
      period: "2020–2023",
      href: undefined,
    },
    {
      credential: "Diploma, Computer Science",
      institution:
        "DWARIKADHEESH Research Education & Management School, Saharanpur",
      period: "2016–2019",
      href: undefined,
    },
    {
      credential: "Responsive Web Design",
      institution: "freeCodeCamp",
      period: "Feb 2022",
      href: "https://www.freecodecamp.org/certification/jayant_rohila/responsive-web-design",
    },
  ],
  skills: [
    "TypeScript, JavaScript, HTML/CSS, React, Next.js (App Router), Tailwind, shadcn/ui, TanStack Query, React Hook Form, Zod",
    "Node.js, Express, REST, tRPC, PostgreSQL, Neon, Drizzle, Prisma, MongoDB (where used in projects)",
    "Better Auth, Razorpay (e-commerce), Vercel, Docker, GitHub Actions, Vitest, ESLint/Biome",
    "ServiceNow administration (trainee role, Braeon Technocrats)",
  ],
  projects: [
    {
      name: "E-commerce",
      href: "https://github.com/jayantrohila57/e-commerce",
      liveHref: "https://e-commerce-jayantrohila.vercel.app",
      summary: "Storefront — Next.js, tRPC, Drizzle, Better Auth, Razorpay.",
    },
    {
      name: "Env Manager",
      href: "https://github.com/jayantrohila57/env-manager",
      liveHref: "https://env-manager-web.vercel.app",
      summary: "Secrets and env vars across environments — Better Auth, Neon.",
    },
    {
      name: "Taskflow",
      href: "https://github.com/jayantrohila57/taskflow",
      liveHref: "https://v1-taskflow.vercel.app",
      summary: "Multi-tenant task platform — tRPC, Prisma, next-intl.",
    },
    {
      name: "Portfolio site",
      href: "https://github.com/jayantrohila57/jayantrohila57",
      liveHref: "https://jayantrohila.com",
      summary: "Next.js App Router portfolio and case studies.",
    },
  ] satisfies ResumeProject[],
};

export const RESUME_PDF_PATH = "/resume.pdf";
