import Image from "next/image"

import { TRUST_HIGHLIGHTS } from "../data/content"

export function TrustHighlights() {
  return (
    <section
      aria-label="Why families trust Avelliq"
      className="grid grid-cols-1 divide-y-[0.3px] divide-stroke border-y-[0.3px] border-stroke bg-white md:grid-cols-3 md:divide-x-[0.3px] md:divide-y-0"
    >
      {TRUST_HIGHLIGHTS.map(({ icon, title, description }) => (
        <div key={title} className="flex items-center gap-4.75 px-5 py-8 sm:px-10 xl:px-17.5">
          <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-sand">
            <Image src={icon} alt="" width={24} height={24} />
          </span>
          <div className="flex flex-col gap-1.5 leading-[1.2]">
            <p className="font-heading text-[22px] font-medium text-ink-strong">{title}</p>
            <p className="text-[15px] text-muted-foreground">{description}</p>
          </div>
        </div>
      ))}
    </section>
  )
}
