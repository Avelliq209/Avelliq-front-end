import { CountUp } from "@/components/motion/count-up"
import { Reveal } from "@/components/motion/reveal"
import { Section } from "@/components/shared/section"
import { SectionHeading } from "@/components/shared/section-heading"

import { TRUST_STATS } from "../data/content"

export function TrustStatsSection() {
  return (
    <Section className="flex flex-col gap-10">
      <SectionHeading
        eyebrow="By The Numbers"
        title="A closer look at the trust systems supporting every booking."
        align="start"
        titleClassName="text-muted-foreground"
      />
      <Reveal
        as="ul"
        stagger={0.1}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {TRUST_STATS.map(({ figure, label, description }) => (
          <li
            key={label}
            className="flex flex-col gap-2 rounded-[16px] border-[0.5px] border-stroke bg-white p-6"
          >
            <p className="font-heading text-4xl font-semibold text-primary">
              {typeof figure === "string" ? figure : <CountUp {...figure} />}
            </p>
            <h3 className="text-base font-medium text-support">{label}</h3>
            <p className="text-sm leading-normal text-ink">{description}</p>
          </li>
        ))}
      </Reveal>
    </Section>
  )
}
