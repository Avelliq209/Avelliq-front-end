"use client"

import type { ReactNode } from "react"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { useScrollLock } from "@/hooks/use-scroll-lock"

import type { ServiceInsight as ServiceInsightData } from "../types"
import { ServiceInsight } from "./service-insight"

interface ServiceInsightDialogProps {
  insight: ServiceInsightData
  trigger: ReactNode
  triggerClassName?: string
}

export function ServiceInsightDialog({
  insight,
  trigger,
  triggerClassName,
}: ServiceInsightDialogProps) {
  const setScrollLocked = useScrollLock()

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
