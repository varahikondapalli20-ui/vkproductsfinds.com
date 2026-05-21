import Image from "next/image"
import { ExternalLink } from "lucide-react"
import type { Product } from "@/lib/notion"
import StarRating from "./StarRating"

type ProductCardProps = {
  product: Product
  badge?: string
  ribbon?: string
  forceOriginalPrice?: boolean
}

const tagLabels: Record<string, string> = {
  Hot: "Hot",
  "Today Only": "Today Only",
  "Limited Deal": "Limited Deal",
  New: "New",
  Trending: "Trending",
}

export default function ProductCard({
  product,
  badge,
  ribbon,
  forceOriginalPrice = false,
}: ProductCardProps) {
  const showOriginal =
    forceOriginalPrice ||
    (product.originalPrice > 0 && product.originalPrice !== product.price)
  const firstTag = product.tags[0]

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-[#2a2a2a] bg-[#1a1a1a] transition-all duration-200 ease-out hover:scale-[1.02] hover:border-orange-500/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]">
      {ribbon ? (
        <div className="absolute left-0 top-5 z-20 rounded-r-full bg-[#f97316] px-4 py-1 text-xs font-bold text-white shadow-[0_0_20px_rgba(249,115,22,0.3)]">
          {ribbon}
        </div>
      ) : null}

      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#222222]">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
        {product.discountPercent > 0 ? (
          <span className="absolute left-3 top-3 rounded-full bg-[#dc2626] px-3 py-1 text-xs font-bold text-white">
            -{product.discountPercent}%
          </span>
        ) : null}
        {badge || firstTag ? (
          <span className="absolute right-3 top-3 rounded-full bg-[#f97316] px-3 py-1 text-xs font-bold text-white">
            {badge || tagLabels[firstTag] || firstTag}
          </span>
        ) : null}
      </div>

      <div className="space-y-4 p-5">
        <h3 className="line-clamp-2 min-h-[3.25rem] text-base font-semibold leading-relaxed text-white">
          {product.name}
        </h3>
        <StarRating rating={product.starRating} reviewCount={product.reviewCount} />
        <div className="flex flex-wrap items-end gap-2">
          <span className="text-xl font-bold text-[#f97316]">₹{product.price.toLocaleString("en-IN")}</span>
          {showOriginal ? (
            <span className="text-sm text-[#9ca3af] line-through">
              ₹{product.originalPrice.toLocaleString("en-IN")}
            </span>
          ) : null}
        </div>
        <a
          href={product.amazonLink}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-[#f97316] px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:brightness-110"
        >
          Check Deal <ExternalLink size={16} aria-hidden="true" />
        </a>
      </div>
    </article>
  )
}
