import type { Metadata } from "next";

import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "The refund policy for Be Remarkable digital products.",
  alternates: { canonical: `${siteConfig.url}/refund` },
};

export default function RefundPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:px-8 md:py-24">
      <p className="section-label">Legal</p>
      <h1 className="section-title mt-4">Refund Policy</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Last updated: August 2026
      </p>

      <div className="mt-10 space-y-8 text-base leading-relaxed text-muted-foreground">
        <section className="space-y-3">
          <p>
            We want you to be genuinely happy with what you buy. Because our
            workbooks are digital products delivered instantly, the following
            terms apply.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl text-foreground md:text-2xl">
            Our promise
          </h2>
          <p>
            If a workbook does not meet your expectations, email us within{" "}
            <strong className="text-foreground">14 days</strong> of your purchase
            and we will make it right, including a full refund where
            appropriate. We would rather have a satisfied reader than a
            reluctant sale.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl text-foreground md:text-2xl">
            How to request a refund
          </h2>
          <p>
            Email{" "}
            <a
              href={`mailto:${siteConfig.email}?subject=Refund%20request`}
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              {siteConfig.email}
            </a>{" "}
            with the email address you used at checkout and, if you can, a quick
            note on what fell short. It helps us improve. Approved refunds are
            returned to your original payment method, typically within 5 to 10
            business days.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl text-foreground md:text-2xl">
            Exceptions
          </h2>
          <p>
            Because these are digital products, we may decline refund requests
            made after 14 days or where there is evidence of copying,
            redistribution, or other misuse of the content.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl text-foreground md:text-2xl">
            Questions
          </h2>
          <p>
            Not sure a workbook is right for you before buying? Email{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              {siteConfig.email}
            </a>{" "}
            and we will help you choose.
          </p>
        </section>
      </div>
    </div>
  );
}
