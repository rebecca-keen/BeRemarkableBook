import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  createAccessToken,
  setWorkbookAccessCookie,
} from "@/lib/workbook-access";
import { getStripe, isStripeConfigured } from "@/lib/stripe";
import { getAllWorkbookSlugs } from "@/lib/workbooks";

type BundleSuccessPageProps = {
  searchParams: Promise<{ session_id?: string }>;
};

export const metadata: Metadata = {
  title: "Purchase complete · Workbook bundle",
  robots: { index: false, follow: false },
};

export default async function WorkbookBundleSuccessPage({
  searchParams,
}: BundleSuccessPageProps) {
  const { session_id: sessionId } = await searchParams;

  let accessGranted = false;
  let verificationMessage: string | null = null;

  if (sessionId && isStripeConfigured()) {
    const stripe = getStripe();

    if (stripe) {
      try {
        const session = await stripe.checkout.sessions.retrieve(sessionId);

        if (
          session.payment_status === "paid" &&
          session.metadata?.bundle === "all"
        ) {
          for (const slug of getAllWorkbookSlugs()) {
            const token = await createAccessToken(slug, session.id);
            if (token) {
              await setWorkbookAccessCookie(slug, token);
            }
          }
          accessGranted = true;
        } else {
          verificationMessage =
            "We could not verify this purchase. Check your email for a receipt or try again.";
        }
      } catch {
        verificationMessage =
          "We could not verify this checkout session. Contact support if you were charged.";
      }
    }
  } else if (!sessionId) {
    verificationMessage =
      "Missing checkout session. Open the link from your Stripe receipt or contact support.";
  }

  return (
    <div className="overflow-hidden">
      <section className="border-b border-border/70 bg-secondary/35">
        <div className="mx-auto max-w-2xl px-6 py-16 text-center md:px-8 md:py-24">
          <Link
            href="/workbooks"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            All workbooks
          </Link>
          <div className="mt-10 flex justify-center">
            <CheckCircle2
              className={`size-12 ${accessGranted ? "text-accent" : "text-muted-foreground"}`}
              aria-hidden="true"
            />
          </div>
          <p className="section-label mt-8">
            {accessGranted ? "Purchase complete" : "Verifying purchase"}
          </p>
          <h1 className="section-title mt-4">The complete workbook bundle</h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            {accessGranted
              ? "All six workbooks are unlocked for 30 days on this device. Open any of them below, print them, or complete the exercises on screen."
              : "We are confirming your payment before unlocking your workbooks."}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-6 py-16 text-center md:px-8 md:py-20">
        {accessGranted ? (
          <>
            <Button asChild size="lg" className="rounded-md">
              <Link href="/workbooks">
                Open your workbooks
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Bookmark the workbooks page. Access lasts 30 days in this browser.
            </p>
          </>
        ) : (
          <>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {verificationMessage ??
                "If you just paid, refresh in a moment. Otherwise contact support with your receipt."}
            </p>
            <Button asChild variant="outline" size="lg" className="mt-8 rounded-md">
              <Link href="/workbooks">Return to workbooks</Link>
            </Button>
          </>
        )}
      </section>
    </div>
  );
}
