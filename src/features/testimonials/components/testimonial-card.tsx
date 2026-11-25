import Image from "next/image"

import quoteLightIcon from "@/assets/icons/quote-light.svg"
import quoteIcon from "@/assets/icons/quote.svg"
import { StarRating } from "@/components/shared/star-rating"
import { cn } from "@/lib/utils"

import type { Testimonial } from "../types"

interface TestimonialCardProps {
  testimonial: Testimonial
  isActive: boolean
  onSelect: () => void
}

export function TestimonialCard({ testimonial, isActive, onSelect }: TestimonialCardProps) {
  const { quote, name, role, rating, avatar } = testimonial

  return (
    <figure
      onClick={onSelect}
      className={cn(
        "flex h-full flex-col gap-13.25 rounded-[16px] p-6 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.12)] transition-colors select-none",
        isActive ? "bg-primary" : "bg-white"
      )}
    >
      <div className="flex items-start justify-between">
        <StarRating rating={rating} />
        <Image
          src={isActive ? quoteLightIcon : quoteIcon}
          alt=""
          width={35}
          height={35}
          className={cn(isActive && "-scale-x-100")}
        />
      </div>

      <div className="flex flex-1 flex-col justify-between gap-8">
        <blockquote
          className={cn(
            "border-b-[0.5px] pb-8 font-inter text-base leading-[1.57]",
            isActive ? "border-white/15 text-white" : "border-transparent text-ink"
          )}
        >
          <p>{quote}</p>
        </blockquote>

        <figcaption className="flex items-center gap-2 font-inter">
          <Image src={avatar} alt="" width={42} height={42} className="size-10.5 rounded-full" />
          <div className="flex flex-col gap-0.5">
            <span
              className={cn("text-base leading-[1.15] font-medium", isActive ? "text-white" : "text-black")}
            >
              {name}
            </span>
            <span className={cn("text-xs leading-[1.14]", isActive ? "text-mint" : "text-primary")}>
              {role}
            </span>
          </div>
        </figcaption>
      </div>
    </figure>
  )
}
