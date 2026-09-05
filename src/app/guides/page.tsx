import type { Metadata } from "next";
import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { guides } from "@/lib/guides";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Practical guides on storytelling, leadership, executive presence, leadership through AI, critical thinking, and emerging leaders. Free resources from Be Remarkable.",
  alternates: {
    canonical: `${siteConfig.url}/guides`,
  },
  openGraph: {
    title: "Guides | Be Remarkable",
    description:
      "Practical guides on professional development capabilities: storytelling, leadership, executive presence, and more.",
    url: `${siteConfig.url}/guides`,
    type: "website",
  },
};

export default function GuidesPage() {
  return (
    <div className="overflow-hidden">
      <section className="border-b border-border/70 bg-secondary/35">
        <div className="mx-auto max-w-6xl px-6 py-14 md:px-8 md:py-20">
          <p className="section-label">Guides</p>
          <h1 className="section-title mt-5 max-w-3xl">
            Practical guides for standing out with substance.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Free resources on the human skills AI cannot replace:
            storytelling, leadership, executive presence, leadership through AI,
            critical thinking, and emerging leaders.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 md:px-8 md:py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <article
              key={guide.slug}
              className="flex flex-col rounded-lg border border-border/80 bg-card p-7 transition-colors hover:border-accent/40"
            >
              <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                {guide.capability}
              </p>
              <h2 className="mt-4 font-heading text-xl leading-snug text-foreground md:text-2xl">
                <Link
                  href={`/guides/${guide.slug}`}
                  className="transition-colors hover:text-accent"
                >
                  {guide.title}
                </Link>
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground md:text-base">
                {guide.description}
              </p>
              <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="size-3.5" aria-hidden="true" />
                <span>{guide.readingTimeMinutes} min read</span>
              </div>
              <Link
                href={`/guides/${guide.slug}`}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent"
              >
                Read the guide
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border/70 bg-[linear-gradient(180deg,oklch(0.985_0.006_85),oklch(0.965_0.014_78))]">
        <div className="mx-auto max-w-3xl px-6 py-14 text-center md:px-8 md:py-16">
          <p className="section-label">Stay in the loop</p>
          <h2 className="section-title mt-5">
            Get more guides when the book launches.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Subscribe for launch updates, early excerpts, and new practical
            guides for professionals building real skills at every career stage.
          </p>
          <Button asChild size="lg" className="mt-8 rounded-md">
            <Link href="/#waitlist">
              Subscribe
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
