import type { Metadata } from "next";
import {
  ArrowRight,
  BookOpen,
  Bot,
  Brain,
  Clock,
  Mic2,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  capabilityOrder,
  guides,
  type GuideCapability,
} from "@/lib/guides";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Practical guides on storytelling, leadership, executive presence, leadership through AI, critical thinking, and emerging leaders. Free field-guide resources from Be Remarkable.",
  alternates: {
    canonical: `${siteConfig.url}/guides`,
  },
  openGraph: {
    title: "Guides | Be Remarkable",
    description:
      "Practical guides on career launch coaching capabilities: storytelling, leadership, executive presence, and more.",
    url: `${siteConfig.url}/guides`,
    type: "website",
  },
};

const capabilityIcons: Record<GuideCapability, LucideIcon> = {
  Storytelling: BookOpen,
  Leadership: Users,
  "Executive Presence": Mic2,
  "Leadership through AI": Bot,
  "Critical Thinking": Brain,
  "Emerging Leaders": TrendingUp,
};

export default function GuidesPage() {
  const guidesByCapability = capabilityOrder.map((capability) => ({
    capability,
    guides: guides.filter((guide) => guide.capability === capability),
  }));

  return (
    <div className="overflow-hidden">
      <section className="border-b border-border/70 bg-secondary/35">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24">
          <p className="section-label">Guides</p>
          <h1 className="section-title mt-5 max-w-3xl">
            Practical guides for standing out with substance.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Free field-guide resources organized by capability: storytelling,
            leadership, executive presence, leadership through AI, critical
            thinking, and emerging leader development. Use them in interviews,
            meetings, and the moments that define your career.
          </p>
          <div className="mt-8">
            <Button asChild variant="outline" className="rounded-md">
              <Link href="/#skills">
                See all capabilities
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24">
        <div className="space-y-16">
          {guidesByCapability.map(({ capability, guides: capabilityGuides }) => {
            const Icon = capabilityIcons[capability];

            return (
              <div key={capability}>
                <div className="flex items-center gap-3">
                  <div
                    className="flex size-10 items-center justify-center rounded-md bg-primary/8 text-primary"
                    aria-hidden="true"
                  >
                    <Icon className="size-5" />
                  </div>
                  <h2 className="font-heading text-2xl text-foreground md:text-3xl">
                    {capability}
                  </h2>
                </div>

                <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {capabilityGuides.map((guide) => (
                    <article
                      key={guide.slug}
                      className="flex flex-col rounded-lg border border-border/80 bg-card p-7 transition-colors hover:border-accent/40"
                    >
                      <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                        {guide.capability}
                      </p>
                      <h3 className="mt-4 font-heading text-xl leading-snug text-foreground md:text-2xl">
                        <Link
                          href={`/guides/${guide.slug}`}
                          className="transition-colors hover:text-accent"
                        >
                          {guide.title}
                        </Link>
                      </h3>
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
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-t border-border/70 bg-[linear-gradient(180deg,oklch(0.985_0.006_85),oklch(0.965_0.014_78))]">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:px-8 md:py-20">
          <p className="section-label">Stay in the loop</p>
          <h2 className="section-title mt-5">
            Get more guides when the field guide launches.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Join the waitlist for launch updates, early excerpts, and new
            practical guides for professionals building real presence at every
            career stage.
          </p>
          <Button asChild size="lg" className="mt-8 rounded-md">
            <Link href="/#waitlist">
              Join the waitlist
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
