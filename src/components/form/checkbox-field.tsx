"use client"

import type { FieldPath, FieldValues } from "react-hook-form"

import { Checkbox } from "@/components/ui/checkbox"

import { CHECKBOX_CONTROL_CLASS } from "./field-control"
import { FormField, type FormFieldBaseProps } from "./form-field"

export function CheckboxField<T extends FieldValues, TName extends FieldPath<T>>(
  props: FormFieldBaseProps<T, TName>
) {
  return (
    <FormField {...props} orientation="horizontal">
      {({ field, id, invalid, describedBy }) => (
        <Checkbox
          id={id}
          name={field.name}
          checked={Boolean(field.value)}
          onCheckedChange={field.onChange}
          onBlur={field.onBlur}
          inputRef={field.ref}
          disabled={field.disabled}
          aria-invalid={invalid}
          aria-describedby={describedBy}
          className={CHECKBOX_CONTROL_CLASS}
        />
      )}
    </FormField>
  )
}
