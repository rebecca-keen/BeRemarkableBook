import { BrandMark } from "@/components/brand-mark";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";
import { SubstackIcon } from "@/components/icons/substack-icon";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";

const footerLinks = {
  explore: [
    { href: "/#why-different", label: "Why us" },
    { href: "/#mission", label: "Mission" },
    { href: "/#skills", label: "Skills" },
    { href: "/guides", label: "Guides" },
    { href: "/workbooks", label: "Workbooks" },
    { href: "/#faq", label: "FAQ" },
    { href: "/#about", label: "About" },
  ],
  connect: [
    { href: "/#waitlist", label: "Join waitlist" },
    {
      href: "mailto:hello@beremarkablebook.com",
      label: "hello@beremarkablebook.com",
    },
    {
      href: siteConfig.author.linkedin,
      label: "LinkedIn",
      external: true,
      icon: "linkedin" as const,
    },
    {
      href: siteConfig.author.substack,
      label: "Substack",
      external: true,
      icon: "substack" as const,
    },
  ],
};

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-hero text-hero-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <BrandMark className="bg-hero-foreground/10 text-hero-foreground" />
              <p className="font-heading text-lg">Be Remarkable</p>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-hero-foreground/70">
              Career launch coaching through a field guide, workshops, and
              guides. Storytelling, leadership through AI, executive presence,
              and critical thinking for every career stage.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-hero-foreground/50 uppercase">
              Explore
            </p>
            <ul className="mt-4 space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-hero-foreground/75 transition-colors hover:text-hero-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-hero-foreground/50 uppercase">
              Connect
            </p>
            <ul className="mt-4 space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm text-hero-foreground/75 transition-colors hover:text-hero-foreground"
                    {...("external" in link && link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {"icon" in link && link.icon === "linkedin" ? (
                      <LinkedinIcon />
                    ) : null}
                    {"icon" in link && link.icon === "substack" ? (
                      <SubstackIcon />
                    ) : null}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-hero-foreground/10" />

        <div className="flex flex-col gap-3 text-sm text-hero-foreground/55 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Be Remarkable. All rights reserved.</p>
          <div className="flex flex-col gap-2 md:items-end">
            <Link
              href="/workbooks/unlock"
              className="text-xs text-hero-foreground/45 transition-colors hover:text-hero-foreground/70"
            >
              Workbook access
            </Link>
            <p className="text-xs tracking-[0.16em] uppercase">
              Stand out with substance when AI is everywhere.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
