import type { ServiceCategory } from "../types"

export function filterServices(services: ServiceCategory[], query: string) {
  const term = query.trim().toLowerCase()
  if (!term) return services

  return services.filter(({ title, description, offerings }) =>
    [title, description, ...offerings].some((text) => text.toLowerCase().includes(term))
  )
}
