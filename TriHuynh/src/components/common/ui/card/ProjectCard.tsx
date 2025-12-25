import { Calendar, ChevronRight } from "lucide-react";

export interface ProjectData {
  title: string;
  logoUrl: string;
  period: string;
  type: string;
  tech: string[];
  description: string;
  highlights: string[];
  github?: string;
  report?: string;
  demo?: string;
}

interface ProjectCardProps {
  project: ProjectData;
  onClick?: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="
        group cursor-pointer relative w-full h-full
        bg-slate-900 border border-slate-700 
        rounded-xl overflow-hidden 
        hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]
        transition-all duration-300 transform hover:-translate-y-2
      "
    >
      {/* Image Thumbnail with Overlay */}
      <div className="relative h-48 overflow-hidden bg-slate-950">
        <img
          src={project.logoUrl}
          alt={project.title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

        {/* Type Badge */}
        <div className="absolute top-3 right-3">
          <span
            className={`
              px-3 py-1 text-xs font-bold uppercase tracking-wider rounded border backdrop-blur-md shadow-lg
              ${
                project.type === "Personal Project"
                  ? "bg-purple-500/20 text-purple-300 border-purple-500/50"
                  : "bg-blue-500/20 text-blue-300 border-blue-500/50"
              }
            `}
          >
            {project.type}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 space-y-3 relative">
        {/* Decoration Line */}
        <div className="absolute top-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1">
          {project.title}
        </h3>

        <div className="flex items-center gap-2 text-slate-500 text-xs uppercase font-medium tracking-wide">
          <Calendar className="w-3.5 h-3.5" />
          <span>{project.period}</span>
        </div>

        <p className="text-slate-400 text-sm line-clamp-2 leading-relaxed h-10">
          {project.description}
        </p>

        {/* "Click to View" Hint */}
        <div className="pt-3 flex items-center text-blue-500 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
          <span>Inspect Details</span>
          <ChevronRight className="w-4 h-4 ml-1" />
        </div>
      </div>
    </div>
  );
}
