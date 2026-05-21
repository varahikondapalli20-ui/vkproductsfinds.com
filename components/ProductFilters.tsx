"use client"

import { useMemo, useState } from "react"
import type { Product } from "@/lib/notion"
import ProductCard from "./ProductCard"
import EmptyState from "./EmptyState"

const categories = ["Any", "Tech", "Kitchen", "Home", "Fitness", "Beauty"]
const prices = ["Any", "Under ₹500", "Under ₹1000", "Under ₹2000"]
const sorts = ["Newest", "Price: Low to High", "Price: High to Low", "Top Rated"]
const tags = ["Any", "Hot", "New", "Trending", "Today Only"]

export default function ProductFilters({ products }: { products: Product[] }) {
  const [category, setCategory] = useState("Any")
  const [price, setPrice] = useState("Any")
  const [sort, setSort] = useState("Newest")
  const [tag, setTag] = useState("Any")

  const filtered = useMemo(() => {
    let next = [...products]
    if (category !== "Any") next = next.filter((product) => product.category === category)
    if (tag !== "Any") next = next.filter((product) => product.tags.includes(tag))
    if (price !== "Any") {
      const max = Number(price.replace(/\D/g, ""))
      next = next.filter((product) => product.price <= max)
    }
    if (sort === "Price: Low to High") next.sort((a, b) => a.price - b.price)
    if (sort === "Price: High to Low") next.sort((a, b) => b.price - a.price)
    if (sort === "Top Rated") next.sort((a, b) => b.starRating - a.starRating)
    if (sort === "Newest") next.sort((a, b) => Date.parse(b.dateAdded) - Date.parse(a.dateAdded))
    return next
  }, [category, price, products, sort, tag])

  return (
    <div>
      <div className="mb-6 grid gap-3 rounded-2xl border border-[#2a2a2a] bg-[#1a1a1a] p-4 sm:grid-cols-2 lg:grid-cols-4">
        <Select label="Category" value={category} setValue={setCategory} options={categories} />
        <Select label="Price" value={price} setValue={setPrice} options={prices} />
        <Select label="Sort" value={sort} setValue={setSort} options={sorts} />
        <Select label="Tags" value={tag} setValue={setTag} options={tags} />
      </div>
      <p className="mb-8 text-sm text-[#9ca3af]">
        Showing {filtered.length} of {products.length} products
      </p>
      {filtered.length ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      ) : (
        <EmptyState />
      )}
    </div>
  )
}

function Select({
  label,
  value,
  setValue,
  options,
}: {
  label: string
  value: string
  setValue: (value: string) => void
  options: string[]
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-[#9ca3af]">
      {label}
      <select
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="rounded-xl border border-[#2a2a2a] bg-[#0a0a0a] px-4 py-3 text-white outline-none focus:border-[#f97316]"
      >
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </label>
  )
}
