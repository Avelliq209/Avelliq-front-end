"use client"

import type { ComponentProps } from "react"

import { PasswordInput } from "../password-input"
import { FormikField, type FormikFieldBaseProps } from "./formik-field"

type FormikPasswordFieldProps = FormikFieldBaseProps &
  Omit<ComponentProps<typeof PasswordInput>, "name" | "value" | "onChange" | "onBlur" | "id">

export function FormikPasswordField({
  name,
  label,
  optional,
  description,
  hint,
  className,
  ...inputProps
}: FormikPasswordFieldProps) {
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
        <PasswordInput
          placeholder="••••••••"
          {...inputProps}
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
