import { cn } from "@/lib/cn";

/**
 * Portfolio screenshots and in-page preview media (not logos, icons, or favicons).
 * Grayscale on fine-pointer hover devices; full color on touch; color on card/link hover or focus.
 * Styles live in `global.css` (`.content-image`).
 */
export const CONTENT_IMAGE_CLASS = "content-image";

export function contentImageClass(...extra: (string | undefined | false)[]) {
  return cn(CONTENT_IMAGE_CLASS, ...extra);
}
