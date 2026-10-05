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
  summary: string;
};

export const resumeData = {
  name: "Jayant Rohila",
  headline: "Product Engineer (Frontend) | Next.js · React.js · TypeScript",
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
      title: "Product Engineer (Consultant – Product Engineer on offer)",
      period: "18 May 2026 – Present",
      location: "Noida",
      bullets: [
        "Product engineering for software engagements — TypeScript, React, Next.js-style stacks.",
        "Client names and employer deliverables are not listed on this public resume.",
      ],
    },
    {
      organization: "Binmile Technologies Pvt. Ltd.",
      title: "Associate Software Developer",
      period: "18 Mar 2024 – 16 Apr 2026",
      location: "Noida",
      bullets: [
        "Trainee from join; Associate Software Developer from 17 Jun 2024.",
        "HR title used here; some profiles say Software Engineer / SDE.",
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
        "ServiceNow administration and development; also described as ServiceNow Admin & Dev Intern on older resumes.",
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
      href:
        "https://www.freecodecamp.org/certification/jayant_rohila/responsive-web-design",
    },
  ],
  skills: [
    "TypeScript, JavaScript, HTML/CSS, React, Next.js (App Router), Tailwind, shadcn/ui, TanStack Query, React Hook Form, Zod",
    "Node.js, Express, REST, tRPC, PostgreSQL, Neon, Drizzle, Prisma, MongoDB (where used in projects)",
    "Better Auth, Razorpay (e-commerce), Vercel, Docker, GitHub Actions, Vitest, ESLint/Biome",
    "ServiceNow (Braeon era — partial); not claiming microfrontends or unverified employer platforms here",
  ],
  projects: [
    {
      name: "E-commerce",
      href: "https://github.com/jayantrohila57/e-commerce",
      summary:
        "Storefront — Next.js, tRPC, Drizzle, Better Auth, Razorpay. Live: e-commerce-jayantrohila.vercel.app",
    },
    {
      name: "Env Manager",
      href: "https://github.com/jayantrohila57/env-manager",
      summary:
        "Secrets and env vars across environments — Better Auth, Neon. Live: env-manager-web.vercel.app",
    },
    {
      name: "Taskflow",
      href: "https://github.com/jayantrohila57/taskflow",
      summary:
        "Multi-tenant task platform — tRPC, Prisma, next-intl. Live: v1-taskflow.vercel.app",
    },
    {
      name: "Portfolio site",
      href: "https://github.com/jayantrohila57/jayantrohila57",
      summary: "jayantrohila.com — Next.js App Router portfolio.",
    },
  ] satisfies ResumeProject[],
};

export const RESUME_PDF_PATH = "/resume.pdf";
