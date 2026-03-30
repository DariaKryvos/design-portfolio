import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const validRoutes = ["/", "/about", "/contact", "/cv", "/services", "/portfolio"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow Next.js internals, static files, and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Allow exact valid routes
  if (validRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // Allow dynamic portfolio routes like /portfolio/[id]
  if (pathname.startsWith("/portfolio/")) {
    return NextResponse.next();
  }

  // Redirect everything else to homepage
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};
