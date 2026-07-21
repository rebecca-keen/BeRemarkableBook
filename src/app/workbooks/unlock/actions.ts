"use server";

import { redirect } from "next/navigation";

import {
  createOwnerAccessToken,
  getWorkbookAccessPassword,
  setOwnerAccessCookie,
} from "@/lib/workbook-access";

export type UnlockState = {
  error?: string;
};

export async function unlockWorkbooks(
  _prevState: UnlockState,
  formData: FormData,
): Promise<UnlockState> {
  const password = formData.get("password");

  if (typeof password !== "string" || !password.trim()) {
    return { error: "Incorrect password" };
  }

  const expectedPassword = getWorkbookAccessPassword();

  if (!expectedPassword || password !== expectedPassword) {
    return { error: "Incorrect password" };
  }

  const token = await createOwnerAccessToken();

  if (!token) {
    return { error: "Access is unavailable right now. Please try again later." };
  }

  await setOwnerAccessCookie(token);
  redirect("/workbooks?owner=unlocked");
}
