import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "VK Affiliate Amazon Associates disclosure and affiliate link notice.",
}

export default function DisclosurePage() {
  return <LegalPage title="Affiliate Disclosure" paragraphs={[
    "VK Affiliate is a participant in the Amazon Associates Program. As an Amazon Associate, we earn from qualifying purchases.",
    "Some links on this website are affiliate links. When you click an Amazon link and make a purchase, we may receive a small commission at no extra cost to you.",
    "Product prices, availability, discounts, ratings, and review counts are subject to change without notice. Always verify the final price and product details on Amazon before purchasing.",
    "Our recommendations are curated for discovery and convenience, but they do not replace your own review of product details, seller terms, warranties, or suitability.",
  ]} />
}

function LegalPage({ title, paragraphs }: { title: string; paragraphs: string[] }) {
  return (
    <main className="section-shell min-h-screen pt-32 pb-20">
      <article className="mx-auto max-w-3xl rounded-2xl border border-[#2a2a2a] bg-[#1a1a1a] p-8">
        <h1 className="text-5xl font-black">{title}</h1>
        <div className="mt-8 grid gap-5 text-[#9ca3af]">
          {paragraphs.map((paragraph) => <p key={paragraph} className="leading-8">{paragraph}</p>)}
        </div>
      </article>
    </main>
  )
}
