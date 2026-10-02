import { siteConfig } from "@/config/site";
import { redirect } from "next/navigation";

export const alt = `${siteConfig.siteName} — ${siteConfig.siteDescription}`;
export const size = { width: 1280, height: 720 };
export const contentType = "image/png";

export default function Image() {
  redirect("/api/image?type=og");
}
