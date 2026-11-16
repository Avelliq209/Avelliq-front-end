import { Check } from "lucide-react"
import Image from "next/image"

import heroImage from "@/assets/images/home/hero.png"
import { EyebrowBadge } from "@/components/shared/eyebrow-badge"
import { siteConfig } from "@/config/site"

import { HeroSearch } from "./hero-search"

export function HeroSection() {
  return (
    <section className="relative flex flex-col">
      <Image
        src={heroImage}
        alt=""
        height={680}
        width={1440}
        priority
        draggable={false}
        className="absolute z-0 h-full min-h-screen w-full object-cover object-[100%_0%]"
      />

      <div className="z-10 flex h-full min-h-screen w-full flex-col items-start justify-center gap-8 bg-[linear-gradient(271.68deg,rgba(255,255,255,0.03)_1.02%,#FAF9F6_45.06%)] px-5 py-15 sm:px-10 md:bg-[linear-gradient(271.68deg,rgba(255,255,255,0.03)_25.02%,#FAF9F6_55.06%)] md:py-20 lg:px-17.5">
        <div className="flex max-w-114 flex-col gap-5 2xl:max-w-160">
          <EyebrowBadge className="py-2.5 md:px-4">Background-checked Professionals</EyebrowBadge>
          <div className="space-y-4">
            <h1 className="text-[43px] leading-[130%] font-bold tracking-wide text-avelliq-bg-green-dark md:text-[46px] lg:text-[52px]">
              Find trusted help for everyday life.
            </h1>
            <p className="text-start text-base font-normal text-avelliq-text-grey">
              {siteConfig.description}
            </p>
          </div>
        </div>

        <div className="space-y-3.75">
          <HeroSearch />
          <p className="flex items-center gap-1.5 text-sm font-normal text-avelliq-bg-green-dark">
            <Check aria-hidden="true" className="size-3.5 shrink-0" />
            Browse profiles free. Connect when you&apos;re ready.
          </p>
        </div>
      </div>
    </section>
  )
}
