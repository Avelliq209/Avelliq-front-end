import Image from "next/image"

import agenciesTeam from "@/assets/images/home/agencies-team.jpg"
import { CheckListItem } from "@/components/shared/check-list-item"
import { ComingSoonButton } from "@/components/shared/coming-soon-button"
import { EyebrowBadge } from "@/components/shared/eyebrow-badge"
import { Section } from "@/components/shared/section"
import { SectionDescription } from "@/components/shared/section-description"
import { SectionTitle } from "@/components/shared/section-title"

import { AGENCY_FEATURES, AGENCY_STEPS } from "../data/content"

export function AgenciesSection() {
  return (
    <Section className="flex flex-col gap-8">
      <div className="grid grid-cols-1 overflow-hidden rounded-[16px] lg:grid-cols-2">
        <div className="flex flex-col justify-center gap-10 bg-white px-6 py-12 sm:px-9.75 lg:min-h-150.5 lg:py-10">
          <div className="flex flex-col gap-5">
            <EyebrowBadge>For Care Agencies &amp; Companies</EyebrowBadge>
            <div className="flex flex-col gap-3.5">
              <SectionTitle>Grow your care business with Avelliq.</SectionTitle>
              <SectionDescription className="max-w-123">
                Connect your company with customers looking for reliable lifestyle care and
                household services. Build your business presence, manage your team and keep your
                operations organized, all from one platform.
              </SectionDescription>
            </div>
          </div>

          <ul className="grid grid-cols-1 gap-x-8.5 gap-y-5.75 sm:grid-cols-[max-content_max-content]">
            {AGENCY_STEPS.map((step) => (
              <CheckListItem key={step} className="text-base font-medium" iconClassName="size-5.25">
                {step}
              </CheckListItem>
            ))}
          </ul>

          <ComingSoonButton size="pill" withArrow className="w-fit font-inter">
            Register Your Agency
          </ComingSoonButton>
        </div>

        <div className="relative min-h-80">
          <Image
            src={agenciesTeam}
            alt="A care agency team planning together"
            fill
            sizes="(min-width: 1024px) 650px, 100vw"
            placeholder="blur"
            className="object-cover"
          />
        </div>
      </div>

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {AGENCY_FEATURES.map(({ icon, title, description }) => (
          <li
            key={title}
            className="flex flex-col gap-3 rounded-[12px] border-[0.5px] border-stroke bg-white p-7"
          >
            <Image src={icon} alt="" width={24} height={24} />
            <h3 className="font-heading text-lg font-medium text-primary">{title}</h3>
            <p className="font-inter text-sm leading-[1.45] text-ink">{description}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
