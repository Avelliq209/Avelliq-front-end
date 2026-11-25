import Image from "next/image"

import circleFaint from "@/assets/patterns/circle-faint.svg"
import circle from "@/assets/patterns/circle.svg"
import circlesFrame from "@/assets/patterns/circles-frame.svg"
import { cn } from "@/lib/utils"

const CIRCLES = [
  { top: 1, left: -23.5, faint: true },
  { top: 25, left: 1, faint: true },
  { top: -48, left: -23.5, faint: false },
  { top: 50, left: -23.5, faint: true },
  { top: 99, left: -23.5, faint: false },
  { top: 1, left: 25.5, faint: true },
  { top: -48, left: 25.5, faint: false },
  { top: 50, left: 25.5, faint: true },
  { top: 99, left: 25.5, faint: false },
  { top: 1, left: 74.5, faint: true },
  { top: -48, left: 74.5, faint: false },
  { top: 50, left: 74.5, faint: true },
  { top: 99, left: 74.5, faint: false },
  { top: -24, left: 1, faint: false },
  { top: 74, left: 1, faint: true },
  { top: 74, left: -48, faint: false },
  { top: 74, left: 50, faint: true },
  { top: 25, left: 50, faint: true },
  { top: -24, left: 50, faint: false },
  { top: 74, left: 99, faint: false },
  { top: 25, left: 99, faint: false },
  { top: -24, left: 99, faint: false },
  { top: -24, left: -48, faint: false },
  { top: 25, left: -48, faint: false },
]

export function CirclePattern({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute size-[1901px] overflow-clip", className)}
    >
      <Image src={circlesFrame} alt="" fill className="scale-[1.01]" />
      {CIRCLES.map(({ top, left, faint }) => (
        <Image
          key={`${top}-${left}`}
          src={faint ? circleFaint : circle}
          alt=""
          width={950}
          height={950}
          className="absolute size-[50%]"
          style={{ top: `${top - 0.5}%`, left: `${left - 0.5}%` }}
        />
      ))}
    </div>
  )
}
