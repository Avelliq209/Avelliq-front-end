import Image from "next/image"

import { QuoteIcon } from "@/components/icons/quote"
import { cn, getInitials } from "@/lib/utils"

import type { Testimonial } from "../types"
import { StarRating } from "./star-rating"

const AVATAR_COLORS = [
  "bg-violet-100 text-violet-700",
  "bg-blue-100 text-blue-700",
  "bg-pink-100 text-pink-700",
  "bg-emerald-100 text-emerald-700",
  "bg-orange-100 text-orange-700",
]

interface TestimonialCardProps {
  testimonial: Testimonial
  index: number
  isActive: boolean
  onSelect: () => void
}

export function TestimonialCard({ testimonial, index, isActive, onSelect }: TestimonialCardProps) {
  const { quote, name, role, rating, avatarUrl } = testimonial

  return (
    <figure
      onClick={onSelect}
      className={cn(
        "flex min-w-75 flex-1 cursor-default flex-col gap-13.25 rounded-[16px] p-6 shadow-[0px_0px_4px_0px_#0000001F] select-none",
        isActive ? "bg-avelliq-primary-green" : "bg-avelliq-text-white"
      )}
    >
      <div className="flex h-8 items-center justify-between gap-4">
        <StarRating rating={rating} />
        {isActive && <QuoteIcon width={32} height="100%" />}
      </div>

      <div className="flex flex-1 flex-col justify-between space-y-8">
        <blockquote
          className={cn(
            "block text-[15px] leading-[157%] font-normal 2xl:text-base",
            isActive ? "text-avelliq-text-white" : "text-[#111827]"
          )}
        >
          <q>{quote}</q>
        </blockquote>

        <figcaption className="flex items-center gap-2 border-t-[.5px] border-t-[#FFFFFF26] pt-8">
          {avatarUrl ? (
            <Image
              src={avatarUrl}
              alt={name}
              width={42}
              height={42}
              className="size-10.5 rounded-full object-cover text-[8px]"
            />
          ) : (
            <span
              aria-hidden="true"
              className={cn(
                "inline-flex size-10.5 shrink-0 items-center justify-center rounded-full text-sm",
                AVATAR_COLORS[index % AVATAR_COLORS.length]
              )}
            >
              {getInitials(name)}
            </span>
          )}
          <div className="flex flex-col">
            <span
              className={cn(
                "inline-flex text-base font-medium 2xl:text-lg",
                isActive ? "text-avelliq-text-white" : "text-black"
              )}
            >
              {name}
            </span>
            <span
              className={cn(
                "inline-flex text-sm font-normal 2xl:text-base",
                isActive ? "text-avelliq-bg-green-light" : "text-avelliq-primary-green"
              )}
            >
              {role}
            </span>
          </div>
        </figcaption>
      </div>
    </figure>
  )
}
