import { useEffect, useState, type JSX } from "react";
import {
  Code,
  Server,
  Layout,
  Database,
  Cloud,
  Wrench,
  Users,
} from "lucide-react";

import TechIcon from "../common/ui/icon/TechIcon";

import { AnimatePresence, motion } from "framer-motion";

export default function SkillsSection() {
  type SkillLevel = "Advanced" | "Intermediate" | "Beginner";

  type SkillItem = {
    name: string;
    level: SkillLevel;
    description?: string;
  };

  type SkillGroup = {
    title: string;
    skills: SkillItem[];
  };

  const skills: SkillGroup[] = [
    {
      title: "Programming Languages",
      skills: [
        {
          name: "C#",
          level: "Advanced",
          description: "Main backend language with ASP.NET",
        },
        {
          name: "JavaScript",
          level: "Advanced",
          description: "Used across fullstack projects",
        },
        {
          name: "TypeScript",
          level: "Intermediate",
          description: "Type-safe React & Node",
        },
        {
          name: "Python",
          level: "Intermediate",
          description: "AI model training, Flask",
        },
        {
          name: "PHP",
          level: "Intermediate",
          description: "Basic web CRUD apps",
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "ASP.NET Core",
          level: "Advanced",
          description: "Primary REST API framework",
        },
        {
          name: "Node.js (Express)",
          level: "Intermediate",
          description: "Quick APIs & services",
        },
        {
          name: "Flask",
          level: "Intermediate",
          description: "Lightweight Python API",
        },
        {
          name: "RESTful APIs",
          level: "Advanced",
          description: "Designed & documented REST",
        },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", level: "Advanced", description: "Main UI framework" },
        {
          name: "Tailwind",
          level: "Advanced",
          description: "Used in all current projects",
        },
        { name: "Bootstrap", level: "Intermediate", description: "Legacy UI" },
      ],
    },
    {
      title: "Database",
      skills: [
        {
          name: "MongoDB",
          level: "Advanced",
          description: "With Mongoose & Atlas",
        },
        {
          name: "SQL Server",
          level: "Intermediate",
          description: "Enterprise relational DB",
        },
      ],
    },
    {
      title: "Real-time & Cloud",
      skills: [
        {
          name: "SignalR",
          level: "Intermediate",
          description: "Chat & dashboards",
        },
        {
          name: "WebSocket",
          level: "Intermediate",
          description: "Custom socket handling",
        },
        {
          name: "Google Drive API",
          level: "Intermediate",
          description: "Document storage",
        },
        {
          name: "Microsoft Graph API",
          level: "Beginner",
          description: "Office365 integrations",
        },
        {
          name: "MongoDB Atlas",
          level: "Advanced",
          description: "Cloud-hosted MongoDB",
        },
        {
          name: "Cloudflare",
          level: "Intermediate",
          description: "DNS, cache, firewall",
        },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: "Advanced", description: "CLI, GitHub, GitLab" },
        { name: "Postman", level: "Advanced", description: "API testing" },
        { name: "Figma", level: "Intermediate", description: "UI design" },
        { name: "n8n", level: "Beginner", description: "Automation flows" },
        {
          name: "Blender",
          level: "Beginner",
          description: "3D modeling for fun",
        },
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        {
          name: "Leadership",
          level: "Advanced",
          description:
            "Led multiple teams (3–12 members) in academic and freelance projects",
        },
        {
          name: "Problem Solving",
          level: "Advanced",
          description:
            "Strong debugging, conflict resolution, and crisis handling across both technical and interpersonal scenarios",
        },
        {
          name: "English Communication",
          level: "Intermediate",
          description:
            "B2-certified, preparing for IELTS; used daily in customer service at McDonald’s (80% foreign customers)",
        },
        {
          name: "Time Management",
          level: "Advanced",
          description:
            "Consistently finished projects early to allow extra time for testing and improvements",
        },
      ],
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  // Auto switch every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % skills.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [skills.length]);

  const levelToColor = {
    Advanced: "bg-green-500",
    Intermediate: "bg-yellow-500",
    Beginner: "bg-red-500",
  };

  const groupIcons: Record<string, JSX.Element> = {
    "Programming Languages": <Code className="w-5 h-5" />,
    Backend: <Server className="w-5 h-5" />,
    Frontend: <Layout className="w-5 h-5" />,
    Database: <Database className="w-5 h-5" />,
    "Real-time & Cloud": <Cloud className="w-5 h-5" />,
    "Tools & Others": <Wrench className="w-5 h-5" />,
    "Soft Skills": <Users className="w-5 h-5" />, // hoặc icon khác như `UserCheck`, `UserCircle`
  };

  return (
    <div className="container mx-auto max-w-5xl px-4 pb-10 pt-20 animate-fade-in">
      <div className="flex items-center gap-3 mb-8">
        <Code className="w-8 h-8 text-blue-400" />
        <h2 className="text-2xl md:text-4xl font-bold">Technical Skills</h2>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-3 gap-6">
        {/* Skill Groups (Tabs) */}
        <div className="flex md:flex-col overflow-x-auto md:overflow-visible gap-3 pb-2 md:pb-0">
          {skills.map((group, idx) => {
            const isActive = selectedIndex === idx;
            return (
              <button
                key={group.title}
                onClick={() => setSelectedIndex(idx)}
                className={`flex-shrink-0 w-fit md:w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-300
              border ${
                isActive
                  ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white border-blue-400 shadow-md"
                  : "bg-gray-800 text-gray-300 border-transparent hover:border-blue-400 hover:bg-gray-700"
              }`}
              >
                <div className="text-blue-300">{groupIcons[group.title]}</div>
                <span className="whitespace-nowrap md:block hidden">
                  {group.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skill Detail */}
        <div className="md:col-span-2 bg-gradient-to-br from-gray-800/60 to-blue-900/30 p-6 rounded-xl border border-blue-700/30 shadow">
          <h3 className="text-2xl font-semibold mb-4 text-blue-300">
            {skills[selectedIndex].title}
          </h3>

          <div className="space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ y: 20, opacity: 0, scale: 0.98 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: -20, opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.25, 0.8, 0.25, 1] }}
              >
                <div className="space-y-4">
                  {skills[selectedIndex].skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col sm:grid sm:grid-cols-6 gap-2"
                    >
                      <div className="sm:col-span-2 flex items-center">
                        <TechIcon tech={skill.name} />
                      </div>
                      <div className="sm:col-span-4 sm:col-start-3">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-medium text-white">
                            {skill.name}
                          </span>
                          <span
                            className={`text-xs font-semibold px-2 py-1 rounded ${
                              levelToColor[skill.level]
                            } text-white`}
                          >
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-sm text-gray-300 leading-snug md:leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
