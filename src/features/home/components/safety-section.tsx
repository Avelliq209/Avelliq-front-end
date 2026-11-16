import Image from "next/image"

import { Reveal } from "@/components/motion/reveal"
import { Section } from "@/components/shared/section"
import { SectionTitle } from "@/components/shared/section-title"

import { SAFETY_PILLARS } from "../data/content"

export function SafetySection() {
  return (
    <Section className="flex flex-col gap-10">
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
        <div className="flex max-w-138 flex-col gap-4">
          <Reveal
            as="p"
            y={24}
            className="text-base leading-[1.3] font-medium text-support uppercase lg:text-lg"
          >
            Trust is not a feature. It&apos;s the foundation
          </Reveal>
          <SectionTitle>More clarity at every step.</SectionTitle>
        </div>
        <Reveal
          as="p"
          y={24}
          delay={0.2}
          className="max-w-139 text-base leading-normal text-ink lg:text-lg"
        >
          Avelliq is designed to help you make informed choices through identity checks,
          background screening, transparent profiles, and responsive support.
        </Reveal>
      </div>

      <Reveal
        as="ul"
        stagger={0.12}
        className="grid grid-cols-1 divide-y-[0.3px] divide-stroke overflow-hidden rounded-[12px] border-[0.3px] border-stroke bg-white lg:grid-cols-3 lg:divide-x-[0.3px] lg:divide-y-0"
      >
        {SAFETY_PILLARS.map(({ icon, title, description }) => (
          <li key={title} className="flex flex-col gap-4 p-6">
            <Image src={icon} alt="" width={35} height={35} />
            <div className="flex flex-col gap-1.5">
              <h3 className="font-heading text-2xl leading-[1.2] font-medium text-primary">{title}</h3>
              <p className="text-base leading-[1.53] text-ink">{description}</p>
            </div>
          </li>
        ))}
      </Reveal>
    </Section>
  )
}
