import type { Metadata } from "next"
import Link from "next/link"
import ProductFilters from "@/components/ProductFilters"
import EmptyState from "@/components/EmptyState"
import { getProducts } from "@/lib/notion"

export const metadata: Metadata = {
  title: "All Products",
  description: "Browse all live VK Affiliate Amazon product finds.",
}

export const revalidate = 300

export default async function ProductsPage({ searchParams }: { searchParams: { page?: string } }) {
  const products = await getProducts()
  const page = Math.max(1, Number(searchParams.page || "1"))
  const perPage = 12
  const totalPages = Math.max(1, Math.ceil(products.length / perPage))
  const paginated = products.slice((page - 1) * perPage, page * perPage)

  return (
    <main className="section-shell min-h-screen pt-32 pb-20">
      <h1 className="text-5xl font-black">All Products</h1>
      <p className="mt-4 text-[#9ca3af]">Showing {paginated.length} of {products.length} products</p>
      <div className="mt-10">
        {paginated.length ? <ProductFilters products={paginated} /> : <EmptyState />}
      </div>
      {products.length > perPage ? (
        <div className="mt-10 flex items-center justify-center gap-3">
          <Link
            href={`/products?page=${Math.max(1, page - 1)}`}
            className="rounded-full border border-[#2a2a2a] px-5 py-2 text-sm font-bold text-[#9ca3af] hover:border-[#f97316] hover:text-white"
          >
            Previous
          </Link>
          <span className="text-sm text-[#6b7280]">Page {page} of {totalPages}</span>
          <Link
            href={`/products?page=${Math.min(totalPages, page + 1)}`}
            className="rounded-full border border-[#2a2a2a] px-5 py-2 text-sm font-bold text-[#9ca3af] hover:border-[#f97316] hover:text-white"
          >
            Next
          </Link>
        </div>
      ) : null}
    </main>
  )
}
