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
      className="flex items-center gap-2 px-6 py-3 border border-yellow-400/50 rounded-lg hover:bg-yellow-400/10 transition-all duration-300"
    >
      {icon}
      <span className="text-yellow-400 font-semibold">{children}</span>
    </a>
  );
}
