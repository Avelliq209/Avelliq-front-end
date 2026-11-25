import { ShieldAlert } from "lucide-react"

import { Reveal } from "@/components/motion/reveal"
import { Section } from "@/components/shared/section"
import { SectionHeading } from "@/components/shared/section-heading"

import { ContactForm } from "./contact-form"

export function ContactFormSection() {
  return (
    <Section className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,543fr)_minmax(0,712fr)] lg:gap-11">
      <div className="flex flex-col gap-8">
        <SectionHeading
          label="Send a message"
          title="Tell us what’s on your mind."
          description="Share a few details and we’ll route your message to the right team. Most replies arrive within one business day."
          align="start"
          className="gap-4"
          labelClassName="font-sans text-base font-medium tracking-normal lg:text-lg"
          descriptionClassName="max-w-120.5 leading-normal lg:text-lg"
        />
        <Reveal
          y={24}
          delay={0.2}
          className="flex max-w-126 flex-col gap-2 rounded-[12px] border-[0.5px] border-stroke-muted bg-white p-5"
        >
          <div className="flex items-center gap-2">
            <ShieldAlert aria-hidden="true" strokeWidth={1.5} className="size-6 text-warning" />
            <h3 className="font-heading text-lg leading-[1.3] font-semibold text-primary">
              Safety concern?
            </h3>
          </div>
          <p className="text-base leading-[1.4] text-ink">
            If anyone is in immediate danger, contact local emergency services first. Then message
            us so the concern can be reviewed promptly.
          </p>
        </Reveal>
      </div>

      <Reveal
        y={48}
        delay={0.1}
        className="rounded-[16px] border-[0.5px] border-sand bg-white p-5 shadow-[0px_0px_2px_0px_rgba(0,0,0,0.08)] sm:p-8"
      >
        <ContactForm />
      </Reveal>
    </Section>
  )
}
