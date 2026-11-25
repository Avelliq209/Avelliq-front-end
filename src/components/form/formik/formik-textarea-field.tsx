"use client"

import type { ComponentProps } from "react"

import { TextareaInput } from "../textarea-input"
import { FormikField, type FormikFieldBaseProps } from "./formik-field"

type FormikTextareaFieldProps = FormikFieldBaseProps &
  Omit<ComponentProps<typeof TextareaInput>, "name" | "value" | "onChange" | "onBlur" | "id">

export function FormikTextareaField({
  name,
  label,
  optional,
  description,
  hint,
  className,
  ...textareaProps
}: FormikTextareaFieldProps) {
  return (
    <FormikField<string>
      name={name}
      label={label}
      optional={optional}
      description={description}
      hint={hint}
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
        />
      )}
    </FormikField>
  )
}
