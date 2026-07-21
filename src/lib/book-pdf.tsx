import { pdf } from "@react-pdf/renderer";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

import type { BookChapter } from "@/lib/book";
import { BookChapterPdfDocument } from "@/lib/book-pdf-document";

const GENERATED_DIR = path.join(process.cwd(), "generated", "book");

export function getBookChapterPdfPath(slug: string): string {
  return path.join(GENERATED_DIR, `be-remarkable-${slug}.pdf`);
}

export async function renderBookChapterPdf(chapter: BookChapter): Promise<Buffer> {
  const instance = pdf(<BookChapterPdfDocument chapter={chapter} />);
  const blob = await instance.toBlob();
  const arrayBuffer = await blob.arrayBuffer();

  return Buffer.from(arrayBuffer);
}

export async function generateAndSaveBookChapterPdf(
  chapter: BookChapter,
): Promise<string> {
  mkdirSync(GENERATED_DIR, { recursive: true });

  const outputPath = getBookChapterPdfPath(chapter.slug);
  const buffer = await renderBookChapterPdf(chapter);

  writeFileSync(outputPath, buffer);

  return outputPath;
}

export async function getBookChapterPdfBuffer(chapter: BookChapter): Promise<Buffer> {
  const cachedPath = getBookChapterPdfPath(chapter.slug);

  if (existsSync(cachedPath)) {
    return readFileSync(cachedPath);
  }

  return renderBookChapterPdf(chapter);
}
