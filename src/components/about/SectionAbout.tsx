import { ReactNode, useEffect, useState } from "react";
import clsx from "clsx";
interface SectionAboutInterface {
  icon: ReactNode;
  text: string;
  title: string;
  estilos: string;
  up: ReactNode;
  allOpen: boolean;
}

export function SectionAbout({
  icon,
  text,
  title,
  estilos,
  up,
  allOpen,
}: SectionAboutInterface) {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  useEffect(() => {
    setIsOpen(allOpen);
  }, [allOpen]);

  return (
    <div
      className={`${estilos} text-gray-900 hover:ring hover:ring-offset-2 transition-all duration-100 ease-in-out ring-orange-tertiary p-3 rounded-xl bg-white/30 shadow-md`}
    >
      <div className="flex w-full justify-between items-center pb-2">
        <div className="flex justify-between items-center gap-2">
          <span className="w-7 text-orange-600 hidden sm:inline-block overflow-hidden">
            {icon}
          </span>
          <h3 className="font-semibold text-3xl 2xl:text-4xl tracking-wide text-orange-600">
            {title}
          </h3>
        </div>
        <button
          className={clsx(
            "ring-2 rounded-full p-0.5 ring-transparent hover:text-orange-00 hover:ring-orange-tertiary ring-offset-0 hover:ring-offset-2 transition-all ease-in-out duration-200",
            { "rotate-0": isOpen, "rotate-180": !isOpen }
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {up}
        </button>
      </div>
      <p
        className={clsx(
          "text-base text-gray-700 font-semibold lg:text-lg 2xl:text-2xl transition-all ease-in-out duration-200 overflow-hidden",
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
