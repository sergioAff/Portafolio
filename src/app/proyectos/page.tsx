"use client";
import { useTranslation } from "react-i18next";
import { Links } from "@/components/Links";
import { proyectos } from "@/data/proyectos";

export default function Page() {
  const { t } = useTranslation(["Proyectos"]);
  return (
    <div className=" px-3 animate-fadeBottom-for-contacts flex flex-col gap-5"></div>
  );
}
