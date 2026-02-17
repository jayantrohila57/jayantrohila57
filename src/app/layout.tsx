import type { Metadata } from "next";
import {
  M_PLUS_1 as Fonts,
  M_PLUS_1_Code as MonoFonts,
} from "next/font/google";
import "./globals.css";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { baseMetadata } from "@/config/metadata";

const fonts = Fonts({
  variable: "--font-main",
  subsets: ["latin"],
  weight: ["400", "300", "500", "600", "700"],
});

const monoFonts = MonoFonts({
  variable: "--font-main-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

import { siteConfig } from "@/config/site.config";
import { getSeoSettings, getSiteSettings } from "@/sanity/query/queries";

export async function generateMetadata(): Promise<Metadata> {
  const [seoSettings, siteSettings] = await Promise.all([
    getSeoSettings(),
    getSiteSettings(),
  ]);

  const defaultTitle =
    seoSettings?.defaultTitle ||
    siteSettings?.siteTitle ||
    siteConfig.siteTitle;
  const siteName =
    seoSettings?.openGraph?.siteName ||
    siteSettings?.siteName ||
    siteConfig.siteName;

  if (!seoSettings && !siteSettings) return baseMetadata;

  return {
    ...baseMetadata,
    title: {
      default: defaultTitle,
      template:
        seoSettings?.titleTemplate ||
        baseMetadata.title?.toString() ||
        `%s | ${siteName}`,
    },
    description:
      seoSettings?.defaultDescription ||
      siteSettings?.siteDescription ||
      baseMetadata.description,
    keywords: seoSettings?.keywords || baseMetadata.keywords,
    openGraph: {
      ...baseMetadata.openGraph,
      title: siteName,
      description:
        seoSettings?.defaultDescription ||
        siteSettings?.siteDescription ||
        (baseMetadata.description as string),
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const analyticsId = siteConfig.analytics.googleAnalyticsId || "";

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fonts.variable} ${monoFonts.variable} antialiased`}>
        <GoogleTagManager gtmId={analyticsId} />
        <GoogleAnalytics gaId={analyticsId} />
        {children}
      </body>
    </html>
  );
}
