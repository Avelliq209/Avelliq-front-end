"use client"

import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const dotVariants = cva("cursor-pointer transition-all", {
  variants: {
    variant: {
      pill: "h-2 rounded-[6px] w-4.25 bg-white/68 hover:bg-white aria-current:w-13.75 aria-current:bg-support",
      dot: "size-2.5 rounded-full bg-white/70 hover:bg-white aria-current:bg-primary",
    },
  },
  defaultVariants: { variant: "pill" },
})

interface CarouselDotsProps extends VariantProps<typeof dotVariants> {
  count: number
  activeIndex: number
  onSelect: (index: number) => void
  label: string
  className?: string
}

export function CarouselDots({
  count,
  activeIndex,
  onSelect,
  label,
  variant,
  className,
}: CarouselDotsProps) {
  return (
    <div
      role="group"
      aria-label={label}
      className={cn("flex items-center", variant === "dot" ? "gap-1" : "gap-0.5", className)}
    >
      {Array.from({ length: count }, (_, index) => (
        <button
          key={index}
          type="button"
          aria-label={`Go to slide ${index + 1}`}
          aria-current={index === activeIndex}
          onClick={() => onSelect(index)}
          className={dotVariants({ variant })}
        />
      ))}
    </div>
  )
}
