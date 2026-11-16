import Image from "next/image"

import caregiverWithSenior from "@/assets/images/home/caregiver-with-senior.png"
import { ComingSoonButton } from "@/components/shared/coming-soon-button"
import { EyebrowBadge } from "@/components/shared/eyebrow-badge"
import { Section } from "@/components/shared/section"
import { SectionTitle } from "@/components/shared/section-title"

import { HOW_IT_WORKS_STEPS } from "../data/content"

const IMAGE_ALT = "A caregiver helping an elderly woman"

export function HowItWorksSection() {
  return (
    <Section className="grid grid-cols-1 gap-10 bg-avelliq-bg-green-dark lg:grid-cols-[1fr_1.5fr]">
      <Image
        src={caregiverWithSenior}
        height={602}
        width={517}
        alt={IMAGE_ALT}
        className="hidden h-full w-full rounded-[16px] object-cover object-top lg:block"
      />

      <div className="space-y-5">
        <div className="flex max-w-[90%] flex-col items-center gap-5 justify-self-center text-center md:max-w-[80%] lg:max-w-full lg:items-start lg:justify-self-auto lg:text-start">
          <EyebrowBadge tone="dark">How It Works</EyebrowBadge>
          <SectionTitle className="text-avelliq-text-white">
            The right support, without the run-around.
          </SectionTitle>
        </div>

        <Image
          src={caregiverWithSenior}
          height={602}
          width={517}
          alt={IMAGE_ALT}
          className="mx-auto my-20 block h-168 w-auto zoom-50 rounded-[16px] object-cover object-top text-[8px] sm:zoom-60 md:zoom-100 lg:hidden"
        />

        <ol className="space-y-3.5">
          {HOW_IT_WORKS_STEPS.map(({ title, description }, index) => (
            <li
              key={title}
              className="flex items-start justify-start gap-4.5 border-t-[.5px] border-t-[#FFFFFF99] pt-5 text-avelliq-text-white"
            >
              <span className="text-[20px] text-[#FFF4D6]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="space-y-2">
                <h3 className="text-[20px] leading-[140%] font-medium 2xl:text-2xl 2xl:font-semibold">
                  {title}
                </h3>
                <p className="text-[15px] font-normal text-avelliq-bg-green-light 2xl:text-base">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <ComingSoonButton variant="brand-soft" size="cta" withArrow className="mt-3">
          Start Your Search
        </ComingSoonButton>
      </div>
    </Section>
  )
}
