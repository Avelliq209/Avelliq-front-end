"use client"

import type { ReactNode } from "react"
import {
  Controller,
  type Control,
  type ControllerRenderProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form"

import { Field, FieldDescription, FieldError, FieldLabel } from "@/components/ui/field"
import { cn } from "@/lib/utils"

export interface FormFieldBaseProps<T extends FieldValues, TName extends FieldPath<T>> {
  control: Control<T>
  name: TName
  label: ReactNode
  optional?: boolean
  description?: ReactNode
  className?: string
}

export interface FieldControlProps<T extends FieldValues, TName extends FieldPath<T>> {
  field: ControllerRenderProps<T, TName>
  id: string
  invalid: boolean
  describedBy?: string
}

interface FormFieldProps<T extends FieldValues, TName extends FieldPath<T>>
  extends FormFieldBaseProps<T, TName> {
  orientation?: "vertical" | "horizontal"
  children: (props: FieldControlProps<T, TName>) => ReactNode
}

export function FormField<T extends FieldValues, TName extends FieldPath<T>>({
  control,
  name,
  label,
  optional = false,
  description,
  orientation = "vertical",
  className,
  children,
}: FormFieldProps<T, TName>) {
  const id = `field-${name}`
  const errorId = `${id}-error`
  const descriptionId = description ? `${id}-description` : undefined
  const isHorizontal = orientation === "horizontal"

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        const invalid = fieldState.invalid
        const describedBy =
          [descriptionId, invalid ? errorId : undefined].filter(Boolean).join(" ") || undefined

        const fieldLabel = (
          <FieldLabel
            htmlFor={id}
            className={cn(
              "text-sm font-semibold text-primary",
              isHorizontal && "min-w-0 flex-1 text-[13px] leading-normal font-normal text-ink"
            )}
          >
            {label}
            {optional && <span className="text-muted-foreground">(Optional)</span>}
          </FieldLabel>
        )

        const control = children({ field, id, invalid, describedBy })

        return (
          <Field data-invalid={invalid} className={cn("gap-2", className)}>
            {isHorizontal ? (
              <div className="flex items-center gap-3">
                {control}
                {fieldLabel}
              </div>
            ) : (
              <>
                {fieldLabel}
                {control}
              </>
            )}
            {description && (
              <FieldDescription id={descriptionId}>{description}</FieldDescription>
            )}
            <FieldError id={errorId} errors={[fieldState.error]} className="text-[13px]" />
          </Field>
        )
      }}
    />
  )
}
