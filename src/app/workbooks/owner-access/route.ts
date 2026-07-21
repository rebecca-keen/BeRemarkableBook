import { NextResponse } from "next/server";

import {
  applyOwnerAccessCookie,
  createOwnerAccessToken,
  getOwnerSecret,
} from "@/lib/workbook-access";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const key = url.searchParams.get("key");
  const ownerSecret = getOwnerSecret();
  const workbooksUrl = new URL("/workbooks", request.url);

  if (!ownerSecret || !key || key !== ownerSecret) {
    return NextResponse.redirect(workbooksUrl, { status: 303 });
  }

  const token = await createOwnerAccessToken();

  if (!token) {
    return NextResponse.redirect(workbooksUrl, { status: 303 });
  }

  const successUrl = new URL("/workbooks", request.url);
  successUrl.searchParams.set("owner", "unlocked");

  const response = NextResponse.redirect(successUrl, { status: 303 });
  applyOwnerAccessCookie(response, token);

  return response;
}
