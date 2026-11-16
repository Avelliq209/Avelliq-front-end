import { cva, type VariantProps } from "class-variance-authority"
import Image from "next/image"
import type { ReactNode } from "react"

import shieldCheckLightIcon from "@/assets/icons/shield-check-light.svg"
import shieldCheckIcon from "@/assets/icons/shield-check.svg"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const eyebrowBadgeVariants = cva(
  "h-auto gap-1.5 rounded-full border-[0.3px] border-stroke-muted px-4 py-3 text-sm leading-[1.3] font-medium lg:text-base",
  {
    variants: {
      tone: {
        light: "bg-sand text-support",
        dark: "bg-sand/15 text-white",
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
      <Image
        src={tone === "dark" ? shieldCheckLightIcon : shieldCheckIcon}
        alt=""
        width={18}
        height={18}
        className="size-4.5! shrink-0"
      />
      {children}
    </Badge>
  )
}
