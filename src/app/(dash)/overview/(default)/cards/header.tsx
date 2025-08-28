interface HeaderCardProps {
  title: string;
  subtitle: string;
}

export function HeaderCard(props: HeaderCardProps) {
  return (
    <div className="p-8 flex flex-1 basis-80 rounded-md itmes-center gap-4 text-white bg-blue-dark">
      <div className="flex flex-1 flex-col">
        <p className="font-bold text-xl lg:text-3xl">{props.title}</p>
        <span className="">{props.subtitle}</span>
      </div>

      <div className="w-10 h-10 flex-none bg-white rounded-full"></div>
    </div>
  );
}
