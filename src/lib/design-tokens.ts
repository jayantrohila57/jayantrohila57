/**
 * Semantic design tokens — class names backed by `global.css` and shadcn CSS variables.
 * Prefer these over arbitrary text sizes, hex backgrounds, or `rounded-[var(--radius-*)]`.
 */

/** Section / card eyebrows (11px mono caps). */
export const TYPE_EYEBROW_CLASS =
  "type-eyebrow font-mono text-muted-foreground uppercase";

/** Compact labels — footer groups, meta (10px mono caps). */
export const TYPE_EYEBROW_SM_CLASS =
  "type-eyebrow-sm font-mono text-muted-foreground uppercase";

/** Command palette & menu list rows. */
export const INTERACTIVE_LIST_ITEM_CLASS =
  "cursor-pointer rounded-sm px-3 py-2 text-sm aria-selected:bg-accent";

/** Command palette group headings. */
export const CMDK_GROUP_HEADING_CLASS =
  "px-2 py-2 type-eyebrow-sm font-mono tracking-widest text-muted-foreground uppercase [&_[cmdk-group-heading]]:mb-2";

/** Demo / mock UI micro copy inside project previews. */
export const TYPE_CAPTION_CLASS = "type-caption text-muted-foreground";

/** macOS-style window chrome dots (interface demos only). */
export const WINDOW_CHROME_RED_CLASS = "bg-window-chrome-red";
export const WINDOW_CHROME_YELLOW_CLASS = "bg-window-chrome-yellow";
export const WINDOW_CHROME_GREEN_CLASS = "bg-window-chrome-green";
