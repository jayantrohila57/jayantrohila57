# Design tokens (shadcn / portfolio)

The site runs **dark mode only** (`html.dark`). All shadcn semantic colors live on `.dark` in `src/app/global.css`. Portfolio extensions (`surface`, `panel`, `elevated`, `brand`) are wired in `@theme inline` for Tailwind utilities.

## Color tokens

| Token | CSS variable | Tailwind utility | Role |
|-------|----------------|------------------|------|
| Background | `--background` | `bg-background` | Page canvas |
| Foreground | `--foreground` | `text-foreground` | Body text |
| Card | `--card` | `bg-card` | Raised panels |
| Muted | `--muted` | `bg-muted` | Subtle fills |
| Muted FG | `--muted-foreground` | `text-muted-foreground` | Secondary text |
| Border | `--border` | `border-border` | Rules, outlines |
| Border subtle | `--border-subtle` | `border-border-subtle` | Hairlines |
| Surface | `--surface` | `bg-surface` | Media wells |
| Panel | `--panel` | `bg-panel` | Dialogs, command surface |
| Elevated | `--elevated` | `bg-elevated` | Hover rows, code blocks |
| Accent | `--accent` | `bg-accent` | shadcn hover surfaces |
| Primary | `--primary` | `bg-primary` | Primary buttons |
| Brand | `--brand` | `bg-brand`, `text-brand` | Portfolio green |
| Ring | `--ring` | `ring-ring` | Focus rings |
| Destructive | `--destructive` | `bg-destructive` | Errors |

## Radius

| Token | Utility | px (approx) |
|-------|---------|-------------|
| `--radius-sm` | `rounded-sm` | 6 |
| `--radius-md` | `rounded-md` | 10 |
| `--radius-lg` | `rounded-lg` | 12 |
| `--radius` | `rounded-lg` (base) | 10 |

Use `rounded-sm` / `rounded-md` — not `rounded-[var(--radius-sm)]`.

## Typography

| Export / class | Use |
|----------------|-----|
| `TYPE_EYEBROW_CLASS` / `type-eyebrow` | Section eyebrows (11px caps) |
| `TYPE_EYEBROW_SM_CLASS` / `type-eyebrow-sm` | Footer labels, compact meta (10px) |
| `INTERACTIVE_LIST_ITEM_CLASS` | Command menu items |
| `CMDK_GROUP_HEADING_CLASS` | Command group headings |

Defined in `src/lib/design-tokens.ts` and `global.css` utilities.

## Enforcement

```bash
pnpm run verify:design
```

Fails on arbitrary `text-[10px]` / `text-[11px]`, hex `bg-[#…]` in components (except token file), and `rounded-[var(--radius` in TSX.

## Live check

```bash
node scripts/verify-design-live.mjs
node scripts/capture-design-final.mjs
```

Screenshots: `/opt/cursor/artifacts/design-final/`.
