import Image, { type StaticImageData } from "next/image"

import { cn } from "@/lib/utils"

interface PhotoCardProps {
  image: StaticImageData
  alt: string
  title?: string
  sizes: string
  withOverlay?: boolean
  priority?: boolean
  className?: string
  titleClassName?: string
}

export function PhotoCard({
  image,
  alt,
  title,
  sizes,
  withOverlay = false,
  priority = false,
  className,
  titleClassName,
}: PhotoCardProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={image}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        placeholder="blur"
        className="object-cover"
      />
      {withOverlay && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-b from-[rgba(102,102,102,0)] from-[43.9%] to-[rgba(0,0,0,0.67)] to-[81.7%]"
        />
      )}
      {title && (
        <p
          className={cn(
            "absolute bottom-4 left-4 font-heading text-xl leading-[1.2] text-white",
            titleClassName
          )}
        >
          {title}
        </p>
      )}
    </div>
  )
}
