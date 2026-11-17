"use client"

import type { ComponentProps } from "react"
import type { FieldPath, FieldValues } from "react-hook-form"

import { FormField, type FormFieldBaseProps } from "./form-field"
import { TextInput } from "./text-input"

type InputFieldProps<T extends FieldValues, TName extends FieldPath<T>> = FormFieldBaseProps<
  T,
  TName
> &
  Omit<ComponentProps<typeof TextInput>, "name" | "value" | "onChange" | "onBlur" | "id">

export function InputField<T extends FieldValues, TName extends FieldPath<T>>({
  control,
  name,
  label,
  optional,
  description,
  className,
  ...inputProps
}: InputFieldProps<T, TName>) {
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
        <TextInput
          {...inputProps}
          {...field}
          value={field.value ?? ""}
          id={id}
          aria-invalid={invalid}
          aria-describedby={describedBy}
        />
      )}
    </FormField>
  )
}
