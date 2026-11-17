"use client"

import type { ComponentProps } from "react"
import type { FieldPath, FieldValues } from "react-hook-form"

import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

import { FIELD_CONTROL_CLASS } from "./field-control"
import { FormField, type FormFieldBaseProps } from "./form-field"

type TextareaFieldProps<T extends FieldValues, TName extends FieldPath<T>> = FormFieldBaseProps<
  T,
  TName
> &
  Omit<ComponentProps<typeof Textarea>, "name" | "value" | "onChange" | "onBlur" | "id">

export function TextareaField<T extends FieldValues, TName extends FieldPath<T>>({
  control,
  name,
  label,
  optional,
  description,
  className,
  ...textareaProps
}: TextareaFieldProps<T, TName>) {
  return (
    <FormField
      control={control}
      name={name}
      label={label}
      optional={optional}
      description={description}
      className={className}
    >
      {({ field, id, invalid, describedBy }) => (
        <Textarea
          {...textareaProps}
          {...field}
          value={field.value ?? ""}
          id={id}
          aria-invalid={invalid}
          aria-describedby={describedBy}
          className={cn(FIELD_CONTROL_CLASS, "min-h-30 resize-y bg-neutral-100 p-4")}
        />
      )}
    </FormField>
  )
}
