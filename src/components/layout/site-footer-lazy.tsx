import dynamic from "next/dynamic";

const Footer = dynamic(
  () => import("@/components/footer").then((mod) => mod.Footer),
  { loading: () => null },
);

export function SiteFooterLazy() {
  return <Footer />;
}
