import { Navbar } from "./_layout/navbar";
import { Sidebar } from "./_layout/sidebar";

export default function DashLayout(props: React.PropsWithChildren) {
  return (
    <section className="p-0 flex w-screen h-screen overflow-hidden">
      <Sidebar />
      <main className="flex flex-1 flex-col items-center justify-center bg-white">
        <Navbar />

        <section className="flex flex-1 flex-col">{props.children}</section>
      </main>
    </section>
  );
}
