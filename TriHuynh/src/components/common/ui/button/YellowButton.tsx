import type { ReactNode } from "react";

type YellowButtonProps = {
  icon?: ReactNode;
  children?: ReactNode;
  onClick?: () => void;
};

export default function YellowButton({
  icon,
  children,
  onClick,
}: YellowButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-6 py-3 border border-yellow-400/50 rounded-lg hover:bg-yellow-400/10 transition-all duration-300"
    >
      {icon}
      <span className="text-yellow-400">{children}</span>
    </button>
  );
}
