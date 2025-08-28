"use client";
import { usePathname } from "next/navigation";

export function Room() {
  const path = usePathname();

  return (
    <div
      className={`flex flex-1 flex-col basis-60 ${
        path.endsWith("/care") ? "" : "hidden lf:flex"
      }`}
    >
      <header className="py-4 flex items-center justify-center border-b border-blue-dark/40 bg-blue-main/10 default-spacing">
        <h1 className="h4 font-bold capitalize">Message</h1>
      </header>

      <nav className="flex flex-1 flex-col"></nav>
    </div>
  );
}
