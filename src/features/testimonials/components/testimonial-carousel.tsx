"use client"

import { CarouselDots } from "@/components/shared/carousel-dots"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { useAutoplay } from "@/hooks/use-autoplay"
import { useCarouselIndex } from "@/hooks/use-carousel-index"

import type { Testimonial } from "../types"
import { TestimonialCard } from "./testimonial-card"

export function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const { setApi, selectedIndex, scrollTo } = useCarouselIndex()
  const autoplay = useAutoplay()

  return (
    <div className="flex flex-col">
      <CarouselDots
        count={testimonials.length}
        activeIndex={selectedIndex}
        onSelect={scrollTo}
        label="Testimonial slides"
        className="mr-5 self-end sm:mr-10 lg:mr-36.5"
      />

      <Carousel setApi={setApi} opts={{ align: "start", loop: true }} plugins={[autoplay]}>
        <CarouselContent className="-ml-5 py-7 pr-5">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={testimonial.id} className="basis-[85%] pl-5 sm:basis-95.75">
              <TestimonialCard
                testimonial={testimonial}
                isActive={index === selectedIndex}
                onSelect={() => scrollTo(index)}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
