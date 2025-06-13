import type { ReactNode } from "react";

type LinkBlueProps = {
  href: string;
  children: ReactNode;
  icon: ReactNode;
};

export default function LinkBlue({ href, children, icon }: LinkBlueProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg shadow-blue-600/30"
    >
      {icon}
      <span className="font-semibold">{children}</span>
    </a>
  );
}
