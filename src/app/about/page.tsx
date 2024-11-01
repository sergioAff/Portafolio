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
import { BlurButtons } from "@/components/BlurButtons";

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
      <div className="flex flex-col justify-center gap-3 mx-5 py-8 mb-12 items-center sm:max-w-[80%] md:max-w-[80%]">
        <button
          onClick={() => toggleAllSections(!allOpen)}
          className="self-start relative px-2 py-1 rounded-lg hover:bg-transparent hover:ring-2 outline-none hover:ring-orange-500 shadow-lg shadow-orange-600/50 transition-all ease-in duration-100 hover:text-gray-700 active:scale-95 font-semibold bg-orange-500 text-gray-100"
        >
          <BlurButtons proyect={false} />
          {allOpen ? (
            <div className=" flex items-center justify-center">
              <ChevronUpIcon className="w-5 h-5 mr-1" />
              {t("Recoger")}
            </div>
          ) : (
            <div className=" flex items-center justify-center">
              <ChevronDownIcon className="w-5 h-5 mr-1" /> {t("Desplegar")}
            </div>
          )}
        </button>
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
        <SectionAbout
          icon={<CheckCircleIcon />}
          text={t("profesiona_summary.texto")}
          title={t("profesiona_summary.titulo")}
          estilos="flex-1"
          up={up}
          allOpen={allOpen}
        />
        <div className="flex flex-col md:flex-row gap-2 w-full">
          <TecnologiesSectionAbout up={up} allOpen={allOpen} />
          <HabilidadesSection up={up} allOpen={allOpen} />
        </div>
      </div>
    </motion.div>
  );
}
