import type { Metadata } from "next";
import {
  M_PLUS_1 as Fonts,
  M_PLUS_1_Code as MonoFonts,
} from "next/font/google";
import { ThemeProvider } from "@/components/layout";
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
import { getSeoSettings } from "@/sanity/query/queries";

export async function generateMetadata(): Promise<Metadata> {
  const seoSettings = await getSeoSettings();

  if (!seoSettings) return baseMetadata;

  return {
    ...baseMetadata,
    title: {
      default:
        seoSettings.defaultTitle ||
        baseMetadata.title?.toString() ||
        siteConfig.siteTitle,
      template:
        seoSettings.titleTemplate ||
        baseMetadata.title?.toString() ||
        `%s | ${siteConfig.siteName}`,
    },
    description: seoSettings.defaultDescription || baseMetadata.description,
    keywords: seoSettings.keywords || baseMetadata.keywords,
    openGraph: {
      ...baseMetadata.openGraph,
      title: seoSettings.openGraph?.siteName || baseMetadata.openGraph?.title,
      description:
        seoSettings.defaultDescription || baseMetadata.openGraph?.description,
      // Add other OG mappings if needed
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fonts.variable} ${monoFonts.variable} antialiased`}>
        <GoogleTagManager gtmId="G-9HFQLM7BCG" />
        <GoogleAnalytics gaId="G-9HFQLM7BCG" />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          {/* <SmoothScroll /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
