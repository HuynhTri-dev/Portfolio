import Character3D from "../components/common/ui/3D/Character3D";
import { motion } from "framer-motion";
import VisitCard3D from "../components/common/ui/3D/VisitCard3D";
import { useEffect, useState } from "react";
import Menu from "../components/common/layout/home/Menu";
export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // init
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {!isMobile ? (
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
                className="text-5xl md:text-6xl lg:text-8xl font-extrabold uppercase tracking-wider text-gray-700"
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

          {/* Overlay phải */}
          <div className="absolute top-0 right-0 h-full grid grid-cols-1 items-center z-20 pointer-events-none p-10 w-[300px] md:w-[400px] lg:w-[500px]">
            <div className="h-[100px]">
              <Menu />
            </div>

            <div className="pointer-events-auto w-full h-full">
              <VisitCard3D />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-screen bg-gradient-to-br from-gray-100 via-gray-300 to-gray-100 p-5">
          <div className="grid grid-cols-3 items-center">
            {/* Name and Position */}
            <div className="col-span-2 flex flex-col items-start space-y-2">
              <h1
                className="text-xl font-extrabold uppercase tracking-wider text-gray-700"
                style={{ lineHeight: "1.1" }}
              >
                HUỲNH MINH TRÍ
              </h1>

              <div className="">
                <p className="text-sm text-gray-700 font-medium tracking-wide">
                  Full Stack Developer
                </p>
                <div className="w-8 h-[2px] bg-gray-400/40 rounded mx-auto"></div>
                <p className="text-sm text-gray-600 italic text-right">
                  Founder of{" "}
                  <span className="font-semibold text-gray-700">OmniMer</span>
                </p>
              </div>
            </div>

            {/* Menu */}
            <div className="flex flex-col items-end space-y-1 pointer-events-none">
              <a
                href="/PDF/TriHuynhCV_EnglishVer.pdf"
                download
                className="inline text-gray-800 text-sm font-medium hover:underline cursor-pointer pointer-events-auto"
              >
                My CV
              </a>

              <button className="inline text-gray-800 text-sm font-medium hover:underline cursor-pointer pointer-events-auto">
                Products
              </button>
              <button className="inline text-gray-800 text-sm font-medium hover:underline cursor-pointer pointer-events-auto">
                Contact
              </button>
            </div>
          </div>
          <div className="h-[400px]">
            <Character3D />
          </div>
          <div className="h-[200px]">
            <VisitCard3D />
          </div>
        </div>
      )}
    </>
  );
}
