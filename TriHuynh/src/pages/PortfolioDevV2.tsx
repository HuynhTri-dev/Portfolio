import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import ProjectCard, {
  type ProjectData,
} from "../components/common/ui/card/ProjectCard";
import UserProfileCard from "../components/common/ui/card/UserProfileCard";
import ProjectDetailModal from "../components/common/ui/modal/ProjectDetailModal";
import { projects } from "../data/projects";

import EduAndActiSection from "../components/sections/EduAndActiSection";

import { useNavigate } from "react-router-dom";

export default function PortfolioDevV2() {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null
  );

  // Track scroll progress of the container relative to the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  // --- Animation Config ---

  // Phase 1: UserProfileCard "Lie Down & Throw" Animation
  const cardRotateX = useTransform(smoothProgress, [0, 0.25], [0, 80]);
  const cardRotateZ = useTransform(smoothProgress, [0.15, 0.6], [0, 360]);
  const cardScale = useTransform(smoothProgress, [0, 0.25, 0.6], [1, 0.85, 0]);
  const cardY = useTransform(
    smoothProgress,
    [0, 0.25, 0.6],
    ["0%", "-10%", "-150%"]
  );
  const cardOpacity = useTransform(smoothProgress, [0, 0.5, 0.6], [1, 1, 0]);

  // Phase 2: Project List + Edu Reveal
  // Slide up from bottom starting around 0.35 scroll progress
  const listScale = useTransform(smoothProgress, [0.35, 0.5], [0.9, 1]);
  const listOpacity = useTransform(smoothProgress, [0.35, 0.45], [0, 1]);
  // Start mainly offscreen (50vh), scroll all the way up to -250vh to show Edu section fully
  const listY = useTransform(smoothProgress, [0.35, 1], ["50vh", "-250vh"]);
  const listPointerEvents = useTransform(smoothProgress, (val) =>
    val > 0.4 ? "auto" : "none"
  );

  return (
    <>
      <div
        ref={containerRef}
        className="relative min-h-[1800vh] bg-[#050510] font-sans text-slate-200"
      >
        {/* --- Cyberpunk Background Effects --- */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
          {/* Scanlines */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none z-10" />
          {/* Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] z-20" />
        </div>

        {/* Sticky Viewport */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center perspective-[1200px] z-30">
          {/* UserProfileCard Wrapper */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ perspective: "1500px" }}
          >
            <motion.div
              style={{
                rotateX: cardRotateX,
                rotateZ: cardRotateZ,
                scale: cardScale,
                y: cardY,
                opacity: cardOpacity,
                zIndex: 10,
                transformStyle: "preserve-3d",
              }}
              className="w-full flex items-center justify-center origin-center will-change-transform"
            >
              <div className="w-full max-w-5xl transform md:scale-90 scale-75 origin-center">
                <UserProfileCard className="!min-h-0 !bg-transparent !p-0 !shadow-none" />
              </div>
            </motion.div>
          </div>

          {/* Project List & Edu Wrapper */}
          <motion.div
            style={{
              opacity: listOpacity,
              scale: listScale,
              y: listY,
              pointerEvents: listPointerEvents,
              zIndex: 20,
            }}
            className="w-full max-w-6xl px-4 flex flex-col items-center justify-start absolute top-0"
          >
            <div className="w-full flex flex-col gap-24 pt-20">
              {/* Projects Section */}
              <div className="w-full">
                <div className="mb-10 text-center relative inline-block w-full">
                  {/* Header Decorative lines */}
                  <div className="absolute top-1/2 left-0 w-[20%] h-[1px] bg-gradient-to-r from-transparent to-cyan-500 opacity-50 hidden md:block" />
                  <div className="absolute top-1/2 right-0 w-[20%] h-[1px] bg-gradient-to-l from-transparent to-cyan-500 opacity-50 hidden md:block" />

                  <h2 className="text-3xl md:text-5xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 filter drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                    MISSION LOG: PROJECTS
                  </h2>
                  <p className="text-cyan-500/60 font-mono text-sm mt-2 tracking-[0.2em] uppercase">
                    Select a file to view details
                  </p>
                </div>

                {/* Grid - No internal scroll, just full height */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-2">
                  {projects.map((project, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <ProjectCard
                        project={project}
                        onClick={() => setSelectedProject(project)}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Edu & Achievement Section */}
              <div className="w-full">
                <EduAndActiSection />
              </div>

              <div className="w-full flex justify-center pb-32">
                <button
                  onClick={() => navigate("/")}
                  className="group relative px-10 py-4 bg-cyan-950/30 border border-cyan-500/50 text-cyan-400 font-mono font-bold text-xl tracking-[0.2em] uppercase transition-all duration-300 hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] active:scale-95"
                  style={{
                    clipPath:
                      "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)",
                  }}
                >
                  <span className="relative z-10">Return Home</span>
                  {/* Glitch effects on hover could go here, but simple is good for now */}
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator - HUD Style */}
        <motion.div
          style={{ opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]) }}
          className="fixed bottom-10 left-1/2 transform -translate-x-1/2 text-cyan-400 pointer-events-none z-50 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono tracking-[0.3em] uppercase animate-pulse">
            Scroll to Start Game
          </span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-cyan-500 to-transparent relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-cyan-200 blur-[2px] animate-slide-down" />
          </div>
        </motion.div>
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
