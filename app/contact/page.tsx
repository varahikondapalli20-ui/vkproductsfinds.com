import type { Metadata } from "next"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact VK Affiliate for questions, collaborations, and product suggestions.",
}

export default function ContactPage() {
  return (
    <main className="section-shell min-h-screen pt-32 pb-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-5xl font-black">Contact Us</h1>
        <p className="mt-4 text-lg text-[#9ca3af]">Send us a message about product suggestions, collaborations, or affiliate questions.</p>
        <div className="mt-10"><ContactForm /></div>
      </div>
    </main>
  )
}
