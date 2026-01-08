// Site Configuration Types
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  domain: string;
  author: {
    name: string;
    email: string;
  };
  theme: {
    defaultMode: "light" | "dark" | "system";
  };
  social: SocialLink[];
  navigation: {
    label: string;
    href: string;
  }[];
  logo: {
    text: string;
    icon?: string;
  };
  footer: {
    copyright: string;
    links: {
      label: string;
      href: string;
    }[];
  };
}

// SEO Types
export interface SEOConfig {
  titleTemplate: string;
  defaultTitle: string;
  defaultDescription: string;
  keywords: string[];
  openGraph: {
    type: string;
    locale: string;
    siteName: string;
    defaultImage: string;
  };
  twitter: {
    card: string;
    site: string;
    creator: string;
  };
}

// Profile Types
export interface Profile {
  name: string;
  role: string;
  summary: string;
  bio: string;
  location: string;
  email: string;
  phone?: string;
  availability: {
    status: "available" | "limited" | "unavailable";
    message: string;
  };
  avatar: string;
  resume?: string;
  social: SocialLink[];
}

// Project Types
export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  featured: boolean;
  category: string;
  role: string;
  year: number;
  duration: string;
  thumbnail: string;
  images: string[];
  tech: string[];
  liveUrl?: string | null;
  githubUrl?: string | null;
  overview: string;
  architecture: string;
  challenges: {
    title: string;
    description: string;
  }[];
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
}

// Experience Types
export interface Experience {
  id: string;
  company: string;
  companyUrl?: string;
  logo?: string;
  location: string;
  type: "full-time" | "part-time" | "contract" | "freelance";
  roles: {
    title: string;
    startDate: string;
    endDate: string | "Present";
    description: string;
    achievements: string[];
    tech: string[];
  }[];
}

// Blog Types
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  tags: string[];
  readTime: number;
  featured: boolean;
  thumbnail?: string;
  seo: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
}

// Case Study Types
export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  industry: string;
  duration: string;
  year: number;
  thumbnail: string;
  featured: boolean;
  problem: {
    summary: string;
    details: string[];
  };
  solution: {
    summary: string;
    approach: string[];
    tech: string[];
  };
  impact: {
    summary: string;
    metrics: {
      label: string;
      value: string;
      description: string;
    }[];
  };
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

// Testimonial Types
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

// Tech Stack Types
export interface TechCategory {
  category: string;
  description: string;
  items: {
    name: string;
    icon: string;
    description: string;
    proficiency: "expert" | "advanced" | "intermediate";
  }[];
}
