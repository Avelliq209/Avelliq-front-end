import Image from "next/image"
import Link from "next/link"

import questionCircleIcon from "@/assets/icons/question-circle.svg"
import wavyPattern from "@/assets/patterns/wavy.png"
import { Reveal } from "@/components/motion/reveal"
import { Section } from "@/components/shared/section"
import { SectionTitle } from "@/components/shared/section-title"
import { Button } from "@/components/ui/button"
import { ROUTES } from "@/config/site"
import { FaqAccordion } from "@/features/faq/components/faq-accordion"
import { FAQS } from "@/features/faq/data/faqs"

import { FAQ_SECTION_ID } from "../data/content"

export function FaqPreviewSection() {
  return (
    <Section
      id={FAQ_SECTION_ID}
      aria-labelledby={`${FAQ_SECTION_ID}-title`}
      className="relative isolate scroll-mt-28 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-size-[191px_191px] opacity-[0.015]"
        style={{ backgroundImage: `url(${wavyPattern.src})` }}
      />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <SectionTitle
            id={`${FAQ_SECTION_ID}-title`}
            className="text-[28px] leading-[1.3] tracking-normal text-support md:text-[32px] lg:text-[32px]"
          >
            Do you have more questions?
          </SectionTitle>
          <Button
            variant="white"
            nativeButton={false}
            render={<Link href={ROUTES.faqs} />}
            className="h-10 shrink-0 gap-1.25 rounded-full px-8 font-inter text-sm"
          >
            Read the FAQs
            <Image src={questionCircleIcon} alt="" className="size-4 p-[2.3px]" />
          </Button>
        </div>
        <Reveal y={32}>
          <FaqAccordion faqs={FAQS} />
        </Reveal>
      </div>
    </Section>
  )
}
