import { ArrowRight } from "lucide-react"

const ButtonNav = ({
  name,
  isArror,
  className,
  onClick,
}: ButtonNav) => {
  return (
    <button
      type="button"
      className={`inline-flex w-fit items-center gap-2 rounded-[8px] px-5 py-3 2xl:py-4 2xl:px-8 text-sm font-medium cursor-pointer group ${className}`}
      onClick={onClick}
    >
      {name}
      {isArror && (
        <ArrowRight size={12} className="h-3 w-3 group-hover:translate-x-0.5" />
      )}
    </button>
  )
}

export default ButtonNav