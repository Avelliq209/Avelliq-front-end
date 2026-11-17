import { Reveal } from "@/components/motion/reveal"
import { Section } from "@/components/shared/section"
import { SectionHeading } from "@/components/shared/section-heading"

import { SCREENING_STEPS } from "../data/content"

export function ScreeningSection() {
  return (
    <Section className="flex flex-col gap-10 lg:gap-14">
      <SectionHeading
        eyebrow="Our Screening Standards"
        title="How We Screen Care Professionals"
        description="Fewer than 10% of applicants successfully clear our multi-layer screening protocol. Here is the step-by-step standard every professional completes."
      />
      <Reveal
        as="ol"
        stagger={0.12}
        className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-12.5"
      >
        {SCREENING_STEPS.map(({ title, description }, index) => (
          <li key={title} className="flex flex-col gap-4">
            <div className="flex items-center gap-3" aria-hidden="true">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-[18px] bg-primary font-inter text-lg font-bold text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="h-px flex-1 bg-stroke" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-heading text-2xl leading-8 font-medium text-primary">
                <span className="sr-only">Step {index + 1}: </span>
                {title}
              </h3>
              <p className="text-lg leading-7 text-ink lg:text-xl">{description}</p>
            </div>
          </li>
        ))}
      </Reveal>
    </Section>
  )
}
