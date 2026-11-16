"use client"

import { cn } from "@/lib/utils"

interface CarouselDotsProps {
  count: number
  activeIndex: number
  onSelect: (index: number) => void
  label: string
  className?: string
}

export function CarouselDots({ count, activeIndex, onSelect, label, className }: CarouselDotsProps) {
  return (
    <div role="group" aria-label={label} className={cn("flex items-center gap-0.5", className)}>
      {Array.from({ length: count }, (_, index) => (
        <button
          key={index}
          type="button"
          aria-label={`Go to slide ${index + 1}`}
          aria-current={index === activeIndex}
          onClick={() => onSelect(index)}
          className={cn(
            "h-2 cursor-pointer rounded-[6px] transition-all",
            index === activeIndex ? "w-13.75 bg-support" : "w-4.25 bg-white/68 hover:bg-white"
          )}
        />
      ))}
    </div>
  )
}
