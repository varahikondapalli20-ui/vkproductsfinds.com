import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink, Flame, Instagram, Pin, ShoppingBag, Sparkles } from "lucide-react"
import CategoryTabs from "@/components/CategoryTabs"
import ProductCard from "@/components/ProductCard"
import NewsletterBar from "@/components/NewsletterBar"
import SocialQRSection from "@/components/SocialQRSection"
import EmptyState from "@/components/EmptyState"
import { getDailyDeals, getFeaturedProducts } from "@/lib/notion"

export const metadata = {
  title: "Turn Traffic Into Revenue",
  description: "Discover hand-picked Amazon products shared on Pinterest by VK Affiliate.",
}

export const revalidate = 300

export default async function Home() {
  const [featuredProducts, dailyDeals] = await Promise.all([getFeaturedProducts(), getDailyDeals()])

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section id="hero" className="section-shell flex min-h-screen items-center pt-24">
        <div className="grid w-full items-center gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#f97316]/70 bg-black/35 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#f97316] shadow-[0_0_20px_rgba(249,115,22,0.3)]">
              <Sparkles size={14} aria-hidden="true" />
              Amazon Affiliate Partner
            </div>
            <h1 className="hero-title mt-7 text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
              Discover. Click. <span className="brand-gradient">Earn.</span> Repeat.
            </h1>
            <p className="brand-gradient mt-5 inline-block text-2xl font-black">Turn Traffic Into Revenue</p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#9ca3af]">
              Discover hand-picked Amazon products shared on Pinterest. Every click supports our curated affiliate collection - shop smart, save big.
            </p>
            <Link href="/products" className="button-gold mt-8 px-7 py-4 text-base">
              Explore Products <ArrowRight size={19} aria-hidden="true" />
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="hero-light" />
            <div className="logo-orb relative aspect-square w-full p-10">
              <Image src="/logo.png" alt="VK Affiliate brand mark" width={520} height={520} priority className="h-full w-full" />
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="section-shell scroll-mt-24 py-20">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-eyebrow text-sm font-black uppercase tracking-[0.18em]">Curated Collection</p>
            <h2 className="mt-3 text-4xl font-black sm:text-5xl">Hot Picks</h2>
            <p className="mt-3 text-sm text-[#6b7280]">Prices last updated 15 mins ago</p>
          </div>
          <ShoppingBag className="hidden text-[#f97316] drop-shadow-[0_0_18px_rgba(249,115,22,0.55)] sm:block" size={34} aria-hidden="true" />
        </div>
        {featuredProducts.length ? <CategoryTabs products={featuredProducts} /> : <EmptyState />}
        <div className="mt-8 text-right">
          <Link href="/products" className="font-bold text-[#f97316] hover:text-[#ea6c0a]">View All Products →</Link>
        </div>
      </section>

      <section id="deals" className="section-shell scroll-mt-24 py-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="section-eyebrow text-sm font-black uppercase tracking-[0.18em]">Amazon Favorites</p>
            <h2 className="mt-3 text-4xl font-black sm:text-5xl">Top Amazon Deals</h2>
          </div>
          <Flame className="hidden text-[#f97316] drop-shadow-[0_0_18px_rgba(249,115,22,0.55)] sm:block" size={34} aria-hidden="true" />
        </div>
        {dailyDeals.length ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {dailyDeals.slice(0, 8).map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        ) : (
          <EmptyState />
        )}
        <div className="mt-8 text-right">
          <Link href="/deals" className="font-bold text-[#f97316] hover:text-[#ea6c0a]">View All Deals →</Link>
        </div>
      </section>

      <section id="pinterest" className="section-shell scroll-mt-24 py-20 text-center">
        <div className="card-surface gold-glow mx-auto max-w-2xl rounded-2xl px-6 py-14">
          <Pin className="mx-auto text-[#f97316]" size={48} aria-hidden="true" />
          <h2 className="mt-5 text-4xl font-black">Pinterest Picks</h2>
          <p className="mx-auto mt-4 max-w-xl text-[#9ca3af]">
            Follow the curated product boards and discover fresh Amazon finds as soon as they go live.
          </p>
          <Link href="/go/pinterest" className="button-gold mt-7 px-7 py-4">
            Open Pinterest <ExternalLink size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section id="instagram" className="section-shell scroll-mt-24 py-20 text-center">
        <div className="card-surface gold-glow mx-auto max-w-2xl rounded-2xl px-6 py-14">
          <Instagram className="mx-auto text-[#f97316]" size={52} aria-hidden="true" />
          <h2 className="mt-5 text-4xl font-black">Follow on Instagram</h2>
          <p className="mx-auto mt-4 max-w-xl text-[#9ca3af]">
            Catch product drops, deal highlights, and affiliate inspiration on Instagram.
          </p>
          <Link href="/go/instagram" className="button-gold mt-7 px-7 py-4">
            Open Instagram <ExternalLink size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <SocialQRSection />

      <section id="contact" className="section-shell scroll-mt-24 py-20">
        <NewsletterBar />
      </section>
    </main>
  )
}
