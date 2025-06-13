import {
  Briefcase,
  Calendar,
  ChevronRight,
  FileText,
  Github,
  Monitor,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import TechIcon from "../common/ui/icon/TechIcon";
import useMediaQuery from "../../hooks/useMediaQuery";

import CuaHangLogo from "../../assets/ProjectLogo/CuaHangQuanAo_Logo.png";
import PersonalHealthLogo from "../../assets/ProjectLogo/PersonalHealthLogo.jpg";
import RentalManageLogo from "../../assets/ProjectLogo/RentalManageLogo.png";
import StartupInvestmentLogo from "../../assets/ProjectLogo/StartupInvestmentLogo.png";

export default function ProjectSection() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const projects = [
    {
      title: "Personal Health Management",
      logoUrl: PersonalHealthLogo,
      period: "13/03/2025 – 01/06/2025",
      type: "Academic Project",
      tech: [
        "React",
        "Node.js",
        "MongoDB",
        "Blender",
        "Cloudflare",
        "Ollama",
        "Tailwind",
      ],
      description:
        "Co-led the development of a web app for tracking personal health metrics, offering AI-driven health analysis and interactive 3D data visualization.",
      highlights: [
        "Developed the entire backend and configured MongoDB Atlas and Cloudflare routing",
        "Built the admin dashboard and user profile interface",
        "Integrated Ollama (LLaMA 3) and optimized input/output processing for workout generation",
        "Implemented health tracking logic and 3D rendering preparation for character visualizations",
      ],
      github: "Private",
      report:
        "https://docs.google.com/document/d/1N_X9Yp9EmkKTj3f8XkGKoent3lBrwHxJ/edit?usp=drive_link&ouid=101122410522057441848&rtpof=true&sd=true",
      demo: "https://drive.google.com/file/d/1yNaTZKqx6QcsDiQ6vRZOaCd3UV9dqvFq/view?usp=drive_link",
    },
    {
      title: "Startup Investment Support Platform",
      logoUrl: StartupInvestmentLogo,
      period: "08/03/2025 – 10/04/2025",
      type: "Academic Project",
      tech: ["C#", "ASP.NET Core MVC", "SQL Server", "SignalR", "Bootstrap"],
      description:
        "Led a 4-member team in designing and building a web-based investment platform connecting startups with investors.",
      highlights: [
        "Designed and implemented the entire frontend UI/UX using Razor and Bootstrap",
        "Analyzed and designed system architecture including database schema and user flow",
        "Built real-time chat and investment status update features using SignalR",
        "Implemented user login and role-based authorization for both startups and investors",
      ],
      github: "https://github.com/HuynhTri-dev/QuanLyStartup.git",
      report:
        "https://drive.google.com/file/d/1BhCjDYKf8oS_8Ewoln1FqVtqh1QPfgLI/view?usp=sharing",
    },
    {
      title: "Rental Management",
      logoUrl: RentalManageLogo,
      period: "16/01/2025 – 02/02/2025",
      type: "Personal Project",
      tech: ["C#", ".NET Framework", "SQL Server"],
      description:
        "Built a desktop application to assist my family in efficiently managing rental properties, including tenant tracking, contract handling.",
      highlights: [
        "Independently designed and developed the entire system",
        "Implemented room tracking, tenant profiles, rental history, and billing features",
        "Designed UI/UX using WinForms and managed data persistence with SQL Server",
      ],
      github:
        "https://topcode.vn/source-code/code-phan-mem-quan-ly-nha-tro-52834.htm",
      demo: "https://www.youtube.com/watch?v=AI_xnSI6IxQ",
    },
    {
      title: "Clothing Store Management",
      logoUrl: CuaHangLogo,
      period: "03/2024 – 05/2024",
      type: "Academic Project",
      tech: ["C#", ".NET WinForms", "SQL Server", "Google Maps API"],
      description:
        "Led a team of 4 to develop a desktop application for managing a clothing store, including product pricing, data storage, and sales statistics tracking.",
      highlights: [
        "Served as the main backend developer of the team",
        "Implemented product, inventory, and sales logic with database interaction",
        "Integrated Google Maps API to identify delivery location",
        "Handled printing and revenue reporting functionality",
      ],
      github: "https://github.com/HuynhTri-dev/DoAnWin_ManageClothStore.git",
      report:
        "https://drive.google.com/file/d/1Ctwnjz4G6uI_ByCnYvROO0Rd67apR2Dl/view?usp=drive_link",
    },
  ];

  const [selected, setSelected] = useState(0);

  return (
    <div className="animate-fade-in container mx-auto max-w-6xl px-4 pb-20 pt-20">
      <div className="flex items-center gap-3 mb-10">
        <Briefcase className="w-8 h-8 text-blue-500" />
        <h2 className="text-2xl md:text-4xl font-bold text-white">
          Project Experience
        </h2>
      </div>

      {isMobile ? (
        // Mobile: accordion view
        <div className="space-y-4">
          {projects.map((project, index) => {
            const isOpen = selected === index;
            return (
              <div
                key={index}
                className="border rounded-xl border-gray-700 bg-gray-800/50"
              >
                <button
                  className="w-full flex items-center justify-between p-4"
                  onClick={() => setSelected(isOpen ? -1 : index)}
                >
                  <div className="flex items-center">
                    <img
                      src={project.logoUrl}
                      alt={project.title}
                      className="w-10 h-10 rounded-lg object-cover mr-3"
                    />
                    <span className="text-center text-md font-semibold text-blue-300">
                      {project.title}
                    </span>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 text-gray-300 transition-transform ${
                      isOpen ? "rotate-90" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-4 pb-4 space-y-4"
                    >
                      <p className="text-gray-300">{project.description}</p>

                      <div>
                        <h4 className="text-blue-300 font-semibold">
                          My Roles
                        </h4>
                        <ul className="space-y-2 text-gray-300 mt-1">
                          {project.highlights.map((hl, i) => (
                            <li key={i} className="flex gap-2">
                              <ChevronRight className="w-4 h-4 text-blue-400 mt-0.5" />
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-blue-300 font-semibold">
                          Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {project.tech.map((t) => (
                            <TechIcon key={t} tech={t} />
                          ))}
                        </div>
                      </div>

                      {/* Link group layout */}
                      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 mt-4 w-[160px] mx-auto">
                        {/* GitHub Link */}
                        {project.github === "Private" ? (
                          <span className="flex items-center gap-2 px-4 py-1.5 text-sm bg-gray-700 text-gray-300 rounded-full transition cursor-not-allowed">
                            <Github className="w-4 h-4" />
                            Private Code
                          </span>
                        ) : (
                          project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-1.5 text-sm border border-blue-600 text-blue-400 rounded-full hover:bg-blue-600/10 transition"
                            >
                              <Github className="w-4 h-4" />
                              Public Code
                            </a>
                          )
                        )}

                        {/* Report */}
                        {project.report && (
                          <a
                            href={project.report}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-1.5 text-sm border border-blue-600 text-blue-400 rounded-full hover:bg-blue-600/10 transition"
                          >
                            <FileText className="w-4 h-4" />
                            View Report
                          </a>
                        )}

                        {/* Demo */}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-1.5 text-sm border border-green-600 text-green-400 rounded-full hover:bg-green-600/10 transition"
                          >
                            <Monitor className="w-4 h-4" />
                            Demo Project
                          </a>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      ) : (
        // Desktop: 2-column layout
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            {projects.map((project, index) => {
              const isSelected = selected === index;
              return (
                <div
                  key={index}
                  className={`cursor-pointer p-4 md:p-5 rounded-xl border transition-all duration-200 ${
                    isSelected
                      ? "border-blue-500 bg-blue-950/40 shadow-md"
                      : "border-gray-700 bg-gray-800/50 hover:border-blue-400"
                  }`}
                  onClick={() => setSelected(index)}
                >
                  <div className="flex items-center">
                    <img
                      src={project.logoUrl}
                      alt={project.title}
                      className="w-12 h-12 rounded-lg object-cover mr-4 flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h3 className="text-base md:text-lg font-semibold text-blue-300 mb-2">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 text-sm text-gray-400 mt-1">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{project.period}</span>
                        </div>
                        <span
                          className={
                            `px-2 py-1 rounded-full ` +
                            (project.type === "Personal Project"
                              ? "bg-blue-300/20 text-blue-300"
                              : "bg-yellow-300/20 text-yellow-300")
                          }
                        >
                          {project.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="rounded-xl border border-gray-700 bg-gray-900/60 backdrop-blur p-4 md:p-6 space-y-6 min-h-[300px]">
                <h3 className="text-xl md:text-2xl font-bold text-blue-300">
                  {projects[selected].title}
                </h3>
                <p className="text-gray-300 text-base">
                  {projects[selected].description}
                </p>

                <div>
                  <h4 className="text-blue-300 font-semibold mb-2">My Roles</h4>
                  <ul className="space-y-2 text-gray-300">
                    {projects[selected].highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-2">
                        <ChevronRight className="w-4 h-4 text-blue-400 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-blue-300 font-semibold mb-2">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[selected].tech.map((tech) => (
                      <TechIcon key={tech} tech={tech} />
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-4">
                  {/* GitHub Link */}
                  {projects[selected]?.github === "Private" ? (
                    <span className="flex items-center gap-2 px-4 py-1.5 text-sm bg-gray-700 text-gray-300 rounded-full transition cursor-not-allowed">
                      <Github className="w-4 h-4" />
                      Private Code
                    </span>
                  ) : (
                    projects[selected]?.github && (
                      <a
                        href={projects[selected].github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-1.5 text-sm border border-blue-600 text-blue-400 rounded-full hover:bg-blue-600/10 transition"
                      >
                        <Github className="w-4 h-4" />
                        Public Code
                      </a>
                    )
                  )}

                  {/* Report Link */}
                  {projects[selected]?.report && (
                    <a
                      href={projects[selected].report}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-1.5 text-sm border border-blue-600 text-blue-400 rounded-full hover:bg-blue-600/10 transition"
                    >
                      <FileText className="w-4 h-4" />
                      View Report
                    </a>
                  )}

                  {/* Demo Link */}
                  {projects[selected]?.demo && (
                    <a
                      href={projects[selected].demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-1.5 text-sm border border-green-600 text-green-400 rounded-full hover:bg-green-600/10 transition"
                    >
                      <Monitor className="w-4 h-4" />
                      Demo Project
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
