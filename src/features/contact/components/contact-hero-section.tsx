import Image from "next/image"

import supportAgentImage from "@/assets/images/contact/support-agent.png"
import { HeroMotion } from "@/components/motion/hero-motion"
import { Magnetic } from "@/components/motion/magnetic"
import { ComingSoonButton } from "@/components/shared/coming-soon-button"
import { EyebrowBadge } from "@/components/shared/eyebrow-badge"
import { HeroTexture } from "@/components/shared/hero-texture"
import { Section } from "@/components/shared/section"

export function ContactHeroSection() {
  return (
    <Section className="relative isolate overflow-hidden pb-0 lg:pb-0">
      <HeroTexture />

      <HeroMotion
        parallax={false}
        className="flex flex-col items-center gap-10 xl:flex-row xl:items-end xl:gap-23">
        <div className="flex w-full flex-col gap-8 xl:max-w-157 xl:self-center xl:pb-17.5">
          <div className="flex flex-col gap-5">
            <div data-hero-fade>
              <EyebrowBadge animate={false}>Real People, Real Support</EyebrowBadge>
            </div>
            <div className="flex flex-col gap-4">
              <h1
                data-hero-title
                className="font-heading text-[38px] leading-[1.2] font-medium tracking-[0.504px] text-primary md:text-[44px] lg:text-5xl xl:max-w-153"
              >
                We&rsquo;re here whenever you need us.
              </h1>
              <p data-hero-fade className="text-base leading-[1.4] text-ink">
                Questions about finding care, joining Avelliq, or anything in between? Send a
                message and our team will get back to you.
              </p>
            </div>
          </div>
          <div data-hero-fade className="flex flex-wrap items-center gap-3">
            <Magnetic>
              <ComingSoonButton size="pill" withArrow>
                Find Care Near You
              </ComingSoonButton>
            </Magnetic>
            <Magnetic>
              <ComingSoonButton variant="outline" size="pill-lg">
                Join as a Professional
              </ComingSoonButton>
            </Magnetic>
          </div>
        </div>

        <div className="flex w-full justify-center xl:w-auto xl:flex-1">
          <div data-hero-media className="w-full max-w-80 sm:max-w-100 xl:-mt-19 xl:max-w-126">
            <Image
              src={supportAgentImage}
              alt="A smiling support agent wearing a headset and holding a tablet"
              priority
              placeholder="blur"
              sizes="(min-width: 1280px) 505px, (min-width: 425px) 400px, 320px"
              className="h-auto w-full"
            />
          </div>
        </div>
      </HeroMotion>
    </Section>
  )
}
