"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { logoDarkIcon } from "constants/media";

export function Sidebar() {
  return (
    <motion.aside className="hidden lg:flex relative items-center justify-center bg-white basis-1/3 before:inset-0 before:absolute before:bg-black/60">
      <Image
        alt=""
        width={1000}
        height={1000}
        src={logoDarkIcon}
        className="h-auto w-4/5"
      />
    </motion.aside>
  );
}
