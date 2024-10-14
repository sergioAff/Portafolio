"use client";
import { useTranslation } from "react-i18next";
import { CoverParticles } from "@/components/CoverParticles";
import { DescargarCv } from "@/components/home/DescagarCV";

export default function Page() {
  const { t } = useTranslation(["welcome"]);
  return (
    <main className="flex relative flex-col items-center justify-center h-auto ">
      <CoverParticles />
      <div className="flex flex-col h-auto w-4/5 sm:w-3/5 lg:w-2/5 items-start justify-center px-2 py-10 md:px-10">
        <hgroup className="w-full select-none">
          <p className="mt-4 text-4xl sm:text-5xl text-gray-600 dark:text-white/80 animate-fadeRight select-none">
            {t("Soy")}
          </p>

          <h1 className="text-orange-500 dark:text-orange-night font-bold text-6xl sm:text-7xl animate-fadeLeft">
            Sergio Fernández<span className="animate-pulse">.</span>
          </h1>
          <p className="mt-2 text-lg sm:text-xl text-gray-500 dark:text-white/80  animate-fadeBottom font-semibold">
            {t("profesion")}{" "}
            <span className="text-orange-500 dark:text-orange-night font-bold text-xl">
              &lt;/&gt;.
            </span>
          </p>
        </hgroup>
        <DescargarCv />
      </div>
    </main>
  );
}
