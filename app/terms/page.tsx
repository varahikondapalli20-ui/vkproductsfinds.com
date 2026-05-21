import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "VK Affiliate website terms of use and affiliate link disclaimers.",
}

export default function TermsPage() {
  return (
    <main className="section-shell min-h-screen pt-32 pb-20">
      <article className="mx-auto max-w-3xl rounded-2xl border border-[#2a2a2a] bg-[#1a1a1a] p-8">
        <h1 className="text-5xl font-black">Terms of Use</h1>
        <div className="mt-8 grid gap-5 leading-8 text-[#9ca3af]">
          <p>By using VK Affiliate, you agree to use the website for lawful personal shopping and product discovery purposes.</p>
          <p>Some product links are affiliate links. We may earn from qualifying purchases, and this does not change your purchase price.</p>
          <p>We do not guarantee product prices, availability, delivery timelines, discounts, ratings, reviews, or seller claims. Always confirm details on Amazon before purchasing.</p>
          <p>The website is provided without warranties. To the fullest extent permitted by law, VK Affiliate is not responsible for third-party product issues or purchase outcomes.</p>
          <p>These terms are governed by applicable Indian law unless another jurisdiction is required by law.</p>
        </div>
      </article>
    </main>
  )
}
