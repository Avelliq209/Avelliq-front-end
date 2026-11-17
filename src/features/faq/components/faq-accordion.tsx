import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

import type { Faq } from "../types"

interface FaqAccordionProps {
  faqs: Faq[]
  className?: string
}

export function FaqAccordion({ faqs, className }: FaqAccordionProps) {
  return (
    <Accordion defaultValue={[faqs[0]?.question]} className={cn("gap-5", className)}>
      {faqs.map(({ question, answer }) => (
        <AccordionItem
          key={question}
          value={question}
          className="border-b-[0.5px] border-stroke px-3 py-5 last:border-b-0"
        >
          <AccordionTrigger className="items-center gap-4 rounded-[8px] py-0 font-heading text-lg leading-[1.2] font-medium text-ink-strong hover:no-underline aria-expanded:text-primary md:text-xl **:data-[slot=accordion-trigger-icon]:size-6 **:data-[slot=accordion-trigger-icon]:text-ink-strong">
            {question}
          </AccordionTrigger>
          <AccordionContent className="pt-6 pb-0 text-base leading-[1.4] text-ink">
            <p>{answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
