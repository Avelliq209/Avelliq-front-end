
import { childCareGiving, concierge, houseKeeping, houseSitting, petCare, seniorCareGiving } from "@/assets"
import Image, { StaticImageData } from "next/image"
import Link from "next/link";
import Marquee from "react-fast-marquee";

type ImageCombo = ImageProps & {
  src: StaticImageData;
}
const images: ImageCombo[] = [
  {
    src: seniorCareGiving,
    link: "",
    alt: "",
  },
  {
    src: childCareGiving,
    link: "",
    alt: "child care giving",
  },
  {
    src: houseKeeping,
    link: "",
    alt: "house keeping",
  },
  {
    src: houseSitting,
    link: "",
    alt: "house sitting",
  },
  {
    src: petCare,
    link: "",
    alt: "senior care giving",
  },
  {
    src: concierge,
    link: "",
    alt: "concierge",
  },
]

const ImageDiv = ({image}: {image: ImageCombo}) => {
  return (
    <Link href={image.link} className="ml-4">
      <Image
        src={image.src}
        alt={image.alt}
        height={500}
        width={500}
        loading={"eager"}
        className=" h-100 2xl:h-125 w-auto object-cover"
      />
    </Link>
  )
}

const SixthSection = () => {

  return (
    <section className="p-17.5">
      <div className="flex overflow-x-hidden bg-avelliq-text-white pl-5 py-5">
        {/* services animations */}
        <Marquee speed={50} pauseOnHover={true}>
          <div className="flex">
            {images.map(image => (
              <ImageDiv
                key={image.alt}
                image={image}
              />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  )
}

export default SixthSection