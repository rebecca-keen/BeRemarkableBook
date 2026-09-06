import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { guides } from "@/lib/guides";
import { siteConfig } from "@/lib/site-config";

const title = "Professional Development for New Grads";
const description =
  "Professional development for new grads and early-career professionals: build the communication, presence, and human skills employers say new graduates are missing in the AI era. Free guides, workbooks, and coaching.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${siteConfig.url}/professional-development-for-new-grads`,
  },
  openGraph: {
    title: `${title} | Be Remarkable`,
    description,
    url: `${siteConfig.url}/professional-development-for-new-grads`,
    type: "website",
  },
};

const faqItems = [
  {
    question: "What professional development do new grads need most?",
    answer:
      "The human skills employers say new graduates are missing: clear communication, professionalism, presence, and the ability to tell the story of their work. These matter more than ever now that AI handles the routine entry-level tasks new grads used to learn on.",
  },
  {
    question: "Why do new grads struggle with the transition to work?",
    answer:
      "It is largely a setup problem, not a personality one. This generation lost in-person years to the pandemic, did much of their socializing through screens, and entered a job market where companies offer less training and mentorship. They are judged on human skills nobody taught them. The good news is those skills can be built.",
  },
  {
    question:
      "How can new grads develop professional skills without company training?",
    answer:
      "Develop yourself on purpose. Pick one skill, storytelling, speaking up, or presence, and practice it deliberately in real conversations. Be Remarkable's free guides, free first chapter, and workbooks give early-career professionals a structured way to build these skills on their own.",
  },
];

export default function NewGradProfessionalDevelopmentPage() {
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
          <p className="section-label">For new grads</p>
          <h1 className="section-title mt-5 max-w-3xl">
            Professional development for new grads.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Employers keep saying new graduates are not workplace ready, that
            they struggle with communication and professionalism. Here is the
            honest version: this generation lost in-person years to the pandemic,
            did much of their connecting through screens, and walked into a job
            market where companies offer less training than ever and AI erased
            the easy entry-level tasks. The skills gap is real, and it is not
            your fault. Professional development is how you close it, one skill
            at a time.
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
            The workplace-readiness gap, and how to close it
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            The transition from college to work has always had a learning curve.
            It is steeper now. AI raised the bar on technical output, so a new
            grad is no longer judged on producing a clean deck or a tidy summary,
            a machine does that. You are judged on the human skills: speaking up
            clearly, handling feedback, reading a room, and making people trust
            you. Nobody taught these in school, and fewer companies teach them on
            the job. So the professionals who get ahead build them on purpose.
          </p>
        </div>

        <h2 className="mt-16 font-heading text-2xl text-foreground md:text-3xl">
          The skills that set new grads apart
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
            Practice the skills, don&apos;t just read about them
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            The guides teach the frameworks. The workbooks help you build the
            skill with self-assessments, exercises, and action plans, made to be
            affordable when you are just starting out. $39 each, or all six for
            $99.
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
          <h2 className="section-title">New grad questions, answered</h2>
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
          <p className="mt-10 text-sm text-muted-foreground">
            Looking for the bigger picture?{" "}
            <Link
              href="/professional-development"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              Professional development for the AI age
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
