import { ReactNode, useState } from "react";
import clsx from "clsx";

interface SectionAboutInterface {
  icon: ReactNode;
  text: string;
  title: string;
  estilos: string;
  up: ReactNode;
}

export function SectionAbout({
  icon,
  text,
  title,
  estilos,
  up,
}: SectionAboutInterface) {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div
      className={`${estilos} text-gray-900 hover:ring hover:ring-offset-2 transition-all duration-100 ease-in-out ring-orange-tertiary p-3 rounded-xl bg-white/40 shadow-md`}
    >
      <div className=" flex w-full justify-between items-center pb-2">
        <div className=" flex justify-between items-center gap-2">
          {" "}
          <span className="w-7 text-orange-600"> {icon}</span>
          <h3 className=" font-semibold text-3xl lg:text-4xl tracking-wide text-orange-600">
            {title}
          </h3>
        </div>
        <button
          className={clsx(
            "ring-2 rounded-full p-0.5 ring-transparent hover:text-orange-00 hover:ring-orange-tertiary ring-offset-0 hover:ring-offset-2 transition-all ease-in-out duration-150",
            { "rotate-0": isOpen, "rotate-180": !isOpen }
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {up}
        </button>
      </div>
      <p
        className={clsx(
          "text-base font-semibold lg:text-xl overflow-hidden transition-all ease-in-out duration-200",
          {
            "max-h-screen": isOpen,
            "max-h-0": !isOpen,
          }
        )}
      >
        {text}
      </p>
    </div>
  );
}
