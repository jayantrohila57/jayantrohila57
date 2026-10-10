import type { ComponentType } from "react";
import { GrayscaleImagesPost } from "@/content/blog/grayscale-images-a11y";
import { LayoutShellsPost } from "@/content/blog/layout-shells";
import { LenisNestedScrollPost } from "@/content/blog/lenis-nested-scroll";
import { NextCacheDashboardPost } from "@/content/blog/next-cache-dashboard";

export const blogContentBySlug: Record<string, ComponentType> = {
  "smooth-scroll-nested-scroll-areas": LenisNestedScrollPost,
  "layout-shells-stop-padding-page-by-page": LayoutShellsPost,
  "caching-dashboard-next-cache-components": NextCacheDashboardPost,
  "grayscale-project-images-accessibly": GrayscaleImagesPost,
};
