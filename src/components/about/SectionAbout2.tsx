import { ReactNode, useState } from "react";
import clsx from "clsx";

interface SectionAbout2Interface {
  icon: ReactNode;
  title?: string;
  body: ReactNode;
  estilos: string;
  up: ReactNode;
}

export function SectionAbout2({
  icon,
  title,
  body,
  up,
}: SectionAbout2Interface) {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <div
      className={` text-gray-900 h-auto hover:ring hover:ring-offset-2 transition-all duration-100 ease-in-out ring-orange-tertiary px-4 py-3 rounded-xl bg-white/40 shadow-md`}
    >
      <div className=" flex w-full flex-wrap justify-between items-center pb-2">
        <div className=" flex justify-between items-center gap-2">
          <span className="w-7 text-orange-600">{icon}</span>
          <h3 className=" font-semibold text-3xl lg:text-4xl tracking-wide text-orange-600">
            {title}
          </h3>
        </div>
        <button
          className={clsx(
            "ring-2 rounded-full p-0.5 ring-transparent hover:text-orange-700 hover:ring-orange-tertiary ring-offset-0 hover:ring-offset-2 transition-all ease-in-out duration-150",
            { "rotate-0": isOpen, "rotate-180": !isOpen }
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {up}
        </button>
      </div>
      <div
        className={clsx(
          "overflow-hidden transition-all ease-in-out duration-200 font-semibold",
          {
            "max-h-screen": isOpen,
            "max-h-0": !isOpen,
          }
        )}
      >
        {body}
      </div>
    </div>
  );
}
