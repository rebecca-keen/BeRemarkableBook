"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/#why-different", label: "Why us" },
  { href: "/#mission", label: "Mission" },
  { href: "/#skills", label: "Skills" },
  { href: "/guides", label: "Guides" },
  { href: "/#about", label: "About" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#waitlist", label: "Waitlist" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/90 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-8">
        <a
          href="/"
          className="group flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="flex size-9 items-center justify-center rounded-md bg-primary font-heading text-base text-primary-foreground">
            B
          </span>
          <div className="leading-tight">
            <p className="font-heading text-base text-foreground">Be Remarkable</p>
            <p className="hidden text-[10px] tracking-[0.22em] text-muted-foreground uppercase sm:block">
              beremarkablebook.com
            </p>
          </div>
        </a>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden rounded-md sm:inline-flex">
            <a href="/#waitlist">Join waitlist</a>
          </Button>
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-md border border-border/70 text-foreground md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "border-t border-border/50 bg-background md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav
          aria-label="Mobile navigation"
          className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="mt-2 w-full rounded-md">
            <a href="#waitlist" onClick={() => setOpen(false)}>
              Join waitlist
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
