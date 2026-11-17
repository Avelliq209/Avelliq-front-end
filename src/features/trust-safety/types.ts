import type { LucideIcon } from "lucide-react"
import type { StaticImageData } from "next/image"

import type { CountUpProps } from "@/components/motion/count-up"

export interface TrustFeature {
  icon: LucideIcon
  title: string
  description: string
}

export interface ScreeningStep {
  title: string
  description: string
}

export interface TrustStat {
  figure: CountUpProps | string
  label: string
  description: string
}

export interface Guideline {
  title: string
  description: string
}

export interface SupportChannel {
  icon: LucideIcon | StaticImageData
  title: string
  description: string
  ctaLabel: string
  emphasis: "primary" | "secondary"
}
