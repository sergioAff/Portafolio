import { motion } from "framer-motion";
import { useState } from "react";
import { FolderOpenIcon, FolderIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { tecnologiesArray } from "@/data/tecnologies";
import { BlurButtons } from "@/components/BlurButtons";

interface FilterProps {
  onFilterChange: (selected: string[]) => void;
}

export const Filter = ({ onFilterChange }: FilterProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string[]>([]);

  function toggleTecnology(tecnology: string) {
    let newSelected;
    if (selected.includes(tecnology)) {
      // Si ya está seleccionada, la quitamos
      newSelected = selected.filter((t) => t !== tecnology);
    } else {
      // Si no está seleccionada, la agregamos
      newSelected = [...selected, tecnology];
    }
    setSelected(newSelected);
    onFilterChange(newSelected);
  }

  return (
    <motion.div
      className={clsx(
        "xl:absolute left-0 group flex md:flex-col items-center hover:ring ring-orange-500/80 ring-offset-2 transition-all duration-100 ease-in-out rounded-lg shadow-lg cursor-pointer overflow-scroll hover:bg-white/20 hover:ring-orange-500 font-semibold h-auto ocultar-scroll outline-none py-1.5 md:py-0",
        {
          "max-w-11 md:max-w-full md:max-h-8 shadow-orange-600/50 bg-orange-500":
            !isOpen,
          "max-w-full md:py-3 bg-white/30 h-full xl:max-h-[1070px]": isOpen,
        }
      )}
    >
      <BlurButtons proyect />
      <span
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          "md:mb-4 flex items-start justify-center w-full px-2 md:px-3",
          {
            "text-orange-700 hover:text-orange-800": isOpen,
            "text-gray-100 group-hover:text-orange-500": !isOpen,
          }
        )}
      >
        {isOpen ? (
          <FolderOpenIcon className="min-w-8" />
        ) : (
          <FolderIcon className="min-w-8" />
        )}
      </span>
      <ul className="flex md:flex-col gap-8 ml-8 md:ml-0">
        {tecnologiesArray.map((tecnology, idx) => (
          <li
            key={idx}
            className={clsx(
              "hover:ring ring-orange-500 p-1.5 hover:bg-gray-100 transition-all duration-150 ease-in-out rounded-full cursor-pointer",
              { ring: selected.includes(tecnology.key ?? "") }
            )}
            onClick={() => toggleTecnology(tecnology.key ?? "")}
          >
            {tecnology}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
