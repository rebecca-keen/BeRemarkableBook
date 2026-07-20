import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import { DownloadWorkbookButton } from "@/components/download-workbook-button";
import { PrintButton } from "@/components/print-button";
import { WorkbookContent } from "@/components/workbook-content";
import { hasWorkbookAccess } from "@/lib/workbook-access";
import { getAllWorkbookSlugs, getWorkbookBySlug } from "@/lib/workbooks";

type FullWorkbookPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllWorkbookSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: FullWorkbookPageProps): Promise<Metadata> {
  const { slug } = await params;
  const workbook = getWorkbookBySlug(slug);

  if (!workbook) {
    return {};
  }

  return {
    title: `${workbook.title} · Full access`,
    robots: { index: false, follow: false },
  };
}

export default async function FullWorkbookPage({ params }: FullWorkbookPageProps) {
  const { slug } = await params;
  const workbook = getWorkbookBySlug(slug);

  if (!workbook) {
    notFound();
  }

  const hasAccess = await hasWorkbookAccess(slug);

  if (!hasAccess) {
    redirect(`/workbooks/${slug}`);
  }

  return (
    <article className="workbook-page overflow-hidden">
      <header className="border-b border-border/70 bg-secondary/35 print:border-none print:bg-transparent">
        <div className="mx-auto max-w-3xl px-6 py-12 md:px-8 md:py-20">
          <Link
            href={`/workbooks/${workbook.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground print:hidden"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Workbook overview
          </Link>
          <p className="section-label mt-8">{workbook.capability}</p>
          <h1 className="section-title mt-4">{workbook.title}</h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Full access unlocked. Print this workbook or complete exercises on
            screen.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 print:hidden">
            <DownloadWorkbookButton slug={workbook.slug} />
            <PrintButton />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-12 md:px-8 md:py-16">
        <WorkbookContent workbook={workbook} />
      </div>
    </article>
  );
}
