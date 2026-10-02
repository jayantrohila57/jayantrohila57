import { RootJsonLd } from "@/components/json-ld";
import { SmoothScroll } from "@/components/smooth-scroll";
import { TooltipProvider } from "@/components/ui/tooltip";
import { baseMetadata } from "@/config/metadata";
import { baseViewport, siteConfig } from "@/config/site";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import "./global.css";

const ibmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  const analyticsId = siteConfig.analytics.googleAnalyticsId;

  return (
    <html
      lang="en"
      className={`${ibmPlex.variable} ${jetbrains.variable} dark`}
      suppressHydrationWarning
    >
      <body className="flex min-h-dvh flex-col antialiased">
        <RootJsonLd />
        <TooltipProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </TooltipProvider>
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
