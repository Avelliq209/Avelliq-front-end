import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

export function Section({ className, ...props }: ComponentProps<"section">) {
  return <section className={cn("px-5 py-17.5 sm:px-10 lg:px-17.5", className)} {...props} />
}
