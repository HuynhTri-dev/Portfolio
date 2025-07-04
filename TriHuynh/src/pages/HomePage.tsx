import Character3D from "../components/common/ui/3D/Character3D";
import { motion } from "framer-motion";
import VisitCard3D from "../components/common/ui/3D/VisitCard3D";

export default function HomePage() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-gray-100 via-gray-300 to-gray-100">
      {/* Canvas 3D */}
      <div className="absolute inset-0 z-10">
        <Character3D />
      </div>

      {/* Overlay trái */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-0 left-10 h-full flex items-center z-20 pointer-events-none w-[200px]"
      >
        <div className="pointer-events-none">
          <h1
            className="text-8xl font-extrabold uppercase tracking-wider text-gray-700"
            style={{ lineHeight: "1.1" }}
          >
            HUỲNH <br /> MINH <br /> TRÍ
          </h1>

          <div className="mt-4 space-y-2 px-10">
            <p className="text-xl text-gray-700 font-medium tracking-wide">
              Full Stack Developer
            </p>
            <div className="w-8 h-[2px] bg-gray-400/40 rounded mx-auto"></div>
            <p className="text-lg text-gray-600 italic text-right">
              Founder of{" "}
              <span className="font-semibold text-gray-700">OmniMer</span>
            </p>
          </div>
        </div>
      </motion.div>

      <div className="absolute top-0 right-0 h-full flex items-center z-20 pointer-events-none w-[500px] md:w-[500px]">
        <div className="p-8 pointer-events-auto w-full h-[500px]">
          <VisitCard3D />
        </div>
      </div>
    </div>
  );
}
