import type { Metadata } from "next"
import ProductCard from "@/components/ProductCard"
import EmptyState from "@/components/EmptyState"
import { getProductsUnderPrice } from "@/lib/notion"

export const metadata: Metadata = {
  title: "Products Under ₹1000",
  description: "Quality Amazon picks under ₹1000 from VK Affiliate.",
}

export const revalidate = 300

export default async function Under1000Page() {
  const products = await getProductsUnderPrice(1000)

  return (
    <main className="section-shell min-h-screen pt-32 pb-20">
      <h1 className="text-5xl font-black">Products Under ₹1000</h1>
      <p className="mt-4 text-lg text-[#9ca3af]">Quality picks under ₹1000</p>
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
