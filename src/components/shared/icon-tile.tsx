import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

export function IconTile({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "flex h-fit w-fit shrink-0 items-center justify-center rounded-[8px] bg-avelliq-bg-green-light p-3 text-avelliq-primary-green",
        className
      )}
      {...props}
    />
  )
}
