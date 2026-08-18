import { NextResponse } from "next/server";

import { getBookChapterBySlug } from "@/lib/book";
import { getBookChapterPdfBuffer } from "@/lib/book-pdf";

export async function GET() {
  const chapter = getBookChapterBySlug("chapter-1");

  if (!chapter) {
    return NextResponse.json({ error: "Chapter not found" }, { status: 404 });
  }

  const pdfBuffer = await getBookChapterPdfBuffer(chapter);
  const filename = "be-remarkable-chapter-1.pdf";

  return new NextResponse(new Uint8Array(pdfBuffer), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "private, no-store",
    },
  });
}
