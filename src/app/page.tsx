import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Check,
  Mic2,
  Quote,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import Image from "next/image";

import { LinkedinIcon } from "@/components/icons/linkedin-icon";

import { StructuredData } from "@/components/structured-data";
import { WaitlistForm } from "@/components/waitlist-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { FaqItem } from "@/lib/structured-data";
import { siteConfig } from "@/lib/site-config";

const faqItems: FaqItem[] = [
  {
    question: "What skills help you stand out in the age of AI?",
    answer:
      "The skills AI cannot replicate: clear storytelling, leadership that moves work forward, and calm confidence under pressure. Be Remarkable teaches all three through a practical field guide, workshops, and guides built for young adults and early career professionals.",
  },
  {
    question: "How can young adults develop executive presence?",
    answer:
      "Executive presence starts before you have the title. Be Remarkable focuses on how you show up in meetings, interviews, and high-stakes conversations: speaking with clarity, leading with intention, and projecting calm confidence when others default to noise.",
  },
  {
    question: "What is the difference between storytelling and presenting?",
    answer:
      "Presenting delivers information. Storytelling makes people care, remember, and act. Be Remarkable teaches storytelling as a professional skill: turning your experiences into narratives that cut through in any room, not just slide decks.",
  },
  {
    question: "Who is Be Remarkable for?",
    answer:
      "Young adults and early career entrants entering the workforce, with or without a degree. Whether you are in college, trade school, or starting work directly, Be Remarkable meets you at the moment that matters, not after you have a senior title.",
  },
  {
    question: "How is Be Remarkable different from typical communication training?",
    answer:
      "Most communication programs target executives with courses or coaching alone. Be Remarkable combines a field guide, workshops, and practical guides for early career professionals, with 15 years of hands-on experience developing this demographic and a focus on capability, not corporate fluff.",
  },
];

const heroValueProps = [
  "Built for young adults and early career entrants",
  "Storytelling, leadership, and calm confidence",
  "Book, workshops, and guides, not courses alone",
  "15 years developing professionals who stand out",
];

const skills = [
  {
    icon: BookOpen,
    label: "Core skill",
    title: "Storytelling",
    description:
      "Turn your experiences into narratives people remember. Build storytelling skills that cut through in presentations, meetings, and the moments that define your work.",
    highlight: "Stories that stick",
  },
  {
    icon: Users,
    label: "Core skill",
    title: "Leadership",
    description:
      "Show up as a leader before you have the title. Lead with clarity when the stakes are high, earn trust, and move work forward when you are not the obvious choice.",
    highlight: "Lead with confidence in any room",
  },
  {
    icon: Mic2,
    label: "Core skill",
    title: "Calm Confidence",
    description:
      "Project the calm confidence that makes people listen. Show up with clarity and executive presence when the stakes are high.",
    highlight: "Make people listen",
  },
];

const audiencePoints = [
  "Young adults entering the workforce, with or without a degree",
  "Early career entrants building professional presence in any field",
  "Anyone preparing to start work who knows AI can do the work, but not the presence",
];

const differentiators = [
  {
    typical: "Built for senior executives",
    remarkable: "Built for young adults and early career entrants",
  },
  {
    typical: "Courses or coaching only",
    remarkable: "Field guide, workshops, and practical guides",
  },
  {
    typical: "Polish and performance focus",
    remarkable: "Capability and substance, not hype",
  },
  {
    typical: "Generic corporate communication tips",
    remarkable: "Human skills for standing out when AI does the work",
  },
];

const methodPoints = [
  {
    title: "Built for real moments",
    description:
      "First interviews, team meetings, client conversations, and the defining moments of early career life, not abstract theory.",
  },
  {
    title: "Capability, not hype",
    description:
      "Practical frameworks you can use tomorrow. The goal is real skill, not performance or polish for its own sake.",
  },
  {
    title: "Book, workshops, and guides",
    description:
      "A field guide you can read, sessions you can attend, and resources you can use on the job right away.",
  },
  {
    title: "Human skills in the AI era",
    description:
      "When everyone has the same prompts, presence, story, and leadership become your unfair advantage.",
  },
];

const stats = [
  {
    value: "15",
    suffix: " yrs",
    label: "Developing professionals who show up with substance",
  },
  { value: "3", suffix: "", label: "Core skills that compound" },
  {
    value: "3",
    suffix: "",
    label: "Learning formats: book, workshops, guides",
  },
];

const proofPoints = [
  "Young adults in any field",
  "Early career entrants and new hires",
  "College, trade school, or straight to work",
  "Career changers starting fresh",
];

export default function Home() {
  return (
    <>
      <StructuredData faqItems={faqItems} />

      <div className="overflow-hidden">
        <section
          aria-labelledby="hero-heading"
          className="relative bg-hero text-hero-foreground"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_80%_0%,oklch(0.58_0.13_45/0.14),transparent)]"
          />
          <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-14 md:px-8 md:pb-28 md:pt-20">
            <div className="grid items-end gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
              <div>
                <p className="text-xs font-semibold tracking-[0.24em] text-hero-foreground/55 uppercase">
                  Coming soon · beremarkablebook.com
                </p>
                <h1
                  id="hero-heading"
                  className="mt-6 font-heading text-[2.75rem] leading-[1.02] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.25rem]"
                >
                  Human skills are power.
                  <span className="hero-accent mt-2 block text-accent">
                    And within reach.
                  </span>
                </h1>
                <p className="mt-7 max-w-xl text-lg leading-relaxed text-hero-foreground/72 md:text-xl">
                  A field guide, workshops, and practical guides for young
                  adults and early career entrants. Build storytelling,
                  leadership, and calm confidence that help you stand out with
                  substance when AI is everywhere.
                </p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {heroValueProps.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-hero-foreground/78 md:text-base"
                    >
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button
                    asChild
                    size="lg"
                    className="h-12 rounded-md bg-accent px-7 text-base font-semibold text-accent-foreground hover:bg-accent/90"
                  >
                    <a href="#waitlist">
                      Join the waitlist for early access
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="h-12 rounded-md border-hero-foreground/20 bg-transparent px-7 text-base text-hero-foreground hover:bg-hero-foreground/8 hover:text-hero-foreground"
                  >
                    <a href="#why-different">See what makes us different</a>
                  </Button>
                </div>
              </div>

              <Card className="rounded-lg border-hero-foreground/10 bg-hero-foreground/[0.04] text-hero-foreground shadow-none backdrop-blur-sm">
                <CardHeader className="gap-4 px-7 pt-8 pb-3">
                  <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                    The gap no one fills
                  </p>
                  <CardTitle className="font-heading text-2xl leading-tight md:text-3xl">
                    Machines can generate answers.
                    <span className="mt-1 block text-hero-foreground/90">
                      Only you can be remarkable.
                    </span>
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed text-hero-foreground/65">
                    In a world flooded with AI output, the edge belongs to
                    people who communicate with clarity, lead with intention,
                    and show up like leaders before the title arrives.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-7 pb-8">
                  <div className="rounded-md border border-hero-foreground/10 bg-hero-foreground/[0.03] p-5">
                    <p className="font-heading text-lg leading-snug">
                      Communication skills for standing out with substance.
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-hero-foreground/60">
                      A field guide, workshops, and guides built for the age of
                      AI. Storytelling, leadership, and calm confidence from
                      over 15 years coaching professionals to tell stronger
                      stories, lead with influence, and show up with calm
                      confidence.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          aria-label="Value proposition"
          className="border-b border-border/70 bg-accent/10"
        >
          <div className="mx-auto max-w-6xl px-6 py-8 md:px-8 md:py-10">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Early career focus",
                  text: "For young adults starting work, not executives polishing a brand.",
                },
                {
                  title: "Three core skills",
                  text: "Storytelling, leadership, and calm confidence that compound over time.",
                },
                {
                  title: "Book plus workshops",
                  text: "A field guide you read, sessions you attend, guides you use on the job.",
                },
                {
                  title: "Built for the AI age",
                  text: "Stand out with human presence when everyone has the same prompts.",
                },
              ].map((item) => (
                <div key={item.title} className="value-strip-item">
                  <div className="flex items-center gap-2">
                    <Sparkles
                      className="size-4 text-accent"
                      aria-hidden="true"
                    />
                    <h2 className="font-heading text-base text-foreground md:text-lg">
                      {item.title}
                    </h2>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border/70 bg-card">
          <div className="mx-auto max-w-6xl px-6 py-12 md:px-8 md:py-14">
            <p className="text-center text-xs font-semibold tracking-[0.22em] text-muted-foreground uppercase">
              Built for young adults entering work
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {proofPoints.map((point) => (
                <span
                  key={point}
                  className="font-heading text-base text-foreground/75 md:text-lg"
                >
                  {point}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section
          id="why-different"
          className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28"
        >
          <div className="max-w-2xl">
            <p className="section-label">Why Be Remarkable</p>
            <h2 className="section-title mt-5">
              Professional development built for your starting line, not the
              C-suite.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Most communication and leadership programs assume you already have
              a title, a team, and years in the room. Be Remarkable is
              different by design.
            </p>
          </div>

          <div className="mt-14 overflow-hidden rounded-lg border border-border/80">
            <div className="grid grid-cols-1 bg-secondary/40 md:grid-cols-2">
              <div className="border-b border-border/70 px-6 py-4 md:border-r md:border-b-0">
                <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                  Typical training
                </p>
              </div>
              <div className="border-b border-border/70 bg-accent/8 px-6 py-4 md:border-b-0">
                <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                  Be Remarkable
                </p>
              </div>
            </div>
            {differentiators.map((row, index) => (
              <div
                key={row.remarkable}
                className={`grid grid-cols-1 md:grid-cols-2 ${
                  index < differentiators.length - 1
                    ? "border-b border-border/70"
                    : ""
                }`}
              >
                <div className="flex items-start gap-3 border-b border-border/70 px-6 py-5 md:border-r md:border-b-0">
                  <X
                    className="mt-0.5 size-4 shrink-0 text-muted-foreground/70"
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                    {row.typical}
                  </p>
                </div>
                <div className="flex items-start gap-3 bg-background px-6 py-5">
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-relaxed text-foreground md:text-base">
                    {row.remarkable}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Button asChild size="lg" className="rounded-md">
              <a href="#waitlist">
                Get on the waitlist
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </section>

        <section
          id="mission"
          className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28"
        >
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="section-label">Mission</p>
              <h2 className="section-title mt-5">
                Stand out with substance, on purpose.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                The goal is not hype. It is capability: the ability to persuade,
                lead, and show up with calm confidence when it matters most.
              </p>
            </div>
            <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                <span className="font-medium text-foreground">
                  Be Remarkable
                </span>{" "}
                exists because professionals today are armed with tools,
                prompts, and polished deliverables, but rarely taught the
                communication skills that actually separate them.
              </p>
              <p>
                This is a field guide for standing out with substance: how to
                tell stories with clarity, how to lead with influence before you
                have authority, and how to project the calm confidence that
                makes people listen.
              </p>
              <p>
                The goal isn&apos;t hype. It&apos;s capability, so you can walk
                into team meetings, client conversations, and high-stakes
                moments knowing you bring something AI never will. The book,
                workshops, and guides give you practical tools for any role.
              </p>
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="border-y border-border/70 bg-secondary/35"
        >
          <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
            <div className="max-w-2xl">
              <p className="section-label">What you&apos;ll build</p>
              <h2 className="section-title mt-5">
                Three skills. One unfair advantage.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                Storytelling skills, leadership development, and executive
                presence for young adults who want to lead with substance, not
                just prompts.
              </p>
            </div>

            <div className="mt-14 divide-y divide-border/80 rounded-lg border border-border/80 bg-background">
              {skills.map((skill, index) => (
                <div
                  key={skill.title}
                  className="grid gap-6 p-7 md:grid-cols-[1fr_1.4fr] md:items-start md:p-9"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <div
                        className="flex size-11 items-center justify-center rounded-md bg-primary/8 text-primary"
                        aria-hidden="true"
                      >
                        <skill.icon className="size-5" />
                      </div>
                      <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                        {skill.label}
                      </p>
                    </div>
                    <h3 className="mt-4 font-heading text-2xl text-foreground md:text-3xl">
                      {skill.title}
                    </h3>
                  </div>
                  <div>
                    <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                      {skill.description}
                    </p>
                    <p className="mt-4 text-sm font-medium text-foreground">
                      {skill.highlight}
                    </p>
                    {index < skills.length - 1 ? null : (
                      <Button
                        asChild
                        variant="link"
                        className="mt-2 h-auto p-0"
                      >
                        <a href="#waitlist">
                          Join the waitlist
                          <ArrowRight className="size-4" aria-hidden="true" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-hero text-hero-foreground">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:px-8 md:py-28">
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] text-hero-foreground/50 uppercase">
                Built for
              </p>
              <h2 className="mt-5 font-heading text-3xl leading-[1.08] md:text-4xl lg:text-[2.75rem]">
                Young adults and early career entrants who refuse to blend in.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-hero-foreground/70 md:text-lg">
                Whether you are heading to college, trade school, or straight
                to work, the book, workshops, and guides meet you where you are.
              </p>
            </div>
            <ul className="space-y-4">
              {audiencePoints.map((point) => (
                <li
                  key={point}
                  className="flex gap-4 rounded-md border border-hero-foreground/10 bg-hero-foreground/[0.04] p-5"
                >
                  <Briefcase
                    className="mt-0.5 size-5 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-relaxed md:text-base">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="about"
          aria-labelledby="about-heading"
          className="border-y border-border/70 bg-secondary/35"
        >
          <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="relative size-36 shrink-0 overflow-hidden rounded-full border-2 border-accent/30 bg-background shadow-sm md:size-40">
                  <Image
                    src={siteConfig.author.image}
                    alt={`Portrait of ${siteConfig.author.name}`}
                    fill
                    sizes="(max-width: 768px) 144px, 160px"
                    className="object-cover object-[center_20%]"
                    priority
                  />
                </div>
                <p className="mt-6 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
                  About the author
                </p>
                <h2
                  id="about-heading"
                  className="mt-3 font-heading text-3xl leading-tight text-foreground md:text-4xl"
                >
                  {siteConfig.author.name}
                </h2>
                <p className="mt-2 text-sm font-medium text-muted-foreground md:text-base">
                  {siteConfig.author.title}
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="mt-6 rounded-md"
                >
                  <a
                    href={siteConfig.author.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedinIcon />
                    Connect on LinkedIn
                  </a>
                </Button>
                <blockquote className="mt-8 w-full rounded-lg border border-border/80 bg-background p-6 text-left md:p-8">
                  <Quote
                    className="size-7 text-accent/80"
                    aria-hidden="true"
                  />
                  <p className="mt-4 font-heading text-xl leading-snug text-foreground md:text-2xl">
                    &ldquo;Executive coaches teach polish. I teach capability.
                    That is the difference young professionals actually
                    need.&rdquo;
                  </p>
                  <footer className="mt-4 text-sm text-muted-foreground">
                    {siteConfig.author.name}
                  </footer>
                </blockquote>
              </div>

              <div>
                <p className="section-label">About me</p>
                <h3 className="section-title mt-5">
                  Fifteen years building the skills AI cannot replace.
                </h3>
                <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                  <p>
                    I am {siteConfig.author.name}, and for more than 15 years I
                    have worked directly with young adults and early career
                    entrants: people stepping into their first real roles,
                    whether they came through college, trade school, or straight
                    to work. My focus has always been the same: storytelling
                    that people remember, leadership that moves work forward,
                    and calm confidence when the stakes are high.
                  </p>
                  <p>
                    Be Remarkable is not a side project or a rebrand of
                    executive coaching. It is the work I have been doing all
                    along, now shaped into a field guide, workshops, and
                    practical guides for the moment that actually matters: when
                    you are starting out, not when you already have the title.
                  </p>
                  <p>
                    Most communication training assumes you are already in the
                    room. Executive coaches rarely share a personal story about
                    why this work matters at the starting line. I do, because I
                    have spent my career with people who needed substance, not
                    hype, before anyone was watching.
                  </p>
                  <p className="font-medium text-foreground">
                    My mission is simple: help you stand out with capability in
                    an age of AI. When everyone has the same prompts, presence,
                    story, and leadership become your edge. The book, workshops,
                    and guides exist to give you that edge on purpose.
                  </p>
                </div>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "15+ years with young adults and early career pros",
                    "College, trade school, or straight to work",
                    "Book, workshops, and guides, not courses alone",
                    "Capability over hype, every time",
                  ].map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground md:text-base"
                    >
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border/70 bg-secondary/35">
          <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-24">
            <div className="max-w-2xl">
              <p className="section-label">Why it works</p>
              <h2 className="section-title mt-5">
                The Be Remarkable approach to professional development
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                For over 15 years, this framework has shaped how people show up
                in team meetings, presentations, and pivotal moments across
                every field.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2">
              {methodPoints.map((point) => (
                <div
                  key={point.title}
                  className="rounded-lg border border-border/80 bg-background p-7"
                >
                  <h3 className="font-heading text-xl text-foreground">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>

            <Separator className="my-14" />

            <div className="grid gap-10 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <p className="font-heading text-5xl leading-none text-foreground md:text-6xl">
                    {stat.value}
                    <span className="text-accent">{stat.suffix}</span>
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28"
        >
          <div className="max-w-2xl">
            <p className="section-label">FAQ</p>
            <h2 className="section-title mt-5">
              Questions about communication skills in the AI age
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Straight answers on storytelling, leadership development, executive
              presence, and who Be Remarkable is for.
            </p>
          </div>

          <div className="mt-14 divide-y divide-border/80 rounded-lg border border-border/80 bg-card">
            {faqItems.map((item) => (
              <details key={item.question} className="group px-6 py-5 md:px-8">
                <summary className="cursor-pointer list-none font-heading text-lg text-foreground marker:content-none md:text-xl [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-4">
                    {item.question}
                    <span
                      aria-hidden="true"
                      className="mt-1 text-accent transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section
          id="waitlist"
          className="border-t border-border/70 bg-[linear-gradient(180deg,oklch(0.985_0.006_85),oklch(0.965_0.014_78))]"
        >
          <div className="mx-auto max-w-3xl px-6 py-20 text-center md:px-8 md:py-28">
            <p className="section-label">Stay in the loop</p>
            <h2 className="section-title mt-5">
              Be first when the field guide and workshops launch.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Join the waitlist for launch updates, early excerpts, and
              practical guides for young adults who want to lead with presence,
              not just prompts.
            </p>
            <div className="mx-auto mt-10 max-w-xl">
              <WaitlistForm />
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              Questions?{" "}
              <a
                href="mailto:hello@beremarkablebook.com"
                className="font-medium text-foreground underline-offset-4 hover:underline"
              >
                hello@beremarkablebook.com
              </a>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
