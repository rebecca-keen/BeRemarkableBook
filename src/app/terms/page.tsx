import type { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of Be Remarkable.",
  alternates: { canonical: `${siteConfig.url}/terms` },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:px-8 md:py-24">
      <p className="section-label">Legal</p>
      <h1 className="section-title mt-4">Terms of Service</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Last updated: August 2026
      </p>

      <div className="mt-10 space-y-8 text-base leading-relaxed text-muted-foreground">
        <section className="space-y-3">
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of{" "}
            {siteConfig.url} and the resources offered by Be Remarkable. By using
            the site or purchasing a product, you agree to these Terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl text-foreground md:text-2xl">
            What we offer
          </h2>
          <p>
            Be Remarkable provides a book, guides, printable workbooks, a
            newsletter, and coaching and workshop services focused on
            professional skill development. Some resources are free and some are
            paid.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl text-foreground md:text-2xl">
            Purchases and access
          </h2>
          <p>
            Paid workbooks are digital products sold as one-time purchases in US
            dollars, processed securely by Stripe. After a successful purchase,
            you receive access to the full workbook. Access is granted on the
            device and browser you use to complete checkout and is intended for
            your personal, individual use.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl text-foreground md:text-2xl">
            Acceptable use
          </h2>
          <p>
            Free and paid resources are licensed for your personal, individual
            use. You may not copy, resell, redistribute, or share access to
            purchased content without our written permission. Reselling or
            systematically reproducing our content is not permitted.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl text-foreground md:text-2xl">
            Coaching and workshops
          </h2>
          <p>
            Coaching and organizational engagements are arranged separately and
            may be governed by their own written agreements. Nothing on this
            site is an offer of guaranteed results.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl text-foreground md:text-2xl">
            Refunds
          </h2>
          <p>
            Our refund terms for digital products are described in our{" "}
            <Link
              href="/refund"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              Refund Policy
            </Link>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl text-foreground md:text-2xl">
            Intellectual property
          </h2>
          <p>
            All content on this site, including the book, guides, workbooks, and
            branding, is the property of Be Remarkable and is protected by
            copyright. You keep ownership of anything you write into a workbook;
            we keep ownership of the workbook itself.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl text-foreground md:text-2xl">
            Disclaimers and limitation of liability
          </h2>
          <p>
            Our resources are provided for educational purposes and offered
            &ldquo;as is,&rdquo; without warranties of any kind. Professional
            growth depends on many factors, and we do not guarantee specific
            outcomes. To the fullest extent permitted by law, Be Remarkable is
            not liable for any indirect or consequential damages arising from
            your use of the site or its resources.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl text-foreground md:text-2xl">
            Changes and governing law
          </h2>
          <p>
            We may update these Terms from time to time; the date above reflects
            the latest version. These Terms are governed by the laws of
            [your state / country]. Continued use of the site means you accept
            the current Terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl text-foreground md:text-2xl">
            Contact
          </h2>
          <p>
            Questions about these Terms? Email{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              {siteConfig.email}
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
