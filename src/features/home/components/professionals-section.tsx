import Image from "next/image"

import professionalCleaner from "@/assets/images/home/professional-cleaner.png"
import { ComingSoonButton } from "@/components/shared/coming-soon-button"
import { EyebrowBadge } from "@/components/shared/eyebrow-badge"
import { IconTile } from "@/components/shared/icon-tile"
import { Section } from "@/components/shared/section"
import { SectionTitle } from "@/components/shared/section-title"

import { PROFESSIONAL_BENEFITS } from "../data/content"

const IMAGE_ALT = "A professional tidying a bedroom"

export function ProfessionalsSection() {
  return (
    <Section className="grid grid-cols-1 space-y-10 overflow-hidden lg:grid-cols-2">
      <Image
        src={professionalCleaner}
        height={1048}
        width={650}
        alt={IMAGE_ALT}
        className="hidden h-full w-full rounded-tl-[16px] rounded-bl-[16px] object-cover object-right text-[8px] lg:block"
      />

      <div className="space-y-10 rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-[16px] bg-avelliq-bg-brown-light px-5 py-9.75 sm:px-9.75 lg:rounded-tl-none lg:rounded-bl-none">
        <div className="flex max-w-[90%] flex-col items-center gap-5 justify-self-center text-center md:max-w-[80%] lg:max-w-full lg:items-start lg:justify-self-auto lg:text-start">
          <EyebrowBadge>For Professionals</EyebrowBadge>
          <SectionTitle className="text-avelliq-bg-green-dark">
            Good work should work for you, too.
          </SectionTitle>
          <p className="text-base font-normal text-avelliq-text-grey">
            Create a trusted profile, choose the services you offer, set your availability, and
            connect with households that value your expertise.
          </p>
        </div>

        <Image
          src={professionalCleaner}
          height={1048}
          width={650}
          alt={IMAGE_ALT}
          className="mx-auto my-20 block h-220 w-auto zoom-50 rounded-[16px] object-cover object-top-right text-[8px] sm:zoom-60 md:zoom-100 lg:hidden"
        />

        <ul className="space-y-4">
          {PROFESSIONAL_BENEFITS.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="flex gap-2.5 rounded-xl border-[.5px] border-avelliq-border-grey-light bg-avelliq-text-white p-5"
            >
              <IconTile className="p-2.5 md:p-3">
                <Icon aria-hidden="true" className="size-5.5 shrink-0 stroke-2 md:size-6" />
              </IconTile>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-avelliq-bg-green-dark">{title}</h3>
                <p className="text-[15px] font-normal text-avelliq-text-grey 2xl:text-base">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <ComingSoonButton variant="brand" size="cta" withArrow>
          Join as a Professional
        </ComingSoonButton>
      </div>
    </Section>
  )
}
