import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, FileText } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BuyWorkbookButton } from "@/components/buy-workbook-button";
import { DownloadWorkbookButton } from "@/components/download-workbook-button";
import { WorkbookPreviewContent } from "@/components/workbook-preview-content";
import { Button } from "@/components/ui/button";
import { isWorkbookCheckoutConfigured } from "@/lib/workbook-prices";
import { hasWorkbookAccess } from "@/lib/workbook-access";
import {
  getAllWorkbookSlugs,
  getWorkbookBySlug,
  workbooks,
} from "@/lib/workbooks";
import { siteConfig } from "@/lib/site-config";

type WorkbookPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllWorkbookSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: WorkbookPageProps): Promise<Metadata> {
  const { slug } = await params;
  const workbook = getWorkbookBySlug(slug);

  if (!workbook) {
    return {};
  }

  const url = `${siteConfig.url}/workbooks/${workbook.slug}`;

  return {
    title: workbook.title,
    description: workbook.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${workbook.title} | Be Remarkable`,
      description: workbook.description,
      url,
      type: "article",
    },
  };
}

export default async function WorkbookPage({ params }: WorkbookPageProps) {
  const { slug } = await params;
  const workbook = getWorkbookBySlug(slug);

  if (!workbook) {
    notFound();
  }

  const checkoutConfigured = isWorkbookCheckoutConfigured(slug);
  const hasAccess = await hasWorkbookAccess(slug);
  const otherWorkbooks = workbooks.filter((item) => item.slug !== workbook.slug);

  return (
    <article className="workbook-page overflow-hidden">
      <header className="border-b border-border/70 bg-secondary/35">
        <div className="mx-auto max-w-3xl px-6 py-12 md:px-8 md:py-20">
          <Link
            href="/workbooks"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            All workbooks
          </Link>
          <p className="section-label mt-8">{workbook.capability}</p>
          <h1 className="section-title mt-4">{workbook.title}</h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            {workbook.description}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <FileText className="size-4" aria-hidden="true" />
              ~{workbook.pageCount} pages when printed
            </span>
            <span>{workbook.exerciseCount} exercises</span>
            <span className="font-medium text-foreground">
              ${workbook.priceUsd}
            </span>
          </div>
          <div className="mt-8" id="buy">
            {hasAccess ? (
              <>
                <p className="mb-4 rounded-md border border-accent/30 bg-accent/5 px-4 py-3 text-sm text-foreground">
                  You have access: view the full workbook or download the PDF.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild size="lg" className="rounded-md">
                    <Link href={`/workbooks/${workbook.slug}/full`}>
                      View workbook
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                  </Button>
                  <DownloadWorkbookButton slug={workbook.slug} />
                </div>
              </>
            ) : (
              <BuyWorkbookButton
                slug={workbook.slug}
                priceUsd={workbook.priceUsd}
                checkoutConfigured={checkoutConfigured}
              />
            )}
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-12 md:px-8 md:py-16">
        <WorkbookPreviewContent workbook={workbook} />

        <div className="workbook-cta mt-16 rounded-lg border border-border/80 bg-secondary/35 p-7 md:p-9">
          {hasAccess ? (
            <>
              <p className="section-label">Your workbook</p>
              <h2 className="mt-4 font-heading text-2xl text-foreground md:text-3xl">
                Full access unlocked
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                Open the complete workbook in your browser or download a PDF for
                offline use.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-start">
                <Button asChild size="lg" className="rounded-md">
                  <Link href={`/workbooks/${workbook.slug}/full`}>
                    View workbook
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </Button>
                <DownloadWorkbookButton slug={workbook.slug} />
              </div>
            </>
          ) : (
            <>
              <p className="section-label">Get this workbook</p>
              <h2 className="mt-4 font-heading text-2xl text-foreground md:text-3xl">
                Unlock exercises, worksheets, and action plans
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                One-time purchase. Full printable access with every exercise and
                worksheet. Read the free guide first, then apply it with the
                workbook.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-start">
                <BuyWorkbookButton
                  slug={workbook.slug}
                  priceUsd={workbook.priceUsd}
                  checkoutConfigured={checkoutConfigured}
                />
                <Button asChild variant="outline" size="lg" className="rounded-md">
                  <Link href={`/guides/${workbook.relatedGuideSlug}`}>
                    Read the free guide
                  </Link>
                </Button>
              </div>
            </>
          )}
        </div>

        <div className="mt-10 flex flex-wrap gap-4 text-sm">
          <Link
            href="/workbooks"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            Back to all workbooks
          </Link>
          <span className="text-muted-foreground" aria-hidden="true">
            ·
          </span>
          <Link
            href="/guides"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            Free guides
          </Link>
        </div>
      </div>

      {otherWorkbooks.length > 0 ? (
        <section className="border-t border-border/70 bg-card">
          <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-20">
            <p className="section-label">More workbooks</p>
            <h2 className="section-title mt-4">Keep building</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {otherWorkbooks.map((item) => (
                <Link
                  key={item.slug}
                  href={`/workbooks/${item.slug}`}
                  className="rounded-lg border border-border/80 bg-background p-6 transition-colors hover:border-accent/40"
                >
                  <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                    {item.capability}
                  </p>
                  <h3 className="mt-2 font-heading text-lg text-foreground md:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <p className="mt-3 text-sm font-medium text-foreground">
                    ${item.priceUsd}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </article>
  );
}
