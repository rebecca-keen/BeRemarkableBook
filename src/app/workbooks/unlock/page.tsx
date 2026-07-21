import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { WorkbookUnlockForm } from "@/components/workbook-unlock-form";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Unlock Workbooks",
  description:
    "Enter your access password to unlock full printable workbook content on this device.",
  alternates: {
    canonical: `${siteConfig.url}/workbooks/unlock`,
  },
  robots: {
    index: false,
    follow: false,
  },
};

const errorMessages: Record<string, string> = {
  incorrect: "Incorrect password",
  unavailable: "Access is unavailable right now. Please try again later.",
};

type WorkbookUnlockPageProps = {
  searchParams: Promise<{ error?: string }>;
};

export default async function WorkbookUnlockPage({
  searchParams,
}: WorkbookUnlockPageProps) {
  const { error: errorCode } = await searchParams;
  const error = errorCode ? errorMessages[errorCode] ?? errorMessages.incorrect : undefined;

  return (
    <div className="overflow-hidden">
      <section className="border-b border-border/70 bg-secondary/35">
        <div className="mx-auto max-w-xl px-6 py-16 md:px-8 md:py-24">
          <Link
            href="/workbooks"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            All workbooks
          </Link>
          <p className="section-label mt-8">Workbook access</p>
          <h1 className="section-title mt-4">Unlock workbooks</h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Enter your access password to unlock full printable versions of all
            workbooks on this device.
          </p>
          <div className="mt-8 rounded-lg border border-border/80 bg-card p-7 shadow-sm">
            <WorkbookUnlockForm error={error} />
          </div>
        </div>
      </section>
    </div>
  );
}
