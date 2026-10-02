import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { appName, siteUrl } from "@/lib/shared";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${appName} — Product Engineer`,
    template: `%s · ${appName}`,
  },
  description:
    "Product engineer and versioned public identity documentation for Jayant Rohila. No private or legal records.",
  openGraph: {
    siteName: appName,
    url: siteUrl,
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
