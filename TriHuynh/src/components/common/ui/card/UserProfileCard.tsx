import avatarImg from "../../../../assets/avatar.jpg";
import { Mail, Phone } from "lucide-react";
import { SkillTag } from "../banner/SkillTag";
import { ToolTag } from "../banner/ToolTag";

export default function UserProfileCard({ className }: { className?: string }) {
  return (
    <div
      className={`min-h-screen w-full bg-background flex items-center justify-center p-4 ${
        className || ""
      }`}
    >
      {/* 3D Game Card Container */}
      <div
        className="
          relative w-full max-w-4xl bg-surface rounded-xl overflow-hidden
          border-4 border-white transition-transform hover:scale-[1.01] duration-300
        "
        style={{
          boxShadow:
            "10px 10px 0px var(--color-card-shadow), 20px 20px 20px rgba(0,0,0,0.1)",
        }}
      >
        {/* Card Header / Top Bar Decoration */}
        <div className="h-4 bg-primary w-full"></div>

        <div className="flex flex-col md:flex-row p-2 md:p-4 gap-8 items-center md:items-start">
          {/* Left Column: Avatar & Role */}
          <div className="flex-shrink-0 flex flex-col items-center space-y-4">
            <div className="relative group">
              {/* Avatar Frame - "Game Character Portrait" Style */}
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-[6px] border-primary overflow-hidden shadow-lg bg-gray-200">
                <img
                  src={avatarImg}
                  alt="Huỳnh Minh Trí"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              {/* Level Badge */}
              <div className="absolute -bottom-2 -right-2 bg-primary text-white font-bold py-1 px-4 rounded-full border-4 border-surface shadow-md">
                LVL. MAX
              </div>
            </div>

            <div className="text-center mt-2">
              <h3 className="text-lg font-bold text-primary uppercase tracking-wider">
                Class: Developer
              </h3>
              <span className="inline-block px-3 py-1 bg-secondary/20 text-primary text-sm font-semibold rounded-full mt-1">
                Frontend
              </span>
            </div>
          </div>

          {/* Right Column: Stats & Info */}
          <div className="flex-grow w-full space-y-6">
            {/* Header: Name */}
            <div className="border-b-2 border-dashed border-gray-300 pb-4">
              <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-2 tracking-tight">
                HUỲNH MINH TRÍ
              </h1>
              <div className="flex flex-wrap gap-4 text-gray-600 font-medium">
                <div className="flex items-center gap-2">
                  <Phone size={18} className="text-secondary" />
                  <span>038 300 5844</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={18} className="text-secondary" />
                  <span>huynhminhtri.dev@gmail.com</span>
                </div>
              </div>
            </div>

            {/* "Stats" / Skills Grid */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-700 flex items-center gap-2">
                <span className="w-2 h-8 bg-secondary rounded-sm"></span>
                SKILL ATTRIBUTES
              </h2>

              <div className="grid grid-cols-1 gap-4">
                {/* Mastery Level */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <span className="block text-xs font-bold text-gray-400 uppercase mb-2">
                    Weapon Mastery (Excellent)
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <SkillTag name="TypeScript" level="S" />
                    <SkillTag name="Dart" level="S" />
                  </div>
                </div>

                {/* Frameworks */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <span className="block text-xs font-bold text-gray-400 uppercase mb-2">
                    Equipped Gear (Frameworks)
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <SkillTag name="Flutter" />
                    <SkillTag name="Next.js" />
                    <SkillTag name="React.js" />
                  </div>
                </div>

                {/* Tools */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <span className="block text-xs font-bold text-gray-400 uppercase mb-2">
                    Crafting Tools (Design)
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <ToolTag name="Figma" />
                    <ToolTag name="Blender" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card Footer Decor */}
        <div className="h-2 bg-gradient-to-r from-primary via-secondary to-primary w-full mt-4"></div>
      </div>
    </div>
  );
}
