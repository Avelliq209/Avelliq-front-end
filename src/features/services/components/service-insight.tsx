import { CircleCheck, CircleX, RefreshCw, Star, type LucideIcon } from "lucide-react"
import Link from "next/link"
import { Fragment } from "react"

import { ButtonArrow } from "@/components/shared/button-arrow"
import { EyebrowBadge } from "@/components/shared/eyebrow-badge"
import { Button } from "@/components/ui/button"
import { DialogClose, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { ROUTES } from "@/config/site"

import type { ServiceInsight as ServiceInsightData } from "../types"

const SCREENING_HREF = `${ROUTES.trustSafety}#screening`

const PROOF_ICONS: { icon: LucideIcon; className: string }[] = [
  { icon: CircleCheck, className: "text-ink-strong/70" },
  { icon: Star, className: "fill-gold text-gold" },
  { icon: RefreshCw, className: "text-ink-strong/70" },
]

function SectionHeading({ children }: { children: string }) {
  return (
    <h3 className="font-heading text-xl leading-[1.2] font-medium text-primary md:text-2xl">
      {children}
    </h3>
  )
}

interface ServiceInsightProps {
  insight: ServiceInsightData
  onContinue: () => void
}

export function ServiceInsight({ insight, onContinue }: ServiceInsightProps) {
  return (
    <div
      data-lenis-prevent
      className="relative flex max-h-[90dvh] flex-col gap-8 overflow-y-auto px-5 pt-16 pb-8 scrollbar-thin sm:px-10 sm:pb-10 lg:gap-12 lg:p-16"
    >
      <DialogClose
        render={
          <Button
            size="icon-lg"
            aria-label="Close"
            className="absolute top-4 right-4 rounded-full border-[0.5px] border-stroke bg-white shadow-[0px_4px_4px_rgba(15,77,66,0.1)] hover:bg-white/90 lg:top-6 lg:right-6"
          />
        }
      >
        <CircleX aria-hidden="true" strokeWidth={1.75} className="size-3.5 text-primary" />
      </DialogClose>

      <header className="flex flex-col items-center gap-4 text-center">
        <EyebrowBadge animate={false} withIcon={false} className="px-3 py-1.5 text-xs font-semibold lg:text-xs">
          {insight.badge}
        </EyebrowBadge>
        <div className="flex flex-col items-center gap-3">
          <DialogTitle className="font-heading text-5xl leading-[1.1] font-bold text-primary md:text-[64px]">
            {insight.stat}
          </DialogTitle>
          <DialogDescription className="max-w-200 font-heading text-xl leading-[1.2] font-medium text-ink-strong md:text-2xl">
            {insight.statement}
          </DialogDescription>
          <p className="text-base leading-[1.3] text-ink-body">{insight.tagline}</p>
        </div>
      </header>

      <Separator className="bg-stroke" />

      <section className="flex flex-col gap-6">
        <SectionHeading>{insight.challengeTitle}</SectionHeading>
        <ul className="grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 lg:grid-cols-4">
          {insight.facts.map(({ value, label }) => (
            <li
              key={value}
              className="flex flex-col gap-3 rounded-[12px] border-[0.5px] border-stroke bg-white p-5"
            >
              <p className="font-heading text-4xl leading-[1.2] font-medium tracking-[0.504px] text-primary lg:text-5xl">
                {value}
              </p>
              <p className="font-inter text-sm leading-5 text-ink-body">{label}</p>
            </li>
          ))}
        </ul>
      </section>

      <Separator className="bg-stroke" />

      <section className="flex flex-col gap-8">
        <SectionHeading>{insight.benefitsTitle}</SectionHeading>
        <ul className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 md:gap-y-10">
          {insight.benefits.map(({ icon: Icon, title, description }) => (
            <li key={title} className="flex items-start gap-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-leaf text-primary">
                <Icon aria-hidden="true" strokeWidth={1.75} className="size-5" />
              </span>
              <div className="flex min-w-0 flex-col gap-1.5">
                <h4 className="font-heading text-xl leading-[1.2] font-medium text-primary">
                  {title}
                </h4>
                <p className="text-sm leading-[1.3] text-ink">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <ul
        aria-label="Avelliq by the numbers"
        className="flex flex-col gap-3 rounded-[12px] border border-stroke bg-tan px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
      >
        {insight.proofPoints.map((point, index) => {
          const { icon: Icon, className } = PROOF_ICONS[index]
          return (
            <Fragment key={point}>
              {index > 0 && (
                <Separator
                  orientation="vertical"
                  aria-hidden="true"
                  className="hidden h-5 self-center bg-stroke sm:block"
                />
              )}
              <li className="flex items-center gap-2 text-sm leading-[1.3] font-semibold text-white">
                <Icon aria-hidden="true" className={`size-4 shrink-0 ${className}`} />
                {point}
              </li>
            </Fragment>
          )
        })}
      </ul>

      <footer className="flex flex-col items-center gap-5 text-center">
        <p className="font-heading text-xl leading-[1.2] font-medium text-ink">
          {insight.closingLine}
        </p>
        <div className="flex flex-col items-center gap-4">
          <Button
            size="pill"
            onClick={onContinue}
            className="h-auto min-h-12 text-base font-normal whitespace-normal"
          >
            {insight.ctaLabel}
            <ButtonArrow />
          </Button>
          <DialogClose
            nativeButton={false}
            render={
              <Link
                href={SCREENING_HREF}
                className="rounded-sm text-sm leading-5 font-semibold text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/50"
              />
            }
          >
            {insight.screeningLinkLabel}
          </DialogClose>
        </div>
      </footer>
    </div>
  )
}
