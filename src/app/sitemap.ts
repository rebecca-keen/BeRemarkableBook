import type { MetadataRoute } from "next";

import { guides } from "@/lib/guides";
import { siteConfig } from "@/lib/site-config";
import { workbooks } from "@/lib/workbooks";

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
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ]);

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/guides`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/workbooks`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...guideEntries,
    ...workbookEntries,
  ];
}
