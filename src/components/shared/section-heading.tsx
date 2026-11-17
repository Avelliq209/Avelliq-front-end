import type { ReactNode } from "react"

import { Reveal } from "@/components/motion/reveal"
import { EyebrowBadge } from "@/components/shared/eyebrow-badge"
import { SectionDescription } from "@/components/shared/section-description"
import { SectionTitle } from "@/components/shared/section-title"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: ReactNode
  eyebrow?: string
  label?: string
  description?: ReactNode
  align?: "center" | "start"
  as?: "h1" | "h2"
  className?: string
  labelClassName?: string
  titleClassName?: string
  descriptionClassName?: string
}

export function SectionHeading({
  title,
  eyebrow,
  label,
  description,
  align = "center",
  as = "h2",
  className,
  labelClassName,
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) {
  const isCentered = align === "center"

  return (
    <div
      className={cn(
        "flex flex-col gap-3.5",
        isCentered ? "items-center text-center" : "items-start",
        className
      )}
    >
      {eyebrow && <EyebrowBadge>{eyebrow}</EyebrowBadge>}
      {label && (
        <Reveal
          as="p"
          y={24}
          className={cn(
            "font-inter text-sm leading-normal font-bold tracking-[1px] text-support uppercase",
            labelClassName
          )}
        >
          {label}
        </Reveal>
      )}
      <SectionTitle as={as} className={titleClassName}>
        {title}
      </SectionTitle>
      {description && (
        <SectionDescription
          className={cn("leading-normal", isCentered && "max-w-170", descriptionClassName)}
        >
          {description}
        </SectionDescription>
      )}
    </div>
  )
}
