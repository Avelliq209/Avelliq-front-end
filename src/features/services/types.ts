import type { LucideIcon } from "lucide-react"
import type { StaticImageData } from "next/image"

export interface ServiceCategory {
  slug: string
  title: string
  description: string
  offerings: string[]
  ctaLabel: string
  image: StaticImageData
  imageAlt: string
  imagePosition?: string
}

export interface ServiceFeature {
  icon: LucideIcon
  title: string
  description: string
}

export interface ServiceAudience {
  title: string
  icon: LucideIcon
  points: Omit<ServiceFeature, "icon">[]
}

export interface ServiceDetail {
  slug: string
  label: string
  thumbnail: StaticImageData
  thumbnailAlt: string
  image: StaticImageData
  imageAlt: string
  badge: string
  title: string
  subtitle: string
  overviewTitle: string
  overview: string
  inclusionsTitle: string
  inclusions: ServiceFeature[]
  audiences: ServiceAudience[]
  ctaLabel: string
}
