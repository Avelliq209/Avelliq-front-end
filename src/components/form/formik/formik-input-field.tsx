"use client"

import type { ComponentProps } from "react"

import { TextInput } from "../text-input"
import { FormikField, type FormikFieldBaseProps } from "./formik-field"

type FormikInputFieldProps = FormikFieldBaseProps &
  Omit<ComponentProps<typeof TextInput>, "name" | "value" | "onChange" | "onBlur" | "id">

export function FormikInputField({
  name,
  label,
  optional,
  description,
  hint,
  className,
  ...inputProps
}: FormikInputFieldProps) {
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
        <TextInput
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
