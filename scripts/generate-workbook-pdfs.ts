import { workbooks } from "../src/lib/workbooks";
import { generateAndSaveWorkbookPdf } from "../src/lib/workbook-pdf";

async function main() {
  console.log(`Generating ${workbooks.length} workbook PDFs...`);

  for (const workbook of workbooks) {
    const outputPath = await generateAndSaveWorkbookPdf(workbook);
    console.log(`  ${workbook.slug} -> ${outputPath}`);
  }

  console.log("Done.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
