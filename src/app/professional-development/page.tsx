import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { guides } from "@/lib/guides";
import { siteConfig } from "@/lib/site-config";

const title = "Professional Development for the AI Age";
const description =
  "Professional development for the AI age: build the storytelling, leadership, executive presence, and critical thinking skills AI can't replace. Free guides, workbooks, and coaching for professionals at every career stage.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${siteConfig.url}/professional-development` },
  openGraph: {
    title: `${title} | Be Remarkable`,
    description,
    url: `${siteConfig.url}/professional-development`,
    type: "website",
  },
};

const faqItems = [
  {
    question: "What is professional development?",
    answer:
      "Professional development is the deliberate practice of building the skills that make you more effective and harder to replace. In the age of AI, the professional development that matters most is the human skills a machine cannot do for you: storytelling, leadership, executive presence, and critical thinking.",
  },
  {
    question:
      "What professional development skills matter most in the age of AI?",
    answer:
      "The skills AI cannot replicate. When everyone can generate a competent draft, the differentiators are judgment, clear storytelling, presence under pressure, and the ability to think past the first answer. These are the human skills Be Remarkable helps you develop.",
  },
  {
    question: "How do you develop professionally without company training?",
    answer:
      "Most companies now offer less training and mentorship than they used to, so professional development has to be self-directed. Pick one skill, practice it deliberately in real conversations, and reflect on what worked. Be Remarkable's free guides and workbooks give you a structured way to do this on your own.",
  },
];

export default function ProfessionalDevelopmentPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <div className="overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="border-b border-border/70 bg-secondary/35">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24">
          <p className="section-label">Professional development</p>
          <h1 className="section-title mt-5 max-w-3xl">
            Professional development for the AI age.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Professional development used to mean climbing a ladder of technical
            skills. In the age of AI, that has changed. When a machine can
            produce the competent version of almost any task, the development
            that matters is the human skills AI cannot replace: storytelling,
            leadership, executive presence, and critical thinking. Be Remarkable
            is professional development built for exactly this moment, for
            professionals at every career stage who want to stand out with
            substance.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-md">
              <Link href="/guides">
                Start with the free guides
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-md">
              <Link href="/book/chapter-1">Read Chapter 1 free</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24">
        <div className="max-w-2xl">
          <h2 className="section-title">
            Why professional development looks different now
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            AI raised the floor on technical output. Anyone can produce a
            polished email, a clean summary, or a confident-sounding answer in
            seconds. So the surface skills that used to set professionals apart
            no longer do. What still counts, and what is getting more valuable,
            is everything AI cannot fake: judgment, presence, and the ability to
            make people trust and follow you. That is where real professional
            development now lives.
          </p>
        </div>

        <h2 className="mt-16 font-heading text-2xl text-foreground md:text-3xl">
          The six capabilities we develop
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="flex flex-col rounded-lg border border-border/80 bg-card p-7 transition-colors hover:border-accent/40"
            >
              <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                {guide.capability}
              </p>
              <h3 className="mt-3 font-heading text-lg leading-snug text-foreground md:text-xl">
                {guide.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {guide.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                Read the guide
                <ArrowRight className="size-4" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-14 rounded-lg border border-accent/40 bg-card p-8 md:p-10">
          <h2 className="font-heading text-2xl text-foreground md:text-3xl">
            Put your development into practice
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            The guides teach the frameworks. The workbooks help you build the
            skill with self-assessments, exercises, and action plans. $39 each,
            or all six for $99.
          </p>
          <Button asChild size="lg" className="mt-6 rounded-md">
            <Link href="/workbooks">
              Explore the workbooks
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="border-t border-border/70 bg-secondary/35">
        <div className="mx-auto max-w-3xl px-6 py-16 md:px-8 md:py-20">
          <h2 className="section-title">
            Professional development, answered
          </h2>
          <div className="mt-10 space-y-8">
            {faqItems.map((item) => (
              <div key={item.question}>
                <h3 className="font-heading text-lg text-foreground md:text-xl">
                  {item.question}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
