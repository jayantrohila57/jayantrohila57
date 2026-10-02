# Efferd registry install (Jayant portfolio)

Registry in `components.json`:

```json
"@efferd": "https://efferd.com/r/{style}/{name}.json"
```

Style: **new-york**. Install: `pnpm dlx shadcn@latest add @efferd/<id> --overwrite --yes`.

## Playground

Preview installed blocks (placeholder copy): **`/playground/efferd`**

Homepage and site routes are **not** rewired yet — wait for Jayant’s section replacement list.

## Installed (free / CLI OK)

| Block ID | Primary generated paths |
| --- | --- |
| `full-width-divider` | `src/components/full-width-divider.tsx` |
| `grid-filler` | `src/components/grid-filler.tsx` |
| `decor-icon` | `src/components/decor-icon.tsx` |
| `outline-text` | `src/components/outline-text.tsx` |
| `header-1` | `src/components/header.tsx`, `mobile-nav.tsx`, `desktop-nav.tsx`, `nav-links.tsx`, `logo.tsx`, `portal.tsx`, `hooks/use-scroll.ts` |
| `hero-2` | Contributed to shared `src/components/hero.tsx` (see hero-3) |
| `hero-3` | `src/components/hero.tsx`, `logo-cloud.tsx`, `logos-section.tsx` |
| `blogs-2` | Merged into `src/components/blogs-section.tsx` |
| `blogs-1` | `src/components/blogs-section.tsx` |
| `features-6` | `src/components/feature-section.tsx`, `cobe-globe.tsx` |
| `features-3` | Updates `src/components/feature-section.tsx` |
| `integrations-2` | `src/components/integrations.tsx` |
| `logo-cloud-1` | `src/components/logo-cloud.tsx` |
| `app-shell-5` | `src/components/app-shell.tsx`, `app-header.tsx`, `app-sidebar.tsx`, `app-search.tsx`, `app-shared.tsx`, `custom-trigger.tsx`, `latest-change.tsx`, `nav-user.tsx`, `theme-switcher.tsx`, + shadcn `sidebar` UI |
| `contact-5` | `src/components/contact-section.tsx` |
| `contact-2` | `src/components/contact.tsx`, `icons/x-icon.tsx` |
| `cta-3` | `src/components/cta.tsx` |
| `not-found-1` | `src/components/efferd-not-found.tsx` (`NotFoundPage`) |

Shared shadcn UI added under `src/components/ui/*` as required by blocks above.

## Pro-gated (401 — skipped)

CLI cannot fetch registry JSON without Pro; **not installed**:

- `header-12`
- `blogs-4`
- `logo-cloud-10`
- `integrations-8`
- `dashboard-10`
- `dashboard-14`
- `footer-14`

Use free siblings above until Pro access or Jayant picks alternates.

## Build / stack notes

- `src/components/ui/button.tsx` keeps shadcn variants plus portfolio **`accent`** variant for existing pages.
- `app-sidebar.tsx`: Efferd demo `collapsible="offExamples"` → **`icon`** for TypeScript compatibility.
- Root layout: **`TooltipProvider`** (app-shell), **`SmoothScroll`** (Lenis), **`dark`** on `<html>`, SEO/PWA metadata unchanged.
