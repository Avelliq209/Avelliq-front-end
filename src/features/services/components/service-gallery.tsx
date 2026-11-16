"use client"

import { useLenis } from "lenis/react"
import { useRef, useState } from "react"

import { CarouselDots } from "@/components/shared/carousel-dots"
import { PhotoCard } from "@/components/shared/photo-card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { useAutoplay } from "@/hooks/use-autoplay"
import { useCarouselIndex } from "@/hooks/use-carousel-index"
import { useScrollLock } from "@/hooks/use-scroll-lock"
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap"
import { DESKTOP_MOTION, getPinStart } from "@/lib/motion"

import { SERVICE_DETAILS } from "../data/service-details"
import { ServiceDetail } from "./service-detail"

const SCROLL_DRIVEN_BREAKPOINT = { [DESKTOP_MOTION]: { active: false } }
const LAST_INDEX = SERVICE_DETAILS.length - 1

export function ServiceGallery() {
  const rootRef = useRef<HTMLDivElement>(null)
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null)
  const [scrollIndex, setScrollIndex] = useState<number | null>(null)
  const { setApi, selectedIndex, scrollTo } = useCarouselIndex()
  const autoplay = useAutoplay({ breakpoints: SCROLL_DRIVEN_BREAKPOINT })
  const setScrollLocked = useScrollLock()
  const lenis = useLenis()

  useGSAP(
    () => {
      const root = rootRef.current
      const section = root?.closest("section")
      const viewport = root?.querySelector<HTMLElement>("[data-slot=carousel-content]")
      const track = viewport?.firstElementChild as HTMLElement | null
      if (!section || !viewport || !track) return

      gsap.matchMedia().add(DESKTOP_MOTION, () => {
        const distance = () => track.scrollWidth - viewport.clientWidth

        const tween = gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: () => getPinStart(section),
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => setScrollIndex(Math.round(self.progress * LAST_INDEX)),
          },
        })
        scrollTriggerRef.current = tween.scrollTrigger ?? null
        setScrollIndex(0)

        return () => {
          scrollTriggerRef.current = null
          setScrollIndex(null)
        }
      })
    },
    { scope: rootRef }
  )

  const handleDotSelect = (index: number) => {
    const trigger = scrollTriggerRef.current
    if (!trigger) {
      scrollTo(index)
      return
    }
    const target = trigger.start + (trigger.end - trigger.start) * (index / LAST_INDEX)
    if (lenis) lenis.scrollTo(target)
    else window.scrollTo({ top: target, behavior: "smooth" })
  }

  return (
    <div ref={rootRef} className="flex flex-col gap-5">
      <CarouselDots
        count={SERVICE_DETAILS.length}
        activeIndex={scrollIndex ?? selectedIndex}
        onSelect={handleDotSelect}
        label="Service gallery slides"
        className="self-end"
      />

      <Carousel
        setApi={setApi}
        opts={{ align: "start", loop: true, breakpoints: SCROLL_DRIVEN_BREAKPOINT }}
        plugins={[autoplay]}
        className="overflow-hidden rounded-l-[30px]"
      >
        <CarouselContent className="-ml-5 py-5">
          {SERVICE_DETAILS.map((detail) => (
            <CarouselItem key={detail.slug} className="basis-[85%] pl-5 sm:basis-auto">
              <Dialog onOpenChange={setScrollLocked}>
                <DialogTrigger
                  aria-label={`Learn more about ${detail.title}`}
                  className="group block w-full cursor-pointer rounded-[24px] outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                >
                  <PhotoCard
                    image={detail.thumbnail}
                    alt={detail.thumbnailAlt}
                    title={detail.label}
                    withOverlay
                    sizes="(min-width: 640px) 500px, 85vw"
                    className="aspect-square w-full rounded-[24px] sm:w-125 [&_img]:transition-transform [&_img]:duration-700 [&_img]:ease-out group-hover:[&_img]:scale-105"
                    titleClassName="bottom-8 left-8 text-2xl font-medium"
                  />
                </DialogTrigger>
                <DialogContent
                  showCloseButton={false}
                  className="overflow-hidden rounded-[24px] p-0 shadow-[0px_24px_48px_0px_rgba(76,90,61,0.16)] xs:max-w-[90%] sm:max-w-[80%] lg:max-w-[70%]"
                >
                  <ServiceDetail detail={detail} />
                </DialogContent>
              </Dialog>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
