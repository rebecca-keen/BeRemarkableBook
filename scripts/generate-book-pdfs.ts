import { bookChapters } from "../src/lib/book";
import { generateAndSaveBookChapterPdf } from "../src/lib/book-pdf";

async function main() {
  console.log(`Generating ${bookChapters.length} book chapter PDFs...`);

  for (const chapter of bookChapters) {
    const outputPath = await generateAndSaveBookChapterPdf(chapter);
    console.log(`  ${chapter.slug} -> ${outputPath}`);
  }

  console.log("Done.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
