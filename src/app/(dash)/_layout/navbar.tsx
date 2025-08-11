"use client";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.header
      animate={{ y: 0 }}
      exit={{ y: -100 }}
      initial={{ y: -100 }}
      className="flex w-full items-center justify-between default-spacing shadow"
    ></motion.header>
  );
}
