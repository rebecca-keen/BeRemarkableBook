import { siteConfig } from "@/lib/site-config";

export type FaqItem = {
  question: string;
  answer: string;
};

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    description: siteConfig.description,
    sameAs: [siteConfig.url],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author.name,
    url: siteConfig.url,
    jobTitle: siteConfig.author.title,
    description: siteConfig.author.bio,
    knowsAbout: siteConfig.author.expertise,
    email: siteConfig.email,
  };
}

export function getBookSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Book",
    name: siteConfig.book.name,
    description: siteConfig.book.description,
    url: siteConfig.url,
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    genre: [
      "Professional Development",
      "Communication Skills",
      "Leadership",
    ],
    inLanguage: "en-US",
    bookFormat: "https://schema.org/EBook",
  };
}

export function getFaqSchema(faqItems: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getStructuredDataGraph(faqItems: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationSchema(),
      getWebSiteSchema(),
      getPersonSchema(),
      getBookSchema(),
      getFaqSchema(faqItems),
    ],
  };
}
