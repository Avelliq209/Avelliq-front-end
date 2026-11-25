import { Reveal } from "@/components/motion/reveal"
import { ComingSoonButton } from "@/components/shared/coming-soon-button"
import { EyebrowBadge } from "@/components/shared/eyebrow-badge"
import { Section } from "@/components/shared/section"
import { SectionDescription } from "@/components/shared/section-description"
import { SectionTitle } from "@/components/shared/section-title"

import { MATCH_FACTORS } from "../data/content"
import { MatchProfileCard } from "./match-profile-card"

export function MatchSection() {
  return (
    <Section className="grid grid-cols-1 items-start gap-5 lg:grid-cols-2 xl:grid-cols-[476fr_451fr_333fr]">
      <div className="flex flex-col gap-5 lg:col-span-2 xl:col-span-1">
        <EyebrowBadge>The Right Match</EyebrowBadge>
        <div className="flex flex-col items-start gap-4.5">
          <SectionTitle>
            More than a search <br className="hidden xl:block" />
            Find your match.
          </SectionTitle>
          <SectionDescription>
            <strong className="font-semibold">Every household</strong> is different, and every
            person is different. Avelliq helps you discover professionals{" "}
            <strong className="font-semibold">based on what actually matters to you,</strong> not
            just what service you selected.
          </SectionDescription>
          <ComingSoonButton size="pill" withArrow className="font-inter">
            Start Your Search
          </ComingSoonButton>
        </div>
      </div>

      <Reveal y={80} delay={0.1}>
        <MatchProfileCard />
      </Reveal>

      <Reveal y={80} delay={0.25} className="rounded-[12px] bg-sage p-5 text-primary">
        <h3 className="mb-4 font-heading text-xl leading-[1.2] font-medium">Match Factors</h3>
        <ul className="list-disc ps-5.25 font-inter text-sm leading-[2.88]">
          {MATCH_FACTORS.map((factor) => (
            <li key={factor}>{factor}</li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
