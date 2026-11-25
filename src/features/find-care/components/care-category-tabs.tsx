"use client"

import { useEffect, useRef } from "react"

import { TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CARE_CATEGORIES } from "@/features/professionals/data/categories"
import type { CareCategorySlug } from "@/features/professionals/types"

export function CareCategoryTabs({ selected }: { selected: CareCategorySlug }) {
  const scrollerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scroller = scrollerRef.current
    const tab = scroller?.querySelector<HTMLElement>(`[data-category="${selected}"]`)
    if (!scroller || !tab) return

    const centeredLeft = tab.offsetLeft - (scroller.clientWidth - tab.offsetWidth) / 2
    scroller.scrollTo({ left: centeredLeft })
  }, [selected])

  return (
    <div
      ref={scrollerRef}
      className="no-scrollbar relative -mx-4 overflow-x-auto px-4 md:-mx-6 md:px-6"
    >
      <TabsList
        variant="line"
        aria-label="Care categories"
        className="static gap-4 p-0 group-data-horizontal/tabs:h-11"
      >
        {CARE_CATEGORIES.map(({ slug, label }) => (
          <TabsTrigger
            key={slug}
            value={slug}
            data-category={slug}
            className="h-full flex-none rounded-none border-0 border-b border-stroke/50 px-4 text-lg leading-[1.2] font-normal text-muted-foreground after:bg-support group-data-horizontal/tabs:after:bottom-0 data-active:font-semibold data-active:text-primary"
          >
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
    </div>
  )
}
