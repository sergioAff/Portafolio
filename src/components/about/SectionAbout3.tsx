import { ReactNode, useState } from "react";
import clsx from "clsx";

interface SectionAbout3Interface {
  title?: string;
  body: ReactNode;
  up: ReactNode;
}

export function SectionAbout3({ title, body, up }: SectionAbout3Interface) {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <div
      className={` w-full p-2 rounded-lg transition-transform duration-150 ease-in-out border-b-2 border-gray-200 `}
    >
      <div className=" flex w-full justify-between items-center pb-2">
        <div className=" flex justify-between items-center gap-2">
          <h3 className=" font-semibold text-2xl 2xl:text-3xl tracking-wide text-orange-700">
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
