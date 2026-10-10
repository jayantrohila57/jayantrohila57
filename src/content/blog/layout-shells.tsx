import { BlogPre, BlogProse } from "@/components/blog/blog-prose";

export function LayoutShellsPost() {
  return (
    <BlogProse>
      <p>
        For a while I fixed spacing on jayantrohila.com the way most of us do:
        add <code>px-4</code> on a section, bleed a divider with negative
        margin, wrap a grid cell in another padding class, and hope the rails
        still line up. It worked until it did not — text sitting on the column
        border, double borders in bento grids, and footers that looked inset on
        one breakpoint and flush on another.
      </p>
      <p>
        The structural fix was to stop treating padding as a per-page concern
        and introduce a small set of layout shells. Every route now composes the
        same primitives; nothing else sets page width or side rails.
      </p>

      <h2>MainShell owns the column</h2>
      <p>
        <code>MainShell</code> wraps the header, main, and footer. It is the only
        place that applies <code>max-w-5xl</code>, centering, and{" "}
        <code>border-x</code> rails, plus <code>data-page-column</code> for
        audits and tests.
      </p>
      <BlogPre>
        {`// src/components/layout/shells/main-shell.tsx
export function MainShell({ children, className }: MainShellProps) {
  return (
    <div
      data-page-column=""
      className={cn(
        SHELL_MAX_WIDTH_CLASS,
        SHELL_RAILS_CLASS,
        "flex min-h-dvh min-w-0 flex-col overflow-x-clip",
        className,
      )}
    >
      {children}
    </div>
  );
}`}
      </BlogPre>
      <p>
        Header and footer components only add horizontal gutter inside that
        column — they do not re-declare max width.
      </p>

      <h2>SectionShell owns rhythm and dividers</h2>
      <p>
        Each band on a page is a <code>SectionShell</code>. It renders a
        rail-to-rail top rule via <code>SectionRule</code> and applies standard
        vertical padding (<code>py-8 md:py-12</code>, with a compact variant).
        The <code>bleed</code> flag switches to gutter-only wrapping so a child{" "}
        <code>GridShell</code> can cancel horizontal inset and span edge to edge
        between the rails.
      </p>
      <p>
        <code>SectionBleed</code> uses negative horizontal margin, but only
        inside a gutter parent. Using bleed at the root of the column without a
        gutter wrapper was one bug that put footer copy flush against the rails;
        fixing that meant reserving bleed for nested bands.
      </p>

      <h2>ContentShell and GridShell</h2>
      <p>
        <code>ContentShell</code> is the shared page and section header: eyebrow,
        title, description, optional action — same type scale everywhere.{" "}
        <code>GridShell</code> and <code>GridCell</code> implement rail-to-rail
        grids with <code>gap-px</code> so borders meet without double lines.
        Cells always include cell padding (<code>shell-cell</code> in CSS) so
        text never touches a border.
      </p>
      <BlogPre>
        {`// src/components/layout/shells/grid-shell.tsx (excerpt)
export function GridShell({ children, columns = "grid-cols-1", ... }) {
  return (
    <SectionBleed className={cn("grid gap-px bg-border", columns)}>
      {children}
    </SectionBleed>
  );
}

export function GridCell({ children, className, ... }) {
  return (
    <div className={cn(shellCellClassName(), className)}>{children}</div>
  );
}`}
      </BlogPre>

      <h2>Gutter tokens that do not depend on Tailwind spacing</h2>
      <p>
        Horizontal inset is <code>shell-gutter-x</code> in <code>global.css</code>{" "}
        (1rem / 1.5rem at md). That keeps gutters stable even when utility
        spacing tokens differ between dev and production builds. Legacy names
        like <code>PageGutter</code> re-export the same shell helpers for older
        scene components on the homepage.
      </p>

      <h2>Enforcing 16px with a Playwright audit</h2>
      <p>
        Shells are only useful if regressions are visible. The repo includes{" "}
        <code>scripts/verify-padding-live.mjs</code>, which loads each route at
        390, 1024, and 1440px, finds leaf text nodes, and measures distance to
        the column rails and to the nearest bordered ancestor. Anything under
        16px (with a small tolerance) fails the run.
      </p>
      <p>
        That script caught real issues: footer bleed without gutter, project
        meta rows with <code>pt-2</code> inside bordered cells, and missing
        horizontal padding when utilities were not emitted. After migrating pages
        to shells, the audit reports zero flags across the site.
      </p>
      <p>
        The API and migration notes live in <code>docs/LAYOUT.md</code>. New
        pages should compose shells instead of adding ad-hoc padding — the audit
        is the acceptance test.
      </p>
    </BlogProse>
  );
}
