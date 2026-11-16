import { Star } from "lucide-react"
import { useId } from "react"

import { cn } from "@/lib/utils"

interface StarRatingProps {
  rating: number
  max?: number
}

export function StarRating({ rating, max = 5 }: StarRatingProps) {
  const gradientId = `star-gradient-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`

  return (
    <div role="img" aria-label={`${rating} out of ${max} stars`} className="flex gap-0.5">
      <svg width={0} height={0} className="absolute" aria-hidden="true">
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFCD0F" />
          <stop offset="100%" stopColor="#FF6F47" />
        </linearGradient>
      </svg>
      {Array.from({ length: max }, (_, index) => (
        <Star
          key={index}
          aria-hidden="true"
          style={index < rating ? { fill: `url(#${gradientId})` } : undefined}
          className={cn(
            "size-5.5",
            index < rating ? "stroke-0 text-amber-400" : "fill-transparent text-neutral-300"
          )}
        />
      ))}
    </div>
  )
}
