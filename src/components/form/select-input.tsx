"use client"

import type { Ref } from "react"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"

import { FIELD_CONTROL_CLASS } from "./field-control"

export interface SelectOption {
  value: string
  label: string
}

export interface SelectInputProps {
  options: readonly SelectOption[]
  value: string | null
  onValueChange: (value: string | null) => void
  onBlur?: () => void
  placeholder?: string
  id?: string
  name?: string
  disabled?: boolean
  inputRef?: Ref<HTMLInputElement>
  className?: string
  "aria-invalid"?: boolean
  "aria-describedby"?: string
}

export function SelectInput({
  options,
  value,
  onValueChange,
  onBlur,
  placeholder,
  id,
  name,
  disabled,
  inputRef,
  className,
  ...ariaProps
}: SelectInputProps) {
  return (
    <Select
      items={options}
      value={value || null}
      onValueChange={onValueChange}
      onOpenChange={(open) => {
        if (!open) onBlur?.()
      }}
      name={name}
      disabled={disabled}
      inputRef={inputRef}
    >
      <SelectTrigger
        id={id}
        className={cn(FIELD_CONTROL_CLASS, "w-full data-[size=default]:h-10.5", className)}
        {...ariaProps}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent alignItemWithTrigger={false}>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value} className="py-2">
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
