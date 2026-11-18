import { Logo } from "@/components/layout/logo"

interface AuthHeaderProps {
  title: string
  description: string
}

export function AuthHeader({ title, description }: AuthHeaderProps) {
  return (
    <header className="flex flex-col gap-3">
      <Logo />
      <div className="flex flex-col gap-1.5">
        <h1 className="font-heading text-2xl leading-[1.2] font-medium text-primary">{title}</h1>
        <p className="text-sm leading-[1.4] text-muted-foreground">{description}</p>
      </div>
    </header>
  )
}
