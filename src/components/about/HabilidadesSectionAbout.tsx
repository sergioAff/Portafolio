import { useTranslation } from "react-i18next";
import { SectionAbout2 } from "./SectionAbout2";
import { HabilidadesBlandas } from "@/data/about/Hab_Blandas";
import { ReactNode } from "react";
import { SparklesIcon } from "@heroicons/react/24/outline";

interface HabilidadesSectionInterface {
  up: ReactNode;
}

export function HabilidadesSection({ up }: HabilidadesSectionInterface) {
  const { t } = useTranslation(["about"]);
  const habilidadesBlandas = HabilidadesBlandas();
  return (
    <div className="flex-2">
      <SectionAbout2
        icon={<SparklesIcon />}
        title={t("habilidades_blandas.titulo")}
        body={
          <ul className="flex flex-col gap-2">
            {habilidadesBlandas.map((habilidad, index) => (
              <li key={index} className="flex items-center">
                <div className="w-3 h-3 rounded-full border-2 border-orange-600 bg-transparent flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-orange-600"></div>
                </div>
                <span className="ml-3 text-lg font-semibold lg:text-xl">
                  {habilidad}
                </span>
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
