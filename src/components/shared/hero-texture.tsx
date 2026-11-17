import Image from "next/image"

import heroTexture from "@/assets/images/textures/hero-linen.jpg"
import { cn } from "@/lib/utils"

export function HeroTexture({ className }: { className?: string }) {
  return (
    <Image
      src={heroTexture}
      alt=""
      fill
      priority
      sizes="100vw"
      className={cn("-z-10 object-cover opacity-[0.02]", className)}
    />
  )
}
