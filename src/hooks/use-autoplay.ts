"use client"

import Autoplay from "embla-carousel-autoplay"
import { useState } from "react"

const DEFAULT_DELAY_MS = 4000

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

export function useAutoplay(delay = DEFAULT_DELAY_MS) {
  const [plugin] = useState(() =>
    Autoplay({
      delay,
      active: !prefersReducedMotion(),
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  )

  return plugin
}
