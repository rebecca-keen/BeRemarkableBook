import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Mic2,
  Quote,
  Users,
} from "lucide-react";

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

const skills = [
  {
    icon: BookOpen,
    label: "Core skill",
    title: "Storytelling",
    description:
      "Learn to tell the story only you can tell. Turn your experiences into narratives people remember in interviews, presentations, and the moments that define your early career.",
    highlight: "Tell the story only you can tell",
  },
  {
    icon: Users,
    label: "Core skill",
    title: "Leadership",
    description:
      "Lead when you are the youngest person in the room. Influence peers, earn trust, and move work forward before you have a title.",
    highlight: "Lead when you are the youngest in the room",
  },
  {
    icon: Mic2,
    label: "Core skill",
    title: "Calm Confidence",
    description:
      "Project the calm confidence that makes people listen. Show up with clarity and presence in rooms where first impressions matter.",
    highlight: "Make people listen",
  },
];

const audiencePoints = [
  "College students preparing to enter the workforce in any field",
  "Recent graduates, career changers, and new hires in their first roles",
  "Anyone starting out who knows AI can do the work, but not the presence",
];

const methodPoints = [
  {
    title: "Built for real moments",
    description:
      "Interviews, team meetings, networking events, and the first years of any career, not abstract theory.",
  },
  {
    title: "Capability, not hype",
    description:
      "Practical frameworks you can use tomorrow. The goal is real skill, not performance or polish for its own sake.",
  },
  {
    title: "Book, workshops, and guides",
    description:
      "A field guide you can read, sessions you can attend, and resources you can use on the job from day one.",
  },
  {
    title: "Human skills in the AI era",
    description:
      "When everyone has the same prompts, presence, story, and leadership become your unfair advantage.",
  },
];

const stats = [
  { value: "10", suffix: " yrs", label: "Developing people at career starts" },
  { value: "3", suffix: "", label: "Core skills that compound" },
  {
    value: "3",
    suffix: "",
    label: "Learning formats: book, workshops, guides",
  },
];

const proofPoints = [
  "College students in any field",
  "Career changers and new hires",
  "Early-career professionals",
  "Workforce readiness programs",
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      <section className="relative bg-hero text-hero-foreground">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_80%_0%,oklch(0.58_0.13_45/0.14),transparent)]"
        />
        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-14 md:px-8 md:pb-28 md:pt-20">
          <div className="grid items-end gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold tracking-[0.24em] text-hero-foreground/55 uppercase">
                Coming soon · beremarkablebook.com
              </p>
              <h1 className="mt-6 font-heading text-[2.75rem] leading-[1.02] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.25rem]">
                Human skills are power.
                <span className="mt-2 block text-accent">And within reach.</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-hero-foreground/72 md:text-xl">
                A field guide, workshops, and practical guides for anyone
                entering the workforce: storytelling, leadership, and calm
                confidence that help you stand out with substance when AI is
                everywhere.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-md bg-accent px-7 text-base font-semibold text-accent-foreground hover:bg-accent/90"
                >
                  <a href="#waitlist">
                    Get early access
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 rounded-md border-hero-foreground/20 bg-transparent px-7 text-base text-hero-foreground hover:bg-hero-foreground/8 hover:text-hero-foreground"
                >
                  <a href="#mission">Read the mission</a>
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
                  In a world flooded with AI output, the edge belongs to people
                  who communicate with clarity, lead with intention, and show up
                  like leaders before the title arrives.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-7 pb-8">
                <div className="rounded-md border border-hero-foreground/10 bg-hero-foreground/[0.03] p-5">
                  <p className="font-heading text-lg leading-snug">
                    The skills no one teaches people entering work now.
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-hero-foreground/60">
                    A field guide, workshops, and guides built for the age of
                    AI. Storytelling, leadership, and calm confidence from ten
                    years coaching people at the start of their careers.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-b border-border/70 bg-card">
        <div className="mx-auto max-w-6xl px-6 py-12 md:px-8 md:py-14">
          <p className="text-center text-xs font-semibold tracking-[0.22em] text-muted-foreground uppercase">
            Built for anyone entering the workforce
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

      <section id="mission" className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
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
              <span className="font-medium text-foreground">Be Remarkable</span>{" "}
              exists because people entering today&apos;s workforce are armed
              with tools, prompts, and polished resumes, but rarely taught the
              skills that actually separate them.
            </p>
            <p>
              This is a field guide for standing out with substance: how to tell
              the story only you can tell, how to lead when you&apos;re the
              youngest person in the room, and how to project the calm
              confidence that makes people listen.
            </p>
            <p>
              The goal isn&apos;t hype. It&apos;s capability, so you can walk
              into interviews, internships, and early roles knowing you bring
              something AI never will. The book, workshops, and guides give you
              practical tools for any job, not just those chasing a degree.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="border-y border-border/70 bg-secondary/35">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
          <div className="max-w-2xl">
            <p className="section-label">What you&apos;ll build</p>
            <h2 className="section-title mt-5">
              Three skills. One unfair advantage.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              How to tell the story only you can tell, lead when you&apos;re the
              youngest person in the room, and project the calm confidence that
              makes people listen.
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
                    <div className="flex size-11 items-center justify-center rounded-md bg-primary/8 text-primary">
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
                    <Button asChild variant="link" className="mt-2 h-auto p-0">
                      <a href="#waitlist">
                        Join the waitlist
                        <ArrowRight className="size-4" />
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
              Anyone entering the workforce who refuses to blend in.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-hero-foreground/70 md:text-lg">
              Whether you are finishing a degree, starting your first job, or
              changing paths, the book, workshops, and guides meet you where you
              are.
            </p>
          </div>
          <ul className="space-y-4">
            {audiencePoints.map((point) => (
              <li
                key={point}
                className="flex gap-4 rounded-md border border-hero-foreground/10 bg-hero-foreground/[0.04] p-5"
              >
                <GraduationCap className="mt-0.5 size-5 shrink-0 text-accent" />
                <span className="text-sm leading-relaxed md:text-base">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <p className="section-label">Why trust this</p>
            <h2 className="section-title mt-5">
              A decade developing people at the start of their careers.
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                For ten years, the author has worked directly with people at the
                start of their careers, coaching storytelling, leadership, and
                calm confidence in the moments that shape early success.
              </p>
              <p>
                That focus isn&apos;t a side project. It&apos;s the reason this
                work exists, and why a career built on developing emerging talent
                continues to accelerate.
              </p>
              <p className="font-medium text-foreground">
                No one else is teaching these skills at the moment that matters.
                This work fills that gap with a book, workshops, and guides.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <blockquote className="relative rounded-lg border border-border/80 bg-card p-8 md:p-10">
              <Quote className="size-8 text-accent/80" aria-hidden />
              <p className="mt-5 font-heading text-2xl leading-snug text-foreground md:text-3xl">
                &ldquo;In a world where everyone has the same AI-generated
                answers, the people who communicate with clarity and presence
                will win.&rdquo;
              </p>
              <footer className="mt-6 text-sm text-muted-foreground">
                The premise behind Be Remarkable
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="border-y border-border/70 bg-secondary/35">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-24">
          <div className="max-w-2xl">
            <p className="section-label">Why it works</p>
            <h2 className="section-title mt-5">The Be Remarkable approach</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              For ten years, this framework has shaped how people show up in
              interviews, team meetings, and their first roles across every
              field.
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
        id="waitlist"
        className="border-t border-border/70 bg-[linear-gradient(180deg,oklch(0.985_0.006_85),oklch(0.965_0.014_78))]"
      >
        <div className="mx-auto max-w-3xl px-6 py-20 text-center md:px-8 md:py-28">
          <p className="section-label">Stay in the loop</p>
          <h2 className="section-title mt-5">
            Be first when new resources launch.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Join the waitlist for launch updates, early excerpts, and practical
            guides for anyone entering the workforce who wants to lead with
            presence, not just prompts.
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
  );
}
