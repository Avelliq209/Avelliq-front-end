"use client"

import Autoplay, { type AutoplayOptionsType } from "embla-carousel-autoplay"
import { useState } from "react"

import { prefersReducedMotion } from "@/lib/motion"

const DEFAULT_DELAY_MS = 4000

export function useAutoplay(options: Partial<AutoplayOptionsType> = {}) {
  const [plugin] = useState(() =>
    Autoplay({
      delay: DEFAULT_DELAY_MS,
      active: !prefersReducedMotion(),
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      ...options,
    })
  )

  return plugin
}
