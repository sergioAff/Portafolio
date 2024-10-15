import { motion } from "framer-motion";
import { useState } from "react";
import { FolderOpenIcon, FolderIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { tecnologiesArray } from "@/data/tecnologies";

export const Filter = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string[]>([]);

  function onAddTecnology(tecnology: string) {
    alert(tecnology);
  }

  return (
    <motion.div
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      className={clsx(
        "xl:absolute left-9 group flex md:flex-col items-center hover:ring ring-orange-500/80 ring-offset-2 transition-all duration-100 ease-in-out rounded-lg shadow-lg px-2 md:px-3 py-1 cursor-pointer overflow-hidden hover:bg-transparent hover:outline-none hover:ring-orange-500 active:scale-95 font-semibold h-auto",
        {
          "max-w-11 md:max-w-full md:max-h-8  shadow-orange-600/50 bg-orange-500":
            !isOpen,
          "max-w-full md:max-h-[1070px] md:py-3 bg-white/30": isOpen,
        }
      )}
    >
      <span
        className={clsx("md:mb-4 flex items-start justify-center", {
          "text-orange-700 hover:text-orange-800": isOpen,
          "text-gray-100 group-hover:text-orange-500": !isOpen,
        })}
      >
        {isOpen ? (
          <FolderOpenIcon className="w-7" />
        ) : (
          <FolderIcon className="w-7" />
        )}
      </span>
      <ul className="flex md:flex-col gap-8 ml-8 md:ml-0 ">
        {tecnologiesArray.map((tecnology) => (
          <li
            key={tecnology.key}
            className=" hover:ring ring-orange-500 p-1.5 hover:bg-gray-100 transition-all duration-150 ease-in-out rounded-full "
          >
            {tecnology}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
