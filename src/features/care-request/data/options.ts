import type { SelectOption } from "@/components/form/select-input"

export const HOURS_PER_SESSION_OPTIONS: SelectOption[] = [
  { value: "1-3", label: "1-3 hrs" },
  { value: "4-6", label: "4-6 hrs" },
  { value: "7-9", label: "7-9 hrs" },
  { value: "10-plus", label: "10+ hrs" },
]

export const NUMBER_OF_CHILDREN_OPTIONS: SelectOption[] = [
  { value: "none", label: "No children" },
  { value: "1", label: "1 Child" },
  { value: "2", label: "2 Children" },
  { value: "3", label: "3 Children" },
  { value: "4-plus", label: "4+ Children" },
]

export const TIME_OF_DAY_OPTIONS: SelectOption[] = [
  { value: "mornings", label: "Mornings" },
  { value: "afternoons", label: "Afternoons" },
  { value: "evenings", label: "Evenings" },
  { value: "weekends", label: "Weekends" },
  { value: "overnight", label: "Overnight" },
]
