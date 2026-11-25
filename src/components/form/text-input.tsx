import type { LucideIcon } from "lucide-react"
import type { ComponentProps } from "react"

import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

import { FIELD_CONTROL_CLASS } from "./field-control"

type TextInputProps = ComponentProps<typeof Input> & {
  startIcon?: LucideIcon
}

const STRETCHED_PICKER_CLASS =
  "[&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:size-auto [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0"

export function TextInput({ className, startIcon: StartIcon, type, ...props }: TextInputProps) {
  const input = (
    <Input
      type={type}
      className={cn(
        FIELD_CONTROL_CLASS,
        "h-10.5",
        StartIcon && "relative pl-10.5",
        StartIcon && type === "date" && STRETCHED_PICKER_CLASS,
        className
      )}
      {...props}
    />
  )

  if (!StartIcon) return input

  return (
    <div className="relative">
      <StartIcon
        aria-hidden="true"
        strokeWidth={1.75}
        className="pointer-events-none absolute top-1/2 left-4 z-10 size-4.5 -translate-y-1/2 text-muted-foreground"
      />
      {input}
    </div>
  )
}
