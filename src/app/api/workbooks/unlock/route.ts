import { NextResponse } from "next/server";

import {
  applyOwnerAccessCookie,
  createOwnerAccessToken,
  getWorkbookAccessPassword,
} from "@/lib/workbook-access";

export async function POST(request: Request) {
  const unlockUrl = new URL("/workbooks/unlock", request.url);
  const formData = await request.formData();
  const password = formData.get("password");

  if (typeof password !== "string" || !password.trim()) {
    unlockUrl.searchParams.set("error", "incorrect");
    return NextResponse.redirect(unlockUrl, { status: 303 });
  }

  const expectedPassword = getWorkbookAccessPassword();

  if (!expectedPassword || password !== expectedPassword) {
    unlockUrl.searchParams.set("error", "incorrect");
    return NextResponse.redirect(unlockUrl, { status: 303 });
  }

  const token = await createOwnerAccessToken();

  if (!token) {
    unlockUrl.searchParams.set("error", "unavailable");
    return NextResponse.redirect(unlockUrl, { status: 303 });
  }

  const successUrl = new URL("/workbooks", request.url);
  successUrl.searchParams.set("owner", "unlocked");

  const response = NextResponse.redirect(successUrl, { status: 303 });
  applyOwnerAccessCookie(response, token);

  return response;
}
