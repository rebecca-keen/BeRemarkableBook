"use client";

import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="rounded-2xl border border-primary/15 bg-card px-6 py-8 text-center shadow-sm"
        role="status"
      >
        <p className="font-heading text-2xl text-foreground">You&apos;re on the list.</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          We&apos;ll reach out at{" "}
          <span className="font-medium text-foreground">{email}</span> when the
          book and early resources are ready.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-3 sm:flex-row sm:items-center"
    >
      <Input
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="you@school.edu"
        aria-label="Email address"
        className="h-12 rounded-xl border-border/80 bg-background px-4 text-base shadow-sm"
      />
      <Button
        type="submit"
        size="lg"
        className="h-12 rounded-xl bg-accent px-6 text-base font-semibold text-accent-foreground hover:bg-accent/90"
      >
        Join the waitlist
      </Button>
    </form>
  );
}
