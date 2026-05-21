import type { Metadata } from "next"
import ProductCard from "@/components/ProductCard"
import EmptyState from "@/components/EmptyState"
import { getFeaturedProducts, getTopPicks } from "@/lib/notion"

export const metadata: Metadata = {
  title: "Top Picks",
  description: "Our hottest and most featured VK Affiliate product picks.",
}

export const revalidate = 300

export default async function TopPicksPage() {
  const [topPicks, featured] = await Promise.all([getTopPicks(), getFeaturedProducts()])
  const products = Array.from(new Map([...topPicks, ...featured].map((product) => [product.id, product])).values())

  return (
    <main className="section-shell min-h-screen pt-32 pb-20">
      <h1 className="text-5xl font-black">Top Picks</h1>
      <p className="mt-4 text-lg text-[#9ca3af]">Our hottest and most featured products</p>
      <div className="mt-10">
        {products.length ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} ribbon={product.featured ? "Featured" : undefined} />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </div>
    </main>
  )
}
