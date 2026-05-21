"use client"

import { useMemo, useState } from "react"
import type { Product } from "@/lib/notion"
import ProductCard from "./ProductCard"
import EmptyState from "./EmptyState"

const categories = ["All", "Tech", "Kitchen", "Home", "Fitness", "Beauty"]

export default function CategoryTabs({ products }: { products: Product[] }) {
  const [active, setActive] = useState("All")
  const filtered = useMemo(
    () => (active === "All" ? products : products.filter((product) => product.category === active)),
    [active, products],
  )

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`rounded-full border px-5 py-2 text-sm font-bold transition ${
              active === category
                ? "border-[#f97316] bg-[#f97316] text-white"
                : "border-[#2a2a2a] bg-[#1a1a1a] text-[#9ca3af] hover:border-[#f97316] hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      {filtered.length ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.slice(0, 8).map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      ) : (
        <EmptyState />
      )}
    </div>
  )
}
