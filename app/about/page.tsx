import type { Metadata } from "next"
import Link from "next/link"
import { Instagram, Pin } from "lucide-react"

export const metadata: Metadata = {
  title: "About VK Affiliate",
  description: "Learn about VK Affiliate and how we curate Amazon product finds.",
}

export default function AboutPage() {
  return (
    <main className="section-shell min-h-screen pt-32 pb-20">
      <h1 className="text-5xl font-black">About VK Affiliate</h1>
      <div className="mt-10 grid gap-6">
        <Info title="Who We Are">VK Affiliate is a curated Amazon finds website built for shoppers who want useful products without endless scrolling. We collect practical, trending, and value-focused finds across everyday categories.</Info>
        <Info title="Our Mission">Our mission is to make product discovery easier by highlighting hand-picked Amazon deals, new arrivals, and social media favorites in one clean place.</Info>
        <section className="rounded-2xl border border-[#2a2a2a] bg-[#1a1a1a] p-6">
          <h2 className="text-2xl font-black text-[#f97316]">How It Works</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {["Browse curated finds", "Click the Amazon deal", "Buy directly on Amazon"].map((step, index) => (
              <div key={step} className="rounded-2xl border border-[#2a2a2a] bg-[#0a0a0a] p-5">
                <span className="text-sm font-black text-[#f97316]">Step {index + 1}</span>
                <p className="mt-2 font-semibold">{step}</p>
              </div>
            ))}
          </div>
        </section>
        <Info title="Affiliate Disclosure">Some links are affiliate links. As an Amazon Associate, we earn from qualifying purchases. Read the full notice on our <Link href="/disclosure" className="text-[#f97316]">disclosure page</Link>.</Info>
        <div className="flex flex-wrap gap-3">
          <Link href="/go/pinterest" className="button-gold px-6 py-3"><Pin size={18} /> Pinterest</Link>
          <Link href="/go/instagram" className="button-gold px-6 py-3"><Instagram size={18} /> Instagram</Link>
        </div>
      </div>
    </main>
  )
}

function Info({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-[#2a2a2a] bg-[#1a1a1a] p-6">
      <h2 className="text-2xl font-black text-[#f97316]">{title}</h2>
      <p className="mt-3 leading-8 text-[#9ca3af]">{children}</p>
    </section>
  )
}
