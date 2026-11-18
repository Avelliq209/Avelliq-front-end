"use client"

import type { ReactNode } from "react"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { useScrollLock } from "@/hooks/use-scroll-lock"

import { SERVICE_INSIGHTS_BY_SLUG } from "../data/service-insights"
import { ServiceInsight } from "./service-insight"

interface ServiceInsightDialogProps {
  slug: string
  trigger: ReactNode
  triggerClassName?: string
}

export function ServiceInsightDialog({ slug, trigger, triggerClassName }: ServiceInsightDialogProps) {
  const setScrollLocked = useScrollLock()
  const insight = SERVICE_INSIGHTS_BY_SLUG.get(slug)
  if (!insight) return null

  return (
    <Dialog onOpenChange={setScrollLocked}>
      <DialogTrigger className={triggerClassName}>{trigger}</DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="max-w-[calc(100%-2rem)] gap-0 overflow-hidden rounded-[24px] bg-background p-0 text-ink ring-0 shadow-[0px_24px_48px_0px_rgba(15,77,66,0.16)] sm:max-w-250"
      >
        <ServiceInsight insight={insight} />
      </DialogContent>
    </Dialog>
  )
}
