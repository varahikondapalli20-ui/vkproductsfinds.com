"use client"

import { FormEvent, useState } from "react"
import { Mail, Send } from "lucide-react"

export default function NewsletterBar() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("")
  const [loading, setLoading] = useState(false)

  async function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setStatus("")

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) throw new Error("Subscription failed")
      setEmail("")
      setStatus("Subscribed successfully!")
    } catch {
      setStatus("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto max-w-3xl text-center">
      <Mail className="mx-auto text-[#f97316]" size={44} aria-hidden="true" />
      <h2 className="mt-5 text-4xl font-black">Get Deal Alerts</h2>
      <p className="mt-4 text-[#9ca3af]">Subscribe for fresh VK Affiliate picks and Amazon finds.</p>
      <form onSubmit={subscribe} className="mt-8 flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          placeholder="Enter your email"
          className="min-h-14 flex-1 rounded-full border border-[#2a2a2a] bg-white/[0.06] px-6 text-white outline-none transition placeholder:text-[#6b7280] focus:border-[#f97316] focus:shadow-[0_0_20px_rgba(249,115,22,0.3)]"
        />
        <button type="submit" disabled={loading} className="button-gold min-h-14 px-7 disabled:cursor-not-allowed disabled:opacity-70">
          {loading ? "Subscribing..." : "Subscribe"} <Send size={18} aria-hidden="true" />
        </button>
      </form>
      {status ? <p className="mt-4 text-sm font-semibold text-[#f97316]" role="status">{status}</p> : null}
    </div>
  )
}
