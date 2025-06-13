import {
  Briefcase,
  Calendar,
  ChevronRight,
  Github,
  Monitor,
} from "lucide-react";

import TechIcon from "../common/ui/icon/TechIcon";
import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

export default function ProjectSection() {
  const projects = [
    {
      title: "Personal Health Management",
      period: "13/03/2025 – 01/06/2025",
      type: "Academic Project",
      tech: ["React", "Node.js", "MongoDB", "Blender", "Cloudflare", "Ollama"],
      description:
        "Led a 3-member team to develop a health-tracking web application with AI and 3D visualization.",
      highlights: [
        "Developed the entire backend and configured MongoDB Atlas and Cloudflare routing",
        "Built the admin dashboard and user profile interface",
        "Integrated Ollama (LLaMA 3) and optimized input/output processing for workout generation",
        "Implemented health tracking logic and 3D rendering preparation for character visualizations",
      ],
      github: "Private repository (Academic project)",
      report: true,
    },
    {
      title: "Startup Investment Support Platform",
      period: "08/03/2025 – 10/04/2025",
      type: "Academic Project",
      tech: ["ASP.NET Core MVC", "SQL Server", "SignalR"],
      description:
        "Led a 4-member team in designing and building a web-based investment platform connecting startups with investors.",
      highlights: [
        "Designed and implemented the entire frontend UI/UX using Razor and Bootstrap",
        "Analyzed and designed system architecture including database schema and user flow",
        "Built real-time chat and investment status update features using SignalR",
        "Implemented user login and role-based authorization for both startups and investors",
      ],
      github: "https://github.com/HuynhTri-dev/QuanLyStartup.git",
    },
    {
      title: "Rental Management",
      period: "16/01/2025 – 02/02/2025",
      type: "Personal Project",
      tech: ["C#", ".NET Framework", "SQL Server", "SQLite"],
      description:
        "Developed a desktop application to streamline the management of rental properties.",
      highlights: [
        "Independently designed and developed the entire system",
        "Implemented room tracking, tenant profiles, rental history, and billing features",
        "Designed UI/UX using WinForms and managed data persistence with SQL Server and SQLite",
      ],
      github:
        "https://topcode.vn/source-code/code-phan-mem-quan-ly-nha-tro-52834.htm",
    },
    {
      title: "Clothing Store Management",
      period: "03/2024 – 05/2024",
      type: "Academic Project",
      tech: ["C#", ".NET WinForms", "SQL Server", "Google Maps API"],
      description:
        "Developed a desktop application to manage clothing product data, inventory levels, and sales operations.",
      highlights: [
        "Served as the main backend developer of the team",
        "Implemented product, inventory, and sales logic with database interaction",
        "Integrated Google Maps API to identify delivery location",
        "Handled printing and revenue reporting functionality",
      ],
      github: "Private Repository",
      report: true,
    },
  ];

  const [selected, setSelected] = useState(0);

  const selectedProject = projects[selected];

  return (
    <div className="animate-fade-in container mx-auto max-w-6xl px-4 pb-20">
      <div className="flex items-center gap-3 mb-10">
        <Briefcase className="w-8 h-8 text-blue-500" />
        <h2 className="text-4xl font-bold text-white">Project Experience</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Project List */}
        <div className="space-y-3">
          {projects.map((project, index) => {
            const isSelected = selected === index;
            return (
              <div
                key={index}
                className={`cursor-pointer p-4 rounded-xl border transition-all duration-200 ${
                  isSelected
                    ? "border-blue-500 bg-blue-950/40 shadow-md"
                    : "border-gray-700 bg-gray-800/50 hover:border-blue-400"
                }`}
                onClick={() => setSelected(index)}
              >
                <h3 className="text-lg font-semibold text-blue-300">
                  {project.title}
                </h3>
                <div className="flex gap-3 text-sm text-gray-400 mt-1">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{project.period}</span>
                  </div>
                  <span className="px-2 py-0.5 bg-yellow-300/20 text-yellow-300 rounded-full">
                    {project.type}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Project Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected} // thay đổi khi chọn project mới
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="rounded-xl border border-gray-700 bg-gray-900/60 backdrop-blur p-6 space-y-6">
              <h3 className="text-2xl font-bold text-blue-300">
                {selectedProject.title}
              </h3>
              <p className="text-gray-300 text-base">
                {selectedProject.description}
              </p>

              <div>
                <h4 className="text-blue-300 font-semibold mb-2">
                  Key Highlights
                </h4>
                <ul className="space-y-2 text-gray-300">
                  {selectedProject.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex gap-2">
                      <ChevronRight className="w-4 h-4 text-blue-400 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-blue-300 font-semibold mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <TechIcon key={tech} tech={tech} />
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-1.5 text-sm bg-gray-700 hover:bg-gray-600 rounded-full transition"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
                {selectedProject.report && (
                  <button className="flex items-center gap-2 px-4 py-1.5 text-sm border border-blue-600 text-blue-400 rounded-full hover:bg-blue-600/10 transition">
                    <Monitor className="w-4 h-4" />
                    View Report
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
