import { getAllWorkbookSlugs } from "@/lib/workbooks";

const slugToEnvKey: Record<string, string> = {
  "storytelling-workbook": "STRIPE_PRICE_STORYTELLING",
  "leadership-workbook": "STRIPE_PRICE_LEADERSHIP",
  "executive-presence-workbook": "STRIPE_PRICE_EXECUTIVE_PRESENCE",
  "leadership-through-ai-workbook": "STRIPE_PRICE_LEADERSHIP_AI",
  "critical-thinking-workbook": "STRIPE_PRICE_CRITICAL_THINKING",
  "emerging-leaders-workbook": "STRIPE_PRICE_EMERGING_LEADERS",
};

export function getWorkbookPriceId(slug: string): string | null {
  const envKey = slugToEnvKey[slug];

  if (!envKey) {
    return null;
  }

  return process.env[envKey] ?? null;
}

export function isWorkbookCheckoutConfigured(slug: string): boolean {
  return Boolean(getWorkbookPriceId(slug));
}

export function getWorkbookPriceEnvKeys(): Record<string, string> {
  return slugToEnvKey;
}

export function getConfiguredWorkbookSlugs(): string[] {
  return getAllWorkbookSlugs().filter((slug) => isWorkbookCheckoutConfigured(slug));
}
