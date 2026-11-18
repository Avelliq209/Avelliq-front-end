"use client"

import { useFormik, type FormikValues } from "formik"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import type { AnyObjectSchema } from "yup"

interface UseAuthFormOptions<TValues extends FormikValues> {
  initialValues: TValues
  validationSchema: AnyObjectSchema
  request: (values: TValues) => Promise<void>
  redirectTo: string
  successMessage: string
  errorMessage: string
}

export function useAuthForm<TValues extends FormikValues>({
  initialValues,
  validationSchema,
  request,
  redirectTo,
  successMessage,
  errorMessage,
}: UseAuthFormOptions<TValues>) {
  const router = useRouter()

  return useFormik<TValues>({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await request(values)
        toast.success(successMessage)
        resetForm()
        router.push(redirectTo)
      } catch (error) {
        console.error(errorMessage, error)
        toast.error(errorMessage)
      }
    },
  })
}
