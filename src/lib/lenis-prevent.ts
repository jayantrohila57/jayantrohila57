/** Block Lenis for all wheel / touch gestures on this element. */
export const LENIS_PREVENT_ATTR = "data-lenis-prevent";

/** Block Lenis only for vertical gestures (menus, vertical scroll panes). */
export const LENIS_PREVENT_VERTICAL_ATTR = "data-lenis-prevent-vertical";

/** Block Lenis only for horizontal gestures (wide code blocks). */
export const LENIS_PREVENT_HORIZONTAL_ATTR = "data-lenis-prevent-horizontal";

/** Class for vertical nested scroll panes (paired with LENIS_PREVENT_ATTR). */
export const LENIS_PREVENT_CLASS = "lenis-prevent";

function overflowAllowsScroll(axis: "x" | "y", style: CSSStyleDeclaration) {
  const prop = axis === "x" ? style.overflowX : style.overflowY;
  return ["auto", "overlay", "scroll"].includes(prop);
}

function canScrollVertically(node: HTMLElement): boolean {
  const style = window.getComputedStyle(node);
  if (!overflowAllowsScroll("y", style)) return false;
  return node.scrollHeight > node.clientHeight + 1;
}

/**
 * Lenis `prevent` callback — full opt-out, or `.lenis-prevent` only when the
 * element can actually scroll vertically (avoids trapping the page wheel on
 * horizontal-only <pre> blocks that still carried the class).
 */
export function shouldLenisPreventScroll(node: HTMLElement): boolean {
  if (node.hasAttribute(LENIS_PREVENT_ATTR)) return true;
  if (node.classList.contains(LENIS_PREVENT_CLASS)) {
    return canScrollVertically(node);
  }
  return false;
}
