import { HeaderCard } from "../cards/header";

export function Header() {
  return (
    <header className="flex gap-10 flex-wrap default-spacing">
      <HeaderCard
        title={"Quick Order"}
        subtitle={"Quick order your medication"}
      />
      <HeaderCard
        title={"Specialist"}
        subtitle={"Consult with an EltCare+ Specialist"}
      />
    </header>
  );
}
