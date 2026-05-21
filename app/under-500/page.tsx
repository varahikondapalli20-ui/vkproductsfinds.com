import type { Metadata } from "next"
import ProductCard from "@/components/ProductCard"
import EmptyState from "@/components/EmptyState"
import { getProductsUnderPrice } from "@/lib/notion"

export const metadata: Metadata = {
  title: "Products Under ₹500",
  description: "Great Amazon finds under ₹500 from VK Affiliate.",
}

export const revalidate = 300

export default async function Under500Page() {
  const products = await getProductsUnderPrice(500)
  return <PricePage title="Products Under ₹500" subtitle="Great finds under ₹500" products={products} forceOriginalPrice />
}

function PricePage({ title, subtitle, products, forceOriginalPrice = false }: any) {
  return (
    <main className="section-shell min-h-screen pt-32 pb-20">
      <h1 className="text-5xl font-black">{title}</h1>
      <p className="mt-4 text-lg text-[#9ca3af]">{subtitle}</p>
      <div className="mt-10">
        {products.length ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product: any) => <ProductCard key={product.id} product={product} forceOriginalPrice={forceOriginalPrice} />)}
          </div>
        ) : (
          <EmptyState />
        )}
      </div>
    </main>
  )
}
