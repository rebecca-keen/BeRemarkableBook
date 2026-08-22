import type { Metadata } from "next";

import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Be Remarkable collects, uses, and protects your information.",
  alternates: { canonical: `${siteConfig.url}/privacy` },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:px-8 md:py-24">
      <p className="section-label">Legal</p>
      <h1 className="section-title mt-4">Privacy Policy</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Last updated: August 2026
      </p>

      <div className="mt-10 space-y-8 text-base leading-relaxed text-muted-foreground">
        <section className="space-y-3">
          <p>
            This Privacy Policy explains how Be Remarkable (&ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and protects
            your information when you visit {siteConfig.url} or use our
            resources. By using the site, you agree to the practices described
            here.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl text-foreground md:text-2xl">
            Information we collect
          </h2>
          <p>
            <strong className="text-foreground">Information you give us.</strong>{" "}
            When you subscribe to our newsletter, purchase a workbook, or email
            us, we receive information such as your name and email address and,
            for purchases, billing details.
          </p>
          <p>
            <strong className="text-foreground">
              Information collected automatically.
            </strong>{" "}
            Like most websites, we collect basic usage data such as pages
            viewed, referring site, approximate location, device, and browser
            type. We use this to understand what is useful and improve the site.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl text-foreground md:text-2xl">
            How we use your information
          </h2>
          <p>We use the information we collect to:</p>
          <ul className="ml-5 list-disc space-y-2">
            <li>Deliver the resources, workbooks, and updates you request</li>
            <li>Process purchases and provide access to what you bought</li>
            <li>Respond to your questions and inquiries</li>
            <li>Understand and improve how the site performs</li>
          </ul>
          <p>We do not sell your personal information.</p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl text-foreground md:text-2xl">
            Third-party services we use
          </h2>
          <p>
            We rely on trusted providers to run the site. Each handles data
            under its own privacy policy:
          </p>
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong className="text-foreground">Substack</strong> for our
              newsletter and email list
            </li>
            <li>
              <strong className="text-foreground">Stripe</strong> for payment
              processing (we never see or store your full card details)
            </li>
            <li>
              <strong className="text-foreground">Vercel</strong> for site
              hosting and privacy-friendly analytics
            </li>
            <li>
              <strong className="text-foreground">Mailgun</strong> for handling
              email sent to our address
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl text-foreground md:text-2xl">
            Cookies and analytics
          </h2>
          <p>
            We use privacy-friendly analytics to measure site usage in
            aggregate. We do not use advertising or cross-site tracking
            cookies. Some providers above may set cookies necessary for their
            service to function. You can control cookies through your browser
            settings.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl text-foreground md:text-2xl">
            Your rights
          </h2>
          <p>
            Depending on where you live, you may have the right to access,
            correct, or delete your personal information, or to opt out of
            certain uses. You can unsubscribe from emails at any time using the
            link in any message. To make any other request, contact us at{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              {siteConfig.email}
            </a>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl text-foreground md:text-2xl">
            Data retention and security
          </h2>
          <p>
            We keep personal information only as long as needed for the purposes
            described here or as required by law, and we take reasonable steps
            to protect it. No method of transmission over the internet is
            completely secure, so we cannot guarantee absolute security.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl text-foreground md:text-2xl">
            Children&apos;s privacy
          </h2>
          <p>
            The site is intended for professionals and is not directed to
            children under 16. We do not knowingly collect information from
            children.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl text-foreground md:text-2xl">
            Changes to this policy
          </h2>
          <p>
            We may update this policy from time to time. When we do, we will
            revise the date at the top of this page.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl text-foreground md:text-2xl">
            Contact
          </h2>
          <p>
            Questions about this policy? Email{" "}
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
