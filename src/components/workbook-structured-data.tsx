import { getWorkbookProductSchema } from "@/lib/structured-data";
import type { Workbook } from "@/lib/workbooks";

type WorkbookStructuredDataProps = {
  workbook: Workbook;
  checkoutAvailable: boolean;
};

export function WorkbookStructuredData({
  workbook,
  checkoutAvailable,
}: WorkbookStructuredDataProps) {
  const data = getWorkbookProductSchema(workbook, checkoutAvailable);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
