/** Attribute Lenis reads to allow native wheel scroll inside nested panes. */
export const LENIS_PREVENT_ATTR = "data-lenis-prevent";

/** Class mirrored in Lenis `prevent` callback (see `lenis-init.tsx`). */
export const LENIS_PREVENT_CLASS = "lenis-prevent";

export function shouldLenisPreventScroll(node: HTMLElement): boolean {
  if (node.hasAttribute("data-lenis-prevent")) return true;
  if (node.classList.contains(LENIS_PREVENT_CLASS)) return true;
  return false;
}
