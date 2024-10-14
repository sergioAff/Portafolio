"use client";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { SectionAbout } from "@/components/about/SectionAbout";
import { TecnologiesSectionAbout } from "@/components/about/TecnologiesSectionAbout";
import { HabilidadesSection } from "@/components/about/HabilidadesSectionAbout";
import {
  UserIcon,
  AcademicCapIcon,
  CheckCircleIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

const up = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.5 18.75 7.5-7.5 7.5 7.5"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.5 12.75 7.5-7.5 7.5 7.5"
    />
  </svg>
);
export default function Page() {
  const { t } = useTranslation(["about"]);
  const [allOpen, setAllOpen] = useState<boolean>(true);

  const toggleAllSections = (isOpen: boolean) => {
    setAllOpen(isOpen);
  };

  return (
    <motion.div
      className="flex items-start justify-center min-h-[80dvh]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex flex-col justify-center gap-3 mx-5 py-8 items-center sm:max-w-[80%] md:max-w-[80%] lg:max-w-[80%]">
        <div className="text-base font-semibold tracking-wide flex gap-2 w-full">
          {!allOpen ? (
            <button
              onClick={() => toggleAllSections(true)}
              className="flex items-center rounded-lg bg-orange-500 dark:bg-orange-night dark:hover:bg-orange-500/90 px-2 py-1 shadow-lg hover:bg-orange-600 text-white dark:text-orange-50 transition-transform transform  duration-200 ease-in-out"
            >
              <ChevronDownIcon className="w-5 h-5 mr-1" /> {t("Desplegar")}
            </button>
          ) : (
            <button
              onClick={() => toggleAllSections(false)}
              className="flex items-center rounded-lg bg-orange-500 dark:bg-orange-night dark:hover:bg-orange-500/90 px-2 py-1 shadow-lg hover:bg-orange-600 text-white dark:text-orange-50 transition-transform transform duration-200 ease-in-out"
            >
              <ChevronUpIcon className="w-5 h-5 mr-1" /> {t("Recoger")}
            </button>
          )}
        </div>

        <SectionAbout
          icon={<UserIcon />}
          text={t("personal.texto")}
          title={t("personal.titulo")}
          estilos="w-full"
          up={up}
          allOpen={allOpen}
        />
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <div className="flex-1">
            <SectionAbout
              icon={<AcademicCapIcon />}
              text={t("profesion.texto")}
              title={t("profesion.titulo")}
              estilos="flex-1"
              up={up}
              allOpen={allOpen}
            />
          </div>
          <div className="flex-1">
            <SectionAbout
              icon={<CheckCircleIcon />}
              text={t("metas.texto")}
              title={t("metas.titulo")}
              estilos="flex-1"
              up={up}
              allOpen={allOpen}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2 w-full">
          <TecnologiesSectionAbout up={up} allOpen={allOpen} />
          <HabilidadesSection up={up} allOpen={allOpen} />
        </div>
      </div>
    </motion.div>
  );
}
