"use client";
import { useTranslation } from "react-i18next";
import { CoverParticles } from "@/components/CoverParticles";
import { DescargarCv } from "@/components/home/DescagarCV";
import { AvatarComponent } from "@/components/home/Avatar";

export default function Page() {
  const { t } = useTranslation(["welcome"]);
  return (
    <main className="flex relative flex-col gap-5 lg:gap-0 lg:flex-row items-center justify-center px-2 md:px-10 pt-3 md:pt-0 pb-10">
      <CoverParticles />
      <div className="flex flex-col h-auto w-4/5 sm:w-3/5 lg:w-2/5 items-start">
        <hgroup className="w-full">
          <p className="mt-4 text-4xl sm:text-5xl xl:text-6xl text-gray-600 animate-fadeRight select-none">
            {t("Soy")}
          </p>
          <h1 className="text-orange-500  font-bold text-6xl sm:text-7xl xl:text-8xl animate-fadeLeft">
            Sergio Fernández<span className="animate-pulse">.</span>
          </h1>
          <p className="mt-2 text-lg sm:text-xl xl:text-2xl text-gray-500  animate-fadeBottom font-semibold">
            {t("profesion")}{" "}
            <span className="text-orange-500  font-bold text-xl">
              &lt;/&gt;.
            </span>
          </p>
        </hgroup>
        <DescargarCv />
      </div>
      <AvatarComponent />
    </main>
  );
}
