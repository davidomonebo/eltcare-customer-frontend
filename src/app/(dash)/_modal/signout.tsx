"use client";
import { motion } from "framer-motion";

export function SignoutModal() {
  return (
    <motion.div
      exit={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 50, opacity: 0 }}
      className="p-10 flex gap-10 flex-col bg-white rounded-md"
    ></motion.div>
  );
}
