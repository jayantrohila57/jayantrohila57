# SEO & discovery surface (restored vs dropped)

Ported from pre-rebuild production eras (#26–#29 Fumadocs portfolio shell and PR #30 composition site). **Fumadocs UI and doc OG routes are not restored.**

## Restored / kept (current App Router)

| Surface | Location | Notes |
| --- | --- | --- |
| Metadata API | `src/config/metadata.ts` | `title` template, description, keywords, authors, `metadataBase`, per-page canonicals via `generatePageMetadata`, robots, verification (only when `GOOGLE_SITE_VERIFICATION` or `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` is set and not a placeholder) |
| Open Graph + Twitter | `baseMetadata` + page overrides | `summary_large_image`, locale, siteName, dynamic image URLs |
| Dynamic images | `src/app/api/image/route.ts` | OG (1280×720), Twitter (750×1334), PWA icons; SoT headline + job title on social cards |
| OG alias | `src/app/api/og/route.ts` | 308 → `/api/image?type=og` |
| File OG/Twitter routes | `opengraph-image.tsx`, `twitter-image.tsx`, `icon.tsx` | Redirect to `/api/image?…` |
| Sitemap | `src/app/sitemap.ts` | `/`, `/work`, projects, `/engineering`, `/experiments`, `/about`, `/contact`, `/resume` |
| Robots | `src/app/robots.ts` | Allow public site; disallow `/api/`, `/playground/`, legacy `/private/`, `/admin/` |
| JSON-LD | `src/components/json-ld.tsx`, `src/lib/structured-data.ts` | `Person`, `WebSite`, `ProfilePage` — job title **Product Engineer (Consultant) · aiQmen**, employer, sameAs (incl. work GitHub), no fake metrics |
| PWA manifest | `src/app/manifest.ts` | `standalone`, theme/background colors, icons + screenshots via `/api/image` |
| Viewport / theme | `src/config/site.ts` `baseViewport` | `theme-color`, dark `colorScheme` |
| MS tiles | `public/browserconfig.xml` | Tile logo + `#0b0d0f` |
| Analytics | `src/app/layout.tsx` | **Google Analytics only** when `NEXT_PUBLIC_GA_ID` starts with `G-`; no placeholder IDs; no GTM unless a separate env is added later |
| Vercel Analytics | `@vercel/analytics` | Unchanged |

## Intentionally dropped

| Item | Reason |
| --- | --- |
| Fumadocs `/og/docs/[...slug]` | Docs site removed in PR #30 |
| Fumadocs sitemap from `source.getPages()` | Replaced with portfolio route list |
| Legacy routes `/projects`, `/blog` | Not part of current IA |
| `GoogleTagManager` wired to `NEXT_PUBLIC_GA_ID` | GA measurement ID is not a GTM container ID |
| Alternate `hreflang` tags | Not present in #26–#29 metadata (single locale `en_US`) |
| Fake / placeholder analytics IDs | Never committed |

## Env vars

- `NEXT_PUBLIC_GA_ID` — Google Analytics 4 (`G-…`) only when set
- `GOOGLE_SITE_VERIFICATION` or `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` — optional Search Console meta (placeholders are ignored)

## Playground

`/playground/efferd` is **`noIndex`** in page metadata and **`Disallow: /playground/`** in robots.
