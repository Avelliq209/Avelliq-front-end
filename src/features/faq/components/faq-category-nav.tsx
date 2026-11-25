import type { FaqCategory } from "../types"

interface FaqCategoryNavProps {
  categories: FaqCategory[]
}

export function FaqCategoryNav({ categories }: FaqCategoryNavProps) {
  return (
    <nav aria-label="FAQ categories" className="border-y-[0.5px] border-stroke bg-white">
      <ul className="no-scrollbar flex gap-6 overflow-x-auto sm:gap-2 px-5 sm:px-10 lg:gap-6 lg:px-17.5">
        {categories.map(({ id, navLabel, icon: Icon }) => (
          <li key={id} className="shrink-0">
            <a
              href={`#${id}`}
              className="flex min-h-11 items-center gap-2.5 rounded-[8px] py-6 text-lg leading-[1.2] font-medium whitespace-nowrap text-primary transition-colors outline-none hover:text-primary/75 focus-visible:ring-3 focus-visible:ring-ring/50 sm:px-3 lg:py-10 lg:text-xl"
            >
              <Icon aria-hidden="true" strokeWidth={1.5} className="size-6 shrink-0" />
              {navLabel}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
