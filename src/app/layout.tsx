import { GoogleAnalyticsLazy } from "@/components/analytics/google-analytics-lazy";
import { RootJsonLd } from "@/components/json-ld";
import { LenisGate } from "@/components/lenis-gate";
import { baseMetadata } from "@/config/metadata";
import { baseViewport, siteConfig } from "@/config/site";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { IBM_Plex_Sans } from "next/font/google";
import "./global.css";

const ibmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-ibm-plex",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata = baseMetadata;
export const viewport = baseViewport;

function resolveGaId(): string | null {
  const id = siteConfig.analytics.googleAnalyticsId?.trim();
  if (!id || !/^G-[A-Z0-9]+$/i.test(id)) return null;
  return id;
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  const gaId = resolveGaId();
  const useVercelInsights =
    siteConfig.analytics.vercelAnalytics && process.env.VERCEL === "1";

  return (
    <html
      lang="en"
      className={`${ibmPlex.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <RootJsonLd />
      </head>
      <body className="flex min-h-dvh flex-col antialiased">
        {children}
        <LenisGate />
        {gaId ? <GoogleAnalyticsLazy gaId={gaId} /> : null}
        {useVercelInsights ? (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        ) : null}
      </body>
    </html>
  );
}
