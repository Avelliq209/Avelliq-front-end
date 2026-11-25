import { Reveal } from "@/components/motion/reveal"
import { IconTile } from "@/components/shared/icon-tile"
import { SectionTitle } from "@/components/shared/section-title"

import type { FaqCategory } from "../types"
import { FaqAccordion } from "./faq-accordion"

interface FaqCategorySectionProps {
  category: FaqCategory
  defaultOpenFirst?: boolean
}

export function FaqCategorySection({ category, defaultOpenFirst = false }: FaqCategorySectionProps) {
  const { id, title, description, icon: Icon, faqs } = category
  const titleId = `${id}-title`

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className="flex scroll-mt-28 flex-col gap-8 lg:flex-row lg:justify-between lg:gap-12"
    >
      <div className="flex flex-col gap-5 lg:w-107 lg:shrink-0">
        <Reveal y={24}>
          <IconTile className="bg-leaf p-4.25">
            <Icon aria-hidden="true" strokeWidth={1.5} className="size-8" />
          </IconTile>
        </Reveal>
        <div className="flex flex-col gap-3.5">
          <SectionTitle id={titleId}>{title}</SectionTitle>
          <p className="max-w-82.5 text-base leading-[1.4] text-ink">{description}</p>
        </div>
      </div>
      <Reveal y={32} className="w-full lg:max-w-201">
        <FaqAccordion faqs={faqs} variant="list" defaultOpenFirst={defaultOpenFirst} />
      </Reveal>
    </section>
  )
}
