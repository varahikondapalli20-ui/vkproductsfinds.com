import type { Metadata } from "next"
import CountdownTimer from "@/components/CountdownTimer"
import ProductCard from "@/components/ProductCard"
import EmptyState from "@/components/EmptyState"
import { getDailyDeals } from "@/lib/notion"

export const metadata: Metadata = {
  title: "Today's Deals",
  description: "Limited and today-only Amazon deals from VK Affiliate.",
}

export const revalidate = 300

export default async function DealsPage() {
  const products = await getDailyDeals()

  return (
    <main className="section-shell min-h-screen pt-32 pb-20">
      <h1 className="text-5xl font-black">Today&apos;s Deals</h1>
      <div className="mt-8"><CountdownTimer /></div>
      <div className="mt-10">
        {products.length ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        ) : (
          <EmptyState />
        )}
      </div>
    </main>
  )
}
