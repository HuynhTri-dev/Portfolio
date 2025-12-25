import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import ProjectCard, {
  type ProjectData,
} from "../components/common/ui/card/ProjectCard";
import UserProfileCard from "../components/common/ui/card/UserProfileCard";
import ProjectDetailModal from "../components/common/ui/modal/ProjectDetailModal";
import { projects } from "../data/projects";

export default function PortfolioDevV2() {
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
    ["0%", "-10%", "-120%"]
  );
  const cardOpacity = useTransform(smoothProgress, [0, 0.5, 0.6], [1, 1, 0]);

  // Phase 2: Project List Reveal
  const listScale = useTransform(smoothProgress, [0.55, 0.85], [0.8, 1]);
  const listOpacity = useTransform(smoothProgress, [0.55, 0.75], [0, 1]);
  const listY = useTransform(smoothProgress, [0.55, 1], ["10%", "0%"]);
  const listPointerEvents = useTransform(smoothProgress, (val) =>
    val > 0.6 ? "auto" : "none"
  );

  return (
    <>
      <div ref={containerRef} className="relative min-h-[400vh] bg-slate-950">
        {/* Sticky Viewport */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center perspective-[1200px]">
          {/* Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

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

          {/* Project List Wrapper */}
          <motion.div
            style={{
              opacity: listOpacity,
              scale: listScale,
              y: listY,
              pointerEvents: listPointerEvents,
              zIndex: 20,
            }}
            className="w-full max-w-7xl px-4 flex flex-col items-center justify-start h-screen pt-20 absolute"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-10 text-center filter drop-shadow-lg">
              My Projects
            </h2>

            {/* Scrollable Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full pb-32 overflow-y-auto max-h-[calc(100vh-180px)] scrollbar-hide px-2">
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
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          style={{ opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]) }}
          className="fixed bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce pointer-events-none z-50 flex flex-col items-center gap-2"
        >
          <span className="text-sm font-light tracking-widest uppercase text-slate-400">
            Scroll Down
          </span>
          <div className="w-1 h-16 bg-gradient-to-b from-blue-500 to-transparent rounded-full"></div>
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
