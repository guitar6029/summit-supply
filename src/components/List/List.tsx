export default function ListItems({
  list,
  hasListStyle = false,
  title,
}: {
  list: string[];
  hasListStyle: boolean;
  title: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-bold text-4xl hiking-font">{title}</span>
      <ul className="list-inside flex flex-col gap-2">
        {list.map((feature: string, index: number) => {
          return (
            <div key={index} className="flex flex-row items-center gap-2">
              {hasListStyle && <div className="w-2 h-2 bg-orange-500"></div>}
              <li className="text-3xl">{feature}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
