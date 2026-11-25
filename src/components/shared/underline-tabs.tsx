"use client"

import { useEffect, useRef } from "react"

import { TabsList, TabsTrigger } from "@/components/ui/tabs"

interface UnderlineTabsProps {
  items: readonly { value: string; label: string }[]
  selected: string
  "aria-label": string
}

export function UnderlineTabs({ items, selected, "aria-label": ariaLabel }: UnderlineTabsProps) {
  const scrollerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scroller = scrollerRef.current
    const tab = scroller?.querySelector<HTMLElement>(`[data-tab="${selected}"]`)
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
        aria-label={ariaLabel}
        className="static gap-4 p-0 group-data-horizontal/tabs:h-11"
      >
        {items.map(({ value, label }) => (
          <TabsTrigger
            key={value}
            value={value}
            data-tab={value}
            className="h-full flex-none rounded-none border-0 border-b border-stroke/50 px-4 text-lg leading-[1.2] font-normal text-muted-foreground after:bg-support group-data-horizontal/tabs:after:bottom-0 data-active:font-semibold data-active:text-primary"
          >
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
    </div>
  )
}
