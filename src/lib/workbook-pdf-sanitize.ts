/** Replace em dashes and en dashes with hyphens for PDF output. */
export function sanitizePdfText(text: string): string {
  return text.replace(/\u2014/g, "-").replace(/\u2013/g, "-");
}
