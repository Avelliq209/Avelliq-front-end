import { cva, type VariantProps } from "class-variance-authority"

import { IconTile } from "@/components/shared/icon-tile"
import { cn } from "@/lib/utils"

import type { TrustFeature } from "../types"

const featureCardVariants = cva("flex h-full flex-col bg-white", {
  variants: {
    size: {
      lg: "gap-5 rounded-[16px] border-[0.5px] border-stroke p-6 lg:p-8",
      md: "gap-4 rounded-[12px] p-6 lg:p-7",
    },
  },
  defaultVariants: { size: "md" },
})

const iconTileVariants = cva("rounded-[8px] bg-background p-0", {
  variants: {
    size: {
      lg: "size-12 [&_svg]:size-6",
      md: "size-10 [&_svg]:size-5",
    },
  },
  defaultVariants: { size: "md" },
})

type FeatureCardProps = VariantProps<typeof featureCardVariants> & {
  feature: TrustFeature
  className?: string
}

export function FeatureCard({ feature, size, className }: FeatureCardProps) {
  const { icon: Icon, title, description } = feature

  return (
    <article className={cn(featureCardVariants({ size }), className)}>
      <IconTile className={iconTileVariants({ size })}>
        <Icon aria-hidden="true" strokeWidth={1.5} />
      </IconTile>
      <h3 className="font-heading text-2xl leading-[1.2] font-medium text-primary">{title}</h3>
      <p className="text-[15px] leading-normal text-ink">{description}</p>
    </article>
  )
}
