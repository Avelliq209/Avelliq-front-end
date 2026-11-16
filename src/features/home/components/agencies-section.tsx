import Image from "next/image"

import careAgencies from "@/assets/images/home/care-agencies.jpg"
import { CheckListItem } from "@/components/shared/check-list-item"
import { ComingSoonButton } from "@/components/shared/coming-soon-button"
import { EyebrowBadge } from "@/components/shared/eyebrow-badge"
import { Section } from "@/components/shared/section"
import { SectionTitle } from "@/components/shared/section-title"

import { AGENCY_FEATURES, AGENCY_STEPS } from "../data/content"

const IMAGE_ALT = "A care agency team"

export function AgenciesSection() {
  return (
    <Section className="bg-avelliq-bg-green-light">
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-1 overflow-hidden rounded-[16px] lg:grid-cols-2">
          <div className="flex flex-col items-start justify-center bg-avelliq-text-white px-5 py-9.75 md:p-9.75">
            <div className="mx-auto flex max-w-[90%] flex-col items-center text-center sm:max-w-[80%] lg:max-w-full lg:items-start lg:text-start">
              <EyebrowBadge className="mb-5">For Care Agencies &amp; Companies</EyebrowBadge>
              <SectionTitle className="mb-3.5">Grow your care business with Avelliq.</SectionTitle>
              <p className="mb-10 text-[15px] font-normal text-avelliq-text-grey sm:max-w-[90%] md:max-w-[70%] 2xl:text-base">
                Connect your company with customers looking for reliable lifestyle care and
                household services. Build your business presence, manage your team and keep your
                operations organized, all from one platform.
              </p>
            </div>

            <Image
              src={careAgencies}
              alt={IMAGE_ALT}
              height={602}
              width={650}
              className="mt-5 mb-15 block h-140 w-auto zoom-60 rounded-[16px] object-cover object-[0%_10%] text-[8px] sm:zoom-70 md:zoom-100 lg:hidden"
            />

            <ul className="mb-12.5 grid grid-cols-2 items-start gap-5.5">
              {AGENCY_STEPS.map((step) => (
                <CheckListItem key={step} className="font-medium">
                  {step}
                </CheckListItem>
              ))}
            </ul>

            <ComingSoonButton variant="brand" size="cta" withArrow>
              Register Your Agency
            </ComingSoonButton>
          </div>

          <Image
            src={careAgencies}
            alt={IMAGE_ALT}
            height={602}
            width={650}
            className="hidden h-full w-full object-cover object-[0%_10%] text-[8px] lg:block"
          />
        </div>

        <ul className="grid grid-cols-2 gap-2 gap-y-4 sm:gap-4 lg:grid-cols-4 xl:gap-6 xl:gap-y-6">
          {AGENCY_FEATURES.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="flex h-full flex-col gap-3 rounded-xl border-[.5px] border-avelliq-border-brown-light bg-avelliq-text-white p-4 text-start xl:p-7"
            >
              <Icon aria-hidden="true" className="size-6 shrink-0 stroke-2 text-avelliq-primary-green" />
              <h3 className="text-lg font-semibold text-avelliq-bg-green-dark">{title}</h3>
              <p className="text-[15px] font-normal text-avelliq-text-grey 2xl:text-sm">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
