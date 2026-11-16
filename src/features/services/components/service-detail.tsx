import { CircleX } from "lucide-react"
import Image from "next/image"

import { ComingSoonButton } from "@/components/shared/coming-soon-button"
import { IconTile } from "@/components/shared/icon-tile"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DialogClose,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

import type { ServiceDetail as ServiceDetailData } from "../types"

const AUDIENCE_BACKGROUNDS = ["bg-[#E8F4F0]", "bg-[#F5EFE6]"]

export function ServiceDetail({ detail }: { detail: ServiceDetailData }) {
  return (
    <div className="relative flex h-[90vh] flex-col bg-background">
      <DialogHeader className="relative overflow-hidden">
        <Image
          src={detail.image}
          alt={detail.imageAlt}
          width={960}
          height={260}
          className="absolute size-full object-cover object-top text-[8px]"
        />
        <div className="relative flex w-full flex-col space-y-1.5 bg-[linear-gradient(20deg,rgba(15,77,66,0.9)_20%,rgba(15,77,66,0.4)_55%,rgba(15,77,66,0)_75%)] px-5 pt-15 pb-10 xl:px-10 xl:pt-20">
          <DialogClose
            render={
              <Button
                size="icon-sm"
                aria-label="Close"
                className="absolute top-6 right-6 z-10 rounded-full bg-white hover:bg-white"
              />
            }
          >
            <CircleX className="size-3 text-primary" />
          </DialogClose>
          <Badge className="mb-5 h-auto rounded-full bg-[#FFF4D6] px-3 py-1 text-[11px] font-bold text-primary uppercase">
            {detail.badge}
          </Badge>
          <DialogTitle className="text-[2rem] font-bold text-white xl:text-4xl">
            {detail.title}
          </DialogTitle>
          <DialogDescription className="text-[15px] font-medium text-sand xl:text-base">
            {detail.subtitle}
          </DialogDescription>
        </div>
      </DialogHeader>

      <div className="flex flex-1 flex-col overflow-y-auto p-5 scrollbar-thin xl:p-10">
        <section className="mb-9 space-y-3">
          <h3 className="text-base font-bold text-primary xl:text-lg">
            {detail.overviewTitle}
          </h3>
          <p className="text-[15px] font-normal text-muted-foreground">{detail.overview}</p>
        </section>

        <section className="mb-9 space-y-4">
          <h3 className="text-base font-bold text-primary xl:text-lg">
            {detail.inclusionsTitle}
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {detail.inclusions.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex size-full flex-col gap-5 rounded-[12px] border-[.5px] border-stroke p-5"
              >
                <IconTile>
                  <Icon aria-hidden="true" className="size-5.5 stroke-[1.5] md:size-6" />
                </IconTile>
                <h4 className="text-[15px] font-medium text-primary xl:text-base">
                  {title}
                </h4>
                <p className="text-[13px] font-normal text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="space-y-9 divide-y-[.5px] divide-stroke">
          <div className="grid grid-cols-1 gap-10 pb-9 md:grid-cols-2">
            {detail.audiences.map(({ title, icon: Icon, points }, index) => (
              <section
                key={title}
                className={cn(
                  "size-full space-y-4 rounded-[16px] p-4 xl:p-6",
                  AUDIENCE_BACKGROUNDS[index % AUDIENCE_BACKGROUNDS.length]
                )}
              >
                <h3 className="text-[15px] font-bold text-primary xl:text-base">
                  {title}
                </h3>
                <ul className="flex flex-col gap-4">
                  {points.map((point) => (
                    <li key={point.title} className="flex gap-3">
                      <IconTile className="rounded-[6px] p-1.5">
                        <Icon aria-hidden="true" className="size-3" />
                      </IconTile>
                      <div className="flex flex-col">
                        <h4 className="text-sm font-semibold text-primary">
                          {point.title}
                        </h4>
                        <p className="text-[13px] font-normal text-muted-foreground">
                          {point.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ComingSoonButton variant="outline-primary" size="pill-sm" className="font-semibold">
              Join as a Professional
            </ComingSoonButton>
            <ComingSoonButton size="pill-sm" className="font-semibold">
              {detail.ctaLabel}
            </ComingSoonButton>
          </div>
        </div>
      </div>
    </div>
  )
}
