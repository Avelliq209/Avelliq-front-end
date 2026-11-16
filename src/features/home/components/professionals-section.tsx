import Image from "next/image"

import { ComingSoonButton } from "@/components/shared/coming-soon-button"
import { EyebrowBadge } from "@/components/shared/eyebrow-badge"
import { Section } from "@/components/shared/section"
import { SectionDescription } from "@/components/shared/section-description"
import { SectionTitle } from "@/components/shared/section-title"
import { cn } from "@/lib/utils"

import { PROFESSIONAL_BENEFITS } from "../data/content"

export function ProfessionalsSection() {
  return (
    <Section className="flex flex-col gap-10">
      <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="flex max-w-216 flex-col gap-5">
          <EyebrowBadge className="font-inter">For Professionals</EyebrowBadge>
          <div className="flex flex-col gap-3.5">
            <SectionTitle>Good work should work for you, too.</SectionTitle>
            <SectionDescription className="max-w-167">
              Create a trusted profile, choose the services you offer, set your availability, and
              connect with households that value your expertise.
            </SectionDescription>
          </div>
        </div>
        <ComingSoonButton size="pill-lg" className="shrink-0">
          Join as a Professional
        </ComingSoonButton>
      </div>

      <ul className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {PROFESSIONAL_BENEFITS.map(({ title, description, image, alt, imagePosition }) => (
          <li
            key={title}
            className={cn(
              "flex gap-4 rounded-[16px] bg-white p-4",
              imagePosition === "top" ? "flex-col" : "flex-col-reverse"
            )}
          >
            <div className="relative h-68.25 overflow-hidden rounded-[8px]">
              <Image
                src={image}
                alt={alt}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                placeholder="blur"
                className="object-cover"
              />
            </div>
            <div className="flex min-h-45.75 flex-col gap-2 rounded-[8px] border-[0.5px] border-sand p-4">
              <h3 className="border-b-[0.5px] border-sand py-1.5 font-inter text-lg leading-[1.3] font-semibold text-primary">
                {title}
              </h3>
              <p className="text-base leading-[1.4] text-ink-strong">{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
