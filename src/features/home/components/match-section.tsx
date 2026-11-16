import Image from "next/image"

import topRatedProfessional from "@/assets/images/home/top-rated-professional.jpg"
import { EyebrowBadge } from "@/components/shared/eyebrow-badge"
import { Section } from "@/components/shared/section"
import { SectionTitle } from "@/components/shared/section-title"

import { MATCH_FACTORS } from "../data/content"

export function MatchSection() {
  return (
    <Section>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-[1fr_1fr] lg:grid-cols-[1.15fr_1.15fr_.7fr]">
        <div className="flex h-full w-full max-w-[90%] flex-col items-center justify-center justify-self-center text-center md:col-span-2 md:max-w-[80%] lg:col-span-1 lg:max-w-full lg:items-start lg:justify-self-auto lg:text-start">
          <EyebrowBadge className="mb-5">The Right Match</EyebrowBadge>
          <SectionTitle className="mb-3.5">
            More than a search <br /> Find your match.
          </SectionTitle>
          <p className="mb-10 text-[15px] font-normal text-avelliq-text-grey 2xl:text-base">
            Every household is different, and every person is different. Avelliq helps you
            discover professionals based on what actually matters to you, not just what service
            you selected.
          </p>
        </div>

        <div className="h-full w-full rounded-[12px] bg-avelliq-text-white p-5">
          <div className="grid grid-cols-2">
            <Image
              src={topRatedProfessional}
              alt="A top rated professional"
              height={201}
              width={201}
              draggable={false}
              className="h-full w-50.25 rounded-[8px] object-cover text-[8px] select-none"
            />
          </div>
        </div>

        <div className="rounded-[12px] bg-avelliq-bg-green-light">
          <div className="h-full space-y-4 p-5 text-sm font-normal text-avelliq-primary-green">
            <h3 className="text-xl font-medium text-avelliq-bg-green-dark">Match Factors</h3>
            <ul className="list-disc pl-3 leading-[191%]">
              {MATCH_FACTORS.map((factor) => (
                <li key={factor}>{factor}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}
