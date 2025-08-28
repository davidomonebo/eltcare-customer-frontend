"use client";
import React from "react";
import Image from "next/image";
import { sleepyImg } from "constants/media";

export function Event() {
  return (
    <section className="flex flex-col gap-4">
      <header className="grid grid-cols-2">
        <h4 className="h4">Events</h4>
        <h4 className="h4">Statistics</h4>
      </header>

      <div className="py-10 flex gap-2 flex-col items-center justify-center rounded-md bg-gray-100">
        <Image
          alt=""
          width={1000}
          height={1000}
          src={sleepyImg}
          className="w-40 lg:w-60 h-auto"
        />
      </div>
    </section>
  );
}
