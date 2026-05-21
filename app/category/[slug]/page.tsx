import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ProductCard from "@/components/ProductCard"
import EmptyState from "@/components/EmptyState"
import { getProductsByCategory } from "@/lib/notion"

const categoryConfig = {
  tech: { title: "Tech Gadgets", emoji: "💻", description: "Smart accessories, useful gadgets, and everyday tech upgrades." },
  kitchen: { title: "Kitchen Essentials", emoji: "🍳", description: "Practical tools and storage finds for easier cooking." },
  home: { title: "Home & Living", emoji: "🏠", description: "Comfortable, organized, and beautiful picks for your space." },
  fitness: { title: "Fitness & Health", emoji: "💪", description: "Helpful gear for workouts, recovery, and healthy routines." },
  beauty: { title: "Beauty & Care", emoji: "✨", description: "Skin, hair, and self-care finds worth adding to your shelf." },
} as const

type Slug = keyof typeof categoryConfig

export const revalidate = 300

export function generateStaticParams() {
  return Object.keys(categoryConfig).map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const config = categoryConfig[params.slug as Slug]
  if (!config) return { title: "Category" }
  return { title: config.title, description: config.description }
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const config = categoryConfig[params.slug as Slug]
  if (!config) notFound()

  const queryCategory = params.slug.charAt(0).toUpperCase() + params.slug.slice(1)
  const products = await getProductsByCategory(queryCategory)

  return (
    <main className="section-shell min-h-screen pt-32 pb-20">
      <section className="rounded-2xl border border-[#2a2a2a] bg-[#1a1a1a] p-8 shadow-[0_0_20px_rgba(249,115,22,0.14)]">
        <div className="text-5xl" aria-hidden="true">{config.emoji}</div>
        <h1 className="mt-4 text-5xl font-black">{config.title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-[#9ca3af]">{config.description}</p>
      </section>
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
