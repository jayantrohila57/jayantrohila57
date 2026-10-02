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
  headline: "Product Engineer @ aiQmen",
  location: "Noida, India",
  email: "jrohila55@gmail.com",
  summary:
    "Product engineer building full-stack web applications — clear UX, typed APIs, and maintainable delivery. Open-source side projects on GitHub (CMS, env tooling, task platforms).",
  links: [
    { label: "Portfolio", href: "https://jayantrohila.com" },
    { label: "GitHub", href: "https://github.com/jayantrohila57" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jayant-rohila/" },
    { label: "Work GitHub", href: "https://github.com/jayantaiqmen" },
  ],
  experience: [
    {
      organization: "aiQmen (AIQMEN DESIGNS AND TECHNOLOGIES PVT LTD)",
      title: "Product Engineer / Consultant–Product Engineer",
      period: "May 2026 – Present",
      location: "Noida",
      bullets: [
        "Product engineering for software engagements — web products with modern TypeScript/React-style stacks.",
        "Employer deliverables and client names are not listed on this public resume.",
      ],
    },
    {
      organization: "Binmile Technologies Pvt. Ltd.",
      title: "Associate Software Developer",
      period: "Mar 2024 – Apr 2026",
      bullets: [
        "Full-stack software delivery in a services environment; trainee from join, associate from Jun 2024.",
        "Public title on some profiles: Software Engineer / SDE — HR title used here.",
      ],
    },
    {
      organization: "Teevro Solutions Pvt. Ltd.",
      title: "Full Stack Development Intern",
      period: "Jan 2023 – Apr 2023",
      bullets: [
        "Structured full-stack internship — web application patterns alongside a product team.",
      ],
    },
    {
      organization: "Braeon",
      title: "Software Developer–Trainee",
      period: "Mid 2021 – Oct 2021",
      bullets: [
        "ServiceNow administration and development alongside general software trainee work.",
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
    "TypeScript, JavaScript, React, Next.js (App Router), Tailwind CSS",
    "Node.js, tRPC, REST, Prisma, PostgreSQL, Neon",
    "NextAuth / Better Auth, Vercel, Docker, Git, GitHub Actions",
    "TipTap, Sanity, TanStack Query, Zod, testing & lint tooling",
  ],
  projects: [
    {
      name: "E-commerce",
      href: "https://github.com/jayantrohila57/e-commerce",
      summary:
        "Storefront — Next.js, tRPC, Drizzle, Better Auth, Razorpay.",
    },
    {
      name: "Env Manager",
      href: "https://github.com/jayantrohila57/env-manager",
      summary: "Secrets and env vars across environments — Better Auth, Neon.",
    },
    {
      name: "Taskflow",
      href: "https://github.com/jayantrohila57/taskflow",
      summary: "Multi-tenant task and project management platform.",
    },
    {
      name: "Portfolio site",
      href: "https://github.com/jayantrohila57/jayantrohila57",
      summary: "jayantrohila.com — Fumadocs, Next.js.",
    },
  ] satisfies ResumeProject[],
};

export const RESUME_PDF_PATH = "/resume.pdf";
