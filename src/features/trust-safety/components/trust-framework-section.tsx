import { Reveal } from "@/components/motion/reveal"
import { Section } from "@/components/shared/section"
import { SectionHeading } from "@/components/shared/section-heading"

import { TRUST_PILLARS } from "../data/content"
import { FeatureCard } from "./feature-card"

export function TrustFrameworkSection() {
  return (
    <Section className="flex flex-col gap-10 bg-sand">
      <SectionHeading eyebrow="Avelliq Core Pillars" title="Our Comprehensive Trust Framework" />
      <Reveal as="ul" stagger={0.12} className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {TRUST_PILLARS.map((pillar) => (
          <li key={pillar.title}>
            <FeatureCard feature={pillar} size="lg" />
          </li>
        ))}
      </Reveal>
    </Section>
  )
}
