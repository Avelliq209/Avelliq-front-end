import type { ComponentProps } from "react"

import { RevealText } from "@/components/motion/reveal-text"
import { cn } from "@/lib/utils"

type SectionTitleProps = ComponentProps<"h2"> & {
  as?: "h1" | "h2" | "h3"
}

export function SectionTitle({
  as: Heading = "h2",
  className,
  children,
  ...props
}: SectionTitleProps) {
  return (
    <Heading
      className={cn(
        "font-heading text-[34px] leading-[1.2] font-medium tracking-[0.504px] text-primary md:text-[40px] lg:text-5xl",
        className
      )}
      {...props}
    >
      <RevealText>{children}</RevealText>
    </Heading>
  )
}
