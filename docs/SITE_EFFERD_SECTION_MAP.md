# jayantrohila.com × Efferd — full site section map (implementation brief)

Consistency rules:
- One visual language: bordered frames, mono labels, dark `#0b0d0f`, accent CTAs, Lenis, shared header/footer.
- Copy/data only from SoT (`portfolio.ts`, career, projects). No fake KPIs, testimonials, SaaS filler.
- Prefer adapt installed `@efferd/*` source over inventing new layouts.
- Pro-gated blocks: reference pattern only; build free sibling equivalent.

## Global shell
| Section | Job | Best Efferd ref | Install status | Action |
|---|---|---|---|---|
| Site header | Nav + identity + resume CTA | `header-1` (sticky blur); ref `header-12` for GitHub chip | installed | Replace `SiteHeader` with adapted `header-1` + real `mainNav` |
| Command palette | ⌘K jump | keep existing; chrome ref `app-shell-5` search | installed | Keep command-menu; optional styling alignment |
| Site footer | Explore + elsewhere | ref `footer-14` (Pro); try free `footer-4`/`footer-7` | `footer-4` installed | Rebuild footer using Efferd footer structure + `footerNavGroups` |
| 404 | Recovery | `not-found-1` | installed | Wire into `not-found.tsx` |
| Dividers / decor | Rhythm | `full-width-divider`, `decor-icon`, `outline-text`, `grid-filler` | installed | Use between major homepage bands |

## Homepage `/`
| Section (current) | Job | Best Efferd ref | Action |
|---|---|---|---|
| Hero | Name, role, CTAs, workspace feel | **`hero-3`** (+ `hero-2` type treatment) | Adapt `hero.tsx` with profile + Work/Contact/Resume |
| Selected work | Flagship projects | **`blogs-1`/`blogs-2`** card list; bento ref `features-6` / Pro `blogs-4` | Project cards from portfolio projects (e-commerce, Env Manager, Taskflow) |
| Engineering | How I build | **`features-6`** bento (no fake charts KPIs) | Map engineering themes from `architecture.ts` / engineering copy |
| Stack | Tech map | **`logo-cloud-1`** + **`integrations-2`** | Bind `technologies.ts` |
| Current focus | What’s active now | ref Pro `dashboard-10`; free: **`features-3`** + status list from SoT | aiQmen role + public projects only — no fake metrics |
| Experiments | Secondary work | **`blogs-2`** compact | Non-flagship projects / experiments data |
| Experience | Career timeline | **`blogs-1`** chronological list + `features-3` dividers | Bind `experience` from portfolio |
| About teaser | Short bio bridge | compact **`contact-5`**-style two-col panel | shortBio + link to /about |
| Contact | Reach out | **`contact-5`** primary | email + LinkedIn + GitHub (no phone) |
| Final CTA | Close | **`cta-3`** | Hire / collaborate framed CTA |

## Inner pages
| Route | Sections | Efferd approach |
|---|---|---|
| `/work` | Index + project scenes | Reuse selected-work card pattern (`blogs-1`); keep `ProjectScene` enriched with same frame language |
| `/work/[slug]` | Case study | `features-6` for problem/stack panels; keep narrative from data |
| `/engineering` | Principles / system | `integrations-2` + `features-6` |
| `/experiments` | Lab list | `blogs-2` |
| `/about` | Profile + education + timeline | Profile panel like `contact-5` layout; experience via `blogs-1` timeline |
| `/contact` | Full contact | `contact-5` + `contact-2` social cards + `cta-3` |
| `/resume` | Printable | Keep resume-view; only frame consistency |
| `/playground/efferd` | Dev preview | Keep noIndex |

## Out of scope / skip
- Lucsum as employment
- Private/legal data
- Pro-only installs that 401 without rewriting as free equivalents
