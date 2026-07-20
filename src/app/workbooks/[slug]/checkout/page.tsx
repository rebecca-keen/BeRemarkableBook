import { redirect } from "next/navigation";

import { getAllWorkbookSlugs, getWorkbookBySlug } from "@/lib/workbooks";

type CheckoutPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllWorkbookSlugs().map((slug) => ({ slug }));
}

export default async function WorkbookCheckoutPage({ params }: CheckoutPageProps) {
  const { slug } = await params;
  const workbook = getWorkbookBySlug(slug);

  if (!workbook) {
    redirect("/workbooks");
  }

  redirect(`/workbooks/${slug}#buy`);
}
