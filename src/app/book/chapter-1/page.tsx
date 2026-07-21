import type { Metadata } from "next";
import { ArrowLeft, Download } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";
import { countChapterWords, getBookChapterBySlug } from "@/lib/book";
import { hasOwnerAccess } from "@/lib/workbook-access";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Chapter 1",
  description: "Download Chapter 1 of Be Remarkable.",
  alternates: {
    canonical: `${siteConfig.url}/book/chapter-1`,
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default async function BookChapter1Page() {
  const ownerAccess = await hasOwnerAccess();

  if (!ownerAccess) {
    redirect("/workbooks/unlock");
  }

  const chapter = getBookChapterBySlug("chapter-1");

  if (!chapter) {
    redirect("/workbooks");
  }

  const wordCount = countChapterWords(chapter);

  return (
    <div className="overflow-hidden">
      <section className="border-b border-border/70 bg-secondary/35">
        <div className="mx-auto max-w-xl px-6 py-16 md:px-8 md:py-24">
          <Link
            href="/workbooks"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Workbooks
          </Link>
          <p className="section-label mt-8">Be Remarkable · Book preview</p>
          <h1 className="section-title mt-4">
            Chapter {chapter.number}: {chapter.title}
          </h1>
          <p className="mt-3 text-base text-muted-foreground md:text-lg">
            {chapter.subtitle}
          </p>
          <p className="mt-5 text-sm text-muted-foreground">
            ~{wordCount.toLocaleString()} words · Owner access only
          </p>
          <div className="mt-8 rounded-lg border border-border/80 bg-card p-7 shadow-sm">
            <p className="text-base leading-relaxed text-muted-foreground">
              Chapter 1 is available as a PDF download. It is not published on
              the public site. Use the button below to save a copy to your
              device.
            </p>
            <Button asChild size="lg" className="mt-6 w-full rounded-md sm:w-auto">
              <Link href="/book/chapter-1/download">
                <Download className="size-4" aria-hidden="true" />
                Download Chapter 1 (PDF)
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
