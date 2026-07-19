import { getArticleSchema } from "@/lib/structured-data";
import type { Guide } from "@/lib/guides";

type ArticleStructuredDataProps = {
  guide: Guide;
};

export function ArticleStructuredData({ guide }: ArticleStructuredDataProps) {
  const data = getArticleSchema(guide);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
