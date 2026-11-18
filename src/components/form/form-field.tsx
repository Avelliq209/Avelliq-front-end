"use client"

import type { ReactNode } from "react"
import {
  Controller,
  type Control,
  type ControllerRenderProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form"

import { FieldShell, type FieldControlRenderProps, type FieldShellBaseProps } from "./field-shell"

export interface FormFieldBaseProps<T extends FieldValues, TName extends FieldPath<T>>
  extends FieldShellBaseProps {
  control: Control<T>
  name: TName
}

export interface FieldControlProps<T extends FieldValues, TName extends FieldPath<T>>
  extends FieldControlRenderProps {
  field: ControllerRenderProps<T, TName>
}

interface FormFieldProps<T extends FieldValues, TName extends FieldPath<T>>
  extends FormFieldBaseProps<T, TName> {
  orientation?: "vertical" | "horizontal"
  children: (props: FieldControlProps<T, TName>) => ReactNode
}

export function FormField<T extends FieldValues, TName extends FieldPath<T>>({
  control,
  name,
  children,
  ...shellProps
}: FormFieldProps<T, TName>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FieldShell {...shellProps} name={name} error={fieldState.error?.message}>
          {(controlProps) => children({ field, ...controlProps })}
        </FieldShell>
      )}
    />
  )
}
