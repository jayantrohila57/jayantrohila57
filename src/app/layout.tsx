import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { baseMetadata } from "@/config/metadata";
import type { Viewport } from "next";
import { ThemeProvider } from "@/components/shared/theme/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export { baseMetadata as metadata };

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "light dark",
};

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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
