"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const STORAGE_KEY = "br-cookie-notice-dismissed";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) !== "1") {
        setVisible(true);
      }
    } catch {
      // localStorage unavailable; leave the notice hidden
    }
  }, []);

  function dismiss() {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore write failures
    }
    setVisible(false);
  }

  if (!visible) {
    return null;
  }

  return (
    <div
      role="region"
      aria-label="Cookie notice"
      className="fixed inset-x-3 bottom-3 z-[90] mx-auto max-w-2xl rounded-lg border border-border/80 bg-card p-4 shadow-lg md:inset-x-auto md:right-4 md:left-auto md:p-5"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-muted-foreground">
          We use privacy-friendly analytics to understand what is useful. See our{" "}
          <Link
            href="/privacy"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            Privacy Policy
          </Link>
          .
        </p>
        <Button
          type="button"
          size="sm"
          onClick={dismiss}
          className="shrink-0 rounded-md"
        >
          Got it
        </Button>
      </div>
    </div>
  );
}
