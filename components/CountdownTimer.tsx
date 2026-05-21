"use client"

import { useEffect, useState } from "react"

function getTimeLeft() {
  const now = new Date()
  const istNow = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }))
  const midnight = new Date(istNow)
  midnight.setHours(24, 0, 0, 0)
  const diff = Math.max(0, midnight.getTime() - istNow.getTime())
  const hours = Math.floor(diff / 3600000)
  const minutes = Math.floor((diff % 3600000) / 60000)
  const seconds = Math.floor((diff % 60000) / 1000)
  return [hours, minutes, seconds].map((value) => String(value).padStart(2, "0")).join(":")
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState("00:00:00")

  useEffect(() => {
    setTimeLeft(getTimeLeft())
    const id = window.setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <div className="rounded-2xl border border-[#f97316]/40 bg-[#f97316] px-5 py-4 text-center text-lg font-black text-white shadow-[0_0_20px_rgba(249,115,22,0.3)]">
      Deal ends in: {timeLeft}
    </div>
  )
}
