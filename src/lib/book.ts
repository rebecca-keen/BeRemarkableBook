import { chapter1 } from "@/content/book/chapter-1";

export type BookSection =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "blockquote"; text: string; attribution: string };

export type BookChapter = {
  number: number;
  slug: string;
  title: string;
  subtitle: string;
  bookTitle: string;
  author: string;
  sections: BookSection[];
};

export const bookChapters: BookChapter[] = [chapter1];

export function getBookChapterBySlug(slug: string): BookChapter | undefined {
  return bookChapters.find((chapter) => chapter.slug === slug);
}

export function countChapterWords(chapter: BookChapter): number {
  return chapter.sections.reduce((total, section) => {
    if (section.type === "paragraph" || section.type === "blockquote") {
      return total + section.text.split(/\s+/).filter(Boolean).length;
    }

    if (section.type === "heading") {
      return total + section.text.split(/\s+/).filter(Boolean).length;
    }

    return total;
  }, 0);
}
