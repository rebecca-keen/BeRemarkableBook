import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const COOKIE_PREFIX = "workbook-access-";
const ACCESS_DAYS = 30;

type WorkbookAccessPayload = {
  slug: string;
  sessionId: string;
};

function getSecretKey(): Uint8Array | null {
  const secret =
    process.env.WORKBOOK_ACCESS_SECRET ?? process.env.STRIPE_SECRET_KEY;

  if (!secret) {
    return null;
  }

  return new TextEncoder().encode(secret);
}

function cookieName(slug: string): string {
  return `${COOKIE_PREFIX}${slug}`;
}

export async function createAccessToken(
  slug: string,
  sessionId: string,
): Promise<string | null> {
  const secret = getSecretKey();

  if (!secret) {
    return null;
  }

  return new SignJWT({ slug, sessionId })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${ACCESS_DAYS}d`)
    .sign(secret);
}

export async function verifyAccessToken(
  slug: string,
  token: string,
): Promise<boolean> {
  const secret = getSecretKey();

  if (!secret) {
    return false;
  }

  try {
    const { payload } = await jwtVerify(token, secret);
    const data = payload as WorkbookAccessPayload;

    return data.slug === slug && Boolean(data.sessionId);
  } catch {
    return false;
  }
}

export async function setWorkbookAccessCookie(
  slug: string,
  token: string,
): Promise<void> {
  const cookieStore = await cookies();

  cookieStore.set(cookieName(slug), token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: ACCESS_DAYS * 24 * 60 * 60,
    path: `/workbooks/${slug}`,
  });
}

export async function hasWorkbookAccess(slug: string): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(cookieName(slug))?.value;

  if (!token) {
    return false;
  }

  return verifyAccessToken(slug, token);
}
