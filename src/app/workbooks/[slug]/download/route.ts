import { NextResponse } from "next/server";

import { hasWorkbookAccess } from "@/lib/workbook-access";
import { getWorkbookPdfBuffer } from "@/lib/workbook-pdf";
import { getWorkbookBySlug } from "@/lib/workbooks";

type DownloadRouteProps = {
  params: Promise<{ slug: string }>;
};

export async function GET(request: Request, { params }: DownloadRouteProps) {
  const { slug } = await params;
  const workbook = getWorkbookBySlug(slug);

  if (!workbook) {
    return NextResponse.json({ error: "Workbook not found" }, { status: 404 });
  }

  const hasAccess = await hasWorkbookAccess(slug);

  if (!hasAccess) {
    const redirectUrl = new URL(`/workbooks/${slug}`, request.url);
    return NextResponse.redirect(redirectUrl);
  }

  const pdfBuffer = await getWorkbookPdfBuffer(workbook);
  const filename = `${slug}.pdf`;

  return new NextResponse(new Uint8Array(pdfBuffer), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "private, no-store",
    },
  });
}
