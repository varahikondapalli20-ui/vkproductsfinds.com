import type { Metadata } from "next"
import Link from "next/link"
import NewsletterBar from "@/components/NewsletterBar"

export const metadata: Metadata = {
  title: "Blog",
  description: "VK Affiliate buying guides and product reviews are coming soon.",
}

export default function BlogPage() {
  return (
    <main className="section-shell min-h-screen pt-32 pb-20">
      <section className="mx-auto max-w-3xl text-center">
        <h1 className="text-5xl font-black">Blog Coming Soon</h1>
        <p className="mt-4 text-lg text-[#9ca3af]">We&apos;re working on helpful buying guides and product reviews.</p>
        <div className="mt-10"><NewsletterBar /></div>
        <Link href="/" className="mt-8 inline-block font-bold text-[#f97316]">Back to homepage</Link>
      </section>
    </main>
  )
}
