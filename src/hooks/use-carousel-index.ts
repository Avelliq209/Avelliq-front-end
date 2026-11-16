"use client"

import { useCallback, useEffect, useState } from "react"

import type { CarouselApi } from "@/components/ui/carousel"

export function useCarouselIndex() {
  const [api, setApi] = useState<CarouselApi>()
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (!api) return

    const handleSelect = () => setSelectedIndex(api.selectedScrollSnap())
    const frame = requestAnimationFrame(handleSelect)
    api.on("select", handleSelect).on("reInit", handleSelect)

    return () => {
      cancelAnimationFrame(frame)
      api.off("select", handleSelect).off("reInit", handleSelect)
    }
  }, [api])

  const scrollTo = useCallback((index: number) => api?.scrollTo(index), [api])

  return { setApi, selectedIndex, scrollTo }
}
