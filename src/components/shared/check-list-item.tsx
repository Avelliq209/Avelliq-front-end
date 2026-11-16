import { Check } from "lucide-react"
import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

type CheckListItemProps = ComponentProps<"li"> & {
  iconClassName?: string
}

export function CheckListItem({ className, iconClassName, children, ...props }: CheckListItemProps) {
  return (
    <li
      className={cn(
        "flex items-center gap-1.5 text-sm leading-[1.3] font-normal text-ink-strong",
        className
      )}
      {...props}
    >
      <Check
        aria-hidden="true"
        strokeWidth={1.25}
        className={cn("size-4 shrink-0 text-ink-strong", iconClassName)}
      />
      <span>{children}</span>
    </li>
  )
}
