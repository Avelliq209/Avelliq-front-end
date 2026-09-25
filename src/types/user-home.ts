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
