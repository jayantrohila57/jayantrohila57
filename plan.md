# Portfolio Dynamic Implementation Plan

A focused plan to make the portfolio fully dynamic using Sanity CMS as the single source of truth.

---

## Phase 1: Foundation & Data Setup

### 1.1 Sanity Content Population
- [ ] Add Profile document (name, role, bio, avatar, social links, availability)
- [ ] Add Site Settings document (site name, title, description, theme colors)
- [ ] Add SEO Settings document (default metadata, OG images, Twitter config)

### 1.2 Query Validation
- [ ] Test `getProfile()` returns valid data
- [ ] Test `getSiteSettings()` returns valid data
- [ ] Test `getSeoSettings()` returns valid data

---

## Phase 2: Core Layout Integration

### 2.1 Layout Components
- [ ] Update `layout.tsx` to use dynamic site settings for metadata
- [ ] Update Header to use dynamic navigation from Sanity (or keep hardcoded if simpler)
- [ ] Update Footer to use dynamic copyright and social links

### 2.2 Metadata Integration
- [ ] Replace static `metadata.ts` with dynamic Sanity-sourced metadata
- [ ] Update `opengraph-image.tsx` to use dynamic OG settings
- [ ] Update `twitter-image.tsx` to use dynamic Twitter settings
- [ ] Update `manifest.ts` to pull from Sanity site settings

---

## Phase 3: Home Page Sections

### 3.1 Hero Section
- [ ] Connect hero to Profile data (name, role, summary, avatar)
- [ ] Add dynamic availability badge
- [ ] Link social icons to Profile social array

### 3.2 About/Bio Section
- [ ] Fetch and display bio from Profile
- [ ] Display location and contact info dynamically

### 3.3 Skills Section
- [ ] Connect to `getSkills()` query
- [ ] Render skill categories dynamically
- [ ] Remove hardcoded `tech-stack.json` dependency

### 3.4 Featured Projects Section
- [ ] Fetch from `getProjects()` with featured filter
- [ ] Display project cards with Sanity data
- [ ] Link to dynamic project detail pages

### 3.5 Experience Section (if on home)
- [ ] Fetch from `getExperiences()`
- [ ] Display timeline with dynamic data

### 3.6 Testimonials Section
- [ ] Fetch from `getTestimonials()`
- [ ] Display testimonial cards/carousel

---

## Phase 4: Dynamic Content Pages

### 4.1 Projects Page (`/projects`)
- [ ] List all projects from Sanity
- [ ] Add category/tech filtering (client-side)
- [ ] Dynamic metadata per page

### 4.2 Project Detail Page (`/projects/[slug]`)
- [ ] Fetch single project via `getProjectBySlug()`
- [ ] Display all project details (images, tech, challenges, results)
- [ ] Generate static paths for SSG

### 4.3 Experience Page (`/experience`)
- [ ] Full experience timeline from Sanity
- [ ] Display roles, achievements, tech stack

### 4.4 Blog Page (`/blog`)
- [ ] List all posts from `getPosts()`
- [ ] Add tag filtering
- [ ] Dynamic metadata

### 4.5 Blog Post Detail (`/blog/[slug]`)
- [ ] Fetch single post via `getPostBySlug()`
- [ ] Render rich text content
- [ ] Generate static paths

### 4.6 Case Studies Page (`/case-studies`)
- [ ] List case studies from `getCaseStudies()`
- [ ] Display problem/solution cards

### 4.7 Case Study Detail (`/case-studies/[slug]`)
- [ ] Fetch via `getCaseStudyBySlug()`
- [ ] Full case study layout with metrics
- [ ] Generate static paths

---

## Phase 5: Contact & Utilities

### 5.1 Contact Page
- [ ] Display dynamic contact info from Profile
- [ ] Keep existing contact form functional
- [ ] Show availability status

### 5.2 SEO & Sitemap
- [ ] Update `sitemap.ts` to generate from Sanity slugs
- [ ] Update `robots.ts` with dynamic siteUrl
- [ ] Ensure all pages have dynamic metadata

---

## Phase 6: Cleanup & Optimization

### 6.1 Remove Static Dependencies
- [ ] Deprecate/remove static `site.config.ts` (or keep as fallback)
- [ ] Remove unused static data files
- [ ] Clean up unused type definitions

### 6.2 Caching Strategy
- [ ] Implement ISR with appropriate revalidation times
- [ ] Add `cache: "force-cache"` for stable content
- [ ] Configure on-demand revalidation endpoints if needed

### 6.3 Error Handling
- [ ] Add fallback content when Sanity data is unavailable
- [ ] Implement loading states for dynamic sections

---

## Verification Checkpoints

| Phase | Verification |
|-------|--------------|
| 1 | Sanity Studio shows populated documents |
| 2 | Layout renders correctly with dynamic data |
| 3 | Home page sections display Sanity content |
| 4 | All content pages render without errors |
| 5 | SEO tags and sitemap reflect dynamic content |
| 6 | Build succeeds, no console errors in production |

---

## Notes

- **Schema already exists** for: Profile, Projects, Experience, Skills, CaseStudy, Posts, Testimonials, SiteSettings, SEOSettings
- **Queries already exist** in `src/sanity/query/queries.ts`
- **Components exist** in `src/components/sections/` - need to be connected to Sanity data
- Keep static config as fallback for development/testing when Sanity is empty
