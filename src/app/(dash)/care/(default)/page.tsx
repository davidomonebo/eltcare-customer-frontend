import Image from "next/image";
import { sleepyImg } from "constants/media";

export default function HomePage() {
  return (
    <section className="p-0 hidden sm:flex flex-1 flex-col basis-3/5 border-l border-blue-dark/40">
      <header className="py-4 flex items-center justify-between border-b border-blue-dark/40 default-spacing">
        <h1 className="h4 font-bold capitalize">Message</h1>
      </header>

      <div className="py-10 flex flex-1 gap-2 flex-col items-center justify-center rounded-md">
        <Image
          alt=""
          width={1000}
          height={1000}
          src={sleepyImg}
          className="w-40 lg:w-60 h-auto"
        />

        <span className="text-gray-600">select a room to start chatting</span>
      </div>
    </section>
  );
}
