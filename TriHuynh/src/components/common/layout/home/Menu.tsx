import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Menu() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="flex flex-col items-end space-y-1">
      {/* Group Xem CV */}
      <div className="text-right pointer-events-auto">
        <button
          onClick={() => setShowLinks(!showLinks)}
          className="inline text-gray-800 text-lg font-medium hover:underline cursor-pointer pointer-events-auto"
        >
          My CV
        </button>

        <AnimatePresence>
          {showLinks && (
            <motion.div
              key="cv-links"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col gap-2 mt-2"
            >
              <a
                href="/PDF/TriHuynhCV_VietNamVer.pdf"
                download
                className="inline text-gray-800 text-lg font-medium hover:underline cursor-pointer"
              >
                VietNam Version
              </a>
              <a
                href="/PDF/TriHuynhCV_EnglishVer.pdf"
                download
                className="inline text-gray-800 text-lg font-medium hover:underline cursor-pointer"
              >
                English Version
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Các mục Menu khác */}
      <button className="inline text-gray-800 text-lg font-medium hover:underline cursor-pointer pointer-events-auto">
        Products
      </button>
      <button className="inline text-gray-800 text-lg font-medium hover:underline cursor-pointer pointer-events-auto">
        Contact
      </button>
    </div>
  );
}
