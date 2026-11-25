import Image from "next/image"

import caregiver from "@/assets/images/home/how-it-works-caregiver.jpg"
import { ComingSoonButton } from "@/components/shared/coming-soon-button"
import { EyebrowBadge } from "@/components/shared/eyebrow-badge"
import { Section } from "@/components/shared/section"
import { SectionTitle } from "@/components/shared/section-title"

import { HOW_IT_WORKS_STEPS } from "../data/content"
import { HowItWorksMotion } from "./how-it-works-motion"

export function HowItWorksSection() {
  return (
    <Section id="how-it-works" className="scroll-mt-24 bg-primary">
      <HowItWorksMotion className="flex flex-col items-center justify-between gap-10 xl:flex-row">
        <div
          className="relative aspect-517/602 w-full max-w-129.25 shrink-0 overflow-hidden rounded-[16px]"
        >
          <Image
            src={caregiver}
            alt="A caregiver helping an elderly woman walk"
            fill
            sizes="(min-width: 1024px) 517px, 100vw"
            placeholder="blur"
            className="object-cover"
          />
        </div>

        <div className="flex w-full max-w-185.75 flex-col gap-7.25">
          <div className="flex flex-col gap-5">
            <EyebrowBadge tone="dark">How It Works</EyebrowBadge>
            <SectionTitle className="text-white">
              The right support, without the run-around.
            </SectionTitle>

            <ol className="flex flex-col gap-3.75">
              {HOW_IT_WORKS_STEPS.map(({ title, description }, index) => (
                <li
                  key={title}
                  data-step
                  className="flex gap-4.5 border-t-[0.5px] border-white/60 pt-5"
                >
                  <span className="font-inter text-xl leading-[1.3] font-semibold text-support">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex max-w-150 flex-col gap-2.5">
                    <h3 className="font-heading text-2xl leading-[1.2] font-medium text-white">
                      {title}
                    </h3>
                    <p className="text-base leading-[1.4] text-mint">{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <ComingSoonButton variant="light" size="pill" withArrow className="w-fit">
            Start Your Search
          </ComingSoonButton>
        </div>
      </HowItWorksMotion>
    </Section>
  )
}
