import { useTranslation } from "react-i18next";
import { SectionAbout2 } from "./SectionAbout2";
import { HabilidadesBlandas } from "@/data/about/Hab_Blandas";
import { ReactNode } from "react";
import { SparklesIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface HabilidadesSectionInterface {
  up: ReactNode;
  allOpen: boolean;
}

export function HabilidadesSection({
  up,
  allOpen,
}: HabilidadesSectionInterface) {
  const { t } = useTranslation(["about"]);
  const habilidadesBlandas = HabilidadesBlandas();
  return (
    <div className="flex-2">
      <SectionAbout2
        icon={<SparklesIcon />}
        allOpen={allOpen}
        title={t("habilidades_blandas.titulo")}
        body={
          <ul className="flex flex-col gap-2">
            {habilidadesBlandas.map((habilidad, index) => (
              <li key={index} className="flex items-center">
                <div className="w-3 h-3 rounded-full border-2 border-orange-600 bg-transparent flex items-center justify-center">
                  <span className="w-1 h-1 rounded-full bg-orange-600"></span>
                </div>
                <Link
                  className="ml-3 cursor-pointer text-base text-gray-700 font-semibold lg:text-lg transition-colors ease-in-out duration-200 hover:text-orange-500"
                  href={`https://www.google.com/search?q=${encodeURIComponent(
                    habilidad
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {habilidad}
                </Link>
              </li>
            ))}
          </ul>
        }
        estilos={""}
        up={up}
      />
    </div>
  );
}
