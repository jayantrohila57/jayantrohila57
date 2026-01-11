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

export const metadata: Metadata = baseMetadata;

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
