import { Check } from "lucide-react"
import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

export function CheckListItem({ className, children, ...props }: ComponentProps<"li">) {
  return (
    <li
      className={cn(
        "flex items-center justify-start gap-2 text-[15px] font-normal text-avelliq-text-primary 2xl:text-base",
        className
      )}
      {...props}
    >
      <Check aria-hidden="true" className="size-3.5 shrink-0 text-avelliq-primary-green" />
      <span>{children}</span>
    </li>
  )
}
