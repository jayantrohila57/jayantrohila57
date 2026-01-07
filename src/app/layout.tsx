import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { baseMetadata } from "@/config/metadata";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ServiceWorkerProvider } from "@/components/sw/service-worker-provider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { baseViewport } from "@/config/site.config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export { baseMetadata as metadata };
export { baseViewport as Viewport };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <ServiceWorkerProvider />
          <Analytics />
          <SpeedInsights />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
