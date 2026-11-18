"use client"

import { useField, type FieldHelperProps, type FieldInputProps } from "formik"
import type { ReactNode } from "react"

import { FieldShell, type FieldControlRenderProps, type FieldShellBaseProps } from "../field-shell"

export interface FormikFieldBaseProps extends FieldShellBaseProps {
  name: string
}

export interface FormikFieldControlProps<TValue> extends FieldControlRenderProps {
  field: FieldInputProps<TValue>
  helpers: FieldHelperProps<TValue>
}

interface FormikFieldProps<TValue> extends FormikFieldBaseProps {
  orientation?: "vertical" | "horizontal"
  children: (props: FormikFieldControlProps<TValue>) => ReactNode
}

export function FormikField<TValue>({ name, children, ...shellProps }: FormikFieldProps<TValue>) {
  const [field, meta, helpers] = useField<TValue>(name)
  const error = meta.touched ? meta.error : undefined

  return (
    <FieldShell {...shellProps} name={name} error={error}>
      {(controlProps) => children({ field, helpers, ...controlProps })}
    </FieldShell>
  )
}
