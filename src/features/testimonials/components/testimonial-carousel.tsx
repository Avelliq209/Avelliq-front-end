"use client"

import { useState } from "react"

import { cn } from "@/lib/utils"

import type { Testimonial } from "../types"
import { TestimonialCard } from "./testimonial-card"

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
  initialIndex?: number
}

export function TestimonialCarousel({ testimonials, initialIndex = 1 }: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(initialIndex)

  return (
    <>
      {testimonials.length > 1 && (
        <div className="flex justify-end gap-2 pr-5 sm:pr-10 lg:pr-17.5">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "h-2 cursor-pointer rounded-full transition-all",
                index === activeIndex
                  ? "w-10 bg-avelliq-primary-green"
                  : "w-4 bg-[#FFF4D6] hover:bg-avelliq-text-grey"
              )}
            />
          ))}
        </div>
      )}

      <div className="overflow-x-auto scrollbar-none">
        <div
          className="grid w-full gap-5 py-7 pl-1"
          style={{ gridTemplateColumns: `repeat(${testimonials.length}, minmax(300px, 1fr))` }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
              isActive={index === activeIndex}
              onSelect={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </>
  )
}
