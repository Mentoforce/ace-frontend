import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "@/lib/i18n/config";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Ignore public files
  if (pathname.match(/\.(png|jpg|jpeg|gif|svg|webp|ico|webm|mov|mp4|pdf)$/)) {
    return NextResponse.next();
  }

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (!hasLocale) {
    req.nextUrl.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(req.nextUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};
