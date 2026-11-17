import { CircleCheckBig } from "lucide-react"
import Image from "next/image"

import heroImage from "@/assets/images/trust-safety/hero-family.jpg"
import { HeroMotion } from "@/components/motion/hero-motion"
import { Magnetic } from "@/components/motion/magnetic"
import { ComingSoonButton } from "@/components/shared/coming-soon-button"
import { EyebrowBadge } from "@/components/shared/eyebrow-badge"
import { HeroTexture } from "@/components/shared/hero-texture"
import { Section } from "@/components/shared/section"

import { HERO_COMMITMENTS } from "../data/content"

export function TrustHeroSection() {
  return (
    <Section className="relative isolate overflow-hidden">
      <HeroTexture />

      <HeroMotion className="flex flex-col items-center gap-12 xl:flex-row xl:gap-23">
        <div className="flex w-full flex-col gap-8 xl:max-w-157">
          <div className="flex flex-col gap-5">
            <div data-hero-fade>
              <EyebrowBadge animate={false}>Always Verified, Always Cared For</EyebrowBadge>
            </div>
            <div className="flex flex-col gap-4">
              <h1
                data-hero-title
                className="font-heading text-[40px] leading-[1.3] font-bold text-primary md:text-[46px] lg:text-[52px] xl:max-w-153"
              >
                Your Safety is Our Single Absolute Priority
              </h1>
              <p data-hero-fade className="text-base leading-[1.4] text-ink">
                Avelliq is built on an unwavering commitment to trust. We combine rigorous
                background screening, continuous performance monitoring, and secure platform
                utilities to deliver safe, transparent, and respectful care experiences for every
                family.
              </p>
              <ul data-hero-fade className="flex flex-col gap-4">
                {HERO_COMMITMENTS.map((commitment) => (
                  <li
                    key={commitment}
                    className="flex items-start gap-3 text-[15px] leading-[1.2] font-medium text-tan"
                  >
                    <CircleCheckBig
                      aria-hidden="true"
                      strokeWidth={1.5}
                      className="size-5 shrink-0 text-primary"
                    />
                    {commitment}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div data-hero-fade className="flex flex-wrap items-center gap-4">
            <Magnetic>
              <ComingSoonButton size="pill-lg">Find Care</ComingSoonButton>
            </Magnetic>
            <Magnetic>
              <ComingSoonButton variant="outline" size="pill-lg">
                Join as a Professional
              </ComingSoonButton>
            </Magnetic>
          </div>
        </div>

        <div className="flex w-full justify-center xl:w-auto xl:flex-1">
          <div
            data-hero-media
            className="relative aspect-square w-full max-w-125 overflow-hidden rounded-[24px]"
          >
            <Image
              src={heroImage}
              alt="A caregiver laughing with a mother and her young son at home"
              fill
              priority
              placeholder="blur"
              sizes="(min-width: 640px) 500px, 100vw"
              className="object-cover object-[70%_center]"
            />
          </div>
        </div>
      </HeroMotion>
    </Section>
  )
}
