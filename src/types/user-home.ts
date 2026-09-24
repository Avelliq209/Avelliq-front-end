type Tab = "need" | "help"

interface ButtonProps {
  title: string;
  activeTab: Tab;
  onClick: ()=> void;
  content: string;
}
