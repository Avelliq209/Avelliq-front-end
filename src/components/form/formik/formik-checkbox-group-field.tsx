"use client"

import { useField } from "formik"
import type { ReactNode } from "react"

import { Checkbox } from "@/components/ui/checkbox"
import { FieldError, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field"
import { cn } from "@/lib/utils"

import { CHECKBOX_CONTROL_CLASS } from "../field-control"
import type { SelectOption } from "../select-input"

interface FormikCheckboxGroupFieldProps {
  name: string
  legend: ReactNode
  options: readonly SelectOption[]
  className?: string
}

export function FormikCheckboxGroupField({
  name,
  legend,
  options,
  className,
}: FormikCheckboxGroupFieldProps) {
  const [field, meta, helpers] = useField<string[]>(name)
  const selected = field.value ?? []
  const error = meta.touched && typeof meta.error === "string" ? meta.error : undefined
  const errorId = `field-${name}-error`

  const toggle = (value: string, checked: boolean) => {
    helpers.setTouched(true, false)
    helpers.setValue(checked ? [...selected, value] : selected.filter((item) => item !== value))
  }

  return (
    <FieldSet
      data-invalid={Boolean(error)}
      aria-describedby={error ? errorId : undefined}
      className={cn("gap-3", className)}
    >
      <FieldLegend className="mb-0 font-heading text-sm font-semibold text-ink data-[variant=legend]:text-sm">
        {legend}
      </FieldLegend>
      <div className="flex flex-wrap gap-x-5 gap-y-3">
        {options.map(({ value, label }, index) => {
          const id = `field-${name}-${value}`
          return (
            <div key={value} className="flex items-center gap-2.5">
              <Checkbox
                id={id}
                name={name}
                value={value}
                checked={selected.includes(value)}
                onCheckedChange={(checked) => toggle(value, checked)}
                aria-invalid={Boolean(error) && index === 0 ? true : undefined}
                className={CHECKBOX_CONTROL_CLASS}
              />
              <FieldLabel htmlFor={id} className="text-sm font-normal text-ink">
                {label}
              </FieldLabel>
            </div>
          )
        })}
      </div>
      <FieldError id={errorId} className="text-[13px]">
        {error}
      </FieldError>
    </FieldSet>
  )
}
