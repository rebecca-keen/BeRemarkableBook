import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { LinkedinIcon } from "@/components/icons/linkedin-icon";
import { SubstackIcon } from "@/components/icons/substack-icon";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Links",
  description:
    "Start here: read Chapter 1 free, the free guides, the workbooks, and Rebecca Keen's Substack.",
  alternates: { canonical: `${siteConfig.url}/links` },
};

type LinkItem = {
  href: string;
  label: string;
  sub: string;
  external?: boolean;
  icon?: "substack" | "linkedin";
  primary?: boolean;
};

const links: LinkItem[] = [
  {
    href: "/book/chapter-1",
    label: "Read Chapter 1 free",
    sub: "The first chapter of Be Remarkable",
    primary: true,
  },
  {
    href: "/guides",
    label: "Free guides",
    sub: "Storytelling, presence, leadership, and more",
  },
  {
    href: "/workbooks",
    label: "Workbooks · from $39",
    sub: "Put the skills into practice, or get all six for $99",
  },
  {
    href: siteConfig.author.substack,
    label: "Read my Substack",
    sub: "Practical advice you can use today",
    external: true,
    icon: "substack",
  },
  {
    href: "/#work-with-me",
    label: "Work with me",
    sub: "1:1 coaching and team workshops",
  },
  {
    href: siteConfig.author.linkedin,
    label: "Connect on LinkedIn",
    sub: "Follow along",
    external: true,
    icon: "linkedin",
  },
];

export default function LinksPage() {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col items-center px-6 py-14 md:py-20">
      <div className="relative size-24 overflow-hidden rounded-full border-2 border-accent/30 bg-background shadow-sm">
        <Image
          src={siteConfig.author.image}
          alt={`Portrait of ${siteConfig.author.name}`}
          fill
          sizes="96px"
          className="object-cover object-[center_20%]"
          priority
        />
      </div>
      <h1 className="mt-5 font-heading text-2xl text-foreground">
        {siteConfig.author.name}
      </h1>
      <p className="mt-2 text-center text-sm leading-relaxed text-muted-foreground">
        The human skills AI can&apos;t replace, for people who were never taught
        them.
      </p>

      <div className="mt-8 flex w-full flex-col gap-3">
        {links.map((item) => {
          const external = item.external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {};

          const className = [
            "flex items-center justify-between gap-3 rounded-xl border px-5 py-4 text-left transition-colors",
            item.primary
              ? "border-accent bg-accent text-accent-foreground hover:bg-accent/90"
              : "border-border/80 bg-card text-foreground hover:border-accent/50",
          ].join(" ");

          const inner = (
            <>
              <span className="min-w-0">
                <span className="flex items-center gap-2 font-heading text-base">
                  {item.icon === "substack" ? (
                    <SubstackIcon className="size-4" />
                  ) : null}
                  {item.icon === "linkedin" ? (
                    <LinkedinIcon className="size-4" />
                  ) : null}
                  {item.label}
                </span>
                <span
                  className={`mt-0.5 block text-xs ${
                    item.primary
                      ? "text-accent-foreground/80"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.sub}
                </span>
              </span>
              <span aria-hidden="true" className="shrink-0 text-lg opacity-60">
                →
              </span>
            </>
          );

          return item.external ? (
            <a key={item.href} href={item.href} className={className} {...external}>
              {inner}
            </a>
          ) : (
            <Link key={item.href} href={item.href} className={className}>
              {inner}
            </Link>
          );
        })}
      </div>

      <Link
        href="/"
        className="mt-8 text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
      >
        beremarkablebook.com
      </Link>
    </div>
  );
}
