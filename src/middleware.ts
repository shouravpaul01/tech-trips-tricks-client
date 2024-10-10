import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getCurrentuser } from "./app/services/AuthService";
type TRole = keyof typeof roleBasedRoutesAccess;
const authRoutes = ["/login", "/register"];
const roleBasedRoutesAccess = {
  User: [/^\/about/,/^/],
  Admin: [],
};
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
console.log(pathname)
  const user = await getCurrentuser();
console.log(user,"user")
  if (Object.keys(user).length == 0) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(`/login?redirect=${pathname}`, request.url)
      );
    }
  }
  if (user?.role && roleBasedRoutesAccess[user?.role as TRole]) {
    if (
      roleBasedRoutesAccess[user?.role as TRole].some((route) =>
        pathname.match(route)
      )
    ) {
      return NextResponse.next();
    }
  }
   return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/","/about", "/login", "/register","/user_name"],
};
