import { NextResponse } from "next/server";

import {
  createOwnerAccessToken,
  getOwnerSecret,
  setOwnerAccessCookie,
} from "@/lib/workbook-access";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const key = url.searchParams.get("key");
  const ownerSecret = getOwnerSecret();
  const workbooksUrl = new URL("/workbooks", request.url);

  if (!ownerSecret || !key || key !== ownerSecret) {
    return NextResponse.redirect(workbooksUrl);
  }

  const token = await createOwnerAccessToken();

  if (!token) {
    return NextResponse.redirect(workbooksUrl);
  }

  await setOwnerAccessCookie(token);

  const successUrl = new URL("/workbooks", request.url);
  successUrl.searchParams.set("owner", "unlocked");

  return NextResponse.redirect(successUrl);
}
