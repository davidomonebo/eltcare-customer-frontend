"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { logoDarkIcon } from "constants/media";

export function Header() {
  return (
    <motion.header
      exit={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -100, opacity: 0 }}
      className="flex items-center justify-center py-2 bg-white shadow"
    >
      <Image
        alt=""
        width={1000}
        height={1000}
        src={logoDarkIcon}
        className="h-14 w-auto"
      />
    </motion.header>
  );
}
