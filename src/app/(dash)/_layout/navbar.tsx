"use client";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.header
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      initial={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="py-4 gap-4 flex w-full flex-wrap items-center justify-between default-spacing"
    >
      <h2 className="font-bold lg:text-3xl">Welcome!</h2>

      <nav className="flex items-center gap-4">
        <div className="w-80 h-8 rounded-full bg-gray-100"></div>
      </nav>
    </motion.header>
  );
}
