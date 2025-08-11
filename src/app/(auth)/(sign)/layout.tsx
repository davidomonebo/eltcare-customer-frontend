import { Sidebar } from "./_layout/sidebar";

export default function SignLayout(props: React.PropsWithChildren) {
  return (
    <section className="p-0 flex w-screen h-screen overflow-hidden">
      <Sidebar />
      <main className="flex flex-1 items-center justify-center bg-white">
        {props.children}
      </main>
    </section>
  );
}
