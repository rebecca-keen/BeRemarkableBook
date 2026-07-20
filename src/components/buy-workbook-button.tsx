"use client";

import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";

type BuyWorkbookButtonProps = {
  slug: string;
  priceUsd: number;
  checkoutConfigured: boolean;
  size?: "default" | "lg";
  className?: string;
};

export function BuyWorkbookButton({
  slug,
  priceUsd,
  checkoutConfigured,
  size = "lg",
  className,
}: BuyWorkbookButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleCheckout() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug }),
      });

      const data = (await response.json()) as { url?: string; error?: string };

      if (!response.ok || !data.url) {
        setError(data.error ?? "Checkout is unavailable right now.");
        return;
      }

      window.location.href = data.url;
    } catch {
      setError("Could not start checkout. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-3">
      <Button
        type="button"
        size={size}
        className={className ?? "rounded-md"}
        disabled={loading || !checkoutConfigured}
        onClick={handleCheckout}
      >
        {loading ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            Redirecting to checkout...
          </>
        ) : (
          <>
            Get this workbook · ${priceUsd}
            <ArrowRight className="size-4" aria-hidden="true" />
          </>
        )}
      </Button>
      {!checkoutConfigured ? (
        <p className="text-sm leading-relaxed text-muted-foreground">
          Checkout is not configured yet. Stripe keys and price IDs are required
          before purchases can open. Full workbook content stays locked until
          then.
        </p>
      ) : null}
      {error ? (
        <p className="text-sm text-destructive" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
