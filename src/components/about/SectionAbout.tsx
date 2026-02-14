import { ReactNode, useEffect, useState } from "react";
import clsx from "clsx";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

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
  allOpen,
}: SectionAboutInterface) {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  useEffect(() => {
    setIsOpen(allOpen);
  }, [allOpen]);

  return (
    <div
      className={`${estilos} text-gray-900 glass rounded-2xl shadow-glass hover:shadow-glass-hover transition-all duration-300 ease-out p-4`}
    >
      <div className="flex w-full justify-between items-center pb-2">
        <div className="flex justify-between items-center gap-2">
          <span className="w-7 text-orange-500 hidden sm:inline-block overflow-hidden">
            {icon}
          </span>
          <h3 className="font-semibold text-2xl sm:text-3xl tracking-wide gradient-text">
            {title}
          </h3>
        </div>
        <button
          className={clsx(
            "p-1 rounded-full hover:bg-orange-50 transition-all ease-out duration-300",
            { "rotate-0": isOpen, "rotate-180": !isOpen }
          )}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Collapse section" : "Expand section"}
        >
          <ChevronUpIcon className="w-5 h-5 text-gray-500 hover:text-orange-500 transition-colors duration-200" />
        </button>
      </div>
      <div
        className={clsx(
          "transition-all ease-out duration-300 overflow-hidden",
          {
            "max-h-[800px] opacity-100": isOpen,
            "max-h-0 opacity-0": !isOpen,
          }
        )}
      >
        <p className="text-base text-gray-700 font-semibold lg:text-lg leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
}
