import type { ReactNode } from "react"

import { Reveal } from "@/components/motion/reveal"
import { cn } from "@/lib/utils"

interface SectionDescriptionProps {
  children: ReactNode
  className?: string
}

export function SectionDescription({ children, className }: SectionDescriptionProps) {
  return (
    <Reveal
      as="p"
      y={24}
      delay={0.15}
      className={cn("text-base leading-[1.4] font-normal text-ink", className)}
    >
      {children}
    </Reveal>
  )
}
