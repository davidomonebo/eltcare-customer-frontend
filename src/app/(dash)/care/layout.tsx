import { Room } from "./_layout/room";

export default function CareLayout(props: React.PropsWithChildren) {
  return (
    <section className="flex flex-1">
      <section className="p-0 flex flex-1 border border-blue-dark/40">
        <Room />

        {props.children}
      </section>
    </section>
  );
}
