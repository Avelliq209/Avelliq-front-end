import { cva, type VariantProps } from "class-variance-authority"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

import type { Faq } from "../types"

const itemVariants = cva("border-b-[0.5px] border-stroke px-3 py-5", {
  variants: {
    variant: {
      preview: "last:border-b-0",
      list: "first:border-t-[0.5px]",
    },
  },
  defaultVariants: { variant: "preview" },
})

const triggerVariants = cva(
  "items-center gap-4 rounded-[8px] py-0 font-heading leading-[1.2] font-medium hover:no-underline **:data-[slot=accordion-trigger-icon]:size-6 **:data-[slot=accordion-trigger-icon]:text-ink-strong",
  {
    variants: {
      variant: {
        preview: "text-lg text-ink-strong aria-expanded:text-primary md:text-xl",
        list: "text-xl text-primary md:text-2xl",
      },
    },
    defaultVariants: { variant: "preview" },
  }
)

interface FaqAccordionProps extends VariantProps<typeof itemVariants> {
  faqs: Faq[]
  defaultOpenFirst?: boolean
  className?: string
}

export function FaqAccordion({
  faqs,
  variant,
  defaultOpenFirst = true,
  className,
}: FaqAccordionProps) {
  const defaultValue = defaultOpenFirst && faqs[0] ? [faqs[0].question] : []

  return (
    <Accordion defaultValue={defaultValue} className={cn("gap-5", className)}>
      {faqs.map(({ question, answer }) => (
        <AccordionItem key={question} value={question} className={itemVariants({ variant })}>
          <AccordionTrigger className={triggerVariants({ variant })}>{question}</AccordionTrigger>
          <AccordionContent className="pt-6 pb-0 text-base leading-[1.4] text-ink">
            <p>{answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
