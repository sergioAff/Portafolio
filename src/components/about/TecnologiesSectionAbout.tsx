import { useTranslation } from "react-i18next";
import { FrontendSection } from "@/components/about/FrontendSection";
import { BackendSection } from "@/components/about/BackendSection";
import { OtrasTecnologías } from "@/components/about/OtrasTecnologiasSectionAbout";
import { ReactNode } from "react";
import { SectionAbout2 } from "@/components/about/SectionAbout2";
import { CodeBracketSquareIcon } from "@heroicons/react/24/outline";

interface TecnologiesSectionInterface {
  up: ReactNode;
  allOpen: boolean;
}

export function TecnologiesSectionAbout({
  up,
  allOpen,
}: TecnologiesSectionInterface) {
  const { t } = useTranslation(["about"]);
  return (
    <div className="flex-1 ">
      <SectionAbout2
        icon={<CodeBracketSquareIcon />}
        title={t("tecnologias.titulo")}
        allOpen={allOpen}
        body={
          <div className="flex flex-col">
            <FrontendSection up={up} />
            <div className=" flex flex-col lg:flex-row lg:gap-3">
              <BackendSection up={up} />
              <OtrasTecnologías up={up} />
            </div>{" "}
          </div>
        }
        estilos={""}
        up={up}
      />{" "}
    </div>
  );
}
