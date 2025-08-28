import { Plan } from "./sections/plan";
import { Event } from "./sections/event";
import { Header } from "./sections/header";

export default function OverviewPage() {
  return (
    <>
      <Header />
      <Plan />
      <Event />
    </>
  );
}
