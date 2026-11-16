import Image from "next/image"
import Link from "next/link"

import heroTexture from "@/assets/images/textures/hero-linen.jpg"
import { ComingSoonButton } from "@/components/shared/coming-soon-button"
import { EyebrowBadge } from "@/components/shared/eyebrow-badge"
import { PhotoCard } from "@/components/shared/photo-card"
import { Section } from "@/components/shared/section"

import { HERO_CATEGORIES } from "../data/content"
import { HeroCarousel } from "./hero-carousel"

export function HeroSection() {
  return (
    <Section className="relative isolate flex flex-col gap-20 overflow-hidden">
      <Image
        src={heroTexture}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover opacity-[0.02]"
      />

      <div className="flex flex-col items-center gap-12 xl:flex-row xl:gap-15">
        <div className="flex w-full flex-col gap-8 xl:max-w-139">
          <div className="flex flex-col gap-5">
            <EyebrowBadge>Background-checked Professionals</EyebrowBadge>
            <div className="flex flex-col gap-4">
              <h1 className="font-heading text-[40px] leading-[1.3] font-medium text-primary md:text-[46px] lg:text-[52px]">
                A world where dependable support is part of everyday life.
              </h1>
              <p className="text-base leading-[1.4] text-ink">
                Connect people with trusted professionals and make the experience of finding,
                coordinating and maintaining support easier.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <ComingSoonButton size="pill-lg">Find Care</ComingSoonButton>
            <ComingSoonButton variant="outline" size="pill-lg">
              Join as a Professional
            </ComingSoonButton>
          </div>
        </div>

        <div className="flex w-full justify-center xl:w-160 xl:justify-start xl:pl-18.75">
          <HeroCarousel />
        </div>
      </div>

      <ul className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
        {HERO_CATEGORIES.map((category) => (
          <li key={category.title}>
            <Link
              href={category.href}
              className="block rounded-[12px] shadow-[0px_0px_4px_0px_rgba(148,125,103,0.25)] transition-transform hover:-translate-y-0.5"
            >
              <PhotoCard
                image={category.image}
                alt={category.alt}
                title={category.title}
                sizes="(min-width: 1024px) 244px, (min-width: 640px) 33vw, 50vw"
                className="aspect-244/215 rounded-[12px]"
                titleClassName="[text-shadow:0_1px_3px_rgba(0,0,0,0.35)]"
              />
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  )
}
