import Image from "next/image"

import ctaThumbsUp from "@/assets/images/cta-thumbs-up.png"
import { Magnetic } from "@/components/motion/magnetic"
import { Reveal } from "@/components/motion/reveal"
import { ComingSoonButton } from "@/components/shared/coming-soon-button"
import { JoinProfessionalButton } from "@/components/shared/join-professional-button"
import { Section } from "@/components/shared/section"
import { SectionTitle } from "@/components/shared/section-title"

export function CtaBanner() {
  return (
    <Section className="py-15">
      <div className="relative flex flex-col overflow-hidden rounded-[16px] bg-sage lg:h-98.5 lg:flex-row lg:items-center">
        <div className="flex flex-col gap-8 px-6 pt-12 lg:w-163 lg:px-0 lg:pt-0 lg:pl-20">
          <div className="flex flex-col gap-3.5">
            <SectionTitle>Find care that feels right</SectionTitle>
            <p className="max-w-123 text-base leading-[1.4] text-muted-foreground">
              Whether you need care for your family or personal support for daily lifestyle, or
              help with your pets, Avelliq makes it easier to find professionals who fit your
              needs.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Magnetic>
              <ComingSoonButton size="pill-sm" withArrow className="font-inter">
                Find Care Near You
              </ComingSoonButton>
            </Magnetic>
            <Magnetic>
              <JoinProfessionalButton variant="white" size="pill-sm" className="font-inter" />
            </Magnetic>
          </div>
        </div>

        <Reveal
          y={120}
          delay={0.2}
          className="relative mx-auto mt-8 h-80 w-full max-w-117 lg:absolute lg:top-3.25 lg:left-187.75 lg:mt-0 lg:h-109.5 lg:w-117"
        >
          <Image
            src={ctaThumbsUp}
            alt="A smiling woman giving a thumbs up"
            fill
            sizes="(min-width: 1024px) 468px, 100vw"
            className="object-cover object-[96%_center]"
          />
        </Reveal>
      </div>
    </Section>
  )
}
