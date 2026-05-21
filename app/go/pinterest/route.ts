import { NextResponse } from "next/server"

export function GET() {
  return NextResponse.redirect(process.env.PINTEREST_URL || "https://pin.it/39BLZ8Ieq")
}
