import type { CareRequestFormValues } from "@/schemas/validation-schemas"

const CARE_REQUEST_STORAGE_KEY = "avelliq:care-request"

export function saveCareRequest(values: CareRequestFormValues) {
  try {
    window.sessionStorage.setItem(CARE_REQUEST_STORAGE_KEY, JSON.stringify(values))
  } catch (error) {
    console.warn("Could not save the care request for sign up.", error)
  }
}
