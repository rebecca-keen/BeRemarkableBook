import type { Metadata } from "next";
import {
  ArrowRight,
  BookOpen,
  Bot,
  Brain,
  FileText,
  Mic2,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { capabilityOrder } from "@/lib/guides";
import { siteConfig } from "@/lib/site-config";
import { hasOwnerAccess } from "@/lib/workbook-access";
import {
  workbooks,
  type WorkbookCapability,
} from "@/lib/workbooks";

export const metadata: Metadata = {
  title: "Workbooks",
  description:
    "Interactive, printable workbooks for storytelling, leadership, executive presence, leadership through AI, critical thinking, and emerging leaders. Apply what the free guides teach.",
  alternates: {
    canonical: `${siteConfig.url}/workbooks`,
  },
  openGraph: {
    title: "Workbooks | Be Remarkable",
    description:
      "Research-backed workbooks with exercises, worksheets, and action plans for every capability.",
    url: `${siteConfig.url}/workbooks`,
    type: "website",
  },
};

const capabilityIcons: Record<WorkbookCapability, LucideIcon> = {
  Storytelling: BookOpen,
  Leadership: Users,
  "Executive Presence": Mic2,
  "Leadership through AI": Bot,
  "Critical Thinking": Brain,
  "Emerging Leaders": TrendingUp,
};

type WorkbooksPageProps = {
  searchParams: Promise<{ owner?: string }>;
};

export default async function WorkbooksPage({ searchParams }: WorkbooksPageProps) {
  const { owner } = await searchParams;
  const accessUnlocked = owner === "unlocked" || (await hasOwnerAccess());

  const workbooksByCapability = capabilityOrder.map((capability) => ({
    capability,
    workbooks: workbooks.filter((workbook) => workbook.capability === capability),
  }));

  return (
    <div className="overflow-hidden">
      <section className="border-b border-border/70 bg-secondary/35">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24">
          <p className="section-label">Workbooks</p>
          <h1 className="section-title mt-5 max-w-3xl">
            Apply what the guides teach.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Free guides explain the concepts. Workbooks help you apply them with
            self-assessments, exercises, worksheets, and action plans. Each
            workbook is a one-time purchase with full printable access after
            checkout. One workbook per capability, built from research by leaders
            in each field.
          </p>
          {accessUnlocked ? (
            <p className="mt-6 max-w-2xl rounded-md border border-accent/30 bg-accent/5 px-4 py-3 text-sm text-foreground">
              Access unlocked — all workbooks are available on this device.
            </p>
          ) : null}
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="outline" className="rounded-md">
              <Link href="/guides">
                Read the free guides
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
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
          {workbooksByCapability.map(({ capability, workbooks: items }) => {
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

                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  {items.map((workbook) => (
                    <article
                      key={workbook.slug}
                      className="flex flex-col rounded-lg border border-border/80 bg-card p-7 transition-colors hover:border-accent/40"
                    >
                      <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                        {workbook.capability}
                      </p>
                      <h3 className="mt-4 font-heading text-xl leading-snug text-foreground md:text-2xl">
                        <Link
                          href={`/workbooks/${workbook.slug}`}
                          className="transition-colors hover:text-accent"
                        >
                          {workbook.title}
                        </Link>
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground md:text-base">
                        {workbook.description}
                      </p>
                      <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <FileText className="size-3.5" aria-hidden="true" />
                          ~{workbook.pageCount} pages
                        </span>
                        <span>{workbook.exerciseCount} exercises</span>
                        <span className="font-medium text-foreground">
                          ${workbook.priceUsd}
                        </span>
                      </div>
                      <ul className="mt-5 list-disc space-y-1.5 pl-5 marker:text-accent">
                        {workbook.intro.whatYouGet.slice(0, 4).map((item) => (
                          <li
                            key={item}
                            className="text-xs leading-relaxed text-muted-foreground md:text-sm"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={`/workbooks/${workbook.slug}`}
                        className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent"
                      >
                        Get the workbook · ${workbook.priceUsd}
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
          <p className="section-label">Guides vs workbooks</p>
          <h2 className="section-title mt-5">
            Read free. Practice with purpose.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Guides teach the frameworks. Workbooks give you the worksheets,
            scorecards, and day-by-day plans to build real skill. Preview any
            workbook, then unlock the full version with a one-time purchase.
          </p>
          <Button asChild size="lg" className="mt-8 rounded-md">
            <Link href="/guides">
              Start with the free guides
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
