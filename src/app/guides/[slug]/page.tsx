import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArticleStructuredData } from "@/components/article-structured-data";
import { GuideContent } from "@/components/guide-content";
import { Button } from "@/components/ui/button";
import {
  getAllGuideSlugs,
  getGuideBySlug,
  guides,
} from "@/lib/guides";
import { siteConfig } from "@/lib/site-config";

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return {};
  }

  const url = `${siteConfig.url}/guides/${guide.slug}`;

  return {
    title: guide.title,
    description: guide.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${guide.title} | Be Remarkable`,
      description: guide.description,
      url,
      type: "article",
      publishedTime: guide.publishedAt,
      authors: [siteConfig.author.name],
    },
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const otherGuides = guides.filter((item) => item.slug !== guide.slug);

  return (
    <>
      <ArticleStructuredData guide={guide} />

      <article className="overflow-hidden">
        <header className="border-b border-border/70 bg-secondary/35">
          <div className="mx-auto max-w-3xl px-6 py-12 md:px-8 md:py-20">
            <Link
              href="/guides"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              All guides
            </Link>
            <p className="section-label mt-8">{guide.capability}</p>
            <h1 className="section-title mt-4">{guide.title}</h1>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              {guide.description}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Clock className="size-4" aria-hidden="true" />
                {guide.readingTimeMinutes} min read
              </span>
              <span>
                Updated{" "}
                {new Date(guide.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-6 py-12 md:px-8 md:py-16">
          <GuideContent sections={guide.sections} />

          <div className="mt-16 rounded-lg border border-border/80 bg-secondary/35 p-7 md:p-9">
            <p className="section-label">Keep building</p>
            <h2 className="mt-4 font-heading text-2xl text-foreground md:text-3xl">
              Want more guides like this?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Join the waitlist for launch updates, early excerpts from the
              field guide, and new practical resources on storytelling,
              leadership, and calm confidence.
            </p>
            <Button asChild size="lg" className="mt-6 rounded-md">
              <Link href="/#waitlist">
                Join the waitlist
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 text-sm">
            <Link
              href="/guides"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              Back to all guides
            </Link>
            <span className="text-muted-foreground" aria-hidden="true">
              ·
            </span>
            <Link
              href="/#skills"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              Explore core skills
            </Link>
          </div>
        </div>

        {otherGuides.length > 0 ? (
          <section className="border-t border-border/70 bg-card">
            <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-20">
              <p className="section-label">More guides</p>
              <h2 className="section-title mt-4">Keep reading</h2>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {otherGuides.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/guides/${item.slug}`}
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
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </article>
    </>
  );
}
