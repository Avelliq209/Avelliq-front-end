import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { Reveal } from "@/components/motion/reveal"
import { ComingSoonButton } from "@/components/shared/coming-soon-button"
import { Section } from "@/components/shared/section"

import { CONTACT_METHODS } from "../data/content"
import type { ContactMethod } from "../types"

const ACTION_CLASS_NAME =
  "group/action inline-flex items-center gap-1 text-sm font-semibold text-primary underline-offset-4 hover:underline"

function MethodAction({ action }: Pick<ContactMethod, "action">) {
  const content = (
    <>
      {action.label}
      <ArrowRight
        aria-hidden="true"
        className="size-4 transition-transform group-hover/action:translate-x-0.5"
      />
    </>
  )

  if (!action.href) {
    return (
      <ComingSoonButton variant="link" className={`${ACTION_CLASS_NAME} h-auto p-0`}>
        {content}
      </ComingSoonButton>
    )
  }

  return (
    <Link href={action.href} className={ACTION_CLASS_NAME}>
      {content}
    </Link>
  )
}

export function ContactMethodsSection() {
  return (
    <Section aria-label="Contact methods" className="bg-sand">
      <Reveal as="ul" stagger={0.12} className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {CONTACT_METHODS.map(({ icon: Icon, eyebrow, value, description, availability, action }) => (
          <li
            key={eyebrow}
            className="flex h-full flex-col items-start gap-5 rounded-[12px] border border-stroke bg-white p-6 shadow-[0px_8px_12px_0px_rgba(15,77,66,0.04)] lg:p-8"
          >
            <div className="flex items-center gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-background text-primary">
                <Icon aria-hidden="true" strokeWidth={1.5} className="size-6" />
              </span>
              <div className="flex min-w-0 flex-col gap-1">
                <h2 className="text-sm font-semibold text-ink-muted uppercase">{eyebrow}</h2>
                <p className="font-heading text-lg font-medium break-all text-primary">{value}</p>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <p className="text-sm leading-normal text-ink">{description}</p>
              <p className="text-xs font-semibold text-tan">{availability}</p>
            </div>
            <MethodAction action={action} />
          </li>
        ))}
      </Reveal>
    </Section>
  )
}
