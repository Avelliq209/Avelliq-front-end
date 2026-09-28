import { Activity, childCareGiving, CircleCheckBig, Clock, concierge, HeartPulse, Home, houseKeeping, houseSitting, petCare, seniorCareGiving, Sparkles } from "@/assets"
import { LucideIcon } from "lucide-react";
import Image, { StaticImageData } from "next/image"
import Marquee from "react-fast-marquee";
import ModalContentID from "../modal/content";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

type ImageCombo = ImageProps & {
  src: StaticImageData;
}

interface ImageLink {
  index: number;
  image: ImageCombo;
}

export interface SixModalProps {
  id: number,
  title: string;
  subTitle: string;
  sectOneHead: string;
  sectOneCont: string;
  sectTwoHead: string;
  sectTwoCont: {
  icon: LucideIcon;
  title: string;
  desc: string;
  }[];
  gridCard: {
    gridHead: string;
    gridCont: {
      gridTitle: string;
      gridDesc: string;
    }[];
  }[];
  button: string;
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

const MODAL_CONTENTS: SixModalProps[] = [
  {
    id: 1,
    title: "Senior Caregiving",
    subTitle: "Compassionate, professional care for your loved ones",
    sectOneHead: "Care designed for dignity and independence",
    sectOneCont: "We connect families with vetted, experienced senior caregivers who treat your relatives like their own. From daily personal support to dedicated companionship, our professionals provide tailored support in the comfort of home, ensuring peace of mind for the whole family.",
    sectTwoHead: "What This Service Includes",
    sectTwoCont: [
      {
        icon: Home,
        title: "Daily Living Assistance",
        desc: "Gentle support with grooming, bathing, dressing, and daily personal routines.",
      },
      {
        icon: Clock,
        title: "Medication Reminders",
        desc: "Ensuring proper schedules and dosages are followed seamlessly without any stress.",
      },
      {
        icon: Sparkles,
        title: "Companionship",
        desc: "Active social interaction, reading, playing games, and friendly conversations.",
      },
      {
        icon: HeartPulse,
        title: "Mobility Support",
        desc: "Assisting with posture, transitions, transferring, and gentle physical activity.",
      },
      {
        icon: Activity,
        title: "Meal Prep & Nutrition",
        desc: "Healthy, diet-compliant meals prepared fresh to sustain strong physical health.",
      },
      {
        icon: CircleCheckBig,
        title: "Light Housekeeping",
        desc: "Keeping standard living spaces clean, fresh, tidy, organized, and perfectly safe.",
      },
    ],
    gridCard: [
      {
        gridHead: "For Families & Clients",
        gridCont: [
          {
            gridTitle: "Vetted Professionals",
            gridDesc: "Every caregiver undergoes rigorous multi-step background checks and screening.",
          },
          {
            gridTitle: "Flexible Scheduling",
            gridDesc: "Hourly, daily, or full-time care fits effortlessly into your family's routine.",
          },
          {
            gridTitle: "Progress Updates",
            gridDesc: "Access daily digital logs, summaries, and real-time coordinator messaging.",
          },
          {
            gridTitle: "Total Peace of Mind",
            gridDesc: "Rest easy knowing your relative is supported by a trained, caring expert.",
          },
        ],
      }, 
      {
        gridHead: "For Care Professionals",
        gridCont: [
          {
            gridTitle: "Competitive, Fair Pay",
            gridDesc: "Transparent market rates, swift payouts, and reliable direct deposits.",
          },
          {
            gridTitle: "Choose Your Clients",
            gridDesc: "Decide your own radius, workload limits, and pick aligned families.",
          },
          {
            gridTitle: "Long-Term Bonds",
            gridDesc: "Form deeply rewarding relationships and offer reliable care year-round.",
          },
          {
            gridTitle: "Ongoing Training",
            gridDesc: "Unlock advanced certifications, safety guides, and dementia care resources.",
          },
        ],
      }, 
    ],
    button: "Find a Senior Caregiver",
  },
]


const ImageDiv = ({image, index}: ImageLink) => {
  return (
    <Dialog>
      <DialogTrigger className="ml-4 cursor-pointer outline-none ring-0">
        <Image
          src={image.src}
          alt={image.alt}
          height={500}
          width={500}
          loading={"eager"}
          className=" h-65 md:h-100 2xl:h-125 w-auto object-cover"
        />
      </DialogTrigger>
      <DialogContent className={'max-h-[80vh] p-0 overflow-hidden rounded-[24px] sm:max-w-[70%] shadow-[0px_24px_48px_0px_#0F4D4229]'} showCloseButton={false}>
        <ModalContentID modalContent={MODAL_CONTENTS[index]} />
      </DialogContent>
    </Dialog>
  )
}

const SixthSection = () => {

  return (
    <section className="px-5 sm:px-10 py-17.5 lg:px-17.5">
      <div className="flex overflow-x-hidden bg-avelliq-text-white pl-5 py-5">
        {/* services animations */}
        <Marquee speed={50} pauseOnHover={true}>
          <div className="flex">
            {images.map((image, i) => (
              <ImageDiv
                key={image.alt}
                index={i}
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