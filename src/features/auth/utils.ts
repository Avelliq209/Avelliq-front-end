import { AUTH_ROUTES } from "./data/content"
import type { AuthMode, AuthRole } from "./types"

export function parseAuthRole(value: string | string[] | undefined): AuthRole {
  return value === "professional" ? "professional" : "client"
}

export function authHref(mode: AuthMode, role: AuthRole) {
  const path = AUTH_ROUTES[mode]
  return role === "client" ? path : `${path}?role=${role}`
}
