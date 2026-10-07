import { NextResponse } from "next/server";

/** Back-compat alias for older links expecting `/api/og`. */
export function GET(request: Request) {
  return NextResponse.redirect(new URL("/api/image?type=og", request.url), 308);
}

export const runtime = "edge";
