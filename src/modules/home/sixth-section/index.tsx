import { Activity, AlertCircle, Baby, Bath, BookOpen, Car, Calendar, Check, childCareGiving, CircleCheckBig, Clock, concierge, Dog, FileText, Flower, Gift, Globe, Grid, Heart, HeartPulse, Home, houseKeeping, houseSitting, Mail, Moon, PawPrint, petCare, Pill, Scissors, seniorCareGiving, Shirt, ShoppingBag, Shield, Sparkles, Trees, Truck, Utensils, Wind } from "@/assets"
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
  id: number;
  alt: string;
  badge: string;
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
    gridIcon: LucideIcon,
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
    alt: "A warm comforting photo of an elderly person smiling with a supportive female",
    badge: "Specialized Care",
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
        gridIcon: Check,
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
        gridIcon: Shield,
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
  {
    id: 2,
    alt: "A warm photo of a supportive lady and a child both laughing and playing together",
    badge: "Specialized Care",
    title: "Child Caregiving",
    subTitle: "Vetted, loving care for your children of all ages",
    sectOneHead: "Nurturing support tailored to early childhood development",
    sectOneCont: "We connect families with verified, caring child care professionals who bring warmth and constructive engagement to your home. From nursery essentials to older child learning support, our partners ensure active supervision and rich developmental routines.",
    sectTwoHead: "What This Service Includes",
    sectTwoCont: [
      {
        icon: Baby,
        title: "Infant & Toddler Care",
        desc: "Attentive feeding, nap schedules, sensory play, and gentle nursery support.",
      },
      {
        icon: Clock,
        title: "After-School Supervision",
        desc: "Safe transit, structured winding down, snacks, and playful physical activities.",
      },
      {
        icon: BookOpen,
        title: "Homework & Learning Support",
        desc: "Focused guidance on core subjects, reading support, and creative problem solving.",
      },
      {
        icon: Utensils,
        title: "Meal Prep & Feeding",
        desc: "Fresh, nutrition-packed snacks and meals catered to dietary needs.",
      },
      {
        icon: Moon,
        title: "Bedtime Routines",
        desc: "Calming baths, storytelling, and comforting sleep transitions.",
      },
      {
        icon: Trees,
        title: "Outdoor Play & Activities",
        desc: "Fresh air supervision, park trips, and structured coordinate play.",
      },
    ],
    gridCard: [
      {
        gridHead: "For Families & Clients",
        gridIcon: Check,
        gridCont: [
          {
            gridTitle: "Background-Checked Caregivers",
            gridDesc: "Every candidate undergoes strict multi-point background checks.",
          },
          {
            gridTitle: "Age-Appropriate Plans",
            gridDesc: "Customized play and development maps suited to your child's age.",
          },
          {
            gridTitle: "Real-Time Updates",
            gridDesc: "Stay connected through continuous status and photo logs.",
          },
          {
            gridTitle: "Emergency-Trained Pros",
            gridDesc: "All caregivers carry certified child first-aid and safety credentials.",
          },
        ],
      }, 
      {
        gridHead: "For Care Professionals",
        gridIcon: Shield,
        gridCont: [
          {
            gridTitle: "Rewarding Work with Kids",
            gridDesc: "Make a genuine impact on early developmental stages.",
          },
          {
            gridTitle: "Highly Flexible Hours",
            gridDesc: "Coordinate with families on times that fit your current schedule.",
          },
          {
            gridTitle: "Lasting Family Bonds",
            gridDesc: "Form deep trust and become a valued extended partner.",
          },
          {
            gridTitle: "Early Childhood Training",
            gridDesc: "Gain access to ongoing specialized care and behavior courses.",
          },
        ],
      }, 
    ],
    button: "Find a Child Caregiver",
  },
  {
    id: 3,
    alt: "Minimalist editorial of a bright clean modern kitchen with natural morning",
    badge: "Home Maintenance",
    title: "House Keeping",
    subTitle: "Impeccable home cleaning and meticulous organizing",
    sectOneHead: "A pristine, comfortable environment for your daily life",
    sectOneCont: "Transform your living spaces with meticulous, trusted cleaning professionals. Whether you require standard maintenance sweeps or thorough deep sanitization, our cleaning experts provide detail-oriented care to keep your home healthy and beautiful.",
    sectTwoHead: "What This Service Includes",
    sectTwoCont: [
      {
        icon: Sparkles,
        title: "Deep Cleaning & Sanitizing",
        desc: "Intense bathroom disinfection, scrubbing, and allergen extraction.",
      },
      {
        icon: Shirt,
        title: "Laundry & Ironing",
        desc: "Careful fabric sorting, washing, precise pressing, and fold storage.",
      },
      {
        icon: Bath,
        title: "Kitchen & Bathroom Care",
        desc: "Detailed grease removal, range cleaning, tile scrub, and polish.",
      },
      {
        icon: Grid,
        title: "Organizing & Decluttering",
        desc: "Intelligent closet space maximization and functional item sorting.",
      },
      {
        icon: Wind,
        title: "Window & Surface Cleaning",
        desc: "Smudge-free glass treatment and careful wood dust sealing.",
      },
      {
        icon: Truck,
        title: "Move-In / Move-Out Clean",
        desc: "Deep baseboard and cabinet restoration before transition.",
      },
    ],
    gridCard: [
      {
        gridHead: "For Families & Clients",
        gridIcon: Check,
        gridCont: [
          {
            gridTitle: "Trusted & Insured Cleaners",
            gridDesc: "Every technician is fully vetted, verified, and backed by comprehensive coverage.",
          },
          {
            gridTitle: "Customizable Plans",
            gridDesc: "Design a checklist and timeline that mirrors your household goals.",
          },
          {
            gridTitle: "Eco-Friendly Products",
            gridDesc: "Healthy non-toxic materials keeping your space green and safe.",
          },
          {
            gridTitle: "Consistent Quality",
            gridDesc: "Our standardized audit sheets ensure flawless results every visit.",
          },
        ],
      }, 
      {
        gridHead: "For Care Professionals",
        gridIcon: Shield,
        gridCont: [
          {
            gridTitle: "Steady Client Base",
            gridDesc: "Gain reliable weekly and monthly accounts near your location.",
          },
          {
            gridTitle: "Set Your Own Rates",
            gridDesc: "Define your preferred pricing metrics per space or hourly.",
          },
          {
            gridTitle: "Preferred Cleaning Types",
            gridDesc: "Specialise in deep, rapid, or organizational work as you please.",
          },
          {
            gridTitle: "Equipment & Supply Support",
            gridDesc: "Access partner discounts on premium tools and cleaning wear.",
          },
        ],
      }, 
    ],
    button: "Find a House Keeper",
  },
  {
    id: 4,
    alt: "A happy pet running through a sunny grassy",
    badge: "Pet Wellness",
    title: "Pet Care",
    subTitle: "Attentive, certified care for your beloved animal companions",
    sectOneHead: "Devoted care designed for your pet's physical & mental health",
    sectOneCont: "Keep your pets thriving with highly trained, active animal care professionals. From daily trail hikes to overnight sitting and exact medication administration, our pet care network handles every furry relative with deep devotion and medical readiness.",
    sectTwoHead: "What This Service Includes",
    sectTwoCont: [
      {
        icon: Dog,
        title: "Dog Walking & Exercise",
        desc: "High-energy trail walks, social play, and neighborhood strolls.",
      },
      {
        icon: Home,
        title: "Pet Sitting & Overnights",
        desc: "In-home companionship to maintain stress-free familiar routines.",
      },
      {
        icon: Pill,
        title: "Feeding & Medication",
        desc: "Pill and injection administration under precise time metrics.",
      },
      {
        icon: Scissors,
        title: "Grooming Coordination",
        desc: "Safe transit, bath prepping, brushing, and nail trim help.",
      },
      {
        icon: Heart,
        title: "Puppy & Kitten Care",
        desc: "Developmental socializing, basic manners, and feeding checks.",
      },
      {
        icon: Car,
        title: "Pet Transport",
        desc: "Comfortable, secured rides to vets, groomers, or parks.",
      },
    ],
    gridCard: [
      {
        gridHead: "For Families & Clients",
        gridIcon: Check,
        gridCont: [
          {
            gridTitle: "Certified Animal Lovers",
            gridDesc: "Every specialist is background checked and validated for pet expertise.",
          },
          {
            gridTitle: "GPS-Tracked Walks",
            gridDesc: "Follow trail progress and obtain instant potty and photo check-ins.",
          },
          {
            gridTitle: "Veterinary Protocols",
            gridDesc: "Immediate access to local partner emergency clinics.",
          },
          {
            gridTitle: "Tailored Special Needs",
            gridDesc: "Specialized care maps for senior pets or strict health regimens.",
          },
        ],
      }, 
      {
        gridHead: "For Care Professionals",
        gridIcon: Shield,
        gridCont: [
          {
            gridTitle: "Work with Animals You Love",
            gridDesc: "Spend your daily workload keeping happy animals healthy and active.",
          },
          {
            gridTitle: "Flexible Daily Scheduling",
            gridDesc: "Create window slots that easily line up with other weekly work.",
          },
          {
            gridTitle: "Build a Loyal Network",
            gridDesc: "Gain regular neighborhood clients with recurring walks.",
          },
          {
            gridTitle: "First-Aid Support",
            gridDesc: "Sponsorship and tutorials for veterinary first-aid certificates.",
          },
        ],
      }, 
    ],
    button: "Find a Pet Caregiver",
  },
  {
    id: 5,
    alt: "Minimal warm beautiful house living",
    badge: "Property Care",
    title: "House Sitting Services",
    subTitle: "Reliable property preservation and home care during your absence",
    sectOneHead: "Your home, kept safe and exactly as you left it",
    sectOneCont: "We connect property owners with vetted, reliable house sitters who maintain your residence with care. From basic property check-ins and mail collection to plant watering and emergency coordination, our specialists ensure your home stays protected, secure, and pristine while you are away.",
    sectTwoHead: "What This Service Includes",
    sectTwoCont: [
      {
        icon: Shield,
        title: "Home Security & Presence",
        desc: "Establishing an active presence to deter intruders and maintain safety.",
      },
      {
        icon: Mail,
        title: "Mail & Package Collection",
        desc: "Securing all letters and deliveries inside so nothing piles up outside.",
      },
      {
        icon: Flower,
        title: "Plant & Garden Care",
        desc: "Regular watering and maintenance of indoor plants and small patio gardens.",
      },
      {
        icon: PawPrint,
        title: "Pet Feeding & Support",
        desc: "Basic care, light play, and consistent feeding schedules for companion pets.",
      },
      {
        icon: AlertCircle,
        title: "Emergency Coordination",
        desc: "Acting as local keyholders and dispatching professional contractors if needed.",
      },
      {
        icon: Home,
        title: "Regular Check-Ins",
        desc: "Thorough walks through the property to verify utilities are functioning perfectly.",
      },
    ],
    gridCard: [
      {
        gridHead: "For Families & Clients",
        gridIcon: Check,
        gridCont: [
          {
            gridTitle: "Vetted & Background Checked",
            gridDesc: "Every house sitter completes multi-level security screenings.",
          },
          {
            gridTitle: "Photo Updates & Daily Logs",
            gridDesc: "Receive digital reports and property images directly to your inbox.",
          },
          {
            gridTitle: "Insurance-Backed Protection",
            gridDesc: "Complete platform guarantee and coverage on your residence during the booking.",
          },
          {
            gridTitle: "Neighbors-Notified Protocol",
            gridDesc: "Optional contact registration with your neighbors to ensure clear visual communication.",
          },
        ],
      }, 
      {
        gridHead: "For Care Professionals",
        gridIcon: Shield,
        gridCont: [
          {
            gridTitle: "Comfortable Stays",
            gridDesc: "Stay in highly-rated homes with pre-agreed house rules and amenities.",
          },
          {
            gridTitle: "Flexible Availability Windows",
            gridDesc: "Pick long-term seasonal sits or local weekend assignments that fit your rhythm.",
          },
          {
            gridTitle: "Build a Repeat-Client Roster",
            gridDesc: "Become the preferred trusted keysholder for neighborhood families.",
          },
          {
            gridTitle: "Home Management Training",
            gridDesc: "Get access to professional guides, smart-home operation guides, and safety training.",
          },
        ],
      }, 
    ],
    button: "Find a House Sitter",
  },
  {
    id: 6,
    alt: "Residence lobby",
    badge: "Premium Assistance",
    title: "Personal Concierge",
    subTitle: "Bespoke administrative and lifestyle coordination tailored to your day",
    sectOneHead: "Take back your hours with professional coordination",
    sectOneCont: "We connect busy professionals and active households with vetted, dedicated personal assistants. From errand running and scheduling to complex travel and event planning, our concierges bring exceptional organizational skill and absolute discretion directly to your personal tasks.",
    sectTwoHead: "What This Service Includes",
    sectTwoCont: [
      {
        icon: Truck,
        title: "Errands & Deliveries",
        desc: "Seamless transport of prescription pick-ups, groceries, and essential drop-offs.",
      },
      {
        icon: Calendar,
        title: "Appointment Coordination",
        desc: "Managing household repairs, medical visits, and family calendars seamlessly.",
      },
      {
        icon: Globe,
        title: "Travel & Itinerary Planning",
        desc: "Booking flights, local accommodation, premium transit, and curating experiences.",
      },
      {
        icon: Gift,
        title: "Event Coordination",
        desc: "From booking private caterers to coordinating seating arrangements for family meals.",
      },
      {
        icon: ShoppingBag,
        title: "Personal Shopping",
        desc: "Sourcing gifts, seasonal wardrobes, specialized household items, and groceries.",
      },
      {
        icon: FileText,
        title: "Admin Assistance",
        desc: "Expense tracking, sorting bills, digital document organization, and basic calls.",
      },
    ],
    gridCard: [
      {
        gridHead: "For Families & Clients",
        gridIcon: Check,
        gridCont: [
          {
            gridTitle: "Single Point of Contact",
            gridDesc: "Enjoy streamlined coordination with your dedicated assistant managing everything.",
          },
          {
            gridTitle: "Save Hours Every Week",
            gridDesc: "Delegate repetitive admin chores and regain time for high-value pursuits.",
          },
          {
            gridTitle: "Discreet & Confidential",
            gridDesc: "All specialists adhere to strict non-disclosure, ensuring ultimate household privacy.",
          },
          {
            gridTitle: "Fully Scalable Engagement",
            gridDesc: "Effortlessly shift from one-off tasks to ongoing monthly scheduling.",
          },
        ],
      }, 
      {
        gridHead: "For Care Professionals",
        gridIcon: Shield,
        gridCont: [
          {
            gridTitle: "Diverse & Engaging Tasks",
            gridDesc: "Every week brings unique planning projects, dynamic schedules, and fresh tasks.",
          },
          {
            gridTitle: "Premium Client Relationships",
            gridDesc: "Collaborate with top-tier clients who deeply appreciate professional precision.",
          },
          {
            gridTitle: "Set Your Specialties",
            gridDesc: "Offer specific skills like booking travel, event design, or accounting administration.",
          },
          {
            gridTitle: "Business Growth Support",
            gridDesc: "Leverage Avelliq tools to streamline invoice tracking, insurance, and billing.",
          },
        ],
      }, 
    ],
    button: "Find a Concierge",
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
      <DialogContent className={' p-0 overflow-hidden rounded-[24px] sm:max-w-[70%] shadow-[0px_24px_48px_0px_#0F4D4229]'} showCloseButton={false}>
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