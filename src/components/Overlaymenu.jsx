import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { FiX } from "react-icons/fi";

export default function Overlaymenu({ isOpen, isClose }) {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed flex items-center justify-center z-60 inset-0 bg-black/80"
            initial={{ clipPath: "circle(0% at 50% 50%)" }}
            animate={{ clipPath: "circle(100% at 50% 50%)" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            exit={{ clipPath: "circle(0% at 50% 50%)" }}
            style={{ background: "black", color: "white", padding: "20px" }}
          >
            <button
              className="absolute top-6 right-6 text-3xl cursor-pointer "
              onClick={isClose}
            >
              <FiX />
            </button>

            <ul className="space-y-6 text-center">
              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Experience",
                "Testimonials",
                "Contact",
              ].map((item, index) => {
                return (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      onClick={isClose}
                      className="text-xl text-white font-semibold hover:text-pink-500"
                    >
                      {item}
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
