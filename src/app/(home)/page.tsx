import { LandingPage } from "@/components/landing";
import { generatePageMetadata } from "@/config/metadata";

export const metadata = generatePageMetadata({
  title: "Jayant Rohila — Product Engineer",
  description:
    "Product engineer at aiQmen, Noida. Portfolio with experience, projects, skills, and contact links.",
  path: "/",
});

export default function HomePage() {
  return <LandingPage />;
}
