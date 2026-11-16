import { cva, type VariantProps } from "class-variance-authority"
import { ShieldCheck } from "lucide-react"
import type { ReactNode } from "react"

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const eyebrowBadgeVariants = cva(
  "h-auto gap-1.5 rounded-full border-[.3px] border-avelliq-border-grey-light px-3 py-2 text-[13px] font-medium lg:text-sm 2xl:px-4 2xl:py-3 2xl:text-base [&>svg]:size-4! [&>svg]:stroke-2 lg:[&>svg]:size-4.5!",
  {
    variants: {
      tone: {
        light: "bg-avelliq-bg-green-light text-avelliq-bg-green-dark",
        dark: "bg-[#F5EFE626] text-[#FFF4D6]",
      },
    },
    defaultVariants: {
      tone: "light",
    },
  }
)

interface EyebrowBadgeProps extends VariantProps<typeof eyebrowBadgeVariants> {
  children: ReactNode
  className?: string
}

export function EyebrowBadge({ children, tone, className }: EyebrowBadgeProps) {
  return (
    <Badge className={cn(eyebrowBadgeVariants({ tone }), className)}>
      <ShieldCheck />
      {children}
    </Badge>
  )
}
