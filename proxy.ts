import { NextResponse } from "next/server";

export function proxy(req: any) {
  const token = req.cookies.get("firebaseAuthToken");

  if (!token && req.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}
