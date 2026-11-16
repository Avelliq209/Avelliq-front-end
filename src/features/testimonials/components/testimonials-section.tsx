import { EyebrowBadge } from "@/components/shared/eyebrow-badge"
import { Section } from "@/components/shared/section"
import { SectionTitle } from "@/components/shared/section-title"

import { TESTIMONIALS } from "../data/testimonials"
import { TestimonialCarousel } from "./testimonial-carousel"

export function TestimonialsSection() {
  return (
    <Section className="pr-0 sm:pr-0 lg:pr-0">
      <div className="flex flex-col">
        <div className="flex max-w-[90%] flex-col items-center justify-center self-center pr-5 text-center sm:max-w-[80%] sm:pr-10 lg:max-w-full lg:pr-17.5">
          <EyebrowBadge className="mb-5">User Testimonial</EyebrowBadge>
          <SectionTitle className="mb-3.5">Trusted By Our Users</SectionTitle>
          <p className="mb-10 text-[15px] font-normal text-avelliq-text-grey 2xl:text-base">
            See what families and households value when finding help through Avelliq.
          </p>
        </div>

        <TestimonialCarousel testimonials={TESTIMONIALS} />
      </div>
    </Section>
  )
}
