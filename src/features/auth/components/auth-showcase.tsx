"use client"

import Image from "next/image"
import Link from "next/link"

import { CarouselDots } from "@/components/shared/carousel-dots"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { ROUTES, siteConfig } from "@/config/site"
import { useAutoplay } from "@/hooks/use-autoplay"
import { useCarouselIndex } from "@/hooks/use-carousel-index"

import { AUTH_SLIDES } from "../data/content"
import type { AuthTagline } from "../types"

export function AuthShowcase({ tagline }: { tagline: AuthTagline }) {
  const { setApi, selectedIndex, scrollTo } = useCarouselIndex()
  const autoplay = useAutoplay({ delay: 5000 })

  return (
    <div className="@container relative aspect-[680/860] w-[min(100%,calc((100dvh-2.5rem)*0.7907))]">
      <Carousel setApi={setApi} opts={{ loop: true }} plugins={[autoplay]} aria-label="Avelliq services">
        <CarouselContent className="ml-0">
          {AUTH_SLIDES.map(({ image, alt }, index) => (
            <CarouselItem key={image.src} className="pl-0">
              <div className="relative aspect-[680/860]">
                <Image
                  src={image}
                  alt={alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 0px"
                  placeholder="blur"
                  priority={index === 0}
                  className="object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <Link
        href={ROUTES.home}
        aria-label={`${siteConfig.name} home`}
        className="absolute top-[2.6%] left-[5%] flex w-[7.6cqw] items-center justify-center rounded-[1cqw] bg-primary py-[0.8cqw] font-inter text-[4.9cqw] leading-[1.2] font-semibold text-white outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
      >
        A
      </Link>

      <CarouselDots
        variant="dot"
        count={AUTH_SLIDES.length}
        activeIndex={selectedIndex}
        onSelect={scrollTo}
        label="Choose slide"
        className="absolute top-[3.5%] left-[44%]"
      />

      <div className="pointer-events-none absolute bottom-[1.4%] left-[1.8%] flex w-[83%] flex-col gap-3 rounded-b-2xl bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(76,90,61,0.8)_144%)] p-[4.7cqw]">
        <p className="font-heading text-[clamp(2rem,7cqw,3rem)] leading-[1.2] font-medium tracking-[0.504px] text-white">
          {tagline.title}
        </p>
        <p className="text-base leading-[1.4] text-white/70">{tagline.description}</p>
      </div>
    </div>
  )
}
