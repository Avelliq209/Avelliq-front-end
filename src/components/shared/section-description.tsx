import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

export function SectionDescription({ className, ...props }: ComponentProps<"p">) {
  return <p className={cn("text-base leading-[1.4] font-normal text-ink", className)} {...props} />
}
