import { NextResponse } from "next/server"

export function GET() {
  return NextResponse.redirect(
    process.env.INSTAGRAM_URL || "https://www.instagram.com/vk_affilitates?igsh=aG5qbnIyOHhseWdr",
  )
}
