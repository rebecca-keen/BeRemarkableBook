import { NextResponse } from "next/server";

import { siteConfig } from "@/lib/site-config";
import { getStripe, isStripeConfigured } from "@/lib/stripe";
import { getWorkbookPriceId } from "@/lib/workbook-prices";
import { getWorkbookBySlug } from "@/lib/workbooks";

export async function POST(request: Request) {
  let body: { slug?: string };

  try {
    body = (await request.json()) as { slug?: string };
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const slug = body.slug;

  if (!slug) {
    return NextResponse.json({ error: "Workbook slug is required." }, { status: 400 });
  }

  const workbook = getWorkbookBySlug(slug);

  if (!workbook) {
    return NextResponse.json({ error: "Workbook not found." }, { status: 404 });
  }

  if (!isStripeConfigured()) {
    return NextResponse.json(
      {
        error:
          "Stripe is not configured. Add STRIPE_SECRET_KEY and workbook price IDs to enable checkout.",
      },
      { status: 503 },
    );
  }

  const priceId = getWorkbookPriceId(slug);

  if (!priceId) {
    return NextResponse.json(
      {
        error: `No Stripe price ID configured for ${workbook.title}.`,
      },
      { status: 503 },
    );
  }

  const stripe = getStripe();

  if (!stripe) {
    return NextResponse.json(
      { error: "Stripe client could not be initialized." },
      { status: 503 },
    );
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${siteConfig.url}/workbooks/${slug}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteConfig.url}/workbooks/${slug}`,
      metadata: { slug },
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Stripe did not return a checkout URL." },
        { status: 500 },
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout session error:", error);

    return NextResponse.json(
      { error: "Could not create checkout session." },
      { status: 500 },
    );
  }
}
