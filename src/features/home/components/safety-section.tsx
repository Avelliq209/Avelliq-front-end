import { Section } from "@/components/shared/section"
import { SectionTitle } from "@/components/shared/section-title"

import { SAFETY_PILLARS } from "../data/content"

export function SafetySection() {
  return (
    <Section className="bg-avelliq-bg-green-light">
      <div className="flex flex-col gap-10">
        <div className="flex items-center justify-between gap-5">
          <div className="max-w-[45%] space-y-4">
            <p className="inline-flex text-[15px] font-medium text-avelliq-bg-green-dark uppercase md:text-base lg:text-lg">
              Trust is not a feature. It&apos;s the foundation
            </p>
            <SectionTitle>More clarity at every step.</SectionTitle>
          </div>
          <p className="max-w-[45%] text-start text-[15px] font-normal text-avelliq-bg-green-dark lg:text-base">
            Avelliq is designed to help you make informed choices through identity checks,
            background screening, transparent profiles, and responsive support.
          </p>
        </div>

        <div className="grid grid-cols-1 divide-y-[.3px] divide-avelliq-border-brown-light overflow-hidden rounded-xl bg-avelliq-text-white lg:grid-cols-3 lg:divide-x-[.3px] lg:divide-y-0">
          {SAFETY_PILLARS.map(({ icon: Icon, title, description }) => (
            <div key={title} className="h-full space-y-4 p-6 text-avelliq-bg-green-dark">
              <Icon aria-hidden="true" className="size-7 shrink-0 stroke-2 md:size-8.5" />
              <div className="space-y-1.5 text-start">
                <h3 className="text-[22px] font-medium 2xl:text-2xl">{title}</h3>
                <p className="text-[15px] leading-[153%] font-normal text-avelliq-text-grey 2xl:text-base">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
