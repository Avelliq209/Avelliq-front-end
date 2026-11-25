import type { ReactNode } from "react"

import { Field, FieldDescription, FieldError, FieldLabel } from "@/components/ui/field"
import { cn } from "@/lib/utils"

export interface FieldShellBaseProps {
  label: ReactNode
  optional?: boolean
  description?: ReactNode
  hint?: ReactNode
  className?: string
}

export interface FieldControlRenderProps {
  id: string
  invalid: boolean
  describedBy?: string
}

interface FieldShellProps extends FieldShellBaseProps {
  name: string
  error?: string
  orientation?: "vertical" | "horizontal"
  children: (props: FieldControlRenderProps) => ReactNode
}

export function FieldShell({
  name,
  label,
  optional = false,
  description,
  hint,
  error,
  orientation = "vertical",
  className,
  children,
}: FieldShellProps) {
  const id = `field-${name}`
  const errorId = `${id}-error`
  const descriptionId = description ? `${id}-description` : undefined
  const hintId = hint ? `${id}-hint` : undefined
  const invalid = Boolean(error)
  const isHorizontal = orientation === "horizontal"
  const describedBy =
    [hintId, descriptionId, invalid ? errorId : undefined].filter(Boolean).join(" ") || undefined

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

  const control = children({ id, invalid, describedBy })

  return (
    <Field data-invalid={invalid} className={cn("gap-2", className)}>
      {isHorizontal ? (
        <div className="flex items-center gap-3">
          {control}
          {fieldLabel}
        </div>
      ) : (
        <>
          {hint ? (
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              {fieldLabel}
              <span id={hintId} className="font-inter text-xs leading-4.5 text-ink-faint">
                {hint}
              </span>
            </div>
          ) : (
            fieldLabel
          )}
          {control}
        </>
      )}
      {description && <FieldDescription id={descriptionId}>{description}</FieldDescription>}
      <FieldError id={errorId} className="text-[13px]">
        {error}
      </FieldError>
    </Field>
  )
}
