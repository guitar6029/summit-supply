import type { Size } from "@/types/Size";
import type { ContainerProps } from "@/types/Props";

export default function Container({ size, children }: ContainerProps) {
  function getContainerSize(size: Size) {
    switch (size) {
      case "sm":
        return "w-[10rem]";
      case "md":
        return "w-[12rem]";
      case "lg":
        return "w-[15rem]";
      default:
        return "w-[10rem]";
    }
  }

  return (
    <div
      className={`bg-white font-bold text-4xl ${getContainerSize(
        size
      )}  ridge-explorer-text p-4 flex flex-row items-center justify-center`}
    >
      {children}
    </div>
  );
}
