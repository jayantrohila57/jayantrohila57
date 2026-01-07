import { redirect } from "next/navigation";
import { siteConfig } from "@/config/site.config";

export const alt = `${siteConfig.siteName} - ${siteConfig.siteDescription}`;
export const size = {
  width: 1280,
  height: 720,
};
export const contentType = "image/png";

export default function Image() {
  redirect("/api/image?type=og");
}
