"use client"

import type { FieldPath, FieldValues } from "react-hook-form"

import { FormField, type FormFieldBaseProps } from "./form-field"
import { SelectInput, type SelectOption } from "./select-input"

type SelectFieldProps<T extends FieldValues, TName extends FieldPath<T>> = FormFieldBaseProps<
  T,
  TName
> & {
  options: readonly SelectOption[]
  placeholder?: string
  disabled?: boolean
}

export function SelectField<T extends FieldValues, TName extends FieldPath<T>>({
  control,
  name,
  label,
  optional,
  description,
  className,
  options,
  placeholder,
  disabled,
}: SelectFieldProps<T, TName>) {
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
        <SelectInput
          id={id}
          name={field.name}
          options={options}
          value={field.value ?? null}
          onValueChange={(value) => field.onChange(value ?? "")}
          onBlur={field.onBlur}
          inputRef={field.ref}
          placeholder={placeholder}
          disabled={disabled ?? field.disabled}
          aria-invalid={invalid}
          aria-describedby={describedBy}
        />
      )}
    </FormField>
  )
}
