import type { MetadataRoute } from "next";

import { guides } from "@/lib/guides";
import { siteConfig } from "@/lib/site-config";
import { workbooks } from "@/lib/workbooks";

// Date each page's content last changed. Update the matching entry when you
// edit a page so search engines see an accurate "last updated" date.
const lastUpdated = {
  home: "2026-09-12",
  guides: "2026-09-12",
  workbooks: "2026-08-22",
  professionalDevelopment: "2026-09-06",
  professionalDevelopmentForNewGrads: "2026-09-06",
  organizations: "2026-08-18",
  bookChapter1: "2026-08-18",
  privacy: "2026-08-22",
  terms: "2026-08-24",
  refund: "2026-08-22",
} as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const guideEntries: MetadataRoute.Sitemap = guides.map((guide) => ({
    url: `${siteConfig.url}/guides/${guide.slug}`,
    lastModified: new Date(guide.publishedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const workbookEntries: MetadataRoute.Sitemap = workbooks.flatMap((workbook) => [
    {
      url: `${siteConfig.url}/workbooks/${workbook.slug}`,
      lastModified: new Date(lastUpdated.workbooks),
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ]);

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(lastUpdated.home),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/guides`,
      lastModified: new Date(lastUpdated.guides),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/workbooks`,
      lastModified: new Date(lastUpdated.workbooks),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/professional-development`,
      lastModified: new Date(lastUpdated.professionalDevelopment),
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${siteConfig.url}/professional-development-for-new-grads`,
      lastModified: new Date(lastUpdated.professionalDevelopmentForNewGrads),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/organizations`,
      lastModified: new Date(lastUpdated.organizations),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/book/chapter-1`,
      lastModified: new Date(lastUpdated.bookChapter1),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...(["privacy", "terms", "refund"] as const).map((path) => ({
      url: `${siteConfig.url}/${path}`,
      lastModified: new Date(lastUpdated[path]),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
    ...guideEntries,
    ...workbookEntries,
  ];
}
