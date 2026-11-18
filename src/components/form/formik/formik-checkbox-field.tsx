"use client"

import { Checkbox } from "@/components/ui/checkbox"

import { CHECKBOX_CONTROL_CLASS } from "../field-control"
import { FormikField, type FormikFieldBaseProps } from "./formik-field"

export function FormikCheckboxField(props: FormikFieldBaseProps) {
  return (
    <FormikField<boolean> {...props} orientation="horizontal">
      {({ field, helpers, id, invalid, describedBy }) => (
        <Checkbox
          id={id}
          name={field.name}
          checked={Boolean(field.value)}
          onCheckedChange={(checked) => helpers.setValue(checked)}
          onBlur={() => helpers.setTouched(true)}
          aria-invalid={invalid}
          aria-describedby={describedBy}
          className={CHECKBOX_CONTROL_CLASS}
        />
      )}
    </FormikField>
  )
}
