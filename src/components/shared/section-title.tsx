import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

type SectionTitleProps = ComponentProps<"h2"> & {
  as?: "h1" | "h2" | "h3"
}

export function SectionTitle({ as: Heading = "h2", className, ...props }: SectionTitleProps) {
  return (
    <Heading
      className={cn(
        "text-[38px] leading-[120%] font-semibold tracking-wide text-avelliq-primary-green md:text-[40px] lg:text-5xl",
        className
      )}
      {...props}
    />
  )
}
