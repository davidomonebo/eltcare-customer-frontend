"use client";
import { motion } from "framer-motion";

export function Sidebar() {
  return (
    <motion.aside className="hidden lg:flex relative items-center justify-center bg-white basis-1/3 before:inset-0 before:absolute before:bg-black/60"></motion.aside>
  );
}
