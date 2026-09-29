interface ServiceCard {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
  items: string[];
  ctaLabel: string;
}

interface ServiceHeaderProps {
  title: string;
  maxWidthTitle: string;
}
