import { ReactNode, useEffect, useState } from "react";
import clsx from "clsx";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

interface SectionAbout2Interface {
  icon: ReactNode;
  title?: string;
  body: ReactNode;
  estilos: string;
  up: ReactNode;
  allOpen: boolean;
}

export function SectionAbout2({
  icon,
  title,
  body,
  allOpen,
}: SectionAbout2Interface) {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  useEffect(() => {
    setIsOpen(allOpen);
  }, [allOpen]);

  return (
    <div className="text-gray-900 h-auto glass rounded-2xl shadow-glass hover:shadow-glass-hover transition-all duration-300 ease-out px-4 py-3">
      <div className="flex w-full flex-wrap justify-between items-center pb-2">
        <div className="flex justify-between items-center gap-2">
          <span className="w-7 text-orange-500 hidden sm:inline-block">
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
          "overflow-hidden transition-all ease-out duration-300 font-semibold",
          {
            "max-h-[1200px] opacity-100": isOpen,
            "max-h-0 opacity-0": !isOpen,
          }
        )}
      >
        {body}
      </div>
    </div>
  );
}
