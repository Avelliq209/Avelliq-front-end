type Tab = "need" | "help"

interface ButtonProps {
  title: string;
  activeTab: Tab;
  onClick: ()=> void;
  content: string;
}

interface ServiceCard {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
  items: string[];
  ctaLabel: string;
}

interface ProfessionalPoint {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ButtonNav {
  name: string;
  isArror: boolean;
  className: string;
  onClick: ()=> void;
}

interface ImageProps {
  link: string;
  alt: string;
}

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatarUrl: string;
  rating: number;
}

interface SlideCardProps {
  index: number;
  bg: number;
  item: Testimonial;
  onClick: (num: number) => void;
}