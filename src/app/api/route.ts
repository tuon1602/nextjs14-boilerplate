import { NextResponse } from "next/server";

export const runtime = "edge";

// route handlers
export async function GET() {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  if (!res) {
    return NextResponse.json({ status: 404, message: "data not found" });
  }
  const data = await res.json();
  return NextResponse.json({ status: 200, data: data });
}
