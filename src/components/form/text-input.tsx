import type { ComponentProps } from "react"

import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

import { FIELD_CONTROL_CLASS } from "./field-control"

export function TextInput({ className, ...props }: ComponentProps<typeof Input>) {
  return <Input className={cn(FIELD_CONTROL_CLASS, "h-10.5", className)} {...props} />
}
