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
        "lg:absolute left-24 xl:left-14 flex md:flex-col items-center hover:ring ring-orange-500/80 ring-offset-2 transition-all duration-150 ease-in-out rounded-lg bg-white/20 shadow-lg px-2 md:px-0 py-1 cursor-pointer overflow-hidden md:overflow-hidden ",
        {
          "max-w-12 md:max-w-full md:max-h-8": !isOpen,
          "max-w-full md:max-h-screen md:py-3": isOpen,
        }
      )}
    >
      <span className="font-semibold tracking-wider text-orange-700 hover:text-orange-800 md:mb-5">
        {isOpen ? (
          <FolderOpenIcon className="w-7" />
        ) : (
          <FolderIcon className="w-7" />
        )}
      </span>
      <ul className="flex md:flex-col gap-4 ml-8 h-full  md:w-full justify-start items-start">
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
