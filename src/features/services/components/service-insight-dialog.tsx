"use client"

import { useState, type ReactNode } from "react"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { CareRequestForm } from "@/features/care-request/components/care-request-form"
import { useScrollLock } from "@/hooks/use-scroll-lock"
import { cn } from "@/lib/utils"

import { SERVICE_INSIGHTS_BY_SLUG } from "../data/service-insights"
import { ServiceInsight } from "./service-insight"

type DialogStep = "insight" | "care-request"

interface ServiceInsightDialogProps {
  slug: string
  trigger: ReactNode
  triggerClassName?: string
}

export function ServiceInsightDialog({ slug, trigger, triggerClassName }: ServiceInsightDialogProps) {
  const setScrollLocked = useScrollLock()
  const [step, setStep] = useState<DialogStep>("insight")
  const insight = SERVICE_INSIGHTS_BY_SLUG.get(slug)
  if (!insight) return null

  return (
    <Dialog
      onOpenChange={setScrollLocked}
      onOpenChangeComplete={(open) => {
        if (!open) setStep("insight")
      }}
    >
      <DialogTrigger className={triggerClassName}>{trigger}</DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className={cn(
          "max-w-[calc(100%-2rem)] gap-0 overflow-hidden rounded-[24px] p-0 text-ink ring-0 shadow-[0px_24px_48px_0px_rgba(15,77,66,0.16)]",
          step === "insight" ? "bg-background sm:max-w-250" : "bg-white sm:max-w-180"
        )}
      >
        {step === "insight" ? (
          <ServiceInsight insight={insight} onContinue={() => setStep("care-request")} />
        ) : (
          <CareRequestForm serviceSlug={slug} />
        )}
      </DialogContent>
    </Dialog>
  )
}
