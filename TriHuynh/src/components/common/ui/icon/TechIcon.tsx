import {
  Cloud,
  Code,
  Cpu,
  Database,
  Terminal,
  Users,
  Bug,
  Globe,
  Clock,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

type TechIconProps = {
  tech: string;
};

// Mảng ánh xạ từ các từ khóa đến icon
const keywordIconMap: { keywords: string[]; icon: LucideIcon }[] = [
  {
    keywords: ["react", "javascript", "typescript", "c#", "python", "php"],
    icon: Code,
  },
  {
    keywords: ["mongodb", "sql", "postgres", "sqlite"],
    icon: Database,
  },
  {
    keywords: ["cloud", "api", "socket", "websocket", "rest"],
    icon: Cloud,
  },
  {
    keywords: ["asp.net", "node.js", "express", "flask"],
    icon: Terminal,
  },
  // Soft skills
  {
    keywords: ["leadership", "team", "leader"],
    icon: Users,
  },
  {
    keywords: ["problem", "debug", "solution", "resolve"],
    icon: Bug,
  },
  {
    keywords: ["english", "communication", "language"],
    icon: Globe,
  },
  {
    keywords: ["time", "deadline", "schedule", "planning"],
    icon: Clock,
  },
];

export default function TechIcon({ tech }: TechIconProps) {
  const lowerTech = tech.toLowerCase();

  const matched = keywordIconMap.find(({ keywords }) =>
    keywords.some((k) => lowerTech.includes(k))
  );

  const Icon = matched?.icon ?? Cpu;

  return (
    <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-900/30 border border-blue-700/50 rounded-md text-xs text-blue-200 hover:bg-blue-800/40 transition-colors">
      <Icon className="w-4 h-4" />
      {tech}
    </span>
  );
}
