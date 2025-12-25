import { Activity, Award, Cpu, Github, GraduationCap } from "lucide-react";

export default function EduAndActiSection() {
  const achievements = [
    "Khuyến khích OLP mã nguồn mở",
    "Top 5 xuất sắc trong Design UX/UI CJ Group",
  ];

  // Polygon clip-path for that "Sci-Fi/Game HUD" look
  const hudClipPath =
    "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)";

  return (
    <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-cyan-50">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-12 border-b-2 border-cyan-500/30 pb-4">
        <div className="p-2 bg-cyan-500/10 border border-cyan-500 rounded-sm">
          <GraduationCap className="w-8 h-8 text-cyan-400" />
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold font-mono uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
          Stats & Achievements
        </h2>
      </div>

      {/* Main Grid: Education & Achievements */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Education Panel */}
        <div className="relative group" style={{ clipPath: hudClipPath }}>
          <div className="absolute inset-0 bg-slate-900 border border-cyan-500/50 hover:border-cyan-400 transition-colors duration-300 pointer-events-none" />

          {/* Decorative Corner Lines */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-500 rounded-tl-sm z-20" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-cyan-500 rounded-br-sm z-20" />

          <div className="relative z-10 p-8 flex flex-col h-full bg-slate-950/80 backdrop-blur-sm">
            <h3 className="text-2xl font-mono font-bold text-cyan-400 mb-6 flex items-center gap-2">
              <span className="text-sm px-2 py-0.5 border border-cyan-500/50 text-cyan-500/70 rounded-sm">
                LVL.3
              </span>
              EDUCATION
            </h3>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white tracking-wide">
                Ho Chi Minh City University of Technology (HUTECH)
              </h4>
              <p className="text-slate-400 font-mono text-sm border-l-2 border-cyan-500/30 pl-3">
                Major: Information Technology
              </p>

              <div className="mt-4 p-4 bg-cyan-950/30 border border-cyan-500/20 rounded-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-cyan-300 font-mono text-sm">
                    GPA Progress
                  </span>
                  <span className="text-cyan-300 font-mono text-sm font-bold">
                    3.60 / 4.0
                  </span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]"
                    style={{ width: "89%" }}
                  />
                </div>
                <p className="text-right text-xs text-slate-500 mt-1 font-mono">
                  Est. Completion: 04/2026
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Panel */}
        <div className="relative group" style={{ clipPath: hudClipPath }}>
          <div className="absolute inset-0 bg-slate-900 border border-purple-500/50 hover:border-purple-400 transition-colors duration-300 pointer-events-none" />

          {/* Decorative Corner Lines */}
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-purple-500 rounded-tr-sm z-20" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-purple-500 rounded-bl-sm z-20" />

          <div className="relative z-10 p-8 flex flex-col h-full bg-slate-950/80 backdrop-blur-sm">
            <h3 className="text-2xl font-mono font-bold text-purple-400 mb-6 flex items-center gap-2">
              <span className="text-sm px-2 py-0.5 border border-purple-500/50 text-purple-500/70 rounded-sm">
                QUESTS
              </span>
              ACHIEVEMENTS
            </h3>
            <div className="flex-1 space-y-3">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-2 hover:bg-purple-900/20 transition-colors border-b border-dashed border-slate-800 last:border-0"
                >
                  <Award className="w-5 h-5 text-yellow-400 flex-shrink-0 drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]" />
                  <span className="text-slate-300 font-mono text-sm">
                    {achievement}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Skill Tree / Interests */}
      <div className="relative p-1">
        <div className="absolute inset-0 border border-slate-700 bg-slate-900/50 skew-x-[-2deg]" />
        <div className="relative z-10 px-8 py-10">
          <h3 className="text-2xl font-mono font-bold text-slate-200 mb-8 border-l-4 border-cyan-500 pl-4 uppercase">
            Skill Tree & Interests
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: Cpu,
                title: "3D Design",
                desc: "Blender Modeling",
                color: "text-pink-400",
                bg: "bg-pink-400/10",
                border: "border-pink-500/30",
              },
              {
                icon: Github,
                title: "Open Source",
                desc: "Code Contribution",
                color: "text-green-400",
                bg: "bg-green-400/10",
                border: "border-green-500/30",
              },
              {
                icon: Activity,
                title: "Athletics",
                desc: "Stamina & Agility",
                color: "text-orange-400",
                bg: "bg-orange-400/10",
                border: "border-orange-500/30",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`relative p-6 border ${item.border} bg-slate-950/50 hover:bg-slate-900 transition-all group overflow-hidden`}
              >
                <div
                  className={`absolute top-0 left-0 w-full h-1 ${item.bg.replace(
                    "/10",
                    ""
                  )} opacity-50`}
                />
                <div className="flex items-center gap-4 mb-3">
                  <div className={`p-3 ${item.bg} rounded-sm`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <h4 className={`font-bold font-mono uppercase ${item.color}`}>
                    {item.title}
                  </h4>
                </div>
                <p className="text-slate-400 text-sm font-mono border-t border-slate-800 pt-3">
                  {item.desc}
                </p>

                {/* Hover visual */}
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-white/5 rotate-45 group-hover:bg-white/10 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
