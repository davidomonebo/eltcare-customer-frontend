import Image from "next/image";
import { sleepyImg } from "constants/media";

export function History() {
  return (
    <section className="flex flex-col gap-4">
      <header className="flex items-center justify-between">
        <h4 className="h4">Wallet history</h4>

        <button className="flex gap-1 cursor-pointer items-center text-blue-dark">
          <span>This week</span>
          <i className="fas text-sm fa-chevron-down" />
        </button>
      </header>

      <div className="py-10 flex gap-2 flex-col items-center justify-center rounded-md bg-gray-100">
        <Image
          alt=""
          width={1000}
          height={1000}
          src={sleepyImg}
          className="w-40 lg:w-60 h-auto"
        />
        <span className="text-gray-600">no recent wallet activity</span>
      </div>
    </section>
  );
}
