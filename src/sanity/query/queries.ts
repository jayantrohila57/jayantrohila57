import { groq } from "next-sanity";
import type {
  BlogPost,
  CaseStudy,
  Experience,
  Profile,
  Project,
  SEOConfig,
  SiteSettings,
  Skills,
  Testimonial,
} from "@/data/types";

import { client } from "../lib/client";

export const experiencesQuery = groq`
*[_type == "experience"] | order(roles[0].startDate desc) {
  _id,
  company,
  companyUrl,
  location,
  type,
  "logo": logo.asset->url,
  roles[] {
    title,
    startDate,
    endDate,
    description,
    achievements,
    tech
  }
}
`;

export const skillsQuery = groq`
*[_type == "skills"][0]{
  categories[]{
    category,
    description,
    items[]{
      name,
      icon,
      proficiency,
      description
    }
  }
}
`;

export const profileQuery = groq`
*[_type == "profile"][0]{
  name,
  role,
  summary,
  bio,
  location,
  email,
  phone,
  availability{status, message},
  "avatar": avatar.asset->url,
  resume,
  social[]{platform, url, icon, label}
}`;

export const projectsQuery = groq`
*[_type == "project"] | order(featured desc, year desc){
  "id": _id,
  "slug": slug.current,
  title,
  subtitle,
  description,
  featured,
  category,
  role,
  year,
  duration,
  "thumbnail": thumbnail.asset->url,
  "images": images[].asset->url,
  tech,
  liveUrl,
  githubUrl,
  overview,
  architecture,
  challenges[]{title, description},
  results[]{metric, value, description}
}`;

export const caseStudiesQuery = groq`
*[_type == "caseStudy"] | order(featured desc, year desc){
  "id": _id,
  "slug": slug.current,
  title,
  subtitle,
  client,
  industry,
  duration,
  year,
  "thumbnail": thumbnail.asset->url,
  featured,
  problem{ summary, details },
  solution{ summary, approach, tech },
  impact{ summary, metrics[]{ label, value, description } },
  testimonial{ quote, author, role }
}`;

export const postsQuery = groq`
*[_type == "post"] | order(publishedAt desc){
  "id": _id,
  "slug": slug.current,
  title,
  excerpt,
  "content": pt::text(body),
  publishedAt,
  updatedAt,
  "author": author->name,
  tags,
  readTime,
  featured,
  "thumbnail": mainImage.asset->url,
  seo{ title, description, keywords }
}`;

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0]{
  "id": _id,
  "slug": slug.current,
  title,
  excerpt,
  "content": pt::text(body),
  publishedAt,
  updatedAt,
  "author": author->name,
  tags,
  readTime,
  featured,
  "thumbnail": mainImage.asset->url,
  seo{ title, description, keywords }
}`;

export const seoSettingsQuery = groq`
*[_type == "seoSettings"][0]{
  titleTemplate,
  defaultTitle,
  defaultDescription,
  keywords,
  openGraph{
    type,
    locale,
    siteName,
    "defaultImage": defaultImage.asset->url
  },
  twitter{ card, site, creator }
}`;

export const siteSettingsQuery = groq`
*[_type == "siteSettings"][0]{
  siteName,
  siteTitle,
  siteDescription,
  siteUrl,
  author{
    name,
    email,
    role,
    bio,
    location,
    "avatar": avatar.asset->url
  },
  social[]{ platform, url, icon, label },
  theme{ primaryColor, backgroundColor, textColor }
}`;

export async function getExperiences(): Promise<Experience[]> {
  return client.fetch<Experience[]>(
    experiencesQuery,
    {},
    {
      // cache: "force-cache",
      // next: { revalidate: 60 }, // ISR: refresh every 60s
    },
  );
}

export async function getSkills(): Promise<Skills | null> {
  return client.fetch<Skills | null>(
    skillsQuery,
    {},
    {
      // cache: "force-cache",
      // next: { revalidate: 60 }, // ISR: refresh every 60s
    },
  );
}

export async function getProfile(): Promise<Profile | null> {
  return client.fetch<Profile | null>(profileQuery);
}

export async function getProjects(): Promise<Project[]> {
  return client.fetch<Project[]>(projectsQuery);
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  return client.fetch<CaseStudy[]>(caseStudiesQuery);
}

export async function getPosts(): Promise<BlogPost[]> {
  return client.fetch<BlogPost[]>(postsQuery);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  return client.fetch<BlogPost | null>(postBySlugQuery, { slug });
}

export async function getSeoSettings(): Promise<SEOConfig | null> {
  return client.fetch<SEOConfig | null>(seoSettingsQuery);
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return client.fetch<SiteSettings | null>(siteSettingsQuery);
}

export const testimonialsQuery = groq`
*[_type == "testimonial"] | order(featured desc, _createdAt desc){
  "id": _id,
  quote,
  author,
  role,
  company,
  "avatar": avatar.asset->url,
  featured
}`;

export async function getTestimonials(): Promise<Testimonial[]> {
  return client.fetch<Testimonial[]>(testimonialsQuery);
}

export const projectBySlugQuery = groq`
*[_type == "project" && slug.current == $slug][0]{
  "id": _id,
  "slug": slug.current,
  title,
  subtitle,
  description,
  featured,
  category,
  role,
  year,
  duration,
  "thumbnail": thumbnail.asset->url,
  "images": images[].asset->url,
  tech,
  liveUrl,
  githubUrl,
  overview,
  architecture,
  challenges[]{title, description},
  results[]{metric, value, description}
}`;

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  return client.fetch<Project | null>(projectBySlugQuery, { slug });
}

export const caseStudyBySlugQuery = groq`
*[_type == "caseStudy" && slug.current == $slug][0]{
  "id": _id,
  "slug": slug.current,
  title,
  subtitle,
  client,
  industry,
  duration,
  year,
  "thumbnail": thumbnail.asset->url,
  featured,
  problem{ summary, details },
  solution{ summary, approach, tech },
  impact{ summary, metrics[]{ label, value, description } },
  testimonial{ quote, author, role }
}`;

export async function getCaseStudyBySlug(
  slug: string,
): Promise<CaseStudy | null> {
  return client.fetch<CaseStudy | null>(caseStudyBySlugQuery, { slug });
}
