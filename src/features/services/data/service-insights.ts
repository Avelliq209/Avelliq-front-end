import {
  BadgeCheck,
  BookOpen,
  BriefcaseMedical,
  Calendar,
  CalendarCheck,
  CircleX,
  Clock,
  Heart,
  House,
  Lock,
  Shield,
} from "lucide-react"

import type { ServiceInsight } from "../types"

const SCREENING_LINK = "Learn more about our screening process"
const BACKGROUND_SCREENING_LINK = "Learn more about our background screening process"
const HOME_AND_FAMILY_CLOSING = "Your home and family deserve the best care, and so do you."

export const SERVICE_INSIGHTS: ServiceInsight[] = [
  {
    slug: "childcare",
    badge: "National Crisis",
    stat: "4.8 Million",
    statement:
      "American families say they don't have access to affordable, quality childcare.",
    tagline: "You're not alone, and you deserve better.",
    challengeTitle: "The Childcare Challenge Is Real",
    facts: [
      { value: "57%", label: "of parents say childcare costs exceed their monthly rent or mortgage" },
      {
        value: "1 in 3",
        label: "families rely on informal care from relatives who may lack training in child development",
      },
      {
        value: "35%",
        label: "of mothers have reduced work hours or left jobs entirely due to lack of reliable childcare",
      },
      {
        value: "$16k",
        label: "average annual cost of daycare per child, but quality care shouldn't break the bank",
      },
    ],
    benefitsTitle: "Why Professional Childcare Matters",
    benefits: [
      {
        icon: BookOpen,
        title: "More Than Just Watching Kids",
        description:
          "Professional caregivers are trained in early childhood development, CPR, and safety protocols. Your child gets structured learning, creative play, and developmental milestones, not just screen time.",
      },
      {
        icon: Heart,
        title: "Family Help Is Wonderful, But...",
        description:
          "Grandparents and relatives mean well, but they may not be up to date on safety standards, dietary needs, or developmental activities. A professional complements family care with expertise.",
      },
      {
        icon: Calendar,
        title: "Flexible & Affordable Options",
        description:
          "Unlike rigid daycare schedules, Avelliq professionals work around YOUR life. Choose your hours, your budget, and your preferred caregiver, starting from $20/hr.",
      },
      {
        icon: Shield,
        title: "Peace of Mind You Can Trust",
        description:
          "Every Avelliq caregiver is background-checked, credential-verified, and continuously reviewed. Real-time updates, GPS check-ins, and 24/7 support keep you in the loop.",
      },
    ],
    proofPoints: ["12,000+ Families Trust Us", "4.9★ Average Rating", "98% Rebooking Rate"],
    closingLine: "Your child deserves the best care, and so do you.",
    ctaLabel: "Find a Childcare Professional",
    screeningLinkLabel: SCREENING_LINK,
  },
  {
    slug: "housekeeping",
    badge: "Household Wellness",
    stat: "82%",
    statement:
      "of dual-income households say they struggle to keep up with housework, leading to stress, burnout, and tension at home.",
    tagline: "A clean home shouldn't cost your peace of mind.",
    challengeTitle: "The Challenge Is Real",
    facts: [
      {
        value: "25 hrs",
        label: "Average hours per week Americans spend on household chores: that's a part-time job",
      },
      { value: "67%", label: "of couples say housework is a top source of conflict in their relationship" },
      { value: "3 in 5", label: "parents say a messy home increases their stress and anxiety levels" },
      { value: "$180", label: "Average weekly cost of professional cleaning, less than most think" },
    ],
    benefitsTitle: "Why Professional Housekeeping Matters",
    benefits: [
      {
        icon: Clock,
        title: "Reclaim Your Weekends",
        description:
          "Stop spending Saturday scrubbing bathrooms. Professional housekeepers handle everything from deep cleaning to laundry so you can enjoy time with family and friends.",
      },
      {
        icon: CircleX,
        title: "DIY Cleaning Has Limits",
        description:
          "Surface cleaning is one thing, but professionals use commercial-grade techniques that eliminate allergens, bacteria, and hidden grime that regular cleaning misses.",
      },
      {
        icon: CalendarCheck,
        title: "Consistent, Reliable Schedules",
        description:
          "No more last-minute cleaning scrambles before guests arrive. Set a recurring schedule that keeps your home fresh and ready, always.",
      },
      {
        icon: BadgeCheck,
        title: "Vetted & Insured Professionals",
        description:
          "Every Avelliq housekeeper is background-checked, insured, and reviewed by real clients. Your home is in trusted hands.",
      },
    ],
    proofPoints: ["8,500+ Homes Cleaned Monthly", "4.8★ Average Rating", "95% Rebook Weekly"],
    closingLine: HOME_AND_FAMILY_CLOSING,
    ctaLabel: "Find a Housekeeping Professional",
    screeningLinkLabel: BACKGROUND_SCREENING_LINK,
  },
  {
    slug: "house-sitters",
    badge: "Property Protection",
    stat: "65%",
    statement:
      "of homeowners worry about their property when they travel. Break-ins, burst pipes, and neglected pets are top concerns.",
    tagline: "Travel with confidence. Your home is in safe hands.",
    challengeTitle: "The Challenge Is Real",
    facts: [
      {
        value: "2.5M",
        label: "Home burglaries happen annually in the US, and empty homes are the #1 target",
      },
      { value: "40%", label: "of break-ins occur when homeowners are on vacation or extended trips" },
      { value: "$3,400", label: "Average loss per residential burglary: prevention is far cheaper" },
      {
        value: "1 in 4",
        label: "homeowners have returned to property damage that could have been prevented",
      },
    ],
    benefitsTitle: "Why Professional House Sitting Matters",
    benefits: [
      {
        icon: House,
        title: "More Than Just Checking In",
        description:
          "Professional house sitters live in your home, maintaining its routine, collecting mail, watering plants, deterring break-ins, and handling emergencies in real-time.",
      },
      {
        icon: Shield,
        title: "Neighbors Can Only Do So Much",
        description:
          "Asking a neighbor to check in is nice, but they can't spot a leak at 2am or be there when a delivery needs signing. Professionals provide 24/7 presence.",
      },
      {
        icon: Heart,
        title: "Your Pets Stay Home & Happy",
        description:
          "No stressful kennels. Your pets stay in their environment with a trusted sitter who follows their feeding, walking, and medication routines.",
      },
      {
        icon: Lock,
        title: "Daily Reports & Peace of Mind",
        description:
          "Get photo updates, security check-ins, and instant alerts if anything needs attention. Travel without constantly worrying.",
      },
    ],
    proofPoints: ["3,200+ Homes Protected", "4.9★ Average Rating", "99.2% Incident-Free Rate"],
    closingLine: HOME_AND_FAMILY_CLOSING,
    ctaLabel: "Find a House Sitter",
    screeningLinkLabel: BACKGROUND_SCREENING_LINK,
  },
  {
    slug: "senior-care",
    badge: "Family Elder Support",
    stat: "10,000",
    statement:
      "Americans turn 65 every single day and 70% will need some form of long-term care in their lifetime.",
    tagline: "Your loved ones deserve care that feels like family.",
    challengeTitle: "The Challenge Is Real",
    facts: [
      {
        value: "$5,148",
        label: "Monthly median cost of assisted living. In-home care is more affordable and personal",
      },
      { value: "87%", label: "of seniors say they prefer to age in the comfort of their own home" },
      {
        value: "53M",
        label: "Americans serve as unpaid family caregivers, often sacrificing their own health and careers",
      },
      { value: "1 in 3", label: "family caregivers report high emotional stress and burnout" },
    ],
    benefitsTitle: "Why Professional Senior Care Matters",
    benefits: [
      {
        icon: House,
        title: "Aging in Place, With Dignity",
        description:
          "Professional caregivers help seniors maintain independence in their own home, with assistance for daily living, mobility, and companionship.",
      },
      {
        icon: BriefcaseMedical,
        title: "Family Love Isn't Enough",
        description:
          "You love your parents, but managing medications, mobility assistance, and cognitive care requires training. Professionals complement your love with expertise.",
      },
      {
        icon: Shield,
        title: "Personalized, One-on-One Attention",
        description:
          "Unlike facilities with stretched staff, in-home caregivers focus entirely on your loved one's unique needs, routines, and preferences.",
      },
      {
        icon: Heart,
        title: "Relief for the Whole Family",
        description:
          "When a professional handles daily care, family members can be present as loved ones again, not exhausted caregivers.",
      },
    ],
    proofPoints: ["15,000+ Families Supported", "4.9★ Average Rating", "97% Family Satisfaction"],
    closingLine: HOME_AND_FAMILY_CLOSING,
    ctaLabel: "Find a Senior Care Professional",
    screeningLinkLabel: BACKGROUND_SCREENING_LINK,
  },
  {
    slug: "concierge",
    badge: "Executive Wellness",
    stat: "76%",
    statement:
      "of high-earning professionals say they lose 10+ hours per week on errands, appointments, and life admin they wish someone else could handle.",
    tagline: "Your time is your most valuable asset. Start treating it that way.",
    challengeTitle: "The Admin Challenge Is Real",
    facts: [
      {
        value: "10+ hrs",
        label: "Lost weekly to errands, scheduling, and life logistics for the average professional",
      },
      {
        value: "$150B",
        label: "The personal concierge industry is booming because time poverty is real",
      },
      {
        value: "68%",
        label: "of executives say delegating personal tasks improved their work performance",
      },
      {
        value: "4 in 5",
        label: "professionals say they'd pay to get their personal time back from life admin",
      },
    ],
    benefitsTitle: "Why Professional Concierge Matters",
    benefits: [
      {
        icon: Calendar,
        title: "Beyond a To-Do List",
        description:
          "A personal concierge handles everything from booking travel and managing appointments to coordinating home repairs and sourcing hard-to-find items. They're your life's project manager.",
      },
      {
        icon: Clock,
        title: "Time Is Non-Renewable",
        description:
          "You can earn more money, but you can't earn more time. Every hour spent in line at the DMV or coordinating deliveries is an hour away from what matters most.",
      },
      {
        icon: Heart,
        title: "Personalized to Your Life",
        description:
          "Unlike generic task apps, a concierge learns your preferences, routines, and priorities. They anticipate needs before you even ask.",
      },
      {
        icon: Shield,
        title: "Trusted & Discreet",
        description:
          "Avelliq concierge professionals are vetted for reliability and discretion. They handle sensitive tasks with the professionalism your life demands.",
      },
    ],
    proofPoints: ["5,200+ Professionals Served", "4.8★ Average Rating", "92% Retain Monthly"],
    closingLine: "Your life deserves the best support, and so do you.",
    ctaLabel: "Find a Concierge Professional",
    screeningLinkLabel: SCREENING_LINK,
  },
  {
    slug: "pet-care",
    badge: "Pet Wellness",
    stat: "67%",
    statement:
      "of American households own a pet, yet 44% of pet owners say finding reliable, trustworthy care is their biggest challenge.",
    tagline: "Your pet deserves the same quality of care you'd want for yourself.",
    challengeTitle: "The Pet Care Challenge Is Real",
    facts: [
      {
        value: "65M",
        label: "US households with dogs, and most struggle to find consistent, quality care",
      },
      {
        value: "$136B",
        label: "Americans spend annually on pets, and quality care is the #1 expense category",
      },
      {
        value: "1 in 3",
        label: "pet owners have cancelled plans because they couldn't find a trusted sitter",
      },
      {
        value: "85%",
        label: "of pets show anxiety in kennels. Home-based care keeps them calm and happy",
      },
    ],
    benefitsTitle: "Why Professional Pet Care Matters",
    benefits: [
      {
        icon: BookOpen,
        title: "More Than Just a Walk",
        description:
          "Professional pet caregivers provide structured exercise, socialization, medication administration, and genuine companionship, not just a quick lap around the block.",
      },
      {
        icon: Heart,
        title: "Kennels Are Stressful",
        description:
          "Most pets are happier in familiar environments. In-home pet care eliminates the anxiety of loud, crowded boarding facilities and keeps your pet in their comfort zone.",
      },
      {
        icon: Calendar,
        title: "Your Pet's Routine Matters",
        description:
          "Feeding times, favourite spots, medication schedules: a professional caregiver follows your pet's exact routine, ensuring consistency even when you're away.",
      },
      {
        icon: Shield,
        title: "Vetted Animal Lovers",
        description:
          "Every Avelliq pet care professional is background-checked, experienced with animals, and genuinely passionate about pet wellbeing. Many hold pet first-aid certifications.",
      },
    ],
    proofPoints: ["12,000+ Pets Cared For", "4.9★ Average Rating", "98% Owner Satisfaction"],
    closingLine: HOME_AND_FAMILY_CLOSING,
    ctaLabel: "Find a Pet Care Professional",
    screeningLinkLabel: SCREENING_LINK,
  },
]

export const SERVICE_INSIGHTS_BY_SLUG = new Map(
  SERVICE_INSIGHTS.map((insight) => [insight.slug, insight])
)
