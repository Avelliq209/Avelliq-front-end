import { Section } from "@/components/shared/section"
import { ServiceGallery } from "@/features/services/components/service-gallery"

export function ServiceGallerySection() {
  return (
    <Section aria-label="Explore our services" className="pt-12.5 pb-12.5">
      <ServiceGallery />
    </Section>
  )
}
