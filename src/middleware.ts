import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });
  console.log("from middleware", token);

  const role = token?.role;
  console.log("role is", role);
  const path = req.nextUrl.pathname;

  const isPublicPath = path === "/sign-in" || path === "/sign-up";
  if (!token && !isPublicPath) {
    
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }
  if (!token && isPublicPath) {
    return NextResponse.next();
  }
  if (
    (role === "Admin" && path.startsWith("/admin-dashboard")) ||
    (role === "Trainer" && path.startsWith("/trainer-dashboard")) ||
    (role === "Member" && path.startsWith("/member-dashboard"))
  ) {
    return NextResponse.next();
  }
  if (
    (role === "Admin" || role === "Trainer" || role === "Member") &&
    isPublicPath
  ) {
    return NextResponse.redirect(
      new URL(`/${role.toLowerCase()}-dashboard/profile`, req.url)
    );
  }
  return new NextResponse("Forbidden", { status: 403 });
}

export const config = {
  matcher: [
    "/admin-dashboard/:path*",
    "/trainer-dashboard/:path*",
    "/member-dashboard/:path*",
    "/sign-in",
    "/sign-up",
  ],
};
