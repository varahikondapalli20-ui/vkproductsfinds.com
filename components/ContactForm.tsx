"use client"

import { FormEvent, useState } from "react"
import { Send } from "lucide-react"

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [loading, setLoading] = useState(false)

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setStatus("idle")
    const form = new FormData(event.currentTarget)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(form)),
      })
      if (!response.ok) throw new Error("Failed")
      event.currentTarget.reset()
      setStatus("success")
    } catch {
      setStatus("error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={submit} className="grid gap-5 rounded-2xl border border-[#2a2a2a] bg-[#1a1a1a] p-6">
      <Field name="name" label="Name" required />
      <Field name="email" label="Email" type="email" required />
      <Field name="subject" label="Subject" />
      <label className="grid gap-2 text-sm font-semibold text-[#9ca3af]">
        Message
        <textarea
          name="message"
          required
          rows={6}
          className="rounded-2xl border border-[#2a2a2a] bg-[#0a0a0a] px-4 py-3 text-white outline-none focus:border-[#f97316]"
        />
      </label>
      <button type="submit" disabled={loading} className="button-gold min-h-14 px-7 disabled:cursor-not-allowed disabled:opacity-70">
        {loading ? "Sending..." : "Send Message"} <Send size={18} aria-hidden="true" />
      </button>
      {status === "success" ? <p className="font-semibold text-green-400">Message sent! We&apos;ll reply within 24 hours.</p> : null}
      {status === "error" ? <p className="font-semibold text-red-400">Something went wrong. Please try again.</p> : null}
    </form>
  )
}

function Field({ name, label, type = "text", required = false }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-[#9ca3af]">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className="min-h-12 rounded-full border border-[#2a2a2a] bg-[#0a0a0a] px-4 text-white outline-none focus:border-[#f97316]"
      />
    </label>
  )
}
