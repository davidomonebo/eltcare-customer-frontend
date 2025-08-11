"use client";
import { motion } from "framer-motion";

export function Sidebar() {
  return (
    <motion.aside
      animate={{ x: 0 }}
      exit={{ x: -100 }}
      initial={{ x: -100 }}
      className="flex flex-col basis-80 bg-white shadow"
    ></motion.aside>
  );
}
