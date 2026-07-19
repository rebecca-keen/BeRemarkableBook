import { getStructuredDataGraph, type FaqItem } from "@/lib/structured-data";

type StructuredDataProps = {
  faqItems: FaqItem[];
};

export function StructuredData({ faqItems }: StructuredDataProps) {
  const data = getStructuredDataGraph(faqItems);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
