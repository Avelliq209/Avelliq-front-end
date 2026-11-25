import type { ComponentProps } from "react"

import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

import { FIELD_CONTROL_CLASS } from "./field-control"

export function TextareaInput({ className, ...props }: ComponentProps<typeof Textarea>) {
  return <Textarea className={cn(FIELD_CONTROL_CLASS, "min-h-25 resize-y py-3", className)} {...props} />
}
