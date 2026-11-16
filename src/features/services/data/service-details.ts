import {
  Activity,
  AlertCircle,
  Baby,
  Bath,
  BookOpen,
  Calendar,
  Car,
  Check,
  CircleCheckBig,
  Clock,
  Dog,
  FileText,
  Flower,
  Gift,
  Globe,
  Grid,
  Heart,
  HeartPulse,
  Home,
  Mail,
  Moon,
  PawPrint,
  Pill,
  Scissors,
  Shield,
  Shirt,
  ShoppingBag,
  Sparkles,
  Trees,
  Truck,
  Utensils,
  Wind,
} from "lucide-react"

import childcareDetail from "@/assets/images/services/childcare-detail.png"
import childcareThumbnail from "@/assets/images/services/childcare.png"
import conciergeDetail from "@/assets/images/services/concierge-detail.jpg"
import conciergeThumbnail from "@/assets/images/services/concierge.png"
import houseSittingDetail from "@/assets/images/services/house-sitting-detail.jpg"
import houseSittingThumbnail from "@/assets/images/services/house-sitting.png"
import housekeepingDetail from "@/assets/images/services/housekeeping-detail.jpg"
import housekeepingThumbnail from "@/assets/images/services/housekeeping.png"
import petCareDetail from "@/assets/images/services/pet-care-detail.jpg"
import petCareThumbnail from "@/assets/images/services/pet-care.png"
import seniorCareDetail from "@/assets/images/services/senior-care-detail.jpg"
import seniorCareThumbnail from "@/assets/images/services/senior-care.png"

import type { ServiceDetail } from "../types"

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    slug: "senior-care",
    thumbnail: seniorCareThumbnail,
    thumbnailAlt: "Senior caregiver supporting an elderly person",
    image: seniorCareDetail,
    imageAlt: "A warm comforting photo of an elderly person smiling with a supportive female",
    badge: "Specialized Care",
    title: "Senior Caregiving",
    subtitle: "Compassionate, professional care for your loved ones",
    overviewTitle: "Care designed for dignity and independence",
    overview: "We connect families with vetted, experienced senior caregivers who treat your relatives like their own. From daily personal support to dedicated companionship, our professionals provide tailored support in the comfort of home, ensuring peace of mind for the whole family.",
    inclusionsTitle: "What This Service Includes",
    inclusions: [
      {
        icon: Home,
        title: "Daily Living Assistance",
        description: "Gentle support with grooming, bathing, dressing, and daily personal routines.",
      },
      {
        icon: Clock,
        title: "Medication Reminders",
        description: "Ensuring proper schedules and dosages are followed seamlessly without any stress.",
      },
      {
        icon: Sparkles,
        title: "Companionship",
        description: "Active social interaction, reading, playing games, and friendly conversations.",
      },
      {
        icon: HeartPulse,
        title: "Mobility Support",
        description: "Assisting with posture, transitions, transferring, and gentle physical activity.",
      },
      {
        icon: Activity,
        title: "Meal Prep & Nutrition",
        description: "Healthy, diet-compliant meals prepared fresh to sustain strong physical health.",
      },
      {
        icon: CircleCheckBig,
        title: "Light Housekeeping",
        description: "Keeping standard living spaces clean, fresh, tidy, organized, and perfectly safe.",
      },
    ],
    audiences: [
      {
        title: "For Families & Clients",
        icon: Check,
        points: [
          {
            title: "Vetted Professionals",
            description: "Every caregiver undergoes rigorous multi-step background checks and screening.",
          },
          {
            title: "Flexible Scheduling",
            description: "Hourly, daily, or full-time care fits effortlessly into your family's routine.",
          },
          {
            title: "Progress Updates",
            description: "Access daily digital logs, summaries, and real-time coordinator messaging.",
          },
          {
            title: "Total Peace of Mind",
            description: "Rest easy knowing your relative is supported by a trained, caring expert.",
          },
        ],
      },
      {
        title: "For Care Professionals",
        icon: Shield,
        points: [
          {
            title: "Competitive, Fair Pay",
            description: "Transparent market rates, swift payouts, and reliable direct deposits.",
          },
          {
            title: "Choose Your Clients",
            description: "Decide your own radius, workload limits, and pick aligned families.",
          },
          {
            title: "Long-Term Bonds",
            description: "Form deeply rewarding relationships and offer reliable care year-round.",
          },
          {
            title: "Ongoing Training",
            description: "Unlock advanced certifications, safety guides, and dementia care resources.",
          },
        ],
      },
    ],
    ctaLabel: "Find a Senior Caregiver",
  },
  {
    slug: "childcare",
    thumbnail: childcareThumbnail,
    thumbnailAlt: "Child care giving",
    image: childcareDetail,
    imageAlt: "A warm photo of a supportive lady and a child both laughing and playing together",
    badge: "Specialized Care",
    title: "Child Caregiving",
    subtitle: "Vetted, loving care for your children of all ages",
    overviewTitle: "Nurturing support tailored to early childhood development",
    overview: "We connect families with verified, caring child care professionals who bring warmth and constructive engagement to your home. From nursery essentials to older child learning support, our partners ensure active supervision and rich developmental routines.",
    inclusionsTitle: "What This Service Includes",
    inclusions: [
      {
        icon: Baby,
        title: "Infant & Toddler Care",
        description: "Attentive feeding, nap schedules, sensory play, and gentle nursery support.",
      },
      {
        icon: Clock,
        title: "After-School Supervision",
        description: "Safe transit, structured winding down, snacks, and playful physical activities.",
      },
      {
        icon: BookOpen,
        title: "Homework & Learning Support",
        description: "Focused guidance on core subjects, reading support, and creative problem solving.",
      },
      {
        icon: Utensils,
        title: "Meal Prep & Feeding",
        description: "Fresh, nutrition-packed snacks and meals catered to dietary needs.",
      },
      {
        icon: Moon,
        title: "Bedtime Routines",
        description: "Calming baths, storytelling, and comforting sleep transitions.",
      },
      {
        icon: Trees,
        title: "Outdoor Play & Activities",
        description: "Fresh air supervision, park trips, and structured coordinate play.",
      },
    ],
    audiences: [
      {
        title: "For Families & Clients",
        icon: Check,
        points: [
          {
            title: "Background-Checked Caregivers",
            description: "Every candidate undergoes strict multi-point background checks.",
          },
          {
            title: "Age-Appropriate Plans",
            description: "Customized play and development maps suited to your child's age.",
          },
          {
            title: "Real-Time Updates",
            description: "Stay connected through continuous status and photo logs.",
          },
          {
            title: "Emergency-Trained Pros",
            description: "All caregivers carry certified child first-aid and safety credentials.",
          },
        ],
      },
      {
        title: "For Care Professionals",
        icon: Shield,
        points: [
          {
            title: "Rewarding Work with Kids",
            description: "Make a genuine impact on early developmental stages.",
          },
          {
            title: "Highly Flexible Hours",
            description: "Coordinate with families on times that fit your current schedule.",
          },
          {
            title: "Lasting Family Bonds",
            description: "Form deep trust and become a valued extended partner.",
          },
          {
            title: "Early Childhood Training",
            description: "Gain access to ongoing specialized care and behavior courses.",
          },
        ],
      },
    ],
    ctaLabel: "Find a Child Caregiver",
  },
  {
    slug: "housekeeping",
    thumbnail: housekeepingThumbnail,
    thumbnailAlt: "House keeping",
    image: housekeepingDetail,
    imageAlt: "Minimalist editorial of a bright clean modern kitchen with natural morning",
    badge: "Home Maintenance",
    title: "House Keeping",
    subtitle: "Impeccable home cleaning and meticulous organizing",
    overviewTitle: "A pristine, comfortable environment for your daily life",
    overview: "Transform your living spaces with meticulous, trusted cleaning professionals. Whether you require standard maintenance sweeps or thorough deep sanitization, our cleaning experts provide detail-oriented care to keep your home healthy and beautiful.",
    inclusionsTitle: "What This Service Includes",
    inclusions: [
      {
        icon: Sparkles,
        title: "Deep Cleaning & Sanitizing",
        description: "Intense bathroom disinfection, scrubbing, and allergen extraction.",
      },
      {
        icon: Shirt,
        title: "Laundry & Ironing",
        description: "Careful fabric sorting, washing, precise pressing, and fold storage.",
      },
      {
        icon: Bath,
        title: "Kitchen & Bathroom Care",
        description: "Detailed grease removal, range cleaning, tile scrub, and polish.",
      },
      {
        icon: Grid,
        title: "Organizing & Decluttering",
        description: "Intelligent closet space maximization and functional item sorting.",
      },
      {
        icon: Wind,
        title: "Window & Surface Cleaning",
        description: "Smudge-free glass treatment and careful wood dust sealing.",
      },
      {
        icon: Truck,
        title: "Move-In / Move-Out Clean",
        description: "Deep baseboard and cabinet restoration before transition.",
      },
    ],
    audiences: [
      {
        title: "For Families & Clients",
        icon: Check,
        points: [
          {
            title: "Trusted & Insured Cleaners",
            description: "Every technician is fully vetted, verified, and backed by comprehensive coverage.",
          },
          {
            title: "Customizable Plans",
            description: "Design a checklist and timeline that mirrors your household goals.",
          },
          {
            title: "Eco-Friendly Products",
            description: "Healthy non-toxic materials keeping your space green and safe.",
          },
          {
            title: "Consistent Quality",
            description: "Our standardized audit sheets ensure flawless results every visit.",
          },
        ],
      },
      {
        title: "For Care Professionals",
        icon: Shield,
        points: [
          {
            title: "Steady Client Base",
            description: "Gain reliable weekly and monthly accounts near your location.",
          },
          {
            title: "Set Your Own Rates",
            description: "Define your preferred pricing metrics per space or hourly.",
          },
          {
            title: "Preferred Cleaning Types",
            description: "Specialise in deep, rapid, or organizational work as you please.",
          },
          {
            title: "Equipment & Supply Support",
            description: "Access partner discounts on premium tools and cleaning wear.",
          },
        ],
      },
    ],
    ctaLabel: "Find a House Keeper",
  },
  {
    slug: "house-sitting",
    thumbnail: houseSittingThumbnail,
    thumbnailAlt: "House sitting",
    image: houseSittingDetail,
    imageAlt: "Minimal warm beautiful house living",
    badge: "Property Care",
    title: "House Sitting Services",
    subtitle: "Reliable property preservation and home care during your absence",
    overviewTitle: "Your home, kept safe and exactly as you left it",
    overview: "We connect property owners with vetted, reliable house sitters who maintain your residence with care. From basic property check-ins and mail collection to plant watering and emergency coordination, our specialists ensure your home stays protected, secure, and pristine while you are away.",
    inclusionsTitle: "What This Service Includes",
    inclusions: [
      {
        icon: Shield,
        title: "Home Security & Presence",
        description: "Establishing an active presence to deter intruders and maintain safety.",
      },
      {
        icon: Mail,
        title: "Mail & Package Collection",
        description: "Securing all letters and deliveries inside so nothing piles up outside.",
      },
      {
        icon: Flower,
        title: "Plant & Garden Care",
        description: "Regular watering and maintenance of indoor plants and small patio gardens.",
      },
      {
        icon: PawPrint,
        title: "Pet Feeding & Support",
        description: "Basic care, light play, and consistent feeding schedules for companion pets.",
      },
      {
        icon: AlertCircle,
        title: "Emergency Coordination",
        description: "Acting as local keyholders and dispatching professional contractors if needed.",
      },
      {
        icon: Home,
        title: "Regular Check-Ins",
        description: "Thorough walks through the property to verify utilities are functioning perfectly.",
      },
    ],
    audiences: [
      {
        title: "For Families & Clients",
        icon: Check,
        points: [
          {
            title: "Vetted & Background Checked",
            description: "Every house sitter completes multi-level security screenings.",
          },
          {
            title: "Photo Updates & Daily Logs",
            description: "Receive digital reports and property images directly to your inbox.",
          },
          {
            title: "Insurance-Backed Protection",
            description: "Complete platform guarantee and coverage on your residence during the booking.",
          },
          {
            title: "Neighbors-Notified Protocol",
            description: "Optional contact registration with your neighbors to ensure clear visual communication.",
          },
        ],
      },
      {
        title: "For Care Professionals",
        icon: Shield,
        points: [
          {
            title: "Comfortable Stays",
            description: "Stay in highly-rated homes with pre-agreed house rules and amenities.",
          },
          {
            title: "Flexible Availability Windows",
            description: "Pick long-term seasonal sits or local weekend assignments that fit your rhythm.",
          },
          {
            title: "Build a Repeat-Client Roster",
            description: "Become the preferred trusted keysholder for neighborhood families.",
          },
          {
            title: "Home Management Training",
            description: "Get access to professional guides, smart-home operation guides, and safety training.",
          },
        ],
      },
    ],
    ctaLabel: "Find a House Sitter",
  },
  {
    slug: "pet-care",
    thumbnail: petCareThumbnail,
    thumbnailAlt: "Pet care",
    image: petCareDetail,
    imageAlt: "A happy pet running through a sunny grassy",
    badge: "Pet Wellness",
    title: "Pet Care",
    subtitle: "Attentive, certified care for your beloved animal companions",
    overviewTitle: "Devoted care designed for your pet's physical & mental health",
    overview: "Keep your pets thriving with highly trained, active animal care professionals. From daily trail hikes to overnight sitting and exact medication administration, our pet care network handles every furry relative with deep devotion and medical readiness.",
    inclusionsTitle: "What This Service Includes",
    inclusions: [
      {
        icon: Dog,
        title: "Dog Walking & Exercise",
        description: "High-energy trail walks, social play, and neighborhood strolls.",
      },
      {
        icon: Home,
        title: "Pet Sitting & Overnights",
        description: "In-home companionship to maintain stress-free familiar routines.",
      },
      {
        icon: Pill,
        title: "Feeding & Medication",
        description: "Pill and injection administration under precise time metrics.",
      },
      {
        icon: Scissors,
        title: "Grooming Coordination",
        description: "Safe transit, bath prepping, brushing, and nail trim help.",
      },
      {
        icon: Heart,
        title: "Puppy & Kitten Care",
        description: "Developmental socializing, basic manners, and feeding checks.",
      },
      {
        icon: Car,
        title: "Pet Transport",
        description: "Comfortable, secured rides to vets, groomers, or parks.",
      },
    ],
    audiences: [
      {
        title: "For Families & Clients",
        icon: Check,
        points: [
          {
            title: "Certified Animal Lovers",
            description: "Every specialist is background checked and validated for pet expertise.",
          },
          {
            title: "GPS-Tracked Walks",
            description: "Follow trail progress and obtain instant potty and photo check-ins.",
          },
          {
            title: "Veterinary Protocols",
            description: "Immediate access to local partner emergency clinics.",
          },
          {
            title: "Tailored Special Needs",
            description: "Specialized care maps for senior pets or strict health regimens.",
          },
        ],
      },
      {
        title: "For Care Professionals",
        icon: Shield,
        points: [
          {
            title: "Work with Animals You Love",
            description: "Spend your daily workload keeping happy animals healthy and active.",
          },
          {
            title: "Flexible Daily Scheduling",
            description: "Create window slots that easily line up with other weekly work.",
          },
          {
            title: "Build a Loyal Network",
            description: "Gain regular neighborhood clients with recurring walks.",
          },
          {
            title: "First-Aid Support",
            description: "Sponsorship and tutorials for veterinary first-aid certificates.",
          },
        ],
      },
    ],
    ctaLabel: "Find a Pet Caregiver",
  },
  {
    slug: "concierge",
    thumbnail: conciergeThumbnail,
    thumbnailAlt: "Concierge",
    image: conciergeDetail,
    imageAlt: "Residence lobby",
    badge: "Premium Assistance",
    title: "Personal Concierge",
    subtitle: "Bespoke administrative and lifestyle coordination tailored to your day",
    overviewTitle: "Take back your hours with professional coordination",
    overview: "We connect busy professionals and active households with vetted, dedicated personal assistants. From errand running and scheduling to complex travel and event planning, our concierges bring exceptional organizational skill and absolute discretion directly to your personal tasks.",
    inclusionsTitle: "What This Service Includes",
    inclusions: [
      {
        icon: Truck,
        title: "Errands & Deliveries",
        description: "Seamless transport of prescription pick-ups, groceries, and essential drop-offs.",
      },
      {
        icon: Calendar,
        title: "Appointment Coordination",
        description: "Managing household repairs, medical visits, and family calendars seamlessly.",
      },
      {
        icon: Globe,
        title: "Travel & Itinerary Planning",
        description: "Booking flights, local accommodation, premium transit, and curating experiences.",
      },
      {
        icon: Gift,
        title: "Event Coordination",
        description: "From booking private caterers to coordinating seating arrangements for family meals.",
      },
      {
        icon: ShoppingBag,
        title: "Personal Shopping",
        description: "Sourcing gifts, seasonal wardrobes, specialized household items, and groceries.",
      },
      {
        icon: FileText,
        title: "Admin Assistance",
        description: "Expense tracking, sorting bills, digital document organization, and basic calls.",
      },
    ],
    audiences: [
      {
        title: "For Families & Clients",
        icon: Check,
        points: [
          {
            title: "Single Point of Contact",
            description: "Enjoy streamlined coordination with your dedicated assistant managing everything.",
          },
          {
            title: "Save Hours Every Week",
            description: "Delegate repetitive admin chores and regain time for high-value pursuits.",
          },
          {
            title: "Discreet & Confidential",
            description: "All specialists adhere to strict non-disclosure, ensuring ultimate household privacy.",
          },
          {
            title: "Fully Scalable Engagement",
            description: "Effortlessly shift from one-off tasks to ongoing monthly scheduling.",
          },
        ],
      },
      {
        title: "For Care Professionals",
        icon: Shield,
        points: [
          {
            title: "Diverse & Engaging Tasks",
            description: "Every week brings unique planning projects, dynamic schedules, and fresh tasks.",
          },
          {
            title: "Premium Client Relationships",
            description: "Collaborate with top-tier clients who deeply appreciate professional precision.",
          },
          {
            title: "Set Your Specialties",
            description: "Offer specific skills like booking travel, event design, or accounting administration.",
          },
          {
            title: "Business Growth Support",
            description: "Leverage Avelliq tools to streamline invoice tracking, insurance, and billing.",
          },
        ],
      },
    ],
    ctaLabel: "Find a Concierge",
  },
]
