import { redirect } from "next/navigation";
import { siteConfig } from "@/config/site.config";

export const alt = `${siteConfig.siteName} - ${siteConfig.author.role}`;
export const size = {
  width: 750,
  height: 1334,
};
export const contentType = "image/png";

export default function Image() {
  redirect("/api/image?type=twitter");
}
