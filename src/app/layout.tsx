import { RootJsonLd } from "@/components/json-ld";
import { baseMetadata } from "@/config/metadata";
import { baseViewport, siteConfig } from "@/config/site";
import { RootProvider } from "fumadocs-ui/provider/next";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import {
  IBM_Plex_Sans,
  JetBrains_Mono,
  Newsreader,
} from "next/font/google";
import "./global.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

const ibmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata = baseMetadata;
export const viewport = baseViewport;

export default function Layout({ children }: LayoutProps<"/">) {
  const analyticsId = siteConfig.analytics.googleAnalyticsId;

  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${ibmPlex.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col antialiased">
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
