import { Separator } from "@/components/ui/separator";

const footerLinks = {
  explore: [
    { href: "#mission", label: "Mission" },
    { href: "#skills", label: "Skills" },
    { href: "#about", label: "About" },
  ],
  connect: [
    { href: "#waitlist", label: "Join waitlist" },
    {
      href: "mailto:hello@beremarkablebook.com",
      label: "hello@beremarkablebook.com",
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
              <span className="flex size-9 items-center justify-center rounded-md bg-hero-foreground/10 font-heading text-base">
                B
              </span>
              <p className="font-heading text-lg">Be Remarkable</p>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-hero-foreground/70">
              A field guide, workshops, and guides on storytelling, leadership,
              and calm confidence for anyone in any job or professional setting
              in the age of AI.
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
                    className="text-sm text-hero-foreground/75 transition-colors hover:text-hero-foreground"
                  >
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
          <p className="text-xs tracking-[0.16em] uppercase">
            Stand out with substance when AI is everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}
