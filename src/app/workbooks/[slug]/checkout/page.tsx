import type { Metadata } from "next";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { getAllWorkbookSlugs, getWorkbookBySlug } from "@/lib/workbooks";
import { siteConfig } from "@/lib/site-config";

type CheckoutPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllWorkbookSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CheckoutPageProps): Promise<Metadata> {
  const { slug } = await params;
  const workbook = getWorkbookBySlug(slug);

  if (!workbook) {
    return {};
  }

  return {
    title: `Get ${workbook.title}`,
    description: `Purchase ${workbook.title}. Coming soon: join the waitlist for early access.`,
    robots: { index: false, follow: true },
  };
}

export default async function WorkbookCheckoutPage({ params }: CheckoutPageProps) {
  const { slug } = await params;
  const workbook = getWorkbookBySlug(slug);

  if (!workbook) {
    notFound();
  }

  return (
    <div className="overflow-hidden">
      <section className="border-b border-border/70 bg-secondary/35">
        <div className="mx-auto max-w-2xl px-6 py-16 text-center md:px-8 md:py-24">
          <Link
            href={`/workbooks/${workbook.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to workbook
          </Link>
          <p className="section-label mt-10">{workbook.capability}</p>
          <h1 className="section-title mt-4">{workbook.title}</h1>
          <p className="mt-5 text-3xl font-heading text-foreground">
            ${workbook.priceUsd}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-6 py-16 text-center md:px-8 md:py-20">
        <h2 className="font-heading text-2xl text-foreground md:text-3xl">
          Coming soon
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          Workbook purchases are not live yet. Join the waitlist for early access
          when checkout opens. You can preview the full workbook content on the
          previous page until then.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="rounded-md">
            <Link href="/#waitlist">
              Join the waitlist
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-md">
            <Link href={`/workbooks/${workbook.slug}`}>
              Preview workbook
            </Link>
          </Button>
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Questions?{" "}
          <a
            href={`mailto:${siteConfig.email}?subject=Workbook%20waitlist%20-%20${encodeURIComponent(workbook.title)}`}
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            {siteConfig.email}
          </a>
        </p>
      </section>
    </div>
  );
}
