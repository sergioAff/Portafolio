import { useTranslation } from "react-i18next";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { motion } from "framer-motion";
import { BlurButtons } from "@/components/BlurButtons";

export const DescargarCv = () => {
  const { t } = useTranslation("home");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className=" relative flex flex-col items-start justify-start mt-6 min-h-32">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          "animate-fadeBottomForCV relative  px-2 py-1 rounded-lg hover:bg-transparent hover:ring-2 hover:outline-none hover:ring-orange-500 shadow-lg text-base shadow-orange-600/50 transition-all ease-in duration-100  active:scale-95 font-semibold   overflow-hidden",
          {
            "bg-orange-500 text-gray-100 hover:text-gray-700": !isOpen,
            "bg-transparent text-gray-700 ring-orange-500 ring-2": isOpen,
          }
        )}
      >
        <BlurButtons />
        <p className=" flex gap-1">
          {t("Descargar")} CV
          <span>
            <DocumentArrowDownIcon className="w-6" />
          </span>
        </p>
      </button>
      {isOpen && (
        <motion.div
          className=" flex flex-col gap-2 items-center justify-center mt-5 w-full"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <Link
            download={"CV Sergio Fernández.pdf"}
            onClick={() => setIsOpen(false)}
            className=" text-lg hover:scale-105 hover:text-orange-500 tracking-wide active:scale-95 transition-all ease-in-out duration-150 font-semibold"
            rel="noopener noreferrer"
            href={
              "https://drive.google.com/uc?export=download&id=1-JXYgTQ8tPT8VqkQtwP1u6c3SDTnPUst"
            }
            target="_blank"
          >
            Español
          </Link>
          <Link
            download={"CV Sergio Fernández.pdf"}
            className=" text-lg hover:scale-105 tracking-wide hover:text-orange-500 active:scale-95 transition-all ease-in-out duration-150 font-semibold"
            onClick={() => setIsOpen(false)}
            rel="noopener noreferrer"
            href={
              "https://drive.google.com/uc?export=download&id=1-JXYgTQ8tPT8VqkQtwP1u6c3SDTnPUst"
            }
            target="_blank"
          >
            English
          </Link>
        </motion.div>
      )}
    </div>
  );
};
