"use client";
import { useTranslation } from "react-i18next";
import { Proyectos } from "@/data/proyectos";
import { PortfolioBox } from "@/components/proyectos/PortfolioBox";

export default function Page() {
  const { t } = useTranslation(["Proyectos"]);
  const proyectos = Proyectos();
  return (
    <div className="animate-fadeBottom-for-contacts flex flex-col justify-center h-full gap-5 px-10">
      <ul className=" z-10 grid max-w-5xl gap-6 mx-auto mt-4 md:grid-cols-3 sm:grid-cols-2">
        {proyectos.map((proyecto) => (
          <PortfolioBox key={proyecto.id} data={proyecto} />
        ))}
      </ul>
    </div>
  );
}
