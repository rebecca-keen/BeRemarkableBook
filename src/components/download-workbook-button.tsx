import { Download } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

type DownloadWorkbookButtonProps = {
  slug: string;
};

export function DownloadWorkbookButton({ slug }: DownloadWorkbookButtonProps) {
  return (
    <Button asChild variant="default" className="rounded-md print:hidden">
      <Link href={`/workbooks/${slug}/download`} download>
        <Download className="size-4" aria-hidden="true" />
        Download workbook (PDF)
      </Link>
    </Button>
  );
}
