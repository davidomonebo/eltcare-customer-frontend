import { Sidebar } from "./_layout/sidebar";

export default function SignLayout(props: React.PropsWithChildren) {
  return (
    <section className="p-0 flex w-screen h-screen overflow-hidden">
      <Sidebar />
      <main className="p-10% lg:py-5% flex flex-1 items-start justify-center bg-white overflow-auto">
        {props.children}
      </main>
    </section>
  );
}
