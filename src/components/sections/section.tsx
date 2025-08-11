import Image from "next/image";
import { MyButton } from "components/primary/btn";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface SectionProps {
  title: string;
  description: string;
  titleClassName?: string;
  image: string | StaticImport;
  button: { label: string; className?: string };
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
}

export function Section(props: SectionProps) {
  const flexDirection = props.flexDirection || "row";

  return (
    <section
      style={{ flexDirection }}
      className={`flex flex-wrap gap-10 items-center`}
    >
      {/* Image Section */}
      <div className="flex flex-1 basis-80">
        <Image
          width={1000}
          height={1000}
          alt="Contact Us"
          src={props.image}
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Content Section */}
      <div className="flex gap-6 flex-col flex-1 basis-80 items-start">
        <h1 className={`font-bold text-blue-dark ${props.titleClassName}`}>
          {props.title}
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed">
          {props.description}
        </p>

        <MyButton
          className={`${props.button.className} gap-4 mt-6 flex items-center`}
        >
          {props.button.label}
          <i className="fas fa-arrow-right text-xs text-white" />
        </MyButton>
      </div>
    </section>
  );
}
