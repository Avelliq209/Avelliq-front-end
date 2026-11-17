import Image from "next/image"

import faqIllustration from "@/assets/images/faq/faq-illustration.svg"
import { HeroMotion } from "@/components/motion/hero-motion"
import { EyebrowBadge } from "@/components/shared/eyebrow-badge"
import { HeroActions } from "@/components/shared/hero-actions"
import { HeroTexture } from "@/components/shared/hero-texture"
import { Section } from "@/components/shared/section"

export function FaqHeroSection() {
  return (
    <Section className="relative isolate overflow-hidden">
      <HeroTexture />

      <HeroMotion className="flex flex-col items-center gap-10 xl:flex-row xl:justify-between xl:gap-16">
        <div className="flex w-full flex-col gap-8 xl:max-w-157">
          <div className="flex flex-col gap-5">
            <div data-hero-fade>
              <EyebrowBadge animate={false}>Real People, Real Support</EyebrowBadge>
            </div>
            <div className="flex flex-col gap-4">
              <h1
                data-hero-title
                className="font-heading text-[38px] leading-[1.2] font-medium tracking-[0.504px] text-primary md:text-[44px] lg:text-5xl xl:max-w-153"
              >
                Questions Are Part of Choosing Well.
              </h1>
              <p data-hero-fade className="text-base leading-[1.4] text-ink">
                Find straightforward answers about Avelliq, safety, hiring, and joining our
                professional community.
              </p>
            </div>
          </div>
          <HeroActions />
        </div>

        <div className="flex w-full justify-center xl:w-auto xl:shrink-0">
          <div data-hero-media className="w-full max-w-80 sm:max-w-100 xl:max-w-125">
            <Image
              src={faqIllustration}
              alt="Illustration of people sitting around large FAQ letters with laptops, phones, and speech bubbles"
              priority
              className="h-auto w-full"
            />
          </div>
        </div>
      </HeroMotion>
    </Section>
  )
}
