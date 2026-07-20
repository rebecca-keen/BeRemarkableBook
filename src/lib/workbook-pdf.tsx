import { pdf } from "@react-pdf/renderer";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

import { WorkbookPdfDocument } from "@/lib/workbook-pdf-document";
import type { Workbook } from "@/lib/workbooks";

const GENERATED_DIR = path.join(process.cwd(), "generated", "workbooks");

export function getWorkbookPdfPath(slug: string): string {
  return path.join(GENERATED_DIR, `${slug}.pdf`);
}

export async function renderWorkbookPdf(workbook: Workbook): Promise<Buffer> {
  const instance = pdf(<WorkbookPdfDocument workbook={workbook} />);
  const blob = await instance.toBlob();
  const arrayBuffer = await blob.arrayBuffer();

  return Buffer.from(arrayBuffer);
}

export async function generateAndSaveWorkbookPdf(workbook: Workbook): Promise<string> {
  mkdirSync(GENERATED_DIR, { recursive: true });

  const outputPath = getWorkbookPdfPath(workbook.slug);
  const buffer = await renderWorkbookPdf(workbook);

  writeFileSync(outputPath, buffer);

  return outputPath;
}

export async function getWorkbookPdfBuffer(workbook: Workbook): Promise<Buffer> {
  const cachedPath = getWorkbookPdfPath(workbook.slug);

  if (existsSync(cachedPath)) {
    return readFileSync(cachedPath);
  }

  return renderWorkbookPdf(workbook);
}
