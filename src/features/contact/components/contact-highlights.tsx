import Link from "next/link"

import { Reveal } from "@/components/motion/reveal"

import { CONTACT_HIGHLIGHTS } from "../data/content"
import type { ContactHighlight } from "../types"

function HighlightValue({ value, href }: Pick<ContactHighlight, "value" | "href">) {
  const className = "font-inter text-[15px] leading-[1.2] text-ink"
  if (!href) return <p className={className}>{value}</p>

  return (
    <Link
      href={href}
      className={`${className} break-all underline-offset-4 transition-colors hover:text-primary hover:underline`}
    >
      {value}
    </Link>
  )
}

export function ContactHighlights() {
  return (
    <section aria-label="Ways to reach us" className="border-y-[0.3px] border-stroke bg-white">
      <Reveal
        as="ul"
        stagger={0.1}
        className="grid grid-cols-1 divide-y-[0.3px] divide-stroke px-5 sm:px-10 lg:grid-cols-3 lg:divide-x-[0.3px] lg:divide-y-0 lg:px-17.5"
      >
        {CONTACT_HIGHLIGHTS.map(({ icon: Icon, title, value, href }) => (
          <li key={title} className="flex items-center gap-4.75 py-6 lg:py-8 lg:not-first:pl-5">
            <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-background text-primary">
              <Icon aria-hidden="true" strokeWidth={1.5} className="size-6" />
            </span>
            <div className="flex min-w-0 flex-col gap-1.5">
              <h2 className="font-inter text-[22px] leading-[1.2] font-medium text-primary">
                {title}
              </h2>
              <HighlightValue value={value} href={href} />
            </div>
          </li>
        ))}
      </Reveal>
    </section>
  )
}
