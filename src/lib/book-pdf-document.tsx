import {
  Document,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import type { BookChapter, BookSection } from "@/lib/book";
import { sanitizePdfText } from "@/lib/workbook-pdf-sanitize";

const styles = StyleSheet.create({
  page: {
    paddingTop: 56,
    paddingBottom: 56,
    paddingHorizontal: 56,
    fontSize: 11,
    fontFamily: "Helvetica",
    lineHeight: 1.55,
    color: "#1a1a1a",
  },
  bookLabel: {
    fontSize: 8,
    letterSpacing: 1.4,
    textTransform: "uppercase",
    color: "#666",
    marginBottom: 8,
  },
  chapterNumber: {
    fontSize: 10,
    color: "#666",
    marginBottom: 4,
  },
  title: {
    fontSize: 24,
    fontFamily: "Helvetica-Bold",
    marginBottom: 8,
    lineHeight: 1.2,
  },
  subtitle: {
    fontSize: 12,
    color: "#444",
    marginBottom: 24,
    lineHeight: 1.4,
  },
  h2: {
    fontSize: 16,
    fontFamily: "Helvetica-Bold",
    marginTop: 18,
    marginBottom: 10,
    lineHeight: 1.3,
  },
  h3: {
    fontSize: 13,
    fontFamily: "Helvetica-Bold",
    marginTop: 14,
    marginBottom: 8,
    lineHeight: 1.3,
  },
  paragraph: {
    marginBottom: 10,
    lineHeight: 1.55,
  },
  blockquote: {
    borderLeftWidth: 3,
    borderLeftColor: "#999",
    paddingLeft: 14,
    marginVertical: 14,
    paddingVertical: 4,
  },
  blockquoteText: {
    fontSize: 11,
    fontStyle: "italic",
    color: "#333",
    lineHeight: 1.5,
    marginBottom: 6,
  },
  blockquoteAttribution: {
    fontSize: 9,
    color: "#666",
  },
});

function SectionBlock({ section }: { section: BookSection }) {
  if (section.type === "heading") {
    if (section.level === 2) {
      return <Text style={styles.h2}>{sanitizePdfText(section.text)}</Text>;
    }

    return <Text style={styles.h3}>{sanitizePdfText(section.text)}</Text>;
  }

  if (section.type === "blockquote") {
    return (
      <View style={styles.blockquote}>
        <Text style={styles.blockquoteText}>
          {sanitizePdfText(section.text)}
        </Text>
        <Text style={styles.blockquoteAttribution}>
          {sanitizePdfText(section.attribution)}
        </Text>
      </View>
    );
  }

  return (
    <Text style={styles.paragraph}>{sanitizePdfText(section.text)}</Text>
  );
}

function splitSectionsIntoPages(sections: BookSection[]): BookSection[][] {
  const pages: BookSection[][] = [[]];
  let currentWeight = 0;
  const maxWeight = 42;

  for (const section of sections) {
    const weight =
      section.type === "paragraph"
        ? Math.max(1, Math.ceil(section.text.length / 320))
        : section.type === "blockquote"
          ? Math.max(2, Math.ceil(section.text.length / 240))
          : 2;

    if (currentWeight + weight > maxWeight && pages[pages.length - 1].length > 0) {
      pages.push([]);
      currentWeight = 0;
    }

    pages[pages.length - 1].push(section);
    currentWeight += weight;
  }

  return pages;
}

export function BookChapterPdfDocument({ chapter }: { chapter: BookChapter }) {
  const contentPages = splitSectionsIntoPages(chapter.sections);

  return (
    <Document
      title={`${chapter.bookTitle} - Chapter ${chapter.number}: ${chapter.title}`}
      author={chapter.author}
      subject={chapter.subtitle}
    >
      <Page size="LETTER" style={styles.page}>
        <Text style={styles.bookLabel}>{sanitizePdfText(chapter.bookTitle)}</Text>
        <Text style={styles.chapterNumber}>Chapter {chapter.number}</Text>
        <Text style={styles.title}>{sanitizePdfText(chapter.title)}</Text>
        <Text style={styles.subtitle}>{sanitizePdfText(chapter.subtitle)}</Text>
        {contentPages[0]?.map((section, index) => (
          <SectionBlock key={`p0-${section.type}-${index}`} section={section} />
        ))}
      </Page>

      {contentPages.slice(1).map((pageSections, pageIndex) => (
        <Page key={`page-${pageIndex + 1}`} size="LETTER" style={styles.page}>
          {pageSections.map((section, index) => (
            <SectionBlock
              key={`p${pageIndex + 1}-${section.type}-${index}`}
              section={section}
            />
          ))}
        </Page>
      ))}
    </Document>
  );
}
