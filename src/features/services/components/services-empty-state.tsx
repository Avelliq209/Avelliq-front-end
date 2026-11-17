import { Button } from "@/components/ui/button"

interface ServicesEmptyStateProps {
  query: string
  onClear: () => void
}

export function ServicesEmptyState({ query, onClear }: ServicesEmptyStateProps) {
  return (
    <div className="mx-auto flex max-w-110 flex-col items-center gap-5 rounded-[12px] border-[0.5px] border-stroke bg-white px-6 py-12 text-center">
      <div className="flex flex-col gap-2.5">
        <h2 className="font-heading text-2xl leading-[1.2] font-medium text-primary">
          No services found
        </h2>
        <p className="text-base leading-[1.4] break-words text-ink">
          Nothing matches &ldquo;{query.trim()}&rdquo;. Try another service, like nannies or pet
          sitters.
        </p>
      </div>
      <Button variant="outline-primary" size="pill-sm" onClick={onClear}>
        Clear search
      </Button>
    </div>
  )
}
