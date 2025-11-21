import { NextResponse } from "next/server";
import { auth } from "./src/lib/firebase";

export function middleware(req: any) {
  const token = req.cookies.get("firebaseAuthToken");

  if (!token && req.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}
