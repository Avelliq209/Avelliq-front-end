export type AuthMode = "sign-in" | "sign-up"

export type AuthRole = "client" | "professional"

export interface AuthTagline {
  title: string
  description: string
}

export interface AuthScreenContent {
  title: string
  description: string
  tagline: AuthTagline
}
