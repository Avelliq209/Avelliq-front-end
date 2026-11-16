import { EyebrowBadge } from "@/components/shared/eyebrow-badge"
import { Section } from "@/components/shared/section"
import { SectionDescription } from "@/components/shared/section-description"
import { SectionTitle } from "@/components/shared/section-title"

import { TESTIMONIALS } from "../data/testimonials"
import { TestimonialCarousel } from "./testimonial-carousel"

export function TestimonialsSection() {
  return (
    <Section className="flex flex-col gap-10 pr-0 sm:pr-0 lg:pr-0">
      <div className="mx-auto flex max-w-169 flex-col items-center gap-5 pr-5 text-center sm:pr-10 lg:pr-17.5">
        <EyebrowBadge>User Testimonial</EyebrowBadge>
        <div className="flex flex-col gap-3.5">
          <SectionTitle>Trusted By Our Users</SectionTitle>
          <SectionDescription>
            See what families and households value when finding help through Avelliq.
          </SectionDescription>
        </div>
      </div>

      <TestimonialCarousel testimonials={TESTIMONIALS} />
    </Section>
  )
}
