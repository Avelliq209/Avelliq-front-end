import type { SelectOption } from "@/components/form/select-input"

import { SERVICES } from "./services"

export const SERVICE_OPTIONS: SelectOption[] = SERVICES.map(({ slug, title }) => ({
  value: slug,
  label: title,
}))
