import { Reveal } from "@/components/motion/reveal"
import { Section } from "@/components/shared/section"
import { SectionHeading } from "@/components/shared/section-heading"

import { COMMUNITY_GUIDELINES } from "../data/content"

export function CommunityGuidelinesSection() {
  return (
    <Section className="flex flex-col gap-10">
      <SectionHeading
        eyebrow="Avelliq Standards"
        title="Our Community Guidelines"
        description="A safe, transparent, and healthy environment relies on everyone. We hold our families and caregiving professionals to clear behavioral standards."
      />
      <Reveal
        as="ul"
        stagger={0.1}
        className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2 xl:grid-cols-4"
      >
        {COMMUNITY_GUIDELINES.map(({ title, description }) => (
          <li
            key={title}
            className="flex flex-col gap-3 rounded-[12px] border-[0.5px] border-stroke bg-white p-7"
          >
            <h3 className="font-heading text-lg font-medium text-primary">{title}</h3>
            <p className="text-sm leading-[1.45] text-ink">{description}</p>
          </li>
        ))}
      </Reveal>
    </Section>
  )
}
