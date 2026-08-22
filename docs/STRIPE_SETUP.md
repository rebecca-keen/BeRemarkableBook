# Stripe setup — enabling workbook checkout

The payment code is already built. To start taking payments you only need to
configure Stripe and add environment variables in Vercel. Until you do, the
"Get this workbook" buttons stay safely disabled — nothing is broken.

Do the whole thing in **Stripe test mode** first, confirm a test purchase
works, then repeat the key/price steps in **live mode**.

## 1. Create your Stripe account

1. Sign up at https://stripe.com and complete business verification
   (identity, bank account for payouts, tax details). Only you can do this.

## 2. Create the six products

In the Stripe Dashboard → **Products → Add product**, create one product per
workbook (each a **one-time** price of **$39**), plus one **bundle** product at
**$99**. After saving, open each price and copy its **Price ID** (looks like
`price_...`).

| Product | Price | Env variable |
| --- | --- | --- |
| Storytelling Workbook | $39 | `STRIPE_PRICE_STORYTELLING` |
| Leadership Workbook | $39 | `STRIPE_PRICE_LEADERSHIP` |
| Executive Presence Workbook | $39 | `STRIPE_PRICE_EXECUTIVE_PRESENCE` |
| Leadership through AI Workbook | $39 | `STRIPE_PRICE_LEADERSHIP_AI` |
| Critical Thinking Workbook | $39 | `STRIPE_PRICE_CRITICAL_THINKING` |
| Emerging Leaders Workbook | $39 | `STRIPE_PRICE_EMERGING_LEADERS` |
| The Complete Workbook Bundle (all 6) | $99 | `STRIPE_PRICE_BUNDLE` |

## 3. Get your API keys

Stripe Dashboard → **Developers → API keys**:

- Secret key → `STRIPE_SECRET_KEY`
- Publishable key → `STRIPE_PUBLISHABLE_KEY` and `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`

## 4. Add the webhook

Stripe Dashboard → **Developers → Webhooks → Add endpoint**:

- Endpoint URL: `https://beremarkablebook.com/api/webhooks/stripe`
- Event to send: `checkout.session.completed`
- After creating it, copy the **Signing secret** (`whsec_...`) →
  `STRIPE_WEBHOOK_SECRET`

## 5. Set environment variables in Vercel

Vercel → your project → **Settings → Environment Variables**. Add all of the
above, plus these access secrets:

- `WORKBOOK_ACCESS_SECRET` — any long random string (signs access cookies)
- `WORKBOOK_ACCESS_PASSWORD` — the password for the `/workbooks/unlock` page
- `WORKBOOK_OWNER_SECRET` — a random string for owner unlock links
- `GOOGLE_SITE_VERIFICATION` — the value from Google Search Console (optional)

Set them for **Production** (and Preview if you want). Redeploy after saving so
they take effect.

## 6. Test end to end

1. In test mode, open a workbook page and click "Get this workbook."
2. Complete checkout with Stripe's test card `4242 4242 4242 4242`, any future
   expiry, any CVC.
3. Confirm you land on the success page and can access the full workbook.
4. Check the webhook shows a delivered `checkout.session.completed` event in
   the Stripe Dashboard.

Then swap the test keys/price IDs for the **live** ones and repeat one real
purchase before you announce it.

## Good to know

- Purchased access is stored in a cookie on the buyer's device for 30 days. It
  is not a login account, so a buyer switching devices would need to purchase
  again or use an access code. This is a known limitation, fine for launch.
- Stripe fees are roughly 2.9% + $0.30 per transaction.
