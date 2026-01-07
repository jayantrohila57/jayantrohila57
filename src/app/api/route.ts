import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site.config";

export async function GET() {
  return NextResponse.json({
    message: "API endpoint is working",
    site: {
      name: siteConfig.siteName,
      version: "1.0.0",
      status: "active",
    },
    endpoints: {
      health: "/api/health",
      projects: "/api/projects",
      blog: "/api/blog",
      contact: "/api/contact",
    },
    timestamp: new Date().toISOString(),
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    return NextResponse.json({
      message: "POST request received",
      data: body,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid JSON in request body" },
      { status: 400 },
    );
  }
}
