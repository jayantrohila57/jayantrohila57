# Layout shells

Jayant’s site uses a small set of layout shells so page width, rails, section rhythm, headers, and bordered grids stay consistent. **Only these components set gutters and rails** — pages should not add their own `max-w-*`, `border-x`, or ad-hoc `px-*` for the page column.

Import from `@/components/layout/shells`. Legacy names live in `@/components/primitives/page-column` and `@/components/primitives/section-frame` as thin aliases.

## MainShell

Wraps the full page column: header, `<main>`, and footer (see `SiteShell`).

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Page chrome and content |
| `className` | `string` | — | Extra classes on the column root |

**Owns:** `max-w-5xl`, horizontal centering, `border-x` rails, `data-page-column`, `overflow-x-clip`.

```tsx
<MainShell>
  <SiteHeader />
  <main>{children}</main>
  <SiteFooter />
</MainShell>
```

## SectionShell

One band per section. Top divider runs rail to rail; inner content uses the standard gutter and vertical padding.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | — | Section `id` |
| `children` | `ReactNode` | — | Section body |
| `className` | `string` | — | On `<section>` |
| `dividerTop` | `boolean` | `true` | Rail-to-rail rule via `SectionRule` |
| `spacing` | `"default"` \| `"compact"` \| `"none"` | `"default"` | `py-8 md:py-12`, `py-8 md:py-10`, or none |
| `bleed` | `boolean` | `false` | Gutter wrapper only — no vertical pad; use for grids/media that bleed to rails |

**Helpers**

- `SectionRule` — horizontal rule, border to border.
- `SectionBleed` — cancel horizontal gutter (`-mx-4 md:-mx-6`). Use `inset` to re-apply gutter + cell padding for text inside a full-bleed row.
- `PageGutter` — horizontal gutter only (`px-4 md:px-6`) when you need an extra inset wrapper.

## ContentShell

Shared section / page header block: eyebrow, optional icon, title, description, optional action.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | — | Heading text |
| `eyebrow` | `string` | — | Mono uppercase label above title |
| `icon` | `ReactNode` | — | Shown with eyebrow or alone |
| `description` | `string` | — | Muted body under title |
| `action` | `ReactNode` | — | Right (or below on small screens) |
| `variant` | `"page"` \| `"section"` \| `"compact"` | `"section"` | Type scale and bottom margin |
| `align` | `"start"` \| `"center"` | `"start"` | Text and action alignment |
| `headingLevel` | `"h1"` \| `"h2"` \| `"h3"` | `"h2"` | Semantic heading element |
| `className` | `string` | — | Wrapper |

## GridShell & GridCell

Rail-to-rail grids with `gap-px` dividers so borders meet with no double lines. **Always put content in `GridCell`** so text never touches a border (`p-4 md:p-6`).

| GridShell prop | Type | Default | Description |
|----------------|------|---------|-------------|
| `children` | `ReactNode` | — | `GridCell` children |
| `columns` | `string` | `"grid-cols-1"` | Tailwind column classes |
| `border` | `"top"` \| `"y"` \| `"none"` | `"top"` | Outer grid border |
| `className` | `string` | — | On bleed grid |

| GridCell prop | Type | Default | Description |
|---------------|------|---------|-------------|
| `children` | `ReactNode` | — | Cell content |
| `as` | `ElementType` | `"div"` | Polymorphic tag |
| `colSpan` | `string` | — | e.g. `md:col-span-2` |
| `className` | `string` | — | Merged with cell padding |

## FlexShell

Stacks and rows with consistent gaps.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `direction` | `"row"` \| `"col"` | `"col"` | Flex direction |
| `gap` | `"2"` \| `"3"` \| `"4"` \| `"6"` \| `"8"` | `"4"` | Gap scale |
| `align` | `"start"` \| `"center"` \| `"end"` \| `"stretch"` | `"stretch"` | `items-*` |
| `justify` | `"start"` \| `"center"` \| `"end"` \| `"between"` | `"start"` | `justify-*` |
| `wrap` | `boolean` | `false` | `flex-wrap` |
| `className` | `string` | — | On flex container |

## Tokens

| Export | Role |
|--------|------|
| `SHELL_MAX_WIDTH_CLASS` | `max-w-5xl` + centering |
| `SHELL_RAILS_CLASS` | `border-x` |
| `SHELL_GUTTER_X_CLASS` | `shell-gutter-x` (1rem / 1.5rem at md) |
| `SHELL_BLEED_CLASS` | Negative margin to rails |
| `SHELL_SECTION_PAD_*` | Section vertical padding |
| `SHELL_CELL_CLASS` / `shellCellClassName()` | Bordered cell padding |
| `shellSectionPadClass(spacing)` | Pad class for a spacing key |
| `pageColumnClassName()` | Max width + rails (no flex column) |

## Patterns

1. **Page:** `SiteShell` → sections as `SectionShell` → `ContentShell` + `GridShell` / `FlexShell`.
2. **Bleed grid inside a padded section:** `SectionShell` with `bleed` → `GridShell` → `GridCell`.
3. **Full-bleed media with caption:** `SectionBleed` → media; sibling or child with `inset` for text.
4. **Do not** set `max-w-5xl` or `border-x` outside `MainShell`. **Do not** put leaf text directly inside `SectionBleed` without `GridCell` or `inset`.

## Acceptance

- `node scripts/verify-padding-live.mjs` — leaf text must stay ≥16px from nearest bordered ancestor and column rails (0 flags).
- `node scripts/capture-padding-final.mjs` — reference screenshots under `/opt/cursor/artifacts/padding-final/`.

## Migrated routes

`/`, `/work`, `/work/[slug]`, `/writing`, `/about`, `/elsewhere`, `/interests`, `/resume`, `/contact`, and the global `not-found` page. Home sections still import legacy `SectionFrame` / `PageBleed` aliases, which delegate to these shells.
