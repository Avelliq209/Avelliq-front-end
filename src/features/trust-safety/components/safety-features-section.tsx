import type { ComponentProps } from "react"

import { Reveal } from "@/components/motion/reveal"
import { Section } from "@/components/shared/section"
import { SectionHeading } from "@/components/shared/section-heading"

import type { TrustFeature } from "../types"
import { FeatureCard } from "./feature-card"

interface SafetyFeaturesSectionProps {
  heading: ComponentProps<typeof SectionHeading>
  features: TrustFeature[]
}

export function SafetyFeaturesSection({ heading, features }: SafetyFeaturesSectionProps) {
  return (
    <Section className="flex flex-col gap-10 bg-sand">
      <SectionHeading {...heading} />
      <Reveal as="ul" stagger={0.12} className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {features.map((feature) => (
          <li key={feature.title}>
            <FeatureCard feature={feature} />
          </li>
        ))}
      </Reveal>
    </Section>
  )
}
