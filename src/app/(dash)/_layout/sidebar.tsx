"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { logoDarkIcon } from "constants/media";
import { useSignOut } from "hooks/request/auth.hook";

export function Sidebar() {
  const path = usePathname();
  const signout = useSignOut();

  const navlinks = React.useMemo(() => {
    const links = [
      { label: "dashboard", href: "/overview" },
      { label: "wallet", href: "/wallet" },
      { label: "care", href: "/care" },
    ];

    return links.map((link) => ({
      ...link,
      active: path.startsWith(link.href),
    }));
  }, [path]);

  return (
    <motion.aside
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -200, opacity: 0 }}
      initial={{ x: -200, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="py-8 flex gap-10 flex-col flex-none w-14 lg:w-60 shadow"
    >
      <header className="">
        <Image
          alt=""
          width={1000}
          height={1000}
          src={logoDarkIcon}
          className="h-auto w-40"
        />
      </header>

      <nav className="flex flex-1 flex-col">
        {navlinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`p-2 lg:pl-20% flex gap-2 items-center justify-center lg:justify-start hover:bg-blue-main/20 transition-all ${
              link.active && "font-bold bg-blue-main/20"
            }`}
          >
            <i className="w-6 h-6 rounded-md flex-none bg-blue-dark" />
            <span className="hidden lg:flex capitalize">{link.label}</span>
          </Link>
        ))}
      </nav>

      <nav className="flex flex-col">
        <Link
          href={"/settings"}
          className={`p-2 lg:pl-20% flex gap-2 items-center justify-center lg:justify-start hover:bg-blue-main/20 transition-all ${
            path.startsWith("/settings") && "font-bold bg-blue-main/20"
          }`}
        >
          <i className="w-6 h-6 rounded-md flex-none bg-blue-dark" />
          <span className="hidden lg:flex capitalize">settings</span>
        </Link>

        <button
          onClick={signout}
          className="p-2 lg:pl-20% flex gap-2 items-center justify-center lg:justify-start cursor-pointer hover:bg-blue-main/20 transition-all"
        >
          <i className="w-6 h-6 rounded-md flex-none bg-blue-dark" />
          <span className="hidden lg:flex capitalize">log out</span>
        </button>
      </nav>
    </motion.aside>
  );
}
