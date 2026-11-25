import Image from "next/image"

import starIcon from "@/assets/icons/star.svg"
import { cn } from "@/lib/utils"

interface StarRatingProps {
  rating: number
  max?: number
  className?: string
  starClassName?: string
  decorative?: boolean
}

export function StarRating({
  rating,
  max = 5,
  className,
  starClassName,
  decorative = false,
}: StarRatingProps) {
  const filledStars = Math.round(Math.min(rating, max))

  return (
    <div
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : `${rating} out of ${max} stars`}
      aria-hidden={decorative || undefined}
      className={cn("flex", className)}
    >
      {Array.from({ length: filledStars }, (_, index) => (
        <span key={index} className={cn("flex size-5 items-center justify-center", starClassName)}>
          <Image src={starIcon} alt="" width={16} height={16} className="size-[81%]" />
        </span>
      ))}
    </div>
  )
}
