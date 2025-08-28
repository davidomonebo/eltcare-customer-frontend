"use client";
import { motion } from "framer-motion";
import { Navbar } from "./_layout/navbar";
import { Sidebar } from "./_layout/sidebar";

export default function DashLayout(props: React.PropsWithChildren) {
  return (
    <section className="p-0 flex w-screen h-screen overflow-hidden">
      <Sidebar />
      <main className="flex flex-1 flex-col items-center justify-center bg-white">
        <Navbar />

        <motion.section
          animate={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0.9, opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="p-0 flex flex-1 flex-col overflow-auto"
        >
          {props.children}
        </motion.section>
      </main>
    </section>
  );
}
