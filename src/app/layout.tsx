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
  title: "Be Remarkable | Stand Out in the Age of AI",
  description:
    "Practical skills in storytelling, leadership, and executive presence for college students and recent graduates, taught by someone with a decade of experience developing this generation.",
  metadataBase: new URL("https://beremarkablebook.com"),
  openGraph: {
    title: "Be Remarkable | Stand Out in the Age of AI",
    description:
      "The skills no one teaches young adults: storytelling, leadership, and executive presence for a world where AI is everywhere.",
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
