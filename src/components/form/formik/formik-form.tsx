"use client"

import { FormikProvider, type FormikContextType, type FormikValues } from "formik"
import { useEffect, useRef, type ComponentProps } from "react"

type FormikFormProps<TValues extends FormikValues> = Omit<
  ComponentProps<"form">,
  "onSubmit" | "onReset"
> & {
  formik: FormikContextType<TValues>
}

export function FormikForm<TValues extends FormikValues>({
  formik,
  children,
  ...props
}: FormikFormProps<TValues>) {
  const formRef = useRef<HTMLFormElement>(null)
  const handledSubmitCount = useRef(0)
  const { isSubmitting, submitCount, isValid } = formik

  useEffect(() => {
    if (isSubmitting || submitCount === handledSubmitCount.current) return
    handledSubmitCount.current = submitCount
    if (!isValid) {
      formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus()
    }
  }, [isSubmitting, submitCount, isValid])

  return (
    <FormikProvider value={formik}>
      <form
        ref={formRef}
        noValidate
        aria-busy={isSubmitting}
        onSubmit={formik.handleSubmit}
        onReset={formik.handleReset}
        {...props}
      >
        {children}
      </form>
    </FormikProvider>
  )
}
