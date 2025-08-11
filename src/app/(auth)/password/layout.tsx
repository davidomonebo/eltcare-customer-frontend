import { Header } from "./_layout/header";

export default function PasswordLayout(props: React.PropsWithChildren) {
  return (
    <section className="p-0 flex flex-col w-screen h-screen overflow-hidden">
      <Header />
      <main className="flex flex-1 items-center justify-center bg-gray-200">
        {props.children}
      </main>
    </section>
  );
}
