"use client"

export const Pill = ({className, children }: {className: string, children: React.ReactNode }) => {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border-[.3px] w-fit ${className}`}>
      {children}
    </span>
  )
}