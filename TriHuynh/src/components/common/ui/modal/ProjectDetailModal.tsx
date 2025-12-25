import { AnimatePresence, motion } from "framer-motion";
import {
  Calendar,
  ChevronRight,
  X,
  Github,
  Monitor,
  FileText,
  Trophy,
  Target,
} from "lucide-react";
import type { ProjectData } from "../card/ProjectCard";
import TechIcon from "../icon/TechIcon";

interface ProjectDetailModalProps {
  project: ProjectData;
  onClose: () => void;
}

export default function ProjectDetailModal({
  project,
  onClose,
}: ProjectDetailModalProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 20, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="
            relative w-full max-w-4xl max-h-[90vh] overflow-y-auto
            bg-slate-900 border-2 border-blue-500/50 rounded-xl shadow-2xl shadow-blue-500/20
            custom-scrollbar
          "
          style={{
            backgroundImage:
              "radial-gradient(circle at top right, rgba(30, 58, 138, 0.15), transparent 40%)",
          }}
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-slate-900/95 border-b border-blue-500/30 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-500/40">
                <Trophy className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide uppercase">
                  Mission Details
                </h2>
                <p className="text-xs text-blue-300 font-mono">
                  ID: {project.title.replace(/\s+/g, "_").toUpperCase()}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-red-500/20 rounded-full transition-colors group"
            >
              <X className="w-6 h-6 text-slate-400 group-hover:text-red-400" />
            </button>
          </div>

          <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Image & Quick Stats */}
            <div className="lg:col-span-1 space-y-6">
              <div className="relative aspect-video lg:aspect-square w-full rounded-xl overflow-hidden border-2 border-slate-700 group">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 z-10" />
                <img
                  src={project.logoUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-3 left-3 z-20">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded shadow-lg uppercase tracking-wider">
                    Target Acquired
                  </span>
                </div>
              </div>

              {/* Data Grid */}
              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 space-y-4">
                <div className="flex items-center gap-3 text-slate-300">
                  <Calendar className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">{project.period}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Target className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm">{project.type}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                {project.github && project.github !== "Private" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-blue-400 text-white rounded-lg transition-all group"
                  >
                    <Github className="w-5 h-5 group-hover:text-blue-400 text-slate-400 transition-colors" />
                    <span>Source Code</span>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg shadow-lg shadow-blue-500/20 transition-all hover:scale-105"
                  >
                    <Monitor className="w-5 h-5" />
                    <span>Launch Demo</span>
                  </a>
                )}
                {project.report && (
                  <a
                    href={project.report}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-pink-600/10 hover:bg-pink-600/20 border border-pink-500/30 text-pink-300 rounded-lg transition-all"
                  >
                    <FileText className="w-5 h-5" />
                    <span>Mission Report</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-blue-500 rounded-full" />
                  Objective Overview
                </h3>
                <p className="text-slate-300 leading-relaxed text-lg">
                  {project.description}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="text-xl font-bold text-emerald-400 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-emerald-500 rounded-full" />
                  Key Achievements
                </h3>
                <div className="bg-slate-800/30 rounded-xl border border-slate-700/50 p-5">
                  <ul className="space-y-3">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-3 text-slate-300 group">
                        <ChevronRight className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-xl font-bold text-amber-400 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-amber-500 rounded-full" />
                  Equipment & Tech
                </h3>
                <div className="bg-slate-800/30 rounded-xl border border-slate-700/50 p-5 flex flex-wrap gap-3">
                  {project.tech.map((t) => (
                    <div className="transform hover:scale-110 transition-transform">
                      <TechIcon key={t} tech={t} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
