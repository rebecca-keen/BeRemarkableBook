import { ArrowRight, BookOpen, Mic2, Sparkles, Users } from "lucide-react";

import { WaitlistForm } from "@/components/waitlist-form";
import { Badge } from "@/components/ui/badge";
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
    title: "Storytelling",
    description:
      "Turn ideas into narratives people remember — in interviews, presentations, and the moments that define your early career.",
  },
  {
    icon: Users,
    title: "Leadership",
    description:
      "Lead before you have a title. Influence peers, earn trust, and move work forward when no one is officially in charge.",
  },
  {
    icon: Mic2,
    title: "Executive Presence",
    description:
      "Show up with clarity and confidence in rooms where first impressions matter — from campus to your first real role.",
  },
];

const audiencePoints = [
  "College juniors and seniors preparing to enter the workforce",
  "Recent graduates navigating interviews, internships, and early promotions",
  "Young professionals who know AI can do the work — but not the presence",
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,oklch(0.62_0.14_45/0.18),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-40 h-72 w-72 rounded-full bg-primary/5 blur-3xl"
      />

      <header className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 md:px-8">
        <a href="#" className="group flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-full border border-primary/15 bg-card font-heading text-lg text-primary shadow-sm">
            B
          </span>
          <div>
            <p className="font-heading text-lg leading-none text-foreground">
              Be Remarkable
            </p>
            <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
              beremarkablebook.com
            </p>
          </div>
        </a>
        <Button asChild variant="outline" className="hidden rounded-full sm:inline-flex">
          <a href="#waitlist">Join waitlist</a>
        </Button>
      </header>

      <main>
        <section className="relative mx-auto max-w-6xl px-6 pb-20 pt-10 md:px-8 md:pt-16">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Badge
                variant="secondary"
                className="mb-6 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-[0.16em] text-accent uppercase"
              >
                Coming soon
              </Badge>
              <h1 className="font-heading text-4xl leading-[1.05] text-foreground sm:text-5xl md:text-6xl">
                Stand out when AI is{" "}
                <span className="italic text-accent">everywhere.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                A new kind of guide for college students and recent graduates —
                the human skills that launch careers: storytelling, leadership,
                and executive presence.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-xl bg-primary px-6 text-base hover:bg-primary/90"
                >
                  <a href="#waitlist">
                    Get early access
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="lg"
                  className="h-12 rounded-xl px-6 text-base"
                >
                  <a href="#mission">Read the mission</a>
                </Button>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="absolute -left-4 top-8 hidden h-28 w-28 rounded-full border border-dashed border-accent/30 md:block" />
              <Card className="relative overflow-hidden rounded-[2rem] border-primary/10 bg-card/90 shadow-xl backdrop-blur-sm">
                <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-transparent via-accent to-transparent" />
                <CardHeader className="gap-4 px-8 pt-10 pb-4">
                  <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                    The gap no one fills
                  </p>
                  <CardTitle className="font-heading text-3xl leading-tight">
                    Machines can generate answers.
                    <span className="block text-primary">
                      Only you can be remarkable.
                    </span>
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    In a world flooded with AI output, the edge belongs to
                    people who communicate with clarity, lead with intention,
                    and show up like leaders before the title arrives.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-8 pb-10">
                  <div className="rounded-2xl border border-border/70 bg-secondary/60 p-5">
                    <p className="font-heading text-lg text-foreground">
                      Think Nancy Duarte — for the generation entering work now.
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Practical, direct, and built for the age of AI — not
                      theory for executives who already have a corner office.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="mission" className="border-y border-border/70 bg-card/60">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[0.9fr_1.1fr] md:px-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                Mission
              </p>
              <h2 className="mt-4 font-heading text-3xl leading-tight text-foreground md:text-4xl">
                Inspire a generation to become remarkable — on purpose.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                <span className="font-medium text-foreground">Be Remarkable</span>{" "}
                exists because young adults are entering the most competitive
                talent market in history — armed with degrees, prompts, and
                polished resumes, but rarely taught the skills that actually
                separate them.
              </p>
              <p>
                This book is a field guide for standing out with substance:
                how to tell the story only you can tell, how to lead when
                you&apos;re the youngest person in the room, and how to project
                the calm confidence that makes people listen.
              </p>
              <p>
                The goal isn&apos;t hype. It&apos;s capability — so you can
                walk into interviews, internships, and early roles knowing you
                bring something AI never will.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20 md:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              What you&apos;ll build
            </p>
            <h2 className="mt-4 font-heading text-3xl leading-tight text-foreground md:text-4xl">
              Three skills. One unfair advantage.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Each chapter is designed for real situations — campus presentations,
              group projects, networking events, and the first years of your
              career.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {skills.map((skill) => (
              <Card
                key={skill.title}
                className="rounded-[1.75rem] border-border/80 bg-background/80 shadow-sm transition-transform duration-300 hover:-translate-y-1"
              >
                <CardHeader className="gap-4">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                    <skill.icon className="size-5" />
                  </div>
                  <CardTitle className="font-heading text-2xl">
                    {skill.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {skill.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:px-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-primary-foreground/70 uppercase">
                Built for
              </p>
              <h2 className="mt-4 font-heading text-3xl leading-tight md:text-4xl">
                College students & recent grads who refuse to blend in.
              </h2>
            </div>
            <ul className="space-y-4">
              {audiencePoints.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-4 text-sm leading-relaxed md:text-base"
                >
                  <Sparkles className="mt-0.5 size-4 shrink-0 text-accent" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20 md:px-8">
          <div className="grid gap-10 rounded-[2rem] border border-border/80 bg-card p-8 shadow-sm md:grid-cols-[1fr_1.2fr] md:p-12">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                Why trust this
              </p>
              <h2 className="mt-4 font-heading text-3xl leading-tight text-foreground md:text-4xl">
                A decade developing this exact generation.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                For ten years, the author has worked directly with college
                students and young professionals — coaching communication,
                leadership, and presence in the moments that shape early
                careers.
              </p>
              <p>
                That focus isn&apos;t a side project. It&apos;s the reason this
                work exists — and why a career built on developing young talent
                continues to accelerate.
              </p>
              <p className="font-medium text-foreground">
                No one else is teaching these people the skills to succeed. This
                book fills that gap.
              </p>
            </div>
          </div>
        </section>

        <section
          id="waitlist"
          className="border-t border-border/70 bg-[linear-gradient(180deg,oklch(0.975_0.012_85),oklch(0.955_0.018_78))]"
        >
          <div className="mx-auto max-w-3xl px-6 py-20 text-center md:px-8">
            <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              Stay in the loop
            </p>
            <h2 className="mt-4 font-heading text-3xl leading-tight text-foreground md:text-4xl">
              Be first when the book launches.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Join the waitlist for launch updates, early excerpts, and
              resources for students and recent grads who want to lead with
              presence — not just prompts.
            </p>
            <div className="mx-auto mt-8 max-w-xl">
              <WaitlistForm />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
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
      </main>

      <footer className="border-t border-border/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} Be Remarkable. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#mission" className="hover:text-foreground">
              Mission
            </a>
            <Separator orientation="vertical" className="h-4" />
            <a href="#waitlist" className="hover:text-foreground">
              Waitlist
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
