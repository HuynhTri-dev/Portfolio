import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../../../../assets/Education/444782414_467213079108534_9199156519425642358_n.jpg";
import img2 from "../../../../assets/Education/certificate-34.png";
import img3 from "../../../../assets/Education/chungnhan_106308.png";
import img4 from "../../../../assets/Education/chungnhan_119800.png";
import img5 from "../../../../assets/Education/chungnhan_119869.png";
import img6 from "../../../../assets/Education/chungnhan_127477.png";
import img7 from "../../../../assets/Education/chungnhan_131823.png";

const images = [img1, img2, img3, img4, img5, img6, img7];

export default function AchievementBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-4xl h-64 md:h-80 lg:h-100 mx-auto overflow-hidden rounded-2xl shadow-lg relative">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={`achievement-${index}`}
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      <div className="absolute bottom-2 right-2 bg-black/50 text-white px-3 py-1 text-sm rounded-full">
        {index + 1} / {images.length}
      </div>
    </div>
  );
}
