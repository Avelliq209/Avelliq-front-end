import Image from "next/image"

import ctaTenderCare from "@/assets/images/cta-tender-care.png"
import { ComingSoonButton } from "@/components/shared/coming-soon-button"
import { Section } from "@/components/shared/section"
import { SectionTitle } from "@/components/shared/section-title"
import { cn } from "@/lib/utils"

function BannerImage({ className }: { className: string }) {
  return (
    <Image
      src={ctaTenderCare}
      alt="A caregiver holding a heart"
      width={469}
      height={385}
      className={cn("h-auto w-117.25 object-cover text-[8px] 2xl:w-150", className)}
    />
  )
}

export function CtaBanner() {
  return (
    <Section className="pb-30">
      <div className="flex items-center justify-center gap-5 rounded-[16px] bg-avelliq-bg-green-light px-5 md:px-10 xl:px-20">
        <div className="flex max-w-full flex-col items-center justify-center py-8 text-center md:max-w-[50%] md:items-start md:text-start">
          <SectionTitle className="mb-3.5">Find care that feels right</SectionTitle>
          <p className="mb-8 max-w-[80%] text-[15px] font-normal text-avelliq-text-grey 2xl:text-base">
            Whether you need care for your family or personal support for daily lifestyle, or help
            with your pets, Avelliq makes it easier to find professionals who fit your needs.
          </p>

          <BannerImage className="block zoom-70 md:hidden" />

          <div className="flex flex-col items-start gap-3 sm:flex-row md:flex-col lg:flex-row lg:items-center">
            <ComingSoonButton variant="brand" size="cta" withArrow>
              Find Care Near You
            </ComingSoonButton>
            <ComingSoonButton variant="subtle" size="cta" className="z-10">
              Join as a Professional
            </ComingSoonButton>
          </div>
        </div>

        <BannerImage className="hidden md:block" />
      </div>
    </Section>
  )
}
