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
  headline: "Product Engineer: React/Next.js, full-stack, AI features",
  location: "Noida, India",
  email: "jrohila55@gmail.com",
  summary:
    "Product Engineer with ~2.5 years shipping React and Next.js products — validation-heavy forms and data tables, typed APIs, and AI features. Open-source work includes Loftlancer (encrypted secrets manager), Feature Kits (shadcn registry of form and data-table kits), Modelry (streaming AI lab with a credits ledger), and Lucsum (storefront for my streetwear brand).",
  links: [
    { label: "Portfolio", href: "https://jayantrohila.com" },
    { label: "GitHub", href: "https://github.com/jayantrohila57" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jayant-rohila/" },
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
    "Vercel AI SDK, Ollama, Google Gemini (Modelry)",
    "Node.js, Express, REST, tRPC, PostgreSQL, Neon, Drizzle, MongoDB (where used in projects)",
    "Better Auth, Razorpay (e-commerce), Vercel, Docker, GitHub Actions, Vitest, ESLint/Biome",
    "ServiceNow administration (trainee role, Braeon Technocrats)",
  ],
  projects: [
    {
      name: "Loftlancer",
      href: "https://github.com/jayantrohila57/loftlancer",
      liveHref: "https://loftlancer.com",
      summary:
        "Environment and secrets manager — AES-256-GCM encryption at rest, tRPC, Drizzle, Better Auth, Turborepo.",
    },
    {
      name: "Feature Kits",
      href: "https://github.com/jayantrohila57/feature-kit",
      liveHref: "https://feature-kits.vercel.app",
      summary:
        "Form, data-table, layout and uploader kits for React/Next.js, shipped as a shadcn registry — React Hook Form, Zod, TanStack Table.",
    },
    {
      name: "Modelry",
      href: "https://github.com/jayantrohila57/modelry",
      liveHref: "https://modelry.vercel.app",
      summary:
        "AI lab — streaming chat on the Vercel AI SDK (Ollama / Gemini), threads, credits ledger, tRPC, Drizzle, Better Auth.",
    },
    {
      name: "Lucsum",
      href: "https://github.com/jayantrohila57/lucsum",
      liveHref: "https://lucsum.vercel.app",
      summary:
        "Storefront for my streetwear brand — Next.js, tRPC, Drizzle, Better Auth, server-verified Razorpay checkout.",
    },
  ] satisfies ResumeProject[],
};

export const RESUME_PDF_PATH = "/resume.pdf";
