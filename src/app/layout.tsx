import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Be Remarkable | Stand Out with Substance in the Age of AI",
  description:
    "A field guide, workshops, and practical guides on storytelling, leadership, and calm confidence for anyone entering the workforce. Build capability, not hype.",
  metadataBase: new URL("https://beremarkablebook.com"),
  openGraph: {
    title: "Be Remarkable | Stand Out with Substance in the Age of AI",
    description:
      "A field guide for standing out with substance: storytelling, leadership, and calm confidence for anyone entering the workforce in the age of AI.",
    url: "https://beremarkablebook.com",
    siteName: "Be Remarkable",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
