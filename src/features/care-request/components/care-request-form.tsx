"use client"

import { Calendar, MapPin, X } from "lucide-react"
import { useFormik } from "formik"
import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"

import { FieldRow } from "@/components/form/field-row"
import { FormikCheckboxGroupField } from "@/components/form/formik/formik-checkbox-group-field"
import { FormikForm } from "@/components/form/formik/formik-form"
import { FormikInputField } from "@/components/form/formik/formik-input-field"
import { FormikSelectField } from "@/components/form/formik/formik-select-field"
import { FormikTextareaField } from "@/components/form/formik/formik-textarea-field"
import { SubmitButton } from "@/components/form/submit-button"
import { Button } from "@/components/ui/button"
import { DialogClose, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { authHref } from "@/features/auth/utils"
import { SERVICE_OPTIONS } from "@/features/services/data/service-options"
import { toIsoDate } from "@/lib/date"
import {
  careRequestValidationSchema,
  createCareRequestInitialValues,
  type CareRequestFormValues,
} from "@/schemas/validation-schemas"

import {
  HOURS_PER_SESSION_OPTIONS,
  NUMBER_OF_CHILDREN_OPTIONS,
  TIME_OF_DAY_OPTIONS,
} from "../data/options"
import { saveCareRequest } from "../storage"

export function CareRequestForm({ serviceSlug }: { serviceSlug: string }) {
  const router = useRouter()
  const titleRef = useRef<HTMLHeadingElement>(null)

  const formik = useFormik<CareRequestFormValues>({
    initialValues: createCareRequestInitialValues(serviceSlug),
    validationSchema: careRequestValidationSchema,
    onSubmit: (values) => {
      saveCareRequest(values)
      router.push(authHref("sign-up", "client"))
    },
  })

  useEffect(() => {
    titleRef.current?.focus()
  }, [])

  return (
    <FormikForm
      formik={formik}
      aria-label="Tell us what you need"
      className="flex max-h-[90dvh] min-h-0 flex-col"
    >
      <header className="flex items-start justify-between gap-4 border-b border-stroke px-5 py-5 sm:px-8 sm:py-6">
        <div className="flex flex-col gap-1">
          <DialogTitle
            ref={titleRef}
            tabIndex={-1}
            className="font-heading text-xl leading-[1.2] font-medium text-primary outline-none"
          >
            Tell us what you need
          </DialogTitle>
          <DialogDescription className="max-w-120 text-sm leading-[1.4] text-ink">
            Fill in the form below. It helps us find professional care that aligns with your needs.
          </DialogDescription>
        </div>
        <DialogClose
          render={
            <Button
              size="icon"
              aria-label="Close"
              className="shrink-0 rounded-full bg-background text-ink hover:bg-secondary"
            />
          }
        >
          <X aria-hidden="true" className="size-4" />
        </DialogClose>
      </header>

      <div data-lenis-prevent className="flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto p-5 sm:p-8">
        <FieldRow className="gap-5">
          <FormikSelectField
            name="serviceType"
            label="Service Type"
            placeholder="Select a service"
            options={SERVICE_OPTIONS}
          />
          <FormikSelectField
            name="hoursPerSession"
            label="How many hours per session?"
            placeholder="Select hours"
            options={HOURS_PER_SESSION_OPTIONS}
          />
        </FieldRow>
        <FieldRow className="gap-5">
          <FormikSelectField
            name="numberOfChildren"
            label="How many children?"
            placeholder="Select number"
            options={NUMBER_OF_CHILDREN_OPTIONS}
          />
          <FormikInputField
            name="childrenAges"
            label="Ages of children"
            optional
            placeholder="e.g. 2 and 5 years old"
          />
        </FieldRow>
        <FieldRow className="gap-5">
          <FormikInputField
            name="location"
            label="Your Location"
            placeholder="Brooklyn, NY"
            autoComplete="address-level2"
            startIcon={MapPin}
          />
          <FormikInputField
            name="startDate"
            label="Preferred Start Date"
            type="date"
            min={toIsoDate(new Date())}
            startIcon={Calendar}
          />
        </FieldRow>
        <FormikCheckboxGroupField
          name="timeOfDay"
          legend="Time-of-Day Availability Required"
          options={TIME_OF_DAY_OPTIONS}
        />
        <FormikTextareaField
          name="specialRequirements"
          label="Special Requirements"
          optional
          placeholder="Any allergies, special needs, routines or preferences we should know about..."
        />
      </div>

      <footer className="flex items-center border-t border-stroke bg-background px-5 py-5 sm:px-8 sm:py-6">
        <SubmitButton
          size="pill-lg"
          isLoading={formik.isSubmitting}
          loadingLabel="Continuing..."
          className="w-full px-7 font-semibold sm:w-auto"
        >
          Continue to Sign Up
        </SubmitButton>
      </footer>
    </FormikForm>
  )
}
