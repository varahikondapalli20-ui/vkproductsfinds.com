type StarRatingProps = {
  rating: number
  reviewCount?: number
}

export function formatReviewCount(count: number) {
  if (count > 999) return `${(count / 1000).toFixed(count >= 10000 ? 0 : 1)}k`
  return `${count}`
}

export default function StarRating({ rating, reviewCount = 0 }: StarRatingProps) {
  const rounded = Math.round(rating)

  return (
    <div className="flex flex-wrap items-center gap-2 text-sm">
      <span className="tracking-[0] text-[#f97316]" aria-label={`${rating.toFixed(1)} stars`}>
        {Array.from({ length: 5 }, (_, index) => (index < rounded ? "★" : "☆")).join("")}
      </span>
      <span className="font-medium text-[#9ca3af]">{rating.toFixed(1)}</span>
      <span className="text-[#6b7280]">({formatReviewCount(reviewCount)})</span>
    </div>
  )
}
