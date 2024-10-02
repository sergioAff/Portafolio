"use client";
import { useTranslation } from "react-i18next";
import { Links } from "@/components/Links";
import { proyectos } from "@/data/proyectos";

export default function Page() {
  const { t } = useTranslation(["Proyectos"]);
  return (
    <div className=" px-3 animate-fadeBottom-for-contacts flex flex-col gap-5">
      <h3 className="text-3xl w-full text-center ">{t("Proyectos")}</h3>
      <ul className=" bg-white w-full grid pb-10">
        {proyectos.map((proyecto) => (
          <li key={proyecto.id}>
            <Links direccion={proyecto.link} nombre={proyecto.nombre}></Links>
          </li>
        ))}
      </ul>
    </div>
  );
}
