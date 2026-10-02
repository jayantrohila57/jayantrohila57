import { RootJsonLd } from "@/components/json-ld";
import { baseMetadata } from "@/config/metadata";
import { baseViewport, siteConfig } from "@/config/site";
import { RootProvider } from "fumadocs-ui/provider/next";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./global.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = baseMetadata;
export const viewport = baseViewport;

export default function Layout({ children }: LayoutProps<"/">) {
  const analyticsId = siteConfig.analytics.googleAnalyticsId;

  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootJsonLd />
        <RootProvider>{children}</RootProvider>
        {analyticsId ? (
          <>
            <GoogleTagManager gtmId={analyticsId} />
            <GoogleAnalytics gaId={analyticsId} />
          </>
        ) : null}
        {siteConfig.analytics.vercelAnalytics ? (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        ) : null}
      </body>
    </html>
  );
}
