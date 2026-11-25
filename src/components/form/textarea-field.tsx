"use client"

import type { ComponentProps } from "react"
import type { FieldPath, FieldValues } from "react-hook-form"

import { FormField, type FormFieldBaseProps } from "./form-field"
import { TextareaInput } from "./textarea-input"

type TextareaFieldProps<T extends FieldValues, TName extends FieldPath<T>> = FormFieldBaseProps<
  T,
  TName
> &
  Omit<ComponentProps<typeof TextareaInput>, "name" | "value" | "onChange" | "onBlur" | "id">

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
        <TextareaInput
          {...textareaProps}
          {...field}
          value={field.value ?? ""}
          id={id}
          aria-invalid={invalid}
          aria-describedby={describedBy}
          className="min-h-30 bg-neutral-100 p-4"
        />
      )}
    </FormField>
  )
}
