import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getCurrentuser } from "./services/AuthService";

type TRole = keyof typeof roleBasedRoutesAccess;
const authRoutes = ["/login", "/register","/find-account","/confirm-identity","/reset-password"];
const roleBasedRoutesAccess = {
  User: [/^(?!\/admin-dashboard).*/],
  Admin: [/^\/.*/],
};
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
 
  const user = await getCurrentuser();

  if (!user || Object.keys(user).length === 0) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(`/login?redirect=${pathname}`, request.url)
      );
    }
  }
  if (user?.role && roleBasedRoutesAccess[user?.role ]) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    const allowedRoutes = roleBasedRoutesAccess[user?.role];

    // Check if the route is allowed for the user role
    const hasAccess = allowedRoutes.some((route) => pathname.match(route));

    if (hasAccess) {
      return NextResponse.next();
    }
  }

  //Default fallback redirect in case no role matches
  return NextResponse.redirect(new URL("/", request.url));


}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/((?!api|public|_next/static|favicon.ico).*)"],
};
