import { IconTile } from "@/components/shared/icon-tile"

import { TRUST_HIGHLIGHTS } from "../data/content"

export function TrustHighlights() {
  return (
    <section
      aria-label="Why families trust Avelliq"
      className="grid grid-cols-1 divide-x-0 divide-y-[.3px] divide-avelliq-border-brown-light border-y-[.3px] border-avelliq-border-brown-light md:grid-cols-3 md:divide-x-[.3px] md:divide-y-0"
    >
      {TRUST_HIGHLIGHTS.map(({ icon: Icon, title, description }) => (
        <div
          key={title}
          className="flex flex-col items-center gap-4 px-10 py-8 md:py-6 lg:flex-row lg:px-17.5 2xl:py-9.75"
        >
          <IconTile className="rounded-full p-4 xl:p-5">
            <Icon aria-hidden="true" className="size-5 stroke-2 md:stroke-[1.5] xl:size-6" />
          </IconTile>
          <div className="text-center lg:text-start">
            <p className="text-[20px] font-medium text-avelliq-bg-green-dark 2xl:text-[22px]">
              {title}
            </p>
            <p className="text-base font-normal text-[#858486] 2xl:text-[15px]">{description}</p>
          </div>
        </div>
      ))}
    </section>
  )
}
