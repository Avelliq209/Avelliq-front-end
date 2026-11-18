import type { ReactNode } from "react"

import { AUTH_CONTENT } from "../data/content"
import type { AuthMode, AuthRole } from "../types"
import { AuthHeader } from "./auth-header"
import { AuthRoleTabs } from "./auth-role-tabs"
import { AuthShell } from "./auth-shell"
import { AuthSocialSection } from "./auth-social-section"
import { AuthSwitchPrompt } from "./auth-switch-prompt"

interface AuthScreenProps {
  mode: AuthMode
  role: AuthRole
  children: ReactNode
}

export function AuthScreen({ mode, role, children }: AuthScreenProps) {
  const { title, description, tagline } = AUTH_CONTENT[mode][role]

  return (
    <AuthShell tagline={tagline} footer={<AuthSwitchPrompt mode={mode} role={role} />}>
      <AuthHeader title={title} description={description} />
      <AuthRoleTabs mode={mode} activeRole={role} />
      {children}
      <AuthSocialSection />
    </AuthShell>
  )
}
