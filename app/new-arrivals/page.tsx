import type { Metadata } from "next"
import ProductCard from "@/components/ProductCard"
import EmptyState from "@/components/EmptyState"
import { getNewArrivals } from "@/lib/notion"

export const metadata: Metadata = {
  title: "New Arrivals",
  description: "Fresh VK Affiliate Amazon finds added this week.",
}

export const revalidate = 300

export default async function NewArrivalsPage() {
  const products = await getNewArrivals()

  return (
    <main className="section-shell min-h-screen pt-32 pb-20">
      <h1 className="text-5xl font-black">New Arrivals</h1>
      <p className="mt-4 text-lg text-[#9ca3af]">Fresh finds from this week</p>
      <div className="mt-10">
        {products.length ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => <ProductCard key={product.id} product={product} badge="NEW" />)}
          </div>
        ) : (
          <EmptyState />
        )}
      </div>
    </main>
  )
}
