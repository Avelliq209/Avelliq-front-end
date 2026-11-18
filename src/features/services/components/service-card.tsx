import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { ImageReveal } from "@/components/motion/image-reveal"
import { CheckListItem } from "@/components/shared/check-list-item"
import { buttonVariants } from "@/components/ui/button"
import { ROUTES } from "@/config/site"
import { cn } from "@/lib/utils"

import { SERVICE_INSIGHTS_BY_SLUG } from "../data/service-insights"
import type { ServiceCategory } from "../types"
import { ServiceInsightDialog } from "./service-insight-dialog"

export function ServiceCard({ service }: { service: ServiceCategory }) {
  const { slug, title, description, offerings, ctaLabel, image, imageAlt, imagePosition } = service
  const hasInsight = SERVICE_INSIGHTS_BY_SLUG.has(slug)
  const ctaClassName = cn(buttonVariants({ variant: "outline-primary", size: "pill-sm" }), "w-full")
  const ctaContent = (
    <>
      {ctaLabel}
      <ArrowRight aria-hidden="true" className="size-3" />
    </>
  )

  return (
    <article
      id={slug}
      className="flex h-full scroll-mt-32 flex-col gap-5 rounded-[12px] border-[0.5px] border-stroke bg-white p-5"
    >
      <ImageReveal className="relative h-49.5 overflow-hidden rounded-[12px]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
          placeholder="blur"
          className="object-cover"
          style={imagePosition ? { objectPosition: imagePosition } : undefined}
        />
      </ImageReveal>

      <div className="flex flex-1 flex-col gap-5">
        <div className="flex flex-col gap-2.5">
          <h3 className="font-heading text-2xl leading-[1.2] font-medium text-primary">{title}</h3>
          <p className="text-base leading-[1.3] text-ink">{description}</p>
        </div>
        <ul className="flex flex-col gap-2">
          {offerings.map((offering) => (
            <CheckListItem key={offering}>{offering}</CheckListItem>
          ))}
        </ul>
      </div>

      {hasInsight ? (
        <ServiceInsightDialog slug={slug} trigger={ctaContent} triggerClassName={ctaClassName} />
      ) : (
        <Link href={`${ROUTES.services}#${slug}`} className={ctaClassName}>
          {ctaContent}
        </Link>
      )}
    </article>
  )
}
