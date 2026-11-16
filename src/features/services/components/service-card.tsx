import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { CheckListItem } from "@/components/shared/check-list-item"
import { IconTile } from "@/components/shared/icon-tile"
import { ROUTES } from "@/config/site"
import { cn } from "@/lib/utils"

import type { ServiceCategory } from "../types"

interface ServiceCardProps {
  service: ServiceCategory
  iconShape?: "square" | "circle"
}

export function ServiceCard({ service, iconShape = "square" }: ServiceCardProps) {
  const { slug, title, description, offerings, ctaLabel, icon: Icon, iconClassName } = service

  return (
    <article
      id={slug}
      className="flex h-full min-h-92.5 scroll-mt-32 flex-col gap-5 rounded-[12px] border-[.5px] border-avelliq-border-brown-light bg-avelliq-text-white p-5 md:justify-self-center md:last:col-span-2 lg:justify-self-auto lg:last:col-span-1"
    >
      <IconTile className={cn(iconClassName, iconShape === "circle" && "rounded-full")}>
        <Icon aria-hidden="true" className="size-5.5 stroke-2 md:size-6" />
      </IconTile>

      <div className="space-y-2.5">
        <h3 className="text-[22px] font-semibold text-avelliq-bg-green-dark 2xl:text-2xl">
          {title}
        </h3>
        <p className="text-[15px] leading-relaxed font-normal text-avelliq-text-grey 2xl:text-base">
          {description}
        </p>
      </div>

      <ul className="flex-1 space-y-2">
        {offerings.map((offering) => (
          <CheckListItem key={offering}>{offering}</CheckListItem>
        ))}
      </ul>

      <Link
        href={`${ROUTES.services}#${slug}`}
        className="group inline-flex items-center gap-1 text-[15px] font-medium text-avelliq-primary-green transition-colors 2xl:text-base"
      >
        {ctaLabel}
        <ArrowRight className="size-3 shrink-0 transition-transform group-hover:translate-x-1" />
      </Link>
    </article>
  )
}
