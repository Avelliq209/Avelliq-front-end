"use client"

import type { ReactNode } from "react"

import { FieldRow } from "@/components/form/field-row"
import { FormikCheckboxField } from "@/components/form/formik/formik-checkbox-field"
import { FormikForm } from "@/components/form/formik/formik-form"
import { FormikInputField } from "@/components/form/formik/formik-input-field"
import { FormikPasswordField } from "@/components/form/formik/formik-password-field"
import { FormikSelectField } from "@/components/form/formik/formik-select-field"
import { SubmitButton } from "@/components/form/submit-button"
import { FieldLegend, FieldSet } from "@/components/ui/field"
import { SERVICE_OPTIONS } from "@/features/services/data/service-options"
import {
  PROFESSIONAL_SIGN_UP_INITIAL_VALUES,
  professionalSignUpValidationSchema,
} from "@/schemas/validation-schemas"

import { simulateAuthRequest } from "../api"
import {
  AVAILABILITY_OPTIONS,
  EXPERIENCE_OPTIONS,
  US_STATE_OPTIONS,
} from "../data/options"
import { useAuthForm } from "../hooks/use-auth-form"
import { authHref } from "../utils"
import { TermsAgreementLabel } from "./terms-agreement-label"

function FormSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <FieldSet className="gap-4">
      <FieldLegend className="mb-0 font-heading text-sm leading-5 font-semibold text-primary data-[variant=legend]:text-sm">
        {title}
      </FieldLegend>
      {children}
    </FieldSet>
  )
}

export function ProfessionalSignUpForm() {
  const formik = useAuthForm({
    initialValues: PROFESSIONAL_SIGN_UP_INITIAL_VALUES,
    validationSchema: professionalSignUpValidationSchema,
    request: simulateAuthRequest,
    redirectTo: authHref("sign-in", "professional"),
    successMessage: "Application received. Please sign in to continue.",
    errorMessage: "We couldn't create your account. Please try again.",
  })

  return (
    <FormikForm formik={formik} aria-label="Create professional account" className="flex flex-col gap-6">
      <div className="flex flex-col gap-7">
        <FormSection title="Personal Information">
          <FieldRow>
            <FormikInputField name="firstName" label="First Name" placeholder="e.g. Jane" autoComplete="given-name" />
            <FormikInputField name="lastName" label="Last Name" placeholder="e.g. Doe" autoComplete="family-name" />
          </FieldRow>
          <FormikInputField
            name="emailAddress"
            label="Email Address"
            type="email"
            placeholder="jane.doe@example.com"
            autoComplete="email"
          />
          <FieldRow>
            <FormikInputField
              name="phoneNumber"
              label="Phone Number"
              type="tel"
              placeholder="(555) 123-4567"
              autoComplete="tel"
            />
            <FormikInputField name="dateOfBirth" label="Date of Birth" type="date" autoComplete="bday" />
          </FieldRow>
          <FieldRow>
            <FormikInputField name="city" label="City" placeholder="San Francisco" autoComplete="address-level2" />
            <FormikSelectField name="state" label="State" placeholder="Select state" options={US_STATE_OPTIONS} />
          </FieldRow>
          <FieldRow>
            <FormikInputField
              name="homeAddress"
              label="Home Address"
              placeholder="123 Wellness Ave, Apt 4"
              autoComplete="street-address"
            />
            <FormikInputField
              name="zipCode"
              label="Zip Code"
              placeholder="94102"
              inputMode="numeric"
              autoComplete="postal-code"
            />
          </FieldRow>
        </FormSection>

        <FormSection title="Professional Details">
          <FormikSelectField
            name="serviceCategory"
            label="Service Category"
            placeholder="Select a service"
            options={SERVICE_OPTIONS}
          />
          <FieldRow>
            <FormikSelectField
              name="yearsOfExperience"
              label="Years of Experience"
              placeholder="Select experience"
              options={EXPERIENCE_OPTIONS}
            />
            <FormikSelectField
              name="availability"
              label="Availability"
              placeholder="Select availability"
              options={AVAILABILITY_OPTIONS}
            />
          </FieldRow>
          <FormikInputField
            name="certifications"
            label="Certifications & Licenses"
            optional
            placeholder="e.g. CNA, CPR Certified, First Aid"
          />
          <FormikInputField
            name="ssnLastFour"
            label="SSN (Last 4 digits)"
            hint="Required for background verification"
            placeholder="e.g. 1234"
            inputMode="numeric"
            maxLength={4}
            autoComplete="off"
          />
        </FormSection>

        <FormSection title="Account Security">
          <FieldRow>
            <FormikPasswordField name="password" label="Password" autoComplete="new-password" />
            <FormikPasswordField
              name="confirmPassword"
              label="Confirm Password"
              autoComplete="new-password"
              revealable={false}
            />
          </FieldRow>
        </FormSection>
      </div>

      <div className="flex flex-col gap-4">
        <FormikCheckboxField
          name="agreeToTerms"
          label={<TermsAgreementLabel suffix=", and consent to a background check." />}
        />
        <SubmitButton
          size="pill"
          isLoading={formik.isSubmitting}
          loadingLabel="Creating account..."
          className="w-full"
        >
          Create Professional Account
        </SubmitButton>
      </div>
    </FormikForm>
  )
}
