import Image from "next/image"

import { Reveal } from "@/components/motion/reveal"
import { ComingSoonButton } from "@/components/shared/coming-soon-button"
import { Section } from "@/components/shared/section"
import { SectionHeading } from "@/components/shared/section-heading"
import { cn } from "@/lib/utils"

import { SUPPORT_CHANNELS } from "../data/content"
import type { SupportChannel } from "../types"

function ChannelIcon({ icon }: Pick<SupportChannel, "icon">) {
  if ("src" in icon) {
    return (
      <span aria-hidden="true" className="flex size-6 shrink-0 items-center justify-center">
        <Image src={icon} alt="" />
      </span>
    )
  }

  const Icon = icon
  return <Icon aria-hidden="true" strokeWidth={1.5} className="size-6 shrink-0 text-error" />
}

export function SupportSection() {
  return (
    <Section className="flex flex-col gap-10 bg-sand">
      <SectionHeading
        eyebrow="Active Emergency & Support Line"
        title="We are Here to Help, 24/7"
        description="Our dedicated trust & safety rapid response unit responds to all support tickets and notifications in less than 2 hours."
        descriptionClassName="max-w-150"
      />
      <Reveal as="ul" stagger={0.12} className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {SUPPORT_CHANNELS.map(({ icon, title, description, ctaLabel, emphasis }) => (
          <li
            key={title}
            className="flex h-full flex-col items-start gap-4 rounded-[16px] border border-stroke bg-white p-6 lg:p-10"
          >
            <div className="flex items-center gap-3">
              <ChannelIcon icon={icon} />
              <h3 className="font-heading text-lg font-medium text-support">{title}</h3>
            </div>
            <p className="text-sm leading-[1.45] text-ink">{description}</p>
            <ComingSoonButton
              variant={emphasis === "primary" ? "default" : "outline"}
              size="pill-lg"
              className={cn(
                "px-7 font-inter text-[15px] font-semibold",
                emphasis === "secondary" && "border border-stroke bg-linen text-primary"
              )}
            >
              {ctaLabel}
            </ComingSoonButton>
          </li>
        ))}
      </Reveal>
    </Section>
  )
}
